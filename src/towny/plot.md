# Towny: 小区画

## `/plot` / `/plot ?`

`/plot` 系のコマンドヘルプを表示します。

## `/plot claim`

販売中の小区画を購入します。

## `/plot claim auto`

周辺の販売中の小区画を自動購入します。

## `/plot fs <値> [circle|rect] [半径]`

今いる街の土地を小区画として指定した値で売りに出します。指定しなかった場合はタダで販売します。

`circle` を指定した場合は円形の範囲で販売し、 `rect` を指定した場合は正方形の範囲で販売します。

## `/plot nfs [circle|rect] [半径]`

今いる小区画の販売を終了します。

`circle` を指定した場合は円形の範囲で販売を終了し、 `rect` を指定した場合は正方形の範囲で販売を終了します。

## `/plot perm`

今いる小区画の情報を表示します。

## `/plot set [reset|shop|embassy|arena|wilds]`

今いる小区画の種類を変更します。

| 引数 | 説明 |
| ---- | ---- |
| `reset` | 小区画の設定をリセットします。|
| `shop` | 商店区画に設定します。 |
| `embassy` | 大使館に設定します。 |
| `arena` | アリーナに設定します。 |
| `wilds` | 野生地(荒野)に設定します。 |

## `/plot set <名前>`

今いる小区画の名前を変更します。

## `/plot set perm <on|off>`

小区画の全権限のオン/オフを設定します。

- `resident/ally/outsider` の全員が対象です。
- `build/destroy/switch/itemuse` のすべてを切り替えます。

## `/plot set perm <resident|ally|outsider> <on|off>`

小区画での全権限のオン/オフを種類別に設定します。

- build/destroy/switch/itemuseのすべてを切り替えます。

| 種類 | 説明 |
| `resident` | 市民 |
| `ally` | 同盟国者 |
| `outsider` | 外部者 |

## `/plot set perm <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを設定します。

- `resident/ally/outsider` の全員が対象です。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 設置 |
| `destroy` | 破壊 |
| `switch` | スイッチの操作 |
| `itemuse` | アイテムの使用 |

## `/plot set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを種類別に設定します。

## `/plot set perm reset`

小区画の権限の設定をリセットします。

## `/plot toggle <フラグ>`

指定したフラグ(設定)を変更します。

| フラグ | 説明 |
| ---- | ---- |
| `explosion` | 爆発による破壊`*` |
| `fire` | 火の延焼`*` |
| `mobs` | 敵対Mobの出現`*` |
| `pvp` | 町の中でのPvPの許可するか |

`*`: 設定関係なくサーバ内の設定により、強制的にOFFになります。

## `/plot clear`

今いる小区画の看板を撤去します。

----

[このページを GitHub で編集する](https://github.com/GiganticMinecraft/CommandReference/edit/main/src/towny/plot.md)
