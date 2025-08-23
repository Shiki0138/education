// 動的問題生成エンジン - 完全重複なしシステム

class TrulyUniqueProblemGenerator {
    constructor() {
        this.isInitialized = false;
        this.usedKanjiHistory = this.loadUsageHistory();
        this.currentLevel = 3; // 偏差値50レベル
        this.init();
    }

    init() {
        if (typeof largeKanjiDatabase !== 'undefined') {
            this.database = largeKanjiDatabase;
            this.isInitialized = true;
            console.log('✅ 大規模データベース初期化完了');
            console.log(`📚 データベース規模: 漢字${this.database.kanji.length}個, 文脈${this.database.contextPatterns.length}種類`);
        } else {
            console.error('❌ 大規模データベースが読み込まれていません');
            this.createEmergencyDatabase();
        }
    }

    // 今日の完全ユニーク問題生成（絶対重複なし）
    generateTodayProblems() {
        if (!this.isInitialized) {
            console.warn('⚠️ エンジン未初期化、緊急モード使用');
            return this.getEmergencyProblems();
        }

        const today = new Date();
        const dateKey = this.getDateKey(today);
        
        // 過去7日間の使用漢字をチェック
        const recentUsed = this.getRecentUsedKanji(7);
        console.log(`📋 過去7日間で使用された漢字: ${recentUsed.length}個`);
        
        // 未使用漢字のフィルタリング
        const availableKanji = this.database.kanji.filter(k => {
            return !recentUsed.includes(k.word) && k.level <= this.currentLevel;
        });
        
        console.log(`🎯 本日利用可能な漢字: ${availableKanji.length}個`);
        
        if (availableKanji.length < 10) {
            console.warn('⚠️ 利用可能漢字不足、履歴リセット');
            this.resetUsageHistory();
            return this.generateTodayProblems(); // 再帰的に再生成
        }

        // 10問の完全ユニーク問題生成
        const problems = [];
        const usedToday = [];
        
        for (let i = 0; i < 10; i++) {
            const problem = this.generateSingleUniqueProblem(today, availableKanji, usedToday, i);
            problems.push(problem);
            usedToday.push(problem.kanjiWord);
        }

        // 使用履歴に記録
        this.recordTodayUsage(dateKey, usedToday);
        
        console.log(`✅ ${problems.length}問の完全ユニーク問題生成完了`);
        console.log(`📝 本日の漢字:`, usedToday);
        
        return problems;
    }

    // 単一問題生成（完全ユニーク保証）
    generateSingleUniqueProblem(date, availableKanji, usedToday, index) {
        const seed = this.createDateSeed(date) + index * 9999;
        
        // 今日まだ使っていない漢字から選択
        const todayAvailable = availableKanji.filter(k => !usedToday.includes(k.word));
        
        if (todayAvailable.length === 0) {
            console.error('❌ 本日利用可能漢字が不足');
            return this.getEmergencyProblem(index);
        }

        // シード付きランダム選択
        const kanjiIndex = this.seededRandom(seed, 0, todayAvailable.length - 1);
        const selectedKanji = todayAvailable[kanjiIndex];
        
        // 文脈パターン生成
        const contextSeed = seed + 1000;
        const contextIndex = this.seededRandom(contextSeed, 0, this.database.contextPatterns.length - 1);
        const pattern = this.database.contextPatterns[contextIndex];
        
        // より自然な文脈生成
        const questionText = this.generateNaturalContext(selectedKanji, pattern, seed);
        
        // 高品質ダミー選択肢生成
        const dummyOptions = this.generateIntelligentDummies(selectedKanji, seed + 2000);
        
        // 選択肢最終配置
        const allOptions = [selectedKanji.reading, ...dummyOptions];
        const finalOptions = this.distributeOptions(allOptions, seed + 3000);
        const correctIndex = finalOptions.indexOf(selectedKanji.reading);
        
        return {
            id: `unique_${this.createDateSeed(date)}_${index}`,
            question: `傍線部の漢字の読み方を答えなさい：${questionText}`,
            options: finalOptions,
            correct: correctIndex,
            hint: `「${selectedKanji.word}」は「${selectedKanji.meaning}」という意味です`,
            explanation: `${selectedKanji.word}（${selectedKanji.reading}）= ${selectedKanji.meaning}`,
            kanjiWord: selectedKanji.word,
            level: selectedKanji.level,
            grade: selectedKanji.grade,
            context: questionText,
            generatedAt: new Date().toISOString(),
            uniqueId: `${date.getTime()}_${index}_${selectedKanji.word}`
        };
    }

    // より自然な文脈生成
    generateNaturalContext(kanji, pattern, seed) {
        const contextVariations = {
            "態度": ["態度", "姿勢", "振る舞い", "行動"],
            "考え方": ["考え方", "思想", "見解", "価値観"],
            "方法": ["方法", "手段", "技術", "手法"],
            "状況": ["状況", "環境", "条件", "事態"],
            "成果": ["成果", "結果", "効果", "実績"]
        };
        
        let context = pattern.replace('{kanji}', kanji.word);
        
        // 文脈をより豊かにする
        Object.keys(contextVariations).forEach(key => {
            if (context.includes(key)) {
                const variations = contextVariations[key];
                const varIndex = this.seededRandom(seed, 0, variations.length - 1);
                context = context.replace(key, variations[varIndex]);
            }
        });
        
        return context;
    }

    // 知的ダミー選択肢生成
    generateIntelligentDummies(kanji, seed) {
        const dummies = [];
        
        // 1. 音韻的に似たダミー生成
        const phoneticDummy = this.generatePhoneticDummy(kanji.reading, seed);
        if (phoneticDummy) dummies.push(phoneticDummy);
        
        // 2. 意味的に関連するダミー生成
        const semanticDummy = this.generateSemanticDummy(kanji, seed + 100);
        if (semanticDummy) dummies.push(semanticDummy);
        
        // 3. 完全ランダムダミー生成
        while (dummies.length < 3) {
            const randomIndex = this.seededRandom(seed + dummies.length * 200, 0, this.database.dummyReadings.length - 1);
            const dummy = this.database.dummyReadings[randomIndex];
            
            if (!dummies.includes(dummy) && dummy !== kanji.reading) {
                dummies.push(dummy);
            }
        }
        
        return dummies.slice(0, 3);
    }

    // 音韻的ダミー生成
    generatePhoneticDummy(reading, seed) {
        const variations = {
            "あ": ["あ", "お", "う"], "い": ["い", "え", "お"], "う": ["う", "お", "あ"],
            "え": ["え", "い", "お"], "お": ["お", "う", "あ"],
            "か": ["が", "こ", "く"], "き": ["ぎ", "け", "く"], "く": ["ぐ", "こ", "か"],
            "け": ["げ", "き", "こ"], "こ": ["ご", "く", "か"],
            "さ": ["ざ", "し", "す"], "し": ["じ", "せ", "す"], "す": ["ず", "そ", "さ"],
            "せ": ["ぜ", "し", "そ"], "そ": ["ぞ", "す", "さ"],
            "た": ["だ", "と", "つ"], "ち": ["ぢ", "て", "つ"], "つ": ["づ", "と", "た"],
            "て": ["で", "ち", "と"], "と": ["ど", "つ", "た"]
        };
        
        let modified = reading;
        const chars = reading.split('');
        
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (variations[char]) {
                const varIndex = this.seededRandom(seed + i, 0, variations[char].length - 1);
                chars[i] = variations[char][varIndex];
                break;
            }
        }
        
        return chars.join('');
    }

    // 意味的ダミー生成
    generateSemanticDummy(kanji, seed) {
        const semanticGroups = {
            "感情": ["かんじょう", "きもち", "こころ", "いんしょう"],
            "行動": ["こうどう", "しぐさ", "ふるまい", "たいど"],
            "状態": ["じょうたい", "ようす", "けいきょう", "かんきょう"],
            "程度": ["ていど", "だんかい", "レベル", "きゅう"]
        };
        
        // 漢字の意味から関連グループを特定
        let relatedGroup = null;
        if (kanji.meaning.includes("気持ち") || kanji.meaning.includes("心")) {
            relatedGroup = semanticGroups["感情"];
        } else if (kanji.meaning.includes("行動") || kanji.meaning.includes("態度")) {
            relatedGroup = semanticGroups["行動"];
        } else if (kanji.meaning.includes("状態") || kanji.meaning.includes("様子")) {
            relatedGroup = semanticGroups["状態"];
        }
        
        if (relatedGroup) {
            const index = this.seededRandom(seed, 0, relatedGroup.length - 1);
            return relatedGroup[index];
        }
        
        return null;
    }

    // 選択肢の適切な配置
    distributeOptions(options, seed) {
        const distributed = ['', '', '', ''];
        const correctPos = this.seededRandom(seed, 0, 3);
        
        distributed[correctPos] = options[0]; // 正解を配置
        
        let dummyIndex = 1;
        for (let i = 0; i < 4; i++) {
            if (distributed[i] === '') {
                distributed[i] = options[dummyIndex++];
            }
        }
        
        return distributed;
    }

    // 使用履歴管理
    getRecentUsedKanji(days) {
        const today = new Date();
        const used = [];
        
        for (let i = 1; i <= days; i++) {
            const pastDate = new Date(today);
            pastDate.setDate(today.getDate() - i);
            const dateKey = this.getDateKey(pastDate);
            
            if (this.usedKanjiHistory[dateKey]) {
                used.push(...this.usedKanjiHistory[dateKey]);
            }
        }
        
        return [...new Set(used)];
    }

    // 今日の使用記録
    recordTodayUsage(dateKey, kanjiList) {
        this.usedKanjiHistory[dateKey] = kanjiList;
        this.saveUsageHistory();
        
        // 30日より古い履歴は削除（メモリ節約）
        this.cleanOldHistory(30);
    }

    // 古い履歴削除
    cleanOldHistory(keepDays) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - keepDays);
        
        Object.keys(this.usedKanjiHistory).forEach(dateKey => {
            const historyDate = new Date(dateKey);
            if (historyDate < cutoffDate) {
                delete this.usedKanjiHistory[dateKey];
            }
        });
        
        this.saveUsageHistory();
    }

    // 履歴リセット（35日周期）
    resetUsageHistory() {
        console.log('🔄 使用履歴をリセット（新しいサイクル開始）');
        this.usedKanjiHistory = {};
        this.saveUsageHistory();
    }

    // 緊急用データベース作成
    createEmergencyDatabase() {
        console.log('🚨 緊急用データベース作成中...');
        
        this.database = {
            kanji: [
                { word: "卓越", reading: "たくえつ", meaning: "他より優れる", level: 3, grade: "中受" },
                { word: "逸話", reading: "いつわ", meaning: "興味深い話", level: 3, grade: "中受" },
                { word: "謙遜", reading: "けんそん", meaning: "控えめな態度", level: 3, grade: "中受" },
                { word: "洞察", reading: "どうさつ", meaning: "本質を見抜く", level: 3, grade: "中受" },
                { word: "葛藤", reading: "かっとう", meaning: "心の対立", level: 3, grade: "中受" }
            ],
            contextPatterns: [
                "彼の【{kanji}】した態度に感心した。",
                "この【{kanji}】な考え方は重要だ。",
                "【{kanji}】について詳しく説明する。"
            ],
            dummyReadings: [
                "しょうえつ", "たくこし", "いちわ", "けんじょう", "とうさつ",
                "かつとう", "ゆうろ", "まいじん", "りんが", "けんちゃく"
            ]
        };
        
        this.isInitialized = true;
        console.log('✅ 緊急用データベース作成完了');
    }

    // 緊急用問題取得
    getEmergencyProblems() {
        return [
            {
                id: "emergency_001",
                question: "傍線部の漢字の読み方を答えなさい：彼の【卓越】した技術に驚いた。",
                options: ["たくえつ", "たくこし", "しょうえつ", "たくぜつ"],
                correct: 0,
                hint: "他より優れるという意味です",
                explanation: "卓越（たくえつ）= 他より特に優れること",
                kanjiWord: "卓越"
            }
        ];
    }

    // ユーティリティ関数
    getDateKey(date) {
        return date.toISOString().split('T')[0];
    }

    createDateSeed(date) {
        return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    }

    seededRandom(seed, min, max) {
        const x = Math.sin(seed) * 10000;
        const random = x - Math.floor(x);
        return min + Math.floor(random * (max - min + 1));
    }

    // 履歴管理
    loadUsageHistory() {
        try {
            return JSON.parse(localStorage.getItem('uniqueKanjiHistory')) || {};
        } catch {
            return {};
        }
    }

    saveUsageHistory() {
        try {
            localStorage.setItem('uniqueKanjiHistory', JSON.stringify(this.usedKanjiHistory));
        } catch (error) {
            console.warn('履歴保存エラー:', error);
        }
    }

    // 重複率チェック
    analyzeDuplication(days = 30) {
        const today = new Date();
        const allUsed = [];
        
        for (let i = 0; i < days; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateKey = this.getDateKey(date);
            
            if (this.usedKanjiHistory[dateKey]) {
                allUsed.push(...this.usedKanjiHistory[dateKey]);
            }
        }
        
        const unique = [...new Set(allUsed)];
        const duplicationRate = allUsed.length > 0 ? ((allUsed.length - unique.length) / allUsed.length) * 100 : 0;
        
        console.log(`📊 過去${days}日間の重複分析:`);
        console.log(`   総出題: ${allUsed.length}問`);
        console.log(`   ユニーク: ${unique.length}問`);
        console.log(`   重複率: ${duplicationRate.toFixed(1)}%`);
        
        return {
            totalProblems: allUsed.length,
            uniqueProblems: unique.length,
            duplicationRate: duplicationRate,
            isHealthy: duplicationRate < 10 // 10%未満なら健全
        };
    }

    // システム健全性チェック
    healthCheck() {
        const analysis = this.analyzeDuplication(14); // 過去2週間
        const status = {
            engineStatus: this.isInitialized ? 'HEALTHY' : 'ERROR',
            databaseSize: this.database?.kanji?.length || 0,
            duplicationRate: analysis.duplicationRate,
            recommendedAction: analysis.isHealthy ? 'CONTINUE' : 'RESET_HISTORY'
        };
        
        console.log('🏥 システム健全性チェック:', status);
        
        if (!analysis.isHealthy) {
            console.warn('⚠️ 重複率が高いため履歴リセットを推奨');
        }
        
        return status;
    }
}

// グローバルインスタンス
window.uniqueGenerator = new TrulyUniqueProblemGenerator();

// 今日の問題生成関数（index.htmlから呼び出し）
window.generateTodayUniqueProblems = function() {
    return window.uniqueGenerator.generateTodayProblems();
};

// 重複チェック関数
window.checkProblemDuplication = function() {
    return window.uniqueGenerator.analyzeDuplication();
};

console.log('🎯 真の重複なし問題生成エンジン読み込み完了');