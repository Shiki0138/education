// 自動テストシステム
class TestRunner {
    constructor() {
        this.tests = [];
        this.results = {
            passed: 0,
            failed: 0,
            total: 0
        };
    }

    addTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    async runAll() {
        console.log('🧪 自動テストを開始します...\n');
        this.results = { passed: 0, failed: 0, total: 0 };

        for (const test of this.tests) {
            this.results.total++;
            try {
                await test.testFunction();
                this.results.passed++;
                console.log(`✅ ${test.name}`);
            } catch (error) {
                this.results.failed++;
                console.log(`❌ ${test.name}: ${error.message}`);
            }
        }

        this.printResults();
        return this.results;
    }

    printResults() {
        console.log('\n📊 テスト結果:');
        console.log(`総テスト数: ${this.results.total}`);
        console.log(`成功: ${this.results.passed}`);
        console.log(`失敗: ${this.results.failed}`);
        console.log(`成功率: ${Math.round((this.results.passed / this.results.total) * 100)}%`);
    }

    assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }

    assertEqual(actual, expected, message = '') {
        if (actual !== expected) {
            throw new Error(`${message} - 期待値: ${expected}, 実際: ${actual}`);
        }
    }
}

// テスト実行
const testRunner = new TestRunner();

// ユーザーデータテスト
testRunner.addTest('ユーザーデータ初期化', () => {
    const initialData = {
        level: 1,
        totalPoints: 0,
        questionsAnswered: 0,
        correctAnswers: 0,
        studyMinutesToday: 0,
        streakDays: 0
    };
    
    testRunner.assert(typeof userData === 'object', 'userDataが存在しない');
    testRunner.assertEqual(userData.level, initialData.level, 'レベル初期化');
});

// セキュリティテスト
testRunner.addTest('入力検証テスト', () => {
    const maliciousInputs = [
        '<script>alert("XSS")</script>',
        'javascript:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'vbscript:msgbox(1)',
        '<img onerror=alert(1) src=x>'
    ];

    for (const input of maliciousInputs) {
        testRunner.assert(!validateInput(input), `危険な入力が通過: ${input}`);
    }
});

// HTMLサニタイズテスト
testRunner.addTest('HTMLサニタイズテスト', () => {
    const testInput = '<script>alert("test")</script>Hello<b>World</b>';
    const sanitized = sanitizeHtml(testInput);
    
    testRunner.assert(!sanitized.includes('<script>'), 'スクリプトタグが削除されていない');
    testRunner.assert(sanitized.includes('Hello'), 'テキストが保持されている');
});

// レート制限テスト
testRunner.addTest('レート制限テスト', () => {
    const limiter = new RateLimiter(3, 1000);
    const testId = 'test_' + Date.now();
    
    // 制限内での試行
    testRunner.assert(limiter.checkLimit(testId), '1回目の試行が拒否された');
    testRunner.assert(limiter.checkLimit(testId), '2回目の試行が拒否された');
    testRunner.assert(limiter.checkLimit(testId), '3回目の試行が拒否された');
    
    // 制限を超えた試行
    testRunner.assert(!limiter.checkLimit(testId), '4回目の試行が許可された');
});

// DOM要素存在テスト
testRunner.addTest('重要なDOM要素存在確認', () => {
    const requiredElements = [
        'app',
        'mainScreen',
        'kanjiScreen',
        'readingScreen',
        'vocabularyScreen',
        'progressScreen',
        'reportScreen'
    ];

    for (const elementId of requiredElements) {
        testRunner.assert(
            document.getElementById(elementId) !== null,
            `要素が見つからない: ${elementId}`
        );
    }
});

// ローカルストレージテスト
testRunner.addTest('ローカルストレージ機能', () => {
    const testData = { test: 'value', number: 123 };
    const testKey = 'test_' + Date.now();
    
    // 保存テスト
    localStorage.setItem(testKey, JSON.stringify(testData));
    
    // 読み込みテスト
    const loaded = JSON.parse(localStorage.getItem(testKey));
    testRunner.assertEqual(loaded.test, testData.test, 'データ保存・読み込み');
    testRunner.assertEqual(loaded.number, testData.number, '数値データ保持');
    
    // クリーンアップ
    localStorage.removeItem(testKey);
});

// Service Worker テスト
testRunner.addTest('Service Worker登録確認', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.getRegistration();
            testRunner.assert(registration !== undefined, 'Service Workerが登録されていない');
        } catch (error) {
            throw new Error('Service Worker確認エラー: ' + error.message);
        }
    } else {
        console.log('⚠️ Service Workerはこの環境でサポートされていません');
    }
});

// アクセシビリティテスト
testRunner.addTest('基本的なアクセシビリティ確認', () => {
    // alt属性確認
    const images = document.querySelectorAll('img');
    for (const img of images) {
        testRunner.assert(
            img.hasAttribute('alt'),
            `alt属性が不足: ${img.src}`
        );
    }

    // ボタンのaria-label確認
    const buttons = document.querySelectorAll('button');
    let unlabeledButtons = 0;
    for (const button of buttons) {
        if (!button.textContent.trim() && !button.hasAttribute('aria-label')) {
            unlabeledButtons++;
        }
    }
    testRunner.assert(unlabeledButtons === 0, `ラベルなしボタン: ${unlabeledButtons}個`);
});

// 自動テスト実行
if (typeof window !== 'undefined') {
    window.runTests = () => testRunner.runAll();
    console.log('✅ テストシステムが準備完了しました。runTests()を呼び出してテストを実行してください。');
}