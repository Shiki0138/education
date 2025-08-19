// Claude Codeで生成した漢字問題データベース
// 大手門学院中学・関西大倉中学レベル対応

const generatedKanjiProblems = [
    // 基礎レベル（偏差値40-45）
    {
        id: "kanji_001",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【教育】",
        options: ["きょういく", "きょうそう", "きょうえい", "きょうりく"],
        correct: 0,
        hint: "「教える」は「おしえる」、「育つ」は「そだつ」",
        explanation: "教育（きょういく）= 知識や技能を身につけさせること"
    },
    {
        id: "kanji_002",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【運動】",
        options: ["うんどう", "うんてん", "うんそう", "うんゆう"],
        correct: 0,
        hint: "「運ぶ」は「はこぶ」、「動く」は「うごく」",
        explanation: "運動（うんどう）= 体を動かすこと"
    },
    {
        id: "kanji_003",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【友達】",
        options: ["ゆうたつ", "ともだち", "ゆうだち", "ともたつ"],
        correct: 1,
        hint: "訓読みです。「友」は「とも」",
        explanation: "友達（ともだち）= 親しい仲間"
    },
    {
        id: "kanji_004",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【安全】",
        options: ["あんぜん", "あんまん", "やすぜん", "あんてん"],
        correct: 0,
        hint: "「安い」は「やすい」ですが、音読みでは「あん」",
        explanation: "安全（あんぜん）= 危険がないこと"
    },
    {
        id: "kanji_005",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【自然】",
        options: ["しぜん", "じねん", "しねん", "じぜん"],
        correct: 0,
        hint: "「自分」の「じ」ではなく「し」",
        explanation: "自然（しぜん）= 人工でないもの"
    },

    // 中級レベル（偏差値45-50）
    {
        id: "kanji_006",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【議論】",
        options: ["きろん", "ぎろん", "ぎりん", "きりん"],
        correct: 1,
        hint: "「議会」の「ぎ」、「論文」の「ろん」",
        explanation: "議論（ぎろん）= 意見を交わし合うこと"
    },
    {
        id: "kanji_007",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【技術】",
        options: ["ぎじゅつ", "きじゅつ", "ぎしゅつ", "きしゅつ"],
        correct: 0,
        hint: "「技能」の「ぎ」、「技」は「わざ」とも読む",
        explanation: "技術（ぎじゅつ）= 物事を行う方法や能力"
    },
    {
        id: "kanji_008",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【演説】",
        options: ["えんせつ", "えんぜつ", "えんそつ", "いんせつ"],
        correct: 0,
        hint: "「演じる」は「えんじる」、「説明」の「せつ」",
        explanation: "演説（えんせつ）= 大勢の前で話すこと"
    },
    {
        id: "kanji_009",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【継続】",
        options: ["けいぞく", "けいそく", "きぞく", "けいしょく"],
        correct: 0,
        hint: "「継ぐ」は「つぐ」、「続く」は「つづく」",
        explanation: "継続（けいぞく）= 続けて行うこと"
    },
    {
        id: "kanji_010",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【独創】",
        options: ["どくそう", "どくぞう", "とくそう", "とくぞう"],
        correct: 0,
        hint: "「独立」の「どく」、「創る」は「つくる」",
        explanation: "独創（どくそう）= 独自に作り出すこと"
    },

    // 上級レベル（偏差値50+）
    {
        id: "kanji_011",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【洞察】",
        options: ["どうさつ", "とうさつ", "どうかつ", "とうかつ"],
        correct: 0,
        hint: "「洞窟」の「どう」、「観察」の「さつ」",
        explanation: "洞察（どうさつ）= 物事の本質を見抜くこと"
    },
    {
        id: "kanji_012",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【葛藤】",
        options: ["かっとう", "かつとう", "くずとう", "かつどう"],
        correct: 0,
        hint: "心の中での対立を表す言葉です",
        explanation: "葛藤（かっとう）= 相反する気持ちで悩むこと"
    },
    {
        id: "kanji_013",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【憂慮】",
        options: ["ゆうりょ", "ゆうろ", "うりょ", "ゆりょ"],
        correct: 0,
        hint: "「憂い」は「うれい」、「慮る」は「おもんぱかる」",
        explanation: "憂慮（ゆうりょ）= 心配して思い悩むこと"
    },
    {
        id: "kanji_014",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【邁進】",
        options: ["まいしん", "まいじん", "ばいしん", "ばいじん"],
        correct: 0,
        hint: "力強く前に進むという意味です",
        explanation: "邁進（まいしん）= 目標に向かって勢いよく進むこと"
    },
    {
        id: "kanji_015",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【凌駕】",
        options: ["りょうが", "りんが", "りょうか", "りんか"],
        correct: 0,
        hint: "他を上回るという意味の熟語です",
        explanation: "凌駕（りょうが）= 他を上回って優れること"
    },

    // 書き問題（同音異義語）
    {
        id: "kanji_016",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：会議で【イケン】を述べる",
        answer: "意見",
        options: ["意見", "異見", "違見", "以見"],
        correct: 0,
        hint: "自分の考えという意味です",
        explanation: "意見 = 物事に対する考えや判断"
    },
    {
        id: "kanji_017",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：友人を【シンライ】する",
        answer: "信頼",
        options: ["信頼", "信来", "心頼", "心来"],
        correct: 0,
        hint: "「信じる」と「頼る」を合わせた言葉",
        explanation: "信頼 = 信じて頼りにすること"
    },
    {
        id: "kanji_018",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：環境を【ホゴ】する",
        answer: "保護",
        options: ["保護", "保互", "補護", "補互"],
        correct: 0,
        hint: "「保つ」と「護る」という意味",
        explanation: "保護 = 危険から守ること"
    },
    {
        id: "kanji_019",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：将来の【ユメ】を語る",
        answer: "夢",
        options: ["夢", "由", "弓", "雪"],
        correct: 0,
        hint: "寝ている時に見るものでもあります",
        explanation: "夢 = 希望や理想"
    },
    {
        id: "kanji_020",
        level: "basic",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ケンコウ】に気をつける",
        answer: "健康",
        options: ["健康", "堅康", "建康", "券康"],
        correct: 0,
        hint: "体の調子が良い状態のこと",
        explanation: "健康 = 体や心の調子が良いこと"
    },

    // 四字熟語
    {
        id: "kanji_021",
        level: "intermediate",
        type: "yojijukugo",
        question: "「一期一会」の意味として正しいものを選びなさい",
        options: [
            "一度きりの大切な出会い",
            "一年に一度の会合",
            "一番最初の会議",
            "一生に一度の機会"
        ],
        correct: 0,
        hint: "茶道の心得から生まれた言葉です",
        explanation: "人との出会いを大切にするという茶道の精神"
    },
    {
        id: "kanji_022",
        level: "intermediate",
        type: "yojijukugo",
        question: "「温故知新」の読み方と意味を答えなさい",
        reading: "おんこちしん",
        meaning: "古いことを学んで新しい知識を得ること",
        options: [
            "おんこちしん",
            "おんこちにい",
            "うんこちしん",
            "おんごちしん"
        ],
        correct: 0,
        explanation: "古典を学ぶことで新しい発見があるという意味"
    },
    {
        id: "kanji_023",
        level: "intermediate",
        type: "yojijukugo",
        question: "「百聞不如一見」の意味として正しいものを選びなさい",
        options: [
            "百回聞くより一度見る方が良い",
            "百人の話より一人の見解",
            "多くの噂より一つの真実",
            "百の知識より一つの体験"
        ],
        correct: 0,
        hint: "「百聞は一見に如かず」とも言います",
        explanation: "実際に見ることの大切さを表す言葉"
    },
    {
        id: "kanji_024",
        level: "advanced",
        type: "yojijukugo",
        question: "「臥薪嘗胆」の読み方を選びなさい",
        options: ["がしんしょうたん", "がしんじょうたん", "ふしんしょうたん", "ふしんじょうたん"],
        correct: 0,
        hint: "苦労して復讐の機会を待つという意味です",
        explanation: "辛い思いをして将来の成功を期すこと"
    },
    {
        id: "kanji_025",
        level: "advanced",
        type: "yojijukugo",
        question: "「画竜点睛」の意味として正しいものを選びなさい",
        options: [
            "最後に大切な部分を仕上げること",
            "絵を描くのが上手なこと",
            "竜のように強いこと",
            "完璧を目指すこと"
        ],
        correct: 0,
        hint: "竜の絵に最後に瞳を描き入れるという故事から",
        explanation: "仕上げの重要な部分を加えて完成させること"
    },

    // 部首・画数問題
    {
        id: "kanji_026",
        level: "basic",
        type: "bushu",
        question: "「森」の部首は何ですか",
        options: ["木", "林", "禾", "竹"],
        correct: 0,
        hint: "木が3つで森、木が2つで林",
        explanation: "木へんが部首となります"
    },
    {
        id: "kanji_027",
        level: "basic",
        type: "bushu",
        question: "「海」の部首は何ですか",
        options: ["氵（さんずい）", "亠", "母", "毎"],
        correct: 0,
        hint: "水に関係する漢字です",
        explanation: "水を表すさんずいが部首"
    },
    {
        id: "kanji_028",
        level: "intermediate",
        type: "kakusu",
        question: "「議」の画数は何画ですか",
        options: ["18画", "19画", "20画", "21画"],
        correct: 2,
        hint: "「言」が7画、「義」が13画",
        explanation: "言偏7画＋義13画＝20画"
    },
    {
        id: "kanji_029",
        level: "intermediate",
        type: "kakusu",
        question: "「響」の画数は何画ですか",
        options: ["18画", "19画", "20画", "21画"],
        correct: 2,
        hint: "音に関係する漢字で、複雑な構造です",
        explanation: "響は20画の漢字です"
    },
    {
        id: "kanji_030",
        level: "advanced",
        type: "kakusu",
        question: "「鬱」の画数は何画ですか",
        options: ["28画", "29画", "30画", "31画"],
        correct: 1,
        hint: "最も画数の多い常用漢字の一つです",
        explanation: "鬱は29画で常用漢字中最多画数"
    }
];

// レベル別の問題数
const problemCount = {
    basic: generatedKanjiProblems.filter(p => p.level === 'basic').length,
    intermediate: generatedKanjiProblems.filter(p => p.level === 'intermediate').length,
    advanced: generatedKanjiProblems.filter(p => p.level === 'advanced').length,
    total: generatedKanjiProblems.length
};

console.log('Generated Kanji Problems:', problemCount);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatedKanjiProblems, problemCount };
}