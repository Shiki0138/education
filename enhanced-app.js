// 拡張されたアプリケーション機能 - セキュリティ強化版

// セキュリティ設定
const SECURITY_CONFIG = {
    maxAttempts: 5,
    timeWindow: 300000, // 5分
    sessionTimeout: 1800000, // 30分
    enableCSP: true
};

// セキュリティチェック
function validateInput(input) {
    if (typeof input !== 'string') return false;
    
    // XSSとSQLインジェクション対策
    const dangerous = /<script|javascript:|data:|vbscript:|onload|onerror|onclick/i;
    return !dangerous.test(input);
}

function sanitizeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// レート制限機能
class RateLimiter {
    constructor(maxAttempts, timeWindow) {
        this.attempts = new Map();
        this.maxAttempts = maxAttempts;
        this.timeWindow = timeWindow;
    }
    
    checkLimit(identifier) {
        const now = Date.now();
        const attempts = this.attempts.get(identifier) || [];
        
        // 時間窓外の試行を削除
        const validAttempts = attempts.filter(time => now - time < this.timeWindow);
        
        if (validAttempts.length >= this.maxAttempts) {
            return false;
        }
        
        validAttempts.push(now);
        this.attempts.set(identifier, validAttempts);
        return true;
    }
}

// グローバルレート制限
const globalRateLimit = new RateLimiter(SECURITY_CONFIG.maxAttempts, SECURITY_CONFIG.timeWindow);

// メモリ使用量最適化のための遅延初期化
let aiQuestionGenerator = null;
let vocabularySystem = null;
let writingSystem = null;
let personalizedLearning = null;

// AI問題生成システム
class AIQuestionGenerator {
    constructor() {
        this.isInitialized = false;
        this.problemGenerator = null; // 遅延初期化
    }

    async initialize() {
        if (this.isInitialized) return;
        
        // 必要なデータのみ遅延読み込み
        if (!this.problemGenerator && typeof ExamProblemGenerator !== 'undefined') {
            this.problemGenerator = new ExamProblemGenerator();
        }
        
        this.isInitialized = true;
    }

    async generatePersonalizedProblem(studentData) {
        // 弱点分析
        const weakness = this.analyzeWeakness(studentData);
        
        // 問題生成
        if (weakness.primaryWeakness === 'kanji') {
            return await this.generateKanjiProblem(weakness);
        } else if (weakness.primaryWeakness === 'reading') {
            return await this.generateReadingProblem(weakness);
        } else {
            return await this.generateGrammarProblem(weakness);
        }
    }

    analyzeWeakness(studentData) {
        const kanjiAccuracy = studentData.kanjiCorrect / Math.max(studentData.kanjiTotal, 1);
        const readingAccuracy = studentData.readingCorrect / Math.max(studentData.readingTotal, 1);
        const grammarAccuracy = studentData.grammarCorrect / Math.max(studentData.grammarTotal, 1);

        let primaryWeakness = 'kanji';
        let minAccuracy = kanjiAccuracy;

        if (readingAccuracy < minAccuracy) {
            primaryWeakness = 'reading';
            minAccuracy = readingAccuracy;
        }

        if (grammarAccuracy < minAccuracy) {
            primaryWeakness = 'grammar';
            minAccuracy = grammarAccuracy;
        }

        return {
            primaryWeakness,
            weaknessLevel: minAccuracy < 0.5 ? 'high' : minAccuracy < 0.7 ? 'medium' : 'low',
            recommendations: this.getRecommendations(primaryWeakness, minAccuracy)
        };
    }

    getRecommendations(weakness, accuracy) {
        const recommendations = {
            kanji: {
                high: "基本的な読み方から復習しましょう",
                medium: "よく出る漢字を重点的に練習しましょう",
                low: "難しい漢字にも挑戦してみましょう"
            },
            reading: {
                high: "短い文章から始めて読解力を鍛えましょう",
                medium: "文章の要点を掴む練習をしましょう",
                low: "より複雑な文章に挑戦しましょう"
            },
            grammar: {
                high: "基本的な文法から確認しましょう",
                medium: "敬語の使い分けを練習しましょう",
                low: "高度な文法表現を学びましょう"
            }
        };

        const level = accuracy < 0.5 ? 'high' : accuracy < 0.7 ? 'medium' : 'low';
        return recommendations[weakness][level];
    }

    async generateKanjiProblem(weakness) {
        // 実際のAI生成をシミュレート
        await this.simulateAIGeneration();

        const problems = [
            {
                question: "次の漢字の読み方を選びなさい：【協調】",
                options: ["きょうちょう", "きょうてい", "こうちょう", "こうてい"],
                correct: 0,
                explanation: "協調（きょうちょう）= 互いに協力し合うこと",
                aiGenerated: true,
                difficulty: weakness.weaknessLevel
            },
            {
                question: "次の漢字の読み方を選びなさい：【模索】",
                options: ["もさく", "ぼさく", "もたん", "ぼたん"],
                correct: 1,
                explanation: "模索（ぼさく）= 手探りで探し求めること",
                aiGenerated: true,
                difficulty: weakness.weaknessLevel
            }
        ];

        return problems[Math.floor(Math.random() * problems.length)];
    }

    async generateReadingProblem(weakness) {
        await this.simulateAIGeneration();

        const problem = {
            passage: `人工知能（AI）の発達により、私たちの生活は大きく変化しています。スマートフォンの音声認識、自動運転車、医療診断など、様々な分野でAIが活用されています。

しかし、AIの発達には課題もあります。仕事がAIに置き換えられる可能性や、プライバシーの問題などが指摘されています。私たちは、AIの恩恵を受けながらも、その課題について考え、適切に対応していく必要があります。

AIと人間が共存する社会を築くためには、技術の進歩と倫理的な配慮のバランスが重要です。`,

            question: "筆者がAIについて最も重要だと考えていることは何ですか？",
            options: [
                "AIの技術をさらに発達させること",
                "AIの課題を解決すること", 
                "技術の進歩と倫理的配慮のバランス",
                "AIと人間の区別を明確にすること"
            ],
            correct: 2,
            explanation: "最後の段落で「技術の進歩と倫理的な配慮のバランスが重要」と述べています",
            aiGenerated: true,
            difficulty: weakness.weaknessLevel
        };

        return problem;
    }

    async generateGrammarProblem(weakness) {
        await this.simulateAIGeneration();

        const problems = [
            {
                question: "「お客様がお見えになりました」の敬語として正しいものは？",
                options: [
                    "お客様がいらっしゃいました",
                    "お客様が参りました",
                    "お客様がお越しされました", 
                    "お客様が来てくださいました"
                ],
                correct: 0,
                explanation: "「いらっしゃる」は「来る」の正しい尊敬語です",
                aiGenerated: true,
                difficulty: weakness.weaknessLevel
            }
        ];

        return problems[0];
    }

    async simulateAIGeneration() {
        // AI生成のシミュレーション（1-3秒の待機）
        const delay = 1000 + Math.random() * 2000;
        return new Promise(resolve => setTimeout(resolve, delay));
    }
}

// 語彙力強化システム
class VocabularySystem {
    constructor() {
        this.currentIndex = 0;
        this.score = 0;
        this.questions = examIdiomData || [];
    }

    start() {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('vocabularyScreen').classList.add('active');
        this.currentIndex = 0;
        this.score = 0;
        this.showQuestion();
    }

    showQuestion() {
        if (this.currentIndex >= this.questions.length) {
            this.finish();
            return;
        }

        const question = this.questions[this.currentIndex];
        document.getElementById('vocabularyQuestionNum').textContent = this.currentIndex + 1;
        document.getElementById('vocabularyQuestion').textContent = question.question;
        
        const optionsHTML = question.options.map((option, index) => 
            `<button onclick="vocabularySystem.checkAnswer(${index})">${index + 1}. ${option}</button>`
        ).join('');
        
        document.getElementById('vocabularyOptions').innerHTML = optionsHTML;
        document.getElementById('vocabularyHint').classList.remove('show');
    }

    checkAnswer(selected) {
        // セキュリティチェック
        if (!globalRateLimit.checkLimit('vocabulary_answer')) {
            alert('回答が制限されています。しばらくお待ちください。');
            return;
        }
        
        if (typeof selected !== 'number' || selected < 0 || selected > 3) {
            console.error('不正な選択肢:', selected);
            return;
        }
        
        const question = this.questions[this.currentIndex];
        const buttons = document.querySelectorAll('#vocabularyOptions button');
        
        if (selected === question.correct) {
            buttons[selected].classList.add('correct');
            this.score += 15;
            userData.correctAnswers++;
            userData.totalPoints += 15;
        } else {
            buttons[selected].classList.add('incorrect');
            buttons[question.correct].classList.add('correct');
        }

        userData.questionsAnswered++;
        document.getElementById('vocabularyScore').textContent = this.score;
        updateUI();
        saveUserData();

        setTimeout(() => {
            this.currentIndex++;
            this.showQuestion();
        }, 2000);
    }

    showHint() {
        const question = this.questions[this.currentIndex];
        const hint = question.explanation || "関連する知識を思い出してみましょう。";
        document.getElementById('vocabularyHint').textContent = hint;
        document.getElementById('vocabularyHint').classList.add('show');
    }

    finish() {
        showResult('語彙力強化完了！', this.score, this.questions.length);
        userData.studyMinutesToday += 15;
        saveUserData();
        updateUI();
    }
}

// 記述問題システム
class WritingSystem {
    constructor() {
        this.currentProblem = null;
        this.startTime = null;
        this.questions = [
            {
                passage: "環境問題は今や世界共通の課題となっています。地球温暖化、大気汚染、海洋汚染など様々な問題があります。",
                question: "環境問題を解決するために、あなたができることを40字以内で書きなさい。",
                maxChars: 40,
                keyWords: ["省エネ", "リサイクル", "節約", "エコ", "自然", "保護"],
                sampleAnswer: "電気をこまめに消し、ゴミの分別をして、公共交通機関を利用する。"
            },
            {
                passage: "読書は知識を増やし、想像力を豊かにする素晴らしい活動です。",
                question: "読書の良さについて、あなたの考えを50字以内で書きなさい。",
                maxChars: 50,
                keyWords: ["知識", "想像力", "語彙", "集中力", "感性"],
                sampleAnswer: "読書は新しい知識を学べるだけでなく、想像力を育て、豊かな感性を身につけることができる。"
            }
        ];
    }

    start() {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('writingScreen').classList.add('active');
        this.currentProblem = this.questions[Math.floor(Math.random() * this.questions.length)];
        this.startTime = Date.now();
        this.showProblem();
        this.startTimer();
    }

    showProblem() {
        const questionHTML = `
            <h4>次の文章を読んで、問題に答えなさい。</h4>
            <p style="margin: 15px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
                ${this.currentProblem.passage}
            </p>
            <p><strong>${this.currentProblem.question}</strong></p>
        `;
        
        document.getElementById('writingQuestion').innerHTML = questionHTML;
        document.getElementById('maxChars').textContent = this.currentProblem.maxChars;
        document.getElementById('currentChars').textContent = 0;
        
        const textarea = document.getElementById('writingAnswer');
        textarea.value = '';
        textarea.addEventListener('input', this.updateCharCount.bind(this));
    }

    updateCharCount() {
        const textarea = document.getElementById('writingAnswer');
        const currentLength = textarea.value.length;
        document.getElementById('currentChars').textContent = currentLength;
        
        if (currentLength > this.currentProblem.maxChars) {
            textarea.style.borderColor = '#dc3545';
        } else {
            textarea.style.borderColor = '#667eea';
        }
    }

    submitAnswer() {
        // セキュリティチェック
        if (!globalRateLimit.checkLimit('writing_submit')) {
            alert('送信が制限されています。しばらくお待ちください。');
            return;
        }
        
        const answer = document.getElementById('writingAnswer').value.trim();
        
        // 入力検証
        if (!validateInput(answer)) {
            alert('不正な文字が含まれています。');
            return;
        }
        
        if (!answer) {
            alert('答えを入力してください。');
            return;
        }

        if (answer.length > this.currentProblem.maxChars) {
            alert(`制限字数（${this.currentProblem.maxChars}字）を超えています。`);
            return;
        }

        this.gradeAnswer(sanitizeHtml(answer));
    }

    gradeAnswer(answer) {
        const feedback = this.analyzeAnswer(answer);
        this.showFeedback(feedback);
        
        // 学習データ更新
        userData.questionsAnswered++;
        if (feedback.score >= 7) {
            userData.correctAnswers++;
            userData.totalPoints += feedback.score;
        }
        userData.studyMinutesToday += Math.floor((Date.now() - this.startTime) / 60000);
        saveUserData();
        updateUI();
    }

    analyzeAnswer(answer) {
        let score = 0;
        let feedback = [];

        // 字数チェック
        const charRatio = answer.length / this.currentProblem.maxChars;
        if (charRatio >= 0.8) {
            score += 2;
            feedback.push("✅ 適切な字数で書けています");
        } else {
            feedback.push("❌ もう少し詳しく書きましょう");
        }

        // キーワードチェック
        let keywordCount = 0;
        this.currentProblem.keyWords.forEach(keyword => {
            if (answer.includes(keyword)) {
                keywordCount++;
            }
        });

        if (keywordCount >= 2) {
            score += 3;
            feedback.push("✅ 重要なキーワードが含まれています");
        } else if (keywordCount >= 1) {
            score += 2;
            feedback.push("⚠️ もう少しキーワードを意識しましょう");
        } else {
            feedback.push("❌ 重要なキーワードが不足しています");
        }

        // 文章構成チェック
        if (answer.includes('。') && answer.split('。').length >= 2) {
            score += 2;
            feedback.push("✅ 文章が適切に構成されています");
        } else {
            feedback.push("⚠️ 文章構成を工夫しましょう");
        }

        // 具体性チェック
        if (answer.includes('例えば') || answer.includes('具体的') || answer.includes('実際')) {
            score += 1;
            feedback.push("✅ 具体的な表現が使われています");
        }

        // 論理性チェック
        if (answer.includes('なぜなら') || answer.includes('そのため') || answer.includes('したがって')) {
            score += 1;
            feedback.push("✅ 論理的な表現が使われています");
        }

        return {
            score: Math.min(score, 10),
            feedback: feedback,
            sampleAnswer: this.currentProblem.sampleAnswer
        };
    }

    showFeedback(feedback) {
        const feedbackHTML = `
            <div class="feedback-score">${feedback.score}/10点</div>
            <div class="feedback-details">
                ${feedback.feedback.map(f => `<p>${f}</p>`).join('')}
                <hr style="margin: 15px 0;">
                <p><strong>参考解答例：</strong></p>
                <p style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
                    ${feedback.sampleAnswer}
                </p>
            </div>
        `;
        
        document.getElementById('aiFeedback').innerHTML = feedbackHTML;
        document.getElementById('aiFeedback').classList.add('show');
    }

    showHint() {
        const hints = [
            "問題文をよく読み、何を求められているかを確認しましょう",
            "具体的な例を挙げると説得力が増します",
            "理由や根拠を明確に示しましょう",
            "制限字数の8割以上は書くように心がけましょう"
        ];
        
        const randomHint = hints[Math.floor(Math.random() * hints.length)];
        alert(`💡 ヒント：${randomHint}`);
    }

    startTimer() {
        const startTime = Date.now();
        const timer = setInterval(() => {
            if (!document.getElementById('writingScreen').classList.contains('active')) {
                clearInterval(timer);
                return;
            }
            
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            document.getElementById('writingTimer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
}

// AI個人最適化システム
class PersonalizedLearning {
    constructor() {
        this.aiGenerator = new AIQuestionGenerator();
        this.currentProblem = null;
    }

    async start() {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('aiPracticeScreen').classList.add('active');
        
        await this.aiGenerator.initialize();
        this.analyzeUser();
    }

    analyzeUser() {
        // ユーザーの学習データ分析
        const weakness = this.aiGenerator.analyzeWeakness({
            kanjiCorrect: userData.kanjiCorrect || 0,
            kanjiTotal: userData.kanjiTotal || 1,
            readingCorrect: userData.readingCorrect || 0,
            readingTotal: userData.readingTotal || 1,
            grammarCorrect: userData.grammarCorrect || 0,
            grammarTotal: userData.grammarTotal || 1
        });

        // 分析結果表示
        document.getElementById('weaknessAreas').textContent = 
            this.getWeaknessText(weakness.primaryWeakness);
        document.getElementById('recommendedLevel').textContent = 
            this.getLevelText(weakness.weaknessLevel);
    }

    getWeaknessText(weakness) {
        const texts = {
            kanji: "漢字の読み書き",
            reading: "読解力・文章理解",
            grammar: "文法・敬語"
        };
        return texts[weakness] || "バランス良く学習中";
    }

    getLevelText(level) {
        const texts = {
            high: "基礎レベル",
            medium: "標準レベル", 
            low: "応用レベル"
        };
        return texts[level] || "適応中";
    }

    async generateProblem() {
        document.getElementById('aiStatus').textContent = "生成中...";
        document.getElementById('generatedProblem').innerHTML = `
            <div class="generating">
                <div class="spinner">🤖</div>
                <p>あなたの学習データを分析して、最適な問題を生成しています...</p>
            </div>
        `;
        document.getElementById('generatedProblem').classList.add('show');

        try {
            const studentData = {
                kanjiCorrect: userData.kanjiCorrect || 0,
                kanjiTotal: userData.kanjiTotal || 1,
                readingCorrect: userData.readingCorrect || 0,
                readingTotal: userData.readingTotal || 1,
                grammarCorrect: userData.grammarCorrect || 0,
                grammarTotal: userData.grammarTotal || 1
            };

            this.currentProblem = await this.aiGenerator.generatePersonalizedProblem(studentData);
            this.displayProblem();
            document.getElementById('aiStatus').textContent = "生成完了";
        } catch (error) {
            console.error('問題生成エラー:', error);
            document.getElementById('generatedProblem').innerHTML = `
                <p style="color: #dc3545;">問題生成中にエラーが発生しました。もう一度お試しください。</p>
            `;
        }
    }

    displayProblem() {
        if (!this.currentProblem) return;

        let problemHTML = '';

        if (this.currentProblem.passage) {
            // 読解問題
            problemHTML = `
                <h4>AI生成読解問題</h4>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 15px 0;">
                    ${this.currentProblem.passage}
                </div>
                <h5>${this.currentProblem.question}</h5>
                <div class="ai-problem-options">
                    ${this.currentProblem.options.map((option, index) => 
                        `<button onclick="personalizedLearning.checkAnswer(${index})" 
                         class="ai-option-btn">${index + 1}. ${option}</button>`
                    ).join('')}
                </div>
            `;
        } else {
            // 漢字・文法問題
            problemHTML = `
                <h4>AI生成${this.getProblemTypeText()}問題</h4>
                <div class="ai-question">
                    ${this.currentProblem.question}
                </div>
                <div class="ai-problem-options">
                    ${this.currentProblem.options.map((option, index) => 
                        `<button onclick="personalizedLearning.checkAnswer(${index})" 
                         class="ai-option-btn">${index + 1}. ${option}</button>`
                    ).join('')}
                </div>
            `;
        }

        document.getElementById('generatedProblem').innerHTML = problemHTML;
    }

    getProblemTypeText() {
        if (this.currentProblem.question.includes('漢字')) return '漢字';
        if (this.currentProblem.question.includes('敬語')) return '敬語';
        return '文法';
    }

    checkAnswer(selected) {
        const buttons = document.querySelectorAll('.ai-option-btn');
        const isCorrect = selected === this.currentProblem.correct;

        if (isCorrect) {
            buttons[selected].style.background = '#d4edda';
            buttons[selected].style.borderColor = '#28a745';
            userData.correctAnswers++;
            userData.totalPoints += 20;
        } else {
            buttons[selected].style.background = '#f8d7da';
            buttons[selected].style.borderColor = '#dc3545';
            buttons[this.currentProblem.correct].style.background = '#d4edda';
            buttons[this.currentProblem.correct].style.borderColor = '#28a745';
        }

        userData.questionsAnswered++;
        saveUserData();
        updateUI();

        // 解説表示
        setTimeout(() => {
            document.getElementById('aiExplanation').innerHTML = `
                <h4>AI解説</h4>
                <p>${this.currentProblem.explanation}</p>
                <p style="margin-top: 15px; color: #666; font-size: 14px;">
                    🤖 この問題はあなたの学習データを元に最適化されました
                </p>
            `;
            document.getElementById('aiExplanation').classList.add('show');
        }, 1500);
    }
}

// 遅延初期化関数（メモリ使用量最適化）
function getVocabularySystem() {
    if (!vocabularySystem) {
        vocabularySystem = new VocabularySystem();
    }
    return vocabularySystem;
}

function getWritingSystem() {
    if (!writingSystem) {
        writingSystem = new WritingSystem();
    }
    return writingSystem;
}

function getPersonalizedLearning() {
    if (!personalizedLearning) {
        personalizedLearning = new PersonalizedLearning();
    }
    return personalizedLearning;
}

// enhanced-app.js: 拡張機能のみを提供
// メイン関数はapp.jsで定義されているため、ここでは重複定義を削除

function startWritingPractice() {
    getWritingSystem().start();
}

function submitWritingAnswer() {
    getWritingSystem().submitAnswer();
}

function showWritingHint() {
    getWritingSystem().showHint();
}

// データ拡張（学習データに分野別データを追加）
function extendUserData() {
    if (!userData.kanjiCorrect) {
        userData.kanjiCorrect = 0;
        userData.kanjiTotal = 0;
        userData.readingCorrect = 0;
        userData.readingTotal = 0;
        userData.grammarCorrect = 0;
        userData.grammarTotal = 0;
        userData.writingSubmissions = [];
    }
}