// 5日で100円！漢字チャレンジ報酬システム

class KanjiRewardSystem {
    constructor() {
        this.pointsData = this.loadPointsData();
        this.achievementData = this.loadAchievementData();
    }

    // ポイント計算システム
    calculateDailyPoints(correctCount, totalQuestions = 10) {
        let points = 0;
        
        // 基本ポイント（6問以上正解で15ポイント）
        if (correctCount >= 6) {
            points += 15;
            
            // 正解率ボーナス
            if (correctCount >= 7 && correctCount <= 8) {
                points += 2; // 7-8問正解
            } else if (correctCount === 9) {
                points += 3; // 9問正解
            } else if (correctCount === 10) {
                points += 5; // 満点
            }
        }
        
        return points;
    }

    // 連続学習ボーナス
    getStreakBonus() {
        const streak = this.getCurrentStreak();
        let bonus = 0;
        
        if (streak === 3) {
            bonus = 10; // 3日連続ボーナス
        } else if (streak === 5) {
            bonus = 20; // 5日連続で100円達成！
        } else if (streak === 7) {
            bonus = 30; // 週間パーフェクト
        }
        
        return bonus;
    }

    // 今日の学習結果を記録
    recordDailyResult(date, correctCount, totalQuestions = 10) {
        const dateKey = this.getDateKey(date);
        const basePoints = this.calculateDailyPoints(correctCount, totalQuestions);
        const streakBonus = this.getStreakBonus();
        const totalPoints = basePoints + streakBonus;
        
        // 間違えた問題の再チャレンジボーナス
        const retryBonus = this.getRetryBonus(dateKey);
        
        const dailyResult = {
            date: dateKey,
            correctCount: correctCount,
            totalQuestions: totalQuestions,
            correctRate: Math.round((correctCount / totalQuestions) * 100),
            basePoints: basePoints,
            streakBonus: streakBonus,
            retryBonus: retryBonus,
            totalPoints: totalPoints + retryBonus,
            timestamp: new Date().toISOString()
        };
        
        // データを保存
        this.pointsData.dailyResults = this.pointsData.dailyResults || [];
        this.pointsData.dailyResults.push(dailyResult);
        this.pointsData.totalPoints = (this.pointsData.totalPoints || 0) + dailyResult.totalPoints;
        
        // 100円達成チェック
        this.checkMoneyEarned();
        
        // 実績チェック
        this.checkAchievements(dailyResult);
        
        this.savePointsData();
        
        return this.generateResultMessage(dailyResult);
    }

    // 再チャレンジボーナス計算
    getRetryBonus(dateKey) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = this.getDateKey(yesterday);
        
        // 昨日間違えた問題を今日正解したらボーナス
        const retryData = this.pointsData.retryQuestions?.[yesterdayKey] || [];
        const solvedToday = this.pointsData.solvedRetries?.[dateKey] || [];
        
        return solvedToday.length; // 1問につき1ポイント
    }

    // 100円達成チェック
    checkMoneyEarned() {
        const currentPoints = this.pointsData.totalPoints || 0;
        const earnedMoney = Math.floor(currentPoints / 100) * 100;
        
        if (earnedMoney > (this.pointsData.lastEarnedAmount || 0)) {
            this.pointsData.lastEarnedAmount = earnedMoney;
            this.pointsData.totalEarned = (this.pointsData.totalEarned || 0) + 100;
            this.pointsData.lastEarnedDate = new Date().toISOString();
            
            // 100円獲得通知
            this.triggerMoneyEarnedEvent();
        }
    }

    // 結果メッセージ生成
    generateResultMessage(result) {
        const currentTotal = this.pointsData.totalPoints || 0;
        const remainingPoints = 100 - (currentTotal % 100);
        const daysToEarn = Math.ceil(remainingPoints / 20); // 1日最大20ポイントで計算
        
        let message = {
            summary: `今日の学習完了！`,
            details: {
                todayPoints: result.totalPoints,
                correctRate: result.correctRate,
                currentTotal: currentTotal,
                remainingPoints: remainingPoints,
                daysToEarn: daysToEarn
            },
            encouragement: this.getEncouragementMessage(result.correctRate),
            visualProgress: this.getVisualProgress(currentTotal % 100)
        };
        
        // 特別なメッセージ
        if (result.streakBonus > 0) {
            message.special = `🎉 ${this.getCurrentStreak()}日連続達成！ボーナス${result.streakBonus}ポイント獲得！`;
        }
        
        if (result.correctRate === 100) {
            message.perfect = "🌟 満点おめでとう！最高のパフォーマンス！";
        }
        
        return message;
    }

    // 応援メッセージ
    getEncouragementMessage(correctRate) {
        if (correctRate === 100) {
            return "完璧！この調子で頑張ろう！";
        } else if (correctRate >= 90) {
            return "素晴らしい！もう少しで満点だね！";
        } else if (correctRate >= 70) {
            return "よく頑張った！明日も挑戦しよう！";
        } else if (correctRate >= 60) {
            return "合格！少しずつ上達していこう！";
        } else {
            return "もう一息！明日はきっとできるよ！";
        }
    }

    // ビジュアル進捗表示
    getVisualProgress(points) {
        const percentage = (points / 100) * 100;
        const filled = Math.floor(percentage / 10);
        const empty = 10 - filled;
        
        return {
            bar: "█".repeat(filled) + "░".repeat(empty),
            percentage: percentage,
            stars: this.getStarRating(points)
        };
    }

    // 星評価
    getStarRating(points) {
        if (points >= 80) return "★★★★★";
        if (points >= 60) return "★★★★☆";
        if (points >= 40) return "★★★☆☆";
        if (points >= 20) return "★★☆☆☆";
        return "★☆☆☆☆";
    }

    // 現在の連続日数
    getCurrentStreak() {
        const results = this.pointsData.dailyResults || [];
        if (results.length === 0) return 0;
        
        let streak = 0;
        const today = new Date();
        
        for (let i = 0; i < 30; i++) { // 最大30日前まで確認
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() - i);
            const dateKey = this.getDateKey(checkDate);
            
            const hasResult = results.some(r => r.date === dateKey);
            if (hasResult) {
                streak++;
            } else if (i > 0) { // 今日じゃない日に記録がない
                break;
            }
        }
        
        return streak;
    }

    // 実績システム
    checkAchievements(result) {
        const achievements = [];
        
        // 初回学習
        if ((this.pointsData.dailyResults || []).length === 1) {
            achievements.push({
                id: 'first_study',
                name: '学習スタート！',
                description: '初めての学習を完了',
                icon: '🎯'
            });
        }
        
        // 満点達成
        if (result.correctRate === 100) {
            const perfectCount = (this.achievementData.perfectCount || 0) + 1;
            this.achievementData.perfectCount = perfectCount;
            
            if (perfectCount === 1) {
                achievements.push({
                    id: 'first_perfect',
                    name: '初めての満点！',
                    description: '10問全問正解達成',
                    icon: '🌟'
                });
            } else if (perfectCount === 10) {
                achievements.push({
                    id: 'perfect_10',
                    name: '満点マスター',
                    description: '満点を10回達成',
                    icon: '👑'
                });
            }
        }
        
        // 連続学習
        const streak = this.getCurrentStreak();
        if (streak === 3) {
            achievements.push({
                id: 'streak_3',
                name: '3日間継続！',
                description: '3日連続で学習完了',
                icon: '🔥'
            });
        } else if (streak === 7) {
            achievements.push({
                id: 'streak_7',
                name: '週間マスター',
                description: '7日連続で学習完了',
                icon: '🏆'
            });
        } else if (streak === 30) {
            achievements.push({
                id: 'streak_30',
                name: '月間皆勤賞',
                description: '30日連続で学習完了',
                icon: '🎖️'
            });
        }
        
        // 小遣い獲得
        const totalEarned = this.pointsData.totalEarned || 0;
        if (totalEarned === 100) {
            achievements.push({
                id: 'first_money',
                name: '初めての100円！',
                description: '100ポイント達成でお小遣いゲット',
                icon: '💰'
            });
        } else if (totalEarned === 1000) {
            achievements.push({
                id: 'money_1000',
                name: '貯金マスター',
                description: '合計1000円獲得',
                icon: '💎'
            });
        }
        
        // 実績を記録
        if (achievements.length > 0) {
            this.achievementData.unlocked = this.achievementData.unlocked || [];
            achievements.forEach(ach => {
                if (!this.achievementData.unlocked.find(a => a.id === ach.id)) {
                    ach.unlockedAt = new Date().toISOString();
                    this.achievementData.unlocked.push(ach);
                }
            });
            this.saveAchievementData();
        }
        
        return achievements;
    }

    // 統計情報取得
    getStatistics() {
        const results = this.pointsData.dailyResults || [];
        const totalDays = results.length;
        
        if (totalDays === 0) {
            return {
                totalDays: 0,
                averageScore: 0,
                totalPoints: 0,
                totalEarned: 0,
                currentStreak: 0,
                bestStreak: 0,
                achievements: []
            };
        }
        
        const totalCorrect = results.reduce((sum, r) => sum + r.correctCount, 0);
        const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0);
        
        return {
            totalDays: totalDays,
            averageScore: Math.round((totalCorrect / totalQuestions) * 100),
            totalPoints: this.pointsData.totalPoints || 0,
            totalEarned: this.pointsData.totalEarned || 0,
            currentStreak: this.getCurrentStreak(),
            bestStreak: this.getBestStreak(),
            achievements: this.achievementData.unlocked || [],
            recentResults: results.slice(-7), // 直近7日分
            monthlyChart: this.getMonthlyChart()
        };
    }

    // 月間チャート用データ
    getMonthlyChart() {
        const results = this.pointsData.dailyResults || [];
        const today = new Date();
        const chart = [];
        
        for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateKey = this.getDateKey(date);
            
            const dayResult = results.find(r => r.date === dateKey);
            chart.push({
                date: dateKey,
                points: dayResult ? dayResult.totalPoints : 0,
                studied: !!dayResult
            });
        }
        
        return chart;
    }

    // 最長連続記録
    getBestStreak() {
        // 実装は省略（getCurrentStreakと同様のロジックで最大値を保持）
        return this.achievementData.bestStreak || this.getCurrentStreak();
    }

    // 親からの応援メッセージ
    sendEncouragement(message, sender = "お母さん") {
        const encouragement = {
            message: message,
            sender: sender,
            timestamp: new Date().toISOString(),
            read: false
        };
        
        this.pointsData.encouragements = this.pointsData.encouragements || [];
        this.pointsData.encouragements.push(encouragement);
        this.savePointsData();
        
        return true;
    }

    // サプライズデー（ランダムでポイント2倍）
    checkSurpriseDay() {
        const today = new Date();
        const dayOfMonth = today.getDate();
        
        // 月に3回程度、特定の日にサプライズ
        const surpriseDays = [7, 17, 27];
        return surpriseDays.includes(dayOfMonth);
    }

    // ユーティリティ関数
    getDateKey(date) {
        return date.toISOString().split('T')[0];
    }

    // データ保存・読み込み
    loadPointsData() {
        try {
            return JSON.parse(localStorage.getItem('kanjiRewardPoints')) || {};
        } catch {
            return {};
        }
    }

    savePointsData() {
        try {
            localStorage.setItem('kanjiRewardPoints', JSON.stringify(this.pointsData));
        } catch (error) {
            console.error('ポイントデータ保存エラー:', error);
        }
    }

    loadAchievementData() {
        try {
            return JSON.parse(localStorage.getItem('kanjiAchievements')) || {};
        } catch {
            return {};
        }
    }

    saveAchievementData() {
        try {
            localStorage.setItem('kanjiAchievements', JSON.stringify(this.achievementData));
        } catch (error) {
            console.error('実績データ保存エラー:', error);
        }
    }

    // 100円獲得イベント
    triggerMoneyEarnedEvent() {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('moneyEarned', {
                detail: {
                    amount: 100,
                    totalEarned: this.pointsData.totalEarned,
                    date: new Date()
                }
            }));
        }
    }

    // データリセット（月初めなど）
    resetMonthlyData() {
        const stats = this.getStatistics();
        
        // 月間記録を保存
        this.pointsData.monthlyHistory = this.pointsData.monthlyHistory || [];
        this.pointsData.monthlyHistory.push({
            month: new Date().toISOString().slice(0, 7),
            stats: stats
        });
        
        // 現在のポイントをリセット（100円単位で繰り越し）
        this.pointsData.totalPoints = this.pointsData.totalPoints % 100;
        this.pointsData.dailyResults = [];
        
        this.savePointsData();
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KanjiRewardSystem;
}