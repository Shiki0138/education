// 選択肢重複検証・修正システム

class OptionValidator {
    constructor() {
        this.fixedProblems = [];
    }

    // 問題配列の選択肢重複を検証・修正
    validateAndFixOptions(problems) {
        console.log('🔍 選択肢重複検証開始...');
        
        const fixedProblems = problems.map((problem, index) => {
            const fixed = this.fixDuplicateOptions(problem, index);
            return fixed;
        });
        
        console.log('✅ 選択肢重複検証・修正完了');
        return fixedProblems;
    }

    // 個別問題の選択肢重複修正
    fixDuplicateOptions(problem, problemIndex) {
        const originalOptions = [...problem.options];
        const correctAnswer = originalOptions[problem.correct];
        
        // 重複チェック
        const duplicates = this.findDuplicates(originalOptions);
        
        if (duplicates.length === 0) {
            console.log(`✅ 問題${problemIndex + 1}: 重複なし`);
            return problem;
        }
        
        console.log(`⚠️ 問題${problemIndex + 1}: ${duplicates.length}個の重複発見`, duplicates);
        
        // 重複を修正
        const fixedOptions = this.createUniqueOptions(correctAnswer, originalOptions, problemIndex);
        const newCorrectIndex = fixedOptions.indexOf(correctAnswer);
        
        console.log(`🔧 修正後の選択肢:`, fixedOptions);
        
        return {
            ...problem,
            options: fixedOptions,
            correct: newCorrectIndex,
            originalOptions: originalOptions, // デバッグ用
            fixed: true
        };
    }

    // 配列内の重複を発見
    findDuplicates(array) {
        const seen = {};
        const duplicates = [];
        
        array.forEach(item => {
            if (seen[item]) {
                duplicates.push(item);
            } else {
                seen[item] = true;
            }
        });
        
        return duplicates;
    }

    // 完全にユニークな選択肢配列を作成
    createUniqueOptions(correctAnswer, originalOptions, problemIndex) {
        const uniqueOptions = [correctAnswer];
        const usedOptions = [correctAnswer];
        
        // 元の選択肢から重複のないものを追加
        originalOptions.forEach(option => {
            if (!usedOptions.includes(option) && uniqueOptions.length < 4) {
                uniqueOptions.push(option);
                usedOptions.push(option);
            }
        });
        
        // 不足分を高品質ダミーで補填
        while (uniqueOptions.length < 4) {
            const newDummy = this.generateQualityDummy(correctAnswer, usedOptions, uniqueOptions.length);
            uniqueOptions.push(newDummy);
            usedOptions.push(newDummy);
        }
        
        // 選択肢をシャッフル（正解位置をランダム化）
        return this.shuffleOptions(uniqueOptions, problemIndex);
    }

    // 高品質ダミー生成
    generateQualityDummy(correctAnswer, usedOptions, index) {
        // 中学受験レベルの漢字読みパターン
        const qualityDummies = [
            "しょうえつ", "たくこし", "たくぜつ", "いちわ", "いつだん", "けんじょう",
            "きょうそん", "けんしょう", "とうさつ", "どうかつ", "とうかつ", "かつとう",
            "くずとう", "かつどう", "ゆうろ", "うりょ", "ゆりょ", "まいじん",
            "ばいしん", "ばいじん", "りんが", "りょうか", "りんか", "けんちゃく",
            "ざんじん", "せんしん", "もさく", "たんちょ", "はじまり", "かんせつ",
            "しんじゅう", "がいれん", "そんしゅ", "じょうそく", "けねん", "せんだい"
        ];
        
        // 使用されていないダミーを検索
        for (let i = 0; i < qualityDummies.length; i++) {
            const dummy = qualityDummies[(index * 7 + i) % qualityDummies.length];
            if (!usedOptions.includes(dummy)) {
                return dummy;
            }
        }
        
        // フォールバック: ユニークな文字列生成
        return `dummy${index}_${Math.random().toString(36).substr(2, 4)}`;
    }

    // 選択肢をシャッフル（正解位置ランダム化）
    shuffleOptions(options, seed) {
        const shuffled = [...options];
        
        // シード付きシャッフル
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.abs(Math.sin(seed + i) * 10000) % (i + 1);
            [shuffled[i], shuffled[Math.floor(j)]] = [shuffled[Math.floor(j)], shuffled[i]];
        }
        
        return shuffled;
    }

    // 全問題の検証サマリー
    validateAllProblems(problems) {
        console.log('📊 全問題検証サマリー:');
        
        let totalDuplicates = 0;
        let fixedProblems = 0;
        
        problems.forEach((problem, index) => {
            const duplicates = this.findDuplicates(problem.options);
            if (duplicates.length > 0) {
                totalDuplicates += duplicates.length;
                fixedProblems++;
                console.log(`❌ 問題${index + 1}: 重複${duplicates.length}個`);
            }
        });
        
        console.log(`📈 検証結果: ${problems.length}問中${fixedProblems}問に重複、合計${totalDuplicates}個の重複`);
        
        return {
            totalProblems: problems.length,
            problemsWithDuplicates: fixedProblems,
            totalDuplicates: totalDuplicates,
            isHealthy: totalDuplicates === 0
        };
    }
}

// 問題生成時の重複チェック機能
function ensureUniqueOptions(problemData) {
    const validator = new OptionValidator();
    
    if (Array.isArray(problemData)) {
        // 配列の場合
        return validator.validateAndFixOptions(problemData);
    } else {
        // 単一問題の場合
        return validator.fixDuplicateOptions(problemData, 0);
    }
}

// グローバル関数として公開
window.OptionValidator = OptionValidator;
window.ensureUniqueOptions = ensureUniqueOptions;

console.log('🛡️ 選択肢重複検証システム読み込み完了');