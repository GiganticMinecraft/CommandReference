
# Towny: 住民コマンド

全てのコマンドは `/res` でも利用可能です。

## `/resident`

自分の情報を表示します。

## `/resident ?`

`/resident` 系のコマンドヘルプを表示します。

## `/resident <プレイヤー名>`

指定したプレイヤーの情報を表示します。

## `/resident friend [add|remove] <プレイヤー名>`

指定したプレイヤーを自分のフレンドリストに追加・削除します。

相手のフレンドリストに追加されるわけではありません。またスペースで区切り、複数のプレイヤーを指定することもできます。

## `/resident friend clearlist`

自分のフレンドリストから全てのフレンドを削除します。

## `/resident friend list`

自分のフレンドリストを表示します。

## `/resident spawn`

町のスポーン地点へテレポートします。

## `/resident toggle map`

地図の表示を切り替えます。

## `/resident toggle townclaim`

町の土地購入モードのオン/オフを切り替えます。

## `/resident toggle plotborder`

小区画の境界線の表示を切り替えます。

## `/resident set perm <on|off>`

小区画の全権限のオン/オフを設定します。

- `resident/ally/outsider` の全員が対象です。
- `build/destroy/switch/itemuse` のすべてを切り替えます。

## `/resident set perm <resident|ally|outsider> <on|off>`

小区画での全権限のオン/オフを種類別に設定します。

- `build/destroy/switch/itemuse` のすべてを切り替えます。

| 種類 | 説明 |
| `resident` | 市民 |
| `ally` | 同盟国者 |
| `outsider` | 外部者 |

## `/resident set perm <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを設定します。

- `resident/ally/outsider` の全員が対象です。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 設置 |
| `destroy` | 破壊 |
| `switch` | スイッチの操作 |
| `itemuse` | アイテムの使用 |

## `/resident set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを種類別に設定します。

## `/resident set perm reset`

小区画の権限の設定をリセットします。
