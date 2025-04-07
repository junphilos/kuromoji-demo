#!/bin/bash

# リポジトリをクローン
git clone git@github.com:takuyaa/kuromoji.js.git

# クローンしたディレクトリに移動
cd kuromoji.js

# distディレクトリが存在しない場合は作成
mkdir -p ../dist

# build/kuromoji.js を ../dist/ にコピー
cp build/kuromoji.js ../dist/

# dictディレクトリを ../dist/dict/ に再帰的にコピー
mkdir -p ../dist/dict
cp -r dict/* ../dist/dict/

# 元のディレクトリに戻る
cd ..

# クローンしたリポジトリを削除
rm -rf kuromoji.js

echo "kuromoji.js と辞書ファイルが dist ディレクトリにコピーされました"
echo "クローンしたリポジトリは削除されました"