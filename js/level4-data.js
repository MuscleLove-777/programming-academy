const LEVEL4_DATA = {
    id: 4,
    title: "JavaScript基礎 (1)",
    icon: "&#9889;",
    description: "変数、データ型、演算子、条件分岐、ループを学ぶ",
    modules: [
        {
            id: 401,
            title: "変数・データ型・制御構文",
            duration: "20分",
            content: "<h2>JavaScriptとは</h2>" +
                "<p>JavaScriptは、Webページに<strong>動き</strong>をつけるためのプログラミング言語です。ボタンクリック時の処理、フォームのバリデーション、アニメーション、サーバーとの通信など、Webの「インタラクション」を担当します。ブラウザに標準搭載されているため、特別なインストールなしで動作します。</p>" +
                "<h2>変数の宣言</h2>" +
                "<p>変数はデータを入れる「箱」です。JavaScriptでは3つの方法で変数を宣言できます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>let name = '太郎';       // 再代入OK、ブロックスコープ\nconst age = 25;          // 再代入NG、定数\nvar old = 'legacy';      // 古い書き方（非推奨）</code></pre></div>" +
                "<table><thead><tr><th>宣言</th><th>再代入</th><th>スコープ</th><th>推奨度</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>const</code></td><td>不可</td><td>ブロック</td><td><strong>最も推奨</strong></td></tr>" +
                "<tr><td><code>let</code></td><td>可能</td><td>ブロック</td><td>再代入が必要な場合</td></tr>" +
                "<tr><td><code>var</code></td><td>可能</td><td>関数</td><td>非推奨</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>ベストプラクティス：</strong>まず<code>const</code>で宣言し、再代入が必要な場合のみ<code>let</code>を使います。<code>var</code>は使いません。</p></div>" +
                "<h2>データ型</h2>" +
                "<table><thead><tr><th>型</th><th>説明</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>string</strong></td><td>文字列</td><td><code>'Hello'</code>, <code>\"World\"</code>, <code>`テンプレート`</code></td></tr>" +
                "<tr><td><strong>number</strong></td><td>数値（整数・小数）</td><td><code>42</code>, <code>3.14</code></td></tr>" +
                "<tr><td><strong>boolean</strong></td><td>真偽値</td><td><code>true</code>, <code>false</code></td></tr>" +
                "<tr><td><strong>null</strong></td><td>意図的な空</td><td><code>null</code></td></tr>" +
                "<tr><td><strong>undefined</strong></td><td>未定義</td><td><code>undefined</code></td></tr>" +
                "<tr><td><strong>object</strong></td><td>オブジェクト</td><td><code>{ name: '太郎' }</code></td></tr>" +
                "<tr><td><strong>array</strong></td><td>配列（objectの一種）</td><td><code>[1, 2, 3]</code></td></tr>" +
                "</tbody></table>" +
                "<h2>演算子</h2>" +
                "<table><thead><tr><th>種類</th><th>演算子</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>算術</td><td><code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code></td><td><code>10 + 3</code> → <code>13</code></td></tr>" +
                "<tr><td>比較</td><td><code>===</code> <code>!==</code> <code>&lt;</code> <code>&gt;</code></td><td><code>5 === 5</code> → <code>true</code></td></tr>" +
                "<tr><td>論理</td><td><code>&&</code> <code>||</code> <code>!</code></td><td><code>true && false</code> → <code>false</code></td></tr>" +
                "</tbody></table>" +
                "<div class='info-box warning'><p><strong>注意：</strong>比較には<code>===</code>（厳密等価）を使いましょう。<code>==</code>は型変換が行われるため、予期しない結果になることがあります。</p></div>" +
                "<h2>条件分岐</h2>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>const score = 85;\n\nif (score >= 80) {\n    console.log('合格！');\n} else if (score >= 60) {\n    console.log('もう少し');\n} else {\n    console.log('不合格');\n}</code></pre></div>" +
                "<h2>ループ（繰り返し）</h2>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// for文\nfor (let i = 0; i &lt; 5; i++) {\n    console.log(i); // 0, 1, 2, 3, 4\n}\n\n// while文\nlet count = 0;\nwhile (count &lt; 3) {\n    console.log(count);\n    count++;\n}\n\n// for...of（配列の反復）\nconst fruits = ['りんご', 'みかん', 'バナナ'];\nfor (const fruit of fruits) {\n    console.log(fruit);\n}</code></pre></div>" +
                "<div class='info-box tip'><p><strong>まとめ：</strong>変数は<code>const</code>優先、比較は<code>===</code>、配列の反復は<code>for...of</code>を基本にしましょう。</p></div>",
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "JavaScriptで変数を宣言する際、最も推奨される方法はどれですか？",
                    options: ["var", "let", "const", "function"],
                    answer: 2,
                    explanation: "constが最も推奨されます。値を再代入しない変数はconstで宣言し、再代入が必要な場合のみletを使います。varは非推奨です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "JavaScriptで厳密な比較に使う演算子はどれですか？",
                    options: ["==", "===", "!=", "="],
                    answer: 1,
                    explanation: "===（厳密等価演算子）は値と型の両方を比較します。==は型変換が行われるため、予期しない結果になることがあります。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "次のコードの出力は何ですか？ const x = 10; if (x > 5) { console.log('A'); } else { console.log('B'); }",
                    options: ["A", "B", "10", "エラーが発生する"],
                    answer: 0,
                    explanation: "x は 10 で 5 より大きいため、if の条件が true となり 'A' が出力されます。"
                }
            ]
        }
    ]
};