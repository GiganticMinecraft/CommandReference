# コントリビュートガイド (編集中)

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

## リファレンスの構成

```text
.github /
    - CODEOWNERS -- 特定のファイルに対してレビュワーを強制的に指定するファイル (本来外部貢献者が編集する必要はありません。)
    - CONTRIBUTING.md -- コントリビュートに関するガイド (本来外部貢献者が編集する必要はありません。)
.docs /
    - CNAME -- GitHub Pages で使用するドメインを指定するファイル (本来外部貢献者が編集する必要はありません。)
    player / -- プレイヤー関連のコマンドリファレンス
        - general-command.md -- プレイヤーが使用できる全てのコマンドリファレンスを記述するファイル (cmd.seichi.click/player-command)
        - towny-command.md -- プレイヤーが使用できるTownyのコマンドリファレンスを記述するファイル (cmd.seichi.click/towny-command)
    - README.md (cmd.seichi.click)
--- (以下略)
```

## 使用するエディターについて

`CommandReference` を編集する際は [Visual Studio Code](https://code.visualstudio.com/), 拡張機能 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) の使用を推奨します。

コマンドリファレンスの初めは目次で構成されています。この目次は Visual Studio Code の機能で自動生成されているため新しく目次を追加すると自動で更新されます。(Visual Studio Code を使用せず、Vim などのエディタを使用している際は手動で編集してください。)

![コマンドリファレンスの目次](./image/table-of-contents.png)
