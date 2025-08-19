// 楽しい演出エフェクトシステム

class FunEffectsSystem {
    constructor() {
        this.mascotMessages = [
            "がんばって！", "すごいね！", "その調子！", "集中集中！",
            "あと少し！", "君ならできる！", "ファイト！", "いいね〜！",
            "天才かも？", "やったね！", "素晴らしい！", "最高だよ！"
        ];
        this.successSounds = ['🎉', '🎊', '✨', '⭐', '🌟', '💫'];
        this.init();
    }

    init() {
        this.createMascot();
        this.createParticleSystem();
        this.createSoundEffects();
        this.startBackgroundEffects();
    }

    // マスコットキャラクター作成
    createMascot() {
        const mascotContainer = document.createElement('div');
        mascotContainer.className = 'mascot-container';
        mascotContainer.innerHTML = `
            <div class="mascot" onclick="funEffects.mascotTalk()">
                🐱
            </div>
            <div class="mascot-speech" id="mascotSpeech"></div>
        `;
        document.body.appendChild(mascotContainer);

        // 定期的にマスコットが話す
        setInterval(() => {
            if (Math.random() < 0.3) { // 30%の確率
                this.mascotTalk();
            }
        }, 30000); // 30秒ごと
    }

    // マスコットの発言
    mascotTalk() {
        const speech = document.getElementById('mascotSpeech');
        const message = this.mascotMessages[Math.floor(Math.random() * this.mascotMessages.length)];
        
        speech.textContent = message;
        speech.classList.add('show');

        // マスコットアニメーション
        const mascot = document.querySelector('.mascot');
        mascot.style.animation = 'none';
        setTimeout(() => {
            mascot.style.animation = 'mascotFloat 4s ease-in-out infinite';
        }, 100);

        setTimeout(() => {
            speech.classList.remove('show');
        }, 3000);
    }

    // パーティクルシステム
    createParticleSystem() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        // 定期的にパーティクルを生成
        setInterval(() => {
            if (Math.random() < 0.7) {
                this.createParticle();
            }
        }, 2000);
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        const colors = ['#ffd93d', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.querySelector('.particles').appendChild(particle);

        // パーティクルを削除
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // 正解時の爆発エフェクト
    showSuccessBurst() {
        const burst = document.createElement('div');
        burst.className = 'success-burst';
        
        const emojis = ['🎉', '🎊', '✨', '⭐', '🌟', '💫', '🎈', '🎁'];
        
        for (let i = 0; i < 8; i++) {
            const item = document.createElement('div');
            item.className = 'burst-item';
            item.textContent = emojis[i % emojis.length];
            item.style.transform = `rotate(${i * 45}deg)`;
            item.style.animationDelay = `${i * 0.1}s`;
            burst.appendChild(item);
        }

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 2000);
    }

    // レベルアップエフェクト
    showLevelUpEffect() {
        const effect = document.createElement('div');
        effect.className = 'level-up-effect';
        effect.textContent = '🎊 LEVEL UP! 🎊';
        document.body.appendChild(effect);

        // コンフェッティ追加
        this.showConfetti();

        setTimeout(() => {
            effect.remove();
        }, 2000);
    }

    // コンフェッティエフェクト
    showConfetti() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 1 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }, i * 100);
        }
    }

    // 連続正解エフェクト
    showComboEffect(comboCount) {
        if (comboCount >= 3) {
            const combo = document.createElement('div');
            combo.style.cssText = `
                position: fixed;
                top: 30%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 36px;
                font-weight: bold;
                color: #e17055;
                z-index: 9999;
                animation: comboAppear 1.5s ease-out forwards;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            `;
            combo.textContent = `🔥 ${comboCount}連続正解！ 🔥`;

            const style = document.createElement('style');
            style.textContent = `
                @keyframes comboAppear {
                    0% { opacity: 0; transform: translateX(-50%) scale(0.5) rotate(-10deg); }
                    50% { opacity: 1; transform: translateX(-50%) scale(1.1) rotate(5deg); }
                    100% { opacity: 0; transform: translateX(-50%) scale(1.2) rotate(0deg); }
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(combo);

            setTimeout(() => {
                combo.remove();
                style.remove();
            }, 1500);
        }
    }

    // 問題完了時のお祝い
    showCompletionCelebration() {
        // 花火エフェクト
        this.showFireworks();
        
        // 達成メッセージ
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #fd79a8, #fdcb6e);
            color: white;
            padding: 30px 40px;
            border-radius: 25px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 15px 35px rgba(253, 121, 168, 0.4);
            animation: celebrationPop 3s ease-out forwards;
        `;
        celebration.innerHTML = `
            <div style="font-size: 60px; margin-bottom: 15px;">🏆</div>
            <div>おめでとう！</div>
            <div style="font-size: 18px; margin-top: 10px;">今日の勉強完了！</div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes celebrationPop {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(celebration);

        setTimeout(() => {
            celebration.remove();
            style.remove();
        }, 3000);
    }

    // 花火エフェクト
    showFireworks() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.style.cssText = `
                    position: fixed;
                    top: ${Math.random() * 50 + 20}%;
                    left: ${Math.random() * 80 + 10}%;
                    font-size: 40px;
                    z-index: 9999;
                    animation: fireworkExplode 2s ease-out forwards;
                    pointer-events: none;
                `;
                firework.textContent = '💥';

                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fireworkExplode {
                        0% { opacity: 0; transform: scale(0); }
                        20% { opacity: 1; transform: scale(1.2); }
                        40% { opacity: 1; transform: scale(1); }
                        100% { opacity: 0; transform: scale(0.8); }
                    }
                `;
                document.head.appendChild(style);

                document.body.appendChild(firework);

                setTimeout(() => {
                    firework.remove();
                    style.remove();
                }, 2000);
            }, i * 400);
        }
    }

    // 音声エフェクト（ブラウザ音声API使用）
    createSoundEffects() {
        // Web Audio APIを使用した音声生成
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            this.audioContext = new (AudioContext || webkitAudioContext)();
        }
    }

    // 正解音
    playCorrectSound() {
        if (this.audioContext) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, this.audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.5);
        }
    }

    // 不正解音
    playIncorrectSound() {
        if (this.audioContext) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(220, this.audioContext.currentTime); // A3
            oscillator.frequency.setValueAtTime(196, this.audioContext.currentTime + 0.2); // G3
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.4);
        }
    }

    // レベルアップ音
    playLevelUpSound() {
        if (this.audioContext) {
            const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88]; // C major scale
            
            notes.forEach((frequency, index) => {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                    
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.3);
                }, index * 100);
            });
        }
    }

    // ボタンホバーエフェクト強化
    enhanceButtonEffects() {
        const buttons = document.querySelectorAll('.menu-btn, .answer-options button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.createSparkles(button);
            });
        });
    }

    // きらきらエフェクト
    createSparkles(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'magic-sparkle';
                sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                sparkle.style.position = 'fixed';
                sparkle.style.zIndex = '9999';
                sparkle.style.pointerEvents = 'none';
                
                document.body.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.remove();
                }, 1500);
            }, i * 50);
        }
    }

    // 背景装飾エフェクト開始
    startBackgroundEffects() {
        // 浮遊する絵文字
        setInterval(() => {
            this.createFloatingEmoji();
        }, 5000);

        // 時々画面を華やかに
        setInterval(() => {
            if (Math.random() < 0.1) { // 10%の確率
                this.showRandomSurprise();
            }
        }, 45000); // 45秒ごと
    }

    // 浮遊絵文字
    createFloatingEmoji() {
        const emojis = ['📚', '✏️', '📝', '🌟', '⭐', '💯', '🏆', '🎯', '📖', '💡'];
        const emoji = document.createElement('div');
        emoji.style.cssText = `
            position: fixed;
            font-size: 24px;
            z-index: 1;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            bottom: -50px;
            animation: floatUp 8s linear forwards;
        `;
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
            style.remove();
        }, 8000);
    }

    // ランダムな驚き演出
    showRandomSurprise() {
        const surprises = [
            () => this.showRainbowWave(),
            () => this.showStarRain(),
            () => this.showColorChange(),
            () => this.showBounceText("Keep Going! 📚"),
            () => this.showSpinEffect()
        ];

        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        randomSurprise();
    }

    // 虹の波エフェクト
    showRainbowWave() {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                rgba(255,0,0,0.3), 
                rgba(255,165,0,0.3), 
                rgba(255,255,0,0.3), 
                rgba(0,255,0,0.3), 
                rgba(0,0,255,0.3), 
                rgba(75,0,130,0.3), 
                rgba(238,130,238,0.3));
            z-index: 9998;
            pointer-events: none;
            animation: rainbowSweep 3s ease-in-out forwards;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbowSweep {
                0% { left: -100%; }
                50% { left: 0%; }
                100% { left: 100%; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(wave);

        setTimeout(() => {
            wave.remove();
            style.remove();
        }, 3000);
    }

    // 星の雨
    showStarRain() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.style.cssText = `
                    position: fixed;
                    top: -20px;
                    left: ${Math.random() * 100}%;
                    font-size: 20px;
                    z-index: 9999;
                    pointer-events: none;
                    animation: starFall 2s linear forwards;
                `;
                star.textContent = '⭐';

                document.body.appendChild(star);

                setTimeout(() => {
                    star.remove();
                }, 2000);
            }, i * 100);
        }
    }

    // 色変化エフェクト
    showColorChange() {
        const app = document.getElementById('app');
        app.style.transition = 'all 2s ease';
        app.style.filter = 'hue-rotate(60deg) saturate(1.2)';

        setTimeout(() => {
            app.style.filter = 'none';
        }, 2000);
    }

    // 弾むテキスト
    showBounceText(text) {
        const bounceText = document.createElement('div');
        bounceText.style.cssText = `
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 28px;
            font-weight: bold;
            color: #e17055;
            z-index: 9999;
            pointer-events: none;
            animation: textBounce 2s ease-out forwards;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        `;
        bounceText.textContent = text;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes textBounce {
                0% { opacity: 0; transform: translateX(-50%) scale(0.5) translateY(50px); }
                50% { opacity: 1; transform: translateX(-50%) scale(1.2) translateY(-10px); }
                100% { opacity: 0; transform: translateX(-50%) scale(1) translateY(-50px); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(bounceText);

        setTimeout(() => {
            bounceText.remove();
            style.remove();
        }, 2000);
    }

    // スピン効果
    showSpinEffect() {
        const app = document.getElementById('app');
        app.style.transition = 'transform 1s ease';
        app.style.transform = 'rotate(360deg)';

        setTimeout(() => {
            app.style.transform = 'rotate(0deg)';
        }, 1000);
    }

    // 点数獲得エフェクト
    showPointsEarned(points) {
        const pointsEl = document.createElement('div');
        pointsEl.style.cssText = `
            position: fixed;
            top: 20%;
            right: 20px;
            font-size: 24px;
            font-weight: bold;
            color: #00b894;
            z-index: 9999;
            pointer-events: none;
            animation: pointsFloat 2s ease-out forwards;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        `;
        pointsEl.textContent = `+${points}pt! ✨`;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes pointsFloat {
                0% { opacity: 0; transform: translateY(0); }
                30% { opacity: 1; transform: translateY(-20px); }
                100% { opacity: 0; transform: translateY(-60px); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(pointsEl);

        setTimeout(() => {
            pointsEl.remove();
            style.remove();
        }, 2000);
    }

    // 学習開始時のやる気エフェクト
    showMotivationEffect() {
        const messages = [
            "🌟 よし！やるぞ〜！",
            "💪 今日も頑張ろう！", 
            "🎯 集中していこう！",
            "📚 勉強タイム開始！",
            "⚡ 気合いを入れて！"
        ];

        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showBounceText(message);
    }

    // 継続日数に応じた特別演出
    showStreakCelebration(days) {
        if (days % 7 === 0) { // 7日ごと
            this.showFireworks();
            this.showBounceText(`🔥 ${days}日連続！すごい！`);
        } else if (days % 3 === 0) { // 3日ごと
            this.showSuccessBurst();
            this.mascotTalk("連続学習がんばってるね！");
        }
    }

    // ページ読み込み完了時の演出
    showWelcomeAnimation() {
        // タイトルアニメーション
        const title = document.querySelector('.app-title');
        if (title) {
            title.style.animation = 'none';
            setTimeout(() => {
                title.style.animation = 'titleBounce 2s ease-in-out infinite';
            }, 100);
        }

        // ウェルカムメッセージ
        setTimeout(() => {
            this.mascotTalk("今日も一緒にがんばろう！");
        }, 1000);

        // パーティクル開始
        setTimeout(() => {
            this.createParticle();
        }, 2000);
    }
}

// 音声エフェクト追加CSS
const additionalStyles = `
    <style>
    @keyframes starFall {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }

    /* ホバー時の魔法エフェクト */
    .menu-btn:hover {
        animation: magicHover 0.6s ease-in-out;
    }

    @keyframes magicHover {
        0%, 100% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(60deg); }
    }

    /* 正解時のキラキラ */
    .answer-options button.correct::after {
        content: '✨ ✨ ✨';
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        animation: sparkleUp 1s ease-out;
    }

    @keyframes sparkleUp {
        0% { opacity: 0; transform: translateX(-50%) translateY(0); }
        50% { opacity: 1; transform: translateX(-50%) translateY(-15px); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-30px); }
    }

    /* 不正解時のゆらゆら */
    .answer-options button.incorrect {
        animation: incorrectWiggle 0.8s ease-in-out;
    }

    @keyframes incorrectWiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-3deg); }
        75% { transform: rotate(3deg); }
    }

    /* マウスに追従するキラキラ */
    .cursor-sparkle {
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #ffd93d, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkle 1s ease-out forwards;
    }

    /* 特別な日の装飾 */
    .special-day {
        position: relative;
    }

    .special-day::before {
        content: '🎊 🎉 🎊 🎉 🎊';
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 16px;
        animation: celebrationBanner 3s ease-in-out infinite;
    }

    @keyframes celebrationBanner {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
    </style>
`;

// スタイルを追加
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// グローバルインスタンス
const funEffects = new FunEffectsSystem();

// 既存の関数にエフェクトを統合
const originalShowAnswerFeedback = showAnswerFeedback;
window.showAnswerFeedback = function(isCorrect, correctAnswer, explanation, questionText) {
    // 音声エフェクト
    if (isCorrect) {
        funEffects.playCorrectSound();
        funEffects.showSuccessBurst();
        funEffects.showPointsEarned(10);
    } else {
        funEffects.playIncorrectSound();
    }
    
    // 元の関数を実行
    originalShowAnswerFeedback(isCorrect, correctAnswer, explanation, questionText);
};

// 学習開始時のエフェクト
const originalStartKanjiPractice = startKanjiPractice;
window.startKanjiPractice = function() {
    funEffects.showMotivationEffect();
    originalStartKanjiPractice();
};

// レベルアップ時のエフェクト
function showLevelUpEffect() {
    funEffects.showLevelUpEffect();
    funEffects.playLevelUpSound();
}

// 30分完了時の大々的な演出
function showDailyCompletionEffect() {
    funEffects.showCompletionCelebration();
    funEffects.showConfetti();
    setTimeout(() => {
        funEffects.mascotTalk("今日もお疲れさま！すごいね！");
    }, 1000);
}

// マウスカーソルエフェクト
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { // 10%の確率でキラキラ
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// ページ読み込み時の歓迎演出
window.addEventListener('load', () => {
    setTimeout(() => {
        funEffects.showWelcomeAnimation();
    }, 500);
});

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FunEffectsSystem };
}