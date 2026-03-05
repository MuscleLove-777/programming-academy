const LEVEL10_DATA = {
    id: 10,
    title: "API入門",
    icon: "&#128279;",
    description: "REST API、JSON、HTTPメソッド、認証を学ぶ",
    modules: [
        {
            id: 1001,
            title: "REST APIの基礎",
            duration: "15分",
            content: "<h2>APIとは</h2>" +
                "<p>API（Application Programming Interface）は、異なるソフトウェア同士が<strong>データをやり取りするための仕組み</strong>です。Webアプリケーションでは、フロントエンド（ブラウザ）とバックエンド（サーバー）がAPIを通じて通信します。</p>" +
                "<p>例えば、天気アプリは天気APIからデータを取得し、地図アプリはGoogle Maps APIを使って地図を表示しています。APIは「メニュー表」のようなもので、「こういうリクエストを送れば、こういうデータが返ってくる」という約束事です。</p>" +
                "<h2>REST APIとは</h2>" +
                "<p>REST（Representational State Transfer）は、Web APIの設計スタイルの1つです。HTTPプロトコルを活用し、URLで「リソース」を表現します。現在のWeb開発で最も主流なAPI設計方式です。</p>" +
                "<h2>HTTPメソッド</h2>" +
                "<table><thead><tr><th>メソッド</th><th>操作</th><th>CRUD対応</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>GET</strong></td><td>データ取得</td><td>Read</td><td>ユーザー一覧の取得</td></tr>" +
                "<tr><td><strong>POST</strong></td><td>データ作成</td><td>Create</td><td>新規ユーザーの登録</td></tr>" +
                "<tr><td><strong>PUT</strong></td><td>データ全体更新</td><td>Update</td><td>ユーザー情報の更新</td></tr>" +
                "<tr><td><strong>PATCH</strong></td><td>データ部分更新</td><td>Update</td><td>メールアドレスのみ変更</td></tr>" +
                "<tr><td><strong>DELETE</strong></td><td>データ削除</td><td>Delete</td><td>ユーザーの削除</td></tr>" +
                "</tbody></table>" +
                "<h2>RESTful URL設計</h2>" +
                "<table><thead><tr><th>操作</th><th>メソッド</th><th>URL</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>全ユーザー取得</td><td>GET</td><td>/api/users</td></tr>" +
                "<tr><td>特定ユーザー取得</td><td>GET</td><td>/api/users/1</td></tr>" +
                "<tr><td>ユーザー作成</td><td>POST</td><td>/api/users</td></tr>" +
                "<tr><td>ユーザー更新</td><td>PUT</td><td>/api/users/1</td></tr>" +
                "<tr><td>ユーザー削除</td><td>DELETE</td><td>/api/users/1</td></tr>" +
                "</tbody></table>" +
                "<h2>JSON</h2>" +
                "<p>JSON（JavaScript Object Notation）は、APIでデータをやり取りする際の<strong>標準的なデータ形式</strong>です。人間にも読みやすく、どのプログラミング言語でも扱えます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JSON</span></div><pre><code>{\n    \"id\": 1,\n    \"name\": \"太郎\",\n    \"email\": \"taro@example.com\",\n    \"age\": 25,\n    \"isActive\": true,\n    \"skills\": [\"JavaScript\", \"Python\", \"SQL\"]\n}</code></pre></div>" +
                "<h2>HTTPステータスコード</h2>" +
                "<table><thead><tr><th>コード</th><th>意味</th><th>説明</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>200</strong></td><td>OK</td><td>リクエスト成功</td></tr>" +
                "<tr><td><strong>201</strong></td><td>Created</td><td>リソース作成成功</td></tr>" +
                "<tr><td><strong>400</strong></td><td>Bad Request</td><td>リクエストが不正</td></tr>" +
                "<tr><td><strong>401</strong></td><td>Unauthorized</td><td>認証が必要</td></tr>" +
                "<tr><td><strong>403</strong></td><td>Forbidden</td><td>アクセス権限なし</td></tr>" +
                "<tr><td><strong>404</strong></td><td>Not Found</td><td>リソースが見つからない</td></tr>" +
                "<tr><td><strong>500</strong></td><td>Internal Server Error</td><td>サーバー内部エラー</td></tr>" +
                "</tbody></table>" +
                "<h2>認証方式</h2>" +
                "<table><thead><tr><th>方式</th><th>説明</th><th>使い所</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>APIキー</strong></td><td>固定のキー文字列をリクエストに含める</td><td>シンプルなAPI</td></tr>" +
                "<tr><td><strong>Bearer Token</strong></td><td>認証トークンをAuthorizationヘッダーに含める</td><td>モダンなWeb API</td></tr>" +
                "<tr><td><strong>OAuth 2.0</strong></td><td>第三者サービスによる認証委譲</td><td>Google/GitHub連携</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>ポイント：</strong>REST APIは「HTTPメソッド + URL + JSON」という3つの要素で構成されます。このパターンを理解すれば、ほとんどのWeb APIを利用できるようになります。</p></div>",
            quiz: [
                {
                    id: "q1001_1",
                    type: "choice",
                    question: "REST APIで新しいリソースを作成するHTTPメソッドはどれですか？",
                    options: ["GET", "POST", "PUT", "DELETE"],
                    answer: 1,
                    explanation: "POSTメソッドは新しいリソースを作成するために使います。CRUDのCreate操作に対応します。"
                },
                {
                    id: "q1001_2",
                    type: "choice",
                    question: "HTTPステータスコード404の意味はどれですか？",
                    options: ["リクエスト成功", "認証が必要", "リソースが見つからない", "サーバーエラー"],
                    answer: 2,
                    explanation: "404 Not Foundは、リクエストされたリソース（URL）が見つからないことを示すステータスコードです。"
                },
                {
                    id: "q1001_3",
                    type: "choice",
                    question: "APIでデータをやり取りする際の標準的なデータ形式はどれですか？",
                    options: ["XML", "CSV", "JSON", "YAML"],
                    answer: 2,
                    explanation: "JSON（JavaScript Object Notation）は現代のWeb APIで最も広く使われているデータ交換形式です。軽量で人間にも読みやすいのが特徴です。"
                }
            ]
        }
    ]
};