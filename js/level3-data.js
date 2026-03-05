const LEVEL3_DATA = {
    id: 3,
    title: "CSS基礎",
    icon: "&#127912;",
    description: "セレクタ、ボックスモデル、Flexbox、Gridを学ぶ",
    modules: [
        {
            id: 301,
            title: "CSSの基本とレイアウト",
            duration: "15分",
            content: "<h2>CSSとは</h2>" +
                "<p>CSS（Cascading Style Sheets）は、HTMLで作った構造に<strong>デザイン（見た目）</strong>を付けるための言語です。文字の色、背景、余白、レイアウトなど、ページの見た目に関するほぼ全てをCSSで制御します。</p>" +
                "<p>CSSがなければ、Webページはただの白黒テキストの羅列です。CSSを適用することで、美しく使いやすいWebページが完成します。</p>" +
                "<h2>CSSの書き方</h2>" +
                "<p>CSSは「セレクタ」「プロパティ」「値」の3要素で構成されます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>CSS</span></div><pre><code>セレクタ {\n    プロパティ: 値;\n}\n\n/* 例 */\nh1 {\n    color: #333;\n    font-size: 24px;\n    margin-bottom: 16px;\n}</code></pre></div>" +
                "<h2>主要なセレクタ</h2>" +
                "<table><thead><tr><th>セレクタ</th><th>説明</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>要素セレクタ</td><td>タグ名で選択</td><td><code>p { ... }</code></td></tr>" +
                "<tr><td>クラスセレクタ</td><td>class属性で選択</td><td><code>.box { ... }</code></td></tr>" +
                "<tr><td>IDセレクタ</td><td>id属性で選択</td><td><code>#header { ... }</code></td></tr>" +
                "<tr><td>子孫セレクタ</td><td>親の中の子要素</td><td><code>.nav a { ... }</code></td></tr>" +
                "<tr><td>疑似クラス</td><td>特定の状態</td><td><code>a:hover { ... }</code></td></tr>" +
                "</tbody></table>" +
                "<h2>ボックスモデル</h2>" +
                "<p>全てのHTML要素は<strong>ボックスモデル</strong>に基づいて表示されます。ボックスモデルはWebレイアウトの最も基本的な概念です。</p>" +
                "<table><thead><tr><th>領域</th><th>説明</th><th>プロパティ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>content</strong></td><td>テキストや画像などの内容</td><td>width, height</td></tr>" +
                "<tr><td><strong>padding</strong></td><td>コンテンツとボーダーの間の余白</td><td>padding</td></tr>" +
                "<tr><td><strong>border</strong></td><td>ボックスの境界線</td><td>border</td></tr>" +
                "<tr><td><strong>margin</strong></td><td>ボックスの外側の余白</td><td>margin</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>重要：</strong><code>box-sizing: border-box;</code> を指定すると、paddingとborderがwidth/heightに含まれるようになり、レイアウト計算が直感的になります。現代のWeb開発では必須の設定です。</p></div>" +
                "<h2>Flexbox</h2>" +
                "<p>Flexboxは<strong>1次元レイアウト</strong>（横並びまたは縦並び）を簡単に実現するためのCSSレイアウトモデルです。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>CSS</span></div><pre><code>.container {\n    display: flex;\n    justify-content: center;  /* 横方向の配置 */\n    align-items: center;      /* 縦方向の配置 */\n    gap: 16px;                /* 要素間の余白 */\n}</code></pre></div>" +
                "<table><thead><tr><th>プロパティ</th><th>説明</th><th>主な値</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>justify-content</td><td>主軸の配置</td><td>flex-start, center, space-between</td></tr>" +
                "<tr><td>align-items</td><td>交差軸の配置</td><td>flex-start, center, stretch</td></tr>" +
                "<tr><td>flex-direction</td><td>並び方向</td><td>row（横）, column（縦）</td></tr>" +
                "<tr><td>flex-wrap</td><td>折り返し</td><td>nowrap, wrap</td></tr>" +
                "<tr><td>gap</td><td>要素間の余白</td><td>16px, 1rem</td></tr>" +
                "</tbody></table>" +
                "<h2>CSS Grid</h2>" +
                "<p>CSS Gridは<strong>2次元レイアウト</strong>（行と列）を実現するためのレイアウトモデルです。カード型のレイアウトやダッシュボードに最適です。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>CSS</span></div><pre><code>.grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}</code></pre></div>" +
                "<div class='info-box tip'><p><strong>Flexbox vs Grid：</strong>1方向の並びならFlexbox、行と列の2次元レイアウトならGridを使いましょう。両方を組み合わせて使うのが現代のベストプラクティスです。</p></div>",
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "ボックスモデルで、コンテンツとボーダーの間の余白は何と呼ばれますか？",
                    options: ["margin", "padding", "border", "content"],
                    answer: 1,
                    explanation: "paddingはコンテンツとボーダーの間の内側の余白です。marginはボックスの外側の余白です。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "Flexboxで要素を横方向に中央寄せするプロパティはどれですか？",
                    options: ["align-items: center", "justify-content: center", "flex-direction: center", "text-align: center"],
                    answer: 1,
                    explanation: "justify-contentは主軸（デフォルトでは横方向）の配置を制御します。centerを指定すると要素が中央に配置されます。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "2次元レイアウト（行と列）に適したCSSレイアウトモデルはどれですか？",
                    options: ["Flexbox", "CSS Grid", "Float", "Position"],
                    answer: 1,
                    explanation: "CSS Gridは行と列の2次元レイアウトに適しています。Flexboxは1方向（横または縦）のレイアウトに適しています。"
                }
            ]
        }
    ]
};