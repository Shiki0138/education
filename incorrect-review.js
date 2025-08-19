// 間違い問題復習システム

class IncorrectReviewSystem {
    constructor() {
        this.currentReviewIndex = 0;
        this.reviewQuestions = [];
    }

    // 復習画面を表示
    showReview() {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('incorrectReviewScreen').classList.add('active');
        
        this.updateReviewDisplay();
    }

    // 復習画面の表示を更新
    updateReviewDisplay() {
        const incorrectProblems = userData.todayIncorrectProblems || [];
        document.getElementById('incorrectCount').textContent = incorrectProblems.length;

        if (incorrectProblems.length === 0) {
            this.showNoIncorrectProblems();
            return;
        }

        this.showIncorrectSummary(incorrectProblems);
        this.showIncorrectList(incorrectProblems);
    }

    // 間違い問題がない場合の表示
    showNoIncorrectProblems() {
        document.getElementById('reviewSummary').innerHTML = `
            <div class="no-incorrect-card">
                <div class="no-incorrect-icon">🎉</div>
                <h3>素晴らしい！</h3>
                <p>今日はまだ間違えた問題がありません。<br>この調子で頑張りましょう！</p>
            </div>
        `;
        document.getElementById('incorrectList').innerHTML = '';
        document.querySelector('.review-actions').style.display = 'none';
    }

    // 間違い問題サマリー表示
    showIncorrectSummary(problems) {
        const gradeStats = this.analyzeGradeDistribution(problems);
        const timeStats = this.analyzeTimeDistribution(problems);

        const summaryHTML = `
            <div class="review-summary-card">
                <h3>📊 間違い分析</h3>
                <div class="analysis-grid">
                    <div class="analysis-item">
                        <span class="analysis-label">総間違い数</span>
                        <span class="analysis-value">${problems.length}問</span>
                    </div>
                    <div class="analysis-item">
                        <span class="analysis-label">最も多い学年</span>
                        <span class="analysis-value">${gradeStats.mostCommon}</span>
                    </div>
                    <div class="analysis-item">
                        <span class="analysis-label">最新の間違い</span>
                        <span class="analysis-value">${timeStats.latest}</span>
                    </div>
                </div>
                <div class="quick-advice">
                    💡 <strong>アドバイス:</strong> ${this.getAdvice(gradeStats, problems.length)}
                </div>
            </div>
        `;
        
        document.getElementById('reviewSummary').innerHTML = summaryHTML;
        document.querySelector('.review-actions').style.display = 'block';
    }

    // 間違い問題一覧表示
    showIncorrectList(problems) {
        const listHTML = problems.map((problem, index) => `
            <div class="incorrect-item" data-index="${index}">
                <div class="incorrect-header">
                    <span class="incorrect-number">${index + 1}.</span>
                    <span class="incorrect-time">${problem.timestamp}</span>
                    <span class="incorrect-grade">${problem.grade || '学年不明'}</span>
                </div>
                <div class="incorrect-question">${problem.question}</div>
                <div class="incorrect-answers">
                    <div class="student-answer">
                        <span class="answer-label">あなたの回答:</span>
                        <span class="answer-value incorrect">${problem.studentAnswer}</span>
                    </div>
                    <div class="correct-answer">
                        <span class="answer-label">正解:</span>
                        <span class="answer-value correct">${problem.correctAnswer}</span>
                    </div>
                </div>
                <div class="incorrect-explanation">${problem.explanation}</div>
                <div class="incorrect-actions">
                    <button class="retry-single-btn" onclick="retrySingleProblem(${index})">
                        🔄 この問題だけ復習
                    </button>
                    <button class="remove-btn" onclick="removeFromIncorrect(${index})">
                        ✅ 理解した
                    </button>
                </div>
            </div>
        `).join('');

        document.getElementById('incorrectList').innerHTML = listHTML;
    }

    // 学年分布分析
    analyzeGradeDistribution(problems) {
        const gradeCount = {};
        problems.forEach(problem => {
            const grade = problem.grade || '不明';
            gradeCount[grade] = (gradeCount[grade] || 0) + 1;
        });

        const mostCommon = Object.keys(gradeCount).reduce((a, b) => 
            gradeCount[a] > gradeCount[b] ? a : b
        );

        return { mostCommon, distribution: gradeCount };
    }

    // 時間分布分析
    analyzeTimeDistribution(problems) {
        const times = problems.map(p => p.timestamp).sort();
        return {
            latest: times[times.length - 1] || '未記録',
            earliest: times[0] || '未記録'
        };
    }

    // アドバイス生成
    getAdvice(gradeStats, count) {
        if (count <= 2) {
            return "間違いは少ないですが、確実に理解しましょう。";
        } else if (count <= 5) {
            return "基本的な漢字の読み方を重点的に復習しましょう。";
        } else if (gradeStats.mostCommon.includes('小学')) {
            return `${gradeStats.mostCommon}の漢字でつまずいています。該当学年の漢字を重点復習しましょう。`;
        } else {
            return "中学受験レベルの漢字です。繰り返し練習して定着させましょう。";
        }
    }

    // 間違い問題の再挑戦
    retryIncorrectProblems() {
        const incorrectProblems = userData.todayIncorrectProblems || [];
        if (incorrectProblems.length === 0) {
            alert('復習する問題がありません。');
            return;
        }

        // 間違い問題で新しいセッションを開始
        this.startIncorrectSession(incorrectProblems);
    }

    // 間違い問題セッション開始
    startIncorrectSession(problems) {
        // 漢字練習画面に移動
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('kanjiScreen').classList.add('active');

        // 間違い問題のIDから実際の問題を取得
        currentKanjiSession = problems.map(p => {
            return kanjiQuestions.findIndex(q => q.id === p.id);
        }).filter(index => index !== -1);

        currentKanjiIndex = 0;
        kanjiScore = 0;
        document.getElementById('kanjiScore').textContent = '0';

        // ヘッダーを復習モードに変更
        document.querySelector('#kanjiScreen h2').textContent = '🔄 間違い問題復習';
        
        showKanjiQuestion();
    }

    // 個別問題の復習
    retrySingleProblem(index) {
        const problem = userData.todayIncorrectProblems[index];
        if (!problem) return;

        const questionIndex = kanjiQuestions.findIndex(q => q.id === problem.id);
        if (questionIndex === -1) {
            alert('問題が見つかりませんでした。');
            return;
        }

        // 単一問題で復習セッション開始
        currentKanjiSession = [questionIndex];
        currentKanjiIndex = 0;
        kanjiScore = 0;

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('kanjiScreen').classList.add('active');
        document.querySelector('#kanjiScreen h2').textContent = '🔄 個別復習';
        document.getElementById('kanjiScore').textContent = '0';

        showKanjiQuestion();
    }

    // 間違いリストから除去
    removeFromIncorrect(index) {
        userData.todayIncorrectProblems.splice(index, 1);
        saveUserData();
        this.updateReviewDisplay();
        
        // 成功通知
        this.showSuccessMessage('✅ 理解完了！素晴らしい！');
    }

    // 間違いリストをクリア
    clearIncorrectProblems() {
        if (confirm('今日の間違い問題リストをクリアしますか？')) {
            userData.todayIncorrectProblems = [];
            saveUserData();
            this.updateReviewDisplay();
            this.showSuccessMessage('🎉 復習完了！お疲れさまでした！');
        }
    }

    // 成功メッセージ表示
    showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #28a745;
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            font-size: 18px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 5px 20px rgba(40, 167, 69, 0.3);
            animation: successPop 0.5s ease-out;
        `;
        notification.textContent = message;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes successPop {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 2000);
    }
}

// グローバルインスタンス
const incorrectReview = new IncorrectReviewSystem();

// 復習画面表示
function showIncorrectReview() {
    incorrectReview.showReview();
}

// 間違い問題再挑戦
function retryIncorrectProblems() {
    incorrectReview.retryIncorrectProblems();
}

// 間違いリストクリア
function clearIncorrectProblems() {
    incorrectReview.clearIncorrectProblems();
}

// 個別問題復習
function retrySingleProblem(index) {
    incorrectReview.retrySingleProblem(index);
}

// 間違いリストから除去
function removeFromIncorrect(index) {
    incorrectReview.removeFromIncorrect(index);
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { IncorrectReviewSystem };
}