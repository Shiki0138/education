// 漢字問題メガデータベース Part 2 (101-200問)

const megaKanjiDatabase2 = [
    // 四字熟語シリーズ (101-150問)
    {
        id: "mega_101", level: "intermediate", type: "yojijukugo",
        question: "「一期一会」の意味として正しいものを選びなさい",
        options: ["一年に一度の会合", "一度きりの大切な出会い", "一番最初の会議", "一生に一度の機会"],
        correct: 1, hint: "茶道の心得から生まれた言葉です", explanation: "人との出会いを大切にするという茶道の精神"
    },
    {
        id: "mega_102", level: "intermediate", type: "yojijukugo",
        question: "「温故知新」の読み方として正しいものは？",
        options: ["おんこちにい", "うんこちしん", "おんごちしん", "おんこちしん"],
        correct: 3, hint: "古典を学んで新しい知識を得ることです", explanation: "古典を学ぶことで新しい発見があるという意味"
    },
    {
        id: "mega_103", level: "intermediate", type: "yojijukugo",
        question: "「百聞不如一見」の意味として正しいものを選びなさい",
        options: ["百人の話より一人の見解", "多くの噂より一つの真実", "百回聞くより一度見る方が良い", "百の知識より一つの体験"],
        correct: 2, hint: "「百聞は一見に如かず」とも言います", explanation: "実際に見ることの大切さを表す言葉"
    },
    {
        id: "mega_104", level: "advanced", type: "yojijukugo",
        question: "「臥薪嘗胆」の読み方を選びなさい",
        options: ["がしんしょうたん", "がしんじょうたん", "ふしんしょうたん", "ふしんじょうたん"],
        correct: 0, hint: "苦労して復讐の機会を待つという意味です", explanation: "辛い思いをして将来の成功を期すこと"
    },
    {
        id: "mega_105", level: "advanced", type: "yojijukugo",
        question: "「画竜点睛」の意味として正しいものを選びなさい",
        options: ["絵を描くのが上手なこと", "最後に大切な部分を仕上げること", "竜のように強いこと", "完璧を目指すこと"],
        correct: 1, hint: "竜の絵に最後に瞳を描き入れるという故事から", explanation: "仕上げの重要な部分を加えて完成させること"
    },
    {
        id: "mega_106", level: "intermediate", type: "yojijukugo",
        question: "「切磋琢磨」の意味として正しいものを選びなさい",
        options: ["物を大切に使うこと", "努力を怠らないこと", "お互いに励まし合って向上すること", "技術を磨き続けること"],
        correct: 2, hint: "友人同士が学問や技術を磨き合うこと", explanation: "互いに励まし合い、競い合って向上すること"
    },
    {
        id: "mega_107", level: "intermediate", type: "yojijukugo",
        question: "「十人十色」の意味として正しいものを選びなさい",
        options: ["十人が十の色を持つこと", "人それぞれ違いがあること", "多くの色彩があること", "十人で一つのものを作ること"],
        correct: 1, hint: "人はそれぞれ異なることを表します", explanation: "人はそれぞれ異なった考えや個性を持っているということ"
    },
    {
        id: "mega_108", level: "intermediate", type: "yojijukugo",
        question: "「四面楚歌」の意味として正しいものを選びなさい",
        options: ["四方から歌が聞こえること", "四つの面から攻められること", "周りが全て敵になること", "四人が歌を歌うこと"],
        correct: 2, hint: "孤立無援の状態を表します", explanation: "周りが全て敵や反対者で、助けてくれる人がいない状態"
    },
    {
        id: "mega_109", level: "intermediate", type: "yojijukugo",
        question: "「自画自賛」の意味として正しいものを選びなさい",
        options: ["自分で絵を描いて褒めること", "自分のことを自分で褒めること", "自分だけで物事を決めること", "自分の作品を大切にすること"],
        correct: 1, hint: "自分で自分をほめることです", explanation: "自分のしたことを自分でほめること"
    },
    {
        id: "mega_110", level: "intermediate", type: "yojijukugo",
        question: "「千載一遇」の読み方として正しいものは？",
        options: ["せんざいいちぐう", "せんさいいちぐう", "せんたいいちぐう", "せんだいいちぐう"],
        correct: 0, hint: "千年に一度の良い機会という意味です", explanation: "千年に一度しかないような良い機会"
    },
    {
        id: "mega_111", level: "intermediate", type: "yojijukugo",
        question: "「日進月歩」の意味として正しいものを選びなさい",
        options: ["毎日歩いて健康になること", "日々着実に進歩すること", "太陽と月が動くこと", "時間がゆっくり過ぎること"],
        correct: 1, hint: "毎日着実に進歩することです", explanation: "日々着実に進歩していくこと"
    },
    {
        id: "mega_112", level: "intermediate", type: "yojijukugo",
        question: "「一石二鳥」の意味として正しいものを選びなさい",
        options: ["一つのことをして二つの利益を得ること", "一つの石で二羽の鳥を捕まえること", "一度に二つの問題を解決すること", "一回の行動で二倍の成果を上げること"],
        correct: 0, hint: "一つの行為で二つの利益を同時に得ることのたとえ", explanation: "一つの行為で二つの利益を同時に得ることのたとえ"
    },
    {
        id: "mega_113", level: "advanced", type: "yojijukugo",
        question: "「呉越同舟」の意味として正しいものを選びなさい",
        options: ["同じ船に乗ること", "仲の悪い者同士が協力すること", "外国人と一緒に旅行すること", "古い時代の交通手段"],
        correct: 1, hint: "敵同士が同じ境遇に置かれることです", explanation: "仲の悪い者同士が同じ境遇に置かれ、協力せざるを得ないこと"
    },
    {
        id: "mega_114", level: "advanced", type: "yojijukugo",
        question: "「破天荒」の正しい意味を選びなさい",
        options: ["天気が荒れること", "とても激しいこと", "今まで誰もしなかったことをすること", "空が破れること"],
        correct: 2, hint: "前人未踏のことを成し遂げることです", explanation: "今まで誰もしなかったことを初めてすること"
    },
    {
        id: "mega_115", level: "intermediate", type: "yojijukugo",
        question: "「朝三暮四」の意味として正しいものを選びなさい",
        options: ["朝と夕方に会うこと", "目先のことにとらわれて本質を見失うこと", "時間の経つのが早いこと", "朝早く起きて夜遅く寝ること"],
        correct: 1, hint: "表面的な違いにとらわれることです", explanation: "目先のことにとらわれて、本質を見失うこと"
    },
    {
        id: "mega_116", level: "intermediate", type: "yojijukugo",
        question: "「五里霧中」の意味として正しいものを選びなさい",
        options: ["遠くが見えないこと", "方向がわからなくて迷うこと", "霧の中を歩くこと", "五里の道のりがあること"],
        correct: 1, hint: "どうしたらよいかわからない状態です", explanation: "どうしたらよいかわからず、迷っている状態"
    },
    {
        id: "mega_117", level: "intermediate", type: "yojijukugo",
        question: "「心機一転」の意味として正しいものを選びなさい",
        options: ["心臓の機能が変わること", "気持ちを新たにすること", "機械を新しくすること", "一つのことに集中すること"],
        correct: 1, hint: "気持ちをすっかり新しくすることです", explanation: "気持ちをすっかり新しくすること"
    },
    {
        id: "mega_118", level: "intermediate", type: "yojijukugo",
        question: "「二律背反」の意味として正しいものを選びなさい",
        options: ["二つの法律が反対すること", "二つの考えが矛盾すること", "二人が背中合わせになること", "二つの道が分かれること"],
        correct: 1, hint: "相反する二つのことが同時に成り立つことです", explanation: "相反する二つのことが同時に成り立つこと"
    },
    {
        id: "mega_119", level: "advanced", type: "yojijukugo",
        question: "「鶏口牛後」の意味として正しいものを選びなさい",
        options: ["鶏の口と牛のしっぽ", "大きな組織の末端より小さな組織の長", "動物の順番を表すこと", "食べ物の好みを表すこと"],
        correct: 1, hint: "大集団の最下位より小集団のトップがよいという意味", explanation: "大きな集団の末端にいるより、小さな集団でも長になる方がよい"
    },
    {
        id: "mega_120", level: "intermediate", type: "yojijukugo",
        question: "「馬耳東風」の意味として正しいものを選びなさい",
        options: ["馬の耳に東からの風", "人の意見を聞き流すこと", "春の暖かい風", "馬が風を感じること"],
        correct: 1, hint: "人の意見や忠告を聞き流すことです", explanation: "人の意見や忠告を聞き流すこと"
    },

    // 部首・画数問題 (121-140問)
    {
        id: "mega_121", level: "basic", type: "bushu",
        question: "「海」の部首は何ですか",
        options: ["氵（さんずい）", "亠", "母", "毎"],
        correct: 0, hint: "水に関係する漢字です", explanation: "水を表すさんずいが部首"
    },
    {
        id: "mega_122", level: "basic", type: "bushu",
        question: "「森」の部首は何ですか",
        options: ["木", "林", "禾", "竹"],
        correct: 0, hint: "木が3つで森、木が2つで林", explanation: "木へんが部首となります"
    },
    {
        id: "mega_123", level: "basic", type: "bushu",
        question: "「時間」の「時」の部首は何ですか",
        options: ["日", "寺", "土", "十"],
        correct: 0, hint: "太陽に関係する漢字です", explanation: "日へんが部首です"
    },
    {
        id: "mega_124", level: "basic", type: "bushu",
        question: "「花」の部首は何ですか",
        options: ["艹（くさかんむり）", "化", "十", "七"],
        correct: 0, hint: "植物に関係する漢字です", explanation: "草冠が部首です"
    },
    {
        id: "mega_125", level: "basic", type: "bushu",
        question: "「歌」の部首は何ですか",
        options: ["欠", "哥", "口", "可"],
        correct: 0, hint: "息を吐くことに関係します", explanation: "欠（あくび）が部首です"
    },
    {
        id: "mega_126", level: "intermediate", type: "bushu",
        question: "「病気」の「病」の部首は何ですか",
        options: ["疒（やまいだれ）", "丙", "内", "向"],
        correct: 0, hint: "病気に関係する漢字です", explanation: "やまいだれが部首です"
    },
    {
        id: "mega_127", level: "intermediate", type: "bushu",
        question: "「道路」の「道」の部首は何ですか",
        options: ["辶（しんにょう）", "道", "首", "自"],
        correct: 0, hint: "道や進むことに関係します", explanation: "しんにょうが部首です"
    },
    {
        id: "mega_128", level: "intermediate", type: "bushu",
        question: "「心配」の「心」の部首は何ですか",
        options: ["心", "忄（りっしんべん）", "小", "少"],
        correct: 0, hint: "そのまま部首になります", explanation: "心がそのまま部首です"
    },
    {
        id: "mega_129", level: "intermediate", type: "bushu",
        question: "「鉄」の部首は何ですか",
        options: ["金（かねへん）", "失", "土", "王"],
        correct: 0, hint: "金属に関係する漢字です", explanation: "金偏が部首です"
    },
    {
        id: "mega_130", level: "intermediate", type: "bushu",
        question: "「建物」の「建」の部首は何ですか",
        options: ["廴（いんにょう）", "聿", "干", "十"],
        correct: 0, hint: "のばすという意味があります", explanation: "いんにょうが部首です"
    },
    {
        id: "mega_131", level: "intermediate", type: "kakusu",
        question: "「愛」の画数は何画ですか",
        options: ["12画", "13画", "14画", "15画"],
        correct: 1, hint: "心に関係する漢字です", explanation: "愛は13画です"
    },
    {
        id: "mega_132", level: "intermediate", type: "kakusu",
        question: "「議」の画数は何画ですか",
        options: ["18画", "19画", "20画", "21画"],
        correct: 2, hint: "言偏7画＋義13画", explanation: "言偏7画＋義13画＝20画"
    },
    {
        id: "mega_133", level: "intermediate", type: "kakusu",
        question: "「響」の画数は何画ですか",
        options: ["18画", "19画", "20画", "21画"],
        correct: 2, hint: "音に関係する漢字で、複雑な構造です", explanation: "響は20画の漢字です"
    },
    {
        id: "mega_134", level: "advanced", type: "kakusu",
        question: "「鬱」の画数は何画ですか",
        options: ["28画", "29画", "30画", "31画"],
        correct: 1, hint: "最も画数の多い常用漢字の一つです", explanation: "鬱は29画で常用漢字中最多画数"
    },
    {
        id: "mega_135", level: "intermediate", type: "kakusu",
        question: "「薔薇」の「薔」の画数は何画ですか",
        options: ["16画", "17画", "18画", "19画"],
        correct: 3, hint: "花の名前の複雑な漢字です", explanation: "薔は19画です"
    },
    {
        id: "mega_136", level: "basic", type: "kakusu",
        question: "「水」の画数は何画ですか",
        options: ["3画", "4画", "5画", "6画"],
        correct: 1, hint: "基本的な漢字です", explanation: "水は4画です"
    },
    {
        id: "mega_137", level: "basic", type: "kakusu",
        question: "「火」の画数は何画ですか",
        options: ["3画", "4画", "5画", "6画"],
        correct: 1, hint: "基本的な漢字です", explanation: "火は4画です"
    },
    {
        id: "mega_138", level: "basic", type: "kakusu",
        question: "「山」の画数は何画ですか",
        options: ["2画", "3画", "4画", "5画"],
        correct: 1, hint: "基本的な漢字です", explanation: "山は3画です"
    },
    {
        id: "mega_139", level: "intermediate", type: "kakusu",
        question: "「算数」の「算」の画数は何画ですか",
        options: ["13画", "14画", "15画", "16画"],
        correct: 1, hint: "竹かんむり＋目＋廾", explanation: "算は14画です"
    },
    {
        id: "mega_140", level: "intermediate", type: "kakusu",
        question: "「鷹」の画数は何画ですか",
        options: ["22画", "23画", "24画", "25画"],
        correct: 2, hint: "鳥の名前の複雑な漢字です", explanation: "鷹は24画です"
    },

    // 熟語の構成 (141-160問)
    {
        id: "mega_141", level: "intermediate", type: "jukugo",
        question: "「学校」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 1, hint: "似た意味の漢字が組み合わさっています", explanation: "学ぶ場所＋教える場所で類義語の関係"
    },
    {
        id: "mega_142", level: "intermediate", type: "jukugo",
        question: "「読書」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 2, hint: "何を読むかを表しています", explanation: "書を読むという修飾の関係"
    },
    {
        id: "mega_143", level: "intermediate", type: "jukugo",
        question: "「地震」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 3, hint: "何が震えるかを表しています", explanation: "地が震えるという主述の関係"
    },
    {
        id: "mega_144", level: "intermediate", type: "jukugo",
        question: "「高低」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 0, hint: "反対の意味の漢字が組み合わさっています", explanation: "高い⇔低いという対義語の関係"
    },
    {
        id: "mega_145", level: "intermediate", type: "jukugo",
        question: "「走者」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 2, hint: "何をする人かを表しています", explanation: "走る者という修飾の関係"
    },
    {
        id: "mega_146", level: "intermediate", type: "jukugo",
        question: "「美人」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 2, hint: "どんな人かを表しています", explanation: "美しい人という修飾の関係"
    },
    {
        id: "mega_147", level: "intermediate", type: "jukugo",
        question: "「年月」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 1, hint: "似た意味の漢字が組み合わさっています", explanation: "時間を表す類義語の関係"
    },
    {
        id: "mega_148", level: "intermediate", type: "jukugo",
        question: "「国民」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 2, hint: "どこの民かを表しています", explanation: "国の民という修飾の関係"
    },
    {
        id: "mega_149", level: "intermediate", type: "jukugo",
        question: "「日没」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 3, hint: "何が没するかを表しています", explanation: "日が没するという主述の関係"
    },
    {
        id: "mega_150", level: "intermediate", type: "jukugo",
        question: "「開閉」の熟語の構成として正しいものは？",
        options: ["対義語の関係", "類義語の関係", "修飾の関係", "主述の関係"],
        correct: 0, hint: "反対の意味の漢字が組み合わさっています", explanation: "開く⇔閉じるという対義語の関係"
    },

    // 同訓異字 (151-170問)
    {
        id: "mega_151", level: "intermediate", type: "writing",
        question: "川の【ミズ】が流れる",
        options: ["水", "美図", "見ず", "満"],
        correct: 0, hint: "H2Oのことです", explanation: "自然の水のことです"
    },
    {
        id: "mega_152", level: "intermediate", type: "writing",
        question: "友達と【アソ】ぶ",
        options: ["遊", "麻生", "阿蘇", "足"],
        correct: 0, hint: "楽しく過ごすことです", explanation: "娯楽として楽しむことです"
    },
    {
        id: "mega_153", level: "intermediate", type: "writing",
        question: "手を【アラ】う",
        options: ["洗", "荒", "新", "粗"],
        correct: 0, hint: "きれいにすることです", explanation: "水で清潔にすることです"
    },
    {
        id: "mega_154", level: "intermediate", type: "writing",
        question: "風が【アラ】い",
        options: ["洗", "荒", "新", "粗"],
        correct: 1, hint: "激しいという意味です", explanation: "勢いが激しいことです"
    },
    {
        id: "mega_155", level: "intermediate", type: "writing",
        question: "【アツ】い夏",
        options: ["厚", "熱", "暑", "圧"],
        correct: 2, hint: "気温が高いことです", explanation: "気温や気候が高温なことです"
    },
    {
        id: "mega_156", level: "intermediate", type: "writing",
        question: "【アツ】いお茶",
        options: ["厚", "熱", "暑", "圧"],
        correct: 1, hint: "温度が高いことです", explanation: "物の温度が高いことです"
    },
    {
        id: "mega_157", level: "intermediate", type: "writing",
        question: "【アツ】い本",
        options: ["厚", "熱", "暑", "圧"],
        correct: 0, hint: "分厚いという意味です", explanation: "幅や厚みがあることです"
    },
    {
        id: "mega_158", level: "intermediate", type: "writing",
        question: "花が【サ】く",
        options: ["咲", "裂", "作", "策"],
        correct: 0, hint: "花がひらくことです", explanation: "花がひらくことです"
    },
    {
        id: "mega_159", level: "intermediate", type: "writing",
        question: "紙が【サ】ける",
        options: ["咲", "裂", "作", "策"],
        correct: 1, hint: "破れることです", explanation: "破れて分かれることです"
    },
    {
        id: "mega_160", level: "intermediate", type: "writing",
        question: "料理を【ツク】る",
        options: ["作", "造", "創", "津久"],
        correct: 0, hint: "手で作ることです", explanation: "手作業で何かを作ることです"
    },
    {
        id: "mega_161", level: "intermediate", type: "writing",
        question: "家を【ツク】る",
        options: ["作", "造", "創", "津久"],
        correct: 1, hint: "建設することです", explanation: "大きなものを建設することです"
    },
    {
        id: "mega_162", level: "intermediate", type: "writing",
        question: "新しいものを【ツク】る",
        options: ["作", "造", "創", "津久"],
        correct: 2, hint: "初めて作り出すことです", explanation: "新しく作り出すことです"
    },
    {
        id: "mega_163", level: "intermediate", type: "writing",
        question: "時計を【ミ】る",
        options: ["見", "観", "視", "診"],
        correct: 0, hint: "目で確認することです", explanation: "目で確認することです"
    },
    {
        id: "mega_164", level: "intermediate", type: "writing",
        question: "映画を【ミ】る",
        options: ["見", "観", "視", "診"],
        correct: 1, hint: "じっくり鑑賞することです", explanation: "じっくり鑑賞することです"
    },
    {
        id: "mega_165", level: "intermediate", type: "writing",
        question: "病気を【ミ】る",
        options: ["見", "観", "視", "診"],
        correct: 3, hint: "医者が患者を調べることです", explanation: "医者が患者を調べることです"
    },
    {
        id: "mega_166", level: "intermediate", type: "writing",
        question: "【カエ】る（帰宅する）",
        options: ["帰", "返", "変", "替"],
        correct: 0, hint: "家に戻ることです", explanation: "元いた場所に戻ることです"
    },
    {
        id: "mega_167", level: "intermediate", type: "writing",
        question: "本を【カエ】す",
        options: ["帰", "返", "変", "替"],
        correct: 1, hint: "借りたものを戻すことです", explanation: "借りたものを戻すことです"
    },
    {
        id: "mega_168", level: "intermediate", type: "writing",
        question: "服を【カエ】る",
        options: ["帰", "返", "変", "替"],
        correct: 3, hint: "別のものにすることです", explanation: "別のものと取り替えることです"
    },
    {
        id: "mega_169", level: "intermediate", type: "writing",
        question: "考えを【カエ】る",
        options: ["帰", "返", "変", "替"],
        correct: 2, hint: "違うものにすることです", explanation: "違うものにすることです"
    },
    {
        id: "mega_170", level: "intermediate", type: "writing",
        question: "病気が【ナオ】る",
        options: ["治", "直", "修", "正"],
        correct: 0, hint: "健康になることです", explanation: "健康になることです"
    },

    // 慣用句読み (171-190問)
    {
        id: "mega_171", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【相談】",
        options: ["そうだん", "あいだん", "そうたん", "あいたん"],
        correct: 0, hint: "話し合うことです", explanation: "相談（そうだん）= 話し合って決めること"
    },
    {
        id: "mega_172", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【注意】",
        options: ["ちゅうい", "ちゅうき", "そそぐき", "きをつける"],
        correct: 0, hint: "気をつけることです", explanation: "注意（ちゅうい）= 気をつけること"
    },
    {
        id: "mega_173", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【発見】",
        options: ["はっけん", "はつけん", "みつける", "はっき"],
        correct: 0, hint: "新しく見つけることです", explanation: "発見（はっけん）= 新しく見つけること"
    },
    {
        id: "mega_174", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【必要】",
        options: ["ひつよう", "ひつかな", "いる", "ひつじゅ"],
        correct: 0, hint: "なくてはならないことです", explanation: "必要（ひつよう）= なくてはならないこと"
    },
    {
        id: "mega_175", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【特別】",
        options: ["とくべつ", "とくばい", "とくべい", "とくたん"],
        correct: 0, hint: "普通とは違うことです", explanation: "特別（とくべつ）= 普通とは違うこと"
    },
    {
        id: "mega_176", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【連絡】",
        options: ["れんらく", "れんぞく", "つながり", "つらなる"],
        correct: 0, hint: "知らせることです", explanation: "連絡（れんらく）= 知らせること"
    },
    {
        id: "mega_177", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【確認】",
        options: ["かくにん", "かくじ", "たしかめる", "みとめる"],
        correct: 0, hint: "確かめることです", explanation: "確認（かくにん）= 確かめること"
    },
    {
        id: "mega_178", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【参加】",
        options: ["さんか", "さんくわ", "くわわる", "まいる"],
        correct: 0, hint: "加わることです", explanation: "参加（さんか）= 加わること"
    },
    {
        id: "mega_179", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【計画】",
        options: ["けいかく", "けいが", "はかる", "かく"],
        correct: 0, hint: "前もって考えることです", explanation: "計画（けいかく）= 前もって考えること"
    },
    {
        id: "mega_180", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【説明】",
        options: ["せつめい", "せつみょう", "あかす", "とく"],
        correct: 0, hint: "わかりやすく話すことです", explanation: "説明（せつめい）= わかりやすく話すこと"
    },
    {
        id: "mega_181", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【約束】",
        options: ["やくそく", "やくたば", "きめる", "ちかう"],
        correct: 0, hint: "決めた事を守ることです", explanation: "約束（やくそく）= 決めた事を守ること"
    },
    {
        id: "mega_182", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【経験】",
        options: ["けいけん", "けいげん", "へる", "たいけん"],
        correct: 0, hint: "実際に体験することです", explanation: "経験（けいけん）= 実際に体験すること"
    },
    {
        id: "mega_183", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【想像】",
        options: ["そうぞう", "そうじょう", "おもう", "かんがえる"],
        correct: 0, hint: "頭の中で思い描くことです", explanation: "想像（そうぞう）= 頭の中で思い描くこと"
    },
    {
        id: "mega_184", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【準備】",
        options: ["じゅんび", "じゅんばい", "ようい", "そなえる"],
        correct: 0, hint: "前もって用意することです", explanation: "準備（じゅんび）= 前もって用意すること"
    },
    {
        id: "mega_185", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【努力】",
        options: ["どりょく", "どりき", "つとめる", "がんばる"],
        correct: 0, hint: "一生懸命頑張ることです", explanation: "努力（どりょく）= 一生懸命頑張ること"
    },
    {
        id: "mega_186", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【興味】",
        options: ["きょうみ", "こうみ", "おもしろい", "たのしい"],
        correct: 0, hint: "面白いと思うことです", explanation: "興味（きょうみ）= 面白いと思うこと"
    },
    {
        id: "mega_187", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【練習】",
        options: ["れんしゅう", "れんじゅう", "なれる", "ならう"],
        correct: 0, hint: "繰り返し習うことです", explanation: "練習（れんしゅう）= 繰り返し習うこと"
    },
    {
        id: "mega_188", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【記録】",
        options: ["きろく", "きりょく", "かく", "しるす"],
        correct: 0, hint: "書き留めることです", explanation: "記録（きろく）= 書き留めること"
    },
    {
        id: "mega_189", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【復習】",
        options: ["ふくしゅう", "ふくじゅう", "また", "もう一度"],
        correct: 0, hint: "もう一度勉強することです", explanation: "復習（ふくしゅう）= もう一度勉強すること"
    },
    {
        id: "mega_190", level: "intermediate", type: "reading",
        question: "次の漢字の読み方を選びなさい：【比較】",
        options: ["ひかく", "ひこう", "くらべる", "たいひ"],
        correct: 0, hint: "比べることです", explanation: "比較（ひかく）= 比べること"
    },

    // 上級読み問題 (191-200問)
    {
        id: "mega_191", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【拙劣】",
        options: ["せつれつ", "せつりつ", "まずい", "へた"],
        correct: 0, hint: "下手なことです", explanation: "拙劣（せつれつ）= とても下手なこと"
    },
    {
        id: "mega_192", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【脆弱】",
        options: ["きじゃく", "ぜいじゃく", "もろい", "よわい"],
        correct: 1, hint: "もろくて弱いことです", explanation: "脆弱（ぜいじゃく）= もろくて弱いこと"
    },
    {
        id: "mega_193", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【偏見】",
        options: ["へんけん", "へんみ", "かたより", "ひとよし"],
        correct: 0, hint: "偏った見方のことです", explanation: "偏見（へんけん）= 偏った見方"
    },
    {
        id: "mega_194", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【潜在】",
        options: ["せんざい", "せんたい", "ひそむ", "かくれる"],
        correct: 0, hint: "隠れて存在することです", explanation: "潜在（せんざい）= 隠れて存在すること"
    },
    {
        id: "mega_195", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【曖昧】",
        options: ["あいまい", "あいばい", "はっきりしない", "ぼんやり"],
        correct: 0, hint: "はっきりしないことです", explanation: "曖昧（あいまい）= はっきりしないこと"
    },
    {
        id: "mega_196", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【希少】",
        options: ["きしょう", "きすく", "めずらしい", "すくない"],
        correct: 0, hint: "めったにないことです", explanation: "希少（きしょう）= めったにないこと"
    },
    {
        id: "mega_197", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【堅固】",
        options: ["けんこ", "けんご", "かたい", "じょうぶ"],
        correct: 0, hint: "非常に堅いことです", explanation: "堅固（けんご）= 非常に堅いこと"
    },
    {
        id: "mega_198", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【荘厳】",
        options: ["そうごん", "しょうげん", "りっぱ", "おごそか"],
        correct: 0, hint: "厳かで立派なことです", explanation: "荘厳（そうごん）= 厳かで立派なこと"
    },
    {
        id: "mega_199", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【精緻】",
        options: ["せいち", "せいし", "こまかい", "くわしい"],
        correct: 0, hint: "非常に細かいことです", explanation: "精緻（せいち）= 非常に細かくて正確なこと"
    },
    {
        id: "mega_200", level: "advanced", type: "reading",
        question: "次の漢字の読み方を選びなさい：【緻密】",
        options: ["ちみつ", "しみつ", "こまかい", "せいかく"],
        correct: 0, hint: "細かくて正確なことです", explanation: "緻密（ちみつ）= 細かくて正確なこと"
    }
];

// 統計情報
const stats2 = {
    basic: megaKanjiDatabase2.filter(q => q.level === 'basic').length,
    intermediate: megaKanjiDatabase2.filter(q => q.level === 'intermediate').length,
    advanced: megaKanjiDatabase2.filter(q => q.level === 'advanced').length,
    reading: megaKanjiDatabase2.filter(q => q.type === 'reading').length,
    writing: megaKanjiDatabase2.filter(q => q.type === 'writing').length,
    yojijukugo: megaKanjiDatabase2.filter(q => q.type === 'yojijukugo').length,
    bushu: megaKanjiDatabase2.filter(q => q.type === 'bushu').length,
    kakusu: megaKanjiDatabase2.filter(q => q.type === 'kakusu').length,
    jukugo: megaKanjiDatabase2.filter(q => q.type === 'jukugo').length,
    total: megaKanjiDatabase2.length
};

console.log('Mega Kanji Database Part 2 (101-200):', stats2);

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { megaKanjiDatabase2, stats2 };
}