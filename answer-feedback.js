// 正解・不正解表示システム

class AnswerFeedbackSystem {
    constructor() {
        this.feedbackContainer = null;
        this.init();
    }

    init() {
        this.createFeedbackContainer();
        this.addFeedbackStyles();
    }

    createFeedbackContainer() {
        if (document.getElementById('answerFeedback')) return;
        
        const container = document.createElement('div');
        container.id = 'answerFeedback';
        container.className = 'answer-feedback-modal';
        container.innerHTML = `
            <div class="feedback-content">
                <div class="feedback-icon" id="feedbackIcon">✅</div>
                <div class="feedback-title" id="feedbackTitle">正解！</div>
                <div class="feedback-answer" id="feedbackAnswer"></div>
                <div class="feedback-explanation" id="feedbackExplanation"></div>
                <div class="feedback-grade" id="feedbackGrade"></div>
                <button class="feedback-close-btn" onclick="closeFeedback()">次へ進む</button>
            </div>
        `;
        document.body.appendChild(container);
        this.feedbackContainer = container;
    }

    addFeedbackStyles() {
        if (document.getElementById('feedback-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'feedback-styles';
        styles.textContent = `
            .answer-feedback-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 10000;
                justify-content: center;
                align-items: center;
            }

            .answer-feedback-modal.show {
                display: flex;
            }

            .feedback-content {
                background: white;
                border-radius: 20px;
                padding: 30px;
                max-width: 400px;
                width: 90%;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                animation: feedbackAppear 0.3s ease-out;
            }

            @keyframes feedbackAppear {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            .feedback-icon {
                font-size: 80px;
                margin-bottom: 15px;
                animation: iconBounce 0.6s ease-out;
            }

            @keyframes iconBounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }

            .feedback-title {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 15px;
            }

            .feedback-title.correct {
                color: #28a745;
            }

            .feedback-title.incorrect {
                color: #dc3545;
            }

            .feedback-answer {
                font-size: 20px;
                margin-bottom: 15px;
                padding: 10px 15px;
                border-radius: 10px;
                font-weight: bold;
            }

            .feedback-answer.correct {
                background: #d4edda;
                color: #155724;
            }

            .feedback-answer.incorrect {
                background: #f8d7da;
                color: #721c24;
            }

            .feedback-explanation {
                font-size: 14px;
                color: #666;
                margin-bottom: 15px;
                line-height: 1.6;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 8px;
            }

            .feedback-grade {
                font-size: 14px;
                color: #667eea;
                font-weight: bold;
                margin-bottom: 20px;
                padding: 5px 10px;
                background: #e7f3ff;
                border-radius: 15px;
                display: inline-block;
            }

            .feedback-close-btn {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                border-radius: 10px;
                padding: 12px 30px;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .feedback-close-btn:hover {
                opacity: 0.9;
                transform: translateY(-1px);
            }
        `;
        document.head.appendChild(styles);
    }

    show(isCorrect, correctAnswer, explanation = '', grade = '', questionText = '') {
        const container = document.getElementById('answerFeedback');
        const icon = document.getElementById('feedbackIcon');
        const title = document.getElementById('feedbackTitle');
        const answer = document.getElementById('feedbackAnswer');
        const explanationEl = document.getElementById('feedbackExplanation');
        const gradeEl = document.getElementById('feedbackGrade');

        if (isCorrect) {
            icon.textContent = '🎉';
            title.textContent = '正解！';
            title.className = 'feedback-title correct';
            answer.textContent = `答え: ${correctAnswer}`;
            answer.className = 'feedback-answer correct';
        } else {
            icon.textContent = '😅';
            title.textContent = '不正解';
            title.className = 'feedback-title incorrect';
            answer.textContent = `正解: ${correctAnswer}`;
            answer.className = 'feedback-answer incorrect';
        }

        explanationEl.textContent = explanation || '頑張って覚えましょう！';
        gradeEl.textContent = grade || '';
        gradeEl.style.display = grade ? 'inline-block' : 'none';

        container.classList.add('show');

        // 3秒後に自動で閉じる
        setTimeout(() => {
            this.hide();
        }, 2500);
    }

    hide() {
        const container = document.getElementById('answerFeedback');
        container.classList.remove('show');
    }
}

// グローバルインスタンス
const answerFeedback = new AnswerFeedbackSystem();

// 正解・不正解表示関数
function showAnswerFeedback(isCorrect, correctAnswer, explanation, questionText = '') {
    const grade = typeof getKanjiGrade === 'function' ? getKanjiGrade(questionText) : '';
    answerFeedback.show(isCorrect, correctAnswer, explanation, grade, questionText);
}

// フィードバックを閉じる
function closeFeedback() {
    answerFeedback.hide();
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnswerFeedbackSystem, showAnswerFeedback, closeFeedback };
}