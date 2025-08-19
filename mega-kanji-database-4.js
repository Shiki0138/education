// 漢字問題メガデータベース Part 4 (301-400問)

const megaKanjiDatabase4 = [
    // 季節・自然関連 (301-320問)
    {
        id: "mega_301", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【春分】",
        options: ["しゅんぶん", "はるわけ", "しゅんぷん", "はるぶん"],
        correct: 0, hint: "春の真ん中の日です", explanation: "春分（しゅんぶん）= 春の昼夜の長さが等しい日"
    },
    {
        id: "mega_302", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【夏至】",
        options: ["かし", "げし", "なつし", "なついたる"],
        correct: 0, hint: "夏の一番日が長い日です", explanation: "夏至（げし）= 夏の昼が最も長い日"
    },
    {
        id: "mega_303", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【秋分】",
        options: ["しゅうぶん", "あきわけ", "しゅうぷん", "あきぶん"],
        correct: 0, hint: "秋の真ん中の日です", explanation: "秋分（しゅうぶん）= 秋の昼夜の長さが等しい日"
    },
    {
        id: "mega_304", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【冬至】",
        options: ["とうじ", "ふゆし", "とうし", "ふゆじ"],
        correct: 0, hint: "冬の一番日が短い日です", explanation: "冬至（とうじ）= 冬の昼が最も短い日"
    },
    {
        id: "mega_305", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【降雪】",
        options: ["こうせつ", "ふりゆき", "おりゆき", "こうゆき"],
        correct: 0, hint: "雪が降ることです", explanation: "降雪（こうせつ）= 雪が降ること"
    },
    {
        id: "mega_306", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【積雪】",
        options: ["せきせつ", "つもりゆき", "つみゆき", "せっせつ"],
        correct: 0, hint: "雪が積もることです", explanation: "積雪（せきせつ）= 雪が積もること"
    },
    {
        id: "mega_307", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【晴天】",
        options: ["せいてん", "はれそら", "せいあめ", "はれあめ"],
        correct: 0, hint: "よく晴れた天気です", explanation: "晴天（せいてん）= よく晴れた天気"
    },
    {
        id: "mega_308", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【曇天】",
        options: ["どんてん", "くもりそら", "だんてん", "くもてん"],
        correct: 0, hint: "曇った天気です", explanation: "曇天（どんてん）= 曇った天気"
    },
    {
        id: "mega_309", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【荒天】",
        options: ["こうてん", "あらそら", "こうあめ", "あれあめ"],
        correct: 0, hint: "荒れた天気です", explanation: "荒天（こうてん）= 荒れた天気"
    },
    {
        id: "mega_310", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【豪雨】",
        options: ["ごうう", "ごううう", "つよいあめ", "おおあめ"],
        correct: 0, hint: "とても激しい雨です", explanation: "豪雨（ごうう）= とても激しい雨"
    },
    {
        id: "mega_311", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【微風】",
        options: ["びふう", "そよかぜ", "びかぜ", "こかぜ"],
        correct: 0, hint: "弱い風のことです", explanation: "微風（びふう）= 弱い風"
    },
    {
        id: "mega_312", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【強風】",
        options: ["きょうふう", "つよかぜ", "ごうふう", "きょうかぜ"],
        correct: 0, hint: "強い風のことです", explanation: "強風（きょうふう）= 強い風"
    },
    {
        id: "mega_313", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【干潮】",
        options: ["かんちょう", "ひしお", "からしお", "かんしお"],
        correct: 0, hint: "海の水位が低くなることです", explanation: "干潮（かんちょう）= 海の水位が低くなること"
    },
    {
        id: "mega_314", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【満潮】",
        options: ["まんちょう", "みちしお", "まんしお", "まちしお"],
        correct: 0, hint: "海の水位が高くなることです", explanation: "満潮（まんちょう）= 海の水位が高くなること"
    },
    {
        id: "mega_315", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【新緑】",
        options: ["しんりょく", "あたらしみどり", "しんろく", "あらみどり"],
        correct: 0, hint: "新しく出た緑の葉です", explanation: "新緑（しんりょく）= 新しく出た緑の葉"
    },
    {
        id: "mega_316", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【紅葉】",
        options: ["こうよう", "べには", "あかば", "もみじ"],
        correct: 0, hint: "葉が赤くなることです", explanation: "紅葉（こうよう）= 葉が赤くなること"
    },
    {
        id: "mega_317", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【落葉】",
        options: ["らくよう", "おちば", "らくば", "おちよう"],
        correct: 0, hint: "葉が落ちることです", explanation: "落葉（らくよう）= 葉が落ちること"
    },
    {
        id: "mega_318", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【芽吹き】",
        options: ["がふき", "めぶき", "がぶき", "めふき"],
        correct: 1, hint: "新芽が出ることです", explanation: "芽吹き（めぶき）= 新芽が出ること"
    },
    {
        id: "mega_319", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【開花】",
        options: ["かいか", "ひらきはな", "かいはな", "ひらか"],
        correct: 0, hint: "花が咲くことです", explanation: "開花（かいか）= 花が咲くこと"
    },
    {
        id: "mega_320", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【結実】",
        options: ["けつじつ", "むすびみ", "けつみ", "ゆいみ"],
        correct: 0, hint: "実がなることです", explanation: "結実（けつじつ）= 実がなること"
    },

    // 科学・技術関連 (321-350問)
    {
        id: "mega_321", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【物理】",
        options: ["ぶつり", "ぶっり", "ものり", "もつり"],
        correct: 0, hint: "科学の一分野です", explanation: "物理（ぶつり）= 物質の性質を研究する学問"
    },
    {
        id: "mega_322", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【化学】",
        options: ["かがく", "ばけがく", "けがく", "かがっ"],
        correct: 0, hint: "物質の変化を研究する学問です", explanation: "化学（かがく）= 物質の変化を研究する学問"
    },
    {
        id: "mega_323", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【生物】",
        options: ["せいぶつ", "いきもの", "なまもの", "せいもつ"],
        correct: 0, hint: "生きているもの全般を研究する学問です", explanation: "生物（せいぶつ）= 生きているものを研究する学問"
    },
    {
        id: "mega_324", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【地質】",
        options: ["ちしつ", "じしつ", "つちしつ", "ちしち"],
        correct: 0, hint: "土地の性質のことです", explanation: "地質（ちしつ）= 土地の性質"
    },
    {
        id: "mega_325", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【天体】",
        options: ["てんたい", "そらからだ", "あまからだ", "てんボディ"],
        correct: 0, hint: "宇宙にある物体です", explanation: "天体（てんたい）= 宇宙にある物体"
    },
    {
        id: "mega_326", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【惑星】",
        options: ["わくせい", "まどいほし", "わくほし", "まどせい"],
        correct: 0, hint: "太陽の周りを回る星です", explanation: "惑星（わくせい）= 太陽の周りを回る星"
    },
    {
        id: "mega_327", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【恒星】",
        options: ["こうせい", "つねほし", "こうほし", "つねせい"],
        correct: 0, hint: "自分で光る星です", explanation: "恒星（こうせい）= 自分で光る星"
    },
    {
        id: "mega_328", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【銀河】",
        options: ["ぎんが", "しろかわ", "ぎんかわ", "しろが"],
        correct: 0, hint: "天の川のことです", explanation: "銀河（ぎんが）= 天の川、星の集まり"
    },
    {
        id: "mega_329", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【分子】",
        options: ["ぶんし", "わけこ", "ぶんこ", "わかれこ"],
        correct: 0, hint: "物質の最小単位です", explanation: "分子（ぶんし）= 物質の最小単位"
    },
    {
        id: "mega_330", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【原子】",
        options: ["げんし", "もとこ", "げんこ", "はらこ"],
        correct: 0, hint: "物質のもとになる粒子です", explanation: "原子（げんし）= 物質のもとになる粒子"
    },
    {
        id: "mega_331", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【電子】",
        options: ["でんし", "でんこ", "いなずまこ", "でんすけ"],
        correct: 0, hint: "マイナスの電気を持つ粒子です", explanation: "電子（でんし）= マイナスの電気を持つ粒子"
    },
    {
        id: "mega_332", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【細胞】",
        options: ["さいぼう", "ほそあな", "さいあな", "ちいさなあな"],
        correct: 0, hint: "生き物の体の基本単位です", explanation: "細胞（さいぼう）= 生き物の体の基本単位"
    },
    {
        id: "mega_333", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【遺伝】",
        options: ["いでん", "のこしつたえる", "いつたえ", "のこでん"],
        correct: 0, hint: "親から子に性質が受け継がれることです", explanation: "遺伝（いでん）= 親から子に性質が受け継がれること"
    },
    {
        id: "mega_334", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【進化】",
        options: ["しんか", "すすみばけ", "しんばけ", "すすか"],
        correct: 0, hint: "生き物が長い時間をかけて変わることです", explanation: "進化（しんか）= 生き物が長い時間をかけて変わること"
    },
    {
        id: "mega_335", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【酸素】",
        options: ["さんそ", "すっぱいもと", "さんもと", "すいそ"],
        correct: 0, hint: "呼吸に必要な気体です", explanation: "酸素（さんそ）= 呼吸に必要な気体"
    },
    {
        id: "mega_336", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【水素】",
        options: ["すいそ", "みずもと", "すいもと", "みずのもと"],
        correct: 0, hint: "最も軽い気体です", explanation: "水素（すいそ）= 最も軽い気体"
    },
    {
        id: "mega_337", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【二酸化炭素】",
        options: ["にさんかたんそ", "ふたさんかたんそ", "にさんかすみ", "ふたすっぱいすみ"],
        correct: 0, hint: "人間が吐く気体です", explanation: "二酸化炭素（にさんかたんそ）= 人間が吐く気体"
    },
    {
        id: "mega_338", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【光合成】",
        options: ["こうごうせい", "ひかりごうせい", "こうあわせ", "ひかりあわせ"],
        correct: 0, hint: "植物が光を使って栄養を作ることです", explanation: "光合成（こうごうせい）= 植物が光を使って栄養を作ること"
    },
    {
        id: "mega_339", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【呼吸】",
        options: ["こきゅう", "よびいき", "こいき", "よぶいき"],
        correct: 0, hint: "息をすることです", explanation: "呼吸（こきゅう）= 息をすること"
    },
    {
        id: "mega_340", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【消化】",
        options: ["しょうか", "きえばけ", "しょうばけ", "きえか"],
        correct: 0, hint: "食べ物を体に吸収することです", explanation: "消化（しょうか）= 食べ物を体に吸収すること"
    },
    {
        id: "mega_341", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【循環】",
        options: ["じゅんかん", "めぐりまわる", "じゅんまわり", "まわりじゅん"],
        correct: 0, hint: "ぐるぐる回ることです", explanation: "循環（じゅんかん）= ぐるぐる回ること"
    },
    {
        id: "mega_342", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【摩擦】",
        options: ["まさつ", "こすれる", "まこすり", "こすりあう"],
        correct: 0, hint: "物がこすれることです", explanation: "摩擦（まさつ）= 物がこすれること"
    },
    {
        id: "mega_343", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【重力】",
        options: ["じゅうりょく", "おもいちから", "じゅうちから", "おもりょく"],
        correct: 0, hint: "物を地面に引く力です", explanation: "重力（じゅうりょく）= 物を地面に引く力"
    },
    {
        id: "mega_344", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【磁力】",
        options: ["じりょく", "じちから", "まぐちから", "じりき"],
        correct: 0, hint: "磁石の力です", explanation: "磁力（じりょく）= 磁石の力"
    },
    {
        id: "mega_345", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【振動】",
        options: ["しんどう", "ふるえうごく", "しんうごき", "ふりどう"],
        correct: 0, hint: "細かく震えることです", explanation: "振動（しんどう）= 細かく震えること"
    },
    {
        id: "mega_346", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【音波】",
        options: ["おんぱ", "おとなみ", "おんなみ", "ねなみ"],
        correct: 0, hint: "音が伝わる波です", explanation: "音波（おんぱ）= 音が伝わる波"
    },
    {
        id: "mega_347", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【光線】",
        options: ["こうせん", "ひかりせん", "こうすじ", "ひかりすじ"],
        correct: 0, hint: "光の筋のことです", explanation: "光線（こうせん）= 光の筋"
    },
    {
        id: "mega_348", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【反射】",
        options: ["はんしゃ", "はねかえし", "はんかえし", "そりかえし"],
        correct: 0, hint: "光や音が跳ね返ることです", explanation: "反射（はんしゃ）= 光や音が跳ね返ること"
    },
    {
        id: "mega_349", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【屈折】",
        options: ["くっせつ", "まがりおれ", "くっおれ", "まがせつ"],
        correct: 0, hint: "光が曲がることです", explanation: "屈折（くっせつ）= 光が曲がること"
    },
    {
        id: "mega_350", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【蒸発】",
        options: ["じょうはつ", "むしわく", "じょうわく", "むしはつ"],
        correct: 0, hint: "液体が気体になることです", explanation: "蒸発（じょうはつ）= 液体が気体になること"
    }
];

// 統計情報
const stats4 = {
    basic: megaKanjiDatabase4.filter(q => q.level === 'basic').length,
    intermediate: megaKanjiDatabase4.filter(q => q.level === 'intermediate').length,
    advanced: megaKanjiDatabase4.filter(q => q.level === 'advanced').length,
    reading: megaKanjiDatabase4.filter(q => q.type === 'reading').length,
    total: megaKanjiDatabase4.length
};

console.log('Mega Kanji Database Part 4 (301-350):', stats4);

// エクスポート  
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { megaKanjiDatabase4, stats4 };
}