const LEVEL8_DATA = {
    id: 8,
    title: "Python基礎",
    icon: "&#128013;",
    description: "変数、リスト、辞書、制御構文、関数を学ぶ",
    modules: [
        {
            id: 801,
            title: "Pythonの基本文法",
            duration: "20分",
            content: "<h2>Pythonとは</h2>" +
                "<p>Pythonは1991年にGuido van Rossumによって開発された汎用プログラミング言語です。<strong>シンプルで読みやすい文法</strong>が最大の特徴で、初心者にも学びやすく、データ分析、AI・機械学習、Web開発、自動化スクリプトなど幅広い分野で使われています。</p>" +
                "<p>GoogleやNetflix、Instagram、NASAなど、世界の主要企業・組織でPythonが活用されています。2024年時点で最も人気のあるプログラミング言語の1つです。</p>" +
                "<h2>変数と型</h2>" +
                "<p>Pythonは<strong>動的型付け言語</strong>で、変数の型を明示的に指定する必要がありません。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>Python</span></div><pre><code># 変数の代入（型の宣言は不要）\nname = \"太郎\"          # 文字列（str）\nage = 25               # 整数（int）\nheight = 175.5         # 浮動小数点（float）\nis_student = True      # 真偽値（bool）\n\n# 型の確認\nprint(type(name))      # &lt;class 'str'&gt;\nprint(type(age))       # &lt;class 'int'&gt;\n\n# 文字列フォーマット（f-string）\nprint(f\"{name}さんは{age}歳です\")</code></pre></div>" +
                "<h2>リスト（List）</h2>" +
                "<p>リストは複数の値を順番に格納するデータ構造で、JavaScriptの配列に相当します。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>Python</span></div><pre><code>fruits = [\"りんご\", \"みかん\", \"バナナ\"]\nprint(fruits[0])       # りんご\nprint(len(fruits))     # 3\n\n# 要素の追加・削除\nfruits.append(\"ぶどう\")  # 末尾に追加\nfruits.remove(\"みかん\")  # 指定要素を削除\n\n# スライス\nprint(fruits[0:2])     # ['りんご', 'バナナ']\n\n# リスト内包表記\nnumbers = [1, 2, 3, 4, 5]\ndoubled = [n * 2 for n in numbers]  # [2, 4, 6, 8, 10]\nevens = [n for n in numbers if n % 2 == 0]  # [2, 4]</code></pre></div>" +
                "<h2>辞書（Dictionary）</h2>" +
                "<p>辞書はキーと値のペアでデータを管理する構造で、JavaScriptのオブジェクトに相当します。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>Python</span></div><pre><code>user = {\n    \"name\": \"太郎\",\n    \"age\": 25,\n    \"city\": \"東京\"\n}\n\nprint(user[\"name\"])      # 太郎\nprint(user.get(\"age\"))   # 25\n\n# キー・値の取得\nprint(user.keys())       # dict_keys(['name', 'age', 'city'])\nprint(user.values())     # dict_values(['太郎', 25, '東京'])\n\n# 要素の追加・更新\nuser[\"email\"] = \"taro@example.com\"</code></pre></div>" +
                "<h2>制御構文</h2>" +
                "<p>Pythonでは<strong>インデント（字下げ）</strong>がブロックの範囲を決定します。波括弧 {} は使いません。</p>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>Python</span></div><pre><code># if文\nscore = 85\nif score >= 80:\n    print(\"合格！\")\nelif score >= 60:\n    print(\"もう少し\")\nelse:\n    print(\"不合格\")\n\n# for文\nfor fruit in fruits:\n    print(fruit)\n\nfor i in range(5):     # 0, 1, 2, 3, 4\n    print(i)\n\n# while文\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1</code></pre></div>" +
                "<h2>関数</h2>" +
                "<div class='code-block'><div class='code-block-header'><span class='code-lang'>Python</span></div><pre><code>def greet(name, greeting=\"こんにちは\"):\n    \"\"\"挨拶を返す関数\"\"\"\n    return f\"{greeting}、{name}さん！\"\n\nprint(greet(\"太郎\"))              # こんにちは、太郎さん！\nprint(greet(\"花子\", \"おはよう\"))   # おはよう、花子さん！\n\n# ラムダ式（無名関数）\nadd = lambda a, b: a + b\nprint(add(3, 5))  # 8</code></pre></div>" +
                "<div class='info-box tip'><p><strong>Python vs JavaScript：</strong>PythonはインデントベースでJavaScriptは波括弧ベース。Pythonの方が文法がシンプルですが、Web開発ではJavaScriptが必須です。どちらも学ぶ価値があります。</p></div>",
            quiz: [
                {
                    id: "q801_1",
                    type: "choice",
                    question: "Pythonの特徴として正しいものはどれですか？",
                    options: ["型を必ず宣言する必要がある", "波括弧 {} でブロックを定義する", "インデントでブロックの範囲を決定する", "コンパイルが必要な言語である"],
                    answer: 2,
                    explanation: "Pythonではインデント（字下げ）がコードブロックの範囲を決定します。波括弧やend文は使いません。"
                },
                {
                    id: "q801_2",
                    type: "choice",
                    question: "Pythonのリスト内包表記の正しい書き方はどれですか？",
                    options: ["[n * 2 for n in numbers]", "numbers.map(n => n * 2)", "{n * 2 : n in numbers}", "for n in numbers: n * 2"],
                    answer: 0,
                    explanation: "Pythonのリスト内包表記は [式 for 変数 in イテラブル] の形で書きます。JavaScriptのmap()に相当する機能です。"
                },
                {
                    id: "q801_3",
                    type: "choice",
                    question: "Pythonの辞書（dictionary）で値を安全に取得するメソッドはどれですか？",
                    options: ["dict.find()", "dict.get()", "dict.fetch()", "dict.value()"],
                    answer: 1,
                    explanation: "get()メソッドはキーが存在しない場合にNone（またはデフォルト値）を返します。直接アクセス（dict[key]）はキーがないとエラーになります。"
                }
            ]
        }
    ]
};