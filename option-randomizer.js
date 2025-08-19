// 選択肢ランダム化システム - 正解位置の分散

class OptionRandomizer {
    constructor() {
        this.targetDistribution = [0.25, 0.25, 0.25, 0.25]; // 各選択肢25%ずつ
    }

    // 問題セット全体の正解位置を分散
    randomizeQuestionSet(questions) {
        const randomized = questions.map((question, index) => {
            return this.randomizeQuestion(question, index);
        });

        // 正解分布をチェック
        const distribution = this.analyzeDistribution(randomized);
        console.log('正解位置分布:', distribution);

        return randomized;
    }

    // 個別問題の選択肢をランダム化
    randomizeQuestion(question, questionIndex) {
        const originalCorrect = question.correct;
        const originalOptions = [...question.options];
        
        // 目標正解位置を計算（問題番号に基づいて分散）
        const targetCorrectIndex = questionIndex % 4;
        
        // 選択肢を並び替え
        const shuffledOptions = [...originalOptions];
        const correctAnswer = originalOptions[originalCorrect];
        
        // Fisher-Yatesシャッフル
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // 正解を目標位置に配置
        const correctPos = shuffledOptions.indexOf(correctAnswer);
        if (correctPos !== targetCorrectIndex) {
            // 正解を目標位置と交換
            [shuffledOptions[targetCorrectIndex], shuffledOptions[correctPos]] = 
            [shuffledOptions[correctPos], shuffledOptions[targetCorrectIndex]];
        }

        return {
            ...question,
            options: shuffledOptions,
            correct: targetCorrectIndex,
            originalCorrect: originalCorrect,
            randomized: true
        };
    }

    // より簡単な方法：問題ごとにランダムな正解位置
    simpleRandomize(questions) {
        return questions.map(question => {
            const correctAnswer = question.options[question.correct];
            const otherOptions = question.options.filter((_, index) => index !== question.correct);
            
            // 新しい正解位置をランダム決定
            const newCorrectIndex = Math.floor(Math.random() * 4);
            
            // 新しい選択肢配列を作成
            const newOptions = ['', '', '', ''];
            newOptions[newCorrectIndex] = correctAnswer;
            
            // 他の選択肢をランダム配置
            let otherIndex = 0;
            for (let i = 0; i < 4; i++) {
                if (i !== newCorrectIndex) {
                    newOptions[i] = otherOptions[otherIndex++];
                }
            }

            return {
                ...question,
                options: newOptions,
                correct: newCorrectIndex,
                randomized: true
            };
        });
    }

    // 正解分布を分析
    analyzeDistribution(questions) {
        const counts = [0, 0, 0, 0];
        questions.forEach(q => {
            counts[q.correct]++;
        });

        const total = questions.length;
        return {
            counts: counts,
            percentages: counts.map(count => Math.round((count / total) * 100)),
            total: total,
            balanced: Math.max(...counts) - Math.min(...counts) <= Math.ceil(total * 0.1)
        };
    }

    // 段階的バランス調整
    balanceDistribution(questions) {
        const targetPerOption = Math.floor(questions.length / 4);
        const remainder = questions.length % 4;
        
        const targets = [
            targetPerOption + (0 < remainder ? 1 : 0),
            targetPerOption + (1 < remainder ? 1 : 0), 
            targetPerOption + (2 < remainder ? 1 : 0),
            targetPerOption + (3 < remainder ? 1 : 0)
        ];

        const balanced = [];
        const counts = [0, 0, 0, 0];

        questions.forEach(question => {
            // 最も不足している位置を選択
            let targetPosition = 0;
            let minRatio = counts[0] / targets[0];

            for (let i = 1; i < 4; i++) {
                const ratio = counts[i] / targets[i];
                if (ratio < minRatio) {
                    minRatio = ratio;
                    targetPosition = i;
                }
            }

            // 選択肢を並び替えて目標位置に正解を配置
            const correctAnswer = question.options[question.correct];
            const newOptions = [...question.options];
            
            // 正解を目標位置に移動
            const currentCorrectPos = newOptions.indexOf(correctAnswer);
            if (currentCorrectPos !== targetPosition) {
                [newOptions[targetPosition], newOptions[currentCorrectPos]] = 
                [newOptions[currentCorrectPos], newOptions[targetPosition]];
            }

            counts[targetPosition]++;

            balanced.push({
                ...question,
                options: newOptions,
                correct: targetPosition,
                balanced: true
            });
        });

        return balanced;
    }
}

// 使用例
function applyRandomization() {
    if (typeof all500KanjiProblems !== 'undefined' && all500KanjiProblems.length > 0) {
        const randomizer = new OptionRandomizer();
        const balancedQuestions = randomizer.balanceDistribution(all500KanjiProblems);
        
        console.log('🎯 正解位置バランス調整完了');
        console.log('調整前:', randomizer.analyzeDistribution(all500KanjiProblems));
        console.log('調整後:', randomizer.analyzeDistribution(balancedQuestions));
        
        // グローバル変数を更新
        window.all500KanjiProblems = balancedQuestions;
        return balancedQuestions;
    }
    
    return [];
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OptionRandomizer, applyRandomization };
}