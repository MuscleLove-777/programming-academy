const LEVEL7_DATA = {
    id: 7,
    title: "Git入門",
    icon: "&#128195;",
    description: "バージョン管理、commit、branch、GitHubを学ぶ",
    modules: [
        {
            id: 701,
            title: "Gitとバージョン管理",
            duration: "15分",
            content: "<h2>バージョン管理とは</h2>" +
                "<p>バージョン管理とは、ファイルの変更履歴を記録・管理するシステムです。プログラミングでは、コードの変更を追跡し、過去の状態に戻したり、複数人で同時に開発したりするためにバージョン管理が不可欠です。</p>" +
                "<p>バージョン管理がない場合、「最新版_最終_v3_修正済み.zip」のようなファイル名管理になり、どれが本当の最新かわからなくなります。Gitを使えば、全ての変更履歴が正確に記録されます。</p>" +
                "<h2>Gitとは</h2>" +
                "<p><strong>Git</strong>は世界で最も広く使われている分散型バージョン管理システムです。Linus Torvalds（Linuxの作者）が2005年に開発しました。ローカルで完結する高速な操作と、強力なブランチ機能が特徴です。</p>" +
                "<h2>Gitの基本概念</h2>" +
                "<table><thead><tr><th>用語</th><th>説明</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>リポジトリ</strong></td><td>プロジェクトの全ファイルと変更履歴を格納する場所</td></tr>" +
                "<tr><td><strong>コミット</strong></td><td>変更のスナップショット。「セーブポイント」のようなもの</td></tr>" +
                "<tr><td><strong>ステージング</strong></td><td>コミットする変更を選択する作業領域</td></tr>" +
                "<tr><td><strong>ブランチ</strong></td><td>開発の流れを分岐させる機能</td></tr>" +
                "<tr><td><strong>マージ</strong></td><td>分岐したブランチを統合する</td></tr>" +
                "</tbody></table>" +
                "<h2>基本的なGitコマンド</h2>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>BASH</span></div><pre><code># リポジトリの初期化\ngit init\n\n# 変更状態の確認\ngit status\n\n# ファイルをステージングに追加\ngit add ファイル名\ngit add .            # 全ファイル追加\n\n# コミット（変更を記録）\ngit commit -m \"変更内容の説明\"\n\n# コミット履歴の確認\ngit log --oneline\n\n# 差分の確認\ngit diff</code></pre></div>" +
                "<h2>ブランチ</h2>" +
                "<p>ブランチは「作業の分岐」です。新機能の開発やバグ修正を、メインのコードに影響を与えずに安全に行えます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>BASH</span></div><pre><code># ブランチの作成と切り替え\ngit branch feature/login    # 作成\ngit checkout feature/login  # 切り替え\ngit checkout -b feature/login  # 作成+切り替えを同時に\n\n# ブランチの一覧\ngit branch\n\n# マージ（mainブランチに統合）\ngit checkout main\ngit merge feature/login\n\n# ブランチの削除\ngit branch -d feature/login</code></pre></div>" +
                "<h2>GitHub</h2>" +
                "<p><strong>GitHub</strong>はGitリポジトリをクラウドでホスティングするサービスです。コードの共有、チーム開発、プルリクエストによるコードレビューなどが行えます。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>BASH</span></div><pre><code># リモートリポジトリの追加\ngit remote add origin https://github.com/user/repo.git\n\n# プッシュ（ローカルの変更をリモートに送信）\ngit push origin main\n\n# プル（リモートの変更をローカルに取得）\ngit pull origin main\n\n# クローン（リモートリポジトリをコピー）\ngit clone https://github.com/user/repo.git</code></pre></div>" +
                "<div class='info-box tip'><p><strong>コミットメッセージのコツ：</strong>「何を」「なぜ」変更したかを簡潔に書きましょう。例：「ログイン機能を追加」「バリデーションのバグを修正」など、動詞で始めると読みやすくなります。</p></div>",
            quiz: [
                {
                    id: "q701_1",
                    type: "choice",
                    question: "Gitのコミットとは何ですか？",
                    options: ["ファイルを削除すること", "変更のスナップショットを記録すること", "リモートにファイルを送信すること", "ブランチを作成すること"],
                    answer: 1,
                    explanation: "コミットは変更のスナップショット（セーブポイント）を記録する操作です。誰が、いつ、何を変更したかが記録されます。"
                },
                {
                    id: "q701_2",
                    type: "choice",
                    question: "Gitでブランチを使う主な目的はどれですか？",
                    options: ["ファイルを削除するため", "メインコードに影響を与えずに開発するため", "コミット履歴を消すため", "リモートリポジトリを作成するため"],
                    answer: 1,
                    explanation: "ブランチを使うことで、メインのコード（mainブランチ）に影響を与えずに新機能開発やバグ修正を安全に行えます。"
                },
                {
                    id: "q701_3",
                    type: "choice",
                    question: "GitHubの「プッシュ（push）」とは何ですか？",
                    options: ["リモートの変更をローカルに取得する", "ローカルの変更をリモートに送信する", "ブランチを統合する", "リポジトリを初期化する"],
                    answer: 1,
                    explanation: "pushはローカルリポジトリのコミットをリモートリポジトリ（GitHub等）に送信する操作です。逆にpullはリモートからローカルに取得します。"
                }
            ]
        }
    ]
};