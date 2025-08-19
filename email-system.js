// 自動メール送信システム

class EmailReportSystem {
    constructor() {
        this.parentEmail = 'greenroom51@gmail.com';
        this.emailService = new EmailService();
        this.reportGenerator = new DailyReportGenerator();
    }

    // 学習達成時の自動チェック
    checkDailyGoalAndSendEmail() {
        const today = new Date().toDateString();
        const dailyData = this.getDailyStudyData();

        // 1日の目標達成判定（30分以上または問題数12問以上）
        const goalAchieved = dailyData.studyMinutes >= 30 || dailyData.totalQuestions >= 12;
        
        if (goalAchieved && !dailyData.emailSent) {
            this.sendDailyReport(dailyData);
            this.markEmailAsSent(today);
        }
    }

    // 1日の学習データ収集
    getDailyStudyData() {
        const today = new Date().toDateString();
        const todayData = JSON.parse(localStorage.getItem(`dailyData_${today}`)) || {};
        
        return {
            date: today,
            studyMinutes: userData.studyMinutesToday || 0,
            totalQuestions: userData.questionsAnswered || 0,
            correctAnswers: userData.correctAnswers || 0,
            accuracy: userData.questionsAnswered > 0 
                ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100) 
                : 0,
            kanjiQuestions: todayData.kanjiQuestions || 0,
            readingQuestions: todayData.readingQuestions || 0,
            grammarQuestions: todayData.grammarQuestions || 0,
            writingQuestions: todayData.writingQuestions || 0,
            incorrectProblems: todayData.incorrectProblems || [],
            weaknessAreas: this.analyzeWeakness(),
            currentLevel: userData.level || 1,
            totalPoints: userData.totalPoints || 0,
            streakDays: userData.streakDays || 0,
            emailSent: todayData.emailSent || false
        };
    }

    // 弱点分析
    analyzeWeakness() {
        const areas = [];
        const kanjiAccuracy = (userData.kanjiCorrect || 0) / Math.max(userData.kanjiTotal || 1, 1);
        const readingAccuracy = (userData.readingCorrect || 0) / Math.max(userData.readingTotal || 1, 1);
        const grammarAccuracy = (userData.grammarCorrect || 0) / Math.max(userData.grammarTotal || 1, 1);

        if (kanjiAccuracy < 0.7) areas.push('漢字');
        if (readingAccuracy < 0.7) areas.push('読解');
        if (grammarAccuracy < 0.7) areas.push('文法');

        return areas.length > 0 ? areas : ['バランス良く学習中'];
    }

    // 日報生成
    generateDailyReport(dailyData) {
        const reportDate = new Date(dailyData.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });

        const encouragementMessage = this.getEncouragementMessage(dailyData);
        const tomorrowPlan = this.getTomorrowPlan(dailyData);

        return {
            subject: `📚【合格への道】${reportDate} 学習レポート`,
            body: `
【${reportDate} 学習レポート】

お疲れさまでした！今日も頑張って学習しました。

━━━━━━━━━━━━━━━━━━━━━━
📊 今日の学習成果
━━━━━━━━━━━━━━━━━━━━━━
🕐 学習時間: ${dailyData.studyMinutes}分
📝 解いた問題数: ${dailyData.totalQuestions}問
✅ 正解数: ${dailyData.correctAnswers}問
📈 正答率: ${dailyData.accuracy}%
⭐ 獲得ポイント: ${dailyData.totalPoints}pt
🔥 継続学習: ${dailyData.streakDays}日連続
📊 現在のレベル: Lv.${dailyData.currentLevel}

━━━━━━━━━━━━━━━━━━━━━━
📋 分野別学習状況
━━━━━━━━━━━━━━━━━━━━━━
📝 漢字練習: ${dailyData.kanjiQuestions}問
📖 読解問題: ${dailyData.readingQuestions}問  
💬 文法・語彙: ${dailyData.grammarQuestions}問
✍️ 記述問題: ${dailyData.writingQuestions}問

━━━━━━━━━━━━━━━━━━━━━━
⚠️ 今日の課題・弱点
━━━━━━━━━━━━━━━━━━━━━━
${dailyData.weaknessAreas.length > 0 
    ? `重点強化分野: ${dailyData.weaknessAreas.join('、')}`
    : 'バランス良く学習できています！'}

${dailyData.incorrectProblems.length > 0 
    ? `間違えた問題:\n${dailyData.incorrectProblems.map(p => `・${p.question} (正解: ${p.correctAnswer})`).join('\n')}`
    : '全問正解！素晴らしい成績です。'}

━━━━━━━━━━━━━━━━━━━━━━
💡 学習アドバイス
━━━━━━━━━━━━━━━━━━━━━━
${encouragementMessage}

━━━━━━━━━━━━━━━━━━━━━━
🎯 明日の学習計画
━━━━━━━━━━━━━━━━━━━━━━
${tomorrowPlan}

━━━━━━━━━━━━━━━━━━━━━━
📈 合格への道のり
━━━━━━━━━━━━━━━━━━━━━━
目標: 大手門学院中学 (偏差値45)
現在の実力: ${this.estimateCurrentLevel(dailyData)}
合格まで: ${this.getDaysToExam()}日

毎日の積み重ねが確実に力になっています！
継続して頑張りましょう。

📱 アプリ: https://shiki0138.github.io/education/

━━━━━━━━━━━━━━━━━━━━━━
「合格への道」学習アプリより自動送信
送信日時: ${new Date().toLocaleString('ja-JP')}
━━━━━━━━━━━━━━━━━━━━━━
            `.trim()
        };
    }

    // 励ましメッセージ生成
    getEncouragementMessage(dailyData) {
        if (dailyData.accuracy >= 90) {
            return "🏆 素晴らしい！完璧に近い正答率です。この調子で難しい問題にも挑戦しましょう。";
        } else if (dailyData.accuracy >= 75) {
            return "😊 とても良い成績です！安定した学習ができています。継続が力になります。";
        } else if (dailyData.accuracy >= 60) {
            return "💪 頑張っています！もう少し復習を増やして理解を深めましょう。";
        } else if (dailyData.accuracy >= 40) {
            return "📚 基礎固めを重視しましょう。焦らず、確実に一歩ずつ進んでいけば必ず向上します。";
        } else {
            return "🌱 今日からが本当のスタートです！毎日続けることが何より大切です。応援しています。";
        }
    }

    // 明日の学習計画
    getTomorrowPlan(dailyData) {
        const plans = [];
        
        if (dailyData.weaknessAreas.includes('漢字')) {
            plans.push("📝 漢字練習を重点的に（15-20分）");
        }
        if (dailyData.weaknessAreas.includes('読解')) {
            plans.push("📖 読解問題を丁寧に（20-25分）");
        }
        if (dailyData.weaknessAreas.includes('文法')) {
            plans.push("💬 文法・敬語を復習（10-15分）");
        }
        
        if (plans.length === 0) {
            plans.push("📚 バランス良く全分野を学習（60分）");
        }
        
        plans.push("✍️ 記述問題に挑戦（10-15分）");
        plans.push("🔄 間違えた問題の復習（5-10分）");
        
        return plans.join('\n');
    }

    // 現在レベル推定
    estimateCurrentLevel(dailyData) {
        if (dailyData.accuracy >= 85) return "偏差値50以上（関西大倉中学圏内）";
        if (dailyData.accuracy >= 70) return "偏差値45-50（大手門学院中学圏内）";
        if (dailyData.accuracy >= 55) return "偏差値40-45（あと少しで目標達成）";
        if (dailyData.accuracy >= 40) return "偏差値35-40（基礎固めが必要）";
        return "偏差値35未満（基礎からしっかり学習）";
    }

    // 入試までの日数計算
    getDaysToExam() {
        const examDate = new Date('2025-01-15'); // 一般的な中学入試日
        const today = new Date();
        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
    }

    // メール送信実行
    async sendDailyReport(dailyData) {
        try {
            const report = this.generateDailyReport(dailyData);
            const success = await this.emailService.sendEmail({
                to: this.parentEmail,
                subject: report.subject,
                body: report.body
            });

            if (success) {
                console.log('📧 日報送信完了:', this.parentEmail);
                this.showEmailConfirmation(true);
            } else {
                console.error('📧 日報送信失敗');
                this.showEmailConfirmation(false);
            }
        } catch (error) {
            console.error('メール送信エラー:', error);
            this.showEmailConfirmation(false);
        }
    }

    // メール送信完了フラグ
    markEmailAsSent(date) {
        const todayData = JSON.parse(localStorage.getItem(`dailyData_${date}`)) || {};
        todayData.emailSent = true;
        localStorage.setItem(`dailyData_${date}`, JSON.stringify(todayData));
    }

    // 送信確認表示
    showEmailConfirmation(success) {
        const message = success 
            ? '📧 保護者に日報を送信しました！' 
            : '❌ メール送信に失敗しました。ネット接続を確認してください。';
        
        // UI通知
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${success ? '#28a745' : '#dc3545'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 1000;
            font-size: 14px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // 学習データ更新（問題解答時に呼び出し）
    updateDailyProgress(category, isCorrect, problemData) {
        const today = new Date().toDateString();
        const dailyData = JSON.parse(localStorage.getItem(`dailyData_${today}`)) || {
            kanjiQuestions: 0,
            readingQuestions: 0,
            grammarQuestions: 0,
            writingQuestions: 0,
            incorrectProblems: [],
            emailSent: false
        };

        // 分野別問題数更新
        if (category === 'kanji') dailyData.kanjiQuestions++;
        if (category === 'reading') dailyData.readingQuestions++;
        if (category === 'grammar') dailyData.grammarQuestions++;
        if (category === 'writing') dailyData.writingQuestions++;

        // 間違えた問題を記録
        if (!isCorrect && problemData) {
            dailyData.incorrectProblems.push({
                category: category,
                question: problemData.question || '問題内容不明',
                correctAnswer: problemData.options ? problemData.options[problemData.correct] : '正解不明',
                studentAnswer: problemData.studentAnswer || '未記録',
                time: new Date().toLocaleTimeString('ja-JP')
            });
        }

        localStorage.setItem(`dailyData_${today}`, JSON.stringify(dailyData));

        // 目標達成チェック
        this.checkDailyGoalAndSendEmail();
    }
}

// メール送信サービス（複数の方法を提供）
class EmailService {
    constructor() {
        this.methods = ['emailjs', 'formspree', 'netlify'];
    }

    async sendEmail(emailData) {
        // 方法1: EmailJS（推奨）
        if (typeof emailjs !== 'undefined') {
            return await this.sendViaEmailJS(emailData);
        }

        // 方法2: Formspree
        if (this.isFormspreeAvailable()) {
            return await this.sendViaFormspree(emailData);
        }

        // 方法3: Netlify Functions
        if (this.isNetlifyAvailable()) {
            return await this.sendViaNetlify(emailData);
        }

        // 方法4: ブラウザのメールクライアント起動
        return this.sendViaMailto(emailData);
    }

    // EmailJS使用（最も推奨）
    async sendViaEmailJS(emailData) {
        try {
            const templateParams = {
                to_email: emailData.to,
                subject: emailData.subject,
                message: emailData.body,
                from_name: '合格への道アプリ'
            };

            // EmailJSの設定が必要（サービスID、テンプレートID、ユーザーID）
            const response = await emailjs.send(
                'service_education', // サービスID
                'template_daily_report', // テンプレートID
                templateParams,
                'user_education_app' // ユーザーID
            );

            return response.status === 200;
        } catch (error) {
            console.error('EmailJS送信エラー:', error);
            return false;
        }
    }

    // Formspree使用（無料枠あり）
    async sendViaFormspree(emailData) {
        try {
            const response = await fetch('https://formspree.io/f/xpzgkqyw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailData.to,
                    subject: emailData.subject,
                    message: emailData.body
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Formspree送信エラー:', error);
            return false;
        }
    }

    // ブラウザのメールクライアント起動（確実に動作）
    sendViaMailto(emailData) {
        const subject = encodeURIComponent(emailData.subject);
        const body = encodeURIComponent(emailData.body);
        const mailtoUrl = `mailto:${emailData.to}?subject=${subject}&body=${body}`;
        
        // メールクライアントを開く
        window.open(mailtoUrl);
        
        // ユーザーに確認
        const sent = confirm('メールクライアントが開きました。\nメールを送信できましたか？');
        return sent;
    }

    // 利用可能性チェック
    isFormspreeAvailable() {
        return true; // Formspreeは常に利用可能
    }

    isNetlifyAvailable() {
        return window.location.hostname.includes('netlify');
    }
}

// 日報生成器
class DailyReportGenerator {
    generateWeeklyTrend(days = 7) {
        const trends = [];
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toDateString();
            const data = JSON.parse(localStorage.getItem(`dailyData_${dateStr}`)) || {};
            
            trends.push({
                date: date.toLocaleDateString('ja-JP'),
                minutes: data.studyMinutes || 0,
                accuracy: data.accuracy || 0,
                questions: data.totalQuestions || 0
            });
        }
        return trends;
    }

    generateProgressChart() {
        const trend = this.generateWeeklyTrend();
        return trend.map(day => 
            `${day.date}: ${day.minutes}分 (正答率${day.accuracy}%)`
        ).join('\n');
    }
}

// グローバルインスタンス
const emailReportSystem = new EmailReportSystem();

// 問題解答時に呼び出す関数（既存の回答処理に追加）
function recordAnswer(category, isCorrect, problemData) {
    emailReportSystem.updateDailyProgress(category, isCorrect, problemData);
}

// 手動でレポート送信（テスト用）
function sendTestReport() {
    const dailyData = emailReportSystem.getDailyStudyData();
    emailReportSystem.sendDailyReport(dailyData);
}

// 60分達成時の自動チェック
function checkDailyGoal() {
    emailReportSystem.checkDailyGoalAndSendEmail();
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        EmailReportSystem, 
        EmailService, 
        DailyReportGenerator 
    };
}