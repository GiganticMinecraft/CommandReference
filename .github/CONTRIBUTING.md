# コントリビュートガイド

## 主な流れ

1. 自分の GitHub アカウントに [`Fork`](https://github.com/GiganticMinecraft/CommandReference/fork) する
2. `git clone` を実行し, 自分のローカルにリポジトリをクローンする
3. `git checkout -b <branch-name>` を実行し, 新しいブランチを作成する
4. 編集する
5. `git commit -am "<コミット内容>` を実行し, コミットする (コンベンショナルコミットは推奨していませんが, ある程度わかりやすいコミットメッセージでコミットしてください.)
6. `git push`
7. `GiganticMinecraft/CommandReference` に対してプルリクエストを送る
8. レビューを受ける
9. マージされる
10. `cmd.seichi.click` にデプロイされる
    - デプロイは自動で行われます.

マージするには GiganticMinecraft 運営チームメンバーによるレビューが少なくとも1人必要です.

## 開発方法

### mdbook のインストール方法

CommandReference は [mdbook](https://github.com/rust-lang/mdBook) を使用して制作しているため, ブラウザでのプレビューを確認するには mdbook をインストールする必要があります.

```sh
cargo install mdbook
```

[Rust をインストールしていない場合はバイナリを直接インストールすることもできます](https://github.com/rust-lang/mdBook/releases).

ただしリファレンスの実体は Markdown のため, 必ずしもブラウザのプレビューを確認する必要はありません. これは Optional です.

#### プラグイン

mdbook にはプラグイン機能があり, このリポジトリでは以下のプラグインを使用しています.

- [`mdBook-pagetoc`](https://github.com/slowsage/mdbook-pagetoc)
- [`mdbook-toc`](https://github.com/badboy/mdbook-toc)
- [`mdbook-alerts`](https://github.com/lambdalisue/rs-mdbook-alerts)

`mdbook-toc`, `mdbook-alerts` は `cargo` でインストールできます

```sh
cargo install mdbook-toc mdbook-alerts mdbook-pagetoc
```

### プレビュー表示する

以下のコマンドでローカル上の CommandReference をプレビュー表示できます.

`localhost:3000` に公開されますのでブラウザでアクセスしてください.

```sh
mdbook serve
```
