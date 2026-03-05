const LEVEL2_DATA = {
    id: 2,
    title: "HTML基礎",
    icon: "&#127760;",
    description: "HTML構造、タグ、属性、セマンティックHTMLを学ぶ",
    modules: [
        {
            id: 201,
            title: "HTMLの基本構造",
            duration: "15分",
            content: "<h2>HTMLとは</h2>" +
                "<p>HTML（HyperText Markup Language）は、Webページの<strong>構造</strong>を定義するためのマークアップ言語です。ブラウザはHTMLファイルを読み込み、その内容を画面に表示します。HTMLはプログラミング言語ではなく、あくまで「文書の構造を記述するための言語」です。</p>" +
                "<p>全てのWebサイトはHTMLをベースに作られています。CSSでデザインを整え、JavaScriptで動きをつける前に、まずHTMLで骨格を作ることが基本です。</p>" +
                "<h2>HTMLの基本構造</h2>" +
                "<p>HTMLファイルは以下の基本構造を持ちます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>HTML</span></div><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"ja\"&gt;\n&lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n    &lt;title&gt;ページタイトル&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;こんにちは！&lt;/h1&gt;\n    &lt;p&gt;これは段落です。&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre></div>" +
                "<table><thead><tr><th>要素</th><th>役割</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>HTML5であることを宣言</td></tr>" +
                "<tr><td><code>&lt;html&gt;</code></td><td>HTML文書のルート要素</td></tr>" +
                "<tr><td><code>&lt;head&gt;</code></td><td>メタ情報（タイトル、文字コードなど）</td></tr>" +
                "<tr><td><code>&lt;body&gt;</code></td><td>ページに表示される内容</td></tr>" +
                "</tbody></table>" +
                "<h2>主要なHTMLタグ</h2>" +
                "<table><thead><tr><th>タグ</th><th>用途</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>&lt;h1&gt;〜&lt;h6&gt;</code></td><td>見出し（h1が最大）</td><td><code>&lt;h1&gt;タイトル&lt;/h1&gt;</code></td></tr>" +
                "<tr><td><code>&lt;p&gt;</code></td><td>段落</td><td><code>&lt;p&gt;テキスト&lt;/p&gt;</code></td></tr>" +
                "<tr><td><code>&lt;a&gt;</code></td><td>リンク</td><td><code>&lt;a href=\"url\"&gt;リンク&lt;/a&gt;</code></td></tr>" +
                "<tr><td><code>&lt;img&gt;</code></td><td>画像</td><td><code>&lt;img src=\"image.jpg\" alt=\"説明\"&gt;</code></td></tr>" +
                "<tr><td><code>&lt;ul&gt;&lt;li&gt;</code></td><td>箇条書きリスト</td><td><code>&lt;ul&gt;&lt;li&gt;項目&lt;/li&gt;&lt;/ul&gt;</code></td></tr>" +
                "<tr><td><code>&lt;div&gt;</code></td><td>汎用ブロック要素</td><td><code>&lt;div class=\"box\"&gt;...&lt;/div&gt;</code></td></tr>" +
                "<tr><td><code>&lt;span&gt;</code></td><td>汎用インライン要素</td><td><code>&lt;span&gt;テキスト&lt;/span&gt;</code></td></tr>" +
                "</tbody></table>" +
                "<h2>属性（Attributes）</h2>" +
                "<p>HTMLタグには<strong>属性</strong>を付けることで、追加の情報を指定できます。属性は開始タグの中に「属性名=\"値\"」の形で記述します。</p>" +
                "<ul>" +
                "<li><code>id</code> - 要素に一意のIDを付ける</li>" +
                "<li><code>class</code> - CSSやJSで使うクラス名</li>" +
                "<li><code>src</code> - 画像やスクリプトのソースURL</li>" +
                "<li><code>href</code> - リンク先のURL</li>" +
                "<li><code>alt</code> - 画像の代替テキスト</li>" +
                "</ul>" +
                "<h2>セマンティックHTML</h2>" +
                "<p>HTML5では<strong>セマンティック（意味的）タグ</strong>が導入されました。<code>&lt;div&gt;</code>の代わりに意味のあるタグを使うことで、アクセシビリティやSEOが向上します。</p>" +
                "<table><thead><tr><th>タグ</th><th>意味</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><code>&lt;header&gt;</code></td><td>ヘッダー領域</td></tr>" +
                "<tr><td><code>&lt;nav&gt;</code></td><td>ナビゲーション</td></tr>" +
                "<tr><td><code>&lt;main&gt;</code></td><td>メインコンテンツ</td></tr>" +
                "<tr><td><code>&lt;article&gt;</code></td><td>独立した記事</td></tr>" +
                "<tr><td><code>&lt;section&gt;</code></td><td>セクション</td></tr>" +
                "<tr><td><code>&lt;footer&gt;</code></td><td>フッター領域</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>ポイント：</strong><code>&lt;div&gt;</code>で全てを囲むのではなく、セマンティックタグを使い分けることが現代のWeb開発では重要です。</p></div>",
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "HTMLの役割として正しいものはどれですか？",
                    options: ["Webページのデザインを整える", "Webページの構造を定義する", "Webページに動きをつける", "サーバーとの通信を行う"],
                    answer: 1,
                    explanation: "HTMLはWebページの構造（骨格）を定義するマークアップ言語です。デザインはCSS、動きはJavaScriptが担当します。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "HTMLで画像を表示するタグはどれですか？",
                    options: ["<code>&lt;a&gt;</code>", "<code>&lt;p&gt;</code>", "<code>&lt;img&gt;</code>", "<code>&lt;div&gt;</code>"],
                    answer: 2,
                    explanation: "<code>&lt;img&gt;</code>タグは画像を表示するためのタグで、src属性で画像ファイルのパスを指定し、alt属性で代替テキストを指定します。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "セマンティックHTMLを使う主なメリットはどれですか？",
                    options: ["ページの読み込みが速くなる", "アクセシビリティとSEOが向上する", "JavaScriptが不要になる", "CSSが自動的に適用される"],
                    answer: 1,
                    explanation: "セマンティックタグを使うことで、ページの構造が明確になり、スクリーンリーダーや検索エンジンがコンテンツを正しく理解できるようになります。"
                }
            ]
        }
    ]
};