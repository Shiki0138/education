// アプリケーションの初期化
let userData = {
    level: 1,
    totalPoints: 0,
    streakDays: 0,
    lastStudyDate: null,
    studyMinutesToday: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    weeklyData: [],
    badges: [],
    parentEmail: localStorage.getItem('parentEmail') || ''
};

// ローカルストレージからデータを読み込み
function loadUserData() {
    const saved = localStorage.getItem('userData');
    if (saved) {
        userData = JSON.parse(saved);
    }
    updateUI();
}

// データを保存
function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

// UI更新
function updateUI() {
    document.getElementById('userLevel').textContent = userData.level;
    document.getElementById('streakDays').textContent = userData.streakDays;
    document.getElementById('totalPoints').textContent = userData.totalPoints;
    document.getElementById('completedMinutes').textContent = userData.studyMinutesToday;
    
    const accuracy = userData.questionsAnswered > 0 
        ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100) 
        : 0;
    document.getElementById('accuracyRate').textContent = accuracy;
    
    const progressPercentage = Math.min((userData.studyMinutesToday / 60) * 100, 100);
    document.getElementById('dailyProgress').style.width = progressPercentage + '%';
}

// 画面切り替え
function showMainScreen() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('mainScreen').classList.add('active');
}

function showProgress() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('progressScreen').classList.add('active');
    drawProgressChart();
}

function showBadges() {
    alert('バッジ機能は開発中です！頑張って学習を続けてね！');
}

function showParentReport() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('reportScreen').classList.add('active');
    updateReportData();
}

// 500問の大規模漢字データベースを使用
const kanjiQuestions = typeof all500KanjiProblems !== 'undefined' 
    ? all500KanjiProblems 
    : (typeof balancedKanjiProblems !== 'undefined' 
        ? balancedKanjiProblems 
        : examKanjiData.filter(q => q.type === "reading").map(q => ({
            question: q.question,
            options: q.options,
            correct: q.correct,
            hint: q.hint,
            explanation: q.explanation
        })));

let currentKanjiIndex = 0;
let kanjiScore = 0;

// 漢字練習開始
function startKanjiPractice() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('kanjiScreen').classList.add('active');
    currentKanjiIndex = 0;
    kanjiScore = 0;
    showKanjiQuestion();
}

// 漢字問題表示（ランダム出題）
function showKanjiQuestion() {
    if (currentKanjiIndex >= 10) {
        finishKanjiPractice();
        return;
    }
    
    const questionNum = currentKanjiIndex + 1;
    document.getElementById('kanjiQuestionNum').textContent = questionNum;
    
    // ランダムに問題を選択（重複回避）
    const availableQuestions = kanjiQuestions.filter((_, index) => 
        !userData.usedKanjiQuestions || !userData.usedKanjiQuestions.includes(index)
    );
    
    if (availableQuestions.length === 0) {
        // 全問題を使い切った場合はリセット
        userData.usedKanjiQuestions = [];
    }
    
    const randomIndex = Math.floor(Math.random() * (availableQuestions.length || kanjiQuestions.length));
    const question = availableQuestions[randomIndex] || kanjiQuestions[randomIndex];
    
    // 使用済み問題として記録
    const originalIndex = kanjiQuestions.findIndex(q => q.id === question.id);
    if (!userData.usedKanjiQuestions) userData.usedKanjiQuestions = [];
    userData.usedKanjiQuestions.push(originalIndex);
    
    document.getElementById('kanjiQuestion').textContent = question.question;
    
    const optionsHTML = question.options.map((option, index) => 
        `<button onclick="checkKanjiAnswer(${index}, ${originalIndex})">${index + 1}. ${option}</button>`
    ).join('');
    
    document.getElementById('kanjiOptions').innerHTML = optionsHTML;
    document.getElementById('kanjiHint').classList.remove('show');
    document.getElementById('kanjiHint').textContent = '';
}

// 漢字の答え合わせ
function checkKanjiAnswer(selected, questionIndex = null) {
    const question = questionIndex !== null ? kanjiQuestions[questionIndex] : kanjiQuestions[currentKanjiIndex % kanjiQuestions.length];
    const buttons = document.querySelectorAll('#kanjiOptions button');
    
    if (selected === question.correct) {
        buttons[selected].classList.add('correct');
        kanjiScore += 10;
        userData.correctAnswers++;
        userData.totalPoints += 10;
        
        setTimeout(() => {
            currentKanjiIndex++;
            userData.questionsAnswered++;
            saveUserData();
            showKanjiQuestion();
        }, 1000);
    } else {
        buttons[selected].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        userData.questionsAnswered++;
        
        setTimeout(() => {
            currentKanjiIndex++;
            saveUserData();
            showKanjiQuestion();
        }, 2000);
    }
    
    document.getElementById('kanjiScore').textContent = kanjiScore;
    updateUI();
}

// ヒント表示
function showKanjiHint() {
    const question = kanjiQuestions[currentKanjiIndex % kanjiQuestions.length];
    document.getElementById('kanjiHint').textContent = question.hint;
    document.getElementById('kanjiHint').classList.add('show');
}

// 漢字練習終了
function finishKanjiPractice() {
    showResult('漢字練習完了！', kanjiScore, 10);
    userData.studyMinutesToday += 10;
    saveUserData();
    updateUI();
}

// 受験レベルの読解問題を使用
const readingPassages = examReadingData.map(data => {
    // 各文章から最初の選択問題を抽出
    const firstQuestion = data.questions.find(q => q.options);
    return {
        passage: data.passage.trim(),
        question: firstQuestion.question,
        options: firstQuestion.options,
        correct: firstQuestion.correct,
        explanation: firstQuestion.explanation,
        type: data.type
    };
});

let currentReadingIndex = 0;
let readingStartTime = null;

// 読解問題開始
function startReading() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('readingScreen').classList.add('active');
    currentReadingIndex = 0;
    readingStartTime = Date.now();
    showReadingQuestion();
    startReadingTimer();
}

// 読解問題表示
function showReadingQuestion() {
    if (currentReadingIndex >= readingPassages.length) {
        finishReading();
        return;
    }
    
    const passage = readingPassages[currentReadingIndex];
    document.getElementById('passageText').textContent = passage.passage;
    document.getElementById('readingQuestion').textContent = passage.question;
    
    const optionsHTML = passage.options.map((option, index) => 
        `<button onclick="checkReadingAnswer(${index})">${index + 1}. ${option}</button>`
    ).join('');
    
    document.getElementById('readingOptions').innerHTML = optionsHTML;
}

// 読解の答え合わせ
function checkReadingAnswer(selected) {
    const passage = readingPassages[currentReadingIndex];
    const buttons = document.querySelectorAll('#readingOptions button');
    
    if (selected === passage.correct) {
        buttons[selected].classList.add('correct');
        userData.correctAnswers++;
        userData.totalPoints += 20;
        
        setTimeout(() => {
            currentReadingIndex++;
            userData.questionsAnswered++;
            saveUserData();
            showReadingQuestion();
        }, 1500);
    } else {
        buttons[selected].classList.add('incorrect');
        buttons[passage.correct].classList.add('correct');
        userData.questionsAnswered++;
        
        setTimeout(() => {
            currentReadingIndex++;
            saveUserData();
            showReadingQuestion();
        }, 2000);
    }
    
    updateUI();
}

// タイマー
function startReadingTimer() {
    const timerInterval = setInterval(() => {
        if (document.getElementById('readingScreen').classList.contains('active')) {
            const elapsed = Math.floor((Date.now() - readingStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            document.getElementById('readingTimer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// 読解練習終了
function finishReading() {
    const timeSpent = Math.floor((Date.now() - readingStartTime) / 60000);
    userData.studyMinutesToday += timeSpent;
    showResult('読解問題完了！', userData.totalPoints, readingPassages.length);
    saveUserData();
    updateUI();
}

// 語彙力強化
function startVocabulary() {
    alert('語彙力強化モードは現在開発中です！\nことわざ、慣用句、四字熟語などを楽しく学べるようになります。');
}

// 過去問演習
function showPastExams() {
    alert('過去問演習は12月から利用可能になります！\n今は基礎力を固めることに集中しましょう。');
}

// 結果表示
function showResult(title, points, questions) {
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('earnedPoints').textContent = `+${points}`;
    
    const accuracy = questions > 0 
        ? Math.round((userData.correctAnswers / questions) * 100) 
        : 0;
    document.getElementById('resultAccuracy').textContent = `${accuracy}%`;
    
    let icon = '🎉';
    let message = '素晴らしい成績です！';
    
    if (accuracy >= 90) {
        icon = '🏆';
        message = '完璧！この調子で頑張ろう！';
    } else if (accuracy >= 70) {
        icon = '😊';
        message = 'よく頑張りました！';
    } else if (accuracy >= 50) {
        icon = '💪';
        message = 'もう少し頑張ろう！';
    } else {
        icon = '📚';
        message = '復習してもう一度挑戦しよう！';
    }
    
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultMessage').textContent = message;
    
    document.getElementById('resultModal').classList.add('show');
    
    // レベルアップチェック
    if (userData.totalPoints >= userData.level * 100) {
        userData.level++;
        setTimeout(() => {
            alert(`🎊 レベルアップ！\nレベル ${userData.level} になりました！`);
        }, 2000);
    }
}

// 結果を閉じる
function closeResult() {
    document.getElementById('resultModal').classList.remove('show');
    showMainScreen();
}

// 進捗グラフ描画
function drawProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // 過去7日間のダミーデータ
    const labels = ['月', '火', '水', '木', '金', '土', '日'];
    const data = [30, 45, 60, 40, 55, 50, userData.studyMinutesToday];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '学習時間（分）',
                data: data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    });
    
    // 週間統計表示
    const weeklyStatsHTML = `
        <div class="weekly-stat-item">
            <span>合計学習時間</span>
            <span>${data.reduce((a, b) => a + b, 0)}分</span>
        </div>
        <div class="weekly-stat-item">
            <span>平均正答率</span>
            <span>75%</span>
        </div>
        <div class="weekly-stat-item">
            <span>解いた問題数</span>
            <span>142問</span>
        </div>
    `;
    document.getElementById('weeklyStats').innerHTML = weeklyStatsHTML;
    
    // 弱点分析表示
    const weaknessHTML = `
        <div class="weakness-item">
            <strong>読解問題</strong> - 主語と述語の関係
        </div>
        <div class="weakness-item">
            <strong>漢字</strong> - 6年生レベルの音読み
        </div>
        <div class="weakness-item">
            <strong>語彙</strong> - 慣用句の意味理解
        </div>
    `;
    document.getElementById('weaknessList').innerHTML = weaknessHTML;
}

// レポートデータ更新
function updateReportData() {
    document.getElementById('reportTime').textContent = `${userData.studyMinutesToday}分`;
    document.getElementById('reportQuestions').textContent = `${userData.questionsAnswered}問`;
    
    const accuracy = userData.questionsAnswered > 0 
        ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100) 
        : 0;
    document.getElementById('reportAccuracy').textContent = `${accuracy}%`;
    
    if (userData.parentEmail) {
        document.getElementById('parentEmail').value = userData.parentEmail;
    }
    
    // 詳細レポート
    const detailedHTML = `
        <h3>学習内容の詳細</h3>
        <div class="report-card">
            <div class="report-item">
                <span class="report-label">漢字練習</span>
                <span class="report-value">10分</span>
            </div>
            <div class="report-item">
                <span class="report-label">読解問題</span>
                <span class="report-value">15分</span>
            </div>
            <div class="report-item">
                <span class="report-label">獲得ポイント</span>
                <span class="report-value">${userData.totalPoints}pt</span>
            </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 10px;">
            <p style="color: #0066cc; font-size: 14px;">
                💡 今日のアドバイス：読解問題での正答率が向上しています。明日は語彙力強化にも取り組みましょう。
            </p>
        </div>
    `;
    document.getElementById('detailedReport').innerHTML = detailedHTML;
}

// メールアドレス保存
function saveEmail() {
    const email = document.getElementById('parentEmail').value;
    if (email) {
        userData.parentEmail = email;
        localStorage.setItem('parentEmail', email);
        saveUserData();
        alert('メールアドレスを保存しました');
    }
}

// レポート送信
function sendReport() {
    if (!userData.parentEmail) {
        alert('保護者のメールアドレスを入力してください');
        return;
    }
    
    // 実際の送信機能は、バックエンドAPIが必要
    const reportText = `
【本日の学習レポート】
日付：${new Date().toLocaleDateString('ja-JP')}
学習時間：${userData.studyMinutesToday}分
解いた問題：${userData.questionsAnswered}問
正答率：${userData.questionsAnswered > 0 ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100) : 0}%
獲得ポイント：${userData.totalPoints}pt
現在のレベル：${userData.level}

お子様は今日も頑張って学習しました！
明日も継続して学習することが大切です。
    `;
    
    console.log('送信するレポート:', reportText);
    alert('レポートを送信しました！\n（※実際の送信にはサーバー設定が必要です）');
}

// 日付表示更新
function updateDateDisplay() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    document.getElementById('dateDisplay').textContent = dateStr;
    
    // 連続学習日数の確認
    const todayStr = today.toDateString();
    if (userData.lastStudyDate !== todayStr) {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (userData.lastStudyDate === yesterday.toDateString()) {
            userData.streakDays++;
        } else if (userData.lastStudyDate) {
            userData.streakDays = 1;
        } else {
            userData.streakDays = 1;
        }
        
        userData.lastStudyDate = todayStr;
        userData.studyMinutesToday = 0;
        userData.questionsAnswered = 0;
        userData.correctAnswers = 0;
        saveUserData();
    }
    
    // 励ましメッセージ
    const messages = [
        "今日も頑張ろう！合格への第一歩！",
        "毎日の積み重ねが力になる！",
        "君ならできる！応援してるよ！",
        "昨日より今日、一歩ずつ前進！",
        "継続は力なり！ファイト！"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('welcomeText').textContent = randomMessage;
}

// アプリ起動時の処理
window.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    updateDateDisplay();
    
    // 1分ごとに学習時間を更新
    setInterval(() => {
        if (document.querySelector('.screen:not(#mainScreen)').classList.contains('active')) {
            userData.studyMinutesToday++;
            saveUserData();
            updateUI();
        }
    }, 60000);
});