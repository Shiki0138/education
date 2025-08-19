// 実際の受験問題を生成するシステム

class ExamProblemGenerator {
    constructor() {
        this.templates = new ProblemTemplates();
        this.aiService = new OpenAIService();
        this.qualityController = new QualityControl();
        this.copyrightChecker = new CopyrightCompliance();
    }

    // 大手門学院中学レベルの漢字問題生成
    async generateKanjiProblem(level = "intermediate") {
        const prompt = `
        大阪府茨木市の大手門学院中学の入試レベルで、以下の条件を満たす漢字問題を作成してください：
        
        条件：
        - 小学6年配当漢字を中心とした読み問題
        - 選択肢は4つ
        - 中学受験でよく出る漢字を使用
        - ヒントと解説も含める
        
        出力形式：
        {
            "question": "問題文",
            "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
            "correct": 正解番号(0-3),
            "hint": "ヒント文",
            "explanation": "解説文"
        }
        `;

        try {
            const response = await this.aiService.generate(prompt);
            const problem = JSON.parse(response);
            
            // 品質チェック
            const quality = await this.qualityController.validate(problem);
            if (quality.score < 0.8) {
                return this.generateKanjiProblem(level); // 再生成
            }
            
            return problem;
        } catch (error) {
            console.error('漢字問題生成エラー:', error);
            return this.getFallbackKanjiProblem();
        }
    }

    // 関西大倉中学レベルの読解問題生成
    async generateReadingProblem(genre = "論説文") {
        const prompt = `
        関西大倉中学の入試レベルで、以下の条件を満たす${genre}の読解問題を作成してください：
        
        条件：
        - 文章量：800-1200字程度
        - 小学6年生が理解できる内容
        - 現代的なテーマ（環境、技術、社会問題など）
        - 選択問題3問と記述問題1問を含む
        - 各問題に詳細な解説を付ける
        
        テーマ例：
        - 環境問題と持続可能な社会
        - AI技術と人間の未来
        - 多様性と共生社会
        - 科学技術の進歩と倫理
        
        出力形式：
        {
            "passage": "本文",
            "questions": [
                {
                    "type": "choice",
                    "question": "問題文",
                    "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
                    "correct": 正解番号,
                    "explanation": "解説"
                }
            ]
        }
        `;

        try {
            const response = await this.aiService.generate(prompt);
            const problem = JSON.parse(response);
            
            // 著作権チェック
            const copyrightOK = await this.copyrightChecker.checkOriginal(problem.passage);
            if (!copyrightOK) {
                return this.generateReadingProblem(genre); // 再生成
            }
            
            return problem;
        } catch (error) {
            console.error('読解問題生成エラー:', error);
            return this.getFallbackReadingProblem();
        }
    }

    // 文法・敬語問題生成
    async generateGrammarProblem(type = "敬語") {
        const prompt = `
        中学受験レベルの${type}問題を作成してください：
        
        条件：
        - 小学生が日常的に使う場面設定
        - 実用的な敬語の使い分け
        - 間違いやすいポイントを含む
        
        出力形式：
        {
            "question": "問題文",
            "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
            "correct": 正解番号,
            "explanation": "解説（なぜその答えが正しいか）"
        }
        `;

        try {
            const response = await this.aiService.generate(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.error('文法問題生成エラー:', error);
            return this.getFallbackGrammarProblem();
        }
    }

    // 個人に最適化された問題生成
    async generatePersonalizedProblem(studentData) {
        const weakness = this.analyzeWeakness(studentData);
        const prompt = `
        以下の学習データを持つ生徒に最適な問題を作成してください：
        
        弱点分析：
        - 苦手分野: ${weakness.areas.join(', ')}
        - 正答率: ${weakness.accuracy}%
        - 学習時間: ${studentData.totalTime}分
        - レベル: ${studentData.level}
        
        生成する問題：
        - 弱点を重点的に強化
        - 現在のレベル+0.5の難易度
        - モチベーション維持を考慮
        `;

        try {
            const response = await this.aiService.generate(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.error('個別問題生成エラー:', error);
            return this.generateRandomProblem();
        }
    }

    // 弱点分析
    analyzeWeakness(studentData) {
        const analysis = {
            areas: [],
            accuracy: 0,
            recommendations: []
        };

        // 分野別正答率を計算
        const fieldAccuracy = {
            kanji: studentData.kanjiCorrect / studentData.kanjiTotal || 0,
            reading: studentData.readingCorrect / studentData.readingTotal || 0,
            grammar: studentData.grammarCorrect / studentData.grammarTotal || 0
        };

        // 弱点分野を特定（正答率60%未満）
        Object.keys(fieldAccuracy).forEach(field => {
            if (fieldAccuracy[field] < 0.6) {
                analysis.areas.push(field);
            }
        });

        analysis.accuracy = Object.values(fieldAccuracy).reduce((a, b) => a + b, 0) / 3 * 100;

        return analysis;
    }

    // フォールバック問題（AI生成失敗時）
    getFallbackKanjiProblem() {
        return {
            question: "次の漢字の読み方を選びなさい：「挑戦」",
            options: ["ちょうせん", "とうせん", "ちょうたん", "ちょうぜん"],
            correct: 0,
            hint: "「挑む」は「いどむ」と読みます",
            explanation: "挑戦（ちょうせん）= 困難なことに立ち向かうこと"
        };
    }

    getFallbackReadingProblem() {
        return {
            passage: "環境問題は、今や全世界が取り組むべき重要な課題となっています。私たち一人一人ができることから始めることが大切です。",
            questions: [{
                type: "choice",
                question: "筆者が最も伝えたいことは何ですか？",
                options: [
                    "環境問題は世界的な課題である",
                    "個人の行動が重要である",
                    "政府が対策を講じるべき",
                    "技術革新が必要である"
                ],
                correct: 1,
                explanation: "「一人一人ができることから」という表現から読み取れます"
            }]
        };
    }

    getFallbackGrammarProblem() {
        return {
            question: "「先生が来られました」の敬語として正しいものは？",
            options: [
                "先生がいらっしゃいました",
                "先生が参りました", 
                "先生がお越しされました",
                "先生が来てくださいました"
            ],
            correct: 0,
            explanation: "「いらっしゃる」は「来る」の尊敬語です"
        };
    }
}

// OpenAI APIサービス（実装例）
class OpenAIService {
    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY; // 環境変数から取得
        this.baseURL = 'https://api.openai.com/v1/chat/completions';
    }

    async generate(prompt) {
        // 実際のAPI呼び出しは環境に応じて実装
        // ここではダミーレスポンスを返す
        return this.generateDummyResponse(prompt);
    }

    generateDummyResponse(prompt) {
        if (prompt.includes('漢字問題')) {
            return JSON.stringify({
                question: "次の漢字の読み方を選びなさい：【協力】",
                options: ["きょうりょく", "きょうりき", "こうりょく", "こうりき"],
                correct: 0,
                hint: "「協」は「きょう」、「力」は「りょく」と読みます",
                explanation: "協力（きょうりょく）= 力を合わせて物事に当たること"
            });
        }
        
        if (prompt.includes('読解問題')) {
            return JSON.stringify({
                passage: "デジタル技術の発達により、私たちの生活は大きく変化しました。便利になった一方で、人と人との直接的なコミュニケーションが減少しているという指摘もあります。技術と人間らしさのバランスを考えることが、これからの社会にとって重要な課題と言えるでしょう。",
                questions: [{
                    type: "choice",
                    question: "筆者が提起している課題は何ですか？",
                    options: [
                        "デジタル技術の発達速度",
                        "技術と人間らしさのバランス",
                        "コミュニケーション手段の多様化",
                        "社会変化への適応"
                    ],
                    correct: 1,
                    explanation: "最後の文で「技術と人間らしさのバランス」が重要な課題と述べられています"
                }]
            });
        }

        return JSON.stringify({
            question: "サンプル問題",
            options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
            correct: 0,
            explanation: "解説文"
        });
    }
}

// 品質管理システム
class QualityControl {
    async validate(problem) {
        const score = this.calculateQualityScore(problem);
        return {
            score: score,
            feedback: this.generateFeedback(problem, score)
        };
    }

    calculateQualityScore(problem) {
        let score = 1.0;
        
        // 問題文の長さチェック
        if (!problem.question || problem.question.length < 10) {
            score -= 0.2;
        }
        
        // 選択肢の妥当性チェック
        if (!problem.options || problem.options.length !== 4) {
            score -= 0.3;
        }
        
        // 解説の有無チェック
        if (!problem.explanation || problem.explanation.length < 5) {
            score -= 0.2;
        }
        
        return Math.max(0, score);
    }

    generateFeedback(problem, score) {
        const feedback = [];
        
        if (score < 0.8) {
            feedback.push("問題の品質を向上させる必要があります");
        }
        
        if (!problem.explanation) {
            feedback.push("解説を追加してください");
        }
        
        return feedback;
    }
}

// 著作権チェッククラス
class CopyrightCompliance {
    async checkOriginal(text) {
        // 実際の実装では、既存テキストとの類似度チェックを行う
        // ここでは簡易チェックのダミー実装
        const commonPhrases = [
            "昔々あるところに",
            "それは昨日のことでした",
            "桃太郎は鬼ヶ島へ"
        ];
        
        const hasCommonPhrase = commonPhrases.some(phrase => text.includes(phrase));
        return !hasCommonPhrase; // 既知のフレーズが含まれていなければOK
    }
}

// 問題テンプレートクラス
class ProblemTemplates {
    getKanjiTemplate(level, type) {
        return {
            beginner: "次の漢字の読み方を選びなさい：【{word}】",
            intermediate: "傍線部の漢字の読み方を答えなさい：彼の【{word}】した行動に感動した。",
            advanced: "次の文の【　】に入る漢字を書きなさい：この問題を【{reading}】することは重要だ。"
        }[level] || this.getKanjiTemplate('intermediate', type);
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ExamProblemGenerator,
        OpenAIService,
        QualityControl,
        CopyrightCompliance,
        ProblemTemplates
    };
}