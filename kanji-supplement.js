// 漢字データベース補完用 (437-500問)

const kanjiSupplement = [
    // 437-456問: 慣用句・四字熟語関連
    {
        id: "supplement_437", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【一石二鳥】",
        options: ["いっせきにちょう", "いちせきふたとり", "いっこくにちょう", "ひとつたまふたわし"],
        correct: 0, hint: "一つで二つの効果があること", explanation: "一石二鳥（いっせきにちょう）= 一つのことで二つの利益を得ること"
    },
    {
        id: "supplement_438", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【七転八倒】",
        options: ["しちてんはっとう", "ななころはっとう", "しちころやつたお", "なななかやつたお"],
        correct: 0, hint: "非常に苦しむこと", explanation: "七転八倒（しちてんはっとう）= 激しく苦しみもがくこと"
    },
    {
        id: "supplement_439", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【百聞一見】",
        options: ["ひゃくぶんいっけん", "ひゃくもんいちけん", "ももききひとみ", "ももききいちみ"],
        correct: 0, hint: "聞くより見るほうが確実", explanation: "百聞一見（ひゃくぶんいっけん）= 百回聞くより一回見るほうがよい"
    },
    {
        id: "supplement_440", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【千差万別】",
        options: ["せんさばんべつ", "ちさまんべつ", "せんしゃまんべつ", "せんちゃまんべつ"],
        correct: 0, hint: "物事が様々に異なること", explanation: "千差万別（せんさばんべつ）= さまざまに異なっていること"
    },
    {
        id: "supplement_441", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【自給自足】",
        options: ["じきゅうじそく", "じきゅうじたり", "しきゅうしそく", "じきゅうしそく"],
        correct: 0, hint: "自分で作って自分で使うこと", explanation: "自給自足（じきゅうじそく）= 必要な物を他に依存せず自分で賄うこと"
    },
    {
        id: "supplement_442", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【温故知新】",
        options: ["おんこちしん", "おんこちあら", "おんころちしん", "うんこちしん"],
        correct: 0, hint: "古いことを学んで新しい知識を得る", explanation: "温故知新（おんこちしん）= 古きを温めて新しきを知る"
    },
    {
        id: "supplement_443", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【切磋琢磨】",
        options: ["せっさたくま", "きりさたくま", "せつさたくばい", "せっしゃたくま"],
        correct: 0, hint: "お互いに励まし合って向上すること", explanation: "切磋琢磨（せっさたくま）= 仲間同士で励まし合い競い合って向上すること"
    },
    {
        id: "supplement_444", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【臨機応変】",
        options: ["りんきおうへん", "りんきおうばん", "りんごおうへん", "りんけんおうへん"],
        correct: 0, hint: "その場に応じて適切に対応すること", explanation: "臨機応変（りんきおうへん）= その時の状況に応じて適切に対処すること"
    },
    {
        id: "supplement_445", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【創意工夫】",
        options: ["そういくふう", "そういこうふ", "そうしくふう", "そうえくふう"],
        correct: 0, hint: "新しいアイデアを考え出すこと", explanation: "創意工夫（そういくふう）= 新しい方法や考えを生み出すこと"
    },
    {
        id: "supplement_446", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【質実剛健】",
        options: ["しつじつごうけん", "しちじつこうけん", "しつしつこうけん", "しつみごうけん"],
        correct: 0, hint: "飾らず真面目で強いこと", explanation: "質実剛健（しつじつごうけん）= 飾り気がなく真面目で心身ともに強いこと"
    },

    // 447-466問: 地理・歴史関連
    {
        id: "supplement_447", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【太平洋】",
        options: ["たいへいよう", "たいびょうよう", "おおへいよう", "だいへいよう"],
        correct: 0, hint: "世界最大の海", explanation: "太平洋（たいへいよう）= 世界最大の海洋"
    },
    {
        id: "supplement_448", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【瀬戸内海】",
        options: ["せとないかい", "せとうちかい", "せどないかい", "せとちゅうかい"],
        correct: 1, hint: "本州・四国・九州に囲まれた海", explanation: "瀬戸内海（せとうちかい）= 日本の内海"
    },
    {
        id: "supplement_449", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【富士山】",
        options: ["ふじやま", "ふじさん", "とみしやま", "ふしやま"],
        correct: 1, hint: "日本最高峰の山", explanation: "富士山（ふじさん）= 日本最高峰の山、標高3776m"
    },
    {
        id: "supplement_450", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【鎌倉時代】",
        options: ["かまくらじだい", "かまぐらじだい", "がまくらじだい", "かまくらしだい"],
        correct: 0, hint: "源頼朝が開いた時代", explanation: "鎌倉時代（かまくらじだい）= 1185年～1333年の武家政権時代"
    },
    {
        id: "supplement_451", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【平安時代】",
        options: ["へいあんじだい", "へいやすじだい", "たいらやすじだい", "ひらやすじだい"],
        correct: 0, hint: "藤原氏が栄えた時代", explanation: "平安時代（へいあんじだい）= 794年～1185年の王朝時代"
    },
    {
        id: "supplement_452", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【室町時代】",
        options: ["むろまちじだい", "しつまちじだい", "むろちょうじだい", "しつちょうじだい"],
        correct: 0, hint: "足利氏の時代", explanation: "室町時代（むろまちじだい）= 1336年～1573年の足利将軍時代"
    },
    {
        id: "supplement_453", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【江戸時代】",
        options: ["えどじだい", "こうどじだい", "えどしだい", "がわどじだい"],
        correct: 0, hint: "徳川家康が開いた時代", explanation: "江戸時代（えどじだい）= 1603年～1868年の徳川幕府時代"
    },
    {
        id: "supplement_454", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【明治維新】",
        options: ["めいじいしん", "みょうじいしん", "めいちいしん", "あかじいしん"],
        correct: 0, hint: "日本の近代化の始まり", explanation: "明治維新（めいじいしん）= 1868年の政治体制の変革"
    },
    {
        id: "supplement_455", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【北海道】",
        options: ["ほっかいどう", "きたかいどう", "きたうみどう", "ほくかいどう"],
        correct: 0, hint: "日本の最北の島", explanation: "北海道（ほっかいどう）= 日本最北の都道府県"
    },
    {
        id: "supplement_456", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【九州地方】",
        options: ["きゅうしゅうちほう", "きゅうしゅうじほう", "くしゅうちほう", "きゅうちほう"],
        correct: 0, hint: "日本の南西の地方", explanation: "九州地方（きゅうしゅうちほう）= 日本列島南西部の地域"
    },

    // 457-476問: 文学・芸術関連
    {
        id: "supplement_457", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【古典文学】",
        options: ["こてんぶんがく", "こてんもんがく", "ふるてんぶんがく", "こでんぶんがく"],
        correct: 0, hint: "昔の文学作品", explanation: "古典文学（こてんぶんがく）= 過去の時代の文学作品"
    },
    {
        id: "supplement_458", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【源氏物語】",
        options: ["げんじものがたり", "みなもとしものがたり", "げんしものがたり", "はらしものがたり"],
        correct: 0, hint: "紫式部の作品", explanation: "源氏物語（げんじものがたり）= 平安時代の長編小説"
    },
    {
        id: "supplement_459", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【竹取物語】",
        options: ["たけとりものがたり", "ちくしゅものがたり", "たけとるものがたり", "たけどりものがたり"],
        correct: 0, hint: "かぐや姫の物語", explanation: "竹取物語（たけとりものがたり）= 日本最古の物語文学"
    },
    {
        id: "supplement_460", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【万葉集】",
        options: ["まんようしゅう", "ばんようしゅう", "まんはしゅう", "まんよしゅう"],
        correct: 0, hint: "奈良時代の歌集", explanation: "万葉集（まんようしゅう）= 日本最古の和歌集"
    },
    {
        id: "supplement_461", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【俳句】",
        options: ["はいく", "はいきゅう", "はいぐ", "ばいく"],
        correct: 0, hint: "5-7-5の詩", explanation: "俳句（はいく）= 17音で自然や季節を詠む短詩"
    },
    {
        id: "supplement_462", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【短歌】",
        options: ["たんか", "みじかうた", "たんが", "だんか"],
        correct: 0, hint: "5-7-5-7-7の歌", explanation: "短歌（たんか）= 31音で構成される和歌"
    },
    {
        id: "supplement_463", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【芭蕉】",
        options: ["ばしょう", "はしょう", "ばじょう", "ばせう"],
        correct: 0, hint: "有名な俳人", explanation: "芭蕉（ばしょう）= 江戸時代の俳人、松尾芭蕉"
    },
    {
        id: "supplement_464", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【書道】",
        options: ["しょどう", "かきどう", "しょみち", "しょじ"],
        correct: 0, hint: "文字を美しく書く芸術", explanation: "書道（しょどう）= 筆で美しく文字を書く芸術"
    },
    {
        id: "supplement_465", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【茶道】",
        options: ["さどう", "ちゃどう", "ちゃみち", "さみち"],
        correct: 1, hint: "お茶をたてる作法", explanation: "茶道（ちゃどう・さどう）= 茶を点てもてなしの心を表現する芸道"
    },
    {
        id: "supplement_466", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【華道】",
        options: ["かどう", "はなどう", "はなみち", "かみち"],
        correct: 0, hint: "花を活ける芸術", explanation: "華道（かどう）= 植物の美しさを表現する芸術"
    },

    // 477-496問: 科学・技術関連
    {
        id: "supplement_477", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【科学技術】",
        options: ["かがくぎじゅつ", "かがくぎしゅつ", "しながくぎじゅつ", "かがくきじゅつ"],
        correct: 0, hint: "科学と技術", explanation: "科学技術（かがくぎじゅつ）= 科学の知識を技術に応用すること"
    },
    {
        id: "supplement_478", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【人工知能】",
        options: ["じんこうちのう", "にんこうちのう", "じんこうしりょう", "ひとこうちのう"],
        correct: 0, hint: "AIのこと", explanation: "人工知能（じんこうちのう）= コンピュータによる知的な情報処理システム"
    },
    {
        id: "supplement_479", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【宇宙開発】",
        options: ["うちゅうかいはつ", "うちゅうかいばつ", "そらちゅうかいはつ", "うちゅうひらき"],
        correct: 0, hint: "宇宙の探査や利用", explanation: "宇宙開発（うちゅうかいはつ）= 宇宙空間の探査・利用・開発"
    },
    {
        id: "supplement_480", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【情報処理】",
        options: ["じょうほうしょり", "じょうほうところ", "じょうほうしょ", "なさけほうしょり"],
        correct: 0, hint: "データを加工すること", explanation: "情報処理（じょうほうしょり）= 情報を加工・変換・伝達すること"
    },
    {
        id: "supplement_481", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【環境保護】",
        options: ["かんきょうほご", "かんきょうほうご", "かんけいほご", "わかんきょうほご"],
        correct: 0, hint: "自然を守ること", explanation: "環境保護（かんきょうほご）= 自然環境を保全・保護すること"
    },
    {
        id: "supplement_482", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【遺伝子】",
        options: ["いでんし", "ゆいでんし", "のこりでんし", "いつたえし"],
        correct: 0, hint: "DNA情報のこと", explanation: "遺伝子（いでんし）= 生物の遺伝情報を担うDNA領域"
    },
    {
        id: "supplement_483", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【再生可能】",
        options: ["さいせいかのう", "ふたたびせいかのう", "さいしょうかのう", "さいいきかのう"],
        correct: 0, hint: "繰り返し使えること", explanation: "再生可能（さいせいかのう）= 持続的に利用できる性質"
    },
    {
        id: "supplement_484", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【太陽光発電】",
        options: ["たいようこうはつでん", "たいようひかりはつでん", "おおひこうはつでん", "だいようこうはつでん"],
        correct: 0, hint: "太陽の光で電気を作る", explanation: "太陽光発電（たいようこうはつでん）= 太陽光エネルギーを電力に変換するシステム"
    },
    {
        id: "supplement_485", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【地球温暖化】",
        options: ["ちきゅうおんだんか", "じきゅうおんだんか", "ちきゅうあつだんか", "ちたまおんだんか"],
        correct: 0, hint: "地球が暖かくなること", explanation: "地球温暖化（ちきゅうおんだんか）= 地球全体の気温が上昇する現象"
    },
    {
        id: "supplement_486", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【国際協力】",
        options: ["こくさいきょうりょく", "こくじきょうりょく", "くにまたきょうりょく", "こくさいごうりょく"],
        correct: 0, hint: "国同士が協力すること", explanation: "国際協力（こくさいきょうりょく）= 国家間での相互協力"
    },

    // 487-500問: 日常生活・社会関連
    {
        id: "supplement_487", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【交通機関】",
        options: ["こうつうきかん", "こうつうきがん", "こうとうきかん", "ゆききかん"],
        correct: 0, hint: "電車やバスなど", explanation: "交通機関（こうつうきかん）= 人や物を運ぶ手段・システム"
    },
    {
        id: "supplement_488", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【救急車】",
        options: ["きゅうきゅうしゃ", "きゅうきんしゃ", "すくいきゅうしゃ", "きゅうぐしゃ"],
        correct: 0, hint: "病気の人を運ぶ車", explanation: "救急車（きゅうきゅうしゃ）= 緊急患者を搬送する特殊車両"
    },
    {
        id: "supplement_489", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【消防署】",
        options: ["しょうぼうしょ", "けしぼうしょ", "しょうほうしょ", "しょうぼうじょ"],
        correct: 0, hint: "火事を消す人がいる場所", explanation: "消防署（しょうぼうしょ）= 消火・救助活動を行う公的機関"
    },
    {
        id: "supplement_490", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【郵便局】",
        options: ["ゆうびんきょく", "ゆうべんきょく", "ゆうびんつぼね", "えびんきょく"],
        correct: 0, hint: "手紙を出すところ", explanation: "郵便局（ゆうびんきょく）= 郵便・貯金・保険サービスを提供する施設"
    },
    {
        id: "supplement_491", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【図書館】",
        options: ["としょかん", "ずしょかん", "としょかん", "とがきかん"],
        correct: 0, hint: "本を借りるところ", explanation: "図書館（としょかん）= 図書や資料を収集・整理・提供する施設"
    },
    {
        id: "supplement_492", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【病院】",
        options: ["びょういん", "やまいいん", "びょうえん", "へいいん"],
        correct: 0, hint: "病気を治すところ", explanation: "病院（びょういん）= 医療を行う施設"
    },
    {
        id: "supplement_493", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【銀行】",
        options: ["ぎんこう", "ぎんごう", "しろこう", "しろがね"],
        correct: 0, hint: "お金を預けるところ", explanation: "銀行（ぎんこう）= 預金・貸付・為替などの金融業務を行う機関"
    },
    {
        id: "supplement_494", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【百貨店】",
        options: ["ひゃっかてん", "ひゃくかてん", "ひゃっかみせ", "ももかてん"],
        correct: 0, hint: "いろいろな物を売っている大きな店", explanation: "百貨店（ひゃっかてん）= 様々な商品を扱う大規模小売店"
    },
    {
        id: "supplement_495", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【美容院】",
        options: ["びよういん", "びようえん", "うつくしいん", "みようえん"],
        correct: 0, hint: "髪をきれいにするところ", explanation: "美容院（びよういん）= 美容・理容サービスを提供する店舗"
    },
    {
        id: "supplement_496", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【商店街】",
        options: ["しょうてんがい", "しょうてんかい", "あきなてんがい", "しょうでんがい"],
        correct: 0, hint: "お店が並んでいるところ", explanation: "商店街（しょうてんがい）= 多くの商店が連続して立地している街路"
    },
    {
        id: "supplement_497", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【遊園地】",
        options: ["ゆうえんち", "ゆうそのち", "あそびえんち", "ゆうえんじ"],
        correct: 0, hint: "遊びの施設がたくさんあるところ", explanation: "遊園地（ゆうえんち）= 各種遊戯施設を設けた娯楽施設"
    },
    {
        id: "supplement_498", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【動物園】",
        options: ["どうぶつえん", "どうぶつその", "うごきものえん", "どうもつえん"],
        correct: 0, hint: "動物を見ることができるところ", explanation: "動物園（どうぶつえん）= 野生動物を飼育・展示する施設"
    },
    {
        id: "supplement_499", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【水族館】",
        options: ["すいぞくかん", "みずぞくかん", "すいぞっかん", "みずもくかん"],
        correct: 0, hint: "魚を見ることができるところ", explanation: "水族館（すいぞくかん）= 水生生物を飼育・展示する施設"
    },
    {
        id: "supplement_500", level: "basic", type: "reading",
        question: "次の漢字の読み方を選びなさい：【博物館】",
        options: ["はくぶつかん", "ばくぶつかん", "はくもつかん", "ひろものかん"],
        correct: 0, hint: "貴重な物を見ることができるところ", explanation: "博物館（はくぶつかん）= 学術的価値のある資料を収集・展示する施設"
    },

    // 501-508問: 最終補完問題
    {
        id: "supplement_501", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【公園】",
        options: ["こうえん", "おおやけえん", "きみえん", "こうその"],
        correct: 0, hint: "みんなが使える庭", explanation: "公園（こうえん）= 公衆の保健・休養・娯楽等のために設けられた公共空間"
    },
    {
        id: "supplement_502", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【駐車場】",
        options: ["ちゅうしゃじょう", "ちゅうしゃば", "とめしゃじょう", "ちゅうしゃち"],
        correct: 0, hint: "車を停める場所", explanation: "駐車場（ちゅうしゃじょう）= 自動車を駐車するための施設"
    },
    {
        id: "supplement_503", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【踏切】",
        options: ["ふみきり", "とうせつ", "ふみこえ", "とうきり"],
        correct: 0, hint: "電車と道路が交わるところ", explanation: "踏切（ふみきり）= 鉄道と道路が平面交差する箇所"
    },
    {
        id: "supplement_504", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【横断歩道】",
        options: ["おうだんほどう", "よこだんほどう", "よこぎりほどう", "おうだんあるきみち"],
        correct: 0, hint: "道路を安全に渡る場所", explanation: "横断歩道（おうだんほどう）= 歩行者が道路を横断するための専用通路"
    },
    {
        id: "supplement_505", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【信号機】",
        options: ["しんごうき", "しんこうき", "のぼりごうき", "しるしごうき"],
        correct: 0, hint: "赤・黄・青の光で交通を制御する", explanation: "信号機（しんごうき）= 交通の流れを制御するための装置"
    },
    {
        id: "supplement_506", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【歩行者】",
        options: ["ほこうしゃ", "ほぎょうしゃ", "あるきしゃ", "ほごうしゃ"],
        correct: 0, hint: "歩いている人", explanation: "歩行者（ほこうしゃ）= 徒歩で道路を通行する人"
    },
    {
        id: "supplement_507", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【自転車】",
        options: ["じてんしゃ", "じころがりしゃ", "しぜんしゃ", "じてんぐるま"],
        correct: 0, hint: "ペダルをこいで進む乗り物", explanation: "自転車（じてんしゃ）= ペダルを踏んで車輪を回転させる二輪車"
    },
    {
        id: "supplement_508", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【運動場】",
        options: ["うんどうじょう", "うんどうば", "はしりどうじょう", "うんどうち"],
        correct: 0, hint: "運動をするところ", explanation: "運動場（うんどうじょう）= スポーツや体育活動を行うための施設"
    }
];

// 全体のデータベースに統合
if (typeof all500KanjiProblems !== 'undefined') {
    all500KanjiProblems = all500KanjiProblems.concat(kanjiSupplement);
} else {
    window.all500KanjiProblems = kanjiSupplement;
}

console.log('🎯 漢字補完データベース読み込み完了:', kanjiSupplement.length, '問');
console.log('📊 現在の総問題数:', (typeof all500KanjiProblems !== 'undefined' ? all500KanjiProblems.length : kanjiSupplement.length));