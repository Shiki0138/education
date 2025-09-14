// 追手門学院中学入試対策 総合国語学習システム - コア実装

class ComprehensiveJapaneseSystem {
    constructor() {
        this.problemTypes = {
            KANJI_READING: 'kanji_reading',
            KANJI_WRITING: 'kanji_writing',
            HOMOPHONE: 'homophone',
            ANTONYM_SYNONYM: 'antonym_synonym',
            READING_COMPREHENSION: 'reading_comprehension',
            NARRATIVE_READING: 'narrative_reading',
            POETRY_APPRECIATION: 'poetry_appreciation',
            PARTS_OF_SPEECH: 'parts_of_speech',
            HONORIFIC: 'honorific',
            SENTENCE_STRUCTURE: 'sentence_structure',
            PROVERB_MEANING: 'proverb_meaning',
            IDIOM_USAGE: 'idiom_usage',
            FOUR_CHARACTER_IDIOM: 'four_character_idiom'
        };
        
        // 読解問題動的生成システムの初期化
        if (typeof ReadingPassageGenerator !== 'undefined') {
            this.readingGenerator = new ReadingPassageGenerator();
        }
        
        this.initializeDatabase();
    }

    // データベース初期化
    initializeDatabase() {
        // 既存の漢字データベースを統合
        this.kanjiDatabase = largeKanjiDatabase;
        
        // 読解問題データベース
        this.readingDatabase = {
            explanatory: [
                {
                    id: 'exp_001',
                    title: '地球温暖化について',
                    text: `地球温暖化とは、人間の活動によって大気中の二酸化炭素などの温室効果ガスが増加し、地球の平均気温が上昇する現象である。この問題は、単に気温が上がるだけでなく、海面上昇、異常気象の増加、生態系への影響など、様々な問題を引き起こす。

私たち一人一人ができることは、エネルギーの節約、リサイクルの推進、公共交通機関の利用などがある。小さな行動の積み重ねが、大きな変化を生み出すのである。`,
                    wordCount: 150,
                    questions: [
                        {
                            q: '地球温暖化の原因として本文に書かれているものは何か。',
                            options: [
                                '温室効果ガスの増加',
                                '海面の上昇',
                                '異常気象の発生',
                                '生態系の変化'
                            ],
                            correct: 0,
                            type: '内容理解'
                        },
                        {
                            q: '筆者が最も伝えたいことは何か。',
                            options: [
                                '地球温暖化は深刻な問題である',
                                '一人一人の行動が大切である',
                                '気温が上昇している',
                                'リサイクルを推進すべきだ'
                            ],
                            correct: 1,
                            type: '主題'
                        }
                    ],
                    level: 2
                },
                {
                    id: 'exp_002',
                    title: '日本の伝統工芸',
                    text: `日本には、長い歴史の中で培われてきた数多くの伝統工芸がある。これらは単なる物作りの技術ではなく、日本人の美意識や価値観を反映した文化遺産である。

例えば、陶芸では「用の美」という考え方がある。これは、日常的に使うものにこそ美しさを求めるという思想だ。また、漆器には「経年美」という概念があり、使い込むほどに味わいが増すことを良しとする。

しかし、現代では後継者不足が深刻な問題となっている。若い世代に伝統工芸の魅力を伝え、新しい形で継承していくことが求められている。`,
                    wordCount: 200,
                    questions: [
                        {
                            q: '「用の美」とは何か。',
                            options: [
                                '美しいものを飾ること',
                                '日常使いのものに美を求めること',
                                '高価なものを大切にすること',
                                '古いものを保存すること'
                            ],
                            correct: 1,
                            type: '語句の意味'
                        },
                        {
                            q: '伝統工芸が直面している問題は何か。',
                            options: [
                                '材料が不足している',
                                '技術が失われている',
                                '後継者が不足している',
                                '需要が増えすぎている'
                            ],
                            correct: 2,
                            type: '内容理解'
                        }
                    ],
                    level: 3
                }
            ],
            narrative: [
                {
                    id: 'nar_001',
                    title: '転校生',
                    text: `太郎は、転校してきたばかりで友達がいなかった。休み時間も一人で本を読んでいた。クラスメイトたちは楽しそうに話しているのに、自分だけが輪に入れない。

ある日、クラスメイトの花子が声をかけてきた。
「一緒に遊ぼう」
その一言が、太郎の学校生活を大きく変えることになった。花子の優しさに触れて、太郎は少しずつ心を開いていった。`,
                    wordCount: 120,
                    questions: [
                        {
                            q: '太郎の気持ちとして最も適切なものは？',
                            options: [
                                '寂しかったが、希望を持った',
                                '怒っていたが、落ち着いた',
                                '楽しかったが、不安になった',
                                '悲しかったが、あきらめた'
                            ],
                            correct: 0,
                            type: '心情理解'
                        },
                        {
                            q: '花子の行動から読み取れることは？',
                            options: [
                                '先生に言われて声をかけた',
                                '太郎を気にかけていた',
                                '暇だったから声をかけた',
                                '宿題を聞きたかった'
                            ],
                            correct: 1,
                            type: '行動理解'
                        }
                    ],
                    level: 1
                },
                {
                    id: 'nar_002',
                    title: '夏祭りの夜',
                    text: `夏祭りの夜、私は母と一緒に神社へ向かった。提灯の明かりが参道を照らし、太鼓の音が遠くから聞こえてくる。

「昔、お母さんも子供の頃、おばあちゃんとこの祭りに来たのよ」
母の顔が、提灯の光に照らされて優しく見えた。

屋台で買った綿あめを食べながら、私は思った。いつか私も、自分の子供とこの祭りに来るのだろうか。伝統は、こうして受け継がれていくのかもしれない。`,
                    wordCount: 150,
                    questions: [
                        {
                            q: 'この文章の主題は何か。',
                            options: [
                                '夏祭りの楽しさ',
                                '伝統の継承',
                                '親子の絆',
                                '昔の思い出'
                            ],
                            correct: 1,
                            type: '主題'
                        },
                        {
                            q: '「私」が最後に考えたことから分かることは？',
                            options: [
                                '祭りが楽しかった',
                                '母親に感謝している',
                                '伝統の大切さに気づいた',
                                '綿あめが美味しかった'
                            ],
                            correct: 2,
                            type: '心情理解'
                        }
                    ],
                    level: 2
                }
            ],
            poetry: [
                {
                    id: 'poe_001',
                    type: 'haiku',
                    text: '古池や　蛙飛び込む　水の音',
                    author: '松尾芭蕉',
                    questions: [
                        {
                            q: 'この俳句から感じられる情景は？',
                            options: [
                                '静寂の中の一瞬の動き',
                                'にぎやかな池の様子',
                                '激しい雨の音',
                                '朝の爽やかな風景'
                            ],
                            correct: 0,
                            type: '鑑賞'
                        }
                    ],
                    level: 3
                },
                {
                    id: 'poe_002',
                    type: 'tanka',
                    text: '春過ぎて　夏来にけらし　白妙の　衣干すてふ　天の香具山',
                    author: '持統天皇',
                    questions: [
                        {
                            q: 'この短歌で詠まれている季節は？',
                            options: [
                                '春',
                                '夏',
                                '秋',
                                '冬'
                            ],
                            correct: 1,
                            type: '内容理解'
                        }
                    ],
                    level: 4
                }
            ]
        };

        // 文法問題データベース
        this.grammarDatabase = {
            partsOfSpeech: [
                {
                    id: 'pos_001',
                    sentence: '美しい花が咲いている。',
                    underlined: '美しい',
                    question: '下線部の品詞を答えなさい。',
                    options: ['形容詞', '形容動詞', '連体詞', '副詞'],
                    correct: 0,
                    explanation: '「美しい」は「い」で終わる形容詞です。',
                    level: 2
                },
                {
                    id: 'pos_002',
                    sentence: '静かな教室で勉強する。',
                    underlined: '静かな',
                    question: '下線部の品詞を答えなさい。',
                    options: ['形容詞', '形容動詞', '連体詞', '副詞'],
                    correct: 1,
                    explanation: '「静かだ」は形容動詞で、「な」は連体形の活用語尾です。',
                    level: 2
                }
            ],
            honorifics: [
                {
                    id: 'hon_001',
                    question: '「先生が来る」を尊敬語で表現したものは？',
                    options: [
                        '先生がいらっしゃる',
                        '先生が参る',
                        '先生が伺う',
                        '先生がおる'
                    ],
                    correct: 0,
                    explanation: '「いらっしゃる」は「来る」の尊敬語です。',
                    level: 2
                },
                {
                    id: 'hon_002',
                    question: '「私が行く」を謙譲語で表現したものは？',
                    options: [
                        '私がいらっしゃる',
                        '私が参る',
                        '私がおいでになる',
                        '私が行かれる'
                    ],
                    correct: 1,
                    explanation: '「参る」は「行く」の謙譲語です。',
                    level: 2
                }
            ],
            sentenceStructure: [
                {
                    id: 'ss_001',
                    sentence: '昨日、妹が図書館で借りた本を私は読んだ。',
                    question: 'この文の主語を選びなさい。',
                    options: ['私', '妹', '本', '図書館'],
                    correct: 0,
                    explanation: '「読んだ」の主語は「私」です。',
                    level: 3
                }
            ]
        };

        // 語彙問題データベース（対義語・類義語）
        this.vocabularyDatabase = {
            antonyms: [
                { word: '創造', antonym: '破壊', level: 3 },
                { word: '積極的', antonym: '消極的', level: 2 },
                { word: '楽観', antonym: '悲観', level: 3 },
                { word: '具体的', antonym: '抽象的', level: 3 }
            ],
            synonyms: [
                { word: '思考', synonym: '思索', level: 3 },
                { word: '観察', synonym: '観測', level: 2 },
                { word: '推測', synonym: '推察', level: 3 }
            ]
        };
    }

    // 日次チャレンジ問題生成（総合版）
    generateDailyChallenge(date, userLevel = 2) {
        const problems = [];
        
        // 1. 漢字問題（4問）
        problems.push(...this.generateKanjiProblems(2, userLevel)); // 読み2問
        problems.push(...this.generateKanjiWritingProblems(1, userLevel)); // 書き1問
        problems.push(...this.generateHomophoneProblems(1, userLevel)); // 同音異義語1問
        
        // 2. 読解問題（3問） - 日付を渡して動的生成
        problems.push(...this.generateReadingProblems(2, userLevel, date)); // 説明文1、物語文1
        problems.push(...this.generatePoetryProblems(1, userLevel, date)); // 詩歌1問
        
        // 3. 文法問題（2問）
        problems.push(...this.generateGrammarProblems(2, userLevel));
        
        // 4. ことわざ・慣用句（1問）
        problems.push(...this.generateIdiomProblems(1, userLevel));
        
        return this.shuffleProblems(problems, date);
    }

    // 漢字読み問題生成
    generateKanjiProblems(count, level) {
        const problems = [];
        const availableKanji = this.kanjiDatabase.kanji.filter(k => 
            Math.abs(k.level - level) <= 1
        );
        
        for (let i = 0; i < count; i++) {
            const kanji = this.selectRandom(availableKanji);
            const pattern = this.selectRandom(this.kanjiDatabase.contextPatterns);
            const question = pattern.replace('{kanji}', kanji.word);
            
            problems.push({
                type: this.problemTypes.KANJI_READING,
                question: `次の文の【　】内の漢字の読み方を選びなさい。\n${question}`,
                options: this.generateKanjiOptions(kanji.reading, level),
                correct: 0,
                explanation: `${kanji.word}（${kanji.reading}）: ${kanji.meaning}`,
                level: kanji.level,
                category: '漢字読み'
            });
        }
        
        return problems;
    }

    // 漢字書き取り問題生成
    generateKanjiWritingProblems(count, level) {
        const problems = [];
        const writingPatterns = [
            { hiragana: 'かんさつ', kanji: '観察', options: ['観察', '感察', '監察', '鑑察'] },
            { hiragana: 'けんこう', kanji: '健康', options: ['健康', '健幸', '建康', '建幸'] },
            { hiragana: 'ぎじゅつ', kanji: '技術', options: ['技術', '技述', '義術', '義述'] }
        ];
        
        for (let i = 0; i < count; i++) {
            const pattern = this.selectRandom(writingPatterns);
            problems.push({
                type: this.problemTypes.KANJI_WRITING,
                question: `次の文の「　」内のひらがなを漢字に直しなさい。\n「${pattern.hiragana}」日記をつける。`,
                options: pattern.options,
                correct: 0,
                level: level,
                category: '漢字書き'
            });
        }
        
        return problems;
    }

    // 同音異義語問題生成
    generateHomophoneProblems(count, level) {
        const problems = [];
        const homophones = this.kanjiDatabase.homophones.filter(h => 
            h.words.some(w => w.level <= level + 1)
        );
        
        for (let i = 0; i < count; i++) {
            const homophone = this.selectRandom(homophones);
            problems.push({
                type: this.problemTypes.HOMOPHONE,
                question: `次の文の（　）に入る「${homophone.reading}」として正しい漢字を選びなさい。\n1. 私の（　）を述べる。\n2. 建物を（　）する。`,
                options: homophone.words.map(w => w.word),
                correct: 0,
                level: level,
                category: '同音異義語'
            });
        }
        
        return problems;
    }

    // 読解問題生成
    generateReadingProblems(count, level, date = new Date()) {
        // 動的生成システムを使用
        if (this.readingGenerator) {
            return this.readingGenerator.generateDailyReadingProblems(date, count, level);
        }
        
        // フォールバック: 既存のデータベースから生成
        const problems = [];
        
        // 説明文
        const expTexts = this.readingDatabase.explanatory.filter(r => 
            Math.abs(r.level - level) <= 1
        );
        
        // 物語文
        const narTexts = this.readingDatabase.narrative.filter(r => 
            Math.abs(r.level - level) <= 1
        );
        
        // 説明文と物語文を交互に追加
        let expIndex = 0;
        let narIndex = 0;
        
        for (let i = 0; i < count; i++) {
            if (i % 2 === 0 && expIndex < expTexts.length) {
                // 説明文を追加
                const expText = expTexts[expIndex % expTexts.length];
                const questionIndex = i % expText.questions.length;
                const question = expText.questions[questionIndex];
                
                problems.push({
                    type: this.problemTypes.READING_COMPREHENSION,
                    passage: {
                        title: expText.title,
                        text: expText.text,
                        wordCount: expText.wordCount
                    },
                    question: question.q,
                    options: question.options,
                    correct: question.correct,
                    level: expText.level,
                    category: '文章読解'
                });
                expIndex++;
            } else if (narIndex < narTexts.length) {
                // 物語文を追加
                const narText = narTexts[narIndex % narTexts.length];
                const questionIndex = i % narText.questions.length;
                const question = narText.questions[questionIndex];
                
                problems.push({
                    type: this.problemTypes.NARRATIVE_READING,
                    passage: {
                        title: narText.title,
                        text: narText.text,
                        wordCount: narText.wordCount
                    },
                    question: question.q,
                    options: question.options,
                    correct: question.correct,
                    level: narText.level,
                    category: '文章読解'
                });
                narIndex++;
            }
        }
        
        return problems;
    }

    // 詩歌問題生成
    generatePoetryProblems(count, level, date = new Date()) {
        // 動的生成システムを使用
        if (this.readingGenerator) {
            return this.readingGenerator.generateDailyPoetryProblems(date, count, level);
        }
        
        // フォールバック: 既存のデータベースから生成
        const problems = [];
        const poems = this.readingDatabase.poetry.filter(p => 
            p.questions[0] && Math.abs(p.level - level) <= 1
        );
        
        // 必要数だけ問題を生成
        for (let i = 0; i < count; i++) {
            const poemIndex = i % poems.length;
            const poem = poems[poemIndex];
            const questionIndex = i % poem.questions.length;
            const question = poem.questions[questionIndex];
            
            problems.push({
                type: this.problemTypes.POETRY_APPRECIATION,
                content: {
                    type: poem.type,
                    text: poem.text,
                    author: poem.author
                },
                question: question.q,
                options: question.options,
                correct: question.correct,
                level: poem.level,
                category: '文章読解'
            });
        }
        
        return problems;
    }

    // 文法問題生成
    generateGrammarProblems(count, level) {
        const problems = [];
        const grammarTypes = ['partsOfSpeech', 'honorifics', 'sentenceStructure'];
        
        for (let i = 0; i < count; i++) {
            const type = grammarTypes[i % grammarTypes.length];
            const questions = this.grammarDatabase[type].filter(q => 
                Math.abs(q.level - level) <= 1
            );
            
            if (questions.length > 0) {
                const q = this.selectRandom(questions);
                problems.push({
                    type: this.problemTypes[type.toUpperCase()],
                    question: q.question,
                    sentence: q.sentence,
                    underlined: q.underlined,
                    options: q.options,
                    correct: q.correct,
                    explanation: q.explanation,
                    level: q.level,
                    category: '文法'
                });
            }
        }
        
        return problems;
    }

    // ことわざ・慣用句問題生成
    generateIdiomProblems(count, level) {
        const problems = [];
        const idioms = this.kanjiDatabase.idioms.filter(i => 
            Math.abs(i.level - level) <= 1
        );
        
        // 必要数だけ問題を生成
        for (let i = 0; i < count; i++) {
            const idiomIndex = i % idioms.length;
            const idiom = idioms[idiomIndex];
            problems.push({
                type: this.problemTypes.PROVERB_MEANING,
                question: `「${idiom.phrase}」の意味として正しいものを選びなさい。`,
                options: this.generateIdiomOptions(idiom),
                correct: 0,
                level: idiom.level,
                category: 'ことわざ・慣用句'
            });
        }
        
        return problems;
    }

    // ユーティリティメソッド
    selectRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    shuffleProblems(problems, date) {
        const seed = date.getTime();
        const shuffled = [...problems];
        
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled;
    }

    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    generateKanjiOptions(correct, level) {
        const options = [correct];
        const dummies = this.kanjiDatabase.dummyReadings.filter(d => d !== correct);
        
        while (options.length < 4) {
            const dummy = this.selectRandom(dummies);
            if (!options.includes(dummy)) {
                options.push(dummy);
            }
        }
        
        return options;
    }

    generateIdiomOptions(idiom) {
        const correctMeaning = idiom.meaning;
        const dummyMeanings = [
            '努力することの大切さ',
            '時間を大切にすること',
            '友人を大切にすること',
            '自然の美しさ'
        ].filter(m => m !== correctMeaning);
        
        return [correctMeaning, ...dummyMeanings.slice(0, 3)];
    }

    // 学習履歴に基づく問題生成
    generateAdaptiveProblems(userId, problemCount = 10) {
        const history = this.loadUserHistory(userId);
        const weakCategories = this.analyzeWeaknesses(history);
        
        const problems = [];
        
        // 苦手分野を重点的に
        weakCategories.forEach(category => {
            const count = Math.ceil(problemCount * 0.3); // 30%は苦手分野
            problems.push(...this.generateCategoryProblems(category, count));
        });
        
        // 残りはバランス良く
        const remaining = problemCount - problems.length;
        problems.push(...this.generateBalancedProblems(remaining));
        
        return problems;
    }

    // カテゴリ別問題生成
    generateCategoryProblems(category, count) {
        switch(category) {
            case '漢字':
                return this.generateKanjiProblems(count, 2);
            case '読解':
                return this.generateReadingProblems(count, 2);
            case '文法':
                return this.generateGrammarProblems(count, 2);
            case '語彙':
                return this.generateIdiomProblems(count, 2);
            default:
                return [];
        }
    }

    // バランスの取れた問題生成
    generateBalancedProblems(count) {
        const problems = [];
        const distribution = {
            kanji: Math.floor(count * 0.4),
            reading: Math.floor(count * 0.3),
            grammar: Math.floor(count * 0.2),
            vocabulary: Math.ceil(count * 0.1)
        };
        
        problems.push(...this.generateKanjiProblems(distribution.kanji, 2));
        problems.push(...this.generateReadingProblems(distribution.reading, 2));
        problems.push(...this.generateGrammarProblems(distribution.grammar, 2));
        problems.push(...this.generateIdiomProblems(distribution.vocabulary, 2));
        
        return problems;
    }

    // ユーザー履歴分析
    analyzeWeaknesses(history) {
        if (!history || !history.sessions) return [];
        
        const categoryScores = {};
        
        history.sessions.forEach(session => {
            session.problems.forEach(problem => {
                if (!categoryScores[problem.category]) {
                    categoryScores[problem.category] = {
                        total: 0,
                        correct: 0
                    };
                }
                categoryScores[problem.category].total++;
                if (problem.correct) {
                    categoryScores[problem.category].correct++;
                }
            });
        });
        
        // 正解率が60%未満のカテゴリを抽出
        const weakCategories = [];
        Object.entries(categoryScores).forEach(([category, scores]) => {
            const rate = scores.correct / scores.total;
            if (rate < 0.6) {
                weakCategories.push(category);
            }
        });
        
        return weakCategories;
    }

    // ユーザー履歴読み込み
    loadUserHistory(userId) {
        try {
            return JSON.parse(localStorage.getItem(`studyHistory_${userId}`)) || {};
        } catch {
            return {};
        }
    }

    // 模擬試験生成
    generateMockExam(level = 2) {
        const exam = {
            timeLimit: 50 * 60, // 50分（秒）
            totalScore: 100,
            sections: []
        };
        
        // セクション1: 漢字・語彙（40点）
        exam.sections.push({
            name: '漢字・語彙',
            score: 40,
            problems: [
                ...this.generateKanjiProblems(10, level),
                ...this.generateKanjiWritingProblems(5, level),
                ...this.generateHomophoneProblems(5, level)
            ]
        });
        
        // セクション2: 読解（40点）
        exam.sections.push({
            name: '読解',
            score: 40,
            problems: [
                ...this.generateReadingProblems(4, level),
                ...this.generatePoetryProblems(2, level)
            ]
        });
        
        // セクション3: 文法・言語知識（20点）
        exam.sections.push({
            name: '文法・言語知識',
            score: 20,
            problems: [
                ...this.generateGrammarProblems(5, level),
                ...this.generateIdiomProblems(5, level)
            ]
        });
        
        return exam;
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComprehensiveJapaneseSystem;
}