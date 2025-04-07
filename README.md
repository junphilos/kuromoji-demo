# kuromoji-demo

## スタート

```shell

# パッケージをインストール（この章はここだけでOK）
npm init -y
npm install

#### 同梱しているもの紹介
# esbuild
# npm install --save-dev esbuild

# kuromoji.js（シェルスクリプト側でやるのでnpm不要）
# npm install kuromoji @types/kuromoji

# 11ty（サーバー立ち上げるのに使っています）
# npm install --save-dev @11ty/eleventy

# 色つけ
# npm install --save-dev chalk
```

## Taskfileインストール

<https://taskfile.dev/installation/> から好きなインストール方法でインストール。以下は抜粋。

```shell
# all
npm install -g @go-task/cli
pip install go-task-bin

# mac
brew install go-task/tap/go-task

# windows
winget install Task.Task
```

## 公式ビルド済みのKuromoji.jsと辞書のインストール

ビルド済みのスクリプトをコピーしてくる処理です。シェルスクリプト入れてあり、Taskfileからタスク実行するので実際には打ちません。紹介のみ。

```shell
# bash shell/copy.sh
```

## 実行

`Taskfile.yaml`にまとめてあります。初回は`$ task init`で準備します。`http://localhost:3000`です。

```shell
task init
```

## サイト仕様

`textarea`に日本語の文章が入力されると、約1秒後にパースがはじまって、結果が表示されます。

## フォント

Google Fonts - Zen Old Mincho

<https://fonts.google.com/specimen/Zen+Old+Mincho>