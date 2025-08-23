// 包括的エラーハンドリングシステム
class ErrorHandler {
    constructor() {
        this.errorLog = [];
        this.maxLogSize = 100;
        this.setupGlobalHandlers();
    }

    setupGlobalHandlers() {
        // JavaScript エラー
        window.addEventListener('error', (event) => {
            this.logError({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                stack: event.error ? event.error.stack : null,
                timestamp: new Date().toISOString()
            });
        });

        // Promise拒否エラー
        window.addEventListener('unhandledrejection', (event) => {
            this.logError({
                type: 'promise',
                message: event.reason ? event.reason.message : 'Unhandled Promise Rejection',
                stack: event.reason ? event.reason.stack : null,
                timestamp: new Date().toISOString()
            });
        });

        // リソース読み込みエラー
        window.addEventListener('error', (event) => {
            if (event.target !== window) {
                this.logError({
                    type: 'resource',
                    message: `Failed to load: ${event.target.src || event.target.href}`,
                    element: event.target.tagName,
                    timestamp: new Date().toISOString()
                });
            }
        }, true);
    }

    logError(error) {
        this.errorLog.push(error);
        
        // ログサイズ制限
        if (this.errorLog.length > this.maxLogSize) {
            this.errorLog.shift();
        }

        // コンソールに出力
        console.error('🚨 エラーを検出:', error);

        // 重要なエラーの場合、ユーザーに通知
        if (this.isCriticalError(error)) {
            this.showUserFriendlyError(error);
        }
    }

    isCriticalError(error) {
        const criticalPatterns = [
            /localStorage/i,
            /userData/i,
            /saving/i,
            /loading/i,
            /database/i
        ];

        return criticalPatterns.some(pattern => 
            pattern.test(error.message || '')
        );
    }

    showUserFriendlyError(error) {
        const userMessage = this.getUserFriendlyMessage(error);
        
        // 非侵入的な通知を表示
        this.createNotification(userMessage, 'error');
    }

    getUserFriendlyMessage(error) {
        if (error.message.includes('localStorage')) {
            return 'データの保存に問題が発生しました。ブラウザの設定を確認してください。';
        }
        if (error.message.includes('network') || error.message.includes('fetch')) {
            return 'ネットワーク接続に問題があります。インターネット接続を確認してください。';
        }
        if (error.type === 'resource') {
            return 'リソースの読み込みに失敗しました。ページを再読み込みしてください。';
        }
        return 'エラーが発生しました。問題が続く場合は、ページを再読み込みしてください。';
    }

    createNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'error' ? '⚠️' : 'ℹ️'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // スタイル設定
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#ffebee' : '#e3f2fd'};
            color: ${type === 'error' ? '#c62828' : '#1565c0'};
            border: 2px solid ${type === 'error' ? '#f44336' : '#2196f3'};
            border-radius: 8px;
            padding: 16px;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        // CSS アニメーション
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    margin-left: auto;
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // 自動削除
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 7000);
    }

    // 安全な関数実行ラッパー
    safeExecute(fn, context = null, ...args) {
        try {
            return fn.apply(context, args);
        } catch (error) {
            this.logError({
                type: 'safe_execute',
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString(),
                function: fn.name || 'anonymous'
            });
            return null;
        }
    }

    // 非同期関数用ラッパー
    async safeExecuteAsync(fn, context = null, ...args) {
        try {
            return await fn.apply(context, args);
        } catch (error) {
            this.logError({
                type: 'safe_execute_async',
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString(),
                function: fn.name || 'anonymous'
            });
            return null;
        }
    }

    // エラーレポート生成
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            errors: this.errorLog.slice(-20), // 最新20件
            summary: this.generateSummary()
        };

        return report;
    }

    generateSummary() {
        const summary = {
            totalErrors: this.errorLog.length,
            byType: {},
            recentErrors: this.errorLog.slice(-5).length
        };

        this.errorLog.forEach(error => {
            summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
        });

        return summary;
    }

    // デバッグ用：エラーログ表示
    showErrorLog() {
        console.table(this.errorLog);
        return this.errorLog;
    }

    // エラーログクリア
    clearLog() {
        this.errorLog = [];
        console.log('✅ エラーログをクリアしました');
    }
}

// グローバルエラーハンドラー初期化
const globalErrorHandler = new ErrorHandler();

// ユーティリティ関数を提供
window.safeCall = (fn, ...args) => globalErrorHandler.safeExecute(fn, null, ...args);
window.safeCallAsync = (fn, ...args) => globalErrorHandler.safeExecuteAsync(fn, null, ...args);

console.log('✅ エラーハンドリングシステムが初期化されました');

// 学習アプリ固有のエラーハンドリング
function handleStudyError(operation, error) {
    globalErrorHandler.logError({
        type: 'study_app',
        operation: operation,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
    });

    // 学習データ関連のエラーの場合、復旧を試行
    if (operation.includes('userData') || operation.includes('save') || operation.includes('load')) {
        setTimeout(() => {
            try {
                // データの整合性チェックと修復
                if (typeof userData === 'undefined' || userData === null) {
                    initializeUserData();
                }
            } catch (recoveryError) {
                console.error('データ復旧に失敗:', recoveryError);
            }
        }, 1000);
    }
}

// アプリケーション固有の安全な関数群
function safeUpdateUI() {
    return safeCall(() => {
        if (typeof updateUI === 'function') {
            updateUI();
        }
    });
}

function safeSaveUserData() {
    return safeCall(() => {
        if (typeof saveUserData === 'function') {
            saveUserData();
        }
    });
}