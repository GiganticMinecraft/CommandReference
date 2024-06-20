# Towny: 町コマンド

- [`/town`](#town)
- [`/town ?`](#town-)
- [`/town list`](#town-list)
- [`/town <町名>`](#town-町名)
- [`/town here`](#town-here)
- [`/town new <町名> [プレイヤー名]`](#town-new-町名-プレイヤー名)
- [`/town add <プレイヤー名>`](#town-add-プレイヤー名)
- [`/town kick <プレイヤー名>`](#town-kick-プレイヤー名)
- [`/town join <町名>`](#town-join-町名)
- [`/town leave`](#town-leave)
- [`/town spawn [町名]`](#town-spawn-町名)
- [`/town claim [値]`](#town-claim-値)
- [`/town claim outpost`](#town-claim-outpost)
- [`/town claim auto`](#town-claim-auto)
- [`/town unclaim [値]`](#town-unclaim-値)
- [`/town unclaim all`](#town-unclaim-all)
- [`/town withdraw <値>`](#town-withdraw-値)
- [`/town deposit <値>`](#town-deposit-値)
- [`/town delete <町名>`](#town-delete-町名)
- [`/town outpost [値]`](#town-outpost-値)
- [`/town ranklist`](#town-ranklist)
- [`/town rank add <プレイヤー名> <ランク名>`](#town-rank-add-プレイヤー名-ランク名)
- [`/town remove <プレイヤー名> <ランク名>`](#town-remove-プレイヤー名-ランク名)
- [`/town reslist`](#town-reslist)
- [`/town set board <メッセージ>`](#town-set-board-メッセージ)
- [`/town set mayor <プレイヤー名>`](#town-set-mayor-プレイヤー名)
- [`/town set homeblock`](#town-set-homeblock)
- [`/town set spawn`](#town-set-spawn)
- [`/town set name <新しい町名>`](#town-set-name-新しい町名)
- [`/town set outpost`](#town-set-outpost)
- [`/town set perm <on|off>`](#town-set-perm-onoff)
- [`/town set perm <権限> <on|off>`](#town-set-perm-権限-onoff)
- [`/town set tag <タグ>`](#town-set-tag-タグ)
- [`/town set tag clear`](#town-set-tag-clear)
- [`/town set texes <値>`](#town-set-texes-値)
- [`/town set plottax <値>`](#town-set-plottax-値)
- [`/town set plotprice <値>`](#town-set-plotprice-値)
- [`/town set shoptax <値>`](#town-set-shoptax-値)
- [`/town set shopprice <値>`](#town-set-shopprice-値)
- [`/town set embassytax <値>`](#town-set-embassytax-値)
- [`/town set embassyprice <値>`](#town-set-embassyprice-値)
- [`/town toggle <フラグ>`](#town-toggle-フラグ)

## `/town`

自分の町の情報を表示します。

## `/town ?`

`/town` 系のコマンドヘルプを表示します。

## `/town list`

町の一覧を表示します。

## `/town <町名>`

指定した町の情報を表示します。

## `/town here`

今いる場所の町の情報を表示します。

## `/town new <町名> [プレイヤー名]`

指定した町名の名前で町を作成。

プレイヤー名を指定した場合はそのプレイヤーを町長として作成される。

**費用:** 1,000mine

## `/town add <プレイヤー名>`

指定したプレイヤーを町に招待します。

## `/town kick <プレイヤー名>`

指定したプレイヤーを町から追い出します。

## `/town join <町名>`

指定した町へ参加します。

ただし、その町が招待制の場合は参加できません。(招待してもらう必要があります。)

## `/town leave`

所属している町から離脱します。

町長は離脱できません。離脱する際は [`/town set mayor`](#town-set-mayor-プレイヤー名) で町長を他のプレイヤーに移譲してください。

## `/town spawn [町名]`

町のスポーン地点へテレポートします。

指定した場合はその町のスポーン地点へテレポートします。

## `/town claim [値]`

今いる土地を町にします。値を指定した場合はその分自身の周辺の土地を町にします。

5チャンク以内に他の町の土地がある場合は実行できません。

**費用:** 100mine

## `/town claim outpost`

町に隣接していない土地を町の土地にします。

5チャンク以内に他の町の土地がある場合は実行できません。

**費用:** 300mine

## `/town claim auto`

街の銀行にあるだけのお金を使用し、自身の周辺の土地をできる限り町の土地にします。

## `/town unclaim [値]`

今いる土地を手放します。

値を指定した場合はその分自身の周辺の土地を手放します。

## `/town unclaim all`

町のすべての土地を手放します。

## `/town withdraw <値>`

指定した分のお金を町の銀行から引き出します。

## `/town deposit <値>`

指定した分のお金を町の銀行に預けます。

> **Warning**
>
> お金を入れたままにすると不具合でお金が消失することがあります。

## `/town delete <町名>`

町を削除します。

このコマンドは取り消すことが出来ません。実行する際は覚悟を決めてください。

## `/town outpost [値]`

アウトポストへテレポートします。

指定した値で順に割り振れられたアウトポストにテレポートします。

## `/town ranklist`

住民の一覧と住民のランクを表示します。

## `/town rank add <プレイヤー名> <ランク名>`

指定したプレイヤーにランクを付与します。

`assistant` が付与できます。

## `/town remove <プレイヤー名> <ランク名>`

指定したプレイヤーからランクを剥奪します。

## `/town reslist`

住民の一覧を時表示します。

## `/town set board <メッセージ>`

参加時に住民に表示するメッセージを設定します。

## `/town set mayor <プレイヤー名>`

指定したプレイヤーに町長を譲渡します。

## `/town set homeblock`

今いる土地を町のホームブロックに設定します。

## `/town set spawn`

今立っている座標をスポーンポイントに設定します。

ホームブロックの中でのみ設定可能です。

## `/town set name <新しい町名>`

町の名前を変更します。

## `/town set outpost`

今いる土地をアウトポストに設定します。

## `/town set perm <on|off>`

全ての住民権限の許可/拒否を設定します。

## `/town set perm <権限> <on|off>`

住民権限の許可/拒否を設定します。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 町の土地での建築 |
| `destroy` | 町の土地での破壊 |
| `switch` | 町の土地でのスイッチの操作 |
| `itemuse` | 町の土地でのアイテムの使用 |

## `/town set tag <タグ>`

町のタグ(略称)を設定します。

## `/town set tag clear`

町のタグを削除します。

## `/town set texes <値>`

税金を設定します。 [^1]

## `/town set plottax <値>`

プロットの税金を設定します。[^1]

## `/town set plotprice <値>`

プロットに値段を設定します。

## `/town set shoptax <値>`

商店区画の税金を設定します。[^1]

## `/town set shopprice <値>`

商店区画の値段を設定します。

## `/town set embassytax <値>`

大使館の税金を設定します。[^1]

## `/town set embassyprice <値>`

大使館の値段を設定します。

## `/town toggle <フラグ>`

指定したフラグ(設定)を変更します。

| フラグ | 説明 |
| ---- | ---- |
| `explosion` | 爆発による破壊`*` |
| `fire` | 火の延焼`*` |
| `mobs` | 敵対Mobの出現`*` |
| `public` | 町のホームブロックの場所を公開するか |
| `pvp` | 町の中でのPvPの許可するか |
| `taxpercent` | 税金を割合で設定するか |
| `open` | 町の参加を誰でもできるか (ONの場合 [`/town join`](#town-join-町名) で誰でも参加できる) |

`*`: 設定関係なくサーバ内の設定により、強制的にOFFになります。

----

[^1]: 銀行に不具合があるため、設定するのはおすすめしません。

----

[このページを GitHub で編集する](https://github.com/GiganticMinecraft/CommandReference/edit/main/src/towny/town.md)
