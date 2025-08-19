// 正解バランス調整済み漢字問題（30問）

const balancedKanjiProblems = [
    // 基礎レベル - 正解分散
    {
        id: "kanji_001",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【教育】",
        options: ["きょうそう", "きょういく", "きょうえい", "きょうりく"],
        correct: 1, // 2番目
        hint: "「教える」は「おしえる」、「育つ」は「そだつ」",
        explanation: "教育（きょういく）= 知識や技能を身につけさせること"
    },
    {
        id: "kanji_002",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【運動】",
        options: ["うんてん", "うんそう", "うんどう", "うんゆう"],
        correct: 2, // 3番目
        hint: "「運ぶ」は「はこぶ」、「動く」は「うごく」",
        explanation: "運動（うんどう）= 体を動かすこと"
    },
    {
        id: "kanji_003",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【友達】",
        options: ["ゆうたつ", "ゆうだち", "ともたつ", "ともだち"],
        correct: 3, // 4番目
        hint: "訓読みです。「友」は「とも」",
        explanation: "友達（ともだち）= 親しい仲間"
    },
    {
        id: "kanji_004",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【安全】",
        options: ["あんぜん", "あんまん", "やすぜん", "あんてん"],
        correct: 0, // 1番目
        hint: "「安い」は「やすい」ですが、音読みでは「あん」",
        explanation: "安全（あんぜん）= 危険がないこと"
    },
    {
        id: "kanji_005",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【自然】",
        options: ["じねん", "しぜん", "しねん", "じぜん"],
        correct: 1, // 2番目
        hint: "「自分」の「じ」ではなく「し」",
        explanation: "自然（しぜん）= 人工でないもの"
    },
    {
        id: "kanji_006",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【図書】",
        options: ["としょ", "ずしょ", "とうしょ", "ずいしょ"],
        correct: 0, // 1番目
        hint: "「図」は「ず」とも読みますが、ここでは「と」",
        explanation: "図書（としょ）= 書物、本"
    },
    {
        id: "kanji_007",
        level: "basic",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【音楽】",
        options: ["おんらく", "いんがく", "おんがく", "いんらく"],
        correct: 2, // 3番目
        hint: "「音」は「おん」、「楽」は「がく」",
        explanation: "音楽（おんがく）= 音による芸術"
    },

    // 中級レベル - 正解分散
    {
        id: "kanji_008",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【議論】",
        options: ["きろん", "ぎりん", "ぎろん", "きりん"],
        correct: 2, // 3番目
        hint: "「議会」の「ぎ」、「論文」の「ろん」",
        explanation: "議論（ぎろん）= 意見を交わし合うこと"
    },
    {
        id: "kanji_009",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【技術】",
        options: ["きじゅつ", "ぎしゅつ", "きしゅつ", "ぎじゅつ"],
        correct: 3, // 4番目
        hint: "「技能」の「ぎ」、「技」は「わざ」とも読む",
        explanation: "技術（ぎじゅつ）= 物事を行う方法や能力"
    },
    {
        id: "kanji_010",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【演説】",
        options: ["えんせつ", "えんぜつ", "えんそつ", "いんせつ"],
        correct: 0, // 1番目
        hint: "「演じる」は「えんじる」、「説明」の「せつ」",
        explanation: "演説（えんせつ）= 大勢の前で話すこと"
    },
    {
        id: "kanji_011",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【継続】",
        options: ["けいそく", "けいぞく", "きぞく", "けいしょく"],
        correct: 1, // 2番目
        hint: "「継ぐ」は「つぐ」、「続く」は「つづく」",
        explanation: "継続（けいぞく）= 続けて行うこと"
    },
    {
        id: "kanji_012",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【独創】",
        options: ["どくぞう", "とくそう", "とくぞう", "どくそう"],
        correct: 3, // 4番目
        hint: "「独立」の「どく」、「創る」は「つくる」",
        explanation: "独創（どくそう）= 独自に作り出すこと"
    },
    {
        id: "kanji_013",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【協調】",
        options: ["きょうてい", "こうちょう", "きょうちょう", "こうてい"],
        correct: 2, // 3番目
        hint: "「協力」の「きょう」、「調和」の「ちょう」",
        explanation: "協調（きょうちょう）= 互いに協力し合うこと"
    },
    {
        id: "kanji_014",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【模索】",
        options: ["もさく", "ぼさく", "もたん", "ぼたん"],
        correct: 1, // 2番目
        hint: "「模様」の「も」ではなく「ぼ」",
        explanation: "模索（ぼさく）= 手探りで探し求めること"
    },
    {
        id: "kanji_015",
        level: "intermediate",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【創造】",
        options: ["そうぞう", "しょうぞう", "そうじょう", "しょうじょう"],
        correct: 0, // 1番目
        hint: "「創る」は「つくる」、「造る」も「つくる」",
        explanation: "創造（そうぞう）= 新しいものを作り出すこと"
    },

    // 上級レベル - 正解分散
    {
        id: "kanji_016",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【洞察】",
        options: ["とうさつ", "どうかつ", "とうかつ", "どうさつ"],
        correct: 3, // 4番目
        hint: "「洞窟」の「どう」、「観察」の「さつ」",
        explanation: "洞察（どうさつ）= 物事の本質を見抜くこと"
    },
    {
        id: "kanji_017",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【葛藤】",
        options: ["かつとう", "かっとう", "くずとう", "かつどう"],
        correct: 1, // 2番目
        hint: "心の中での対立を表す言葉です",
        explanation: "葛藤（かっとう）= 相反する気持ちで悩むこと"
    },
    {
        id: "kanji_018",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【憂慮】",
        options: ["ゆうろ", "うりょ", "ゆりょ", "ゆうりょ"],
        correct: 3, // 4番目
        hint: "「憂い」は「うれい」、「慮る」は「おもんぱかる」",
        explanation: "憂慮（ゆうりょ）= 心配して思い悩むこと"
    },
    {
        id: "kanji_019",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【邁進】",
        options: ["まいしん", "まいじん", "ばいしん", "ばいじん"],
        correct: 0, // 1番目
        hint: "力強く前に進むという意味です",
        explanation: "邁進（まいしん）= 目標に向かって勢いよく進むこと"
    },
    {
        id: "kanji_020",
        level: "advanced",
        type: "reading",
        question: "次の漢字の読み方を選びなさい：【凌駕】",
        options: ["りんが", "りょうか", "りょうが", "りんか"],
        correct: 2, // 3番目
        hint: "他を上回るという意味の熟語です",
        explanation: "凌駕（りょうが）= 他を上回って優れること"
    },

    // 書き問題 - 正解分散
    {
        id: "kanji_021",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：会議で【イケン】を述べる",
        options: ["異見", "意見", "違見", "以見"],
        correct: 1, // 2番目
        hint: "自分の考えという意味です",
        explanation: "意見 = 物事に対する考えや判断"
    },
    {
        id: "kanji_022",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：友人を【シンライ】する",
        options: ["信来", "心頼", "信頼", "心来"],
        correct: 2, // 3番目
        hint: "「信じる」と「頼る」を合わせた言葉",
        explanation: "信頼 = 信じて頼りにすること"
    },
    {
        id: "kanji_023",
        level: "intermediate",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：環境を【ホゴ】する",
        options: ["保互", "補護", "補互", "保護"],
        correct: 3, // 4番目
        hint: "「保つ」と「護る」という意味",
        explanation: "保護 = 危険から守ること"
    },
    {
        id: "kanji_024",
        level: "basic",
        type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ケンコウ】に気をつける",
        options: ["健康", "堅康", "建康", "券康"],
        correct: 0, // 1番目
        hint: "体の調子が良い状態のこと",
        explanation: "健康 = 体や心の調子が良いこと"
    },

    // 四字熟語 - 正解分散
    {
        id: "kanji_025",
        level: "intermediate",
        type: "yojijukugo",
        question: "「一期一会」の意味として正しいものを選びなさい",
        options: [
            "一年に一度の会合",
            "一度きりの大切な出会い",
            "一番最初の会議",
            "一生に一度の機会"
        ],
        correct: 1, // 2番目
        hint: "茶道の心得から生まれた言葉です",
        explanation: "人との出会いを大切にするという茶道の精神"
    },
    {
        id: "kanji_026",
        level: "intermediate",
        type: "yojijukugo",
        question: "「温故知新」の読み方として正しいものは？",
        options: [
            "おんこちにい",
            "うんこちしん",
            "おんごちしん",
            "おんこちしん"
        ],
        correct: 3, // 4番目
        hint: "古典を学んで新しい知識を得ることです",
        explanation: "古典を学ぶことで新しい発見があるという意味"
    },
    {
        id: "kanji_027",
        level: "intermediate", 
        type: "yojijukugo",
        question: "「百聞不如一見」の意味として正しいものを選びなさい",
        options: [
            "百人の話より一人の見解",
            "多くの噂より一つの真実",
            "百回聞くより一度見る方が良い",
            "百の知識より一つの体験"
        ],
        correct: 2, // 3番目
        hint: "「百聞は一見に如かず」とも言います",
        explanation: "実際に見ることの大切さを表す言葉"
    },
    {
        id: "kanji_028",
        level: "advanced",
        type: "yojijukugo",
        question: "「臥薪嘗胆」の読み方を選びなさい",
        options: ["がしんしょうたん", "がしんじょうたん", "ふしんしょうたん", "ふしんじょうたん"],
        correct: 0, // 1番目
        hint: "苦労して復讐の機会を待つという意味です",
        explanation: "辛い思いをして将来の成功を期すこと"
    },
    {
        id: "kanji_029",
        level: "advanced",
        type: "yojijukugo",
        question: "「画竜点睛」の意味として正しいものを選びなさい",
        options: [
            "絵を描くのが上手なこと",
            "最後に大切な部分を仕上げること",
            "竜のように強いこと",
            "完璧を目指すこと"
        ],
        correct: 1, // 2番目
        hint: "竜の絵に最後に瞳を描き入れるという故事から",
        explanation: "仕上げの重要な部分を加えて完成させること"
    },
    {
        id: "kanji_030",
        level: "intermediate",
        type: "yojijukugo",
        question: "「切磋琢磨」の意味として正しいものを選びなさい",
        options: [
            "物を大切に使うこと",
            "努力を怠らないこと",  
            "お互いに励まし合って向上すること",
            "技術を磨き続けること"
        ],
        correct: 2, // 3番目
        hint: "友人同士が学問や技術を磨き合うこと",
        explanation: "互いに励まし合い、競い合って向上すること"
    }
];

// 正解分布の確認
const correctDistribution = {
    option0: balancedKanjiProblems.filter(p => p.correct === 0).length,
    option1: balancedKanjiProblems.filter(p => p.correct === 1).length,
    option2: balancedKanjiProblems.filter(p => p.correct === 2).length,
    option3: balancedKanjiProblems.filter(p => p.correct === 3).length,
    total: balancedKanjiProblems.length
};

console.log('正解分布（バランス調整済み）:', correctDistribution);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { balancedKanjiProblems, correctDistribution };
}