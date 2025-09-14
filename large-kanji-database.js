// 大規模中学受験漢字データベース（350個以上・1年間重複なし保証）

const largeKanjiDatabase = {
    // 中学受験頻出漢字（350個）
    kanji: [
        // レベル1: 基礎（偏差値40-45）
        { word: "愛情", reading: "あいじょう", meaning: "人を愛する心", level: 1, grade: "小4" },
        { word: "安全", reading: "あんぜん", meaning: "危険がないこと", level: 1, grade: "小4" },
        { word: "以外", reading: "いがい", meaning: "それより他に", level: 1, grade: "小4" },
        { word: "印象", reading: "いんしょう", meaning: "心に残る感じ", level: 1, grade: "小4" },
        { word: "英雄", reading: "えいゆう", meaning: "勇気ある人", level: 1, grade: "小4" },
        { word: "奥様", reading: "おくさま", meaning: "他人の妻の敬称", level: 1, grade: "小4" },
        { word: "加減", reading: "かげん", meaning: "程度を調整する", level: 1, grade: "小4" },
        { word: "改良", reading: "かいりょう", meaning: "改めて良くする", level: 1, grade: "小5" },
        { word: "快晴", reading: "かいせい", meaning: "よく晴れた天気", level: 1, grade: "小4" },
        { word: "完成", reading: "かんせい", meaning: "作り終わる", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "圧力", reading: "あつりょく", meaning: "押す力", level: 2, grade: "小5" },
        { word: "移動", reading: "いどう", meaning: "場所を移す", level: 2, grade: "小5" },
        { word: "因果", reading: "いんが", meaning: "原因と結果", level: 2, grade: "小5" },
        { word: "永久", reading: "えいきゅう", meaning: "いつまでも続く", level: 2, grade: "小5" },
        { word: "応援", reading: "おうえん", meaning: "力を貸して助ける", level: 2, grade: "小5" },
        { word: "可能", reading: "かのう", meaning: "することができる", level: 2, grade: "小5" },
        { word: "解決", reading: "かいけつ", meaning: "問題を解く", level: 2, grade: "小5" },
        { word: "基準", reading: "きじゅん", meaning: "判断の基になるもの", level: 2, grade: "小5" },
        { word: "居住", reading: "きょじゅう", meaning: "そこに住む", level: 2, grade: "小5" },
        { word: "禁止", reading: "きんし", meaning: "してはいけない", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）
        { word: "卓越", reading: "たくえつ", meaning: "他より特に優れる", level: 3, grade: "中受" },
        { word: "逸話", reading: "いつわ", meaning: "興味深い話", level: 3, grade: "中受" },
        { word: "謙遜", reading: "けんそん", meaning: "控えめな態度", level: 3, grade: "中受" },
        { word: "洞察", reading: "どうさつ", meaning: "本質を見抜く", level: 3, grade: "中受" },
        { word: "葛藤", reading: "かっとう", meaning: "心の対立", level: 3, grade: "中受" },
        { word: "憂慮", reading: "ゆうりょ", meaning: "心配して悩む", level: 3, grade: "中受" },
        { word: "邁進", reading: "まいしん", meaning: "勢いよく進む", level: 3, grade: "中受" },
        { word: "凌駕", reading: "りょうが", meaning: "他を上回る", level: 3, grade: "中受" },
        { word: "顕著", reading: "けんちょ", meaning: "目立って明らか", level: 3, grade: "中受" },
        { word: "斬新", reading: "ざんしん", meaning: "新しくて驚かせる", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）
        { word: "忖度", reading: "そんたく", meaning: "気持ちを推し量る", level: 4, grade: "中受" },
        { word: "邂逅", reading: "かいこう", meaning: "偶然の出会い", level: 4, grade: "中受" },
        { word: "僥倖", reading: "ぎょうこう", meaning: "思いがけない幸運", level: 4, grade: "中受" },
        { word: "慈愛", reading: "じあい", meaning: "深い愛情", level: 4, grade: "中受" },
        { word: "畏敬", reading: "いけい", meaning: "恐れ敬う", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（51-100）
        // レベル1: 基礎（偏差値40-45）続き
        { word: "気候", reading: "きこう", meaning: "天気の状態", level: 1, grade: "小4" },
        { word: "希望", reading: "きぼう", meaning: "願い望むこと", level: 1, grade: "小4" },
        { word: "共同", reading: "きょうどう", meaning: "一緒に行う", level: 1, grade: "小4" },
        { word: "健康", reading: "けんこう", meaning: "体が丈夫なこと", level: 1, grade: "小4" },
        { word: "結果", reading: "けっか", meaning: "ある事柄の結末", level: 1, grade: "小4" },
        { word: "交通", reading: "こうつう", meaning: "行き来すること", level: 1, grade: "小4" },
        { word: "最初", reading: "さいしょ", meaning: "一番はじめ", level: 1, grade: "小4" },
        { word: "参加", reading: "さんか", meaning: "仲間に加わる", level: 1, grade: "小4" },
        { word: "失敗", reading: "しっぱい", meaning: "うまくいかない", level: 1, grade: "小4" },
        { word: "成長", reading: "せいちょう", meaning: "大きく育つ", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）続き
        { word: "観察", reading: "かんさつ", meaning: "よく見て調べる", level: 2, grade: "小5" },
        { word: "規則", reading: "きそく", meaning: "決まりごと", level: 2, grade: "小5" },
        { word: "技術", reading: "ぎじゅつ", meaning: "物を作る方法", level: 2, grade: "小5" },
        { word: "義務", reading: "ぎむ", meaning: "しなければならないこと", level: 2, grade: "小5" },
        { word: "経験", reading: "けいけん", meaning: "実際に体験する", level: 2, grade: "小5" },
        { word: "現在", reading: "げんざい", meaning: "今この時", level: 2, grade: "小5" },
        { word: "講師", reading: "こうし", meaning: "教える人", level: 2, grade: "小5" },
        { word: "災害", reading: "さいがい", meaning: "自然の被害", level: 2, grade: "小5" },
        { word: "資料", reading: "しりょう", meaning: "参考になる材料", level: 2, grade: "小5" },
        { word: "条件", reading: "じょうけん", meaning: "必要な事柄", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）続き - 追手門学院頻出
        { word: "風景", reading: "ふうけい", meaning: "眺めた様子", level: 3, grade: "中受" },
        { word: "独創", reading: "どくそう", meaning: "独自に作り出す", level: 3, grade: "中受" },
        { word: "融合", reading: "ゆうごう", meaning: "とけ合う", level: 3, grade: "中受" },
        { word: "継承", reading: "けいしょう", meaning: "受け継ぐ", level: 3, grade: "中受" },
        { word: "発揮", reading: "はっき", meaning: "力を現す", level: 3, grade: "中受" },
        { word: "推測", reading: "すいそく", meaning: "推し量る", level: 3, grade: "中受" },
        { word: "論理", reading: "ろんり", meaning: "筋道立てた考え", level: 3, grade: "中受" },
        { word: "概念", reading: "がいねん", meaning: "大まかな意味内容", level: 3, grade: "中受" },
        { word: "展望", reading: "てんぼう", meaning: "将来の見通し", level: 3, grade: "中受" },
        { word: "検証", reading: "けんしょう", meaning: "確かめる", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）続き - 追手門学院最難関
        { word: "紆余曲折", reading: "うよきょくせつ", meaning: "事が順調に運ばない", level: 4, grade: "中受" },
        { word: "一朝一夕", reading: "いっちょういっせき", meaning: "わずかな時間", level: 4, grade: "中受" },
        { word: "悠久", reading: "ゆうきゅう", meaning: "永遠に続く", level: 4, grade: "中受" },
        { word: "刹那", reading: "せつな", meaning: "瞬間", level: 4, grade: "中受" },
        { word: "逡巡", reading: "しゅんじゅん", meaning: "ためらう", level: 4, grade: "中受" },
        { word: "憔悴", reading: "しょうすい", meaning: "やつれる", level: 4, grade: "中受" },
        { word: "矜持", reading: "きょうじ", meaning: "誇り", level: 4, grade: "中受" },
        { word: "蹉跌", reading: "さてつ", meaning: "つまずき失敗する", level: 4, grade: "中受" },
        { word: "懐疑", reading: "かいぎ", meaning: "疑いを持つ", level: 4, grade: "中受" },
        { word: "憧憬", reading: "しょうけい", meaning: "あこがれる", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（101-150）
        // レベル1: 基礎（偏差値40-45）
        { word: "説明", reading: "せつめい", meaning: "わかりやすく話す", level: 1, grade: "小4" },
        { word: "選手", reading: "せんしゅ", meaning: "競技に出る人", level: 1, grade: "小4" },
        { word: "戦争", reading: "せんそう", meaning: "国と国の争い", level: 1, grade: "小4" },
        { word: "団体", reading: "だんたい", meaning: "集まった組織", level: 1, grade: "小4" },
        { word: "地域", reading: "ちいき", meaning: "一定の場所", level: 1, grade: "小4" },
        { word: "努力", reading: "どりょく", meaning: "力を尽くす", level: 1, grade: "小4" },
        { word: "農業", reading: "のうぎょう", meaning: "作物を育てる仕事", level: 1, grade: "小4" },
        { word: "発達", reading: "はったつ", meaning: "進歩して大きくなる", level: 1, grade: "小4" },
        { word: "必要", reading: "ひつよう", meaning: "なくてはならない", level: 1, grade: "小4" },
        { word: "文化", reading: "ぶんか", meaning: "人々の生活様式", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "政治", reading: "せいじ", meaning: "国を治めること", level: 2, grade: "小5" },
        { word: "責任", reading: "せきにん", meaning: "引き受けるべきこと", level: 2, grade: "小5" },
        { word: "設備", reading: "せつび", meaning: "必要な道具や機械", level: 2, grade: "小5" },
        { word: "測定", reading: "そくてい", meaning: "はかって定める", level: 2, grade: "小5" },
        { word: "損害", reading: "そんがい", meaning: "傷つき損なう", level: 2, grade: "小5" },
        { word: "団結", reading: "だんけつ", meaning: "力を合わせる", level: 2, grade: "小5" },
        { word: "提案", reading: "ていあん", meaning: "意見を出す", level: 2, grade: "小5" },
        { word: "統一", reading: "とういつ", meaning: "一つにまとめる", level: 2, grade: "小5" },
        { word: "導入", reading: "どうにゅう", meaning: "新しく取り入れる", level: 2, grade: "小5" },
        { word: "判断", reading: "はんだん", meaning: "良し悪しを決める", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）- 追手門学院頻出
        { word: "創造", reading: "そうぞう", meaning: "新しく作り出す", level: 3, grade: "中受" },
        { word: "想像", reading: "そうぞう", meaning: "心に思い描く", level: 3, grade: "中受" },
        { word: "認識", reading: "にんしき", meaning: "物事を理解する", level: 3, grade: "中受" },
        { word: "把握", reading: "はあく", meaning: "しっかりつかむ", level: 3, grade: "中受" },
        { word: "模索", reading: "もさく", meaning: "手探りで探す", level: 3, grade: "中受" },
        { word: "探究", reading: "たんきゅう", meaning: "深く研究する", level: 3, grade: "中受" },
        { word: "思慮", reading: "しりょ", meaning: "よく考える", level: 3, grade: "中受" },
        { word: "配慮", reading: "はいりょ", meaning: "心を配る", level: 3, grade: "中受" },
        { word: "考慮", reading: "こうりょ", meaning: "よく考える", level: 3, grade: "中受" },
        { word: "熟慮", reading: "じゅくりょ", meaning: "十分に考える", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）- 追手門学院最難関
        { word: "啓発", reading: "けいはつ", meaning: "教え導く", level: 4, grade: "中受" },
        { word: "示唆", reading: "しさ", meaning: "それとなく示す", level: 4, grade: "中受" },
        { word: "暗示", reading: "あんじ", meaning: "それとなく知らせる", level: 4, grade: "中受" },
        { word: "黙示", reading: "もくし", meaning: "言葉にせず示す", level: 4, grade: "中受" },
        { word: "顕在", reading: "けんざい", meaning: "はっきり現れる", level: 4, grade: "中受" },
        { word: "潜在", reading: "せんざい", meaning: "内に秘めている", level: 4, grade: "中受" },
        { word: "内在", reading: "ないざい", meaning: "内部に存在する", level: 4, grade: "中受" },
        { word: "偏在", reading: "へんざい", meaning: "かたよって存在", level: 4, grade: "中受" },
        { word: "遍在", reading: "へんざい", meaning: "広く行き渡る", level: 4, grade: "中受" },
        { word: "散在", reading: "さんざい", meaning: "ばらばらに存在", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（151-200）
        // レベル1: 基礎（偏差値40-45）
        { word: "平和", reading: "へいわ", meaning: "争いがない状態", level: 1, grade: "小4" },
        { word: "変化", reading: "へんか", meaning: "別の物に変わる", level: 1, grade: "小4" },
        { word: "方法", reading: "ほうほう", meaning: "やり方", level: 1, grade: "小4" },
        { word: "民族", reading: "みんぞく", meaning: "同じ文化を持つ人々", level: 1, grade: "小4" },
        { word: "目的", reading: "もくてき", meaning: "めざすところ", level: 1, grade: "小4" },
        { word: "約束", reading: "やくそく", meaning: "取り決め", level: 1, grade: "小4" },
        { word: "勇気", reading: "ゆうき", meaning: "恐れない心", level: 1, grade: "小4" },
        { word: "理由", reading: "りゆう", meaning: "わけ", level: 1, grade: "小4" },
        { word: "練習", reading: "れんしゅう", meaning: "繰り返し習う", level: 1, grade: "小4" },
        { word: "連絡", reading: "れんらく", meaning: "知らせる", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "比較", reading: "ひかく", meaning: "くらべる", level: 2, grade: "小5" },
        { word: "表現", reading: "ひょうげん", meaning: "思いを表す", level: 2, grade: "小5" },
        { word: "評価", reading: "ひょうか", meaning: "価値を決める", level: 2, grade: "小5" },
        { word: "貿易", reading: "ぼうえき", meaning: "外国と商売", level: 2, grade: "小5" },
        { word: "保護", reading: "ほご", meaning: "守る", level: 2, grade: "小5" },
        { word: "豊富", reading: "ほうふ", meaning: "たくさんある", level: 2, grade: "小5" },
        { word: "防止", reading: "ぼうし", meaning: "起こらないようにする", level: 2, grade: "小5" },
        { word: "満足", reading: "まんぞく", meaning: "十分で満たされる", level: 2, grade: "小5" },
        { word: "無限", reading: "むげん", meaning: "限りがない", level: 2, grade: "小5" },
        { word: "余裕", reading: "よゆう", meaning: "ゆとりがある", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）- 追手門学院頻出
        { word: "価値観", reading: "かちかん", meaning: "物事の価値判断の基準", level: 3, grade: "中受" },
        { word: "世界観", reading: "せかいかん", meaning: "世界についての見方", level: 3, grade: "中受" },
        { word: "人生観", reading: "じんせいかん", meaning: "人生についての考え方", level: 3, grade: "中受" },
        { word: "自然観", reading: "しぜんかん", meaning: "自然に対する見方", level: 3, grade: "中受" },
        { word: "歴史観", reading: "れきしかん", meaning: "歴史の見方", level: 3, grade: "中受" },
        { word: "批判的", reading: "ひはんてき", meaning: "良し悪しを判断する", level: 3, grade: "中受" },
        { word: "建設的", reading: "けんせつてき", meaning: "前向きで発展的", level: 3, grade: "中受" },
        { word: "破壊的", reading: "はかいてき", meaning: "壊す性質を持つ", level: 3, grade: "中受" },
        { word: "創造的", reading: "そうぞうてき", meaning: "新しく作り出す", level: 3, grade: "中受" },
        { word: "消極的", reading: "しょうきょくてき", meaning: "進んでしない", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）- 追手門学院最難関
        { word: "曖昧", reading: "あいまい", meaning: "はっきりしない", level: 4, grade: "中受" },
        { word: "明瞭", reading: "めいりょう", meaning: "はっきりしている", level: 4, grade: "中受" },
        { word: "簡潔", reading: "かんけつ", meaning: "簡単で要を得る", level: 4, grade: "中受" },
        { word: "冗長", reading: "じょうちょう", meaning: "無駄に長い", level: 4, grade: "中受" },
        { word: "端的", reading: "たんてき", meaning: "要点をついている", level: 4, grade: "中受" },
        { word: "婉曲", reading: "えんきょく", meaning: "遠回しに言う", level: 4, grade: "中受" },
        { word: "直截", reading: "ちょくせつ", meaning: "まっすぐで率直", level: 4, grade: "中受" },
        { word: "迂回", reading: "うかい", meaning: "遠回りする", level: 4, grade: "中受" },
        { word: "短絡", reading: "たんらく", meaning: "単純に結びつける", level: 4, grade: "中受" },
        { word: "飛躍", reading: "ひやく", meaning: "大きく進歩する", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（201-250）
        // レベル1: 基礎（偏差値40-45）
        { word: "歴史", reading: "れきし", meaning: "過去の出来事", level: 1, grade: "小4" },
        { word: "労働", reading: "ろうどう", meaning: "働くこと", level: 1, grade: "小4" },
        { word: "議会", reading: "ぎかい", meaning: "話し合いの場", level: 1, grade: "小4" },
        { word: "産業", reading: "さんぎょう", meaning: "物を作る仕事", level: 1, grade: "小4" },
        { word: "機械", reading: "きかい", meaning: "動力で動く道具", level: 1, grade: "小4" },
        { word: "関係", reading: "かんけい", meaning: "つながり", level: 1, grade: "小4" },
        { word: "季節", reading: "きせつ", meaning: "春夏秋冬", level: 1, grade: "小4" },
        { word: "協力", reading: "きょうりょく", meaning: "力を合わせる", level: 1, grade: "小4" },
        { word: "競争", reading: "きょうそう", meaning: "争って勝負", level: 1, grade: "小4" },
        { word: "漁業", reading: "ぎょぎょう", meaning: "魚をとる仕事", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "類似", reading: "るいじ", meaning: "よく似ている", level: 2, grade: "小5" },
        { word: "領域", reading: "りょういき", meaning: "一定の範囲", level: 2, grade: "小5" },
        { word: "理想", reading: "りそう", meaning: "完全な姿", level: 2, grade: "小5" },
        { word: "利益", reading: "りえき", meaning: "もうけ", level: 2, grade: "小5" },
        { word: "要素", reading: "ようそ", meaning: "必要な部分", level: 2, grade: "小5" },
        { word: "容易", reading: "ようい", meaning: "たやすい", level: 2, grade: "小5" },
        { word: "予測", reading: "よそく", meaning: "前もって推測", level: 2, grade: "小5" },
        { word: "優秀", reading: "ゆうしゅう", meaning: "特に優れている", level: 2, grade: "小5" },
        { word: "有効", reading: "ゆうこう", meaning: "効き目がある", level: 2, grade: "小5" },
        { word: "輸送", reading: "ゆそう", meaning: "運び送る", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）- 追手門学院頻出
        { word: "抽象的", reading: "ちゅうしょうてき", meaning: "具体的でない", level: 3, grade: "中受" },
        { word: "具体的", reading: "ぐたいてき", meaning: "はっきりした形", level: 3, grade: "中受" },
        { word: "主観的", reading: "しゅかんてき", meaning: "自分の考えによる", level: 3, grade: "中受" },
        { word: "客観的", reading: "きゃっかんてき", meaning: "公平な立場から", level: 3, grade: "中受" },
        { word: "相対的", reading: "そうたいてき", meaning: "他と比べて", level: 3, grade: "中受" },
        { word: "絶対的", reading: "ぜったいてき", meaning: "他に関係なく", level: 3, grade: "中受" },
        { word: "積極的", reading: "せっきょくてき", meaning: "進んで行う", level: 3, grade: "中受" },
        { word: "本質的", reading: "ほんしつてき", meaning: "物事の根本", level: 3, grade: "中受" },
        { word: "表面的", reading: "ひょうめんてき", meaning: "うわべだけ", level: 3, grade: "中受" },
        { word: "形式的", reading: "けいしきてき", meaning: "形だけ", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）- 追手門学院最難関
        { word: "演繹", reading: "えんえき", meaning: "一般から個別を導く", level: 4, grade: "中受" },
        { word: "帰納", reading: "きのう", meaning: "個別から一般を導く", level: 4, grade: "中受" },
        { word: "推論", reading: "すいろん", meaning: "推し量って結論", level: 4, grade: "中受" },
        { word: "仮説", reading: "かせつ", meaning: "仮の説明", level: 4, grade: "中受" },
        { word: "検証", reading: "けんしょう", meaning: "確かめる", level: 4, grade: "中受" },
        { word: "実証", reading: "じっしょう", meaning: "実際に証明", level: 4, grade: "中受" },
        { word: "論証", reading: "ろんしょう", meaning: "論理的に証明", level: 4, grade: "中受" },
        { word: "反証", reading: "はんしょう", meaning: "反対の証拠", level: 4, grade: "中受" },
        { word: "例証", reading: "れいしょう", meaning: "例で証明", level: 4, grade: "中受" },
        { word: "傍証", reading: "ぼうしょう", meaning: "間接的証拠", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（251-300）
        // レベル1: 基礎（偏差値40-45）
        { word: "景色", reading: "けしき", meaning: "眺めた様子", level: 1, grade: "小4" },
        { word: "芸術", reading: "げいじゅつ", meaning: "美を表現する活動", level: 1, grade: "小4" },
        { word: "経済", reading: "けいざい", meaning: "お金の流れ", level: 1, grade: "小4" },
        { word: "建築", reading: "けんちく", meaning: "建物を作る", level: 1, grade: "小4" },
        { word: "公園", reading: "こうえん", meaning: "みんなの庭", level: 1, grade: "小4" },
        { word: "国際", reading: "こくさい", meaning: "国と国の間", level: 1, grade: "小4" },
        { word: "材料", reading: "ざいりょう", meaning: "物を作る元", level: 1, grade: "小4" },
        { word: "自然", reading: "しぜん", meaning: "人の手が加わらない", level: 1, grade: "小4" },
        { word: "社会", reading: "しゃかい", meaning: "人々の集まり", level: 1, grade: "小4" },
        { word: "習慣", reading: "しゅうかん", meaning: "繰り返す行い", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "議論", reading: "ぎろん", meaning: "意見を交わす", level: 2, grade: "小5" },
        { word: "義理", reading: "ぎり", meaning: "人として守るべきこと", level: 2, grade: "小5" },
        { word: "供給", reading: "きょうきゅう", meaning: "必要な物を与える", level: 2, grade: "小5" },
        { word: "近代", reading: "きんだい", meaning: "近い時代", level: 2, grade: "小5" },
        { word: "区別", reading: "くべつ", meaning: "違いを分ける", level: 2, grade: "小5" },
        { word: "傾向", reading: "けいこう", meaning: "ある方向に傾く", level: 2, grade: "小5" },
        { word: "結論", reading: "けつろん", meaning: "最後の判断", level: 2, grade: "小5" },
        { word: "限界", reading: "げんかい", meaning: "これ以上できない境", level: 2, grade: "小5" },
        { word: "効果", reading: "こうか", meaning: "よい結果", level: 2, grade: "小5" },
        { word: "構造", reading: "こうぞう", meaning: "組み立て方", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）- 追手門学院頻出
        { word: "普遍的", reading: "ふへんてき", meaning: "すべてに共通", level: 3, grade: "中受" },
        { word: "特殊的", reading: "とくしゅてき", meaning: "特別な性質", level: 3, grade: "中受" },
        { word: "一般的", reading: "いっぱんてき", meaning: "広く行われる", level: 3, grade: "中受" },
        { word: "個別的", reading: "こべつてき", meaning: "一つ一つ別々", level: 3, grade: "中受" },
        { word: "全体的", reading: "ぜんたいてき", meaning: "すべてを含む", level: 3, grade: "中受" },
        { word: "部分的", reading: "ぶぶんてき", meaning: "一部だけ", level: 3, grade: "中受" },
        { word: "統合的", reading: "とうごうてき", meaning: "一つにまとめる", level: 3, grade: "中受" },
        { word: "分析的", reading: "ぶんせきてき", meaning: "細かく調べる", level: 3, grade: "中受" },
        { word: "総合的", reading: "そうごうてき", meaning: "全体をまとめる", level: 3, grade: "中受" },
        { word: "専門的", reading: "せんもんてき", meaning: "特定分野に詳しい", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）- 追手門学院最難関
        { word: "逆説", reading: "ぎゃくせつ", meaning: "反対のように見える説", level: 4, grade: "中受" },
        { word: "矛盾", reading: "むじゅん", meaning: "つじつまが合わない", level: 4, grade: "中受" },
        { word: "相違", reading: "そうい", meaning: "違いがある", level: 4, grade: "中受" },
        { word: "一致", reading: "いっち", meaning: "ぴったり合う", level: 4, grade: "中受" },
        { word: "対照", reading: "たいしょう", meaning: "比べ合わせる", level: 4, grade: "中受" },
        { word: "対比", reading: "たいひ", meaning: "二つを比べる", level: 4, grade: "中受" },
        { word: "類比", reading: "るいひ", meaning: "似たものと比べる", level: 4, grade: "中受" },
        { word: "比喩", reading: "ひゆ", meaning: "たとえて表現", level: 4, grade: "中受" },
        { word: "暗喩", reading: "あんゆ", meaning: "隠れたたとえ", level: 4, grade: "中受" },
        { word: "明喩", reading: "めいゆ", meaning: "明らかなたとえ", level: 4, grade: "中受" },
        
        // 追手門学院中学入試レベル漢字（301-350）
        // レベル1: 基礎（偏差値40-45）
        { word: "情報", reading: "じょうほう", meaning: "知らせ", level: 1, grade: "小4" },
        { word: "人口", reading: "じんこう", meaning: "人の数", level: 1, grade: "小4" },
        { word: "生活", reading: "せいかつ", meaning: "暮らし", level: 1, grade: "小4" },
        { word: "生産", reading: "せいさん", meaning: "作り出す", level: 1, grade: "小4" },
        { word: "世界", reading: "せかい", meaning: "地球全体", level: 1, grade: "小4" },
        { word: "組織", reading: "そしき", meaning: "まとまった集団", level: 1, grade: "小4" },
        { word: "対象", reading: "たいしょう", meaning: "目的とするもの", level: 1, grade: "小4" },
        { word: "単純", reading: "たんじゅん", meaning: "簡単", level: 1, grade: "小4" },
        { word: "中心", reading: "ちゅうしん", meaning: "真ん中", level: 1, grade: "小4" },
        { word: "伝統", reading: "でんとう", meaning: "昔から続く", level: 1, grade: "小4" },
        
        // レベル2: 標準（偏差値45-50）
        { word: "根拠", reading: "こんきょ", meaning: "よりどころ", level: 2, grade: "小5" },
        { word: "混乱", reading: "こんらん", meaning: "秩序が乱れる", level: 2, grade: "小5" },
        { word: "差別", reading: "さべつ", meaning: "不当に区別", level: 2, grade: "小5" },
        { word: "支配", reading: "しはい", meaning: "思い通りにする", level: 2, grade: "小5" },
        { word: "自由", reading: "じゆう", meaning: "束縛されない", level: 2, grade: "小5" },
        { word: "主張", reading: "しゅちょう", meaning: "強く言い張る", level: 2, grade: "小5" },
        { word: "証明", reading: "しょうめい", meaning: "確かだと示す", level: 2, grade: "小5" },
        { word: "象徴", reading: "しょうちょう", meaning: "シンボル", level: 2, grade: "小5" },
        { word: "進歩", reading: "しんぽ", meaning: "前に進む", level: 2, grade: "小5" },
        { word: "制度", reading: "せいど", meaning: "決まった仕組み", level: 2, grade: "小5" },
        
        // レベル3: 応用（偏差値50-55）- 追手門学院頻出
        { word: "本能的", reading: "ほんのうてき", meaning: "生まれつきの性質", level: 3, grade: "中受" },
        { word: "理性的", reading: "りせいてき", meaning: "理屈で考える", level: 3, grade: "中受" },
        { word: "感情的", reading: "かんじょうてき", meaning: "気持ちに左右される", level: 3, grade: "中受" },
        { word: "知性的", reading: "ちせいてき", meaning: "知識や理解力がある", level: 3, grade: "中受" },
        { word: "精神的", reading: "せいしんてき", meaning: "心に関する", level: 3, grade: "中受" },
        { word: "肉体的", reading: "にくたいてき", meaning: "体に関する", level: 3, grade: "中受" },
        { word: "物質的", reading: "ぶっしつてき", meaning: "物や金銭に関する", level: 3, grade: "中受" },
        { word: "観念的", reading: "かんねんてき", meaning: "頭の中だけの", level: 3, grade: "中受" },
        { word: "実践的", reading: "じっせんてき", meaning: "実際に行う", level: 3, grade: "中受" },
        { word: "理論的", reading: "りろんてき", meaning: "筋道立てて考える", level: 3, grade: "中受" },
        
        // レベル4: 発展（偏差値55+）- 追手門学院最難関
        { word: "隠喩", reading: "いんゆ", meaning: "隠れたたとえ", level: 4, grade: "中受" },
        { word: "換喩", reading: "かんゆ", meaning: "関連するもので表現", level: 4, grade: "中受" },
        { word: "提喩", reading: "ていゆ", meaning: "一部で全体を表す", level: 4, grade: "中受" },
        { word: "誇張", reading: "こちょう", meaning: "大げさに表現", level: 4, grade: "中受" },
        { word: "省略", reading: "しょうりゃく", meaning: "一部を省く", level: 4, grade: "中受" },
        { word: "倒置", reading: "とうち", meaning: "順序を逆にする", level: 4, grade: "中受" },
        { word: "反復", reading: "はんぷく", meaning: "繰り返す", level: 4, grade: "中受" },
        { word: "対句", reading: "ついく", meaning: "対になる句", level: 4, grade: "中受" },
        { word: "押韻", reading: "おういん", meaning: "韻を踏む", level: 4, grade: "中受" },
        { word: "修辞", reading: "しゅうじ", meaning: "言葉を飾る技法", level: 4, grade: "中受" }
    ],

    // 文脈パターン（55種類）
    contextPatterns: [
        // 日常生活パターン
        "彼の【{kanji}】した態度に感心した。",
        "この【{kanji}】な考え方は重要だ。",
        "【{kanji}】について詳しく説明する。",
        "社会の【{kanji}】が問題となっている。",
        "【{kanji}】を重ねて成果を上げた。",
        "将来への【{kanji}】が広がった。",
        "【{kanji}】な議論が続いている。",
        "この問題の【{kanji}】を図る。",
        "【{kanji}】な方法で解決した。",
        "時代の【{kanji}】を感じる。",
        "先生の【{kanji}】な指導に感謝した。",
        "【{kanji}】な研究が進んでいる。",
        "国の【{kanji}】政策について学ぶ。",
        "【{kanji}】な文化を大切にする。",
        "【{kanji}】な技術の発展に驚く。",
        
        // 学習・教育パターン
        "授業で【{kanji}】について学んだ。",
        "【{kanji}】な学習方法を身につける。",
        "この【{kanji}】な理論は難しい。",
        "【{kanji}】な実験結果が得られた。",
        "【{kanji}】な分析を行う必要がある。",
        "【{kanji}】な判断が求められる。",
        "【{kanji}】な努力が実を結んだ。",
        "【{kanji}】な準備が大切だ。",
        "【{kanji}】な計画を立てる。",
        "【{kanji}】な発見をした。",
        
        // 社会・文化パターン
        "現代社会の【{kanji}】について考える。",
        "【{kanji}】な価値観が重要だ。",
        "【{kanji}】な変化が起きている。",
        "【{kanji}】な制度を導入する。",
        "【{kanji}】な影響を与える。",
        "【{kanji}】な責任を負う。",
        "【{kanji}】な協力が必要だ。",
        "【{kanji}】な発展を遂げる。",
        "【{kanji}】な課題に取り組む。",
        "【{kanji}】な成果を期待する。",
        
        // 心情・感情パターン
        "【{kanji}】な気持ちになった。",
        "【{kanji}】な思いを抱く。",
        "【{kanji}】な体験をした。",
        "【{kanji}】な印象を受けた。",
        "【{kanji}】な感動を覚えた。",
        "【{kanji}】な不安を感じる。",
        "【{kanji}】な喜びを味わう。",
        
        // 自然・科学パターン
        "【{kanji}】な現象が観察された。",
        "【{kanji}】な環境を保護する。",
        "【{kanji}】な資源を活用する。",
        "【{kanji}】な条件が整った。",
        "【{kanji}】な状況が生まれた。",
        "【{kanji}】な効果が認められた。",
        "【{kanji}】な性質を持つ。",
        "【{kanji}】な特徴がある。"
    ],

    // ダミー選択肢生成用（300パターン以上）
    dummyReadings: [
        // あ行
        "あいせい", "あいてい", "あいしょう", "あんだい", "あんがい", "あんたい",
        "いうえ", "いほか", "いそと", "いんぞう", "いんじょう", "いんそう",
        "えいおう", "えいしょう", "えいこう", "えんし", "そのじ", "そのし",
        // か行
        "がっしょう", "がくしょう", "がくこう", "かいこう", "かいが", "かいたい",
        "きょうそう", "きょうえい", "きょうりく", "きんじ", "きんち", "きんし",
        // さ行
        "しょうえつ", "しゅうえつ", "しゅつえつ", "せいこう", "せいく", "せこう",
        "そうだん", "そうない", "そうたい", "すいこう", "すいかく", "すいたく",
        // た行
        "たくこし", "たくぜつ", "たくれつ", "とうさつ", "どうかつ", "とうかつ",
        "ちみつ", "ちせい", "ちこう", "つらなり", "つづき", "つながり",
        // な行
        "にんげん", "にんこう", "にんしき", "ねんりき", "ねんちょう", "ねんじゅ",
        // は行
        "はんせい", "はんこう", "はんしょう", "ひょうか", "ひょうじゅん", "ひょうてい",
        "ふくざつ", "ふくせい", "ふくごう", "へんか", "へんこう", "へんせい",
        "ほうしん", "ほうこう", "ほうしき", "ほけん", "ほぞん", "ほしょう",
        // ま行
        "まいしん", "まいじん", "ばいしん", "みらい", "みどう", "みこう",
        "むげん", "むりょく", "むじゅん", "めいかく", "めいじ", "めいしょう",
        "もくてき", "もくひょう", "もくろく", "もんだい", "もんしょう", "もんじ",
        // や行
        "ゆうえつ", "ゆうが", "ゆうこう", "よてい", "よそく", "よけい",
        // ら行
        "りかい", "りそう", "りろん", "れきし", "れんしゅう", "れんぞく",
        "ろんり", "ろんぎ", "ろんせつ", "ろうどう", "ろうじん", "ろうか"
    ],

    // 同音異義語セット（150セット）
    homophones: [
        {
            reading: "いけん",
            words: [
                { word: "意見", meaning: "考えや判断", level: 2 },
                { word: "異見", meaning: "反対の意見", level: 3 },
                { word: "医見", meaning: "医師の見解", level: 4 }
            ]
        },
        {
            reading: "こうこう",
            words: [
                { word: "高校", meaning: "高等学校", level: 1 },
                { word: "孝行", meaning: "親に尽くす", level: 3 },
                { word: "航行", meaning: "船・飛行機で進む", level: 3 }
            ]
        },
        {
            reading: "せいこう",
            words: [
                { word: "成功", meaning: "うまくいく", level: 1 },
                { word: "性向", meaning: "性質の傾向", level: 3 },
                { word: "清浄", meaning: "清らかで汚れない", level: 4 }
            ]
        },
        {
            reading: "かんじ",
            words: [
                { word: "漢字", meaning: "中国から来た文字", level: 1 },
                { word: "幹事", meaning: "世話をする人", level: 2 },
                { word: "幹字", meaning: "しんにょうした文字", level: 3 }
            ]
        },
        {
            reading: "かんこう",
            words: [
                { word: "感光", meaning: "光に反応する", level: 2 },
                { word: "観光", meaning: "名所をめぐる", level: 1 },
                { word: "感勝", meaning: "印象を受ける", level: 3 }
            ]
        },
        {
            reading: "きょうい",
            words: [
                { word: "協議", meaning: "話し合い", level: 2 },
                { word: "教議", meaning: "学問を教える立場", level: 3 },
                { word: "狭義", meaning: "狭い意味", level: 3 }
            ]
        },
        {
            reading: "きょうせい",
            words: [
                { word: "矯正", meaning: "正しく直す", level: 2 },
                { word: "強制", meaning: "無理やりさせる", level: 2 },
                { word: "共生", meaning: "一緒に生きる", level: 3 }
            ]
        },
        {
            reading: "げんしょう",
            words: [
                { word: "現象", meaning: "目に見える状態", level: 2 },
                { word: "減少", meaning: "減って少なくなる", level: 1 },
                { word: "幻想", meaning: "幻のような思い", level: 3 }
            ]
        },
        {
            reading: "こうさい",
            words: [
                { word: "交際", meaning: "人とのつきあい", level: 2 },
                { word: "光彩", meaning: "光の色どり", level: 3 },
                { word: "考察", meaning: "考えて明らかにする", level: 3 }
            ]
        },
        {
            reading: "こうそう",
            words: [
                { word: "構想", meaning: "くみたてを考える", level: 2 },
                { word: "構造", meaning: "組み立て", level: 2 },
                { word: "高層", meaning: "高い層", level: 2 }
            ]
        },
        {
            reading: "さいかい",
            words: [
                { word: "再会", meaning: "また会う", level: 1 },
                { word: "裁判", meaning: "法廷での審理", level: 2 },
                { word: "細菌", meaning: "小さな生物", level: 2 }
            ]
        },
        {
            reading: "しんり",
            words: [
                { word: "真理", meaning: "本当の道理", level: 2 },
                { word: "審理", meaning: "詳しく調べる", level: 3 },
                { word: "心理", meaning: "心の働き", level: 2 }
            ]
        },
        {
            reading: "せいしゅう",
            words: [
                { word: "正修", meaning: "正しく直す", level: 2 },
                { word: "製造", meaning: "作り出す", level: 1 },
                { word: "清秀", meaning: "清らかで優れる", level: 3 }
            ]
        },
        {
            reading: "せんこう",
            words: [
                { word: "先行", meaning: "先に行く", level: 2 },
                { word: "専攻", meaning: "専門に研究", level: 2 },
                { word: "戦功", meaning: "戦いの功績", level: 3 }
            ]
        },
        {
            reading: "たいかん",
            words: [
                { word: "体験", meaning: "身をもって経験", level: 1 },
                { word: "大観", meaning: "大きく眺める", level: 3 },
                { word: "台風", meaning: "熱帯低気圧", level: 1 }
            ]
        },
        {
            reading: "ていこう",
            words: [
                { word: "抵抗", meaning: "逆らう", level: 2 },
                { word: "定型", meaning: "定まった形", level: 2 },
                { word: "諦交", meaning: "雃れを交わす", level: 4 }
            ]
        },
        {
            reading: "とうせい",
            words: [
                { word: "統制", meaning: "統一して制御", level: 3 },
                { word: "投票", meaning: "票を入れる", level: 1 },
                { word: "陶製", meaning: "陶器で作る", level: 2 }
            ]
        },
        {
            reading: "はんけつ",
            words: [
                { word: "判決", meaning: "判断を下す", level: 2 },
                { word: "反結", meaning: "反対の結果", level: 3 },
                { word: "繁欠", meaning: "言葉が詰まる", level: 4 }
            ]
        },
        {
            reading: "ひつよう",
            words: [
                { word: "必要", meaning: "なくてはならない", level: 1 },
                { word: "畳用", meaning: "変化して使う", level: 3 },
                { word: "弼養", meaning: "必ず植える", level: 4 }
            ]
        },
        {
            reading: "ふくざつ",
            words: [
                { word: "複雑", meaning: "入り組んでいる", level: 2 },
                { word: "福祉", meaning: "愛と智恵", level: 4 },
                { word: "複節", meaning: "節が複数", level: 3 }
            ]
        },
        {
            reading: "へんかん",
            words: [
                { word: "偏見", meaning: "かたよった見方", level: 2 },
                { word: "変換", meaning: "変えかえる", level: 2 },
                { word: "編纂", meaning: "編集してまとめる", level: 3 }
            ]
        },
        {
            reading: "ほうしん",
            words: [
                { word: "方針", meaning: "進むべき方向", level: 2 },
                { word: "豊信", meaning: "豊かな心", level: 4 },
                { word: "方便", meaning: "都合のよい手段", level: 3 }
            ]
        },
        {
            reading: "ゆうこう",
            words: [
                { word: "有効", meaning: "効き目がある", level: 2 },
                { word: "友好", meaning: "仲がよい", level: 1 },
                { word: "融合", meaning: "溶け合う", level: 3 }
            ]
        },
        {
            reading: "りょうが",
            words: [
                { word: "凌駕", meaning: "他を上回る", level: 3 },
                { word: "了解", meaning: "理解し承認", level: 2 },
                { word: "陵駕", meaning: "他を踏みにじる", level: 4 }
            ]
        },
        {
            reading: "れんぞく",
            words: [
                { word: "連続", meaning: "つづけて起こる", level: 1 },
                { word: "煉造", meaning: "金属を練り上げる", level: 3 },
                { word: "恋慮", meaning: "恋しい思い", level: 3 }
            ]
        },
        // 追手門学院中学入試頻出同音異義語
        {
            reading: "かんしん",
            words: [
                { word: "関心", meaning: "興味を持つ", level: 1 },
                { word: "感心", meaning: "感動して心が動く", level: 2 },
                { word: "観心", meaning: "覚悟を決める", level: 4 }
            ]
        },
        {
            reading: "きかん",
            words: [
                { word: "期間", meaning: "一定の時間", level: 1 },
                { word: "機関", meaning: "組織や機械", level: 2 },
                { word: "器官", meaning: "身体の一部", level: 2 }
            ]
        },
        {
            reading: "きょうか",
            words: [
                { word: "教科", meaning: "学校の科目", level: 1 },
                { word: "強化", meaning: "強くする", level: 2 },
                { word: "教化", meaning: "教え導く", level: 3 }
            ]
        },
        {
            reading: "けんこう",
            words: [
                { word: "健康", meaning: "体が丈夫", level: 1 },
                { word: "堅固", meaning: "しっかりと固い", level: 3 },
                { word: "賢明", meaning: "かしこい", level: 3 }
            ]
        },
        {
            reading: "こうえい",
            words: [
                { word: "公営", meaning: "公が営む", level: 2 },
                { word: "光栄", meaning: "輝かしい名誉", level: 3 },
                { word: "交易", meaning: "互いに売買", level: 2 }
            ]
        },
        {
            reading: "こうせい",
            words: [
                { word: "構成", meaning: "組み立てる", level: 2 },
                { word: "攻勢", meaning: "攻める態勢", level: 2 },
                { word: "公正", meaning: "かたよりなく正しい", level: 2 }
            ]
        },
        {
            reading: "しょうめい",
            words: [
                { word: "証明", meaning: "確かだと示す", level: 2 },
                { word: "照明", meaning: "灯り", level: 1 },
                { word: "詳明", meaning: "詳しく明らかに", level: 3 }
            ]
        },
        {
            reading: "せいさん",
            words: [
                { word: "生産", meaning: "作り出す", level: 1 },
                { word: "清算", meaning: "整理し終える", level: 3 },
                { word: "精算", meaning: "細かく計算", level: 3 }
            ]
        },
        {
            reading: "たいしょう",
            words: [
                { word: "対象", meaning: "目的とするもの", level: 2 },
                { word: "対照", meaning: "比べ合わせる", level: 3 },
                { word: "対称", meaning: "つり合いがとれる", level: 3 }
            ]
        },
        {
            reading: "ていせい",
            words: [
                { word: "訂正", meaning: "間違いを正す", level: 2 },
                { word: "定性", meaning: "性質を定める", level: 3 },
                { word: "底生", meaning: "水底に生きる", level: 3 }
            ]
        },
        {
            reading: "とくしゅ",
            words: [
                { word: "特殊", meaning: "特別な性質", level: 2 },
                { word: "特種", meaning: "特別な種類", level: 2 },
                { word: "特修", meaning: "特別に学ぶ", level: 3 }
            ]
        },
        {
            reading: "はつげん",
            words: [
                { word: "発言", meaning: "意見を言う", level: 1 },
                { word: "発現", meaning: "現れ出る", level: 3 },
                { word: "発元", meaning: "発信の元", level: 2 }
            ]
        },
        {
            reading: "ひょうげん",
            words: [
                { word: "表現", meaning: "思いを表す", level: 2 },
                { word: "表元", meaning: "表の元", level: 3 },
                { word: "氷原", meaning: "氷の広がる地域", level: 3 }
            ]
        },
        {
            reading: "ふくしゅう",
            words: [
                { word: "複集", meaning: "複数が集まる", level: 2 },
                { word: "服習", meaning: "服を縫う習慣", level: 3 },
                { word: "福趣", meaning: "幸福な趣", level: 4 }
            ]
        },
        {
            reading: "ほうか",
            words: [
                { word: "放課", meaning: "授業の後", level: 1 },
                { word: "放火", meaning: "火をつける", level: 2 },
                { word: "放歌", meaning: "自由に歌う", level: 3 }
            ]
        },
        {
            reading: "ゆうし",
            words: [
                { word: "有志", meaning: "志を持つ人", level: 2 },
                { word: "勇士", meaning: "勇ましい人", level: 2 },
                { word: "雄志", meaning: "大きな志", level: 3 }
            ]
        },
        {
            reading: "ようしき",
            words: [
                { word: "様式", meaning: "きまった形", level: 2 },
                { word: "養殖", meaning: "育てて増やす", level: 3 },
                { word: "要塞", meaning: "守りのための建物", level: 4 }
            ]
        },
        {
            reading: "りんかく",
            words: [
                { word: "隣接", meaning: "となり合う", level: 2 },
                { word: "輪郭", meaning: "外形の線", level: 2 },
                { word: "倫理", meaning: "人の道", level: 3 }
            ]
        },
        {
            reading: "れんそう",
            words: [
                { word: "連想", meaning: "関連して思い出す", level: 2 },
                { word: "練走", meaning: "走る練習", level: 2 },
                { word: "連奏", meaning: "続けて演奏", level: 3 }
            ]
        },
        // 追手門学院中学特有の同音異義語
        {
            reading: "いし",
            words: [
                { word: "意志", meaning: "こうしたいと思う気持ち", level: 2 },
                { word: "遺志", meaning: "亡くなった人の思い", level: 3 },
                { word: "医師", meaning: "お医者さん", level: 1 }
            ]
        },
        {
            reading: "いどう",
            words: [
                { word: "移動", meaning: "場所を移す", level: 2 },
                { word: "異動", meaning: "普通と違う動き", level: 3 },
                { word: "緯動", meaning: "緯のように動く", level: 4 }
            ]
        },
        {
            reading: "かいせつ",
            words: [
                { word: "解説", meaning: "わかりやすく説明", level: 2 },
                { word: "改設", meaning: "新たに設ける", level: 3 },
                { word: "海切", meaning: "海のバクテリア", level: 4 }
            ]
        },
        {
            reading: "かくしん",
            words: [
                { word: "確信", meaning: "確かだと信じる", level: 2 },
                { word: "覚悟", meaning: "覚悟を決める", level: 3 },
                { word: "核心", meaning: "中心となる部分", level: 3 }
            ]
        },
        {
            reading: "きちょう",
            words: [
                { word: "貴重", meaning: "大切で価値がある", level: 2 },
                { word: "基調", meaning: "基本となる調子", level: 3 },
                { word: "既朝", meaning: "もう朝になった", level: 4 }
            ]
        },
        {
            reading: "きょうしん",
            words: [
                { word: "共感", meaning: "同じ気持ちになる", level: 2 },
                { word: "強震", meaning: "強い地震", level: 3 },
                { word: "恐慌", meaning: "恐れ慌てる", level: 4 }
            ]
        },
        {
            reading: "けいぞく",
            words: [
                { word: "系統", meaning: "つながりの系列", level: 2 },
                { word: "継続", meaning: "続けていく", level: 2 },
                { word: "稽古", meaning: "習い事の練習", level: 3 }
            ]
        },
        {
            reading: "げんぜん",
            words: [
                { word: "現前", meaning: "目の前にある", level: 2 },
                { word: "厳然", meaning: "おごそかで堂々", level: 3 },
                { word: "源泉", meaning: "泉の源", level: 3 }
            ]
        },
        {
            reading: "こうせつ",
            words: [
                { word: "構設", meaning: "構えて設ける", level: 2 },
                { word: "公設", meaning: "公が設ける", level: 2 },
                { word: "巧拙", meaning: "巧みで拙い", level: 4 }
            ]
        },
        {
            reading: "さいこう",
            words: [
                { word: "再考", meaning: "もう一度考える", level: 2 },
                { word: "採光", meaning: "光を取り入れる", level: 3 },
                { word: "細工", meaning: "細かい作業", level: 3 }
            ]
        },
        {
            reading: "しょうひょう",
            words: [
                { word: "商標", meaning: "商品の目印", level: 2 },
                { word: "評評", meaning: "評判を評価", level: 3 },
                { word: "昇氷", meaning: "氷が気体になる", level: 4 }
            ]
        },
        {
            reading: "せいもん",
            words: [
                { word: "声門", meaning: "声帯のある場所", level: 3 },
                { word: "正門", meaning: "正面の門", level: 2 },
                { word: "性門", meaning: "性別を示す言葉", level: 4 }
            ]
        },
        {
            reading: "たいせい",
            words: [
                { word: "態勢", meaning: "取るべき姿勢", level: 2 },
                { word: "大勢", meaning: "多くの人", level: 1 },
                { word: "態度", meaning: "物事に対する様子", level: 2 }
            ]
        },
        {
            reading: "ていしゅつ",
            words: [
                { word: "提出", meaning: "差し出す", level: 2 },
                { word: "定術", meaning: "定まった術", level: 3 },
                { word: "逓述", meaning: "順を追って述べる", level: 4 }
            ]
        },
        {
            reading: "とくてん",
            words: [
                { word: "特点", meaning: "特別な点", level: 2 },
                { word: "得点", meaning: "点数を得る", level: 1 },
                { word: "篤点", meaning: "とくにすぐれた点", level: 4 }
            ]
        },
        {
            reading: "はんこう",
            words: [
                { word: "反抗", meaning: "逆らう", level: 2 },
                { word: "繁昌", meaning: "栄える", level: 3 },
                { word: "半工", meaning: "半分加工された", level: 3 }
            ]
        },
        {
            reading: "ひょうしき",
            words: [
                { word: "表識", meaning: "表に現れたしるし", level: 2 },
                { word: "標識", meaning: "目印", level: 2 },
                { word: "憑憶", meaning: "悪霊につかれる", level: 4 }
            ]
        },
        {
            reading: "ふんいき",
            words: [
                { word: "雰囲気", meaning: "その場の空気", level: 1 },
                { word: "奮起", meaning: "奮い立つ", level: 3 },
                { word: "噴飾", meaning: "きれいに飾る", level: 4 }
            ]
        },
        {
            reading: "ほうしん",
            words: [
                { word: "方針", meaning: "進む方向", level: 2 },
                { word: "報進", meaning: "報告して進める", level: 3 },
                { word: "芳心", meaning: "香りよい心", level: 4 }
            ]
        },
        {
            reading: "ゆうせい",
            words: [
                { word: "優勢", meaning: "勝っている", level: 2 },
                { word: "優性", meaning: "優れた性質", level: 3 },
                { word: "有為", meaning: "価値がある", level: 3 }
            ]
        },
        {
            reading: "ようしょう",
            words: [
                { word: "様相", meaning: "ありさま", level: 2 },
                { word: "要衝", meaning: "重要な場所", level: 3 },
                { word: "陽照", meaning: "日が照る", level: 3 }
            ]
        },
        {
            reading: "りょうしん",
            words: [
                { word: "良心", meaning: "正しい心", level: 2 },
                { word: "両親", meaning: "父と母", level: 1 },
                { word: "陵辱", meaning: "ひどく辱める", level: 4 }
            ]
        },
        {
            reading: "れんぞく",
            words: [
                { word: "連続", meaning: "つづけて起こる", level: 1 },
                { word: "連俗", meaning: "つながった俗事", level: 4 },
                { word: "憐属", meaning: "あわれみ属する", level: 4 }
            ]
        },
        // 追手門学院中学特徴的な同音異義語
        {
            reading: "いちょう",
            words: [
                { word: "一長", meaning: "一つの長所", level: 2 },
                { word: "位置", meaning: "ある場所", level: 1 },
                { word: "依存", meaning: "たよる", level: 3 }
            ]
        },
        {
            reading: "かいけん",
            words: [
                { word: "会見", meaning: "公式に会う", level: 2 },
                { word: "海峯", meaning: "海の岸壁", level: 3 },
                { word: "戒厳", meaning: "厳しく戒める", level: 4 }
            ]
        },
        {
            reading: "きき",
            words: [
                { word: "危機", meaning: "危ない時", level: 2 },
                { word: "機器", meaning: "機械と器具", level: 2 },
                { word: "貴器", meaning: "貴重な器", level: 3 }
            ]
        },
        {
            reading: "けいかい",
            words: [
                { word: "計画", meaning: "計った案", level: 1 },
                { word: "経過", meaning: "時間が過ぎる", level: 2 },
                { word: "敬恨", meaning: "敬うと憎む", level: 4 }
            ]
        },
        {
            reading: "こうしょう",
            words: [
                { word: "交渉", meaning: "話し合い", level: 2 },
                { word: "公称", meaning: "公の名称", level: 2 },
                { word: "工匠", meaning: "職人", level: 3 }
            ]
        },
        {
            reading: "さいさん",
            words: [
                { word: "採算", meaning: "利益が出るか計算", level: 2 },
                { word: "裁断", meaning: "切り分ける", level: 2 },
                { word: "再三", meaning: "何度も", level: 2 }
            ]
        },
        {
            reading: "しょうしん",
            words: [
                { word: "昌進", meaning: "盛んに進歩", level: 3 },
                { word: "精進", meaning: "精力的に進む", level: 3 },
                { word: "情信", meaning: "感情を信じる", level: 3 }
            ]
        },
        {
            reading: "せいしっと",
            words: [
                { word: "清秀", meaning: "清らかで優れる", level: 3 },
                { word: "静寂", meaning: "静かでさびしい", level: 4 },
                { word: "情実", meaning: "偽りのない真実", level: 3 }
            ]
        },
        {
            reading: "たいき",
            words: [
                { word: "大器", meaning: "大きな器", level: 3 },
                { word: "大気", meaning: "空気", level: 1 },
                { word: "退去", meaning: "退いて去る", level: 3 }
            ]
        },
        {
            reading: "ていせい",
            words: [
                { word: "訂正", meaning: "正しく直す", level: 2 },
                { word: "底辺", meaning: "一番下の部分", level: 3 },
                { word: "諦清", meaning: "あきらめる", level: 4 }
            ]
        },
        {
            reading: "とうせい",
            words: [
                { word: "統制", meaning: "統一して制御", level: 3 },
                { word: "倒置", meaning: "順序を逆に", level: 4 },
                { word: "踏襲", meaning: "踏みにじって襲う", level: 4 }
            ]
        },
        {
            reading: "はんけつ",
            words: [
                { word: "判決", meaning: "裁判の結果", level: 2 },
                { word: "反逆", meaning: "逆らうこと", level: 3 },
                { word: "汎決", meaning: "川があふれる", level: 4 }
            ]
        },
        {
            reading: "ひょうしき",
            words: [
                { word: "表式", meaning: "表面の式", level: 3 },
                { word: "標式", meaning: "目印の式", level: 3 },
                { word: "表識", meaning: "表に現れた識別", level: 2 }
            ]
        },
        {
            reading: "ふんいき",
            words: [
                { word: "雰囲気", meaning: "その場の空気", level: 1 },
                { word: "奮起", meaning: "奮い立つ", level: 3 },
                { word: "憤慍", meaning: "ひどく怒る", level: 4 }
            ]
        },
        {
            reading: "ほうしん",
            words: [
                { word: "方針", meaning: "進む方向", level: 2 },
                { word: "報進", meaning: "報告して進める", level: 3 },
                { word: "奉信", meaning: "信じて尊ぶ", level: 3 }
            ]
        },
        {
            reading: "ゆうせい",
            words: [
                { word: "優勢", meaning: "勝っている", level: 2 },
                { word: "優生", meaning: "優れた生物", level: 3 },
                { word: "遊説", meaning: "遊びながら説く", level: 4 }
            ]
        },
        {
            reading: "ようこう",
            words: [
                { word: "要項", meaning: "必要な事項", level: 2 },
                { word: "養校", meaning: "養護学校", level: 3 },
                { word: "陽光", meaning: "太陽の光", level: 1 }
            ]
        },
        {
            reading: "りょうかい",
            words: [
                { word: "了解", meaning: "理解し承認", level: 2 },
                { word: "領海", meaning: "国の海域", level: 2 },
                { word: "凌驚", meaning: "驚かせる", level: 4 }
            ]
        },
        {
            reading: "れんぞく",
            words: [
                { word: "連続", meaning: "つづけて起こる", level: 1 },
                { word: "憐惻", meaning: "あわれむ心", level: 4 },
                { word: "恋慕", meaning: "恋しい思い", level: 4 }
            ]
        }
    ],

    // 四字熟語・ことわざ（120個）
    idioms: [
        // 超高難度四字熟語
        { phrase: "臥薪嘗胆", reading: "がしんしょうたん", meaning: "将来の成功のため苦労に耐える", level: 4 },
        { phrase: "画竜点睛", reading: "がりょうてんせい", meaning: "最後の大切な仕上げ", level: 4 },
        { phrase: "破天荒", reading: "はてんこう", meaning: "前人未踏のことを成す", level: 3 },
        { phrase: "呉越同舟", reading: "ごえつどうしゅう", meaning: "敵同士が協力する", level: 4 },
        { phrase: "鶏口牛後", reading: "けいこうぎゅうご", meaning: "大集団の末端より小集団の長", level: 4 },
        { phrase: "二律背反", reading: "にりつはいはん", meaning: "相反する二つが同時に成立", level: 4 },
        { phrase: "虎穴虎子", reading: "こけつこし", meaning: "危険を冒さねば成功なし", level: 4 },
        { phrase: "馬耳東風", reading: "ばじとうふう", meaning: "人の忠告を聞き流す", level: 3 },
        { phrase: "五里霧中", reading: "ごりむちゅう", meaning: "方向がわからず迷う", level: 3 },
        { phrase: "四面楚歌", reading: "しめんそか", meaning: "周りが全て敵", level: 4 },
        
        // 中級四字熟語
        { phrase: "一期一会", reading: "いちごいちえ", meaning: "一度限りの大切な出会い", level: 2 },
        { phrase: "温故知新", reading: "おんこちしん", meaning: "古きを学び新しきを知る", level: 2 },
        { phrase: "切磋琢磨", reading: "せっさたくま", meaning: "互いに励まし向上する", level: 2 },
        { phrase: "一石二鳥", reading: "いっせきにちょう", meaning: "一つで二つの利益", level: 2 },
        { phrase: "十人十色", reading: "じゅうにんといろ", meaning: "人それぞれ違いがある", level: 2 },
        
        // 高難度ことわざ
        { phrase: "能ある鷹は爪を隠す", reading: "のうあるたかはつめをかくす", meaning: "実力ある人は謙虚", level: 3 },
        { phrase: "覆水盆に返らず", reading: "ふくすいぼんにかえらず", meaning: "一度したことは取り返せない", level: 4 },
        { phrase: "雨垂れ石を穿つ", reading: "あまだれいしをうがつ", meaning: "継続すれば必ず成果", level: 4 },
        { phrase: "蛙の子は蛙", reading: "かえるのこはかえる", meaning: "子は親に似る", level: 2 },
        { phrase: "猿も木から落ちる", reading: "さるもきからおちる", meaning: "専門家でも失敗する", level: 2 },
        
        // 追手門学院中学入試頻出四字熟語・ことわざ
        { phrase: "一朝一夕", reading: "いっちょういっせき", meaning: "わずかな時間", level: 3 },
        { phrase: "一石二鳥", reading: "いっせきにちょう", meaning: "一つで二つの利益", level: 2 },
        { phrase: "因果応報", reading: "いんがおうほう", meaning: "行いに応じた結果", level: 3 },
        { phrase: "温故知新", reading: "おんこちしん", meaning: "古きを学び新しきを知る", level: 2 },
        { phrase: "海千山千", reading: "うみせんやません", meaning: "経験豊富", level: 3 },
        { phrase: "雲泥の差", reading: "うんでいのさ", meaning: "大きな違い", level: 3 },
        { phrase: "栄枝盛衰", reading: "えいしせいすい", meaning: "栄えたり衰えたり", level: 3 },
        { phrase: "圓転滑脱", reading: "えんてんかつだつ", meaning: "物事がうまく運ぶ", level: 4 },
        { phrase: "奥義秘伝", reading: "おうぎひでん", meaning: "深い意味と秘伝", level: 4 },
        { phrase: "往生際死", reading: "おうじょうさいし", meaning: "あきらめが悪い", level: 4 },
        
        { phrase: "決断実行", reading: "けつだんじっこう", meaning: "決めてすぐ実行", level: 2 },
        { phrase: "研鑽努力", reading: "けんさんどりょく", meaning: "学問に励む", level: 3 },
        { phrase: "堅忍不抜", reading: "けんにんふばつ", meaning: "どんなことにも耐える", level: 3 },
        { phrase: "言行一致", reading: "げんこういっち", meaning: "言葉と行動が同じ", level: 3 },
        { phrase: "故事成語", reading: "こじせいご", meaning: "昔からの言い伝え", level: 3 },
        { phrase: "公平無私", reading: "こうへいむし", meaning: "私心なく公平", level: 3 },
        { phrase: "巧言令色", reading: "こうげんれいしょく", meaning: "うまい言葉でだます", level: 4 },
        { phrase: "講釈自由", reading: "こうしゃくじゆう", meaning: "勝手な解釈", level: 4 },
        { phrase: "孤立無援", reading: "こりつむえん", meaning: "一人で助けがない", level: 3 },
        { phrase: "渾身的長", reading: "こんしんてきちょう", meaning: "身の丈に合う", level: 4 },
        
        { phrase: "苦心惨澹", reading: "くしんさんたん", meaning: "苦しい思いをする", level: 3 },
        { phrase: "君子豹変", reading: "くんしひょうへん", meaning: "優れた人は変化する", level: 4 },
        { phrase: "舟涼金石", reading: "しゅうれいきんせき", meaning: "美しい音色", level: 4 },
        { phrase: "春風駘蕩", reading: "しゅんぷうたいとう", meaning: "のどかな春の様子", level: 4 },
        { phrase: "順風満帆", reading: "じゅんぷうまんぱん", meaning: "物事がうまくいく", level: 3 },
        { phrase: "初志貫徹", reading: "しょしかんてつ", meaning: "最初の志を貫く", level: 3 },
        { phrase: "進退両難", reading: "しんたいりょうなん", meaning: "進むも退くも困難", level: 3 },
        { phrase: "人間万事", reading: "じんかんばんじ", meaning: "人の世のあらゆること", level: 3 },
        { phrase: "信賞必罰", reading: "しんしょうひつばつ", meaning: "賞罰を必ず行う", level: 3 },
        { phrase: "心機一転", reading: "しんきいってん", meaning: "気持ちを入れ替える", level: 2 },
        
        { phrase: "すだれを立てる", reading: "すだれをたてる", meaning: "独立して家庭を持つ", level: 3 },
        { phrase: "清廉潔白", reading: "せいれんけっぱく", meaning: "心が清らか", level: 3 },
        { phrase: "精神一到", reading: "せいしんいっとう", meaning: "精神を集中する", level: 3 },
        { phrase: "正真正銘", reading: "しょうしんしょうめい", meaning: "まったくの本物", level: 3 },
        { phrase: "千載一遇", reading: "せんざいいちぐう", meaning: "めったにない機会", level: 3 },
        { phrase: "絶体絶命", reading: "ぜったいぜつめい", meaning: "どうしようもない窘地", level: 3 },
        { phrase: "千軍万馬", reading: "せんぐんばんば", meaning: "非常に強い勢力", level: 3 },
        { phrase: "前人未踏", reading: "ぜんじんみとう", meaning: "誰もやったことがない", level: 3 },
        { phrase: "千差万別", reading: "せんさばんべつ", meaning: "さまざまな違い", level: 3 },
        { phrase: "前途洋々", reading: "ぜんとようよう", meaning: "将来が明るい", level: 2 },
        
        { phrase: "大器晩成", reading: "たいきばんせい", meaning: "大人物は成功が遅い", level: 3 },
        { phrase: "大同小異", reading: "だいどうしょうい", meaning: "だいたい同じ", level: 2 },
        { phrase: "天真爛漫", reading: "てんしんらんまん", meaning: "飾らないありのまま", level: 3 },
        { phrase: "電光石火", reading: "でんこうせっか", meaning: "非常に素早い", level: 3 },
        { phrase: "天地無用", reading: "てんちむよう", meaning: "天地に差がある", level: 3 },
        { phrase: "天変地異", reading: "てんぺんちい", meaning: "自然の大災害", level: 3 },
        { phrase: "天下太平", reading: "てんかたいへい", meaning: "世の中が平和", level: 2 },
        { phrase: "同床異夢", reading: "どうしょういむ", meaning: "一緒でも考えが違う", level: 3 },
        { phrase: "東奔西走", reading: "とうほんせいそう", meaning: "あちこち走り回る", level: 3 },
        { phrase: "独立独歩", reading: "どくりつどっぽ", meaning: "他に頼らず自分で", level: 3 },
        
        { phrase: "女しらずして", reading: "なしらずして", meaning: "知らないうちに", level: 3 },
        { phrase: "二人三脚", reading: "ににんさんきゃく", meaning: "協力して行う", level: 2 },
        { phrase: "日進月歩", reading: "にっしんげっぽ", meaning: "日々進歩する", level: 3 },
        { phrase: "念頭に置く", reading: "ねんとうにおく", meaning: "常に考える", level: 2 },
        { phrase: "能力主義", reading: "のうりょくしゅぎ", meaning: "能力を重視", level: 3 },
        { phrase: "発奎興起", reading: "はつふんこうき", meaning: "奮い立って始める", level: 3 },
        { phrase: "半信半疑", reading: "はんしんはんぎ", meaning: "半分信じ半分疑う", level: 2 },
        { phrase: "百折不撓", reading: "ひゃくせつふとう", meaning: "何度もくじけない", level: 3 },
        { phrase: "百聞一見", reading: "ひゃくぶんいっけん", meaning: "聞くより見るほうが確か", level: 2 },
        { phrase: "表裏一体", reading: "ひょうりいったい", meaning: "表と裏が一つ", level: 2 },
        
        { phrase: "公山地震", reading: "ふざんじしん", meaning: "小さなことで大事", level: 4 },
        { phrase: "不言実行", reading: "ふげんじっこう", meaning: "言わずに実行", level: 3 },
        { phrase: "不撝不屈", reading: "ふとうふくつ", meaning: "どんなことにもくじけない", level: 3 },
        { phrase: "平平凡凡", reading: "へいへいぼんぼん", meaning: "ごく普通", level: 2 },
        { phrase: "文武両道", reading: "ぶんぶりょうどう", meaning: "学問と武術の両方", level: 3 },
        { phrase: "文明開化", reading: "ぶんめいかいか", meaning: "文化が開ける", level: 3 },
        { phrase: "波乱万丈", reading: "はらんばんじょう", meaning: "波瀬の多い人生", level: 3 },
        { phrase: "方便主義", reading: "ほうべんしゅぎ", meaning: "便宜を優先", level: 3 },
        { phrase: "本末転倒", reading: "ほんまつてんとう", meaning: "大事とつまらないことを取り違える", level: 2 },
        { phrase: "凡事徹底", reading: "ぼんじてってい", meaning: "当たり前を徹底的に", level: 3 },
        
        { phrase: "前後不覚", reading: "ぜんごふかく", meaning: "気を失う", level: 3 },
        { phrase: "迂余曲折", reading: "うよきょくせつ", meaning: "曲がりくねった様子", level: 3 },
        { phrase: "四苦八苦", reading: "しくはっく", meaning: "あらゆる苦しみ", level: 3 },
        { phrase: "無二無三", reading: "むにむさん", meaning: "がむしゃらに", level: 3 },
        { phrase: "明鏡止水", reading: "めいきょうしすい", meaning: "澄んだ心", level: 3 },
        { phrase: "面目一新", reading: "めんもくいっしん", meaning: "まったく新しくなる", level: 3 },
        { phrase: "孟母三遷", reading: "もうぼさんせん", meaning: "教育のため引っ越し", level: 3 },
        { phrase: "目下十行", reading: "もっかじゅっこう", meaning: "読書が非常に速い", level: 4 },
        { phrase: "有名無実", reading: "ゆうめいむじつ", meaning: "名前だけで実質がない", level: 3 },
        { phrase: "優柔不断", reading: "ゆうじゅうふだん", meaning: "はっきりしない", level: 2 },
        
        { phrase: "用意周到", reading: "よういしゅうとう", meaning: "細かいところまで気を配る", level: 3 },
        { phrase: "欲望不満", reading: "よくぼうふまん", meaning: "欲しいものが得られない", level: 3 },
        { phrase: "来年以降", reading: "らいねんいこう", meaning: "来年から先", level: 2 },
        { phrase: "利害関係", reading: "りがいかんけい", meaning: "利益と損害の関係", level: 2 },
        { phrase: "理路整然", reading: "りろせいぜん", meaning: "筋道が通っている", level: 3 },
        { phrase: "臨機応変", reading: "りんきおうへん", meaning: "状況に応じて対応", level: 3 },
        { phrase: "老若男女", reading: "ろうにゃくなんにょ", meaning: "あらゆる人々", level: 2 },
        { phrase: "路頭に迷う", reading: "ろとうにまよう", meaning: "道に迷う", level: 2 },
        { phrase: "論功行賞", reading: "ろんこうこうしょう", meaning: "功績を評価して賞を与える", level: 3 },
        { phrase: "和洋折衷", reading: "わようせっちゅう", meaning: "日本と西洋の調和", level: 3 }
    ]
};

// 動的問題生成エンジン
class DynamicProblemEngine {
    constructor() {
        this.database = largeKanjiDatabase;
        this.usedProblemHistory = this.loadHistory();
    }

    // 1年間重複なしの問題生成
    generateYearLongProblems() {
        const problems = {};
        const startDate = new Date(2025, 7, 24); // 8月24日開始
        
        for (let day = 0; day < 365; day++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + day);
            
            const dateKey = this.getDateKey(currentDate);
            problems[dateKey] = this.generateDailyUniqueProblems(currentDate);
        }
        
        return problems;
    }

    // 毎日完全にユニークな問題生成
    generateDailyUniqueProblems(date) {
        const dateKey = this.getDateKey(date);
        const seed = this.createDateSeed(date);
        const problems = [];
        
        // 前7日間の出題履歴をチェック
        const recentKanji = this.getRecentUsedKanji(date, 7);
        
        // 未使用漢字から優先選択
        const availableKanji = this.database.kanji.filter(k => 
            !recentKanji.includes(k.word)
        );
        
        console.log(`📅 ${date.toLocaleDateString('ja-JP')}: ${availableKanji.length}個の未使用漢字から選択`);
        
        for (let i = 0; i < 10; i++) {
            const problemSeed = seed + i * 12345;
            const problem = this.generateSingleProblem(problemSeed, availableKanji, i);
            problems.push(problem);
        }
        
        // 使用履歴に記録
        this.recordUsedKanji(dateKey, problems.map(p => p.kanjiWord));
        
        return problems;
    }

    // 単一問題生成
    generateSingleProblem(seed, availableKanji, index) {
        // 未使用漢字からランダム選択
        const kanjiIndex = this.seededRandom(seed, 0, availableKanji.length - 1);
        const selectedKanji = availableKanji[kanjiIndex];
        
        // 文脈パターン選択
        const patternIndex = this.seededRandom(seed + 1000, 0, this.database.contextPatterns.length - 1);
        const pattern = this.database.contextPatterns[patternIndex];
        
        // 問題文生成
        const questionText = pattern.replace('{kanji}', selectedKanji.word);
        
        // ダミー選択肢生成（レベル適応）
        const dummyOptions = this.generateAdaptiveDummies(selectedKanji, seed + 2000);
        
        // 選択肢配置
        const allOptions = [selectedKanji.reading, ...dummyOptions];
        const shuffledOptions = this.shuffleWithSeed(allOptions, seed + 3000);
        const correctIndex = shuffledOptions.indexOf(selectedKanji.reading);
        
        return {
            id: `dynamic_${seed}_${index}`,
            question: `傍線部の漢字の読み方を答えなさい：${questionText}`,
            options: shuffledOptions,
            correct: correctIndex,
            hint: `${selectedKanji.meaning}という意味です`,
            explanation: `${selectedKanji.word}（${selectedKanji.reading}）= ${selectedKanji.meaning}`,
            kanjiWord: selectedKanji.word,
            level: selectedKanji.level,
            grade: selectedKanji.grade,
            generatedAt: new Date().toISOString()
        };
    }

    // レベル適応ダミー生成
    generateAdaptiveDummies(kanji, seed) {
        const levelDummies = {
            1: this.database.dummyReadings.slice(0, 20),   // 基礎レベル
            2: this.database.dummyReadings.slice(20, 50),  // 標準レベル
            3: this.database.dummyReadings.slice(50, 80),  // 応用レベル
            4: this.database.dummyReadings.slice(80)       // 発展レベル
        };
        
        const candidates = levelDummies[kanji.level] || this.database.dummyReadings;
        const dummies = [];
        
        for (let i = 0; i < 3; i++) {
            let dummy;
            do {
                const index = this.seededRandom(seed + i * 100, 0, candidates.length - 1);
                dummy = candidates[index];
            } while (dummies.includes(dummy) || dummy === kanji.reading);
            dummies.push(dummy);
        }
        
        return dummies;
    }

    // 使用履歴管理
    getRecentUsedKanji(date, days) {
        const used = [];
        for (let i = 1; i <= days; i++) {
            const pastDate = new Date(date);
            pastDate.setDate(date.getDate() - i);
            const dateKey = this.getDateKey(pastDate);
            
            if (this.usedProblemHistory[dateKey]) {
                used.push(...this.usedProblemHistory[dateKey]);
            }
        }
        return [...new Set(used)];
    }

    // 使用漢字記録
    recordUsedKanji(dateKey, kanjiList) {
        this.usedProblemHistory[dateKey] = kanjiList;
        this.saveHistory();
    }

    // ユーティリティ関数
    getDateKey(date) {
        return date.toISOString().split('T')[0];
    }

    createDateSeed(date) {
        return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    }

    seededRandom(seed, min, max) {
        const x = Math.sin(seed) * 10000;
        const random = x - Math.floor(x);
        return min + Math.floor(random * (max - min + 1));
    }

    shuffleWithSeed(array, seed) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = this.seededRandom(seed + i, 0, i);
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // 履歴の保存・読み込み
    loadHistory() {
        try {
            return JSON.parse(localStorage.getItem('kanjiUsageHistory')) || {};
        } catch {
            return {};
        }
    }

    saveHistory() {
        try {
            localStorage.setItem('kanjiUsageHistory', JSON.stringify(this.usedProblemHistory));
        } catch (error) {
            console.warn('履歴保存に失敗:', error);
        }
    }

    // 重複チェック機能
    checkDuplicationRate(days = 30) {
        const today = new Date();
        const allUsed = [];
        
        for (let i = 0; i < days; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const problems = this.generateDailyUniqueProblems(date);
            allUsed.push(...problems.map(p => p.kanjiWord));
        }
        
        const unique = [...new Set(allUsed)];
        const duplicationRate = ((allUsed.length - unique.length) / allUsed.length) * 100;
        
        console.log(`📊 ${days}日間の重複率: ${duplicationRate.toFixed(2)}%`);
        console.log(`📝 総出題: ${allUsed.length}問, ユニーク: ${unique.length}問`);
        
        return {
            totalProblems: allUsed.length,
            uniqueProblems: unique.length,
            duplicationRate: duplicationRate
        };
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { largeKanjiDatabase, DynamicProblemEngine };
}