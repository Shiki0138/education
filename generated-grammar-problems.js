// Claude Codeで生成した文法・敬語問題データベース

const generatedGrammarProblems = [
    // 敬語問題（尊敬語）
    {
        id: "grammar_001",
        type: "敬語",
        subtype: "尊敬語",
        level: "basic",
        question: "先生が「教室に【　】。」の【　】に入る正しい敬語は？",
        options: ["来られた", "いらっしゃった", "参られた", "来てくださった"],
        correct: 1,
        hint: "「来る」の尊敬語は「いらっしゃる」です",
        explanation: "「いらっしゃる」は「来る・行く・いる」の尊敬語"
    },
    {
        id: "grammar_002", 
        type: "敬語",
        subtype: "尊敬語",
        level: "basic",
        question: "お客様が商品を「【　】ています」の【　】に入る正しい敬語は？",
        options: ["見る", "ご覧になって", "拝見して", "見て"],
        correct: 1,
        hint: "「見る」の尊敬語は「ご覧になる」です",
        explanation: "「ご覧になる」は「見る」の尊敬語"
    },
    {
        id: "grammar_003",
        type: "敬語",
        subtype: "尊敬語", 
        level: "intermediate",
        question: "校長先生が「卒業式で【　】。」の【　】に入る正しい敬語は？",
        options: ["話される", "お話しになる", "話しなさる", "申される"],
        correct: 1,
        hint: "「話す」の尊敬語は「お話しになる」です",
        explanation: "「お〜になる」は尊敬語の基本形"
    },

    // 敬語問題（謙譲語）
    {
        id: "grammar_004",
        type: "敬語",
        subtype: "謙譲語",
        level: "basic", 
        question: "私が先生に資料を「【　】ます」の【　】に入る正しい敬語は？",
        options: ["渡し", "お渡しし", "差し上げ", "あげ"],
        correct: 2,
        hint: "「渡す」の謙譲語は「差し上げる」です",
        explanation: "「差し上げる」は「あげる・渡す」の謙譲語"
    },
    {
        id: "grammar_005",
        type: "敬語",
        subtype: "謙譲語",
        level: "basic",
        question: "私が先生の話を「【　】ました」の【　】に入る正しい敬語は？",
        options: ["聞き", "拝聴し", "お聞きし", "うかがい"],
        correct: 1,
        hint: "「聞く」の謙譲語は「拝聴する」または「うかがう」です",
        explanation: "「拝聴する」は「聞く」の謙譲語（特に話や音楽を聞く場合）"
    },
    {
        id: "grammar_006",
        type: "敬語",
        subtype: "謙譲語",
        level: "intermediate",
        question: "私が会社に「【　】ます」の【　】に入る正しい敬語は？",
        options: ["行き", "参り", "いらっしゃい", "来"],
        correct: 1,
        hint: "「行く」の謙譲語は「参る」です",
        explanation: "「参る」は「行く・来る」の謙譲語"
    },

    // 敬語問題（丁寧語）
    {
        id: "grammar_007",
        type: "敬語",
        subtype: "丁寧語",
        level: "basic",
        question: "「今日は暑い」を丁寧語で表すと？",
        options: ["今日は暑いです", "今日は暑くいらっしゃいます", "今日は暑く存じます", "今日は暑うございます"],
        correct: 0,
        hint: "「〜です・〜ます」が丁寧語の基本形です",
        explanation: "丁寧語は「です・ます」を付ける最も基本的な敬語"
    },

    // 文法問題（品詞）
    {
        id: "grammar_008",
        type: "品詞",
        subtype: "動詞",
        level: "basic",
        question: "「美しく咲いている桜を見る」の動詞はどれですか？",
        options: ["美しく", "咲いている", "桜", "見る"],
        correct: 3,
        hint: "動作や状態を表す言葉が動詞です",
        explanation: "「咲いている」は連体修飾語、「見る」が述語の動詞"
    },
    {
        id: "grammar_009",
        type: "品詞",
        subtype: "形容詞",
        level: "basic",
        question: "「新しい本を買った」で形容詞はどれですか？",
        options: ["新しい", "本", "買った", "を"],
        correct: 0,
        hint: "物事の性質や状態を表す言葉が形容詞です",
        explanation: "「新しい」は「本」の性質を表す形容詞"
    },
    {
        id: "grammar_010",
        type: "品詞",
        subtype: "副詞",
        level: "intermediate",
        question: "「とても大きな家に住んでいる」で副詞はどれですか？",
        options: ["とても", "大きな", "家", "住んでいる"],
        correct: 0,
        hint: "程度や様子を表す言葉が副詞です",
        explanation: "「とても」は「大きな」の程度を表す副詞"
    },

    // 文法問題（助詞）
    {
        id: "grammar_011",
        type: "助詞",
        subtype: "格助詞",
        level: "basic",
        question: "「友達【　】学校へ行く」の【　】に入る適切な助詞は？",
        options: ["が", "を", "に", "と"],
        correct: 3,
        hint: "一緒に行動する相手を表す助詞です",
        explanation: "「と」は共同・協力を表す格助詞"
    },
    {
        id: "grammar_012",
        type: "助詞",
        subtype: "格助詞",
        level: "basic",
        question: "「本【　】読んでいる」の【　】に入る適切な助詞は？",
        options: ["が", "を", "に", "で"],
        correct: 1,
        hint: "動作の対象を表す助詞です",
        explanation: "「を」は動作の対象を表す格助詞"
    },
    {
        id: "grammar_013",
        type: "助詞",
        subtype: "接続助詞",
        level: "intermediate",
        question: "「雨が降った【　】、試合は中止になった」の【　】に入る適切な助詞は？",
        options: ["ので", "でも", "けれど", "ながら"],
        correct: 0,
        hint: "原因・理由を表す接続助詞です",
        explanation: "「ので」は原因・理由を表す接続助詞"
    },

    // 文法問題（接続詞）
    {
        id: "grammar_014",
        type: "接続詞",
        subtype: "順接",
        level: "basic",
        question: "「雨が降っている。【　】傘を持って行こう」の【　】に入る接続詞は？",
        options: ["だから", "しかし", "または", "ところが"],
        correct: 0,
        hint: "原因から結果を導く接続詞です",
        explanation: "「だから」は順接の接続詞で、原因から結果を表す"
    },
    {
        id: "grammar_015",
        type: "接続詞",
        subtype: "逆接",
        level: "basic",
        question: "「頑張って勉強した。【　】テストの結果は悪かった」の【　】に入る接続詞は？",
        options: ["だから", "しかし", "そして", "または"],
        correct: 1,
        hint: "前の内容と反対の内容を表す接続詞です",
        explanation: "「しかし」は逆接の接続詞で、前の内容と対立する内容を表す"
    },
    {
        id: "grammar_016",
        type: "接続詞",
        subtype: "並列",
        level: "intermediate",
        question: "「数学を勉強した。【　】国語も勉強した」の【　】に入る接続詞は？",
        options: ["だから", "しかし", "そして", "ところで"],
        correct: 2,
        hint: "前の内容に付け加える接続詞です",
        explanation: "「そして」は並列・添加の接続詞"
    },

    // 文法問題（文の成分）
    {
        id: "grammar_017",
        type: "文の成分",
        subtype: "主語",
        level: "basic",
        question: "「美しい花が庭に咲いている」の主語はどれですか？",
        options: ["美しい", "花が", "庭に", "咲いている"],
        correct: 1,
        hint: "「何が」にあたる部分が主語です",
        explanation: "「花が」が主語（主部）で、「が」が主格を表す"
    },
    {
        id: "grammar_018",
        type: "文の成分",
        subtype: "述語",
        level: "basic",
        question: "「兄は毎日図書館で勉強している」の述語はどれですか？",
        options: ["兄は", "毎日", "図書館で", "勉強している"],
        correct: 3,
        hint: "「どうする」にあたる部分が述語です",
        explanation: "「勉強している」が述語（述部）"
    },
    {
        id: "grammar_019",
        type: "文の成分",
        subtype: "修飾語",
        level: "intermediate",
        question: "「とても美しい桜の花」で「とても」は何を修飾していますか？",
        options: ["美しい", "桜", "花", "桜の花"],
        correct: 0,
        hint: "程度を表す言葉は形容詞を修飾します",
        explanation: "「とても」は「美しい」の程度を表す連用修飾語"
    },

    // 古典文法基礎
    {
        id: "grammar_020",
        type: "古典文法",
        subtype: "基礎",
        level: "intermediate",
        question: "「ありがたし」の現代語訳として正しいものは？",
        options: ["ありがたい", "めったにない", "うれしい", "美しい"],
        correct: 1,
        hint: "古典では「ありがたし」は「珍しい」という意味です",
        explanation: "古典の「ありがたし」は現代語の「ありがたい」とは異なり「めったにない・珍しい」の意味"
    },

    // 語彙・表現
    {
        id: "grammar_021",
        type: "語彙",
        subtype: "同音異義語",
        level: "intermediate",
        question: "「雲のない空」の「ない」と同じ品詞の「ない」はどれですか？",
        options: ["お金がない", "美しくない", "あってはいけない", "ないないづくし"],
        correct: 0,
        hint: "存在しないことを表す「ない」を探しましょう",
        explanation: "「雲のない空」と「お金がない」の「ない」は共に存在しないことを表す"
    },
    {
        id: "grammar_022",
        type: "語彙",
        subtype: "類義語",
        level: "basic",
        question: "「大きい」と最も意味の近い言葉はどれですか？",
        options: ["高い", "広い", "巨大な", "深い"],
        correct: 2,
        hint: "サイズが大きいという意味で最も近い言葉です",
        explanation: "「巨大な」は「大きい」と最も類似した意味を持つ"
    },
    {
        id: "grammar_023",
        type: "語彙",
        subtype: "対義語",
        level: "basic", 
        question: "「明るい」の対義語として正しいものは？",
        options: ["暗い", "薄い", "重い", "遅い"],
        correct: 0,
        hint: "光に関する反対の意味の言葉です",
        explanation: "「明るい」の対義語は「暗い」"
    },

    // 表記・送り仮名
    {
        id: "grammar_024",
        type: "表記",
        subtype: "送り仮名",
        level: "intermediate",
        question: "「美しい景色を【　】む」の【　】に入る正しい表記は？",
        options: ["楽し", "楽しみ", "たのし", "たのしみ"],
        correct: 0,
        hint: "動詞の語幹に送り仮名をつけます",
        explanation: "「楽しむ」の送り仮名は「楽し」に「む」をつける"
    },
    {
        id: "grammar_025",
        type: "表記",
        subtype: "送り仮名",
        level: "intermediate",
        question: "正しい送り仮名はどれですか？",
        options: ["美味しい", "美味い", "うま味しい", "うまい"],
        correct: 0,
        hint: "「おいしい」の表記です",
        explanation: "「美味しい（おいしい）」が正しい送り仮名"
    }
];

// カテゴリ別統計
const grammarProblemStats = {
    敬語: generatedGrammarProblems.filter(p => p.type === '敬語').length,
    品詞: generatedGrammarProblems.filter(p => p.type === '品詞').length,
    助詞: generatedGrammarProblems.filter(p => p.type === '助詞').length,
    接続詞: generatedGrammarProblems.filter(p => p.type === '接続詞').length,
    文の成分: generatedGrammarProblems.filter(p => p.type === '文の成分').length,
    古典文法: generatedGrammarProblems.filter(p => p.type === '古典文法').length,
    語彙: generatedGrammarProblems.filter(p => p.type === '語彙').length,
    表記: generatedGrammarProblems.filter(p => p.type === '表記').length,
    total: generatedGrammarProblems.length
};

console.log('Generated Grammar Problems:', grammarProblemStats);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatedGrammarProblems, grammarProblemStats };
}