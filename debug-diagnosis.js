// ブラウザ環境診断スクリプト
// このスクリプトをブラウザのコンソールで実行することで問題を特定できます

console.log('🔍 漢字練習ボタン診断開始...');

// 1. 基本環境チェック
function checkBasicEnvironment() {
    console.group('📊 基本環境チェック');
    console.log('ユーザーエージェント:', navigator.userAgent);
    console.log('プラットフォーム:', navigator.platform);
    console.log('JavaScript有効:', typeof(console) !== 'undefined');
    console.log('DOM状態:', document.readyState);
    console.log('現在のURL:', window.location.href);
    console.groupEnd();
}

// 2. startKanji関数の存在と定義チェック
function checkStartKanjiFunction() {
    console.group('📝 startKanji関数チェック');
    
    try {
        if (typeof startKanji === 'function') {
            console.log('✅ startKanji関数: 正常に定義済み');
            console.log('関数内容:', startKanji.toString().substring(0, 100) + '...');
            
            // 関数を実際に呼び出してみる（安全に）
            try {
                console.log('🧪 関数実行テスト中...');
                // ここでは実際には実行せず、型チェックのみ
                console.log('関数型:', typeof startKanji);
                console.log('関数長:', startKanji.toString().length, '文字');
            } catch (execError) {
                console.error('❌ 関数実行エラー:', execError.message);
            }
            
        } else {
            console.error('❌ startKanji関数が定義されていません');
            console.log('windowオブジェクト内の関数一覧:');
            Object.getOwnPropertyNames(window).filter(name => typeof window[name] === 'function').forEach(funcName => {
                console.log('  -', funcName);
            });
        }
    } catch (error) {
        console.error('❌ startKanji関数チェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// 3. HTML要素とonclick属性チェック
function checkHTMLElements() {
    console.group('🔘 HTML要素チェック');
    
    try {
        // 漢字練習ボタンを探す
        const kanjiButtons = document.querySelectorAll('[onclick*="startKanji"]');
        console.log('漢字練習ボタン数:', kanjiButtons.length);
        
        kanjiButtons.forEach((button, index) => {
            console.log(`ボタン${index + 1}:`);
            console.log('  - onclick属性:', button.getAttribute('onclick'));
            console.log('  - クラス:', button.className);
            console.log('  - テキスト:', button.textContent.trim().substring(0, 50));
            console.log('  - 表示状態:', window.getComputedStyle(button).display);
            console.log('  - 可視性:', window.getComputedStyle(button).visibility);
            console.log('  - disabled:', button.disabled);
        });
        
        // 全てのメニューボタンをチェック
        const allMenuButtons = document.querySelectorAll('.menu-btn');
        console.log('全メニューボタン数:', allMenuButtons.length);
        
    } catch (error) {
        console.error('❌ HTML要素チェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// 4. イベントリスナーチェック
function checkEventListeners() {
    console.group('🎯 イベントリスナーチェック');
    
    try {
        const kanjiButtons = document.querySelectorAll('[onclick*="startKanji"]');
        
        kanjiButtons.forEach((button, index) => {
            console.log(`ボタン${index + 1} イベントテスト:`);
            
            // クリックイベントのテスト
            let clickFired = false;
            const testListener = () => {
                clickFired = true;
                console.log('  - テストクリックイベント発火');
            };
            
            button.addEventListener('click', testListener, { once: true });
            
            // 人工的にクリック（実際のstartKanjiは呼ばないように注意）
            const event = new MouseEvent('click', { bubbles: true });
            button.dispatchEvent(event);
            
            console.log('  - イベント発火状況:', clickFired ? '正常' : '異常');
            
            // onclick属性の実際の評価テスト
            try {
                const onclickCode = button.getAttribute('onclick');
                console.log('  - onclick評価テスト:', onclickCode);
                
                // 関数が存在するかのみチェック
                if (onclickCode && onclickCode.includes('startKanji()')) {
                    if (typeof window.startKanji === 'function') {
                        console.log('  - ✅ onclick -> 関数マッピング: 正常');
                    } else {
                        console.log('  - ❌ onclick -> 関数マッピング: 関数が存在しない');
                    }
                }
            } catch (evalError) {
                console.error('  - ❌ onclick評価エラー:', evalError.message);
            }
        });
        
    } catch (error) {
        console.error('❌ イベントリスナーチェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// 5. セキュリティポリシーチェック
function checkSecurityPolicy() {
    console.group('🛡️ セキュリティポリシーチェック');
    
    try {
        // CSPチェック
        const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (cspMeta) {
            console.log('⚠️ CSP検出:', cspMeta.content);
        } else {
            console.log('✅ CSP: 設定されていません');
        }
        
        // eval実行テスト
        try {
            eval('console.log("eval実行可能")');
            console.log('✅ eval(): 実行可能');
        } catch (evalError) {
            console.error('❌ eval(): 実行不可 -', evalError.message);
        }
        
        // インラインイベント実行可能性テスト
        try {
            const testBtn = document.createElement('button');
            testBtn.setAttribute('onclick', 'console.log("インラインイベント実行可能")');
            document.body.appendChild(testBtn);
            testBtn.click();
            testBtn.remove();
        } catch (inlineError) {
            console.error('❌ インラインイベント実行エラー:', inlineError.message);
        }
        
    } catch (error) {
        console.error('❌ セキュリティポリシーチェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// 6. ネットワーク・キャッシュチェック
function checkNetworkAndCache() {
    console.group('🌐 ネットワーク・キャッシュチェック');
    
    try {
        console.log('オンライン状態:', navigator.onLine);
        console.log('キャッシュAPI対応:', 'caches' in window);
        console.log('ServiceWorker対応:', 'serviceWorker' in navigator);
        
        // リソース読み込み状況チェック
        const scripts = document.querySelectorAll('script');
        console.log('読み込まれたスクリプト数:', scripts.length);
        
        scripts.forEach((script, index) => {
            if (script.src) {
                console.log(`  外部スクリプト${index + 1}:`, script.src);
            } else {
                console.log(`  インラインスクリプト${index + 1}:`, script.textContent.length, '文字');
            }
        });
        
    } catch (error) {
        console.error('❌ ネットワーク・キャッシュチェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// 7. ブラウザ固有問題チェック
function checkBrowserSpecificIssues() {
    console.group('🌏 ブラウザ固有問題チェック');
    
    try {
        const userAgent = navigator.userAgent;
        
        // ブラウザ判定
        if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
            console.log('🍎 Safari検出 - Safari固有の問題をチェック');
            console.log('  - WebKit版本:', userAgent.match(/Version\/([\d.]+)/)?.[1] || 'unknown');
        }
        
        if (userAgent.includes('Chrome')) {
            console.log('🟢 Chrome検出 - Chrome固有の問題をチェック');
            console.log('  - Chrome版本:', userAgent.match(/Chrome\/([\d.]+)/)?.[1] || 'unknown');
        }
        
        if (userAgent.includes('Firefox')) {
            console.log('🦊 Firefox検出 - Firefox固有の問題をチェック');
            console.log('  - Firefox版本:', userAgent.match(/Firefox\/([\d.]+)/)?.[1] || 'unknown');
        }
        
        // モバイルデバイスチェック
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        if (isMobile) {
            console.log('📱 モバイルデバイス検出');
            console.log('  - タッチイベント対応:', 'ontouchstart' in window);
            console.log('  - ビューポート:', window.innerWidth + 'x' + window.innerHeight);
        }
        
    } catch (error) {
        console.error('❌ ブラウザ固有問題チェックエラー:', error.message);
    }
    
    console.groupEnd();
}

// メイン診断実行
function runFullDiagnosis() {
    console.log('🚀 漢字練習ボタン完全診断開始');
    console.log('実行時刻:', new Date().toString());
    console.log('==========================================');
    
    checkBasicEnvironment();
    checkStartKanjiFunction();
    checkHTMLElements();
    checkEventListeners();
    checkSecurityPolicy();
    checkNetworkAndCache();
    checkBrowserSpecificIssues();
    
    console.log('==========================================');
    console.log('🏁 診断完了');
    
    // 問題があった場合の推奨事項
    console.group('💡 推奨事項');
    console.log('1. ブラウザのキャッシュをクリアしてみてください');
    console.log('2. 他のブラウザでも同じ問題が発生するか確認してください');
    console.log('3. モバイルとデスクトップの両方で動作をテストしてください');
    console.log('4. ブラウザの開発者ツールでネットワークタブを確認してください');
    console.log('5. JavaScriptが無効になっていないか確認してください');
    console.groupEnd();
}

// 自動実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runFullDiagnosis);
} else {
    runFullDiagnosis();
}