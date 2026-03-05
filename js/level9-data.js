const LEVEL9_DATA = {
    id: 9,
    title: "データベース入門",
    icon: "&#128451;",
    description: "SQL基礎、SELECT/INSERT/UPDATE/DELETEを学ぶ",
    modules: [
        {
            id: 901,
            title: "SQLとデータベース基礎",
            duration: "15分",
            content: "<h2>データベースとは</h2>" +
                "<p>データベースは、データを<strong>構造的に整理して保存・管理</strong>するためのシステムです。Webアプリケーションのユーザー情報、商品データ、投稿内容など、あらゆるデータはデータベースに保存されます。</p>" +
                "<p>例えば、ECサイトでは商品情報、ユーザー情報、注文履歴などがデータベースに格納されており、ページを表示するたびにデータベースから必要なデータを取得しています。</p>" +
                "<h2>リレーショナルデータベース（RDB）</h2>" +
                "<p>最も広く使われるデータベースの形式は<strong>リレーショナルデータベース</strong>です。データを「テーブル（表）」の形で管理し、テーブル同士を関連付け（リレーション）できます。</p>" +
                "<table><thead><tr><th>RDBMS</th><th>特徴</th><th>用途</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>MySQL</strong></td><td>世界で最も普及、無料</td><td>Webアプリ全般</td></tr>" +
                "<tr><td><strong>PostgreSQL</strong></td><td>高機能、拡張性が高い</td><td>大規模アプリ</td></tr>" +
                "<tr><td><strong>SQLite</strong></td><td>ファイルベース、軽量</td><td>モバイルアプリ、小規模</td></tr>" +
                "<tr><td><strong>SQL Server</strong></td><td>Microsoft製</td><td>企業システム</td></tr>" +
                "</tbody></table>" +
                "<h2>テーブルの構造</h2>" +
                "<p>テーブルは「列（カラム）」と「行（レコード）」で構成されます。以下はusersテーブルの例です。</p>" +
                "<table><thead><tr><th>id</th><th>name</th><th>email</th><th>age</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>1</td><td>太郎</td><td>taro@example.com</td><td>25</td></tr>" +
                "<tr><td>2</td><td>花子</td><td>hanako@example.com</td><td>30</td></tr>" +
                "<tr><td>3</td><td>次郎</td><td>jiro@example.com</td><td>22</td></tr>" +
                "</tbody></table>" +
                "<h2>SQL基本操作（CRUD）</h2>" +
                "<h3>SELECT（データの取得）</h3>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>SQL</span></div><pre><code>-- 全データ取得\nSELECT * FROM users;\n\n-- 特定のカラムだけ取得\nSELECT name, email FROM users;\n\n-- 条件付き取得\nSELECT * FROM users WHERE age >= 25;\n\n-- 並び替え\nSELECT * FROM users ORDER BY age DESC;\n\n-- 件数制限\nSELECT * FROM users LIMIT 10;\n\n-- 集計\nSELECT COUNT(*) FROM users;\nSELECT AVG(age) FROM users;</code></pre></div>" +
                "<h3>INSERT（データの挿入）</h3>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>SQL</span></div><pre><code>INSERT INTO users (name, email, age)\nVALUES ('三郎', 'saburo@example.com', 28);</code></pre></div>" +
                "<h3>UPDATE（データの更新）</h3>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>SQL</span></div><pre><code>UPDATE users\nSET age = 26\nWHERE name = '太郎';</code></pre></div>" +
                "<h3>DELETE（データの削除）</h3>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>SQL</span></div><pre><code>DELETE FROM users WHERE id = 3;</code></pre></div>" +
                "<div class='info-box danger'><p><strong>注意：</strong>UPDATEやDELETEでWHERE句を忘れると、全レコードが更新・削除されます。必ず条件を指定しましょう。</p></div>" +
                "<h2>主キーと外部キー</h2>" +
                "<table><thead><tr><th>概念</th><th>説明</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>主キー（PRIMARY KEY）</strong></td><td>各レコードを一意に識別するカラム（通常はid）</td></tr>" +
                "<tr><td><strong>外部キー（FOREIGN KEY）</strong></td><td>他のテーブルの主キーを参照するカラム</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>CRUDとは：</strong>Create（INSERT）、Read（SELECT）、Update（UPDATE）、Delete（DELETE）の頭文字で、データベース操作の基本4操作です。ほぼ全てのアプリケーションはこのCRUD操作で成り立っています。</p></div>",
            quiz: [
                {
                    id: "q901_1",
                    type: "choice",
                    question: "SQLでデータを取得する命令はどれですか？",
                    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
                    answer: 2,
                    explanation: "SELECTはデータベースからデータを取得するSQL命令です。CRUDのRead（読み取り）に相当します。"
                },
                {
                    id: "q901_2",
                    type: "choice",
                    question: "UPDATE文やDELETE文でWHERE句を省略するとどうなりますか？",
                    options: ["エラーが発生する", "何も起きない", "全レコードが対象になる", "最初の1件だけが対象になる"],
                    answer: 2,
                    explanation: "WHERE句を省略すると条件なしとなり、テーブルの全レコードが更新・削除の対象になります。非常に危険な操作です。"
                },
                {
                    id: "q901_3",
                    type: "choice",
                    question: "主キー（PRIMARY KEY）の役割はどれですか？",
                    options: ["データを暗号化する", "各レコードを一意に識別する", "テーブルを結合する", "データを並び替える"],
                    answer: 1,
                    explanation: "主キーは各レコード（行）を一意に識別するためのカラムです。通常はid列に設定され、重複やNULLは許可されません。"
                }
            ]
        }
    ]
};