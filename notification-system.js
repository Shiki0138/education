// 統合通知システム - 管理者への学習完了通知

class NotificationSystem {
    constructor(config = {}) {
        this.config = {
            lineToken: config.lineToken || null,
            slackWebhook: config.slackWebhook || null,
            discordWebhook: config.discordWebhook || null,
            googleSheetUrl: config.googleSheetUrl || null,
            enableLocalStorage: config.enableLocalStorage !== false,
            enableSound: config.enableSound !== false
        };
        
        this.notificationQueue = [];
        this.init();
    }

    init() {
        // 通知履歴の初期化
        if (this.config.enableLocalStorage) {
            this.loadNotificationHistory();
        }
        
        // PWA通知の準備
        if ('Notification' in window) {
            this.setupWebNotifications();
        }
    }

    // 学習完了時の統合通知
    async notifyStudyComplete(sessionData) {
        const notification = {
            type: 'study_complete',
            timestamp: new Date().toISOString(),
            data: {
                userName: sessionData.userName || '学習者',
                userId: sessionData.userId,
                date: sessionData.date,
                score: sessionData.correctCount,
                totalQuestions: sessionData.totalQuestions || 10,
                accuracy: Math.round((sessionData.correctCount / (sessionData.totalQuestions || 10)) * 100),
                earnedPoints: sessionData.earnedPoints,
                totalPoints: sessionData.totalPoints,
                streak: sessionData.streak || 0,
                studyTime: sessionData.studyTime || 0,
                categoryBreakdown: sessionData.categoryBreakdown || {}
            }
        };

        // 各プラットフォームに通知送信
        const promises = [];
        
        if (this.config.lineToken) {
            promises.push(this.sendLineNotify(notification));
        }
        
        if (this.config.slackWebhook) {
            promises.push(this.sendSlackNotification(notification));
        }
        
        if (this.config.discordWebhook) {
            promises.push(this.sendDiscordNotification(notification));
        }
        
        if (this.config.googleSheetUrl) {
            promises.push(this.sendToGoogleSheet(notification));
        }
        
        // ローカル通知
        promises.push(this.sendLocalNotification(notification));
        
        // サウンド再生
        if (this.config.enableSound) {
            this.playNotificationSound(notification.data.accuracy);
        }
        
        // 履歴保存
        this.saveNotificationHistory(notification);
        
        // 全通知を並列実行
        const results = await Promise.allSettled(promises);
        
        // エラーハンドリング
        results.forEach((result, index) => {
            if (result.status === 'rejected') {
                console.error(`通知エラー (${index}):`, result.reason);
            }
        });
        
        return notification;
    }

    // LINE Notify送信
    async sendLineNotify(notification) {
        const { data } = notification;
        const message = `
📚 学習完了通知

👦 ${data.userName}さんが学習を完了しました！
📅 ${new Date(data.date).toLocaleDateString('ja-JP')}
⏰ ${new Date().toLocaleTimeString('ja-JP')}

📊 成績
・正解数: ${data.score}/${data.totalQuestions}問
・正解率: ${data.accuracy}%
・獲得ポイント: ${data.earnedPoints}P
・累計ポイント: ${data.totalPoints}P
・連続日数: ${data.streak}日

📖 分野別成績
${this.formatCategoryBreakdown(data.categoryBreakdown)}

${data.accuracy >= 80 ? '🎉 素晴らしい成績です！' : '💪 明日も頑張りましょう！'}
`;

        try {
            const formData = new URLSearchParams();
            formData.append('message', message);
            
            const response = await fetch('https://notify-api.line.me/api/notify', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.lineToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            });
            
            if (!response.ok) {
                throw new Error(`LINE Notify error: ${response.status}`);
            }
            
            return { success: true, platform: 'LINE' };
        } catch (error) {
            throw new Error(`LINE通知失敗: ${error.message}`);
        }
    }

    // Slack通知送信
    async sendSlackNotification(notification) {
        const { data } = notification;
        
        const payload = {
            text: "📚 学習完了通知",
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🎓 国語学習システム - 学習完了レポート"
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*学習者:*\n${data.userName}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*日時:*\n${new Date().toLocaleString('ja-JP')}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*📊 成績サマリー*\n\`\`\`正解率: ${data.accuracy}% (${data.score}/${data.totalQuestions}問)\n獲得ポイント: ${data.earnedPoints}P\n連続学習: ${data.streak}日\`\`\``
                    }
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*📖 分野別成績*\n${this.formatCategoryBreakdownSlack(data.categoryBreakdown)}`
                    }
                }
            ],
            attachments: [{
                color: this.getScoreColor(data.accuracy),
                footer: "追手門学院中学入試対策システム",
                footer_icon: "https://example.com/icon.png",
                ts: Math.floor(Date.now() / 1000)
            }]
        };

        try {
            const response = await fetch(this.config.slackWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                throw new Error(`Slack webhook error: ${response.status}`);
            }
            
            return { success: true, platform: 'Slack' };
        } catch (error) {
            throw new Error(`Slack通知失敗: ${error.message}`);
        }
    }

    // Discord通知送信
    async sendDiscordNotification(notification) {
        const { data } = notification;
        
        const embed = {
            embeds: [{
                title: "📚 学習完了レポート",
                description: `**${data.userName}**さんが本日の学習を完了しました！`,
                color: this.getDiscordColor(data.accuracy),
                fields: [
                    {
                        name: "📊 正解率",
                        value: `${data.accuracy}%\n(${data.score}/${data.totalQuestions}問)`,
                        inline: true
                    },
                    {
                        name: "⭐ ポイント",
                        value: `+${data.earnedPoints}P\n累計: ${data.totalPoints}P`,
                        inline: true
                    },
                    {
                        name: "🔥 連続学習",
                        value: `${data.streak}日`,
                        inline: true
                    },
                    {
                        name: "📖 分野別成績",
                        value: this.formatCategoryBreakdownDiscord(data.categoryBreakdown),
                        inline: false
                    }
                ],
                thumbnail: {
                    url: this.getAchievementIcon(data.accuracy)
                },
                timestamp: new Date().toISOString(),
                footer: {
                    text: "追手門学院中学入試対策システム"
                }
            }]
        };

        try {
            const response = await fetch(this.config.discordWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(embed)
            });
            
            if (!response.ok) {
                throw new Error(`Discord webhook error: ${response.status}`);
            }
            
            return { success: true, platform: 'Discord' };
        } catch (error) {
            throw new Error(`Discord通知失敗: ${error.message}`);
        }
    }

    // Google Sheetsへの記録
    async sendToGoogleSheet(notification) {
        const { data } = notification;
        
        const payload = {
            timestamp: notification.timestamp,
            userName: data.userName,
            userId: data.userId,
            date: data.date,
            score: data.score,
            totalQuestions: data.totalQuestions,
            accuracy: data.accuracy,
            earnedPoints: data.earnedPoints,
            totalPoints: data.totalPoints,
            streak: data.streak,
            studyTime: data.studyTime,
            kanjiScore: data.categoryBreakdown['漢字・語彙']?.accuracy || 0,
            readingScore: data.categoryBreakdown['文章読解']?.accuracy || 0,
            grammarScore: data.categoryBreakdown['文法・敬語']?.accuracy || 0,
            idiomScore: data.categoryBreakdown['ことわざ・慣用句']?.accuracy || 0
        };

        try {
            const response = await fetch(this.config.googleSheetUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            return { success: true, platform: 'GoogleSheets' };
        } catch (error) {
            throw new Error(`Google Sheets記録失敗: ${error.message}`);
        }
    }

    // ブラウザ通知
    async sendLocalNotification(notification) {
        if (!('Notification' in window)) {
            return { success: false, platform: 'Local', reason: 'Not supported' };
        }

        if (Notification.permission !== 'granted') {
            return { success: false, platform: 'Local', reason: 'Permission denied' };
        }

        const { data } = notification;
        
        try {
            const notif = new Notification('学習完了！', {
                body: `${data.userName}さんが学習を完了しました\n正解率: ${data.accuracy}%`,
                icon: '/icon-192x192.png',
                badge: '/badge-72x72.png',
                tag: 'study-complete',
                requireInteraction: true,
                actions: [
                    { action: 'view', title: '詳細を見る' }
                ]
            });
            
            notif.onclick = () => {
                window.focus();
                notif.close();
            };
            
            return { success: true, platform: 'Local' };
        } catch (error) {
            throw new Error(`ローカル通知失敗: ${error.message}`);
        }
    }

    // Web通知の許可設定
    async setupWebNotifications() {
        if (Notification.permission === 'default') {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        }
        return Notification.permission === 'granted';
    }

    // 通知音の再生
    playNotificationSound(accuracy) {
        const audio = new Audio();
        
        if (accuracy === 100) {
            audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE';
        } else if (accuracy >= 80) {
            audio.src = 'data:audio/wav;base64,UklGRvoEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQoEAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE';
        } else {
            audio.src = 'data:audio/wav;base64,UklGRkQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAFAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn';
        }
        
        audio.volume = 0.5;
        audio.play().catch(e => console.log('音声再生エラー:', e));
    }

    // 分野別成績のフォーマット
    formatCategoryBreakdown(breakdown) {
        return Object.entries(breakdown).map(([category, data]) => {
            return `・${category}: ${data.accuracy}% (${data.correct}/${data.total}問)`;
        }).join('\n');
    }

    formatCategoryBreakdownSlack(breakdown) {
        return Object.entries(breakdown).map(([category, data]) => {
            const emoji = this.getCategoryEmoji(category);
            return `${emoji} ${category}: ${data.accuracy}% (${data.correct}/${data.total})`;
        }).join('\n');
    }

    formatCategoryBreakdownDiscord(breakdown) {
        return Object.entries(breakdown).map(([category, data]) => {
            const emoji = this.getCategoryEmoji(category);
            const bar = this.createProgressBar(data.accuracy);
            return `${emoji} **${category}**\n${bar} ${data.accuracy}%`;
        }).join('\n\n');
    }

    // ヘルパー関数
    getCategoryEmoji(category) {
        const emojis = {
            '漢字・語彙': '📝',
            '文章読解': '📖',
            '文法・敬語': '✏️',
            'ことわざ・慣用句': '💭'
        };
        return emojis[category] || '📚';
    }

    getScoreColor(accuracy) {
        if (accuracy >= 90) return '#22c55e';
        if (accuracy >= 70) return '#3b82f6';
        if (accuracy >= 50) return '#f59e0b';
        return '#ef4444';
    }

    getDiscordColor(accuracy) {
        if (accuracy >= 90) return 0x22c55e;
        if (accuracy >= 70) return 0x3b82f6;
        if (accuracy >= 50) return 0xf59e0b;
        return 0xef4444;
    }

    getAchievementIcon(accuracy) {
        if (accuracy === 100) return 'https://example.com/trophy-gold.png';
        if (accuracy >= 80) return 'https://example.com/trophy-silver.png';
        if (accuracy >= 60) return 'https://example.com/trophy-bronze.png';
        return 'https://example.com/medal.png';
    }

    createProgressBar(percentage) {
        const filled = Math.floor(percentage / 10);
        const empty = 10 - filled;
        return '█'.repeat(filled) + '░'.repeat(empty);
    }

    // 履歴管理
    saveNotificationHistory(notification) {
        if (!this.config.enableLocalStorage) return;
        
        try {
            const history = JSON.parse(localStorage.getItem('notificationHistory') || '[]');
            history.unshift(notification);
            
            // 最新30件のみ保持
            if (history.length > 30) {
                history.length = 30;
            }
            
            localStorage.setItem('notificationHistory', JSON.stringify(history));
        } catch (error) {
            console.error('通知履歴保存エラー:', error);
        }
    }

    loadNotificationHistory() {
        try {
            return JSON.parse(localStorage.getItem('notificationHistory') || '[]');
        } catch {
            return [];
        }
    }

    // 特殊通知（満点、連続記録更新など）
    async sendSpecialNotification(type, data) {
        const messages = {
            perfect_score: {
                title: '🎉 満点達成！',
                body: `${data.userName}さんが満点を取りました！素晴らしい！`
            },
            streak_milestone: {
                title: '🔥 連続学習記録更新！',
                body: `${data.userName}さんが${data.streak}日連続学習を達成！`
            },
            points_milestone: {
                title: '💰 100円達成！',
                body: `${data.userName}さんが${Math.floor(data.totalPoints / 100)}個目の100円を獲得！`
            },
            level_up: {
                title: '⬆️ レベルアップ！',
                body: `${data.userName}さんがレベル${data.newLevel}に到達！`
            }
        };

        const message = messages[type];
        if (!message) return;

        // 特殊通知は全プラットフォームに送信
        const notification = {
            type: 'special',
            subtype: type,
            timestamp: new Date().toISOString(),
            data: {
                ...message,
                ...data
            }
        };

        // 各プラットフォームに応じた特殊処理
        if (this.config.lineToken) {
            // LINE スタンプ付き通知
            await this.sendLineNotifyWithSticker(notification);
        }

        if (this.config.slackWebhook) {
            // Slack メンション付き通知
            await this.sendSlackMention(notification);
        }

        return notification;
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NotificationSystem;
}