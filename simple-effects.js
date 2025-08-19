// シンプルで確実に動作する演出システム

// 正解・不正解演出（確実に動作）
function showSimpleAnswerEffect(isCorrect, correctAnswer, explanation, questionText) {
    // 既存の演出を削除
    const existingEffect = document.getElementById('simple-answer-effect');
    if (existingEffect) {
        existingEffect.remove();
    }

    // 新しい演出を作成
    const effect = document.createElement('div');
    effect.id = 'simple-answer-effect';
    effect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${isCorrect ? 'linear-gradient(135deg, #00b894, #00cec9)' : 'linear-gradient(135deg, #e17055, #d63031)'};
        color: white;
        padding: 30px 40px;
        border-radius: 20px;
        text-align: center;
        z-index: 10000;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        animation: effectPop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 350px;
        word-wrap: break-word;
    `;

    // 学年情報を取得
    const grade = getKanjiGrade ? getKanjiGrade(questionText) : '';

    effect.innerHTML = `
        <div style="font-size: 60px; margin-bottom: 15px;">
            ${isCorrect ? '🎉' : '😅'}
        </div>
        <div style="margin-bottom: 15px;">
            ${isCorrect ? '正解！' : '不正解'}
        </div>
        <div style="font-size: 18px; margin-bottom: 15px; background: rgba(255,255,255,0.2); padding: 10px; border-radius: 10px;">
            答え: ${correctAnswer}
        </div>
        ${grade ? `<div style="font-size: 14px; background: rgba(255,255,255,0.3); padding: 5px 15px; border-radius: 15px; margin-bottom: 15px; display: inline-block;">${grade}</div>` : ''}
        <div style="font-size: 14px; opacity: 0.9; line-height: 1.4;">
            ${explanation || (isCorrect ? 'よくできました！' : 'もう一度チャレンジしよう！')}
        </div>
    `;

    // スタイルを追加
    const styles = document.createElement('style');
    styles.textContent = `
        @keyframes effectPop {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(styles);

    document.body.appendChild(effect);

    // 正解時の追加エフェクト
    if (isCorrect) {
        // キラキラエフェクト
        createSparkleEffect();
        // ポイント表示
        showPointsEffect(10);
        // 音声（簡易版）
        playSimpleCorrectSound();
    } else {
        // 振動エフェクト（モバイル対応）
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
        // 音声（簡易版）
        playSimpleIncorrectSound();
    }

    // 3秒後に自動で削除
    setTimeout(() => {
        if (effect && effect.parentNode) {
            effect.remove();
        }
        if (styles && styles.parentNode) {
            styles.remove();
        }
    }, 2500);
}

// キラキラエフェクト
function createSparkleEffect() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                font-size: 30px;
                z-index: 9999;
                pointer-events: none;
                animation: sparkleAnimation 2s ease-out forwards;
            `;
            sparkle.textContent = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];

            const sparkleStyle = document.createElement('style');
            sparkleStyle.textContent = `
                @keyframes sparkleAnimation {
                    0% {
                        opacity: 0;
                        transform: scale(0) rotate(0deg);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1) rotate(180deg);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(0.5) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(sparkleStyle);

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
                sparkleStyle.remove();
            }, 2000);
        }, i * 100);
    }
}

// ポイント表示エフェクト
function showPointsEffect(points) {
    const pointsEl = document.createElement('div');
    pointsEl.style.cssText = `
        position: fixed;
        top: 30%;
        right: 20px;
        font-size: 28px;
        font-weight: bold;
        color: #00b894;
        z-index: 9999;
        pointer-events: none;
        animation: pointsAnimation 2s ease-out forwards;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        background: rgba(255,255,255,0.9);
        padding: 10px 20px;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,184,148,0.3);
    `;
    pointsEl.textContent = `+${points}pt! ✨`;

    const pointsStyle = document.createElement('style');
    pointsStyle.textContent = `
        @keyframes pointsAnimation {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0.5);
            }
            30% {
                opacity: 1;
                transform: translateY(-20px) scale(1.2);
            }
            100% {
                opacity: 0;
                transform: translateY(-60px) scale(1);
            }
        }
    `;
    document.head.appendChild(pointsStyle);

    document.body.appendChild(pointsEl);

    setTimeout(() => {
        pointsEl.remove();
        pointsStyle.remove();
    }, 2000);
}

// シンプルな音声エフェクト
function playSimpleCorrectSound() {
    // ブラウザの音声合成API使用
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('ピンポン');
        utterance.rate = 2;
        utterance.pitch = 2;
        utterance.volume = 0.3;
        speechSynthesis.speak(utterance);
    }
    
    // または視覚的な音声表現
    const soundEffect = document.createElement('div');
    soundEffect.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
        z-index: 9999;
        pointer-events: none;
        animation: soundWave 1s ease-out forwards;
    `;
    soundEffect.textContent = '♪♪♪';

    const soundStyle = document.createElement('style');
    soundStyle.textContent = `
        @keyframes soundWave {
            0% { opacity: 0; transform: translateX(-50%) scale(0.5); }
            50% { opacity: 1; transform: translateX(-50%) scale(1.2); }
            100% { opacity: 0; transform: translateX(-50%) scale(1.5); }
        }
    `;
    document.head.appendChild(soundStyle);

    document.body.appendChild(soundEffect);

    setTimeout(() => {
        soundEffect.remove();
        soundStyle.remove();
    }, 1000);
}

function playSimpleIncorrectSound() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('ブブー');
        utterance.rate = 1.5;
        utterance.pitch = 0.5;
        utterance.volume = 0.3;
        speechSynthesis.speak(utterance);
    }

    // 視覚的な音声表現
    const soundEffect = document.createElement('div');
    soundEffect.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 30px;
        z-index: 9999;
        pointer-events: none;
        animation: incorrectSound 1s ease-out forwards;
        color: #e17055;
    `;
    soundEffect.textContent = '💭 ドンマイ！';

    const soundStyle = document.createElement('style');
    soundStyle.textContent = `
        @keyframes incorrectSound {
            0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
            50% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(soundStyle);

    document.body.appendChild(soundEffect);

    setTimeout(() => {
        soundEffect.remove();
        soundStyle.remove();
    }, 1000);
}

// 30分完了時の大演出
function showThirtyMinuteComplete() {
    // 大きな完了メッセージ
    const completion = document.createElement('div');
    completion.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: completionFade 0.5s ease-out;
    `;

    completion.innerHTML = `
        <div style="background: linear-gradient(135deg, #fd79a8, #fdcb6e); 
                    color: white; padding: 50px; border-radius: 25px; 
                    text-align: center; max-width: 400px; 
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                    animation: completionPop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
            <div style="font-size: 100px; margin-bottom: 20px;">🏆</div>
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                すごい！<br>今日の勉強完了！
            </div>
            <div style="font-size: 18px; margin-bottom: 20px;">
                🎯 正答率: ${userData.questionsAnsweredToday > 0 ? Math.round((userData.correctAnswersToday / userData.questionsAnsweredToday) * 100) : 0}%<br>
                ⭐ 獲得ポイント: ${userData.totalPoints}pt<br>
                🔥 連続: ${userData.streakDays}日
            </div>
            <button onclick="this.parentElement.parentElement.remove(); createConfettiRain();" 
                    style="background: rgba(255,255,255,0.9); color: #fd79a8; border: none; 
                           border-radius: 15px; padding: 15px 30px; font-size: 18px; 
                           font-weight: bold; cursor: pointer; 
                           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                           transition: all 0.3s ease;">
                🎉 やったー！
            </button>
        </div>
    `;

    const completionStyles = document.createElement('style');
    completionStyles.textContent = `
        @keyframes completionFade {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes completionPop {
            0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
            50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
    `;
    document.head.appendChild(completionStyles);

    document.body.appendChild(completion);

    // 花火エフェクト
    createFireworks();

    // 5秒後に自動で閉じる
    setTimeout(() => {
        if (completion.parentNode) {
            completion.remove();
        }
        completionStyles.remove();
    }, 5000);
}

// 花火エフェクト
function createFireworks() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.cssText = `
                position: fixed;
                top: ${Math.random() * 60 + 20}%;
                left: ${Math.random() * 80 + 10}%;
                font-size: 50px;
                z-index: 9998;
                pointer-events: none;
                animation: fireworkBoom 2s ease-out forwards;
            `;
            firework.textContent = ['💥', '✨', '🎆', '🌟'][Math.floor(Math.random() * 4)];

            const fireworkStyle = document.createElement('style');
            fireworkStyle.textContent = `
                @keyframes fireworkBoom {
                    0% { opacity: 0; transform: scale(0); }
                    20% { opacity: 1; transform: scale(1.5); }
                    100% { opacity: 0; transform: scale(0.5); }
                }
            `;
            document.head.appendChild(fireworkStyle);

            document.body.appendChild(firework);

            setTimeout(() => {
                firework.remove();
                fireworkStyle.remove();
            }, 2000);
        }, i * 200);
    }
}

// コンフェッティの雨
function createConfettiRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -20px;
                left: ${Math.random() * 100}%;
                width: 15px;
                height: 15px;
                z-index: 9998;
                pointer-events: none;
                animation: confettiDrop 4s linear forwards;
            `;
            
            const colors = ['🎊', '🎉', '⭐', '✨', '🌟', '💫'];
            confetti.textContent = colors[Math.floor(Math.random() * colors.length)];

            const confettiStyle = document.createElement('style');
            confettiStyle.textContent = `
                @keyframes confettiDrop {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(confettiStyle);

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
                confettiStyle.remove();
            }, 4000);
        }, i * 50);
    }
}

// コンボエフェクト
function showComboEffect(comboCount) {
    if (comboCount < 3) return;

    const combo = document.createElement('div');
    combo.style.cssText = `
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 36px;
        font-weight: bold;
        color: #e17055;
        z-index: 9999;
        pointer-events: none;
        animation: comboShow 1.5s ease-out forwards;
        text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
        background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
        padding: 20px 30px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    combo.textContent = `🔥 ${comboCount}連続正解！ 🔥`;

    const comboStyle = document.createElement('style');
    comboStyle.textContent = `
        @keyframes comboShow {
            0% { opacity: 0; transform: translateX(-50%) scale(0.3) rotate(-15deg); }
            30% { opacity: 1; transform: translateX(-50%) scale(1.2) rotate(5deg); }
            70% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0deg); }
            100% { opacity: 0; transform: translateX(-50%) scale(0.8) rotate(0deg); }
        }
    `;
    document.head.appendChild(comboStyle);

    document.body.appendChild(combo);

    setTimeout(() => {
        combo.remove();
        comboStyle.remove();
    }, 1500);
}

// マスコット応援メッセージ
function showMascotMessage(message) {
    const mascot = document.createElement('div');
    mascot.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 20px;
        background: linear-gradient(135deg, #ffd93d, #ffb74d);
        color: #2d3436;
        padding: 15px 20px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 8px 25px rgba(255, 217, 61, 0.4);
        animation: mascotAppear 3s ease-out forwards;
        max-width: 200px;
    `;
    mascot.innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-bottom: 8px;">🐱</div>
        <div style="text-align: center;">${message}</div>
    `;

    const mascotStyle = document.createElement('style');
    mascotStyle.textContent = `
        @keyframes mascotAppear {
            0% { opacity: 0; transform: translateX(100px) scale(0.5); }
            20% { opacity: 1; transform: translateX(0) scale(1.1); }
            80% { opacity: 1; transform: translateX(0) scale(1); }
            100% { opacity: 0; transform: translateX(50px) scale(0.8); }
        }
    `;
    document.head.appendChild(mascotStyle);

    document.body.appendChild(mascot);

    setTimeout(() => {
        mascot.remove();
        mascotStyle.remove();
    }, 3000);
}

// 学習開始時の応援
function showStartMotivation() {
    showMascotMessage("一緒にがんばろう！");
}

// レベルアップ演出
function showLevelUpAnimation() {
    const levelUp = document.createElement('div');
    levelUp.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: bold;
        color: #ffd93d;
        z-index: 10000;
        pointer-events: none;
        animation: levelUpBounce 2s ease-out forwards;
        text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    `;
    levelUp.textContent = '🎊 レベルアップ！ 🎊';

    const levelStyle = document.createElement('style');
    levelStyle.textContent = `
        @keyframes levelUpBounce {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
        }
    `;
    document.head.appendChild(levelStyle);

    document.body.appendChild(levelUp);

    // コンフェッティも追加
    createConfettiRain();

    setTimeout(() => {
        levelUp.remove();
        levelStyle.remove();
    }, 2000);
}

// グローバル関数として登録
window.showSimpleAnswerEffect = showSimpleAnswerEffect;
window.createConfettiRain = createConfettiRain;
window.showComboEffect = showComboEffect;
window.showMascotMessage = showMascotMessage;
window.showStartMotivation = showStartMotivation;
window.showLevelUpAnimation = showLevelUpAnimation;
window.showThirtyMinuteComplete = showThirtyMinuteComplete;

// 連続正解カウンター
let consecutiveCorrect = 0;

// 正解・不正解処理の簡略版（既存関数を上書き）
function showAnswerFeedback(isCorrect, correctAnswer, explanation, questionText) {
    if (isCorrect) {
        consecutiveCorrect++;
        
        // コンボエフェクト
        if (consecutiveCorrect >= 3) {
            setTimeout(() => {
                showComboEffect(consecutiveCorrect);
            }, 1000);
        }
        
        // 5連続で特別メッセージ
        if (consecutiveCorrect === 5) {
            setTimeout(() => {
                showMascotMessage("5連続正解！\n君は天才だ！");
            }, 1500);
        }
    } else {
        consecutiveCorrect = 0;
        
        // 励ましメッセージ
        const encouragements = [
            "大丈夫！\n次はできる！",
            "間違いは\n成長のチャンス！",
            "諦めずに\n頑張ろう！",
            "練習すれば\n必ずできる！"
        ];
        const message = encouragements[Math.floor(Math.random() * encouragements.length)];
        setTimeout(() => {
            showMascotMessage(message);
        }, 1500);
    }

    // メインの演出を表示
    showSimpleAnswerEffect(isCorrect, correctAnswer, explanation, questionText);
}