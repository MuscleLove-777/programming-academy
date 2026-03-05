const LEVEL11_DATA = {
    id: 11,
    title: "Webアプリ開発",
    icon: "&#127959;",
    description: "フレームワーク概要、MVC、CRUD操作を学ぶ",
    modules: [
        {
            id: 1101,
            title: "フレームワークとWebアプリ構成",
            duration: "15分",
            content: "<h2>Webアプリケーションの仕組み</h2>" +
                "<p>Webアプリケーションは<strong>フロントエンド</strong>（ブラウザ側）と<strong>バックエンド</strong>（サーバー側）の2つの層で構成されます。ユーザーがブラウザで操作すると、フロントエンドがバックエンドにリクエストを送り、バックエンドがデータベースと連携してレスポンスを返します。</p>" +
                "<table><thead><tr><th>層</th><th>役割</th><th>技術例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>フロントエンド</strong></td><td>UIの表示、ユーザー操作</td><td>HTML, CSS, JavaScript, React, Vue</td></tr>" +
                "<tr><td><strong>バックエンド</strong></td><td>ビジネスロジック、API提供</td><td>Node.js, Python, Ruby, Java</td></tr>" +
                "<tr><td><strong>データベース</strong></td><td>データの永続化</td><td>MySQL, PostgreSQL, MongoDB</td></tr>" +
                "</tbody></table>" +
                "<h2>フレームワークとは</h2>" +
                "<p>フレームワークは、Webアプリケーション開発に必要な機能（ルーティング、テンプレート、DB接続など）を<strong>あらかじめ用意した土台</strong>です。ゼロから全てを作る代わりに、フレームワークの仕組みに沿って開発することで、生産性が大幅に向上します。</p>" +
                "<h3>主要なフレームワーク</h3>" +
                "<table><thead><tr><th>フレームワーク</th><th>言語</th><th>特徴</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>React</strong></td><td>JavaScript</td><td>UIライブラリ、コンポーネント指向、最も人気</td></tr>" +
                "<tr><td><strong>Vue.js</strong></td><td>JavaScript</td><td>学習コスト低、日本で人気</td></tr>" +
                "<tr><td><strong>Next.js</strong></td><td>JavaScript</td><td>React + SSR/SSG、フルスタック</td></tr>" +
                "<tr><td><strong>Express</strong></td><td>JavaScript</td><td>Node.jsのバックエンドフレームワーク</td></tr>" +
                "<tr><td><strong>Django</strong></td><td>Python</td><td>フルスタック、管理画面自動生成</td></tr>" +
                "<tr><td><strong>Flask</strong></td><td>Python</td><td>軽量、マイクロフレームワーク</td></tr>" +
                "<tr><td><strong>Ruby on Rails</strong></td><td>Ruby</td><td>高速開発、規約重視</td></tr>" +
                "</tbody></table>" +
                "<h2>MVCアーキテクチャ</h2>" +
                "<p>MVC（Model-View-Controller）は、Webアプリケーションの設計パターンです。責務を3つに分離することで、コードの保守性と再利用性が向上します。</p>" +
                "<table><thead><tr><th>層</th><th>役割</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Model</strong></td><td>データとビジネスロジック</td><td>ユーザーモデル、データベース操作</td></tr>" +
                "<tr><td><strong>View</strong></td><td>画面表示（UI）</td><td>HTMLテンプレート、Reactコンポーネント</td></tr>" +
                "<tr><td><strong>Controller</strong></td><td>リクエスト処理の制御</td><td>ルーティング、入力の検証</td></tr>" +
                "</tbody></table>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>例：ユーザー表示の流れ</span></div><pre><code>1. ブラウザ → /users にアクセス\n2. Controller → リクエストを受け取り、Modelに問い合わせ\n3. Model → データベースからユーザーデータを取得\n4. Controller → 取得したデータをViewに渡す\n5. View → HTMLを生成してブラウザに返す</code></pre></div>" +
                "<h2>CRUD操作の実装例</h2>" +
                "<p>ほぼ全てのWebアプリは<strong>CRUD操作</strong>（作成・読取・更新・削除）で成り立っています。Expressでの実装例を見てみましょう。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript (Express)</span></div><pre><code>const express = require('express');\nconst app = express();\n\n// Read - 一覧取得\napp.get('/api/users', (req, res) => {\n    res.json(users);\n});\n\n// Create - 新規作成\napp.post('/api/users', (req, res) => {\n    const newUser = req.body;\n    users.push(newUser);\n    res.status(201).json(newUser);\n});\n\n// Update - 更新\napp.put('/api/users/:id', (req, res) => {\n    const user = users.find(u => u.id === req.params.id);\n    Object.assign(user, req.body);\n    res.json(user);\n});\n\n// Delete - 削除\napp.delete('/api/users/:id', (req, res) => {\n    users = users.filter(u => u.id !== req.params.id);\n    res.status(204).send();\n});</code></pre></div>" +
                "<div class='info-box tip'><p><strong>学習の順序：</strong>まずHTML/CSS/JavaScriptの基礎を固め、次にReactやVueなどのフロントエンドフレームワーク、その後Express/Django等のバックエンドを学ぶのが効率的です。</p></div>",
            quiz: [
                {
                    id: "q1101_1",
                    type: "choice",
                    question: "MVCアーキテクチャで、データとビジネスロジックを担当するのはどれですか？",
                    options: ["Model", "View", "Controller", "Router"],
                    answer: 0,
                    explanation: "Modelはデータベースとのやり取りやビジネスロジックを担当します。ViewはUI表示、Controllerはリクエスト処理の制御を担当します。"
                },
                {
                    id: "q1101_2",
                    type: "choice",
                    question: "フレームワークを使う最大のメリットはどれですか？",
                    options: ["プログラミング言語を学ばなくてよい", "あらかじめ用意された機能で開発生産性が向上する", "データベースが不要になる", "テストが自動で行われる"],
                    answer: 1,
                    explanation: "フレームワークはルーティング、DB接続、テンプレートなどの共通機能を提供し、開発者はビジネスロジックに集中できるため、生産性が大幅に向上します。"
                },
                {
                    id: "q1101_3",
                    type: "choice",
                    question: "CRUDの「C」は何を表しますか？",
                    options: ["Connect", "Create", "Control", "Compile"],
                    answer: 1,
                    explanation: "CRUDはCreate（作成）、Read（読取）、Update（更新）、Delete（削除）の頭文字です。ほぼ全てのWebアプリはこの4操作で成り立っています。"
                }
            ]
        }
    ]
};