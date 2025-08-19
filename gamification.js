// ゲーミフィケーション強化システム

class GamificationSystem {
    constructor() {
        this.achievements = new AchievementSystem();
        this.rewards = new RewardSystem();
        this.challenges = new ChallengeSystem();
        this.streakCounter = 0;
        this.comboCount = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAchievements();
        this.loadProgress();
    }

    // イベントリスナー設定
    setupEventListeners() {
        // 正解時のコンボカウント
        document.addEventListener('answerCorrect', (e) => {
            this.comboCount++;
            this.handleCorrectAnswer(e.detail);
        });

        // 不正解時のコンボリセット
        document.addEventListener('answerIncorrect', (e) => {
            this.comboCount = 0;
            this.handleIncorrectAnswer(e.detail);
        });

        // 学習完了時
        document.addEventListener('studyComplete', (e) => {
            this.handleStudyComplete(e.detail);
        });
    }

    // 正解時の処理
    handleCorrectAnswer(data) {
        // コンボエフェクト
        if (this.comboCount >= 3) {
            funEffects.showComboEffect(this.comboCount);
            this.rewards.giveComboBonus(this.comboCount);
        }

        // 連続正解の特別演出
        if (this.comboCount === 5) {
            this.showSpecialEffect("🔥 Perfect Streak! 🔥");
            this.rewards.giveSpecialReward("perfect_streak");
        } else if (this.comboCount === 10) {
            this.showSpecialEffect("🏆 Amazing! Master Level! 🏆");
            this.rewards.giveSpecialReward("master_streak");
        }

        // 実績チェック
        this.achievements.checkAchievements();
    }

    // 不正解時の励まし
    handleIncorrectAnswer(data) {
        const encouragements = [
            "大丈夫！次はきっとできる！",
            "間違いは成長のチャンス！",
            "もう一度挑戦してみよう！",
            "諦めずに頑張ろう！",
            "練習すれば必ずできる！"
        ];

        setTimeout(() => {
            const message = encouragements[Math.floor(Math.random() * encouragements.length)];
            funEffects.mascotTalk(message);
        }, 1500);
    }

    // 学習完了時の大演出
    handleStudyComplete(data) {
        // 花火と音楽
        funEffects.showCompletionCelebration();
        
        // 特別メッセージ
        setTimeout(() => {
            this.showCompletionModal(data);
        }, 2000);

        // 実績解除チェック
        this.achievements.checkDailyAchievements(data);
    }

    // 完了モーダル表示
    showCompletionModal(data) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: modalFadeIn 0.5s ease-out;
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            background: linear-gradient(135deg, #fd79a8, #fdcb6e);
            color: white;
            padding: 40px;
            border-radius: 25px;
            text-align: center;
            max-width: 350px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: modalSlideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;

        const todayAccuracy = userData.questionsAnsweredToday > 0 
            ? Math.round((userData.correctAnswersToday / userData.questionsAnsweredToday) * 100) 
            : 0;

        content.innerHTML = `
            <div style="font-size: 80px; margin-bottom: 20px;">🏆</div>
            <h2 style="margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                今日の学習完了！
            </h2>
            <div style="font-size: 18px; margin-bottom: 20px;">
                🎯 正答率: ${todayAccuracy}%<br>
                ⭐ 獲得ポイント: ${userData.totalPoints}pt<br>
                🔥 連続: ${userData.streakDays}日
            </div>
            <div style="font-size: 16px; margin-bottom: 25px; opacity: 0.9;">
                ${this.getCompletionMessage(todayAccuracy)}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: rgba(255,255,255,0.9); color: #fd79a8; border: none; 
                           border-radius: 15px; padding: 12px 30px; font-size: 16px; 
                           font-weight: bold; cursor: pointer; transition: all 0.3s ease;">
                明日も頑張る！ 💪
            </button>
        `;

        modal.appendChild(content);
        document.body.appendChild(modal);

        // クリックで閉じる
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes modalSlideUp {
                from { opacity: 0; transform: translateY(50px) scale(0.9); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
        `;
        document.head.appendChild(styles);

        // 自動で閉じる
        setTimeout(() => {
            modal.remove();
            styles.remove();
        }, 8000);
    }

    // 完了メッセージ生成
    getCompletionMessage(accuracy) {
        if (accuracy >= 90) {
            return "🌟 パーフェクト！君は天才だ！";
        } else if (accuracy >= 80) {
            return "🎉 素晴らしい成績！この調子！";
        } else if (accuracy >= 70) {
            return "😊 よく頑張った！着実に成長中！";
        } else if (accuracy >= 60) {
            return "💪 いい感じ！もう少し頑張ろう！";
        } else {
            return "🌱 今日もよく頑張った！明日はもっと良くなる！";
        }
    }

    // 特別エフェクト表示
    showSpecialEffect(message) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 32px;
            font-weight: bold;
            color: #e17055;
            z-index: 10000;
            pointer-events: none;
            animation: specialBoom 2.5s ease-out forwards;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
            background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
            padding: 20px 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        effect.textContent = message;

        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes specialBoom {
                0% { opacity: 0; transform: translateX(-50%) scale(0.3) rotate(-10deg); }
                30% { opacity: 1; transform: translateX(-50%) scale(1.2) rotate(5deg); }
                70% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0deg); }
                100% { opacity: 0; transform: translateX(-50%) scale(0.8) rotate(0deg); }
            }
        `;
        document.head.appendChild(styles);

        document.body.appendChild(effect);

        setTimeout(() => {
            effect.remove();
            styles.remove();
        }, 2500);
    }
}

// 実績システム
class AchievementSystem {
    constructor() {
        this.achievements = [
            {
                id: 'first_correct',
                name: '初正解',
                description: '初めて問題に正解した',
                icon: '🌟',
                condition: () => userData.correctAnswers >= 1
            },
            {
                id: 'streak_3',
                name: '3日連続',
                description: '3日連続で学習した',
                icon: '🔥',
                condition: () => userData.streakDays >= 3
            },
            {
                id: 'perfect_day',
                name: 'パーフェクトデイ',
                description: '1日の正答率100%達成',
                icon: '💯',
                condition: () => userData.questionsAnsweredToday >= 5 && 
                    userData.correctAnswersToday === userData.questionsAnsweredToday
            },
            {
                id: 'speed_master',
                name: 'スピードマスター',
                description: '30分以内に目標達成',
                icon: '⚡',
                condition: () => userData.studyMinutesToday <= 30 && userData.questionsAnsweredToday >= 12
            },
            {
                id: 'kanji_master',
                name: '漢字マスター',
                description: '漢字100問正解',
                icon: '📝',
                condition: () => (userData.kanjiCorrect || 0) >= 100
            }
        ];
        
        this.unlockedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    }

    checkAchievements() {
        this.achievements.forEach(achievement => {
            if (!this.isUnlocked(achievement.id) && achievement.condition()) {
                this.unlockAchievement(achievement);
            }
        });
    }

    isUnlocked(achievementId) {
        return this.unlockedAchievements.includes(achievementId);
    }

    unlockAchievement(achievement) {
        this.unlockedAchievements.push(achievement.id);
        localStorage.setItem('achievements', JSON.stringify(this.unlockedAchievements));
        
        this.showAchievementUnlock(achievement);
    }

    showAchievementUnlock(achievement) {
        const unlock = document.createElement('div');
        unlock.style.cssText = `
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #fd79a8, #fdcb6e);
            color: white;
            padding: 25px 35px;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 15px 35px rgba(253, 121, 168, 0.4);
            animation: achievementUnlock 3s ease-out forwards;
        `;
        unlock.innerHTML = `
            <div style="font-size: 50px; margin-bottom: 10px;">${achievement.icon}</div>
            <div style="font-size: 20px; font-weight: bold; margin-bottom: 5px;">実績解除！</div>
            <div style="font-size: 16px; margin-bottom: 5px;">${achievement.name}</div>
            <div style="font-size: 12px; opacity: 0.9;">${achievement.description}</div>
        `;

        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes achievementUnlock {
                0% { opacity: 0; transform: translateX(-50%) scale(0.5) translateY(-50px); }
                20% { opacity: 1; transform: translateX(-50%) scale(1.1) translateY(0); }
                80% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
                100% { opacity: 0; transform: translateX(-50%) scale(0.9) translateY(-30px); }
            }
        `;
        document.head.appendChild(styles);

        document.body.appendChild(unlock);

        // 音声とエフェクト
        funEffects.playLevelUpSound();
        funEffects.showSuccessBurst();

        setTimeout(() => {
            unlock.remove();
            styles.remove();
        }, 3000);
    }
}

// 報酬システム
class RewardSystem {
    constructor() {
        this.rewards = [
            { type: 'points', amount: 10, trigger: 'correct_answer' },
            { type: 'points', amount: 50, trigger: 'combo_5' },
            { type: 'points', amount: 100, trigger: 'perfect_day' },
            { type: 'badge', name: 'study_master', trigger: 'streak_7' }
        ];
    }

    giveComboBonus(comboCount) {
        const bonus = comboCount * 5;
        userData.totalPoints += bonus;
        funEffects.showPointsEarned(bonus);
        
        // 特別メッセージ
        if (comboCount === 5) {
            funEffects.mascotTalk("5連続正解！すごいぞ！");
        } else if (comboCount === 10) {
            funEffects.mascotTalk("10連続！君は天才だ！");
        }
    }

    giveSpecialReward(type) {
        switch(type) {
            case 'perfect_streak':
                userData.totalPoints += 100;
                funEffects.showPointsEarned(100);
                break;
            case 'master_streak':
                userData.totalPoints += 500;
                funEffects.showPointsEarned(500);
                this.unlockSpecialTitle("漢字マスター");
                break;
        }
    }

    unlockSpecialTitle(title) {
        const titleUnlock = document.createElement('div');
        titleUnlock.style.cssText = `
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #6c5ce7, #a29bfe);
            color: white;
            padding: 20px 30px;
            border-radius: 25px;
            text-align: center;
            z-index: 10000;
            font-size: 18px;
            font-weight: bold;
            box-shadow: 0 15px 35px rgba(108, 92, 231, 0.4);
            animation: titleAppear 2s ease-out forwards;
        `;
        titleUnlock.innerHTML = `
            <div style="font-size: 40px; margin-bottom: 10px;">👑</div>
            <div>称号獲得！</div>
            <div style="font-size: 22px; margin-top: 10px;">${title}</div>
        `;

        document.body.appendChild(titleUnlock);

        setTimeout(() => {
            titleUnlock.remove();
        }, 2000);
    }
}

// チャレンジシステム
class ChallengeSystem {
    constructor() {
        this.dailyChallenges = [
            {
                id: 'speed_challenge',
                name: '高速学習チャレンジ',
                description: '20分以内に10問正解',
                icon: '⚡',
                progress: 0,
                target: 10,
                timeLimit: 20
            },
            {
                id: 'accuracy_challenge', 
                name: '正確性チャレンジ',
                description: '正答率90%以上を達成',
                icon: '🎯',
                progress: 0,
                target: 90
            },
            {
                id: 'variety_challenge',
                name: 'バラエティチャレンジ',
                description: '全分野で問題を解く',
                icon: '🌈',
                progress: [],
                target: ['kanji', 'reading', 'grammar', 'writing']
            }
        ];
        
        this.loadChallenges();
    }

    loadChallenges() {
        const saved = localStorage.getItem('dailyChallenges');
        if (saved) {
            this.dailyChallenges = JSON.parse(saved);
        }
    }

    saveChallenges() {
        localStorage.setItem('dailyChallenges', JSON.stringify(this.dailyChallenges));
    }

    checkChallengeProgress(category, isCorrect) {
        // スピードチャレンジ
        const speedChallenge = this.dailyChallenges.find(c => c.id === 'speed_challenge');
        if (speedChallenge && userData.studyMinutesToday <= speedChallenge.timeLimit && isCorrect) {
            speedChallenge.progress++;
            if (speedChallenge.progress >= speedChallenge.target) {
                this.completeChallenge(speedChallenge);
            }
        }

        // 正確性チャレンジ
        const accuracyChallenge = this.dailyChallenges.find(c => c.id === 'accuracy_challenge');
        if (accuracyChallenge) {
            const currentAccuracy = userData.questionsAnsweredToday > 0 
                ? (userData.correctAnswersToday / userData.questionsAnsweredToday) * 100 
                : 0;
            accuracyChallenge.progress = currentAccuracy;
            if (currentAccuracy >= accuracyChallenge.target) {
                this.completeChallenge(accuracyChallenge);
            }
        }

        // バラエティチャレンジ
        const varietyChallenge = this.dailyChallenges.find(c => c.id === 'variety_challenge');
        if (varietyChallenge && !varietyChallenge.progress.includes(category)) {
            varietyChallenge.progress.push(category);
            if (varietyChallenge.progress.length >= varietyChallenge.target.length) {
                this.completeChallenge(varietyChallenge);
            }
        }

        this.saveChallenges();
    }

    completeChallenge(challenge) {
        if (challenge.completed) return;
        
        challenge.completed = true;
        userData.totalPoints += 200; // チャレンジボーナス

        // チャレンジ完了演出
        const completion = document.createElement('div');
        completion.style.cssText = `
            position: fixed;
            top: 35%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #00b894, #00cec9);
            color: white;
            padding: 25px 35px;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            font-size: 18px;
            font-weight: bold;
            box-shadow: 0 15px 35px rgba(0, 184, 148, 0.4);
            animation: challengeComplete 2.5s ease-out forwards;
        `;
        completion.innerHTML = `
            <div style="font-size: 50px; margin-bottom: 10px;">${challenge.icon}</div>
            <div>チャレンジ達成！</div>
            <div style="font-size: 16px; margin: 10px 0;">${challenge.name}</div>
            <div style="font-size: 14px; opacity: 0.9;">+200pt ボーナス！</div>
        `;

        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes challengeComplete {
                0% { opacity: 0; transform: translateX(-50%) scale(0.5) rotate(-10deg); }
                30% { opacity: 1; transform: translateX(-50%) scale(1.1) rotate(5deg); }
                70% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0deg); }
                100% { opacity: 0; transform: translateX(-50%) scale(0.9) rotate(0deg); }
            }
        `;
        document.head.appendChild(styles);

        document.body.appendChild(completion);

        // エフェクト
        funEffects.showConfetti();
        funEffects.playLevelUpSound();

        setTimeout(() => {
            completion.remove();
            styles.remove();
        }, 2500);
    }

    // チャレンジ表示
    displayChallenges() {
        const container = document.getElementById('dailyMenuContainer');
        if (!container) return;

        const challengesHTML = `
            <div class="challenges-card">
                <h3>🎯 今日のチャレンジ</h3>
                <div class="challenges-list">
                    ${this.dailyChallenges.map(challenge => `
                        <div class="challenge-item ${challenge.completed ? 'completed' : ''}">
                            <div class="challenge-icon">${challenge.icon}</div>
                            <div class="challenge-info">
                                <div class="challenge-name">${challenge.name}</div>
                                <div class="challenge-desc">${challenge.description}</div>
                                <div class="challenge-progress">
                                    ${this.getProgressDisplay(challenge)}
                                </div>
                            </div>
                            ${challenge.completed ? '<div class="challenge-completed">✅</div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', challengesHTML);
    }

    getProgressDisplay(challenge) {
        if (challenge.id === 'speed_challenge') {
            return `${challenge.progress}/${challenge.target}問 (${challenge.timeLimit}分以内)`;
        } else if (challenge.id === 'accuracy_challenge') {
            return `現在: ${Math.round(challenge.progress)}%`;
        } else if (challenge.id === 'variety_challenge') {
            return `${challenge.progress.length}/${challenge.target.length}分野`;
        }
        return '';
    }
}

// イベント発火用のヘルパー関数
function fireAnswerEvent(isCorrect, data) {
    const event = new CustomEvent(isCorrect ? 'answerCorrect' : 'answerIncorrect', {
        detail: data
    });
    document.dispatchEvent(event);
}

function fireStudyCompleteEvent(data) {
    const event = new CustomEvent('studyComplete', {
        detail: data
    });
    document.dispatchEvent(event);
}

// グローバルインスタンス
const gamification = new GamificationSystem();

// 30分完了チェック
function checkThirtyMinuteCompletion() {
    if (userData.studyMinutesToday >= 30 || userData.questionsAnsweredToday >= 12) {
        fireStudyCompleteEvent({
            minutes: userData.studyMinutesToday,
            questions: userData.questionsAnsweredToday,
            accuracy: userData.questionsAnsweredToday > 0 
                ? (userData.correctAnswersToday / userData.questionsAnsweredToday) * 100 
                : 0
        });
    }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        GamificationSystem, 
        AchievementSystem, 
        RewardSystem, 
        ChallengeSystem 
    };
}