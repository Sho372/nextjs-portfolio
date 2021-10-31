---
title: 'My VSCode Settings'
date: '2021-08-15'
---

- [設定同期](#設定同期)
- [ショートカット](#ショートカット)
  - [設定](#設定)
    - [デフォルト](#デフォルト)
    - [ユーザー定義](#ユーザー定義)
    - [基本ムーブ](#基本ムーブ)
- [Settings](#settings)
    - [Theme](#theme)
    - [Vim emulator](#vim-emulator)
    - [Font](#font)
    - [UI](#ui)
- [Extensions](#extensions)
  - [JS](#js)
  - [Markdown](#markdown)
- [Debug](#debug)

メインエディタをVimからVScodeにしようかなと思ったのでメモ書き

- VSCodeの設定同期がGithubアカウントでできるの楽すぎる。個人PCと会社PCがすぐに同期できるのありがたすぎる。環境に少しでも違いがあると気になるのでこれが個人的に重要。Vimも.vimrcをGithubで管理して同期させてるけど、こっちのほうが断然楽
- ターミナルをエディタで扱えるようになったのも地味に変えようと思った理由

    [[待望のアップデート] VSCodeの内蔵ターミナルがエディタと同様に扱えるようになりました！ | DevelopersIO](https://dev.classmethod.jp/articles/202107-vscode-terminal-on-edit-area/)

# 設定同期

自分のgithub accountで同期

[Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)

# ショートカット

## 設定

- `alt + s + alt + p`でショートカット設定を開いて設定
- 被っているショートカットの検索は、検索窓の `recorded keys` に切り替えてショートカットで検索。
  - これでvimコマンドと被っているコマンドも確認できる

### デフォルト

1. User settings： `Ctrl + ,`  `Command + ,`
2. コマンドパレット： `Ctrl + Shift + p`  `Shift + Command + p`

その他のデフォルトのショートカット

* [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

### ユーザー定義

|項目   |説明   | プラグイン名    | ショートカット  |
|---|---|-----|--|
|ショートカット設定 |ショートカットのキーを順番にササっと入力すれば大丈夫。そこまでシビアな入力判定ではない。vimのキーバインディングだとデフォルトのショートカット使えないので変えておく | vscode本体 |`alt + s + alt + o`|
| Terminalトグル | Terminal開いていない時は新規に開いてくれる  | vscode本体    | `F9`   |
|新規Terminal |新規Terminalを開く |vscode本体| `shift + F9`|
|Markdown preview ehnancedのプレビュー開く | |Markdown preview ehnanced |`alt + p` |
|Markdownのテーブル挿入 | |Markdown preview ehnanced | `alt + p`|

### 基本ムーブ

1. コマンドパレットを開く
2. やりたいことを入力してみる
3. 出てきたコマンドでの設定ボタンでショートカットが設定されていなかったら設定する

# Settings

### Theme

Darcula Theme
https://marketplace.visualstudio.com/items?itemName=rokoroku.vscode-theme-darcula

### Vim emulator

制約と誓約により高まるVim力

[GitHub - VSCodeVim/Vim: Vim for Visual Studio Code](https://github.com/VSCodeVim/Vim)

### Font

Fira code

[GitHub - tonsky/FiraCode: Free monospaced font with programming ligatures](https://github.com/tonsky/FiraCode)

インストールと各種エディターでの設定方法

[Home · tonsky/FiraCode Wiki](https://github.com/tonsky/FiraCode/wiki)

### UI

- status barをもう少し大きくしたいけど、まだできないらしい。とりあえず色を黒にして白抜き文字を見やすくする
    - https://github.com/microsoft/vscode/issues/519
```
    "workbench.colorCustomizations": {
        "statusBar.background" : "#0c000b",
    }
```

# Extensions

とりあえず入れてるもの。今後、GoLandもVSCodeに移行しようかなと思うのでそのうちまた増える。

## JS

1. Prettier
2. Bracket pair colorizer
3. JavaScript ES6 Code snippets

    ショートカットはREADMEに書いてある

    [GitHub - xabikos/vscode-javascript: Contains the code snippets for JavaScript (ES6) development in VS Code editor](https://github.com/xabikos/vscode-javascript)

4. Simple React snippets

    ショートカットはREADMEに書いてある

    [GitHub - burkeholland/simple-react-snippets: Simple React Snippets for VS Code that you will actually use](https://github.com/burkeholland/simple-react-snippets)

## Markdown

1. Markdown Preview Enhanced

    [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    - ドキュメント：https://shd101wyy.github.io/markdown-preview-enhanced/#/ja-jp/
        - グラフ書いてみたい

1. Markdown All in One
    ボルドとかイタリックとかよくあるショートカット使えるようになるはずだが、Windowsは、デフォルトがctrlを使うのでvimキーバインディングだと使えない。テーブル挿入くらいのために使う

1. Markdown Emoji    
    VSCodeのMarkdown プレビューに:emoji: syntaxのサポート追加 👍

1. :emojisense:
    emojiのサジェスト 🥇 🔥 🐈 🎸 🎾

# Debug

組み込みのデバッガーで直接デバッグできるらしい。これはまた別記事でまとめる。