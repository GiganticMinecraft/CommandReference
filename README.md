# CommandReference

ギガンティック☆整地鯖のゲームサーバー内で使用できるコマンドに関するリファレンス。

## 構成

```txt
docs / -- このディレクトリ配下が GitHub Pages によって公開されます。
    player / -- プレイヤー向けのコマンドリファレンス
        general-command.md -- プレイヤーが使用できる全てのコマンドリファレンス
        towny-command.md -- Towny 関連のコマンドリファレンス
```

## コントリビュート

新しくリファレンスを追加したり、修正する際は、このリポジトリをフォークして、プルリクエストを送ってください。

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

マージするには GiganticMinecraft の `@admin-team` チームに所属しているアカウントによるレビューが少なくとも1人必要です。

詳しい貢献方法は [CONTRIBUTING.md](./.github/CONTRIBUTING.md) を参照してください。
