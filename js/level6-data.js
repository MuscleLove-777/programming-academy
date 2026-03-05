const LEVEL6_DATA = {
    id: 6,
    title: "JavaScript応用",
    icon: "&#128640;",
    description: "イベント処理、非同期処理、Fetch APIを学ぶ",
    modules: [
        {
            id: 601,
            title: "イベント・非同期・API通信",
            duration: "20分",
            content: "<h2>イベント処理</h2>" +
                "<p>Webページでユーザーの操作（クリック、入力、スクロールなど）に反応するには<strong>イベントリスナー</strong>を使います。イベント駆動型プログラミングはWeb開発の根幹です。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// イベントリスナーの追加\nconst button = document.getElementById('myBtn');\n\nbutton.addEventListener('click', (event) => {\n    console.log('ボタンがクリックされました！');\n    console.log(event.target); // クリックされた要素\n});\n\n// 入力イベント\nconst input = document.getElementById('myInput');\ninput.addEventListener('input', (e) => {\n    console.log(e.target.value); // 入力値\n});\n\n// フォーム送信\nconst form = document.getElementById('myForm');\nform.addEventListener('submit', (e) => {\n    e.preventDefault(); // デフォルトの送信を防ぐ\n    // 独自の処理\n});</code></pre></div>" +
                "<table><thead><tr><th>イベント</th><th>発火タイミング</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>click</code></td><td>要素がクリックされた時</td></tr>" +
                "<tr><td><code>input</code></td><td>入力フィールドの値が変わった時</td></tr>" +
                "<tr><td><code>submit</code></td><td>フォームが送信された時</td></tr>" +
                "<tr><td><code>keydown</code></td><td>キーが押された時</td></tr>" +
                "<tr><td><code>mouseover</code></td><td>マウスが要素の上に乗った時</td></tr>" +
                "<tr><td><code>DOMContentLoaded</code></td><td>HTMLの読み込みが完了した時</td></tr>" +
                "</tbody></table>" +
                "<h2>非同期処理</h2>" +
                "<p>JavaScriptは<strong>シングルスレッド</strong>で動作しますが、非同期処理によって時間のかかるタスク（API通信、ファイル読み込みなど）を「待たずに」次の処理に進むことができます。</p>" +
                "<h3>コールバック関数</h3>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// タイマー（コールバック型）\nsetTimeout(() => {\n    console.log('2秒後に実行');\n}, 2000);</code></pre></div>" +
                "<h3>Promise</h3>" +
                "<p>Promiseは非同期処理の結果を表すオブジェクトで、<code>then</code>/<code>catch</code>でチェーンできます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>const fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve('データ取得成功');\n        }, 1000);\n    });\n};\n\nfetchData()\n    .then(data => console.log(data))\n    .catch(error => console.error(error));</code></pre></div>" +
                "<h3>async/await</h3>" +
                "<p><code>async/await</code>はPromiseをより直感的に書ける構文です。現代のJavaScriptではこの書き方が主流です。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>const getData = async () => {\n    try {\n        const data = await fetchData();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n};</code></pre></div>" +
                "<h2>Fetch API</h2>" +
                "<p>Fetch APIはサーバーとHTTP通信を行うための標準APIです。REST APIからデータを取得したり、データを送信したりできます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// GETリクエスト（データ取得）\nconst getUsers = async () => {\n    const response = await fetch('https://api.example.com/users');\n    const data = await response.json();\n    console.log(data);\n};\n\n// POSTリクエスト（データ送信）\nconst createUser = async (user) => {\n    const response = await fetch('https://api.example.com/users', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(user)\n    });\n    const result = await response.json();\n    return result;\n};</code></pre></div>" +
                "<div class='info-box tip'><p><strong>まとめ：</strong>イベント処理でユーザー操作に反応し、async/awaitで非同期処理を制御し、Fetch APIでサーバーと通信する。この3つがJavaScript応用の核心です。</p></div>",
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "addEventListener()の第1引数に指定するものは何ですか？",
                    options: ["コールバック関数", "イベント名（文字列）", "HTML要素", "CSSセレクタ"],
                    answer: 1,
                    explanation: "addEventListenerの第1引数はイベント名（'click', 'input'など）の文字列で、第2引数にコールバック関数を指定します。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "async/awaitの説明として正しいものはどれですか？",
                    options: ["同期処理を非同期に変換する", "Promiseをより直感的に書ける構文", "コールバック関数の別名", "JavaScriptを高速化する機能"],
                    answer: 1,
                    explanation: "async/awaitはPromiseベースの非同期処理を同期的なコードのように書けるシンタックスシュガー（糖衣構文）です。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "Fetch APIでJSONデータを送信する際に必要なヘッダーはどれですか？",
                    options: ["Accept: text/html", "Content-Type: application/json", "Authorization: Bearer", "Cache-Control: no-cache"],
                    answer: 1,
                    explanation: "JSONデータを送信する際は Content-Type: application/json ヘッダーを指定して、送信するデータの形式がJSONであることをサーバーに伝えます。"
                }
            ]
        }
    ]
};