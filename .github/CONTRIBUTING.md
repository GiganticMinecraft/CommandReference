# コントリビュートガイド

## 主な流れ

1. 自分の GitHub アカウントに [`Fork`](https://github.com/GiganticMinecraft/CommandReference/fork) する
2. `git clone` を実行し、自分のローカルにリポジトリをクローンする
3. `git checkout -b <branch-name>` を実行し、新しいブランチを作成する
4. 編集する
5. `git commit -am "<コミット内容>` を実行し、コミットする (コンベンショナルコミットは推奨していませんが、ある程度わかりやすいコミットメッセージでコミットしてください。)
6. `git push`
7. `GiganticMinecraft/CommandReference` に対してプルリクエストを送る
8. レビューを受ける
9. マージされる
10. `cmd.seichi.click` にデプロイされる
    - デプロイは自動で行われます。

## 開発環境の構築

CommandReference は以下の環境で動作します。

- Node.js v18.x , v20.x
- pnpm v8.x
- Next.js v14.x

```shell
# 依存関係をインストールする
pnpm install

# 開発サーバーでの起動
pnpm dev

# ビルド
pnpm build
```
