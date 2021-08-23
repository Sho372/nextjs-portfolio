---
title: 'My VSCode Settings'
date: '2021-08-15'
---

メインエディタをVimからVScodeにしようかなと思ったのでメモ書き

- VSCodeの設定同期がGithubアカウントでできるの楽すぎる。個人PCと会社PCがすぐに同期できるのありがたすぎる。環境に少しでも違いがあると気になるのでこれが個人的に重要。Vimも.vimrcをGithubで管理して同期させてるけど、こっちのほうが断然楽
- ターミナルをエディタで扱えるようになったのも地味に変えようと思った理由

    [[待望のアップデート] VSCodeの内蔵ターミナルがエディタと同様に扱えるようになりました！ | DevelopersIO](https://dev.classmethod.jp/articles/202107-vscode-terminal-on-edit-area/)

# 設定同期

自分のgithub accountで同期

[Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)

# ショートカット

### デフォルト

1. User settings： `Ctrl + ,`  `Command + ,`
2. コマンドパレット： `Ctrl + Shift + p`  `Shift + Command + p`

その他のデフォルトのショートカット


* [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

### ユーザー定義

1. Terminalトグル: `F9`

    Terminal開いていない時は新規に開いてくれる

1. 新規Terminal: `shift + F9`
1. Markdown preview ehnancedのプレビュー開く: `alt + p`
1. ショートカット設定： `alt + k r` ※ alt + k同時押しの後にr
    vimのキーバインディングだとデフォルトのショートカット使えないので変えておく

# Settings

### Theme

[GitHub - sdras/night-owl-vscode-theme: 🌌 NIGHT OWL: A VS Code dark theme for contrast for nighttime coding, 🦉 LIGHT OWL: a daytime light theme](https://github.com/sdras/night-owl-vscode-theme)

### Vim emulator

制約と誓約により高まるVim力

[GitHub - VSCodeVim/Vim: Vim for Visual Studio Code](https://github.com/VSCodeVim/Vim)

### Font

Fira code

[GitHub - tonsky/FiraCode: Free monospaced font with programming ligatures](https://github.com/tonsky/FiraCode)

インストールと各種エディターでの設定方法

[Home · tonsky/FiraCode Wiki](https://github.com/tonsky/FiraCode/wiki)

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

1. Markdown All in One
    ボルドとかイタリックとかよくあるショートカット使えるようになるはずだが、Windowsは、デフォルトがctrlを使うのでvimキーバインディングだと使えない。テーブル挿入くらうのために使う

1. Markdown Emoji    
    VSCodeのMarkdown プレビューに:emoji: syntaxのサポート追加 👍

1. :emojisense:
    emojiのサジェスト 🥇 🔥 🐈 🎸 🎾

# Debug

組み込みのデバッガーで直接デバッグできるらしい。これはまた別記事でまとめる。