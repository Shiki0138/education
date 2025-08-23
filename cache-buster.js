// キャッシュバスティング・デバッグシステム

class CacheBusterDebugSystem {
    constructor() {
        this.version = Date.now();
        this.init();
    }

    init() {
        console.log('🔧 キャッシュバスティング・デバッグシステム開始');
        this.checkScriptLoading();
        this.addDebugInfo();
        this.setupErrorReporting();
    }

    // スクリプト読み込み状況チェック
    checkScriptLoading() {
        const criticalFunctions = [
            'startKanjiPractice',
            'startReading', 
            'startVocabulary',
            'startAIPractice',
            'showAnswerFeedback',
            'updateUI'
        ];

        console.log('📋 重要関数の読み込み状況:');
        criticalFunctions.forEach(funcName => {
            const exists = typeof window[funcName] === 'function';
            console.log(`${exists ? '✅' : '❌'} ${funcName}: ${exists ? '正常' : '未定義'}`);
            
            if (!exists) {
                this.reportMissingFunction(funcName);
            }
        });

        // データベース読み込み確認
        this.checkDatabaseLoading();
    }

    // データベース読み込み確認
    checkDatabaseLoading() {
        console.log('📚 データベース読み込み状況:');
        
        const databases = {
            'kanjiQuestions': typeof kanjiQuestions !== 'undefined' ? kanjiQuestions.length : 0,
            'megaKanjiDatabase1': typeof megaKanjiDatabase1 !== 'undefined' ? megaKanjiDatabase1.length : 0,
            'examKanjiData': typeof examKanjiData !== 'undefined' ? examKanjiData.length : 0,
            'all500KanjiProblems': typeof all500KanjiProblems !== 'undefined' ? all500KanjiProblems.length : 0
        };

        Object.entries(databases).forEach(([name, count]) => {
            console.log(`${count > 0 ? '✅' : '❌'} ${name}: ${count}問`);
        });

        // 総問題数確認
        const totalProblems = Object.values(databases).reduce((a, b) => a + b, 0);
        console.log(`📊 総問題数: ${totalProblems}問`);

        if (totalProblems < 100) {
            this.loadEmergencyDatabase();
        }
    }

    // 緊急用データベース読み込み
    loadEmergencyDatabase() {
        console.log('🚨 緊急用データベースを読み込み中...');
        
        // 最小限の漢字問題を動的生成
        const emergencyProblems = [
            {
                id: "emergency_001",
                level: "basic",
                type: "reading",
                question: "次の漢字の読み方を選びなさい：【学校】",
                options: ["がっこう", "がくこう", "がくしょう", "がっしょう"],
                correct: 0,
                hint: "みんなが勉強する場所です",
                explanation: "学校（がっこう）= 勉強する場所"
            },
            {
                id: "emergency_002",
                level: "basic",
                type: "reading",
                question: "次の漢字の読み方を選びなさい：【友達】",
                options: ["ゆうたつ", "ともだち", "ゆうだち", "ともたつ"],
                correct: 1,
                hint: "親しい仲間のことです",
                explanation: "友達（ともだち）= 親しい仲間"
            },
            {
                id: "emergency_003",
                level: "basic",
                type: "reading",
                question: "次の漢字の読み方を選びなさい：【先生】",
                options: ["せんせい", "せんじょう", "さきうまれ", "せんしょう"],
                correct: 0,
                hint: "教えてくれる人です",
                explanation: "先生（せんせい）= 教えてくれる人"
            }
        ];

        window.kanjiQuestions = emergencyProblems;
        console.log('✅ 緊急用データベース読み込み完了:', emergencyProblems.length, '問');
    }

    // 関数未定義レポート
    reportMissingFunction(funcName) {
        console.error(`🚨 重要関数が未定義: ${funcName}`);
        
        // 代替関数を定義
        if (funcName === 'startKanjiPractice') {
            window.startKanjiPractice = () => {
                alert('漢字練習機能を読み込み中です。\nページを再読み込みしてください。');
                location.reload();
            };
        }
        
        if (funcName === 'startReading') {
            window.startReading = () => {
                alert('読解問題機能を読み込み中です。\nページを再読み込みしてください。');
                location.reload();
            };
        }
        
        if (funcName === 'startVocabulary') {
            window.startVocabulary = () => {
                alert('語彙力強化機能を読み込み中です。\nページを再読み込みしてください。');
                location.reload();
            };
        }

        if (funcName === 'startAIPractice') {
            window.startAIPractice = () => {
                alert('AI問題生成機能を読み込み中です。\nページを再読み込みしてください。');
                location.reload();
            };
        }
    }

    // デバッグ情報をページに追加
    addDebugInfo() {
        if (document.getElementById('debug-info')) return;
        
        const debugInfo = document.createElement('div');
        debugInfo.id = 'debug-info';
        debugInfo.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 10000;
            max-width: 300px;
            display: none;
        `;
        
        debugInfo.innerHTML = `
            <div><strong>🔧 デバッグ情報</strong></div>
            <div>バージョン: ${this.version}</div>
            <div>問題数: <span id="debug-problem-count">確認中...</span></div>
            <div>関数: <span id="debug-function-status">確認中...</span></div>
            <div>エラー: <span id="debug-error-count">0</span></div>
            <button onclick="document.getElementById('debug-info').style.display='none'" 
                    style="margin-top: 10px; padding: 5px 10px; border: none; border-radius: 3px; cursor: pointer;">
                閉じる
            </button>
        `;
        
        document.body.appendChild(debugInfo);
        
        // デバッグ情報更新
        this.updateDebugInfo();
        
        // Ctrl+Shift+Dでデバッグ情報表示
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                debugInfo.style.display = debugInfo.style.display === 'none' ? 'block' : 'none';
            }
        });
    }

    // デバッグ情報更新
    updateDebugInfo() {
        const problemCountEl = document.getElementById('debug-problem-count');
        const functionStatusEl = document.getElementById('debug-function-status');
        const errorCountEl = document.getElementById('debug-error-count');
        
        if (problemCountEl) {
            const count = typeof kanjiQuestions !== 'undefined' ? kanjiQuestions.length : 0;
            problemCountEl.textContent = `${count}問`;
        }
        
        if (functionStatusEl) {
            const hasStart = typeof startKanjiPractice === 'function';
            functionStatusEl.textContent = hasStart ? '正常' : '未読み込み';
        }
        
        if (errorCountEl) {
            const errorLog = JSON.parse(localStorage.getItem('errorLog') || '[]');
            errorCountEl.textContent = errorLog.length;
        }
    }

    // エラーレポート設定
    setupErrorReporting() {
        let errorCount = 0;
        
        window.addEventListener('error', (event) => {
            errorCount++;
            console.error(`🚨 エラー ${errorCount}:`, event.error?.message || event.message);
            
            // 重要なエラーの場合は緊急対処
            if (event.error?.message?.includes('startKanjiPractice')) {
                this.handleCriticalError('漢字練習機能');
            }
            
            this.updateDebugInfo();
        });
        
        // Promise拒否の処理
        window.addEventListener('unhandledrejection', (event) => {
            console.error('🚨 未処理Promise拒否:', event.reason);
        });
    }

    // 重要エラーの処理
    handleCriticalError(feature) {
        const errorModal = document.createElement('div');
        errorModal.style.cssText = `
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
        `;
        
        errorModal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 350px;">
                <div style="font-size: 50px; margin-bottom: 15px;">⚠️</div>
                <h3>システム読み込み中</h3>
                <p>${feature}を準備しています。<br>少々お待ちください。</p>
                <button onclick="location.reload()" 
                        style="background: #007bff; color: white; border: none; 
                               padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 15px;">
                    ページを再読み込み
                </button>
            </div>
        `;
        
        document.body.appendChild(errorModal);
        
        // 5秒後に自動で再読み込み
        setTimeout(() => {
            location.reload();
        }, 5000);
    }

    // 強制リロード（キャッシュクリア）
    forceReload() {
        console.log('🔄 キャッシュクリア付きリロード実行');
        location.reload(true);
    }
}

// システム開始時にキャッシュバスター実行
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 キャッシュバスターシステム開始');
    const cacheBuster = new CacheBusterDebugSystem();
    
    // 3秒後に重要関数の再確認
    setTimeout(() => {
        console.log('🔍 遅延確認実行');
        cacheBuster.checkScriptLoading();
        
        // ボタンが反応しない場合の緊急対処
        if (typeof startKanjiPractice !== 'function') {
            console.error('🚨 重要: 漢字練習機能が読み込まれていません');
            cacheBuster.handleCriticalError('漢字練習機能');
        }
    }, 3000);
});

// グローバル関数として公開
window.CacheBusterDebugSystem = CacheBusterDebugSystem;
window.forceReload = () => location.reload(true);

// デバッグ用：Ctrl+Shift+R でキャッシュクリア付きリロード
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        location.reload(true);
    }
});

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CacheBusterDebugSystem };
}