// 漢字問題メガデータベース Part 1 (1-100問)
// 中学受験対応 500問データベース

const megaKanjiDatabase1 = [
    // 小学4年生配当漢字 (1-20問)
    {
        id: "mega_001", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【愛情】",
        options: ["あいせい", "あいじょう", "あいてい", "あいしょう"],
        correct: 1, hint: "人を大切に思う気持ちです", explanation: "愛情（あいじょう）= 人を愛する心"
    },
    {
        id: "mega_002", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【案内】",
        options: ["あんない", "あんだい", "あんがい", "あんたい"],
        correct: 0, hint: "道を教えることです", explanation: "案内（あんない）= 道筋を教えること"
    },
    {
        id: "mega_003", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【以外】",
        options: ["いがい", "いうえ", "いほか", "いそと"],
        correct: 0, hint: "それより他という意味です", explanation: "以外（いがい）= それよりほかに"
    },
    {
        id: "mega_004", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【印象】",
        options: ["いんぞう", "いんしょう", "いんじょう", "いんそう"],
        correct: 1, hint: "心に残る感じのことです", explanation: "印象（いんしょう）= 心に残る感じ"
    },
    {
        id: "mega_005", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【英雄】",
        options: ["えいゆう", "えいおう", "えいしょう", "えいこう"],
        correct: 0, hint: "優れた人物のことです", explanation: "英雄（えいゆう）= 勇気と才能がある人"
    },
    {
        id: "mega_006", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【園児】",
        options: ["えんし", "えんじ", "そのじ", "そのし"],
        correct: 1, hint: "幼稚園に通う子どもです", explanation: "園児（えんじ）= 幼稚園の子ども"
    },
    {
        id: "mega_007", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【奥様】",
        options: ["おくさま", "おうさま", "おくよう", "おうよう"],
        correct: 0, hint: "他人の妻の敬称です", explanation: "奥様（おくさま）= 他人の妻への敬称"
    },
    {
        id: "mega_008", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【加減】",
        options: ["かげん", "かそく", "くわえる", "ましひき"],
        correct: 0, hint: "程度を調整することです", explanation: "加減（かげん）= 程度を調整すること"
    },
    {
        id: "mega_009", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【改良】",
        options: ["かいこう", "かいりょう", "あらため", "よくする"],
        correct: 1, hint: "より良くすることです", explanation: "改良（かいりょう）= 改めて良くすること"
    },
    {
        id: "mega_010", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【快晴】",
        options: ["かいせい", "かいはれ", "きもちよい", "はれる"],
        correct: 0, hint: "とても良い天気です", explanation: "快晴（かいせい）= よく晴れた天気"
    },
    {
        id: "mega_011", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【完成】",
        options: ["かんじょう", "かんせい", "できあがり", "しあがり"],
        correct: 1, hint: "作り終わることです", explanation: "完成（かんせい）= 作り終わること"
    },
    {
        id: "mega_012", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【関心】",
        options: ["かんしん", "かんじん", "きょうみ", "きになる"],
        correct: 0, hint: "興味を持つことです", explanation: "関心（かんしん）= 心を向けること"
    },
    {
        id: "mega_013", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【機会】",
        options: ["きかい", "きこう", "チャンス", "タイミング"],
        correct: 0, hint: "良いチャンスのことです", explanation: "機会（きかい）= よいチャンス"
    },
    {
        id: "mega_014", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【給食】",
        options: ["きゅうしょく", "きゅうじき", "たべもの", "しょくじ"],
        correct: 0, hint: "学校で出される食事です", explanation: "給食（きゅうしょく）= 学校などで出す食事"
    },
    {
        id: "mega_015", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【協力】",
        options: ["きょうりょく", "きょうりき", "たすけあい", "りょくをあわせる"],
        correct: 0, hint: "力を合わせることです", explanation: "協力（きょうりょく）= 力を合わせること"
    },
    {
        id: "mega_016", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【苦労】",
        options: ["くろう", "くらう", "くるしみ", "たいへん"],
        correct: 0, hint: "苦しい思いをすることです", explanation: "苦労（くろう）= 苦しい思いをすること"
    },
    {
        id: "mega_017", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【警察】",
        options: ["けいさつ", "けいばつ", "けいび", "おまわり"],
        correct: 0, hint: "治安を守る組織です", explanation: "警察（けいさつ）= 治安を守る組織"
    },
    {
        id: "mega_018", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【建設】",
        options: ["けんせつ", "けんちく", "たてる", "きずく"],
        correct: 0, hint: "建物を建てることです", explanation: "建設（けんせつ）= 建物を建てること"
    },
    {
        id: "mega_019", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【散歩】",
        options: ["さんぽ", "さんぷ", "あるき", "あるく"],
        correct: 0, hint: "歩いて回ることです", explanation: "散歩（さんぽ）= ぶらぶら歩くこと"
    },
    {
        id: "mega_020", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【失敗】",
        options: ["しっぱい", "しつぱい", "しくじり", "だめ"],
        correct: 0, hint: "うまくいかないことです", explanation: "失敗（しっぱい）= うまくいかないこと"
    },

    // 小学5年生配当漢字 (21-40問)
    {
        id: "mega_021", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【圧力】",
        options: ["あつりょく", "あっりょく", "おしつける", "つよさ"],
        correct: 0, hint: "押す力のことです", explanation: "圧力（あつりょく）= 押す力"
    },
    {
        id: "mega_022", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【移動】",
        options: ["いどう", "いりょく", "うごく", "いく"],
        correct: 0, hint: "場所を変えることです", explanation: "移動（いどう）= 場所を移すこと"
    },
    {
        id: "mega_023", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【因果】",
        options: ["いんが", "いんか", "げんいん", "りゆう"],
        correct: 0, hint: "原因と結果のことです", explanation: "因果（いんが）= 原因と結果の関係"
    },
    {
        id: "mega_024", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【永久】",
        options: ["えいきゅう", "えいく", "ながく", "いつまでも"],
        correct: 0, hint: "いつまでも続くことです", explanation: "永久（えいきゅう）= いつまでも続くこと"
    },
    {
        id: "mega_025", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【応援】",
        options: ["おうえん", "おうれん", "たすける", "おうじる"],
        correct: 0, hint: "力を貸して助けることです", explanation: "応援（おうえん）= 力を貸して助けること"
    },
    {
        id: "mega_026", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【可能】",
        options: ["かのう", "かりょう", "できる", "かもしれない"],
        correct: 0, hint: "できる可能性があることです", explanation: "可能（かのう）= することができること"
    },
    {
        id: "mega_027", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【解決】",
        options: ["かいけつ", "かいき", "とく", "かたづく"],
        correct: 0, hint: "問題を解くことです", explanation: "解決（かいけつ）= 問題を解くこと"
    },
    {
        id: "mega_028", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【基準】",
        options: ["きじゅん", "きそ", "もと", "きまり"],
        correct: 0, hint: "判断の基になるものです", explanation: "基準（きじゅん）= 判断の基になるもの"
    },
    {
        id: "mega_029", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【居住】",
        options: ["きょじゅう", "きょじゅ", "すむ", "いる"],
        correct: 0, hint: "住んでいることです", explanation: "居住（きょじゅう）= そこに住んでいること"
    },
    {
        id: "mega_030", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【禁止】",
        options: ["きんし", "きんじ", "だめ", "してはいけない"],
        correct: 0, hint: "してはいけないことです", explanation: "禁止（きんし）= してはいけないと決めること"
    },
    {
        id: "mega_031", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【故障】",
        options: ["こしょう", "こじょう", "われる", "だめになる"],
        correct: 0, hint: "機械が壊れることです", explanation: "故障（こしょう）= 機械が壊れること"
    },
    {
        id: "mega_032", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【災害】",
        options: ["さいがい", "さいか", "わざわい", "たいへん"],
        correct: 0, hint: "地震や火事などの被害です", explanation: "災害（さいがい）= 地震や火事などの被害"
    },
    {
        id: "mega_033", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【支配】",
        options: ["しはい", "しばい", "しべい", "おさめる"],
        correct: 0, hint: "支えて配ることです", explanation: "支配（しはい）= 力でおさめること"
    },
    {
        id: "mega_034", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【条件】",
        options: ["じょうけん", "じょうき", "きまり", "やくそく"],
        correct: 0, hint: "約束の内容です", explanation: "条件（じょうけん）= 約束の内容"
    },
    {
        id: "mega_035", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【情報】",
        options: ["じょうほう", "じょうぽう", "しらせ", "ニュース"],
        correct: 0, hint: "知らせや報告のことです", explanation: "情報（じょうほう）= 知らせや報告"
    },
    {
        id: "mega_036", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【製造】",
        options: ["せいぞう", "せいじょう", "つくる", "こしらえる"],
        correct: 0, hint: "物を作ることです", explanation: "製造（せいぞう）= 物を作ること"
    },
    {
        id: "mega_037", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【態度】",
        options: ["たいど", "たいと", "ようす", "かっこう"],
        correct: 0, hint: "行動の仕方です", explanation: "態度（たいど）= 行動の仕方"
    },
    {
        id: "mega_038", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【団体】",
        options: ["だんたい", "だんてい", "グループ", "なかま"],
        correct: 0, hint: "人が集まった組織です", explanation: "団体（だんたい）= 人が集まった組織"
    },
    {
        id: "mega_039", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【提案】",
        options: ["ていあん", "ていがん", "もうしでる", "ていしゅつ"],
        correct: 0, hint: "意見を出すことです", explanation: "提案（ていあん）= 意見や案を出すこと"
    },
    {
        id: "mega_040", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【導入】",
        options: ["どうにゅう", "どうりょく", "みちびく", "いれる"],
        correct: 0, hint: "新しく取り入れることです", explanation: "導入（どうにゅう）= 新しく取り入れること"
    },

    // 小学6年生配当漢字 (41-60問)
    {
        id: "mega_041", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【異常】",
        options: ["いじょう", "いつね", "ちがう", "おかしい"],
        correct: 0, hint: "普通ではないことです", explanation: "異常（いじょう）= 普通ではないこと"
    },
    {
        id: "mega_042", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【衛星】",
        options: ["えいせい", "えいしょう", "ほし", "つき"],
        correct: 0, hint: "地球の周りを回る天体です", explanation: "衛星（えいせい）= 惑星の周りを回る天体"
    },
    {
        id: "mega_043", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【往復】",
        options: ["おうふく", "おうぷく", "いきかえり", "りょうほう"],
        correct: 0, hint: "行って帰ってくることです", explanation: "往復（おうふく）= 行って帰ってくること"
    },
    {
        id: "mega_044", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【拡大】",
        options: ["かくだい", "かくたい", "ひろげる", "おおきくする"],
        correct: 0, hint: "大きくすることです", explanation: "拡大（かくだい）= 大きくすること"
    },
    {
        id: "mega_045", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【革命】",
        options: ["かくめい", "かくりつ", "かえる", "あらたまる"],
        correct: 0, hint: "政治や社会を大きく変えることです", explanation: "革命（かくめい）= 政治や社会を大きく変えること"
    },
    {
        id: "mega_046", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【机上】",
        options: ["きじょう", "きうえ", "つくえのうえ", "りろん"],
        correct: 0, hint: "机の上という意味です", explanation: "机上（きじょう）= 机の上、理論的な"
    },
    {
        id: "mega_047", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【議会】",
        options: ["ぎかい", "ぎき", "はなしあい", "そうだん"],
        correct: 0, hint: "話し合いをする会です", explanation: "議会（ぎかい）= 国や地方の政治を話し合う会"
    },
    {
        id: "mega_048", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【激しい】",
        options: ["はげしい", "げきしい", "つよい", "すごい"],
        correct: 0, hint: "とても強いことです", explanation: "激しい（はげしい）= 勢いが強いこと"
    },
    {
        id: "mega_049", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【権利】",
        options: ["けんり", "けんりき", "ちから", "みりょく"],
        correct: 0, hint: "当然持っている資格です", explanation: "権利（けんり）= 当然持っている資格"
    },
    {
        id: "mega_050", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【厳格】",
        options: ["げんかく", "きびしい", "まじめ", "かたい"],
        correct: 0, hint: "とても厳しいことです", explanation: "厳格（げんかく）= とても厳しいこと"
    },
    {
        id: "mega_051", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【効果】",
        options: ["こうか", "こうが", "きく", "やくにたつ"],
        correct: 0, hint: "良い結果のことです", explanation: "効果（こうか）= よい結果"
    },
    {
        id: "mega_052", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【困難】",
        options: ["こんなん", "こまる", "むずかしい", "たいへん"],
        correct: 0, hint: "とても難しいことです", explanation: "困難（こんなん）= とても難しいこと"
    },
    {
        id: "mega_053", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【財産】",
        options: ["ざいさん", "たから", "おかね", "もちもの"],
        correct: 0, hint: "持っている貴重なものです", explanation: "財産（ざいさん）= 持っている貴重なもの"
    },
    {
        id: "mega_054", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【視野】",
        options: ["しや", "しの", "みえる", "ひろさ"],
        correct: 0, hint: "見える範囲のことです", explanation: "視野（しや）= 見える範囲"
    },
    {
        id: "mega_055", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【純粋】",
        options: ["じゅんすい", "きれい", "まじりけなし", "きよい"],
        correct: 0, hint: "混じりけがないことです", explanation: "純粋（じゅんすい）= 混じりけがないこと"
    },
    {
        id: "mega_056", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【承認】",
        options: ["しょうにん", "うけいれる", "みとめる", "さんせい"],
        correct: 0, hint: "認めることです", explanation: "承認（しょうにん）= 認めること"
    },
    {
        id: "mega_057", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【政治】",
        options: ["せいじ", "せいち", "まつりごと", "おさめる"],
        correct: 0, hint: "国をおさめることです", explanation: "政治（せいじ）= 国をおさめること"
    },
    {
        id: "mega_058", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【専門】",
        options: ["せんもん", "とくべつ", "くわしい", "とくい"],
        correct: 0, hint: "特に詳しい分野です", explanation: "専門（せんもん）= 特に詳しい分野"
    },
    {
        id: "mega_059", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【装置】",
        options: ["そうち", "そうび", "きかい", "どうぐ"],
        correct: 0, hint: "特別な機械のことです", explanation: "装置（そうち）= 特別な機械"
    },
    {
        id: "mega_060", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【宅配】",
        options: ["たくはい", "たくばい", "いえにとどける", "はいたつ"],
        correct: 0, hint: "家に届けることです", explanation: "宅配（たくはい）= 家に荷物を届けること"
    },

    // 中学受験頻出漢字 (61-80問)
    {
        id: "mega_061", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【卓越】",
        options: ["たくえつ", "たくこし", "しょうえつ", "たくぜつ"],
        correct: 0, hint: "他より特に優れていることです", explanation: "卓越（たくえつ）= 他よりも特に優れていること"
    },
    {
        id: "mega_062", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【逸話】",
        options: ["いちわ", "いつわ", "いつだん", "いちだん"],
        correct: 1, hint: "世間にあまり知られていない興味深い話です", explanation: "逸話（いつわ）= 世間にあまり知られていない興味深い話"
    },
    {
        id: "mega_063", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【謙遜】",
        options: ["けんそん", "けんじょう", "きょうそん", "けんしょう"],
        correct: 0, hint: "控えめな態度をとることです", explanation: "謙遜（けんそん）= 控えめな態度をとること"
    },
    {
        id: "mega_064", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【洞察】",
        options: ["とうさつ", "どうかつ", "とうかつ", "どうさつ"],
        correct: 3, hint: "物事の本質を見抜くことです", explanation: "洞察（どうさつ）= 物事の本質を見抜くこと"
    },
    {
        id: "mega_065", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【葛藤】",
        options: ["かつとう", "かっとう", "くずとう", "かつどう"],
        correct: 1, hint: "相反する気持ちで悩むことです", explanation: "葛藤（かっとう）= 相反する気持ちで悩むこと"
    },
    {
        id: "mega_066", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【憂慮】",
        options: ["ゆうろ", "うりょ", "ゆりょ", "ゆうりょ"],
        correct: 3, hint: "心配して思い悩むことです", explanation: "憂慮（ゆうりょ）= 心配して思い悩むこと"
    },
    {
        id: "mega_067", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【邁進】",
        options: ["まいしん", "まいじん", "ばいしん", "ばいじん"],
        correct: 0, hint: "目標に向かって勢いよく進むことです", explanation: "邁進（まいしん）= 目標に向かって勢いよく進むこと"
    },
    {
        id: "mega_068", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【凌駕】",
        options: ["りんが", "りょうか", "りょうが", "りんか"],
        correct: 2, hint: "他を上回って優れることです", explanation: "凌駕（りょうが）= 他を上回って優れること"
    },
    {
        id: "mega_069", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【顕著】",
        options: ["けんちょ", "けんちゃく", "あきらか", "めだつ"],
        correct: 0, hint: "はっきりと目立つことです", explanation: "顕著（けんちょ）= はっきりと目立つこと"
    },
    {
        id: "mega_070", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【慣習】",
        options: ["かんしゅう", "なれる", "しゅうかん", "ならわし"],
        correct: 0, hint: "昔からの習慣のことです", explanation: "慣習（かんしゅう）= 昔からの習慣"
    },
    {
        id: "mega_071", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【概念】",
        options: ["がいねん", "がいれん", "かんがえ", "いみ"],
        correct: 0, hint: "物事の大まかな意味です", explanation: "概念（がいねん）= 物事の大まかな意味や考え"
    },
    {
        id: "mega_072", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【遵守】",
        options: ["じゅんしゅ", "そんしゅ", "まもる", "したがう"],
        correct: 0, hint: "きまりを守ることです", explanation: "遵守（じゅんしゅ）= きまりを守ること"
    },
    {
        id: "mega_073", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【醸成】",
        options: ["じょうせい", "かもす", "つくりだす", "そだてる"],
        correct: 0, hint: "少しずつ作り上げることです", explanation: "醸成（じょうせい）= 少しずつ作り上げること"
    },
    {
        id: "mega_074", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【懸念】",
        options: ["けねん", "けんねん", "しんぱい", "きづかい"],
        correct: 1, hint: "気がかりに思うことです", explanation: "懸念（けんねん）= 気がかりに思うこと"
    },
    {
        id: "mega_075", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【斬新】",
        options: ["ざんしん", "せんしん", "あたらしい", "みがわり"],
        correct: 0, hint: "とても新しいことです", explanation: "斬新（ざんしん）= とても新しくて人を驚かせること"
    },
    {
        id: "mega_076", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【摸索】",
        options: ["もさく", "ぼさく", "さがす", "たしかめる"],
        correct: 1, hint: "手探りで探し求めることです", explanation: "摸索（ぼさく）= 手探りで探し求めること"
    },
    {
        id: "mega_077", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【端緒】",
        options: ["たんしょ", "たんちょ", "はじまり", "いとぐち"],
        correct: 0, hint: "物事の始まりです", explanation: "端緒（たんしょ）= 物事の始まり、糸口"
    },
    {
        id: "mega_078", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【判然】",
        options: ["はんぜん", "ばんぜん", "あきらか", "はっきり"],
        correct: 0, hint: "はっきりしていることです", explanation: "判然（はんぜん）= はっきりしていること"
    },
    {
        id: "mega_079", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【簡潔】",
        options: ["かんけつ", "かんせつ", "みじかい", "たんじゅん"],
        correct: 0, hint: "短くてわかりやすいことです", explanation: "簡潔（かんけつ）= 短くてわかりやすいこと"
    },
    {
        id: "mega_080", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【慎重】",
        options: ["しんちょう", "しんじゅう", "きをつける", "ちゅういぶかい"],
        correct: 0, hint: "注意深いことです", explanation: "慎重（しんちょう）= 注意深いこと"
    },

    // 同音異義語・書き問題 (81-100問)
    {
        id: "mega_081", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：会議で【イケン】を述べる",
        options: ["異見", "意見", "違見", "以見"],
        correct: 1, hint: "自分の考えという意味です", explanation: "意見 = 物事に対する考えや判断"
    },
    {
        id: "mega_082", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：友人を【シンライ】する",
        options: ["信来", "心頼", "信頼", "心来"],
        correct: 2, hint: "信じて頼ることです", explanation: "信頼 = 信じて頼りにすること"
    },
    {
        id: "mega_083", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：環境を【ホゴ】する",
        options: ["保互", "補護", "補互", "保護"],
        correct: 3, hint: "危険から守ることです", explanation: "保護 = 危険から守ること"
    },
    {
        id: "mega_084", level: "basic", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ケンコウ】に気をつける",
        options: ["健康", "堅康", "建康", "券康"],
        correct: 0, hint: "体の調子が良い状態のことです", explanation: "健康 = 体や心の調子が良いこと"
    },
    {
        id: "mega_085", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：試験に【ゴウカク】する",
        options: ["合格", "号角", "豪格", "郷格"],
        correct: 0, hint: "試験に通ることです", explanation: "合格 = 試験などで一定の基準を満たすこと"
    },
    {
        id: "mega_086", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ケンキュウ】を重ねる",
        options: ["研究", "健球", "堅球", "建究"],
        correct: 0, hint: "深く調べることです", explanation: "研究 = 物事を深く調べ、真理を明らかにすること"
    },
    {
        id: "mega_087", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【セイコウ】を収める",
        options: ["成功", "成幸", "誠考", "清考"],
        correct: 0, hint: "うまくいくことです", explanation: "成功 = 物事がうまくいくこと"
    },
    {
        id: "mega_088", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ハッテン】する町",
        options: ["発点", "発展", "発店", "八点"],
        correct: 1, hint: "大きく発達することです", explanation: "発展 = 大きく発達すること"
    },
    {
        id: "mega_089", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【シンポ】をする",
        options: ["進歩", "新歩", "心歩", "振歩"],
        correct: 0, hint: "前に向かって進むことです", explanation: "進歩 = より良い方向に進むこと"
    },
    {
        id: "mega_090", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ジユウ】に活動する",
        options: ["自由", "自遊", "字由", "時由"],
        correct: 0, hint: "束縛されないことです", explanation: "自由 = 束縛されず、思いのままにできること"
    },
    {
        id: "mega_091", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ブンメイ】の発達",
        options: ["文明", "文名", "分明", "分名"],
        correct: 0, hint: "人類の進歩した状態です", explanation: "文明 = 人類の進歩した文化的状態"
    },
    {
        id: "mega_092", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ダンタイ】で行動する",
        options: ["談体", "弾体", "団体", "段体"],
        correct: 2, hint: "人が集まった組織です", explanation: "団体 = 人が集まった組織"
    },
    {
        id: "mega_093", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【コウサン】を示す",
        options: ["降参", "行参", "考参", "校参"],
        correct: 0, hint: "負けを認めることです", explanation: "降参 = 負けを認めること"
    },
    {
        id: "mega_094", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ヘイワ】な時代",
        options: ["平和", "平話", "兵和", "兵話"],
        correct: 0, hint: "争いがない状態です", explanation: "平和 = 争いがなく穏やかな状態"
    },
    {
        id: "mega_095", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【レキシ】を学ぶ",
        options: ["歴史", "暦史", "歴紙", "暦紙"],
        correct: 0, hint: "過去の出来事です", explanation: "歴史 = 過去から現在までの出来事"
    },
    {
        id: "mega_096", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【テンキ】が良い",
        options: ["天気", "天機", "転気", "転機"],
        correct: 0, hint: "空の様子です", explanation: "天気 = 空の様子、気象状態"
    },
    {
        id: "mega_097", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【カイケツ】する",
        options: ["解決", "会決", "回決", "快決"],
        correct: 0, hint: "問題を解くことです", explanation: "解決 = 問題を解くこと"
    },
    {
        id: "mega_098", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【コウクウ】会社",
        options: ["航空", "向空", "高空", "抗空"],
        correct: 0, hint: "飛行機に関することです", explanation: "航空 = 飛行機で空を飛ぶこと"
    },
    {
        id: "mega_099", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【ドクリツ】する",
        options: ["独立", "読立", "毒立", "独竜"],
        correct: 0, hint: "一人立ちすることです", explanation: "独立 = 他に頼らず一人立ちすること"
    },
    {
        id: "mega_100", level: "intermediate", type: "writing",
        question: "次の文の【　】に入る漢字を書きなさい：【シュウリ】する",
        options: ["修理", "収理", "習理", "秀理"],
        correct: 0, hint: "壊れたものを直すことです", explanation: "修理 = 壊れたものを直すこと"
    }
];

// 統計情報
const stats1 = {
    basic: megaKanjiDatabase1.filter(q => q.level === 'basic').length,
    intermediate: megaKanjiDatabase1.filter(q => q.level === 'intermediate').length,
    advanced: megaKanjiDatabase1.filter(q => q.level === 'advanced').length,
    reading: megaKanjiDatabase1.filter(q => q.type === 'reading').length,
    writing: megaKanjiDatabase1.filter(q => q.type === 'writing').length,
    total: megaKanjiDatabase1.length
};

console.log('Mega Kanji Database Part 1 (1-100):', stats1);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { megaKanjiDatabase1, stats1 };
}