// 報酬システムUI表示コンポーネント

class RewardSystemUI {
    constructor(rewardSystem) {
        this.rewardSystem = rewardSystem;
        this.initializeUI();
    }

    // UI初期化
    initializeUI() {
        // メインコンテナ作成
        this.createMainContainer();
        
        // イベントリスナー設定
        this.setupEventListeners();
        
        // 初期表示
        this.updateDisplay();
    }

    // メインコンテナ作成
    createMainContainer() {
        const container = document.createElement('div');
        container.id = 'reward-system-container';
        container.innerHTML = `
            <div class="reward-header">
                <h2>💰 漢字チャレンジ報酬システム</h2>
                <div class="current-status">
                    <div class="points-display">
                        <span class="label">現在のポイント:</span>
                        <span class="points-value" id="current-points">0</span>
                        <span class="points-unit">P</span>
                    </div>
                    <div class="money-display">
                        <span class="label">獲得した小遣い:</span>
                        <span class="money-value" id="total-earned">0</span>
                        <span class="money-unit">円</span>
                    </div>
                </div>
            </div>

            <div class="progress-section">
                <h3>100円まであと <span id="remaining-points">100</span> ポイント</h3>
                <div class="progress-bar">
                    <div class="progress-fill" id="progress-fill"></div>
                    <div class="progress-text" id="progress-text">0%</div>
                </div>
                <div class="days-estimate">
                    約 <span id="days-to-earn">5</span> 日で達成予定！
                </div>
            </div>

            <div class="today-result" id="today-result" style="display:none;">
                <h3>今日の結果</h3>
                <div class="result-details">
                    <div class="score-display">
                        <span class="score-label">正解率:</span>
                        <span class="score-value" id="today-score">0</span>%
                    </div>
                    <div class="points-earned">
                        <span class="earned-label">獲得ポイント:</span>
                        <span class="earned-value" id="today-points">0</span>P
                    </div>
                </div>
                <div class="encouragement" id="encouragement-message"></div>
            </div>

            <div class="streak-section">
                <h3>連続学習</h3>
                <div class="streak-display">
                    <div class="streak-flame">🔥</div>
                    <div class="streak-info">
                        <span class="streak-number" id="current-streak">0</span>
                        <span class="streak-label">日連続</span>
                    </div>
                </div>
                <div class="streak-bonus" id="streak-bonus-info"></div>
            </div>

            <div class="achievements-section">
                <h3>獲得した実績</h3>
                <div class="achievements-grid" id="achievements-grid">
                    <!-- 実績バッジがここに表示される -->
                </div>
            </div>

            <div class="monthly-chart">
                <h3>今月の学習記録</h3>
                <div class="chart-container" id="monthly-chart">
                    <!-- 月間チャートがここに表示される -->
                </div>
            </div>

            <div class="parent-message-section">
                <h3>応援メッセージ</h3>
                <div class="messages-list" id="messages-list">
                    <!-- 親からのメッセージがここに表示される -->
                </div>
            </div>
        `;

        // スタイルを追加
        this.addStyles();
        
        // DOMに追加
        document.body.appendChild(container);
    }

    // スタイル追加
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #reward-system-container {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 16px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .reward-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .reward-header h2 {
                color: #2c3e50;
                margin-bottom: 20px;
            }

            .current-status {
                display: flex;
                justify-content: center;
                gap: 40px;
                flex-wrap: wrap;
            }

            .points-display, .money-display {
                background: white;
                padding: 15px 25px;
                border-radius: 12px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .points-value, .money-value {
                font-size: 2em;
                font-weight: bold;
                color: #e74c3c;
                margin: 0 5px;
            }

            .progress-section {
                background: white;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 20px;
                text-align: center;
            }

            .progress-bar {
                width: 100%;
                height: 40px;
                background: #ecf0f1;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
                margin: 20px 0;
            }

            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #3498db, #2ecc71);
                width: 0%;
                transition: width 0.5s ease;
            }

            .progress-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: bold;
                color: #2c3e50;
            }

            .days-estimate {
                color: #7f8c8d;
                font-size: 1.1em;
            }

            .today-result {
                background: #fff;
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 20px;
                border: 2px solid #2ecc71;
            }

            .result-details {
                display: flex;
                justify-content: space-around;
                margin: 20px 0;
            }

            .score-value, .earned-value {
                font-size: 1.5em;
                font-weight: bold;
                color: #27ae60;
            }

            .encouragement {
                text-align: center;
                font-size: 1.2em;
                color: #e74c3c;
                margin-top: 15px;
                font-weight: 500;
            }

            .streak-section {
                background: white;
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 20px;
                text-align: center;
            }

            .streak-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                margin: 20px 0;
            }

            .streak-flame {
                font-size: 3em;
            }

            .streak-number {
                font-size: 2.5em;
                font-weight: bold;
                color: #e74c3c;
            }

            .streak-bonus {
                color: #f39c12;
                font-weight: 500;
            }

            .achievements-section {
                background: white;
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 20px;
            }

            .achievements-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }

            .achievement-badge {
                text-align: center;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 12px;
                cursor: pointer;
                transition: transform 0.2s;
            }

            .achievement-badge:hover {
                transform: scale(1.05);
            }

            .achievement-icon {
                font-size: 2.5em;
                margin-bottom: 5px;
            }

            .achievement-name {
                font-size: 0.9em;
                font-weight: 500;
            }

            .monthly-chart {
                background: white;
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 20px;
            }

            .chart-container {
                height: 200px;
                margin-top: 20px;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 2px;
            }

            .chart-bar {
                flex: 1;
                background: #3498db;
                border-radius: 4px 4px 0 0;
                min-height: 5px;
                position: relative;
                cursor: pointer;
            }

            .chart-bar:hover {
                background: #2980b9;
            }

            .chart-bar.no-study {
                background: #ecf0f1;
            }

            .parent-message-section {
                background: white;
                padding: 20px;
                border-radius: 12px;
            }

            .message-item {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 10px;
            }

            .message-sender {
                font-weight: bold;
                color: #e74c3c;
                margin-bottom: 5px;
            }

            .message-text {
                color: #2c3e50;
            }

            .message-time {
                font-size: 0.8em;
                color: #95a5a6;
                margin-top: 5px;
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }

            .celebration {
                animation: bounce 1s ease infinite;
            }

            @media (max-width: 600px) {
                #reward-system-container {
                    padding: 15px;
                }

                .current-status {
                    flex-direction: column;
                    gap: 15px;
                }

                .chart-container {
                    height: 150px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 表示更新
    updateDisplay() {
        const stats = this.rewardSystem.getStatistics();
        const currentPoints = stats.totalPoints % 100;
        const remainingPoints = 100 - currentPoints;
        
        // ポイント表示更新
        document.getElementById('current-points').textContent = stats.totalPoints;
        document.getElementById('total-earned').textContent = stats.totalEarned;
        document.getElementById('remaining-points').textContent = remainingPoints;
        document.getElementById('days-to-earn').textContent = Math.ceil(remainingPoints / 20);
        
        // プログレスバー更新
        const progressPercentage = currentPoints;
        document.getElementById('progress-fill').style.width = progressPercentage + '%';
        document.getElementById('progress-text').textContent = progressPercentage + '%';
        
        // 連続日数更新
        document.getElementById('current-streak').textContent = stats.currentStreak;
        this.updateStreakBonus(stats.currentStreak);
        
        // 実績表示
        this.displayAchievements(stats.achievements);
        
        // 月間チャート表示
        this.displayMonthlyChart(stats.monthlyChart);
    }

    // 今日の結果表示
    displayTodayResult(result) {
        const section = document.getElementById('today-result');
        section.style.display = 'block';
        
        document.getElementById('today-score').textContent = result.details.correctRate;
        document.getElementById('today-points').textContent = result.details.todayPoints;
        document.getElementById('encouragement-message').textContent = result.encouragement;
        
        // 特別なメッセージがある場合
        if (result.special) {
            this.showSpecialMessage(result.special);
        }
        
        if (result.perfect) {
            this.showPerfectAnimation();
        }
    }

    // 連続ボーナス情報更新
    updateStreakBonus(streak) {
        const bonusInfo = document.getElementById('streak-bonus-info');
        
        if (streak === 2) {
            bonusInfo.textContent = '明日で3日連続！+10ポイントボーナス！';
        } else if (streak === 4) {
            bonusInfo.textContent = '明日で5日連続！+20ポイントで100円達成！';
        } else if (streak >= 5) {
            bonusInfo.textContent = '素晴らしい継続力！🎉';
        } else {
            bonusInfo.textContent = '毎日続けてボーナスをゲット！';
        }
    }

    // 実績表示
    displayAchievements(achievements) {
        const grid = document.getElementById('achievements-grid');
        grid.innerHTML = '';
        
        achievements.forEach(ach => {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge';
            badge.innerHTML = `
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
            `;
            badge.title = ach.description;
            grid.appendChild(badge);
        });
    }

    // 月間チャート表示
    displayMonthlyChart(chartData) {
        const container = document.getElementById('monthly-chart');
        container.innerHTML = '';
        
        const maxPoints = Math.max(...chartData.map(d => d.points), 20);
        
        chartData.forEach(day => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar' + (day.studied ? '' : ' no-study');
            const height = day.points > 0 ? (day.points / maxPoints) * 100 : 0;
            bar.style.height = height + '%';
            bar.title = `${day.date}: ${day.points}ポイント`;
            container.appendChild(bar);
        });
    }

    // 特別メッセージ表示
    showSpecialMessage(message) {
        const notification = document.createElement('div');
        notification.className = 'special-notification celebration';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f39c12;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: bold;
            z-index: 1000;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // 満点アニメーション
    showPerfectAnimation() {
        const stars = ['⭐', '🌟', '✨', '💫', '⭐'];
        stars.forEach((star, index) => {
            setTimeout(() => {
                const starEl = document.createElement('div');
                starEl.textContent = star;
                starEl.style.cssText = `
                    position: fixed;
                    font-size: 2em;
                    top: 50%;
                    left: ${20 + index * 15}%;
                    transform: translateY(-50%);
                    animation: bounce 1s ease;
                    z-index: 1000;
                `;
                document.body.appendChild(starEl);
                
                setTimeout(() => starEl.remove(), 2000);
            }, index * 200);
        });
    }

    // 100円獲得アニメーション
    show100YenAnimation() {
        const celebration = document.createElement('div');
        celebration.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 5em;">💰</div>
                <h2 style="color: #f39c12;">100円ゲット！</h2>
                <p>おめでとう！よく頑張りました！</p>
            </div>
        `;
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 2000;
        `;
        
        document.body.appendChild(celebration);
        
        // 紙吹雪エフェクト
        this.createConfetti();
        
        setTimeout(() => {
            celebration.remove();
        }, 5000);
    }

    // 紙吹雪エフェクト
    createConfetti() {
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                transform: rotate(${Math.random() * 360}deg);
                animation: fall 3s linear;
                z-index: 1999;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }

    // イベントリスナー設定
    setupEventListeners() {
        // 100円獲得イベント
        window.addEventListener('moneyEarned', (event) => {
            this.show100YenAnimation();
            this.updateDisplay();
        });
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RewardSystemUI;
}