# 追手門学院中学入試対策 総合国語学習システム 要件定義書 Ver.2.0

## 1. システム概要

### 1.1 システム名称
追手門学院中学入試対策 総合国語学習システム（Comprehensive Japanese Language Master）

### 1.2 システムの目的
- 追手門学院中学入試の国語全分野に対応した総合学習支援
- 漢字・語彙・読解・文法を網羅的にカバー
- 毎日の継続学習を促進する報酬システム
- 入試出題傾向に基づいた実戦的な問題提供

### 1.3 対象ユーザー
- **主要ユーザー**: 小学4-6年生（追手門学院中学受験予定者）
- **副次ユーザー**: 保護者（学習進捗確認・応援）
- **想定偏差値**: 40-55+

### 1.4 カバー分野
1. **漢字・語彙**（40%）
2. **文章読解**（30%）
3. **文法・敬語**（15%）
4. **ことわざ・慣用句**（15%）

## 2. 機能要件

### 2.1 問題タイプ別機能

#### 2.1.1 漢字・語彙問題
**A. 漢字読み問題**
```javascript
{
  type: "kanji_reading",
  question: "彼の【愛情】深い態度に感心した。",
  options: ["あいじょう", "あいせい", "あいかん", "あいしん"],
  correct: 0,
  level: 1,
  category: "漢字読み"
}
```

**B. 漢字書き取り問題**
```javascript
{
  type: "kanji_writing",
  question: "「カンサツ」日記をつける。",
  options: ["観察", "感察", "監察", "鑑察"],
  correct: 0,
  level: 2,
  category: "漢字書き"
}
```

**C. 同音異義語問題**
```javascript
{
  type: "homophone",
  question: "次の「いけん」の使い方で正しいものを選びなさい。",
  context: [
    "私の（　　）を述べる。",
    "医師の（　　）を聞く。",
    "反対の（　　）もある。"
  ],
  options: ["意見・医見・異見", "医見・意見・異見", "意見・異見・医見", "異見・意見・医見"],
  correct: 0,
  level: 3,
  category: "同音異義語"
}
```

**D. 対義語・類義語問題**
```javascript
{
  type: "antonym_synonym",
  question: "「創造」の対義語を選びなさい。",
  options: ["破壊", "想像", "構造", "製造"],
  correct: 0,
  level: 3,
  category: "対義語"
}
```

#### 2.1.2 文章読解問題
**A. 説明文読解**
```javascript
{
  type: "reading_comprehension",
  passage: {
    title: "地球温暖化について",
    text: "地球温暖化とは、人間の活動によって大気中の二酸化炭素などの温室効果ガスが増加し、地球の平均気温が上昇する現象である。この問題は、単に気温が上がるだけでなく、海面上昇、異常気象の増加、生態系への影響など、様々な問題を引き起こす。私たち一人一人ができることは、エネルギーの節約、リサイクルの推進、公共交通機関の利用などがある。",
    wordCount: 150
  },
  questions: [
    {
      q: "地球温暖化の原因として本文に書かれているものは何か。",
      options: [
        "温室効果ガスの増加",
        "海面の上昇",
        "異常気象の発生",
        "生態系の変化"
      ],
      correct: 0
    },
    {
      q: "筆者が最も伝えたいことは何か。",
      options: [
        "地球温暖化は深刻な問題である",
        "一人一人の行動が大切である",
        "気温が上昇している",
        "リサイクルを推進すべきだ"
      ],
      correct: 1
    }
  ],
  level: 2,
  category: "説明文読解"
}
```

**B. 物語文読解**
```javascript
{
  type: "narrative_reading",
  passage: {
    title: "少年の決意",
    text: "太郎は、転校してきたばかりで友達がいなかった。休み時間も一人で本を読んでいた。ある日、クラスメイトの花子が声をかけてきた。「一緒に遊ぼう」その一言が、太郎の学校生活を大きく変えることになった。",
    wordCount: 100
  },
  questions: [
    {
      q: "太郎の気持ちとして最も適切なものは？",
      options: [
        "寂しかったが、希望を持った",
        "怒っていたが、落ち着いた",
        "楽しかったが、不安になった",
        "悲しかったが、あきらめた"
      ],
      correct: 0
    }
  ],
  level: 1,
  category: "物語文読解"
}
```

**C. 詩・短歌・俳句の鑑賞**
```javascript
{
  type: "poetry_appreciation",
  content: {
    type: "haiku",
    text: "古池や　蛙飛び込む　水の音",
    author: "松尾芭蕉"
  },
  question: "この俳句から感じられる情景は？",
  options: [
    "静寂の中の一瞬の動き",
    "にぎやかな池の様子",
    "激しい雨の音",
    "朝の爽やかな風景"
  ],
  correct: 0,
  level: 3,
  category: "詩歌鑑賞"
}
```

#### 2.1.3 文法・言語知識問題
**A. 品詞識別**
```javascript
{
  type: "parts_of_speech",
  question: "次の文の下線部の品詞を答えなさい。\n「美しい花が咲いている」",
  underlined: "美しい",
  options: ["形容詞", "形容動詞", "連体詞", "副詞"],
  correct: 0,
  level: 2,
  category: "品詞"
}
```

**B. 敬語問題**
```javascript
{
  type: "honorific",
  question: "「先生が来る」を尊敬語で表現したものは？",
  options: [
    "先生がいらっしゃる",
    "先生が参る",
    "先生が伺う",
    "先生がおる"
  ],
  correct: 0,
  level: 2,
  category: "敬語"
}
```

**C. 文の構造**
```javascript
{
  type: "sentence_structure",
  question: "次の文の主語を選びなさい。\n「昨日、妹が図書館で借りた本を私は読んだ。」",
  options: ["私", "妹", "本", "図書館"],
  correct: 0,
  level: 3,
  category: "文の構造"
}
```

#### 2.1.4 ことわざ・慣用句・四字熟語
**A. ことわざの意味**
```javascript
{
  type: "proverb_meaning",
  question: "「猿も木から落ちる」の意味は？",
  options: [
    "どんな名人でも失敗することがある",
    "高いところは危険である",
    "練習しないと上達しない",
    "自然には逆らえない"
  ],
  correct: 0,
  level: 2,
  category: "ことわざ"
}
```

**B. 慣用句の使い方**
```javascript
{
  type: "idiom_usage",
  question: "「頭が下がる」を使った正しい文は？",
  options: [
    "彼の努力には頭が下がる",
    "疲れて頭が下がる",
    "考えすぎて頭が下がる",
    "眠くて頭が下がる"
  ],
  correct: 0,
  level: 2,
  category: "慣用句"
}
```

**C. 四字熟語完成**
```javascript
{
  type: "four_character_idiom",
  question: "「一石○鳥」の○に入る漢字は？",
  options: ["二", "三", "四", "五"],
  correct: 0,
  level: 1,
  category: "四字熟語"
}
```

### 2.2 学習モード

#### 2.2.1 デイリーチャレンジモード
- **問題構成**: 
  - 漢字: 4問
  - 読解: 3問
  - 文法: 2問
  - ことわざ等: 1問
- **所要時間**: 15-20分
- **難易度調整**: 前日の正解率に基づく

#### 2.2.2 分野別集中モード
- **選択可能分野**: 
  - 漢字マスター
  - 読解力強化
  - 文法完璧
  - 語彙力アップ
- **問題数**: 各20問
- **レベル選択**: 可能

#### 2.2.3 模擬試験モード
- **問題構成**: 実際の入試形式
- **制限時間**: 50分
- **配点**: 
  - 漢字・語彙: 40点
  - 読解: 40点
  - 文法・言語: 20点
- **偏差値算出**: あり

### 2.3 適応型学習システム

#### 2.3.1 レベル判定
```javascript
{
  initialTest: {
    questions: 20,
    categories: ["漢字", "読解", "文法", "語彙"],
    result: {
      level: 1-4,
      strengths: ["漢字"],
      weaknesses: ["読解"]
    }
  }
}
```

#### 2.3.2 個別最適化
- **苦手分野**: 出題頻度増加
- **得意分野**: 高レベル問題へ
- **学習履歴**: AIによる分析

### 2.4 報酬システム（拡張版）

#### 2.4.1 ポイント体系
```javascript
{
  基本ポイント: {
    漢字正解: 2,
    読解正解: 3,
    文法正解: 2,
    語彙正解: 2
  },
  ボーナス: {
    全問正解: 10,
    分野制覇: 5,
    弱点克服: 8
  },
  連続ボーナス: {
    3日: 10,
    7日: 30,
    30日: 100
  }
}
```

#### 2.4.2 バッジシステム
- **漢字マスター**: 漢字100問連続正解
- **読解の達人**: 読解問題90%以上を1週間
- **文法博士**: 文法全分野制覇
- **国語の神様**: 総合偏差値60以上

### 2.5 保護者向け機能

#### 2.5.1 学習レポート
```javascript
{
  daily: {
    studyTime: "25分",
    correctRate: "85%",
    categories: {
      漢字: "90%",
      読解: "80%",
      文法: "85%",
      語彙: "85%"
    }
  },
  weekly: {
    totalTime: "175分",
    improvement: "+5%",
    recommendation: "読解問題を増やしましょう"
  }
}
```

#### 2.5.2 アドバイス機能
- **AI分析**: 学習パターン解析
- **改善提案**: 具体的な学習方法
- **褒めポイント**: モチベーション維持

## 3. データ設計

### 3.1 問題データベース
```javascript
ProblemDatabase {
  // 漢字・語彙（1000問）
  kanji_problems: [{
    id: string,
    type: "reading" | "writing",
    word: string,
    reading: string,
    meaning: string,
    level: 1-4,
    grade: string,
    frequency: number,
    context_patterns: string[]
  }],
  
  // 同音異義語（200セット）
  homophones: [{
    reading: string,
    words: [{
      word: string,
      meaning: string,
      usage: string,
      level: number
    }]
  }],
  
  // 読解問題（300問）
  reading_problems: [{
    id: string,
    type: "説明文" | "物語文" | "詩歌",
    passage: {
      title: string,
      text: string,
      wordCount: number,
      difficulty: 1-4
    },
    questions: [{
      question: string,
      type: "内容理解" | "心情理解" | "主題" | "語句",
      options: string[],
      correct: number,
      explanation: string
    }]
  }],
  
  // 文法問題（400問）
  grammar_problems: [{
    id: string,
    type: "品詞" | "敬語" | "文構造" | "助詞",
    question: string,
    options: string[],
    correct: number,
    explanation: string,
    level: 1-4
  }],
  
  // ことわざ・慣用句（500個）
  idioms: [{
    id: string,
    type: "ことわざ" | "慣用句" | "四字熟語",
    phrase: string,
    reading: string,
    meaning: string,
    usage: string,
    origin: string,
    level: 1-4
  }]
}
```

### 3.2 学習履歴データ
```javascript
StudyHistory {
  userId: string,
  sessions: [{
    date: Date,
    mode: "daily" | "category" | "exam",
    problems: [{
      problemId: string,
      category: string,
      answered: string,
      correct: boolean,
      timeSpent: number
    }],
    summary: {
      totalTime: number,
      correctRate: number,
      categoryBreakdown: {},
      earnedPoints: number
    }
  }],
  statistics: {
    totalSessions: number,
    averageScore: number,
    strongCategories: string[],
    weakCategories: string[],
    improvementRate: number
  }
}
```

### 3.3 進捗管理データ
```javascript
ProgressData {
  userId: string,
  currentLevel: {
    overall: 1-4,
    kanji: 1-4,
    reading: 1-4,
    grammar: 1-4,
    vocabulary: 1-4
  },
  masteredItems: {
    kanji: string[],
    grammar: string[],
    idioms: string[]
  },
  learningCurve: [{
    date: Date,
    score: number,
    level: number
  }],
  predictions: {
    estimatedScore: number,
    readyForExam: boolean,
    recommendedStudyHours: number
  }
}
```

## 4. UI/UX要件

### 4.1 画面構成
1. **ホーム画面**
   - 今日の学習メニュー
   - 進捗サマリー
   - お知らせ

2. **学習画面**
   - 問題表示エリア
   - 回答選択エリア
   - 残り問題数/時間
   - ヒントボタン

3. **読解問題画面**
   - 本文表示（スクロール可能）
   - 問題切り替えタブ
   - マーカー機能
   - 拡大/縮小

4. **結果画面**
   - 得点・正解率
   - 分野別成績
   - 解説表示
   - 復習リスト追加

5. **進捗画面**
   - レーダーチャート
   - 学習カレンダー
   - バッジコレクション
   - ランキング

### 4.2 アクセシビリティ
- **文字サイズ**: 3段階調整
- **配色**: 高コントラストモード
- **音声**: 問題読み上げ機能
- **操作**: キーボードショートカット

### 4.3 レスポンシブ対応
```css
/* ブレークポイント */
Desktop: 1200px+
Tablet: 768px-1199px  
Mobile: 320px-767px

/* 読解問題の表示 */
Desktop: 2カラム（本文|問題）
Tablet: 1カラム（切替式）
Mobile: 1カラム（切替式）
```

## 5. 技術仕様

### 5.1 アーキテクチャ
```
Frontend:
- HTML5/CSS3/JavaScript
- LocalStorage (データ永続化)
- ServiceWorker (オフライン対応)

Backend (将来実装):
- Node.js/Express
- MongoDB (問題DB)
- Redis (キャッシュ)
```

### 5.2 パフォーマンス要件
- 初回読込: 3秒以内
- 問題切替: 200ms以内
- オフライン: 基本機能維持
- データ同期: バックグラウンド

### 5.3 セキュリティ
- XSS対策: サニタイズ処理
- CSRF対策: トークン検証
- データ暗号化: 個人情報保護

## 6. 運用・保守

### 6.1 コンテンツ更新
- **問題追加**: 月50問
- **入試分析**: 年1回
- **レベル調整**: 四半期

### 6.2 品質管理
- **問題検証**: 2重チェック
- **正答率分析**: 自動集計
- **フィードバック**: 月次対応

### 6.3 サポート体制
- **FAQ**: 自動更新
- **問い合わせ**: 48時間以内
- **バグ修正**: 優先度別対応

## 7. 将来拡張

### 7.1 機能拡張
- **作文添削AI**: 記述問題対応
- **音声認識**: 音読練習
- **VR/AR**: 没入型学習
- **他校対応**: カスタマイズ版

### 7.2 連携機能
- **塾連携**: 成績共有
- **学校連携**: 宿題統合
- **保護者アプリ**: リアルタイム確認

## 8. KPI（重要業績評価指標）

### 8.1 学習効果
- 平均正解率: 70%以上
- 継続率: 80%以上（30日）
- 偏差値向上: +5以上（3ヶ月）

### 8.2 利用状況
- DAU/MAU: 80%以上
- 平均学習時間: 20分/日
- 完了率: 85%以上

### 8.3 満足度
- NPS: 50以上
- 継続意向: 90%以上
- 推奨意向: 80%以上

## 9. 導入スケジュール

### Phase 1（現在）
- 基本機能実装
- 漢字・語彙問題
- 報酬システム

### Phase 2（3ヶ月）
- 読解問題追加
- 文法問題追加
- レベル適応

### Phase 3（6ヶ月）
- 模擬試験機能
- AI分析機能
- 保護者機能

### Phase 4（1年）
- 作文対策
- 他校展開
- API公開

---

**改訂履歴**
- Ver 2.0: 2024.01.15 - 総合国語学習システムへ拡張
- Ver 1.0: 2024.01.14 - 漢字学習システム

本要件定義書は、追手門学院中学入試の国語全般に対応した総合学習システムの完全な仕様を定義しています。