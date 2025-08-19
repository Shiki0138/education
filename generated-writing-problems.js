// Claude Codeで生成した記述問題データベース

const generatedWritingProblems = [
    // 要約問題
    {
        id: "writing_001",
        type: "要約",
        level: "basic",
        title: "読書の効果",
        passage: `
読書は私たちにとって多くの良い効果をもたらします。まず、知識が増えることです。本には様々な情報が書かれており、読むことで新しいことを学ぶことができます。次に、想像力が豊かになることです。物語を読むとき、私たちは頭の中で場面を思い浮かべます。また、集中力も身につきます。本を読むには、一つのことに集中する必要があるからです。さらに、語彙力も向上します。本には日常では使わない言葉がたくさん出てきて、自然に覚えることができます。このように、読書は私たちの能力を高める素晴らしい活動なのです。`,
        
        question: "この文章の内容を50字以内で要約しなさい。",
        maxChars: 50,
        keyWords: ["読書", "効果", "知識", "想像力", "集中力", "語彙力"],
        sampleAnswer: "読書は知識や想像力、集中力、語彙力を高める効果があり、私たちの能力向上に役立つ。",
        scoringCriteria: {
            keywordPoints: 3,
            structurePoints: 2,
            lengthPoints: 2,
            accuracyPoints: 3
        }
    },

    // 説明問題
    {
        id: "writing_002", 
        type: "説明",
        level: "basic",
        title: "環境保護の方法",
        passage: `
地球環境を守るために、私たち一人一人ができることがあります。家庭では、電気をこまめに消す、水を大切に使う、ゴミを減らすなどの取り組みができます。買い物をするときは、エコバッグを持参し、必要以上に物を買わないよう心がけましょう。また、公共交通機関を利用することで、車から出る排気ガスを減らすことができます。小さな行動でも、多くの人が実践すれば大きな効果が生まれます。`,
        
        question: "あなたが実践できる環境保護の方法を、具体例を挙げて40字以内で書きなさい。",
        maxChars: 40,
        keyWords: ["環境保護", "節電", "節水", "ゴミ削減", "エコバッグ", "公共交通"],
        sampleAnswer: "電気をこまめに消し、エコバッグを使い、電車で移動する。",
        scoringCriteria: {
            specificityPoints: 4,
            feasibilityPoints: 3,
            lengthPoints: 2,
            clarityPoints: 1
        }
    },

    // 意見文
    {
        id: "writing_003",
        type: "意見", 
        level: "intermediate",
        title: "スマートフォンと中学生",
        passage: `
中学生のスマートフォン利用について議論が続いています。便利で情報収集に役立つ一方で、使いすぎによる健康への影響や学習への集中力低下が心配されています。また、SNSでのトラブルや、ネット依存の問題も指摘されています。一方で、緊急時の連絡手段として、また、調べ学習の道具として活用できるという意見もあります。`,
        
        question: "中学生がスマートフォンを持つことについて、あなたの考えを理由とともに60字以内で書きなさい。",
        maxChars: 60,
        keyWords: ["賛成", "反対", "理由", "メリット", "デメリット", "ルール"],
        sampleAnswer: "適切なルールを決めて使用すれば、学習に役立ち緊急時にも安心なので、中学生も持つべきだと思う。",
        scoringCriteria: {
            opinionPoints: 3,
            reasoningPoints: 4,
            balancePoints: 2,
            lengthPoints: 1
        }
    },

    // 体験文
    {
        id: "writing_004",
        type: "体験",
        level: "basic", 
        title: "印象に残った学校行事",
        question: "今までに参加した学校行事の中で、最も印象に残ったものについて、その理由とともに50字以内で書きなさい。",
        maxChars: 50,
        keyWords: ["学校行事", "体育祭", "文化祭", "修学旅行", "印象", "理由", "思い出"],
        sampleAnswer: "体育祭のリレーで、みんなで協力してクラス優勝できたときの達成感が忘れられない。",
        scoringCriteria: {
            experiencePoints: 3,
            emotionPoints: 3,
            reasonPoints: 2,
            lengthPoints: 2
        }
    },

    // 比較・対比
    {
        id: "writing_005",
        type: "比較",
        level: "intermediate",
        title: "本とデジタル読書",
        passage: `
最近、電子書籍やタブレットで本を読む人が増えています。紙の本には、ページをめくる感触や本の匂いなど、五感で楽しめる良さがあります。一方、デジタル読書は、たくさんの本を持ち運べて、暗い場所でも読めるという便利さがあります。また、わからない言葉をすぐに調べることもできます。`,
        
        question: "紙の本とデジタル読書を比較して、どちらが良いと思うか、理由とともに55字以内で書きなさい。",
        maxChars: 55,
        keyWords: ["紙の本", "デジタル", "比較", "メリット", "デメリット", "好み"],
        sampleAnswer: "紙の本の方が集中して読めて、目も疲れにくいので、じっくり読書を楽しみたい私には向いている。",
        scoringCriteria: {
            comparisonPoints: 3,
            reasoningPoints: 3,
            personalityPoints: 2,
            lengthPoints: 2
        }
    },

    // 問題解決
    {
        id: "writing_006",
        type: "問題解決",
        level: "intermediate",
        title: "いじめ問題への対応",
        passage: `
学校でいじめが起きたとき、どのように対応すべきかは重要な問題です。見て見ぬふりをするのではなく、勇気を持って行動することが求められます。直接止めることが難しい場合でも、先生や大人に相談するという方法があります。また、いじめられている人の味方になることも大切です。`,
        
        question: "もしあなたがいじめを目撃したら、どのような行動を取りますか。45字以内で書きなさい。",
        maxChars: 45,
        keyWords: ["いじめ", "目撃", "対応", "相談", "先生", "勇気", "味方"],
        sampleAnswer: "勇気を出して止めるか、難しければすぐに先生に相談して適切な対応をお願いする。",
        scoringCriteria: {
            couragePoints: 3,
            practicalityPoints: 3,
            moralityPoints: 3,
            lengthPoints: 1
        }
    },

    // 将来の夢
    {
        id: "writing_007",
        type: "将来",
        level: "basic",
        title: "将来の目標",
        question: "あなたの将来の夢や目標について、それを実現するために今努力していることとともに60字以内で書きなさい。",
        maxChars: 60,
        keyWords: ["将来", "夢", "目標", "努力", "勉強", "準備", "実現"],
        sampleAnswer: "医師になって多くの人を助けたいので、今は理科と数学を特に頑張って勉強している。",
        scoringCriteria: {
            clarityPoints: 3,
            connectionPoints: 4,
            realismPoints: 2,
            lengthPoints: 1
        }
    },

    // 季節・自然
    {
        id: "writing_008",
        type: "描写",
        level: "basic",
        title: "好きな季節",
        question: "あなたの好きな季節について、その理由を具体的な体験とともに50字以内で書きなさい。",
        maxChars: 50,
        keyWords: ["季節", "春", "夏", "秋", "冬", "理由", "体験", "自然"],
        sampleAnswer: "秋が好きです。紅葉した山を家族とハイキングして、美しい景色に感動したからです。",
        scoringCriteria: {
            seasonPoints: 2,
            experiencePoints: 4,
            emotionPoints: 3,
            lengthPoints: 1
        }
    },

    // 友情・人間関係
    {
        id: "writing_009",
        type: "人間関係",
        level: "intermediate",
        title: "良い友達とは",
        question: "あなたにとって「良い友達」とはどのような人ですか。具体例を挙げて55字以内で書きなさい。",
        maxChars: 55,
        keyWords: ["友達", "信頼", "支える", "理解", "正直", "思いやり", "楽しい"],
        sampleAnswer: "困ったときに相談に乗ってくれて、うれしいときは一緒に喜んでくれる思いやりのある人です。",
        scoringCriteria: {
            definitionPoints: 3,
            examplePoints: 3,
            personalityPoints: 3,
            lengthPoints: 1
        }
    },

    // 技術・社会
    {
        id: "writing_010",
        type: "社会",
        level: "advanced",
        title: "AIと人間の共存",
        passage: `
人工知能（AI）の技術が急速に進歩し、私たちの生活に大きな変化をもたらしています。便利になる一方で、人間の仕事がAIに奪われるのではないかという不安も生まれています。しかし、AIには人間の感情や創造性を理解することは難しく、人間にしかできない仕事も多く残ると考えられています。`,
        
        question: "AI技術の発達について、あなたはどう思いますか。人間との関係を考えて65字以内で書きなさい。",
        maxChars: 65,
        keyWords: ["AI", "技術", "便利", "不安", "仕事", "人間", "協力", "未来"],
        sampleAnswer: "AIは便利だが、人間の感情や創造性は代替できないので、お互いの得意分野を活かして協力していくことが大切だと思う。",
        scoringCriteria: {
            understandingPoints: 3,
            balancePoints: 4,
            futureVisionPoints: 2,
            lengthPoints: 1
        }
    },

    // 文化・伝統
    {
        id: "writing_011",
        type: "文化",
        level: "intermediate",
        title: "日本の伝統文化",
        question: "日本の伝統文化の中で大切にしたいものを一つ挙げ、その理由を45字以内で書きなさい。",
        maxChars: 45,
        keyWords: ["伝統文化", "茶道", "華道", "武道", "祭り", "大切", "継承", "日本"],
        sampleAnswer: "お正月の家族での餅つきを大切にしたい。みんなで協力する楽しさを感じられるから。",
        scoringCriteria: {
            specificityPoints: 3,
            personalConnectionPoints: 4,
            reasoningPoints: 2,
            lengthPoints: 1
        }
    },

    // 学習・勉強
    {
        id: "writing_012",
        type: "学習",
        level: "basic",
        title: "効果的な勉強方法",
        question: "あなたが実践している効果的な勉強方法について、具体例とその効果を50字以内で書きなさい。",
        maxChars: 50,
        keyWords: ["勉強方法", "効果的", "復習", "計画", "集中", "理解", "記憶"],
        sampleAnswer: "毎日決まった時間に復習することで、習ったことを忘れずに記憶に定着させている。",
        scoringCriteria: {
            methodPoints: 3,
            effectPoints: 3,
            practicalityPoints: 3,
            lengthPoints: 1
        }
    }
];

// タイプ別統計
const writingProblemStats = {
    要約: generatedWritingProblems.filter(p => p.type === '要約').length,
    説明: generatedWritingProblems.filter(p => p.type === '説明').length,
    意見: generatedWritingProblems.filter(p => p.type === '意見').length,
    体験: generatedWritingProblems.filter(p => p.type === '体験').length,
    比較: generatedWritingProblems.filter(p => p.type === '比較').length,
    問題解決: generatedWritingProblems.filter(p => p.type === '問題解決').length,
    将来: generatedWritingProblems.filter(p => p.type === '将来').length,
    描写: generatedWritingProblems.filter(p => p.type === '描写').length,
    人間関係: generatedWritingProblems.filter(p => p.type === '人間関係').length,
    社会: generatedWritingProblems.filter(p => p.type === '社会').length,
    文化: generatedWritingProblems.filter(p => p.type === '文化').length,
    学習: generatedWritingProblems.filter(p => p.type === '学習').length,
    total: generatedWritingProblems.length
};

console.log('Generated Writing Problems:', writingProblemStats);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatedWritingProblems, writingProblemStats };
}