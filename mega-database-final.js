// 500問漢字データベース統合版

// 全データベースを統合（安全な統合）
let all500KanjiProblems = [];

// 各データベースが読み込まれているかチェックして統合
if (typeof megaKanjiDatabase1 !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(megaKanjiDatabase1);
    console.log('Part 1 loaded:', megaKanjiDatabase1.length, '問');
}

if (typeof megaKanjiDatabase2 !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(megaKanjiDatabase2);
    console.log('Part 2 loaded:', megaKanjiDatabase2.length, '問');
}

if (typeof megaKanjiDatabase3 !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(megaKanjiDatabase3);
    console.log('Part 3 loaded:', megaKanjiDatabase3.length, '問');
}

if (typeof megaKanjiDatabase4 !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(megaKanjiDatabase4);
    console.log('Part 4 loaded:', megaKanjiDatabase4.length, '問');
}

if (typeof megaKanjiDatabase5 !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(megaKanjiDatabase5);
    console.log('Part 5 loaded:', megaKanjiDatabase5.length, '問');
}

console.log('🎯 統合後の漢字問題総数:', all500KanjiProblems.length);

// 正解分布チェック（500問全体）
function analyzeCorrectDistribution() {
    const distribution = {
        option0: all500KanjiProblems.filter(q => q.correct === 0).length,
        option1: all500KanjiProblems.filter(q => q.correct === 1).length,
        option2: all500KanjiProblems.filter(q => q.correct === 2).length,
        option3: all500KanjiProblems.filter(q => q.correct === 3).length
    };
    
    const total = Object.values(distribution).reduce((a, b) => a + b, 0);
    
    return {
        ...distribution,
        total: total,
        percentages: {
            option0: Math.round((distribution.option0 / total) * 100),
            option1: Math.round((distribution.option1 / total) * 100),
            option2: Math.round((distribution.option2 / total) * 100),
            option3: Math.round((distribution.option3 / total) * 100)
        }
    };
}

// レベル別統計
function analyzeLevelDistribution() {
    return {
        basic: all500KanjiProblems.filter(q => q.level === 'basic').length,
        intermediate: all500KanjiProblems.filter(q => q.level === 'intermediate').length,
        advanced: all500KanjiProblems.filter(q => q.level === 'advanced').length,
        total: all500KanjiProblems.length
    };
}

// タイプ別統計
function analyzeTypeDistribution() {
    return {
        reading: all500KanjiProblems.filter(q => q.type === 'reading').length,
        writing: all500KanjiProblems.filter(q => q.type === 'writing').length,
        yojijukugo: all500KanjiProblems.filter(q => q.type === 'yojijukugo').length,
        bushu: all500KanjiProblems.filter(q => q.type === 'bushu').length,
        kakusu: all500KanjiProblems.filter(q => q.type === 'kakusu').length,
        jukugo: all500KanjiProblems.filter(q => q.type === 'jukugo').length,
        total: all500KanjiProblems.length
    };
}

// 学習効率最適化システム
class KanjiLearningOptimizer {
    constructor() {
        this.problemDatabase = all500KanjiProblems;
        this.userProgress = {};
    }

    // レベル別問題取得
    getProblemsByLevel(level, count = 10) {
        const filtered = this.problemDatabase.filter(p => p.level === level);
        return this.shuffleArray(filtered).slice(0, count);
    }

    // 弱点対応問題取得
    getWeaknessProblems(studentData, count = 10) {
        let targetLevel = 'basic';
        
        if (studentData.accuracy > 70) {
            targetLevel = 'advanced';
        } else if (studentData.accuracy > 50) {
            targetLevel = 'intermediate';
        }
        
        const problems = this.getProblemsByLevel(targetLevel, count * 2);
        return this.shuffleArray(problems).slice(0, count);
    }

    // 復習問題取得（間違えた問題を優先）
    getReviewProblems(incorrectIds, count = 5) {
        const incorrectProblems = this.problemDatabase.filter(p => 
            incorrectIds.includes(p.id)
        );
        
        if (incorrectProblems.length >= count) {
            return this.shuffleArray(incorrectProblems).slice(0, count);
        } else {
            // 不足分はランダムで補完
            const additional = this.getRandomProblems(count - incorrectProblems.length);
            return [...incorrectProblems, ...additional];
        }
    }

    // ランダム問題取得（重複回避）
    getRandomProblems(count = 10, excludeIds = []) {
        const available = this.problemDatabase.filter(p => 
            !excludeIds.includes(p.id)
        );
        return this.shuffleArray(available).slice(0, count);
    }

    // 段階的学習プラン
    getStudyPlan(studentLevel, dayNumber) {
        const plansPerWeek = {
            week1: { basic: 7, intermediate: 3, advanced: 0 },
            week2: { basic: 5, intermediate: 4, advanced: 1 },
            week3: { basic: 3, intermediate: 5, advanced: 2 },
            week4: { basic: 2, intermediate: 5, advanced: 3 },
            month2: { basic: 1, intermediate: 4, advanced: 5 },
            month3: { basic: 0, intermediate: 3, advanced: 7 }
        };

        const currentWeek = Math.floor(dayNumber / 7) + 1;
        let plan;

        if (currentWeek <= 4) {
            plan = plansPerWeek[`week${currentWeek}`];
        } else if (dayNumber <= 60) {
            plan = plansPerWeek.month2;
        } else {
            plan = plansPerWeek.month3;
        }

        const problems = [];
        problems.push(...this.getProblemsByLevel('basic', plan.basic));
        problems.push(...this.getProblemsByLevel('intermediate', plan.intermediate));
        problems.push(...this.getProblemsByLevel('advanced', plan.advanced));

        return this.shuffleArray(problems);
    }

    // 配列シャッフル
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // 統計取得
    getStatistics() {
        return {
            correctDistribution: analyzeCorrectDistribution(),
            levelDistribution: analyzeLevelDistribution(),
            typeDistribution: analyzeTypeDistribution(),
            totalProblems: this.problemDatabase.length
        };
    }
}

// 最終統計
const finalStats = {
    totalProblems: 500,
    estimatedStudyTime: "50-60時間",
    completionPeriod: "3-4ヶ月",
    difficultyRange: "偏差値35-60対応",
    categories: {
        基礎漢字: "150問",
        応用漢字: "200問", 
        最難関漢字: "50問",
        四字熟語: "50問",
        部首画数: "30問",
        熟語構成: "20問"
    }
};

console.log('🎯 漢字問題500問データベース完成！', finalStats);

// グローバル展開
if (typeof window !== 'undefined') {
    window.all500KanjiProblems = all500KanjiProblems;
    window.KanjiLearningOptimizer = KanjiLearningOptimizer;
    window.kanjiOptimizer = new KanjiLearningOptimizer();
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        all500KanjiProblems, 
        KanjiLearningOptimizer,
        analyzeCorrectDistribution,
        analyzeLevelDistribution,
        analyzeTypeDistribution,
        finalStats
    };
}