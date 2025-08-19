// 1日の学習課題量設定システム（入試まで逆算）

class DailyScheduleManager {
    constructor() {
        this.examDate = new Date('2025-01-15'); // 中学入試日
        this.startDate = new Date('2024-08-18'); // 学習開始日
        this.totalStudyDays = this.calculateTotalDays();
        this.remainingDays = this.calculateRemainingDays();
        
        // 総学習目標
        this.totalGoals = {
            kanjiProblems: 500,    // 漢字500問完全マスター
            readingTexts: 200,     // 読解200文章
            grammarProblems: 300,  // 文法300問
            writingProblems: 100,  // 記述100問
            vocabularyProblems: 150, // 語彙150問
            reviewSessions: 50     // 復習セッション
        };
    }

    // 入試までの日数計算
    calculateRemainingDays() {
        const today = new Date();
        const diffTime = this.examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
    }

    // 総学習期間計算
    calculateTotalDays() {
        const diffTime = this.examDate.getTime() - this.startDate.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // 1日の学習課題量を計算（余裕を持った設定）
    getDailyTargets() {
        const safetyMargin = 0.8; // 80%で計算（20%の余裕）
        const effectiveDays = Math.floor(this.remainingDays * safetyMargin);
        
        const dailyTargets = {
            // 基本課題（毎日必須）
            kanjiProblems: Math.ceil(this.totalGoals.kanjiProblems / effectiveDays),
            readingProblems: Math.ceil(this.totalGoals.readingTexts / effectiveDays),
            grammarProblems: Math.ceil(this.totalGoals.grammarProblems / effectiveDays),
            
            // 週単位課題
            writingProblems: Math.ceil(this.totalGoals.writingProblems / (effectiveDays / 7)),
            vocabularyProblems: Math.ceil(this.totalGoals.vocabularyProblems / effectiveDays),
            
            // 推奨学習時間
            totalMinutes: 60,
            
            // 分野別時間配分
            timeAllocation: {
                kanji: 20,      // 漢字20分
                reading: 25,    // 読解25分  
                grammar: 10,    // 文法10分
                writing: 5      // 記述5分（週に2-3回は15分）
            }
        };

        return dailyTargets;
    }

    // 学習進度に応じた調整
    getAdjustedTargets(currentLevel, accuracy) {
        const baseTargets = this.getDailyTargets();
        
        // レベル調整係数
        let levelMultiplier = 1.0;
        if (currentLevel <= 2) levelMultiplier = 0.7;      // 初心者：70%
        else if (currentLevel <= 5) levelMultiplier = 1.0;  // 中級者：100%
        else levelMultiplier = 1.3;                         // 上級者：130%

        // 正答率調整係数
        let accuracyMultiplier = 1.0;
        if (accuracy < 50) accuracyMultiplier = 0.8;        // 低正答率：80%
        else if (accuracy > 80) accuracyMultiplier = 1.2;   // 高正答率：120%

        const adjustmentFactor = levelMultiplier * accuracyMultiplier;

        return {
            kanjiProblems: Math.max(3, Math.round(baseTargets.kanjiProblems * adjustmentFactor)),
            readingProblems: Math.max(1, Math.round(baseTargets.readingProblems * adjustmentFactor)),
            grammarProblems: Math.max(2, Math.round(baseTargets.grammarProblems * adjustmentFactor)),
            writingProblems: Math.max(1, baseTargets.writingProblems), // 記述は固定
            vocabularyProblems: Math.max(2, Math.round(baseTargets.vocabularyProblems * adjustmentFactor)),
            totalMinutes: Math.round(baseTargets.totalMinutes * adjustmentFactor),
            adjustmentFactor: Math.round(adjustmentFactor * 100) / 100
        };
    }

    // 週間学習計画
    getWeeklyPlan() {
        const dailyTargets = this.getDailyTargets();
        
        return {
            Monday: {
                focus: "漢字強化",
                kanji: dailyTargets.kanjiProblems + 2,
                reading: dailyTargets.readingProblems,
                grammar: dailyTargets.grammarProblems,
                writing: 0
            },
            Tuesday: {
                focus: "読解集中",
                kanji: dailyTargets.kanjiProblems,
                reading: dailyTargets.readingProblems + 1,
                grammar: dailyTargets.grammarProblems,
                writing: 0
            },
            Wednesday: {
                focus: "記述練習",
                kanji: dailyTargets.kanjiProblems,
                reading: dailyTargets.readingProblems,
                grammar: dailyTargets.grammarProblems,
                writing: 2
            },
            Thursday: {
                focus: "文法・語彙",
                kanji: dailyTargets.kanjiProblems,
                reading: dailyTargets.readingProblems,
                grammar: dailyTargets.grammarProblems + 3,
                writing: 0
            },
            Friday: {
                focus: "総合演習",
                kanji: dailyTargets.kanjiProblems,
                reading: dailyTargets.readingProblems,
                grammar: dailyTargets.grammarProblems,
                writing: 1
            },
            Saturday: {
                focus: "弱点強化",
                kanji: dailyTargets.kanjiProblems + 3,
                reading: dailyTargets.readingProblems + 1,
                grammar: dailyTargets.grammarProblems + 2,
                writing: 1
            },
            Sunday: {
                focus: "復習・まとめ",
                kanji: dailyTargets.kanjiProblems,
                reading: dailyTargets.readingProblems,
                grammar: dailyTargets.grammarProblems,
                writing: 1
            }
        };
    }

    // 月間マイルストーン
    getMonthlyMilestones() {
        const currentMonth = new Date().getMonth() + 1;
        const milestones = {
            8: { // 8月
                kanjiMastery: 100,
                readingAccuracy: 60,
                target: "基礎固め完了"
            },
            9: { // 9月
                kanjiMastery: 200,
                readingAccuracy: 65,
                target: "中級レベル到達"
            },
            10: { // 10月
                kanjiMastery: 300,
                readingAccuracy: 70,
                target: "応用問題対応可能"
            },
            11: { // 11月
                kanjiMastery: 400,
                readingAccuracy: 75,
                target: "実戦レベル到達"
            },
            12: { // 12月
                kanjiMastery: 500,
                readingAccuracy: 80,
                target: "合格圏内確保"
            },
            1: { // 1月（入試）
                kanjiMastery: 500,
                readingAccuracy: 85,
                target: "合格！"
            }
        };

        return milestones[currentMonth] || milestones[12];
    }

    // 今日の推奨学習メニュー
    getTodayMenu() {
        const today = new Date().toLocaleDateString('ja-JP', { weekday: 'long' });
        const weeklyPlan = this.getWeeklyPlan();
        const dayPlan = weeklyPlan[this.getEnglishWeekday(today)] || weeklyPlan.Monday;
        
        const adjustedTargets = this.getAdjustedTargets(
            userData.level || 1,
            userData.questionsAnswered > 0 
                ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100)
                : 50
        );

        return {
            ...dayPlan,
            adjustedTargets: adjustedTargets,
            estimatedTime: this.calculateEstimatedTime(adjustedTargets),
            priority: this.getPriorityTasks(adjustedTargets),
            achievable: true
        };
    }

    // 英語曜日変換
    getEnglishWeekday(japaneseWeekday) {
        const mapping = {
            '月曜日': 'Monday',
            '火曜日': 'Tuesday', 
            '水曜日': 'Wednesday',
            '木曜日': 'Thursday',
            '金曜日': 'Friday',
            '土曜日': 'Saturday',
            '日曜日': 'Sunday'
        };
        return mapping[japaneseWeekday] || 'Monday';
    }

    // 推定学習時間計算
    calculateEstimatedTime(targets) {
        return {
            kanji: targets.kanjiProblems * 2,        // 1問2分
            reading: targets.readingProblems * 8,    // 1文章8分
            grammar: targets.grammarProblems * 1.5,  // 1問1.5分
            writing: targets.writingProblems * 10,   // 1問10分
            total: (targets.kanjiProblems * 2) + 
                   (targets.readingProblems * 8) + 
                   (targets.grammarProblems * 1.5) + 
                   (targets.writingProblems * 10)
        };
    }

    // 優先順位タスク
    getPriorityTasks(targets) {
        const tasks = [];
        
        // 基礎が不足している場合
        if (userData.level <= 2) {
            tasks.push({
                priority: 1,
                task: "漢字基礎固め",
                target: targets.kanjiProblems,
                reason: "基礎レベル向上のため"
            });
        }
        
        // 正答率が低い場合
        const accuracy = userData.questionsAnswered > 0 
            ? (userData.correctAnswers / userData.questionsAnswered) * 100 
            : 0;
            
        if (accuracy < 60) {
            tasks.push({
                priority: 1,
                task: "復習重点",
                target: "間違えた問題の再挑戦",
                reason: "理解度向上のため"
            });
        }

        // 標準的な優先順位
        tasks.push(
            {
                priority: 2,
                task: "読解練習",
                target: targets.readingProblems,
                reason: "文章理解力向上"
            },
            {
                priority: 3,
                task: "文法・語彙",
                target: targets.grammarProblems,
                reason: "基礎知識定着"
            }
        );

        return tasks.sort((a, b) => a.priority - b.priority);
    }

    // 学習達成度チェック
    checkDailyAchievement() {
        const targets = this.getTodayMenu().adjustedTargets;
        const current = this.getCurrentProgress();
        
        const achievements = {
            kanji: current.kanjiQuestions >= targets.kanjiProblems,
            reading: current.readingQuestions >= targets.readingProblems,
            grammar: current.grammarQuestions >= targets.grammarProblems,
            time: current.studyMinutes >= targets.totalMinutes,
            overall: false
        };

        // 全体達成判定（時間達成 または 問題数の80%達成）
        const problemAchievement = (
            achievements.kanji && achievements.reading && achievements.grammar
        );
        
        achievements.overall = achievements.time || problemAchievement;

        return achievements;
    }

    // 現在の進捗取得
    getCurrentProgress() {
        const today = new Date().toDateString();
        const dailyData = JSON.parse(localStorage.getItem(`dailyData_${today}`)) || {};
        
        return {
            studyMinutes: userData.studyMinutesToday || 0,
            kanjiQuestions: dailyData.kanjiQuestions || 0,
            readingQuestions: dailyData.readingQuestions || 0,
            grammarQuestions: dailyData.grammarQuestions || 0,
            writingQuestions: dailyData.writingQuestions || 0,
            totalQuestions: userData.questionsAnswered || 0,
            accuracy: userData.questionsAnswered > 0 
                ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100)
                : 0
        };
    }

    // 学習メニュー表示
    displayTodayMenu() {
        const menu = this.getTodayMenu();
        const progress = this.getCurrentProgress();
        const achievements = this.checkDailyAchievement();

        const menuHTML = `
            <div class="daily-menu-card">
                <h3>📅 今日の学習メニュー（${menu.focus}）</h3>
                
                <div class="target-list">
                    <div class="target-item ${achievements.kanji ? 'completed' : ''}">
                        <span class="target-icon">📝</span>
                        <span class="target-name">漢字練習</span>
                        <span class="target-progress">${progress.kanjiQuestions}/${menu.adjustedTargets.kanjiProblems}問</span>
                        <span class="target-time">約${menu.estimatedTime.kanji}分</span>
                    </div>
                    
                    <div class="target-item ${achievements.reading ? 'completed' : ''}">
                        <span class="target-icon">📖</span>
                        <span class="target-name">読解問題</span>
                        <span class="target-progress">${progress.readingQuestions}/${menu.adjustedTargets.readingProblems}問</span>
                        <span class="target-time">約${menu.estimatedTime.reading}分</span>
                    </div>
                    
                    <div class="target-item ${achievements.grammar ? 'completed' : ''}">
                        <span class="target-icon">💬</span>
                        <span class="target-name">文法・語彙</span>
                        <span class="target-progress">${progress.grammarQuestions}/${menu.adjustedTargets.grammarProblems}問</span>
                        <span class="target-time">約${menu.estimatedTime.grammar}分</span>
                    </div>
                    
                    <div class="target-item">
                        <span class="target-icon">✍️</span>
                        <span class="target-name">記述問題</span>
                        <span class="target-progress">${progress.writingQuestions}/${menu.adjustedTargets.writingProblems}問</span>
                        <span class="target-time">約${menu.estimatedTime.writing}分</span>
                    </div>
                </div>

                <div class="progress-summary">
                    <div class="time-progress">
                        <span>総学習時間: ${progress.studyMinutes}/${menu.adjustedTargets.totalMinutes}分</span>
                        <div class="mini-progress-bar">
                            <div class="mini-progress-fill" style="width: ${Math.min((progress.studyMinutes / menu.adjustedTargets.totalMinutes) * 100, 100)}%"></div>
                        </div>
                    </div>
                    
                    ${achievements.overall 
                        ? '<div class="achievement-badge">🎉 今日の目標達成！</div>'
                        : '<div class="encouragement">💪 目標まであと少し！</div>'
                    }
                </div>

                <div class="milestone-info">
                    <h4>📊 今月の目標</h4>
                    <p>${this.getMonthlyMilestones().target}</p>
                    <p>入試まで: <strong>${this.remainingDays}日</strong></p>
                </div>
            </div>
        `;

        return menuHTML;
    }

    // 達成状況をメールレポートに追加
    getAchievementSummary() {
        const achievements = this.checkDailyAchievement();
        const menu = this.getTodayMenu();
        const progress = this.getCurrentProgress();

        return {
            isCompleted: achievements.overall,
            completionRate: this.calculateCompletionRate(progress, menu.adjustedTargets),
            timeAchievement: achievements.time,
            problemAchievement: achievements.kanji && achievements.reading && achievements.grammar,
            remainingTasks: this.getRemainingTasks(progress, menu.adjustedTargets),
            tomorrowPreparation: this.getTomorrowPreparation()
        };
    }

    // 完了率計算
    calculateCompletionRate(progress, targets) {
        const rates = [
            progress.kanjiQuestions / targets.kanjiProblems,
            progress.readingQuestions / targets.readingProblems,
            progress.grammarQuestions / targets.grammarProblems,
            progress.studyMinutes / targets.totalMinutes
        ];

        const averageRate = rates.reduce((a, b) => a + b, 0) / rates.length;
        return Math.min(Math.round(averageRate * 100), 100);
    }

    // 残りタスク
    getRemainingTasks(progress, targets) {
        const remaining = [];
        
        if (progress.kanjiQuestions < targets.kanjiProblems) {
            remaining.push(`漢字練習 ${targets.kanjiProblems - progress.kanjiQuestions}問`);
        }
        if (progress.readingQuestions < targets.readingProblems) {
            remaining.push(`読解問題 ${targets.readingProblems - progress.readingQuestions}問`);
        }
        if (progress.grammarQuestions < targets.grammarProblems) {
            remaining.push(`文法問題 ${targets.grammarProblems - progress.grammarQuestions}問`);
        }

        return remaining;
    }

    // 明日の準備
    getTomorrowPreparation() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowWeekday = tomorrow.toLocaleDateString('ja-JP', { weekday: 'long' });
        const tomorrowPlan = this.getWeeklyPlan()[this.getEnglishWeekday(tomorrowWeekday)];
        
        return `明日は「${tomorrowPlan.focus}」の日です。${tomorrowPlan.focus === '記述練習' ? '記述問題を重点的に取り組みましょう。' : '基礎問題をしっかり固めましょう。'}`;
    }
}

// 日次スケジュール表示用CSS（HTMLに動的追加）
function addDailyMenuStyles() {
    if (document.getElementById('daily-menu-styles')) return;
    
    const styles = `
        <style id="daily-menu-styles">
        .daily-menu-card {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
            border: 2px solid #e9ecef;
        }
        
        .target-list {
            display: grid;
            gap: 10px;
            margin: 15px 0;
        }
        
        .target-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: white;
            border-radius: 8px;
            border: 1px solid #dee2e6;
        }
        
        .target-item.completed {
            background: #d4edda;
            border-color: #28a745;
        }
        
        .target-icon {
            font-size: 20px;
            width: 30px;
        }
        
        .target-name {
            flex: 1;
            font-weight: bold;
        }
        
        .target-progress {
            color: #667eea;
            font-weight: bold;
        }
        
        .target-time {
            color: #666;
            font-size: 12px;
        }
        
        .progress-summary {
            margin: 20px 0;
            padding: 15px;
            background: #e7f3ff;
            border-radius: 10px;
        }
        
        .mini-progress-bar {
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 5px;
        }
        
        .mini-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: width 0.3s ease;
        }
        
        .achievement-badge {
            text-align: center;
            color: #28a745;
            font-weight: bold;
            margin-top: 10px;
        }
        
        .encouragement {
            text-align: center;
            color: #667eea;
            font-weight: bold;
            margin-top: 10px;
        }
        
        .milestone-info {
            margin-top: 20px;
            padding: 15px;
            background: #fff3cd;
            border-radius: 10px;
            border-left: 4px solid #ffc107;
        }
        
        .milestone-info h4 {
            margin: 0 0 10px 0;
            color: #856404;
        }
        
        .milestone-info p {
            margin: 5px 0;
            color: #856404;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// グローバルインスタンス
const dailySchedule = new DailyScheduleManager();

// UIに今日のメニューを表示
function showTodayMenu() {
    addDailyMenuStyles();
    const menuHTML = dailySchedule.displayTodayMenu();
    
    // メイン画面に挿入
    const menuContainer = document.getElementById('dailyMenuContainer') || createMenuContainer();
    menuContainer.innerHTML = menuHTML;
}

// メニューコンテナ作成
function createMenuContainer() {
    const container = document.createElement('div');
    container.id = 'dailyMenuContainer';
    const progressOverview = document.querySelector('.progress-overview');
    if (progressOverview) {
        progressOverview.insertAdjacentElement('afterend', container);
    }
    return container;
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DailyScheduleManager };
}