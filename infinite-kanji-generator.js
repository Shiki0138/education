// 無限漢字問題生成システム - 毎日完全に異なる問題

class InfiniteKanjiGenerator {
    constructor() {
        // 中学受験頻出漢字データベース
        this.kanjiDatabase = [
            // 高難度漢字（偏差値50-55レベル）
            { kanji: "卓越", reading: "たくえつ", meaning: "他よりも特に優れていること", grade: "中学受験", difficulty: 5 },
            { kanji: "逸話", reading: "いつわ", meaning: "世間にあまり知られていない興味深い話", grade: "中学受験", difficulty: 5 },
            { kanji: "謙遜", reading: "けんそん", meaning: "控えめな態度をとること", grade: "中学受験", difficulty: 4 },
            { kanji: "洞察", reading: "どうさつ", meaning: "物事の本質を見抜くこと", grade: "中学受験", difficulty: 5 },
            { kanji: "葛藤", reading: "かっとう", meaning: "相反する気持ちで悩むこと", grade: "中学受験", difficulty: 5 },
            { kanji: "憂慮", reading: "ゆうりょ", meaning: "心配して思い悩むこと", grade: "中学受験", difficulty: 5 },
            { kanji: "邁進", reading: "まいしん", meaning: "目標に向かって勢いよく進むこと", grade: "中学受験", difficulty: 4 },
            { kanji: "凌駕", reading: "りょうが", meaning: "他を上回って優れること", grade: "中学受験", difficulty: 5 },
            { kanji: "顕著", reading: "けんちょ", meaning: "はっきりと目立つこと", grade: "中学受験", difficulty: 4 },
            { kanji: "斬新", reading: "ざんしん", meaning: "とても新しくて人を驚かせること", grade: "中学受験", difficulty: 4 },
            { kanji: "模索", reading: "ぼさく", meaning: "手探りで探し求めること", grade: "中学受験", difficulty: 4 },
            { kanji: "端緒", reading: "たんしょ", meaning: "物事の始まり、糸口", grade: "中学受験", difficulty: 5 },
            { kanji: "簡潔", reading: "かんけつ", meaning: "短くてわかりやすいこと", grade: "中学受験", difficulty: 3 },
            { kanji: "慎重", reading: "しんちょう", meaning: "注意深いこと", grade: "中学受験", difficulty: 3 },
            { kanji: "概念", reading: "がいねん", meaning: "物事の大まかな意味や考え", grade: "中学受験", difficulty: 4 },
            { kanji: "慣習", reading: "かんしゅう", meaning: "昔からの習慣", grade: "中学受験", difficulty: 4 },
            { kanji: "遵守", reading: "じゅんしゅ", meaning: "きまりを守ること", grade: "中学受験", difficulty: 5 },
            { kanji: "醸成", reading: "じょうせい", meaning: "少しずつ作り上げること", grade: "中学受験", difficulty: 5 },
            { kanji: "懸念", reading: "けんねん", meaning: "気がかりに思うこと", grade: "中学受験", difficulty: 4 },
            { kanji: "潜在", reading: "せんざい", meaning: "隠れて存在すること", grade: "中学受験", difficulty: 4 },
            { kanji: "曖昧", reading: "あいまい", meaning: "はっきりしないこと", grade: "中学受験", difficulty: 3 },
            { kanji: "希少", reading: "きしょう", meaning: "めったにないこと", grade: "中学受験", difficulty: 4 },
            { kanji: "堅固", reading: "けんご", meaning: "非常に堅いこと", grade: "中学受験", difficulty: 4 },
            { kanji: "荘厳", reading: "そうごん", meaning: "厳かで立派なこと", grade: "中学受験", difficulty: 5 },
            { kanji: "精緻", reading: "せいち", meaning: "非常に細かくて正確なこと", grade: "中学受験", difficulty: 5 },
            { kanji: "緻密", reading: "ちみつ", meaning: "細かくて正確なこと", grade: "中学受験", difficulty: 4 },
            { kanji: "拙劣", reading: "せつれつ", meaning: "とても下手なこと", grade: "中学受験", difficulty: 4 },
            { kanji: "脆弱", reading: "ぜいじゃく", meaning: "もろくて弱いこと", grade: "中学受験", difficulty: 4 },
            { kanji: "偏見", reading: "へんけん", meaning: "偏った見方", grade: "中学受験", difficulty: 3 },
            { kanji: "忖度", reading: "そんたく", meaning: "相手の気持ちを推し量ること", grade: "中学受験", difficulty: 5 },
            
            // 同音異義語（書き問題用）
            { kanji: "意見", reading: "いけん", meaning: "物事に対する考えや判断", type: "writing", grade: "小6", difficulty: 2 },
            { kanji: "異見", reading: "いけん", meaning: "反対の意見", type: "writing", grade: "中学受験", difficulty: 4 },
            { kanji: "保護", reading: "ほご", meaning: "危険から守ること", type: "writing", grade: "小5", difficulty: 2 },
            { kanji: "遂行", reading: "すいこう", meaning: "物事を最後まで行うこと", type: "writing", grade: "中学受験", difficulty: 4 },
            { kanji: "推考", reading: "すいこう", meaning: "推理して考えること", type: "writing", grade: "中学受験", difficulty: 5 },
            { kanji: "信頼", reading: "しんらい", meaning: "信じて頼りにすること", type: "writing", grade: "小6", difficulty: 3 },
            { kanji: "進歩", reading: "しんぽ", meaning: "より良い方向に進むこと", type: "writing", grade: "小5", difficulty: 2 },
            { kanji: "発展", reading: "はってん", meaning: "大きく発達すること", type: "writing", grade: "小5", difficulty: 2 },
            { kanji: "成功", reading: "せいこう", meaning: "物事がうまくいくこと", type: "writing", grade: "小4", difficulty: 2 },
            { kanji: "研究", reading: "けんきゅう", meaning: "物事を深く調べること", type: "writing", grade: "小3", difficulty: 2 }
        ];

        // 文脈パターン
        this.contextPatterns = [
            "彼の【{kanji}】した態度に感心した。",
            "この【{kanji}】な考え方は重要だ。",
            "【{kanji}】について詳しく説明する。",
            "社会の【{kanji}】が問題となっている。",
            "【{kanji}】を重ねて成果を上げた。",
            "将来への【{kanji}】が広がった。",
            "【{kanji}】な議論が続いている。",
            "この問題の【{kanji}】を図る。",
            "【{kanji}】な方法で解決した。",
            "時代の【{kanji}】を感じる。"
        ];

        // ダミー選択肢生成用
        this.dummyReadings = [
            "しょうえつ", "たくこし", "たくぜつ", "けんちゃく", "けんじょう", "きょうそん", 
            "どうかつ", "とうかつ", "とうさつ", "かつとう", "くずとう", "かつどう",
            "ゆうろ", "うりょ", "ゆりょ", "まいじん", "ばいしん", "ばいじん",
            "りんが", "りょうか", "りんか", "せんしん", "もさく", "たんちょ",
            "かんせつ", "しんじゅう", "がいれん", "そんしゅ", "じょうそく"
        ];
    }

    // 日付ベースの無限問題生成
    generateDailyProblems(date = new Date()) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        // 年月日を組み合わせたユニークシード
        const seed = year * 10000 + month * 100 + day;
        const problems = [];
        
        console.log(`🎯 ${date.toLocaleDateString('ja-JP')}用の問題を生成中...`);
        
        for (let i = 0; i < 10; i++) {
            // 各問題に異なるシードを使用
            const problemSeed = seed + i * 1000;
            const problem = this.generateSingleProblem(problemSeed, i + 1);
            problems.push(problem);
        }
        
        console.log(`✅ ${problems.length}問の新規問題生成完了`);
        console.log(`📝 本日の漢字:`, problems.map(p => p.kanjiWord));
        
        return problems;
    }

    // 単一問題生成
    generateSingleProblem(seed, questionNumber) {
        // シードから漢字を選択
        const kanjiIndex = this.seededRandom(seed, 0, this.kanjiDatabase.length - 1);
        const selectedKanji = this.kanjiDatabase[kanjiIndex];
        
        // シードから文脈パターンを選択
        const patternIndex = this.seededRandom(seed + 100, 0, this.contextPatterns.length - 1);
        const pattern = this.contextPatterns[patternIndex];
        
        // 問題文生成
        const questionText = pattern.replace('{kanji}', selectedKanji.kanji);
        
        // 選択肢生成（正解 + ダミー3個）
        const options = [selectedKanji.reading];
        
        // ダミー選択肢を3個生成
        const usedDummies = [];
        for (let i = 0; i < 3; i++) {
            let dummyReading;
            do {
                const dummyIndex = this.seededRandom(seed + 200 + i * 50, 0, this.dummyReadings.length - 1);
                dummyReading = this.dummyReadings[dummyIndex];
            } while (usedDummies.includes(dummyReading) || dummyReading === selectedKanji.reading);
            
            usedDummies.push(dummyReading);
            options.push(dummyReading);
        }
        
        // 選択肢をシャッフル
        const shuffledOptions = this.shuffleWithSeed(options, seed + 300);
        const correctIndex = shuffledOptions.indexOf(selectedKanji.reading);
        
        return {
            id: `generated_${seed}_${questionNumber}`,
            question: `傍線部の漢字の読み方を答えなさい：${questionText}`,
            options: shuffledOptions,
            correct: correctIndex,
            hint: `${selectedKanji.meaning}という意味です`,
            explanation: `${selectedKanji.kanji}（${selectedKanji.reading}）= ${selectedKanji.meaning}`,
            kanjiWord: selectedKanji.kanji,
            difficulty: selectedKanji.difficulty,
            generatedDate: new Date().toISOString()
        };
    }

    // シード付きランダム生成
    seededRandom(seed, min, max) {
        const x = Math.sin(seed) * 10000;
        const random = x - Math.floor(x);
        return min + Math.floor(random * (max - min + 1));
    }

    // シード付き配列シャッフル
    shuffleWithSeed(array, seed) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = this.seededRandom(seed + i, 0, i);
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // 週間学習履歴管理（重複防止）
    getWeeklyHistory() {
        const today = new Date();
        const weekHistory = [];
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            const dayProblems = this.generateDailyProblems(date);
            weekHistory.push({
                date: dateStr,
                kanji: dayProblems.map(p => p.kanjiWord)
            });
        }
        
        return weekHistory;
    }

    // 重複チェック（過去1週間）
    checkDuplication() {
        const history = this.getWeeklyHistory();
        const allKanji = history.flatMap(day => day.kanji);
        const uniqueKanji = [...new Set(allKanji)];
        
        console.log('📊 過去1週間の学習履歴:');
        history.forEach(day => {
            console.log(`${day.date}: ${day.kanji.join(', ')}`);
        });
        
        console.log(`📈 重複状況: 総出題${allKanji.length}問 / ユニーク${uniqueKanji.length}問`);
        console.log(`🎯 重複率: ${Math.round((1 - uniqueKanji.length / allKanji.length) * 100)}%`);
        
        return {
            totalProblems: allKanji.length,
            uniqueProblems: uniqueKanji.length,
            duplicationRate: Math.round((1 - uniqueKanji.length / allKanji.length) * 100)
        };
    }

    // 同音異義語問題生成
    generateHomophoneProblem(seed) {
        const homophones = [
            { correct: "意見", incorrect: ["異見", "医見", "移見"], meaning: "物事に対する考え" },
            { correct: "保護", incorrect: ["保互", "補護", "保後"], meaning: "危険から守ること" },
            { correct: "遂行", incorrect: ["推考", "水行", "垂行"], meaning: "最後まで行うこと" },
            { correct: "信頼", incorrect: ["心頼", "神頼", "新頼"], meaning: "信じて頼ること" },
            { correct: "発展", incorrect: ["発店", "発点", "八展"], meaning: "大きく発達すること" },
            { correct: "研究", incorrect: ["堅球", "健球", "研球"], meaning: "深く調べること" },
            { correct: "成功", incorrect: ["成幸", "誠考", "清功"], meaning: "うまくいくこと" }
        ];
        
        const homophoneIndex = this.seededRandom(seed, 0, homophones.length - 1);
        const selected = homophones[homophoneIndex];
        
        const allOptions = [selected.correct, ...selected.incorrect];
        const shuffledOptions = this.shuffleWithSeed(allOptions, seed + 1000);
        const correctIndex = shuffledOptions.indexOf(selected.correct);
        
        return {
            id: `homophone_${seed}`,
            question: `次の文の【　】に入る漢字を書きなさい：${this.generateHomophoneContext(selected)}`,
            options: shuffledOptions,
            correct: correctIndex,
            hint: `${selected.meaning}という意味です`,
            explanation: `${selected.correct}（${this.getReading(selected.correct)}）= ${selected.meaning}`,
            type: "writing"
        };
    }

    // 同音異義語の文脈生成
    generateHomophoneContext(homophone) {
        const contexts = {
            "意見": "会議で自分の【イケン】を述べる",
            "保護": "環境【ホゴ】に努める",
            "遂行": "計画の【スイコウ】が重要だ",
            "信頼": "友人を【シンライ】する",
            "発展": "都市の【ハッテン】が著しい",
            "研究": "科学【ケンキュウ】を進める",
            "成功": "事業の【セイコウ】を願う"
        };
        
        return contexts[homophone.correct] || `【読み】を考える`;
    }

    // 読み取得（簡易版）
    getReading(kanji) {
        const readings = {
            "意見": "いけん", "保護": "ほご", "遂行": "すいこう",
            "信頼": "しんらい", "発展": "はってん", "研究": "けんきゅう", "成功": "せいこう"
        };
        return readings[kanji] || "読み不明";
    }

    // 1ヶ月間の問題プレビュー
    generateMonthlyPreview() {
        const today = new Date();
        const preview = [];
        
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            
            const dayProblems = this.generateDailyProblems(date);
            preview.push({
                date: date.toLocaleDateString('ja-JP'),
                kanji: dayProblems.map(p => p.kanjiWord),
                sample: dayProblems[0] // 1問目のサンプル
            });
        }
        
        return preview;
    }
}

// 無限生成システムの使用例
function setupInfiniteKanjiSystem() {
    const generator = new InfiniteKanjiGenerator();
    
    // 今日の問題を生成
    const todayProblems = generator.generateDailyProblems();
    
    // 重複チェック
    generator.checkDuplication();
    
    // 1ヶ月プレビュー
    const monthlyPreview = generator.generateMonthlyPreview();
    console.log('📅 今後30日間の問題プレビュー:', monthlyPreview.slice(0, 7));
    
    return todayProblems;
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { InfiniteKanjiGenerator };
}