const LEVEL5_DATA = {
    id: 5,
    title: "JavaScript基礎 (2)",
    icon: "&#128296;",
    description: "関数、配列、オブジェクト、DOM操作を学ぶ",
    modules: [
        {
            id: 501,
            title: "関数・配列・DOM操作",
            duration: "20分",
            content: "<h2>関数</h2>" +
                "<p>関数は、処理をまとめて名前をつけ、<strong>再利用可能</strong>にする仕組みです。同じ処理を何度も書く代わりに、関数として定義して呼び出します。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// 関数宣言\nfunction greet(name) {\n    return 'こんにちは、' + name + 'さん！';\n}\nconsole.log(greet('太郎')); // こんにちは、太郎さん！\n\n// アロー関数（ES6+）\nconst add = (a, b) => a + b;\nconsole.log(add(3, 5)); // 8\n\n// デフォルト引数\nconst sayHello = (name = 'ゲスト') => {\n    return `Hello, ${name}!`;\n};</code></pre></div>" +
                "<table><thead><tr><th>書き方</th><th>特徴</th><th>使い所</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>function宣言</td><td>巻き上げ（hoisting）あり</td><td>一般的な関数</td></tr>" +
                "<tr><td>アロー関数</td><td>短く書ける、thisの扱いが異なる</td><td>コールバック関数</td></tr>" +
                "</tbody></table>" +
                "<h2>配列（Array）</h2>" +
                "<p>配列は、複数の値を順番に格納するデータ構造です。インデックス（添え字）は0から始まります。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>const fruits = ['りんご', 'みかん', 'バナナ'];\nconsole.log(fruits[0]);       // りんご\nconsole.log(fruits.length);   // 3\n\n// よく使うメソッド\nfruits.push('ぶどう');           // 末尾に追加\nfruits.pop();                   // 末尾を削除\n\n// 配列メソッド（関数型）\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 15</code></pre></div>" +
                "<table><thead><tr><th>メソッド</th><th>動作</th><th>戻り値</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>push()</code></td><td>末尾に追加</td><td>新しい長さ</td></tr>" +
                "<tr><td><code>pop()</code></td><td>末尾を削除</td><td>削除した要素</td></tr>" +
                "<tr><td><code>map()</code></td><td>各要素を変換</td><td>新しい配列</td></tr>" +
                "<tr><td><code>filter()</code></td><td>条件に合う要素を抽出</td><td>新しい配列</td></tr>" +
                "<tr><td><code>reduce()</code></td><td>配列を1つの値に集約</td><td>集約された値</td></tr>" +
                "<tr><td><code>find()</code></td><td>条件に合う最初の要素</td><td>要素またはundefined</td></tr>" +
                "<tr><td><code>forEach()</code></td><td>各要素に処理を実行</td><td>undefined</td></tr>" +
                "</tbody></table>" +
                "<h2>オブジェクト（Object）</h2>" +
                "<p>オブジェクトは、<strong>キーと値のペア</strong>でデータを管理する構造です。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>const user = {\n    name: '太郎',\n    age: 25,\n    isStudent: true,\n    greet() {\n        return `私は${this.name}です`;\n    }\n};\n\nconsole.log(user.name);     // 太郎\nconsole.log(user['age']);    // 25\nconsole.log(user.greet());  // 私は太郎です\n\n// 分割代入\nconst { name, age } = user;\nconsole.log(name); // 太郎</code></pre></div>" +
                "<h2>DOM操作</h2>" +
                "<p>DOM（Document Object Model）はHTMLをJavaScriptから操作するためのインターフェースです。DOM操作によって、ページの内容を動的に変更できます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript</span></div><pre><code>// 要素の取得\nconst title = document.getElementById('title');\nconst items = document.querySelectorAll('.item');\n\n// テキストの変更\ntitle.textContent = '新しいタイトル';\n\n// HTMLの挿入\ntitle.innerHTML = '&lt;strong&gt;太字&lt;/strong&gt;のタイトル';\n\n// スタイルの変更\ntitle.style.color = 'red';\n\n// クラスの操作\ntitle.classList.add('active');\ntitle.classList.remove('hidden');\ntitle.classList.toggle('visible');\n\n// 要素の作成と追加\nconst newDiv = document.createElement('div');\nnewDiv.textContent = '新しい要素';\ndocument.body.appendChild(newDiv);</code></pre></div>" +
                "<div class='info-box tip'><p><strong>DOM操作のポイント：</strong><code>getElementById</code>はID指定で1つの要素を取得、<code>querySelectorAll</code>はCSSセレクタで複数要素を取得します。現代のWeb開発ではquerySelectorが主流です。</p></div>",
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "アロー関数の正しい書き方はどれですか？",
                    options: ["function => (a, b) { return a + b; }", "const add = (a, b) => a + b;", "arrow add(a, b) = a + b;", "const add = => (a, b) a + b;"],
                    answer: 1,
                    explanation: "アロー関数は (引数) => 式 の形で書きます。const add = (a, b) => a + b; が正しい書き方です。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "配列のmap()メソッドの動作として正しいものはどれですか？",
                    options: ["条件に合う要素を抽出する", "各要素を変換して新しい配列を返す", "配列を1つの値に集約する", "配列の末尾に要素を追加する"],
                    answer: 1,
                    explanation: "map()は各要素にコールバック関数を適用し、その結果から新しい配列を生成します。元の配列は変更されません。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "JavaScriptでHTMLの要素をIDで取得するメソッドはどれですか？",
                    options: ["document.querySelector()", "document.getElementById()", "document.getElementsByClassName()", "document.createElement()"],
                    answer: 1,
                    explanation: "document.getElementById()はid属性で要素を1つ取得するメソッドです。引数にはid名を文字列で渡します。"
                }
            ]
        }
    ]
};