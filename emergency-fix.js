// 緊急修正：ボタン動作問題の強制解決システム

console.log('🚨 緊急修正システム開始');

// 即座に実行される緊急修正
(function() {
    'use strict';
    
    console.log('🔧 緊急修正システム実行中...');
    
    // 1. 重要関数の強制定義
    function forceDefineKanjiFunctions() {
        console.log('📝 漢字機能を強制定義中...');
        
        window.startKanjiPractice = function() {
            console.log('🚀 緊急版：漢字練習開始');
            
            // 画面遷移を強制実行
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));
            
            const kanjiScreen = document.getElementById('kanjiScreen');
            if (kanjiScreen) {
                kanjiScreen.classList.add('active');
                console.log('✅ 漢字画面に遷移完了');
                
                // 簡単な問題を表示
                showEmergencyKanjiProblem();
            } else {
                console.error('❌ 漢字画面が見つかりません');
                alert('漢字練習画面の準備中です。\nページを再読み込みしてください。');
            }
        };
        
        window.startReading = function() {
            console.log('🚀 緊急版：読解問題開始');
            
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));
            
            const readingScreen = document.getElementById('readingScreen');
            if (readingScreen) {
                readingScreen.classList.add('active');
                console.log('✅ 読解画面に遷移完了');
                showEmergencyReadingProblem();
            } else {
                alert('読解問題画面の準備中です。');
            }
        };
        
        window.startVocabulary = function() {
            console.log('🚀 緊急版：語彙力強化開始');
            
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));
            
            const vocabScreen = document.getElementById('vocabularyScreen');
            if (vocabScreen) {
                vocabScreen.classList.add('active');
                console.log('✅ 語彙画面に遷移完了');
            } else {
                alert('語彙力強化：ことわざや慣用句を学習する機能です。\n現在準備中です。');
            }
        };
        
        window.startAIPractice = function() {
            console.log('🚀 緊急版：AI問題生成開始');
            
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));
            
            const aiScreen = document.getElementById('aiPracticeScreen');
            if (aiScreen) {
                aiScreen.classList.add('active');
                console.log('✅ AI画面に遷移完了');
            } else {
                // AI機能の代わりに漢字練習を実行
                window.startKanjiPractice();
            }
        };
        
        console.log('✅ 重要関数の強制定義完了');
    }
    
    // 2. 緊急用漢字問題表示
    function showEmergencyKanjiProblem() {
        const questionEl = document.getElementById('kanjiQuestion');
        const optionsEl = document.getElementById('kanjiOptions');
        const scoreEl = document.getElementById('kanjiScore');
        
        if (!questionEl || !optionsEl) {
            console.error('❌ 問題表示要素が見つかりません');
            return;
        }
        
        // 緊急用問題
        const emergencyProblem = {
            question: "次の漢字の読み方を選びなさい：【学校】",
            options: ["がっこう", "がくこう", "がくしょう", "がっしょう"],
            correct: 0,
            explanation: "学校（がっこう）= みんなが勉強する場所"
        };
        
        questionEl.textContent = emergencyProblem.question;
        
        const optionsHTML = emergencyProblem.options.map((option, index) => 
            `<button onclick="checkEmergencyAnswer(${index}, ${emergencyProblem.correct})">${index + 1}. ${option}</button>`
        ).join('');
        
        optionsEl.innerHTML = optionsHTML;
        
        if (scoreEl) {
            scoreEl.textContent = '0';
        }
        
        console.log('✅ 緊急用漢字問題表示完了');
    }
    
    // 3. 緊急用読解問題表示
    function showEmergencyReadingProblem() {
        const passageEl = document.getElementById('passageText');
        const questionEl = document.getElementById('readingQuestion');
        const optionsEl = document.getElementById('readingOptions');
        
        if (!passageEl || !questionEl || !optionsEl) {
            console.error('❌ 読解問題表示要素が見つかりません');
            return;
        }
        
        const emergencyReading = {
            passage: "太郎は毎朝6時に起きて、学校へ行く準備をします。朝ごはんを食べてから、7時30分に家を出ます。学校までは歩いて20分かかります。",
            question: "太郎が学校に着くのは何時何分ですか？",
            options: ["7時50分", "8時00分", "7時40分", "8時10分"],
            correct: 0
        };
        
        passageEl.textContent = emergencyReading.passage;
        questionEl.textContent = emergencyReading.question;
        
        const optionsHTML = emergencyReading.options.map((option, index) => 
            `<button onclick="checkEmergencyAnswer(${index}, ${emergencyReading.correct})">${index + 1}. ${option}</button>`
        ).join('');
        
        optionsEl.innerHTML = optionsHTML;
        
        console.log('✅ 緊急用読解問題表示完了');
    }
    
    // 4. 緊急用答え合わせ
    window.checkEmergencyAnswer = function(selected, correct) {
        console.log(`🔍 答え合わせ: 選択=${selected}, 正解=${correct}`);
        
        const buttons = document.querySelectorAll('.answer-options button, #kanjiOptions button, #readingOptions button');
        
        if (selected === correct) {
            buttons[selected].style.background = '#d4edda';
            buttons[selected].style.borderColor = '#28a745';
            buttons[selected].style.color = '#155724';
            
            // 簡単な正解演出
            if (typeof showSimpleSuccessEffect === 'function') {
                showSimpleSuccessEffect();
            } else {
                alert('🎉 正解！素晴らしいです！');
            }
            
            console.log('✅ 正解！');
        } else {
            buttons[selected].style.background = '#f8d7da';
            buttons[selected].style.borderColor = '#dc3545';
            buttons[correct].style.background = '#d4edda';
            buttons[correct].style.borderColor = '#28a745';
            
            alert('😅 不正解でした。正解は' + (correct + 1) + '番目です。');
            console.log('❌ 不正解');
        }
        
        // 3秒後に次の問題または終了
        setTimeout(() => {
            alert('問題完了！メイン画面に戻ります。');
            showMainScreen();
        }, 3000);
    };
    
    // 5. メイン画面に戻る機能
    window.showMainScreen = function() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(s => s.classList.remove('active'));
        
        const mainScreen = document.getElementById('mainScreen');
        if (mainScreen) {
            mainScreen.classList.add('active');
            console.log('🏠 メイン画面に戻りました');
        }
    };
    
    // 6. 緊急修正実行
    function executeEmergencyFix() {
        console.log('🚑 緊急修正を実行中...');
        
        // 関数強制定義
        forceDefineKanjiFunctions();
        
        // DOM要素確認
        const criticalElements = ['app', 'mainScreen', 'kanjiScreen', 'readingScreen'];
        criticalElements.forEach(id => {
            const element = document.getElementById(id);
            console.log(`${element ? '✅' : '❌'} ${id}: ${element ? '存在' : '未存在'}`);
        });
        
        // データベース確認
        setTimeout(() => {
            const dbStatus = {
                kanjiQuestions: typeof kanjiQuestions !== 'undefined' ? kanjiQuestions.length : 0,
                megaDatabase1: typeof megaKanjiDatabase1 !== 'undefined' ? megaKanjiDatabase1.length : 0,
                all500Problems: typeof all500KanjiProblems !== 'undefined' ? all500KanjiProblems.length : 0
            };
            
            console.log('📊 データベース状況:', dbStatus);
            
            const totalProblems = Object.values(dbStatus).reduce((a, b) => a + b, 0);
            if (totalProblems === 0) {
                console.error('🚨 データベースが完全に読み込まれていません');
                // 緊急用データベースを作成
                window.kanjiQuestions = [
                    {
                        id: "emergency_001",
                        question: "次の漢字の読み方を選びなさい：【学校】",
                        options: ["がっこう", "がくこう", "がくしょう", "がっしょう"],
                        correct: 0,
                        explanation: "学校（がっこう）= 勉強する場所"
                    }
                ];
                console.log('🔄 緊急用データベース作成完了');
            }
        }, 1000);
        
        console.log('✅ 緊急修正完了');
    }
    
    // ページ読み込み完了時に実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executeEmergencyFix);
    } else {
        executeEmergencyFix();
    }
    
    // 追加の安全策：3秒後にも再実行
    setTimeout(executeEmergencyFix, 3000);
    
})();

// 簡単な成功演出
function showSimpleSuccessEffect() {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
        z-index: 10000;
        pointer-events: none;
        animation: simpleSuccess 1.5s ease-out forwards;
    `;
    effect.textContent = '🎉';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes simpleSuccess {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
        style.remove();
    }, 1500);
}

console.log('🚑 緊急修正システム読み込み完了');