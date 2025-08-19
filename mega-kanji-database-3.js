// 漢字問題メガデータベース Part 3 (201-300問)

const megaKanjiDatabase3 = [
    // 地名・人名読み (201-220問)
    {
        id: "mega_201", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【奈良】",
        options: ["なら", "だいら", "てら", "なりょう"],
        correct: 0, hint: "関西地方の県です", explanation: "奈良（なら）= 関西地方の県名"
    },
    {
        id: "mega_202", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【愛媛】",
        options: ["あいえん", "あいひめ", "えひめ", "あいばい"],
        correct: 2, hint: "四国地方の県です", explanation: "愛媛（えひめ）= 四国地方の県名"
    },
    {
        id: "mega_203", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【岐阜】",
        options: ["ぎふ", "きふ", "ぎふう", "きゆう"],
        correct: 0, hint: "中部地方の県です", explanation: "岐阜（ぎふ）= 中部地方の県名"
    },
    {
        id: "mega_204", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【山梨】",
        options: ["やまなし", "さんり", "やまり", "せんり"],
        correct: 0, hint: "富士山のある県です", explanation: "山梨（やまなし）= 中部地方の県名"
    },
    {
        id: "mega_205", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【滋賀】",
        options: ["しが", "じが", "しか", "じか"],
        correct: 0, hint: "琵琶湖のある県です", explanation: "滋賀（しが）= 関西地方の県名"
    },
    {
        id: "mega_206", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【茨城】",
        options: ["いばらき", "いばらぎ", "いばらしろ", "ばらき"],
        correct: 0, hint: "関東地方の県です", explanation: "茨城（いばらき）= 関東地方の県名"
    },
    {
        id: "mega_207", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【埼玉】",
        options: ["さいたま", "さきたま", "さいだま", "ささま"],
        correct: 0, hint: "東京の北にある県です", explanation: "埼玉（さいたま）= 関東地方の県名"
    },
    {
        id: "mega_208", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【宮崎】",
        options: ["みやざき", "きゅうさき", "みやさき", "ぐうさき"],
        correct: 0, hint: "九州地方の県です", explanation: "宮崎（みやざき）= 九州地方の県名"
    },
    {
        id: "mega_209", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【徳島】",
        options: ["とくしま", "とくじま", "のりしま", "あつしま"],
        correct: 0, hint: "四国地方の県です", explanation: "徳島（とくしま）= 四国地方の県名"
    },
    {
        id: "mega_210", level: "intermediate", type: "reading",
        question: "次の地名の読み方を選びなさい：【鹿児島】",
        options: ["かごしま", "ろくじしま", "しかじしま", "かこしま"],
        correct: 0, hint: "九州地方の県です", explanation: "鹿児島（かごしま）= 九州地方の県名"
    },
    {
        id: "mega_211", level: "advanced", type: "reading",
        question: "次の地名の読み方を選びなさい：【越後】",
        options: ["えちご", "こしご", "えちあと", "こしあと"],
        correct: 0, hint: "新潟県の古い呼び名です", explanation: "越後（えちご）= 新潟県の古い国名"
    },
    {
        id: "mega_212", level: "advanced", type: "reading",
        question: "次の地名の読み方を選びなさい：【薩摩】",
        options: ["さつま", "さつも", "さっま", "さくま"],
        correct: 0, hint: "鹿児島県の古い呼び名です", explanation: "薩摩（さつま）= 鹿児島県の古い国名"
    },
    {
        id: "mega_213", level: "advanced", type: "reading",
        question: "次の地名の読み方を選びなさい：【近江】",
        options: ["おうみ", "きんこう", "ちかえ", "おおみ"],
        correct: 0, hint: "滋賀県の古い呼び名です", explanation: "近江（おうみ）= 滋賀県の古い国名"
    },
    {
        id: "mega_214", level: "advanced", type: "reading",
        question: "次の地名の読み方を選びなさい：【甲斐】",
        options: ["かい", "こうひ", "かひ", "がい"],
        correct: 0, hint: "山梨県の古い呼び名です", explanation: "甲斐（かい）= 山梨県の古い国名"
    },
    {
        id: "mega_215", level: "advanced", type: "reading",
        question: "次の地名の読み方を選びなさい：【陸奥】",
        options: ["みちのく", "りくおう", "むつ", "りくむつ"],
        correct: 0, hint: "東北地方の古い呼び名です", explanation: "陸奥（みちのく）= 東北地方の古い国名"
    },
    {
        id: "mega_216", level: "intermediate", type: "reading",
        question: "次の人名の読み方を選びなさい：【田中】",
        options: ["たなか", "でんちゅう", "たじゅう", "でんか"],
        correct: 0, hint: "よくある日本の姓です", explanation: "田中（たなか）= 一般的な日本の姓"
    },
    {
        id: "mega_217", level: "intermediate", type: "reading",
        question: "次の人名の読み方を選びなさい：【佐藤】",
        options: ["さとう", "さふじ", "さどう", "さとお"],
        correct: 0, hint: "日本で最も多い姓の一つです", explanation: "佐藤（さとう）= 日本で最も多い姓の一つ"
    },
    {
        id: "mega_218", level: "intermediate", type: "reading",
        question: "次の人名の読み方を選びなさい：【山田】",
        options: ["やまだ", "さんでん", "やまた", "せんた"],
        correct: 0, hint: "よくある日本の姓です", explanation: "山田（やまだ）= 一般的な日本の姓"
    },
    {
        id: "mega_219", level: "intermediate", type: "reading",
        question: "次の人名の読み方を選びなさい：【高橋】",
        options: ["たかはし", "こうきょう", "たかばし", "こうはし"],
        correct: 0, hint: "よくある日本の姓です", explanation: "高橋（たかはし）= 一般的な日本の姓"
    },
    {
        id: "mega_220", level: "intermediate", type: "reading",
        question: "次の人名の読み方を選びなさい：【渡辺】",
        options: ["わたなべ", "とへん", "わたべ", "どへん"],
        correct: 0, hint: "よくある日本の姓です", explanation: "渡辺（わたなべ）= 一般的な日本の姓"
    },

    // 音読み・訓読み混合 (221-250問)
    {
        id: "mega_221", level: "intermediate", type: "reading",
        question: "「新聞」の正しい読み方を選びなさい",
        options: ["しんぶん", "あたらしききく", "あらかみ", "にいがみ"],
        correct: 0, hint: "ニュースを伝える紙です", explanation: "新聞（しんぶん）= 音読み×音読み"
    },
    {
        id: "mega_222", level: "intermediate", type: "reading",
        question: "「手紙」の正しい読み方を選びなさい",
        options: ["てがみ", "しゅし", "てし", "しゅがみ"],
        correct: 0, hint: "手で書いた紙のことです", explanation: "手紙（てがみ）= 訓読み×訓読み"
    },
    {
        id: "mega_223", level: "intermediate", type: "reading",
        question: "「電話」の正しい読み方を選びなさい",
        options: ["でんわ", "でんき", "いなずまはなし", "かみなりごえ"],
        correct: 0, hint: "遠くの人と話すための機械です", explanation: "電話（でんわ）= 音読み×音読み"
    },
    {
        id: "mega_224", level: "intermediate", type: "reading",
        question: "「雨水」の正しい読み方を選びなさい",
        options: ["あまみず", "うすい", "あめみず", "うすい"],
        correct: 0, hint: "雨が降った水のことです", explanation: "雨水（あまみず）= 訓読み×訓読み"
    },
    {
        id: "mega_225", level: "intermediate", type: "reading",
        question: "「台風」の正しい読み方を選びなさい",
        options: ["たいふう", "だいかぜ", "うてなかぜ", "つくえかぜ"],
        correct: 0, hint: "強い風を伴う嵐です", explanation: "台風（たいふう）= 音読み×音読み"
    },
    {
        id: "mega_226", level: "intermediate", type: "reading",
        question: "「火事」の正しい読み方を選びなさい",
        options: ["かじ", "ひごと", "ひこと", "かこと"],
        correct: 0, hint: "火災のことです", explanation: "火事（かじ）= 音読み×音読み"
    },
    {
        id: "mega_227", level: "intermediate", type: "reading",
        question: "「青空」の正しい読み方を選びなさい",
        options: ["あおぞら", "せいくう", "あおそら", "せいこく"],
        correct: 0, hint: "晴れた日の空のことです", explanation: "青空（あおぞら）= 訓読み×訓読み"
    },
    {
        id: "mega_228", level: "intermediate", type: "reading",
        question: "「白雪」の正しい読み方を選びなさい",
        options: ["はくせつ", "しろゆき", "はくゆき", "しらゆき"],
        correct: 3, hint: "白い雪のことです", explanation: "白雪（しらゆき）= 訓読み×訓読み"
    },
    {
        id: "mega_229", level: "intermediate", type: "reading",
        question: "「夕日」の正しい読み方を選びなさい",
        options: ["ゆうひ", "せきじつ", "ゆうび", "ばんじつ"],
        correct: 0, hint: "夕方の太陽のことです", explanation: "夕日（ゆうひ）= 訓読み×訓読み"
    },
    {
        id: "mega_230", level: "intermediate", type: "reading",
        question: "「春風」の正しい読み方を選びなさい",
        options: ["しゅんぷう", "はるかぜ", "しゅんかぜ", "はるふう"],
        correct: 1, hint: "春の風のことです", explanation: "春風（はるかぜ）= 訓読み×訓読み"
    },
    {
        id: "mega_231", level: "intermediate", type: "reading",
        question: "「月光」の正しい読み方を選びなさい",
        options: ["げっこう", "つきひかり", "がつこう", "つきこう"],
        correct: 0, hint: "月の光のことです", explanation: "月光（げっこう）= 音読み×音読み"
    },
    {
        id: "mega_232", level: "intermediate", type: "reading",
        question: "「星空」の正しい読み方を選びなさい",
        options: ["ほしぞら", "せいくう", "ほしそら", "せいこく"],
        correct: 0, hint: "星がある夜空のことです", explanation: "星空（ほしぞら）= 訓読み×訓読み"
    },
    {
        id: "mega_233", level: "intermediate", type: "reading",
        question: "「花火」の正しい読み方を選びなさい",
        options: ["はなび", "かか", "はなひ", "かび"],
        correct: 0, hint: "お祭りで打ち上げるものです", explanation: "花火（はなび）= 訓読み×訓読み"
    },
    {
        id: "mega_234", level: "intermediate", type: "reading",
        question: "「雷雨」の正しい読み方を選びなさい",
        options: ["らいう", "かみなりあめ", "らいあめ", "いかずちう"],
        correct: 0, hint: "雷を伴う雨のことです", explanation: "雷雨（らいう）= 音読み×音読み"
    },
    {
        id: "mega_235", level: "intermediate", type: "reading",
        question: "「虹色」の正しい読み方を選びなさい",
        options: ["にじいろ", "こうしょく", "にじしき", "こういろ"],
        correct: 0, hint: "虹のような美しい色です", explanation: "虹色（にじいろ）= 訓読み×訓読み"
    },
    {
        id: "mega_236", level: "intermediate", type: "reading",
        question: "「氷山」の正しい読み方を選びなさい",
        options: ["ひょうざん", "こおりやま", "ひょうやま", "こおりざん"],
        correct: 0, hint: "海に浮かぶ大きな氷のかたまりです", explanation: "氷山（ひょうざん）= 音読み×音読み"
    },
    {
        id: "mega_237", level: "intermediate", type: "reading",
        question: "「海水」の正しい読み方を選びなさい",
        options: ["かいすい", "うみみず", "かいみず", "うますい"],
        correct: 0, hint: "海の水のことです", explanation: "海水（かいすい）= 音読み×音読み"
    },
    {
        id: "mega_238", level: "intermediate", type: "reading",
        question: "「山道」の正しい読み方を選びなさい",
        options: ["やまみち", "さんどう", "やまどう", "さんみち"],
        correct: 0, hint: "山にある道のことです", explanation: "山道（やまみち）= 訓読み×訓読み"
    },
    {
        id: "mega_239", level: "intermediate", type: "reading",
        question: "「川岸」の正しい読み方を選びなさい",
        options: ["かわぎし", "せんがん", "かわがん", "せんきし"],
        correct: 0, hint: "川のそばの陸地です", explanation: "川岸（かわぎし）= 訓読み×訓読み"
    },
    {
        id: "mega_240", level: "intermediate", type: "reading",
        question: "「森林」の正しい読み方を選びなさい",
        options: ["しんりん", "もりはやし", "しんばやし", "もりりん"],
        correct: 0, hint: "たくさんの木が生えている場所です", explanation: "森林（しんりん）= 音読み×音読み"
    },
    {
        id: "mega_241", level: "intermediate", type: "reading",
        question: "「野原」の正しい読み方を選びなさい",
        options: ["のはら", "やげん", "のげん", "やはら"],
        correct: 0, hint: "広い草原のことです", explanation: "野原（のはら）= 訓読み×訓読み"
    },
    {
        id: "mega_242", level: "intermediate", type: "reading",
        question: "「田園」の正しい読み方を選びなさい",
        options: ["でんえん", "たその", "でんその", "たえん"],
        correct: 0, hint: "田んぼと畑がある場所です", explanation: "田園（でんえん）= 音読み×音読み"
    },
    {
        id: "mega_243", level: "intermediate", type: "reading",
        question: "「都市」の正しい読み方を選びなさい",
        options: ["とし", "みやこまち", "とまち", "つし"],
        correct: 0, hint: "人がたくさん住んでいる場所です", explanation: "都市（とし）= 音読み×音読み"
    },
    {
        id: "mega_244", level: "intermediate", type: "reading",
        question: "「村落」の正しい読み方を選びなさい",
        options: ["そんらく", "むらおち", "そんおち", "むられき"],
        correct: 0, hint: "小さな村のことです", explanation: "村落（そんらく）= 音読み×音読み"
    },
    {
        id: "mega_245", level: "intermediate", type: "reading",
        question: "「島国」の正しい読み方を選びなさい",
        options: ["しまぐに", "とうこく", "しまこく", "とうぐに"],
        correct: 0, hint: "島でできている国のことです", explanation: "島国（しまぐに）= 訓読み×訓読み"
    },
    {
        id: "mega_246", level: "intermediate", type: "reading",
        question: "「半島」の正しい読み方を選びなさい",
        options: ["はんとう", "なかばしま", "はんしま", "なかばとう"],
        correct: 0, hint: "三方を海に囲まれた陸地です", explanation: "半島（はんとう）= 音読み×音読み"
    },
    {
        id: "mega_247", level: "intermediate", type: "reading",
        question: "「湖水」の正しい読み方を選びなさい",
        options: ["こすい", "みずうみ", "こみず", "みずこ"],
        correct: 0, hint: "湖の水のことです", explanation: "湖水（こすい）= 音読み×音読み"
    },
    {
        id: "mega_248", level: "intermediate", type: "reading",
        question: "「河川」の正しい読み方を選びなさい",
        options: ["かせん", "かわがわ", "かがわ", "かわせん"],
        correct: 0, hint: "川のことです", explanation: "河川（かせん）= 音読み×音読み"
    },
    {
        id: "mega_249", level: "intermediate", type: "reading",
        question: "「沼地」の正しい読み方を選びなさい",
        options: ["ぬまち", "しょうち", "ぬまじ", "しょうじ"],
        correct: 0, hint: "沼がある土地のことです", explanation: "沼地（ぬまち）= 訓読み×訓読み"
    },
    {
        id: "mega_250", level: "intermediate", type: "reading",
        question: "「砂漠」の正しい読み方を選びなさい",
        options: ["さばく", "すなさび", "ささび", "すなばく"],
        correct: 0, hint: "砂と岩ばかりの乾燥した土地です", explanation: "砂漠（さばく）= 音読み×音読み"
    },

    // 表外読み・特殊読み (251-280問)
    {
        id: "mega_251", level: "advanced", type: "reading",
        question: "「梅雨」の正しい読み方を選びなさい",
        options: ["ばいう", "つゆ", "うめあめ", "ばいあめ"],
        correct: 1, hint: "6月頃の雨の多い時期です", explanation: "梅雨（つゆ）= 特殊な読み方"
    },
    {
        id: "mega_252", level: "advanced", type: "reading",
        question: "「時雨」の正しい読み方を選びなさい",
        options: ["じう", "しぐれ", "ときあめ", "じあめ"],
        correct: 1, hint: "秋から冬にかけての急な雨です", explanation: "時雨（しぐれ）= 特殊な読み方"
    },
    {
        id: "mega_253", level: "advanced", type: "reading",
        question: "「紅葉」の正しい読み方を選びなさい",
        options: ["こうよう", "もみじ", "べには", "あかば"],
        correct: 1, hint: "秋に葉が赤くなることです", explanation: "紅葉（もみじ）= 特殊な読み方"
    },
    {
        id: "mega_254", level: "advanced", type: "reading",
        question: "「海老」の正しい読み方を選びなさい",
        options: ["かいろう", "えび", "うみろう", "かいび"],
        correct: 1, hint: "甲殻類の海の生き物です", explanation: "海老（えび）= 特殊な読み方"
    },
    {
        id: "mega_255", level: "advanced", type: "reading",
        question: "「蝸牛」の正しい読み方を選びなさい",
        options: ["かぎゅう", "かたつむり", "でんでんむし", "うずまきむし"],
        correct: 1, hint: "殻を背負って歩く小さな生き物です", explanation: "蝸牛（かたつむり）= 特殊な読み方"
    },
    {
        id: "mega_256", level: "advanced", type: "reading",
        question: "「河馬」の正しい読み方を選びなさい",
        options: ["かば", "かわうま", "かま", "りば"],
        correct: 0, hint: "川に住む大きな動物です", explanation: "河馬（かば）= 特殊な読み方"
    },
    {
        id: "mega_257", level: "advanced", type: "reading",
        question: "「海豚」の正しい読み方を選びなさい",
        options: ["かいとん", "いるか", "うみぶた", "かいぶた"],
        correct: 1, hint: "海に住む賢い哺乳類です", explanation: "海豚（いるか）= 特殊な読み方"
    },
    {
        id: "mega_258", level: "advanced", type: "reading",
        question: "「仙人掌」の正しい読み方を選びなさい",
        options: ["せんにんしょう", "さぼてん", "せんじんかく", "せんにんかく"],
        correct: 1, hint: "とげのある砂漠の植物です", explanation: "仙人掌（さぼてん）= 特殊な読み方"
    },
    {
        id: "mega_259", level: "advanced", type: "reading",
        question: "「向日葵」の正しい読み方を選びなさい",
        options: ["こうじつき", "ひまわり", "むかいにちき", "こうにちき"],
        correct: 1, hint: "太陽の方を向く黄色い大きな花です", explanation: "向日葵（ひまわり）= 特殊な読み方"
    },
    {
        id: "mega_260", level: "advanced", type: "reading",
        question: "「薔薇」の正しい読み方を選びなさい",
        options: ["しょうび", "ばら", "そうび", "こうび"],
        correct: 1, hint: "とげのある美しい花です", explanation: "薔薇（ばら）= 特殊な読み方"
    },
    {
        id: "mega_261", level: "advanced", type: "reading",
        question: "「松茸」の正しい読み方を選びなさい",
        options: ["しょうじょう", "まつたけ", "まつちく", "しょうちく"],
        correct: 1, hint: "秋の高級なきのこです", explanation: "松茸（まつたけ）= 特殊な読み方"
    },
    {
        id: "mega_262", level: "advanced", type: "reading",
        question: "「土筆」の正しい読み方を選びなさい",
        options: ["どひつ", "つくし", "つちふで", "どふで"],
        correct: 1, hint: "春に出てくる植物です", explanation: "土筆（つくし）= 特殊な読み方"
    },
    {
        id: "mega_263", level: "advanced", type: "reading",
        question: "「女郎蜘蛛」の正しい読み方を選びなさい",
        options: ["じょろうぐも", "おんなろうくも", "めろうくも", "じょろくも"],
        correct: 0, hint: "巣を張る蜘蛛の一種です", explanation: "女郎蜘蛛（じょろうぐも）= 特殊な読み方"
    },
    {
        id: "mega_264", level: "advanced", type: "reading",
        question: "「蒲公英」の正しい読み方を選びなさい",
        options: ["ほこうえい", "たんぽぽ", "かこうえい", "がこうえい"],
        correct: 1, hint: "黄色い花で綿毛を飛ばす植物です", explanation: "蒲公英（たんぽぽ）= 特殊な読み方"
    },
    {
        id: "mega_265", level: "advanced", type: "reading",
        question: "「木菟」の正しい読み方を選びなさい",
        options: ["きと", "みみずく", "もくと", "きうさぎ"],
        correct: 1, hint: "夜行性の鳥です", explanation: "木菟（みみずく）= 特殊な読み方"
    },
    {
        id: "mega_266", level: "advanced", type: "reading",
        question: "「海月」の正しい読み方を選びなさい",
        options: ["かいげつ", "くらげ", "うみつき", "かいつき"],
        correct: 1, hint: "海を漂う透明な生き物です", explanation: "海月（くらげ）= 特殊な読み方"
    },
    {
        id: "mega_267", level: "advanced", type: "reading",
        question: "「山茶花」の正しい読み方を選びなさい",
        options: ["さんちゃか", "さざんか", "やまちゃばな", "さんさか"],
        correct: 1, hint: "冬に咲く白やピンクの花です", explanation: "山茶花（さざんか）= 特殊な読み方"
    },
    {
        id: "mega_268", level: "advanced", type: "reading",
        question: "「石楠花」の正しい読み方を選びなさい",
        options: ["せきなんか", "しゃくなげ", "いしなんか", "せきだんか"],
        correct: 1, hint: "春に咲く美しい花です", explanation: "石楠花（しゃくなげ）= 特殊な読み方"
    },
    {
        id: "mega_269", level: "advanced", type: "reading",
        question: "「紫陽花」の正しい読み方を選びなさい",
        options: ["しようか", "あじさい", "むらさきようか", "しだいか"],
        correct: 1, hint: "梅雨の時期に咲く花です", explanation: "紫陽花（あじさい）= 特殊な読み方"
    },
    {
        id: "mega_270", level: "advanced", type: "reading",
        question: "「欅」の正しい読み方を選びなさい",
        options: ["きょ", "けやき", "くぬぎ", "えのき"],
        correct: 1, hint: "大きく育つ落葉樹です", explanation: "欅（けやき）= 特殊な読み方"
    },
    {
        id: "mega_271", level: "advanced", type: "reading",
        question: "「椿」の正しい読み方を選びなさい",
        options: ["ちん", "つばき", "かえで", "きり"],
        correct: 1, hint: "冬から春に咲く赤い花です", explanation: "椿（つばき）= 特殊な読み方"
    },
    {
        id: "mega_272", level: "advanced", type: "reading",
        question: "「楓」の正しい読み方を選びなさい",
        options: ["ふう", "かえで", "もみじ", "たけ"],
        correct: 1, hint: "秋に美しく紅葉する木です", explanation: "楓（かえで）= 特殊な読み方"
    },
    {
        id: "mega_273", level: "advanced", type: "reading",
        question: "「桔梗」の正しい読み方を選びなさい",
        options: ["きっこう", "ききょう", "きこう", "きつこう"],
        correct: 1, hint: "秋の七草の一つです", explanation: "桔梗（ききょう）= 特殊な読み方"
    },
    {
        id: "mega_274", level: "advanced", type: "reading",
        question: "「撫子」の正しい読み方を選びなさい",
        options: ["ぶし", "なでしこ", "ふし", "なでこ"],
        correct: 1, hint: "秋の七草の一つです", explanation: "撫子（なでしこ）= 特殊な読み方"
    },
    {
        id: "mega_275", level: "advanced", type: "reading",
        question: "「萩」の正しい読み方を選びなさい",
        options: ["しゅう", "はぎ", "おぎ", "すすき"],
        correct: 1, hint: "秋の七草の一つです", explanation: "萩（はぎ）= 特殊な読み方"
    },
    {
        id: "mega_276", level: "advanced", type: "reading",
        question: "「芒」の正しい読み方を選びなさい",
        options: ["ぼう", "すすき", "のぎ", "あし"],
        correct: 1, hint: "秋の七草の一つです", explanation: "芒（すすき）= 特殊な読み方"
    },
    {
        id: "mega_277", level: "advanced", type: "reading",
        question: "「葛」の正しい読み方を選びなさい",
        options: ["かつ", "くず", "つた", "かずら"],
        correct: 1, hint: "秋の七草の一つです", explanation: "葛（くず）= 特殊な読み方"
    },
    {
        id: "mega_278", level: "advanced", type: "reading",
        question: "「藤袴」の正しい読み方を選びなさい",
        options: ["とうこ", "ふじばかま", "ふじこ", "とうばかま"],
        correct: 1, hint: "秋の七草の一つです", explanation: "藤袴（ふじばかま）= 特殊な読み方"
    },
    {
        id: "mega_279", level: "advanced", type: "reading",
        question: "「朝顔」の正しい読み方を選びなさい",
        options: ["ちょうがん", "あさがお", "あさかお", "ちょうかお"],
        correct: 1, hint: "朝に咲く青い花です", explanation: "朝顔（あさがお）= 特殊な読み方"
    },
    {
        id: "mega_280", level: "advanced", type: "reading",
        question: "「昼顔」の正しい読み方を選びなさい",
        options: ["ちゅうがん", "ひるがお", "ひるかお", "ちゅうかお"],
        correct: 1, hint: "昼に咲く花です", explanation: "昼顔（ひるがお）= 特殊な読み方"
    },

    // 難読語彙 (281-300問)
    {
        id: "mega_281", level: "advanced", type: "reading",
        question: "「乾杯」の正しい読み方を選びなさい",
        options: ["かんぱい", "けんぱい", "かんはい", "けんはい"],
        correct: 0, hint: "お祝いの時に言う言葉です", explanation: "乾杯（かんぱい）= 祝いの挨拶"
    },
    {
        id: "mega_282", level: "advanced", type: "reading",
        question: "「献立」の正しい読み方を選びなさい",
        options: ["けんりつ", "こんだて", "けんだて", "こんりつ"],
        correct: 1, hint: "食事のメニューのことです", explanation: "献立（こんだて）= 食事のメニュー"
    },
    {
        id: "mega_283", level: "advanced", type: "reading",
        question: "「挨拶」の正しい読み方を選びなさい",
        options: ["あいさつ", "あいと", "おうきゅう", "きゅうあい"],
        correct: 0, hint: "人に会った時にする言葉です", explanation: "挨拶（あいさつ）= 人に会った時の言葉"
    },
    {
        id: "mega_284", level: "advanced", type: "reading",
        question: "「雰囲気」の正しい読み方を選びなさい",
        options: ["ふんいき", "ふんき", "ぶんいき", "うんいき"],
        correct: 0, hint: "その場の感じのことです", explanation: "雰囲気（ふんいき）= その場の感じ"
    },
    {
        id: "mega_285", level: "advanced", type: "reading",
        question: "「美味」の正しい読み方を選びなさい",
        options: ["びみ", "おいしい", "うまい", "びあじ"],
        correct: 0, hint: "美味しいという意味です", explanation: "美味（びみ）= おいしいこと"
    },
    {
        id: "mega_286", level: "advanced", type: "reading",
        question: "「丁寧」の正しい読み方を選びなさい",
        options: ["ていねい", "ちょうねい", "ていれい", "ちょうれい"],
        correct: 0, hint: "きちんとしているさまです", explanation: "丁寧（ていねい）= きちんとしているさま"
    },
    {
        id: "mega_287", level: "advanced", type: "reading",
        question: "「便利」の正しい読み方を選びなさい",
        options: ["べんり", "びんり", "へんり", "べんりょく"],
        correct: 0, hint: "使いやすいことです", explanation: "便利（べんり）= 使いやすいこと"
    },
    {
        id: "mega_288", level: "advanced", type: "reading",
        question: "「退屈」の正しい読み方を選びなさい",
        options: ["たいくつ", "たいこく", "ひくつ", "たいこつ"],
        correct: 0, hint: "つまらないことです", explanation: "退屈（たいくつ）= つまらないこと"
    },
    {
        id: "mega_289", level: "advanced", type: "reading",
        question: "「複雑」の正しい読み方を選びなさい",
        options: ["ふくざつ", "ふくさつ", "ふくじゃつ", "ふくたつ"],
        correct: 0, hint: "込み入っていることです", explanation: "複雑（ふくざつ）= 込み入っていること"
    },
    {
        id: "mega_290", level: "advanced", type: "reading",
        question: "「簡単」の正しい読み方を選びなさい",
        options: ["かんたん", "かんだん", "けんたん", "けんだん"],
        correct: 0, hint: "やさしいことです", explanation: "簡単（かんたん）= やさしいこと"
    },
    {
        id: "mega_291", level: "advanced", type: "reading",
        question: "「普通」の正しい読み方を選びなさい",
        options: ["ふつう", "ふとう", "ほつう", "ほとう"],
        correct: 0, hint: "いつものことです", explanation: "普通（ふつう）= いつものこと"
    },
    {
        id: "mega_292", level: "advanced", type: "reading",
        question: "「特殊」の正しい読み方を選びなさい",
        options: ["とくしゅ", "とくじゅ", "とくしゅう", "とくじゅう"],
        correct: 0, hint: "特別なことです", explanation: "特殊（とくしゅ）= 特別なこと"
    },
    {
        id: "mega_293", level: "advanced", type: "reading",
        question: "「独特」の正しい読み方を選びなさい",
        options: ["どくとく", "どっとく", "どくとっ", "どくとお"],
        correct: 0, hint: "その人だけの特別なもの", explanation: "独特（どくとく）= その人だけの特別なもの"
    },
    {
        id: "mega_294", level: "advanced", type: "reading",
        question: "「曖昧」の正しい読み方を選びなさい",
        options: ["あいまい", "あいばい", "あいめい", "あいべい"],
        correct: 0, hint: "はっきりしないことです", explanation: "曖昧（あいまい）= はっきりしないこと"
    },
    {
        id: "mega_295", level: "advanced", type: "reading",
        question: "「明確」の正しい読み方を選びなさい",
        options: ["めいかく", "みょうかく", "あきらかく", "めいかっ"],
        correct: 0, hint: "はっきりしていることです", explanation: "明確（めいかく）= はっきりしていること"
    },
    {
        id: "mega_296", level: "advanced", type: "reading",
        question: "「微妙」の正しい読み方を選びなさい",
        options: ["びみょう", "びびょう", "みびょう", "びもう"],
        correct: 0, hint: "とても細かいことです", explanation: "微妙（びみょう）= とても細かいこと"
    },
    {
        id: "mega_297", level: "advanced", type: "reading",
        question: "「重要」の正しい読み方を選びなさい",
        options: ["じゅうよう", "ちょうよう", "おもよう", "じゅうちょう"],
        correct: 0, hint: "大切なことです", explanation: "重要（じゅうよう）= 大切なこと"
    },
    {
        id: "mega_298", level: "advanced", type: "reading",
        question: "「軽微」の正しい読み方を選びなさい",
        options: ["けいび", "かるび", "けいみ", "かるみ"],
        correct: 0, hint: "軽くて小さいことです", explanation: "軽微（けいび）= 軽くて小さいこと"
    },
    {
        id: "mega_299", level: "advanced", type: "reading",
        question: "「深刻」の正しい読み方を選びなさい",
        options: ["しんこく", "ふかこく", "じんこく", "しんごく"],
        correct: 0, hint: "とても重大なことです", explanation: "深刻（しんこく）= とても重大なこと"
    },
    {
        id: "mega_300", level: "advanced", type: "reading",
        question: "「軽率」の正しい読み方を選びなさい",
        options: ["けいそつ", "かるそつ", "けいりつ", "かるりつ"],
        correct: 0, hint: "よく考えないことです", explanation: "軽率（けいそつ）= よく考えないこと"
    }
];

// 統計情報
const stats3 = {
    basic: megaKanjiDatabase3.filter(q => q.level === 'basic').length,
    intermediate: megaKanjiDatabase3.filter(q => q.level === 'intermediate').length,
    advanced: megaKanjiDatabase3.filter(q => q.level === 'advanced').length,
    reading: megaKanjiDatabase3.filter(q => q.type === 'reading').length,
    total: megaKanjiDatabase3.length
};

console.log('Mega Kanji Database Part 3 (201-300):', stats3);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { megaKanjiDatabase3, stats3 };
}