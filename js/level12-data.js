const LEVEL12_DATA = {
    id: 12,
    title: "開発プラクティス",
    icon: "&#128640;",
    description: "テスト、デバッグ、セキュリティ基礎、デプロイを学ぶ",
    modules: [
        {
            id: 1201,
            title: "テスト・セキュリティ・デプロイ",
            duration: "15分",
            content: "<h2>テスト</h2>" +
                "<p>テストは、コードが期待通りに動作することを<strong>自動的に検証</strong>する仕組みです。テストを書くことで、バグの早期発見、リファクタリングの安全性確保、チーム開発での品質維持が可能になります。</p>" +
                "<h3>テストの種類</h3>" +
                "<table><thead><tr><th>種類</th><th>対象</th><th>特徴</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>単体テスト</strong></td><td>個々の関数・メソッド</td><td>高速、最も基本的</td></tr>" +
                "<tr><td><strong>統合テスト</strong></td><td>複数のモジュールの連携</td><td>API、DB連携のテスト</td></tr>" +
                "<tr><td><strong>E2Eテスト</strong></td><td>ブラウザ操作を含む全体</td><td>ユーザー視点のテスト</td></tr>" +
                "</tbody></table>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>JavaScript (Jest)</span></div><pre><code>// 関数の定義\nfunction add(a, b) {\n    return a + b;\n}\n\n// テストコード\ndescribe('add関数', () => {\n    test('1 + 2 は 3 になる', () => {\n        expect(add(1, 2)).toBe(3);\n    });\n\n    test('負の数の計算', () => {\n        expect(add(-1, 1)).toBe(0);\n    });\n\n    test('0を足しても変わらない', () => {\n        expect(add(5, 0)).toBe(5);\n    });\n});</code></pre></div>" +
                "<h2>デバッグ</h2>" +
                "<p>デバッグは、プログラムの不具合（バグ）を発見し修正するプロセスです。効率的なデバッグスキルは開発者にとって必須のスキルです。</p>" +
                "<h3>デバッグの手法</h3>" +
                "<table><thead><tr><th>手法</th><th>説明</th><th>ツール</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>console.log</strong></td><td>変数の値をコンソールに出力</td><td>ブラウザDevTools</td></tr>" +
                "<tr><td><strong>ブレークポイント</strong></td><td>実行を一時停止して状態を確認</td><td>Chrome DevTools, VS Code</td></tr>" +
                "<tr><td><strong>ステップ実行</strong></td><td>1行ずつ実行して動作を追跡</td><td>デバッガー</td></tr>" +
                "<tr><td><strong>ネットワーク監視</strong></td><td>API通信の内容を確認</td><td>DevTools Networkタブ</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>デバッグのコツ：</strong>1. エラーメッセージを注意深く読む。2. 問題を小さく分割する。3. 「直前に何を変更したか」を振り返る。4. 仮説を立てて検証する。</p></div>" +
                "<h2>セキュリティ基礎</h2>" +
                "<p>Webアプリケーションは常にセキュリティリスクにさらされています。OWASP Top 10に挙げられる代表的な脆弱性を理解し、対策しましょう。</p>" +
                "<table><thead><tr><th>脆弱性</th><th>内容</th><th>対策</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>XSS</strong></td><td>悪意のあるスクリプトを注入</td><td>入力値のエスケープ、CSP</td></tr>" +
                "<tr><td><strong>SQLインジェクション</strong></td><td>SQL文を不正に操作</td><td>プリペアドステートメント</td></tr>" +
                "<tr><td><strong>CSRF</strong></td><td>偽のリクエストを送信</td><td>CSRFトークン</td></tr>" +
                "<tr><td><strong>認証の不備</strong></td><td>パスワード管理の甘さ</td><td>ハッシュ化、多要素認証</td></tr>" +
                "</tbody></table>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>セキュリティの原則</span></div><pre><code>1. ユーザー入力は全て信用しない（バリデーション必須）\n2. パスワードは平文で保存しない（bcryptでハッシュ化）\n3. HTTPS を使う（通信の暗号化）\n4. 最小権限の原則（必要な権限のみ付与）\n5. 依存パッケージを定期的に更新する</code></pre></div>" +
                "<h2>デプロイ</h2>" +
                "<p>デプロイとは、開発したアプリケーションを<strong>本番環境（インターネット上）に公開</strong>するプロセスです。</p>" +
                "<table><thead><tr><th>サービス</th><th>特徴</th><th>適した用途</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>GitHub Pages</strong></td><td>静的サイトの無料ホスティング</td><td>ポートフォリオ、ドキュメント</td></tr>" +
                "<tr><td><strong>Vercel</strong></td><td>Next.js最適化、自動デプロイ</td><td>フロントエンドアプリ</td></tr>" +
                "<tr><td><strong>Netlify</strong></td><td>静的サイト + サーバーレス</td><td>JAMstackアプリ</td></tr>" +
                "<tr><td><strong>Heroku</strong></td><td>フルスタックアプリ対応</td><td>バックエンド含むアプリ</td></tr>" +
                "<tr><td><strong>AWS / GCP</strong></td><td>本格的なクラウドインフラ</td><td>大規模アプリ</td></tr>" +
                "</tbody></table>" +
                "<h3>CI/CD</h3>" +
                "<p>CI/CD（継続的インテグレーション/継続的デリバリー）は、コードの変更を自動的にテスト・ビルド・デプロイする仕組みです。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>CI/CDの流れ</span></div><pre><code>1. コードをGitHubにプッシュ\n2. CI: 自動テスト実行（GitHub Actions等）\n3. テスト全件パス → ビルド実行\n4. CD: 本番環境に自動デプロイ\n5. 問題があれば自動ロールバック</code></pre></div>" +
                "<div class='info-box success'><p><strong>おめでとうございます！</strong>ここまで学んだHTML/CSS/JavaScript/Python/Git/データベース/API/フレームワーク/テスト/セキュリティ/デプロイの知識があれば、Webアプリケーション開発の全体像を理解できています。あとは実際にプロジェクトを作って経験を積みましょう！</p></div>",
            quiz: [
                {
                    id: "q1201_1",
                    type: "choice",
                    question: "個々の関数やメソッドの動作を検証するテストは何と呼ばれますか？",
                    options: ["E2Eテスト", "統合テスト", "単体テスト", "回帰テスト"],
                    answer: 2,
                    explanation: "単体テスト（ユニットテスト）は個々の関数やメソッドが正しく動作することを検証する最も基本的なテストです。"
                },
                {
                    id: "q1201_2",
                    type: "choice",
                    question: "SQLインジェクション攻撃への対策として正しいものはどれですか？",
                    options: ["入力値の文字数を制限する", "HTTPSを使う", "プリペアドステートメントを使う", "パスワードをハッシュ化する"],
                    answer: 2,
                    explanation: "プリペアドステートメント（パラメータ化クエリ）はSQL文と入力値を分離するため、SQLインジェクション攻撃を防ぐ最も効果的な方法です。"
                },
                {
                    id: "q1201_3",
                    type: "choice",
                    question: "CI/CDの「CI」は何を意味しますか？",
                    options: ["Continuous Improvement", "Continuous Integration", "Code Inspection", "Cloud Infrastructure"],
                    answer: 1,
                    explanation: "CIはContinuous Integration（継続的インテグレーション）の略で、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。"
                }
            ]
        }
    ]
};