// 読解問題動的生成システム
// 毎日異なる読解問題を生成するためのモジュール

class ReadingPassageGenerator {
    constructor() {
        // 説明文のテンプレートとトピック
        this.explanatoryTopics = [
            {
                category: '科学・技術',
                themes: [
                    { topic: 'AI技術', keywords: ['人工知能', '機械学習', '自動化', '効率化'] },
                    { topic: '環境問題', keywords: ['地球温暖化', 'リサイクル', '持続可能', 'エコ'] },
                    { topic: '宇宙開発', keywords: ['ロケット', '宇宙飛行士', '国際宇宙ステーション', '探査'] },
                    { topic: '医療技術', keywords: ['再生医療', 'ワクチン', '健康寿命', '予防医学'] },
                    { topic: 'エネルギー', keywords: ['太陽光発電', '風力発電', '省エネ', '新エネルギー'] }
                ]
            },
            {
                category: '社会・文化',
                themes: [
                    { topic: '少子高齢化', keywords: ['出生率', '介護', '社会保障', '労働力'] },
                    { topic: '国際交流', keywords: ['グローバル化', '多文化共生', '留学', '言語'] },
                    { topic: '教育改革', keywords: ['アクティブラーニング', 'ICT教育', '生涯学習', 'プログラミング'] },
                    { topic: '働き方改革', keywords: ['テレワーク', 'ワークライフバランス', '生産性', '多様性'] },
                    { topic: '地域活性化', keywords: ['観光', '特産品', '移住', 'まちづくり'] }
                ]
            },
            {
                category: '自然・生物',
                themes: [
                    { topic: '生物多様性', keywords: ['絶滅危惧種', '生態系', '保護活動', '共生'] },
                    { topic: '気候変動', keywords: ['異常気象', '海面上昇', '温室効果', '適応策'] },
                    { topic: '森林保護', keywords: ['熱帯雨林', '砂漠化', '植林', '二酸化炭素'] },
                    { topic: '海洋環境', keywords: ['プラスチック問題', 'サンゴ礁', '漁業資源', '海洋汚染'] },
                    { topic: '都市の自然', keywords: ['都市公園', '屋上緑化', 'ビオトープ', '共存'] }
                ]
            }
        ];

        // 物語文のテンプレート
        this.narrativeTemplates = [
            {
                setting: '学校',
                situations: [
                    { event: '文化祭準備', emotions: ['期待', '不安', '協力', '達成感'] },
                    { event: '部活動', emotions: ['努力', '挫折', '友情', '成長'] },
                    { event: '転校', emotions: ['寂しさ', '新しい出会い', '勇気', '適応'] },
                    { event: '受験勉強', emotions: ['プレッシャー', '支え', '決意', '解放感'] },
                    { event: '卒業式', emotions: ['感謝', '別れ', '希望', '思い出'] }
                ]
            },
            {
                setting: '家族',
                situations: [
                    { event: '祖父母との交流', emotions: ['伝統', '知恵', '優しさ', '継承'] },
                    { event: '兄弟姉妹', emotions: ['競争', '助け合い', '理解', '絆'] },
                    { event: '引っ越し', emotions: ['不安', '冒険', '新生活', '成長'] },
                    { event: 'ペットとの生活', emotions: ['責任', '愛情', '別れ', '命の大切さ'] },
                    { event: '家族旅行', emotions: ['楽しみ', '発見', 'トラブル', '思い出'] }
                ]
            },
            {
                setting: '地域・社会',
                situations: [
                    { event: 'ボランティア活動', emotions: ['貢献', '学び', '感謝', '充実感'] },
                    { event: '地域の祭り', emotions: ['伝統', '準備', '協力', '達成感'] },
                    { event: '老人ホーム訪問', emotions: ['緊張', '交流', '理解', '成長'] },
                    { event: '職場体験', emotions: ['期待', '大変さ', '発見', '将来への思い'] },
                    { event: '災害ボランティア', emotions: ['衝撃', '助け合い', '希望', '絆'] }
                ]
            }
        ];

        // 詩歌のテーマ
        this.poetryThemes = [
            { season: '春', images: ['桜', '新芽', '蝶', '暖かい風', '入学式'] },
            { season: '夏', images: ['蝉', '入道雲', '海', '花火', '夏休み'] },
            { season: '秋', images: ['紅葉', '月', '稲穂', '虫の声', '収穫'] },
            { season: '冬', images: ['雪', '北風', '暖炉', '息白し', '年末'] }
        ];

        // 問題タイプのパターン
        this.questionPatterns = {
            explanatory: [
                { type: '内容理解', templates: [
                    '本文で述べられている{topic}の特徴として正しいものはどれか。',
                    '{topic}について、筆者が最も重要だと考えていることは何か。',
                    '本文の内容と一致するものを選びなさい。'
                ]},
                { type: '主題把握', templates: [
                    'この文章の主題として最も適切なものはどれか。',
                    '筆者がこの文章で最も伝えたいことは何か。',
                    'この文章のタイトルとして最も適切なものはどれか。'
                ]},
                { type: '語句の意味', templates: [
                    '傍線部「{word}」の意味として最も適切なものはどれか。',
                    '本文中の「{word}」とはどのような意味か。',
                    '「{word}」を別の言葉で言い換えるとどれが適切か。'
                ]}
            ],
            narrative: [
                { type: '心情理解', templates: [
                    '{character}の気持ちとして最も適切なものはどれか。',
                    'この場面での{character}の心情を表す言葉として正しいものはどれか。',
                    '{character}がこの行動をとった理由として考えられるものはどれか。'
                ]},
                { type: '場面理解', templates: [
                    'この場面の情景として適切なものはどれか。',
                    'この出来事が起こった時期はいつか。',
                    'この場面で起こったことを正しく説明しているものはどれか。'
                ]},
                { type: '主題', templates: [
                    'この物語のテーマとして最も適切なものはどれか。',
                    '作者がこの物語で伝えたかったことは何か。',
                    'この物語から学べることは何か。'
                ]}
            ]
        };
    }

    // 日付に基づいたシード値生成
    generateSeed(date) {
        const dateStr = date.toISOString().split('T')[0];
        let hash = 0;
        for (let i = 0; i < dateStr.length; i++) {
            hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    // シード付きランダム
    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    // 説明文生成
    generateExplanatoryText(date, level) {
        const seed = this.generateSeed(date);
        const categoryIndex = Math.floor(this.seededRandom(seed) * this.explanatoryTopics.length);
        const category = this.explanatoryTopics[categoryIndex];
        
        const themeIndex = Math.floor(this.seededRandom(seed + 1) * category.themes.length);
        const theme = category.themes[themeIndex];
        
        // レベルに応じた文章の複雑さ調整
        const complexity = {
            1: { sentences: 5, wordsPerSentence: 20 },
            2: { sentences: 7, wordsPerSentence: 25 },
            3: { sentences: 9, wordsPerSentence: 30 },
            4: { sentences: 11, wordsPerSentence: 35 }
        }[level] || { sentences: 7, wordsPerSentence: 25 };

        // 文章生成
        const title = `${theme.topic}の現状と課題`;
        const paragraphs = this.generateExplanatoryParagraphs(theme, complexity, seed);
        
        return {
            id: `exp_${date.toISOString().split('T')[0]}_${seed}`,
            title: title,
            text: paragraphs.join('\n\n'),
            wordCount: paragraphs.join('').length,
            level: level,
            theme: theme.topic,
            questions: this.generateExplanatoryQuestions(theme, paragraphs, seed)
        };
    }

    // 説明文の段落生成
    generateExplanatoryParagraphs(theme, complexity, seed) {
        const paragraphs = [];
        
        // 導入段落
        const intro = `${theme.topic}は、現代社会において重要な課題の一つである。` +
            `近年、${theme.keywords[0]}や${theme.keywords[1]}といった観点から注目を集めている。` +
            `この問題について、様々な角度から考察することが必要だ。`;
        paragraphs.push(intro);

        // 本論段落
        const body1 = `まず、${theme.topic}の現状について見てみよう。` +
            `${theme.keywords[2]}の観点から見ると、大きな変化が起きている。` +
            `特に、${theme.keywords[3]}という面では、従来とは異なるアプローチが求められている。`;
        paragraphs.push(body1);

        // 具体例段落
        const example = `例えば、${theme.keywords[0]}に関する取り組みでは、` +
            `新しい技術や方法が次々と開発されている。` +
            `これらは${theme.keywords[1]}の改善にも寄与すると期待されている。`;
        paragraphs.push(example);

        // 結論段落
        const conclusion = `${theme.topic}の問題を解決するためには、` +
            `個人の意識改革と社会全体の取り組みが不可欠である。` +
            `私たち一人一人が${theme.keywords[2]}について考え、行動することが重要だ。`;
        paragraphs.push(conclusion);

        return paragraphs;
    }

    // 説明文の問題生成
    generateExplanatoryQuestions(theme, paragraphs, seed) {
        const questions = [];
        const patterns = this.questionPatterns.explanatory;
        
        // 内容理解問題
        questions.push({
            q: `${theme.topic}について、本文で述べられている内容として正しいものはどれか。`,
            options: [
                `${theme.keywords[0]}や${theme.keywords[1]}の観点から注目されている`,
                `すでに完全に解決された問題である`,
                `個人の努力だけで解決できる`,
                `従来の方法で十分対応できる`
            ],
            correct: 0,
            type: '内容理解'
        });

        // 主題把握問題
        questions.push({
            q: '筆者がこの文章で最も伝えたいことは何か。',
            options: [
                `${theme.topic}は難しい問題である`,
                '個人と社会の両方の取り組みが必要である',
                '新しい技術だけが解決策である',
                '現状維持で問題ない'
            ],
            correct: 1,
            type: '主題把握'
        });

        // 語句の意味問題
        questions.push({
            q: `本文中の「${theme.keywords[2]}」に最も近い意味を持つ言葉はどれか。`,
            options: this.generateWordOptions(theme.keywords[2], seed),
            correct: 0,
            type: '語句の意味'
        });

        return questions;
    }

    // 物語文生成
    generateNarrativeText(date, level) {
        const seed = this.generateSeed(date) + 100; // 説明文と異なるシード
        const settingIndex = Math.floor(this.seededRandom(seed) * this.narrativeTemplates.length);
        const setting = this.narrativeTemplates[settingIndex];
        
        const situationIndex = Math.floor(this.seededRandom(seed + 1) * setting.situations.length);
        const situation = setting.situations[situationIndex];
        
        const title = `${situation.event}の日`;
        const story = this.generateNarrativeStory(setting, situation, level, seed);
        
        return {
            id: `nar_${date.toISOString().split('T')[0]}_${seed}`,
            title: title,
            text: story,
            wordCount: story.length,
            level: level,
            questions: this.generateNarrativeQuestions(setting, situation, story, seed)
        };
    }

    // 物語の本文生成
    generateNarrativeStory(setting, situation, level, seed) {
        const protagonist = this.seededRandom(seed + 10) > 0.5 ? '太郎' : '花子';
        const emotion1 = situation.emotions[0];
        const emotion2 = situation.emotions[1];
        const emotion3 = situation.emotions[2];
        const emotion4 = situation.emotions[3];

        const story = `${protagonist}は、${situation.event}の日を迎えた。` +
            `${emotion1}でいっぱいだった心も、いざその時が来ると${emotion2}に変わっていく。\n\n` +
            
            `${setting.setting}での日々を思い返すと、様々な出来事が蘇ってくる。` +
            `最初は戸惑うことも多かったが、周りの人々の${emotion3}に支えられてきた。\n\n` +
            
            `「大丈夫、きっとうまくいく」\n` +
            `そう自分に言い聞かせながら、${protagonist}は一歩を踏み出した。` +
            `この経験が自分を成長させてくれると信じて。\n\n` +
            
            `${situation.event}を終えた時、${protagonist}の心には${emotion4}が広がっていた。` +
            `この日のことは、きっと忘れられない思い出になるだろう。`;

        return story;
    }

    // 物語文の問題生成
    generateNarrativeQuestions(setting, situation, story, seed) {
        const questions = [];
        const protagonist = story.includes('太郎') ? '太郎' : '花子';

        // 心情理解問題
        questions.push({
            q: `${protagonist}の最初の気持ちとして正しいものはどれか。`,
            options: [
                situation.emotions[0] + 'でいっぱいだった',
                '何も感じていなかった',
                '怒りに満ちていた',
                'すべてに無関心だった'
            ],
            correct: 0,
            type: '心情理解'
        });

        // 場面理解問題
        questions.push({
            q: 'この物語の舞台はどこか。',
            options: [
                setting.setting,
                '病院',
                '空港',
                '図書館'
            ],
            correct: 0,
            type: '場面理解'
        });

        // 主題問題
        questions.push({
            q: 'この物語のテーマとして最も適切なものはどれか。',
            options: [
                '失敗を恐れずに挑戦すること',
                '成長と新しい経験',
                '競争に勝つこと',
                '過去にこだわること'
            ],
            correct: 1,
            type: '主題'
        });

        return questions;
    }

    // 詩歌生成
    generatePoetry(date, level) {
        const seed = this.generateSeed(date) + 200;
        const month = date.getMonth() + 1;
        const seasonIndex = Math.floor((month - 1) / 3) % 4;
        const season = this.poetryThemes[seasonIndex];
        
        const imageIndex = Math.floor(this.seededRandom(seed) * season.images.length);
        const image = season.images[imageIndex];
        
        // 俳句生成
        const haiku = this.generateHaiku(season, image, seed);
        
        return {
            id: `poe_${date.toISOString().split('T')[0]}_${seed}`,
            type: 'haiku',
            text: haiku,
            author: '生徒作品',
            season: season.season,
            level: level,
            questions: [{
                q: 'この俳句から感じられる季節はいつか。',
                options: ['春', '夏', '秋', '冬'],
                correct: seasonIndex,
                type: '季節'
            }]
        };
    }

    // 俳句生成
    generateHaiku(season, image, seed) {
        const patterns = [
            `${image}${this.getParticle(image)}　${season.season}の${this.getTimeWord(seed)}　${this.getEmotionWord(seed)}`,
            `${season.season}${this.getWeatherWord(seed)}　${image}${this.getActionWord(seed)}　${this.getSoundWord(seed)}`,
            `${this.getColorWord(season.season)}空に　${image}${this.getParticle(image)}見ゆ　${season.season}の${this.getTimeWord(seed)}`
        ];
        
        const patternIndex = Math.floor(this.seededRandom(seed + 10) * patterns.length);
        return patterns[patternIndex];
    }

    // 助詞選択
    getParticle(word) {
        return ['や', 'の', 'に', 'を'][Math.floor(Math.random() * 4)];
    }

    // 時間語選択
    getTimeWord(seed) {
        const words = ['朝', '昼', '夕', '宵', '夜'];
        return words[Math.floor(this.seededRandom(seed + 20) * words.length)];
    }

    // 感情語選択
    getEmotionWord(seed) {
        const words = ['静かなり', 'にぎやか', '寂しかな', '楽しかな', '美し'];
        return words[Math.floor(this.seededRandom(seed + 30) * words.length)];
    }

    // 天候語選択
    getWeatherWord(season) {
        const weatherBySeasonFirstChar = {
            '春': 'の風',
            '夏': 'の陽',
            '秋': 'の空',
            '冬': 'の雪'
        };
        return weatherBySeasonFirstChar[season] || 'の日';
    }

    // 動作語選択
    getActionWord(seed) {
        const words = ['舞いて', '咲きて', '鳴きて', '落ちて', '流れ'];
        return words[Math.floor(this.seededRandom(seed + 40) * words.length)];
    }

    // 音語選択
    getSoundWord(seed) {
        const words = ['音もなし', '声高し', '風の音', '水の音', '鐘の音'];
        return words[Math.floor(this.seededRandom(seed + 50) * words.length)];
    }

    // 色語選択
    getColorWord(season) {
        const colors = {
            '春': '桜色',
            '夏': '青き',
            '秋': '紅き',
            '冬': '白き'
        };
        return colors[season] || '青き';
    }

    // 語句の選択肢生成
    generateWordOptions(correctWord, seed) {
        // 簡単な同義語・類義語辞書
        const synonymGroups = [
            ['持続可能', '継続的', '永続的', '恒久的'],
            ['効率化', '合理化', '最適化', '省力化'],
            ['多様性', '多様化', '多元化', '複雑化'],
            ['共生', '共存', '協調', '調和']
        ];
        
        // 正解を含むグループを探す
        let options = [correctWord];
        for (const group of synonymGroups) {
            if (group.includes(correctWord)) {
                options = [...group];
                break;
            }
        }
        
        // グループが見つからない場合はダミーを生成
        if (options.length === 1) {
            options = [correctWord, '変化', '発展', '改善'];
        }
        
        // シャッフル
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom(seed + i) * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        
        return options;
    }

    // 日付ベースの読解問題セット生成
    generateDailyReadingProblems(date, count, level) {
        const problems = [];
        
        // 説明文（count の半分、最低1問）
        const expCount = Math.max(1, Math.floor(count / 2));
        for (let i = 0; i < expCount; i++) {
            const expDate = new Date(date);
            expDate.setDate(date.getDate() + i); // 日付をずらして異なる文章を生成
            const passage = this.generateExplanatoryText(expDate, level);
            
            // 各文章から1-2問選択
            const questionCount = Math.min(2, passage.questions.length);
            for (let j = 0; j < questionCount; j++) {
                problems.push({
                    type: 'reading_comprehension',
                    passage: {
                        title: passage.title,
                        text: passage.text,
                        wordCount: passage.wordCount
                    },
                    question: passage.questions[j].q,
                    options: passage.questions[j].options,
                    correct: passage.questions[j].correct,
                    level: passage.level,
                    category: '文章読解'
                });
            }
        }
        
        // 物語文（残り）
        const narCount = count - problems.length;
        for (let i = 0; i < narCount; i++) {
            const narDate = new Date(date);
            narDate.setDate(date.getDate() + i + 10); // 説明文と重複しないようオフセット
            const passage = this.generateNarrativeText(narDate, level);
            
            problems.push({
                type: 'narrative_reading',
                passage: {
                    title: passage.title,
                    text: passage.text,
                    wordCount: passage.wordCount
                },
                question: passage.questions[0].q,
                options: passage.questions[0].options,
                correct: passage.questions[0].correct,
                level: passage.level,
                category: '文章読解'
            });
        }
        
        return problems;
    }

    // 日付ベースの詩歌問題生成
    generateDailyPoetryProblems(date, count, level) {
        const problems = [];
        
        for (let i = 0; i < count; i++) {
            const poetryDate = new Date(date);
            poetryDate.setDate(date.getDate() + i + 20); // 他の問題と重複しないようオフセット
            const poetry = this.generatePoetry(poetryDate, level);
            
            problems.push({
                type: 'poetry_appreciation',
                content: {
                    type: poetry.type,
                    text: poetry.text,
                    author: poetry.author
                },
                question: poetry.questions[0].q,
                options: poetry.questions[0].options,
                correct: poetry.questions[0].correct,
                level: poetry.level,
                category: '文章読解'
            });
        }
        
        return problems;
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ReadingPassageGenerator;
}