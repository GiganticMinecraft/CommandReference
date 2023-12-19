# Towny Command

プレイヤーが使用できる Towny のコマンドリファレンス。

----

- [Towny コマンド](#towny-コマンド)
  - [`/towny`](#towny)
  - [`/towny ?`](#towny-)
  - [`/towny map`](#towny-map)
  - [`/towny prices`](#towny-prices)
  - [`/towny time`](#towny-time)
  - [`/towny top residents [all|town|nation]`](#towny-top-residents-alltownnation)
  - [`/towny top land [all|town|resident]`](#towny-top-land-alltownresident)
- [町コマンド (`/town`)](#町コマンド-town)
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
- [小区画](#小区画)
  - [`/plot` / `/plot ?`](#plot--plot-)
  - [`/plot claim`](#plot-claim)
  - [`/plot claim auto`](#plot-claim-auto)
  - [`/plot fs <値> [circle|rect] [半径]`](#plot-fs-値-circlerect-半径)
  - [`/plot nfs [circle|rect] [半径]`](#plot-nfs-circlerect-半径)
  - [`/plot perm`](#plot-perm)
  - [`/plot set [reset|shop|embassy|arena|wilds]`](#plot-set-resetshopembassyarenawilds)
  - [`/plot set <名前>`](#plot-set-名前)
  - [`/plot set perm <on|off>`](#plot-set-perm-onoff)
  - [`/plot set perm <resident|ally|outsider> <on|off>`](#plot-set-perm-residentallyoutsider-onoff)
  - [`/plot set perm <build|destroy|switch|itemuse> <on|off>`](#plot-set-perm-builddestroyswitchitemuse-onoff)
  - [`/plot set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`](#plot-set-perm-residentallyoutsider-builddestroyswitchitemuse-onoff)
  - [`/plot set perm reset`](#plot-set-perm-reset)
  - [`/plot toggle <フラグ>`](#plot-toggle-フラグ)
  - [`/plot clear`](#plot-clear)
- [住民コマンド (`/resident`)](#住民コマンド-resident)
  - [`/resident`](#resident)
  - [`/resident ?`](#resident-)
  - [`/resident <プレイヤー名>`](#resident-プレイヤー名)
  - [`/resident friend [add|remove] <プレイヤー名>`](#resident-friend-addremove-プレイヤー名)
  - [`/resident friend clearlist`](#resident-friend-clearlist)
  - [`/resident friend list`](#resident-friend-list)
  - [`/resident spawn`](#resident-spawn)
  - [`/resident toggle map`](#resident-toggle-map)
  - [`/resident toggle townclaim`](#resident-toggle-townclaim)
  - [`/resident toggle plotborder`](#resident-toggle-plotborder)
  - [`/resident set perm <on|off>`](#resident-set-perm-onoff)
  - [`/resident set perm <resident|ally|outsider> <on|off>`](#resident-set-perm-residentallyoutsider-onoff)
  - [`/resident set perm <build|destroy|switch|itemuse> <on|off>`](#resident-set-perm-builddestroyswitchitemuse-onoff)
  - [`/resident set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`](#resident-set-perm-residentallyoutsider-builddestroyswitchitemuse-onoff)
  - [`/resident set perm reset`](#resident-set-perm-reset)
- [国コマンド (`/nation`)](#国コマンド-nation)
  - [`/nation`](#nation)
  - [`/nation ?`](#nation-)
  - [`/nation list`](#nation-list)
  - [`/nation online`](#nation-online)
  - [`/nation <国名>`](#nation-国名)
  - [`/nation leave`](#nation-leave)
  - [`/nation withdraw <値>`](#nation-withdraw-値)
  - [`/nation deposit <値>`](#nation-deposit-値)
  - [`/nation new <国名>`](#nation-new-国名)
  - [`/nation new <国名> <首都名>`](#nation-new-国名-首都名)
  - [`/nation add <町名>`](#nation-add-町名)
  - [`/nation kick <町名>`](#nation-kick-町名)
  - [`/nation delete <国名>`](#nation-delete-国名)
  - [`/nation ally [add|remove] <国名>`](#nation-ally-addremove-国名)
  - [`/nation enemy [add|remove] <国名>`](#nation-enemy-addremove-国名)
  - [`/nation rank [add|remove] <プレイヤー名> <ランク名>`](#nation-rank-addremove-プレイヤー名-ランク名)
  - [`/nation set king <プレイヤー名>`](#nation-set-king-プレイヤー名)
  - [`/nation set capital <町名>`](#nation-set-capital-町名)
  - [`/nation set taxes <値>`](#nation-set-taxes-値)
  - [`/nation set name <国名>`](#nation-set-name-国名)
  - [`/nation set surname <プレイヤー名> <称号>`](#nation-set-surname-プレイヤー名-称号)
  - [`/nation set tag <タグ>`](#nation-set-tag-タグ)
  - [`/nation set tag clear`](#nation-set-tag-clear)
  - [`/nation toggle neutral`](#nation-toggle-neutral)

----

## Towny コマンド

### `/towny`

各コマンドのヘルプ一覧を表示します。

### `/towny ?`

`/towny` 系のコマンドヘルプを表示します。

### `/towny map`

周辺のマップを表示します。

### `/towny prices`

町の運営に関わる機能の値段を表示します。

### `/towny time`

時間を表示します。。次の税収の時間などの参考になります。

### `/towny top residents [all|town|nation]`

指定した種類の住民数ランキングを表示します。

指定しない場合は `all` として実行される

| 引数 | 説明 |
| ---- | ---- |
| `all` | 全ての町と国 |
| `town` | 全ての町 |
| `nation` | 全ての国 |

### `/towny top land [all|town|resident]`

指定した種類の土地数ランキングを表示します。

指定しない場合は `all` として実行される

| 引数 | 説明 |
| ---- | ---- |
| `all` | 全ての町と国 |
| `town` | 町ごと |
| `resident` | 住民ごと |

## 町コマンド (`/town`)

### `/town`

自分の町の情報を表示します。

### `/town ?`

`/town` 系のコマンドヘルプを表示します。

### `/town list`

町の一覧を表示します。

### `/town <町名>`

指定した町の情報を表示します。

### `/town here`

今いる場所の町の情報を表示します。

### `/town new <町名> [プレイヤー名]`

指定した町名の名前で町を作成。

プレイヤー名を指定した場合はそのプレイヤーを町長として作成される。

**費用:** 1,000mine

### `/town add <プレイヤー名>`

指定したプレイヤーを町に招待します。

### `/town kick <プレイヤー名>`

指定したプレイヤーを町から追い出します。

### `/town join <町名>`

指定した町へ参加します。

ただし、その町が招待制の場合は参加できません。(招待してもらう必要があります。)

### `/town leave`

所属している町から離脱します。

町長は離脱できません。離脱する際は [`/town set mayor`](#town-set-mayor-プレイヤー名) で町長を他のプレイヤーに移譲してください。

### `/town spawn [町名]`

町のスポーン地点へテレポートします。

指定した場合はその町のスポーン地点へテレポートします。

### `/town claim [値]`

今いる土地を町にします。値を指定した場合はその分自身の周辺の土地を町にします。

5チャンク以内に他の町の土地がある場合は実行できません。

**費用:** 100mine

### `/town claim outpost`

町に隣接していない土地を町の土地にします。

5チャンク以内に他の町の土地がある場合は実行できません。

**費用:** 300mine

### `/town claim auto`

街の銀行にあるだけのお金を使用し、自身の周辺の土地をできる限り町の土地にします。

### `/town unclaim [値]`

今いる土地を手放します。

値を指定した場合はその分自身の周辺の土地を手放します。

### `/town unclaim all`

町のすべての土地を手放します。

### `/town withdraw <値>`

指定した分のお金を町の銀行から引き出します。

### `/town deposit <値>`

指定した分のお金を町の銀行に預けます。

> **Warning**
>
> お金を入れたままにすると不具合でお金が消失することがあります。

### `/town delete <町名>`

町を削除します。

このコマンドは取り消すことが出来ません。実行する際は覚悟を決めてください。

### `/town outpost [値]`

アウトポストへテレポートします。

指定した値で順に割り振れられたアウトポストにテレポートします。

### `/town ranklist`

住民の一覧と住民のランクを表示します。

### `/town rank add <プレイヤー名> <ランク名>`

指定したプレイヤーにランクを付与します。

`assistant` が付与できます。

### `/town remove <プレイヤー名> <ランク名>`

指定したプレイヤーからランクを剥奪します。

### `/town reslist`

住民の一覧を時表示します。

### `/town set board <メッセージ>`

参加時に住民に表示するメッセージを設定します。

### `/town set mayor <プレイヤー名>`

指定したプレイヤーに町長を譲渡します。

### `/town set homeblock`

今いる土地を町のホームブロックに設定します。

### `/town set spawn`

今立っている座標をスポーンポイントに設定します。

ホームブロックの中でのみ設定可能です。

### `/town set name <新しい町名>`

町の名前を変更します。

### `/town set outpost`

今いる土地をアウトポストに設定します。

### `/town set perm <on|off>`

全ての住民権限の許可/拒否を設定します。

### `/town set perm <権限> <on|off>`

住民権限の許可/拒否を設定します。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 町の土地での建築 |
| `destroy` | 町の土地での破壊 |
| `switch` | 町の土地でのスイッチの操作 |
| `itemuse` | 町の土地でのアイテムの使用 |

### `/town set tag <タグ>`

町のタグ(略称)を設定します。

### `/town set tag clear`

町のタグを削除します。

### `/town set texes <値>`

税金を設定します。

> **Warning**
>
> 銀行に不具合があるため、設定するのはおすすめしません。

### `/town set plottax <値>`

プロットの税金を設定します。

> **Warning**
>
> 銀行に不具合があるため、設定するのはおすすめしません。

### `/town set plotprice <値>`

プロットに値段を設定します。

### `/town set shoptax <値>`

商店区画の税金を設定します。

> **Warning**
>
> 銀行に不具合があるため、設定するのはおすすめしません。

### `/town set shopprice <値>`

商店区画の値段を設定します。

### `/town set embassytax <値>`

大使館の税金を設定します。

> **Warning**
>
> 銀行に不具合があるため、設定するのはおすすめしません。

### `/town set embassyprice <値>`

大使館の値段を設定します。

### `/town toggle <フラグ>`

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

`*`: 設定関係なく強制的にOFFになる。

## 小区画

### `/plot` / `/plot ?`

`/plot` 系のコマンドヘルプを表示します。

### `/plot claim`

販売中の小区画を購入します。

### `/plot claim auto`

周辺の販売中の小区画を自動購入します。

### `/plot fs <値> [circle|rect] [半径]`

今いる街の土地を小区画として指定した値で売りに出します。指定しなかった場合はタダで販売します。

`circle` を指定した場合は円形の範囲で販売し、 `rect` を指定した場合は正方形の範囲で販売します。

### `/plot nfs [circle|rect] [半径]`

今いる小区画の販売を終了します。

`circle` を指定した場合は円形の範囲で販売を終了し、 `rect` を指定した場合は正方形の範囲で販売を終了します。

### `/plot perm`

今いる小区画の情報を表示します。

### `/plot set [reset|shop|embassy|arena|wilds]`

今いる小区画の種類を変更します。

| 引数 | 説明 |
| ---- | ---- |
| `reset` | 小区画の設定をリセットします。|
| `shop` | 商店区画に設定します。 |
| `embassy` | 大使館に設定します。 |
| `arena` | アリーナに設定します。 |
| `wilds` | 野生地(荒野)に設定します。 |

### `/plot set <名前>`

今いる小区画の名前を変更します。

### `/plot set perm <on|off>`

小区画の全権限のオン/オフを設定します。

- resident/ally/outsiderの全員が対象です。
- build/destroy/switch/itemuseのすべてを切り替えます。

### `/plot set perm <resident|ally|outsider> <on|off>`

小区画での全権限のオン/オフを種類別に設定します。

- build/destroy/switch/itemuseのすべてを切り替えます。

| 種類 | 説明 |
| `resident` | 市民 |
| `ally` | 同盟国者 |
| `outsider` | 外部者 |

### `/plot set perm <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを設定します。

- resident/ally/outsiderの全員が対象です。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 設置 |
| `destroy` | 破壊 |
| `switch` | スイッチの操作 |
| `itemuse` | アイテムの使用 |

### `/plot set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを種類別に設定します。

### `/plot set perm reset`

小区画の権限の設定をリセットします。

### `/plot toggle <フラグ>`

指定したフラグ(設定)を変更します。

| フラグ | 説明 |
| ---- | ---- |
| `explosion` | 爆発による破壊`*` |
| `fire` | 火の延焼`*` |
| `mobs` | 敵対Mobの出現`*` |
| `pvp` | 町の中でのPvPの許可するか |

### `/plot clear`

今いる小区画の看板を撤去します。

## 住民コマンド (`/resident`)

`/res` でも利用可能です。

### `/resident`

自分の情報を表示します。

### `/resident ?`

`/resident` 系のコマンドヘルプを表示します。

### `/resident <プレイヤー名>`

指定したプレイヤーの情報を表示します。

### `/resident friend [add|remove] <プレイヤー名>`

指定したプレイヤーを自分のフレンドリストに追加・削除します。

相手のフレンドリストに追加されるわけではありません。またスペースで区切り、複数のプレイヤーを指定することもできます。

### `/resident friend clearlist`

自分のフレンドリストから全てのフレンドを削除します。

### `/resident friend list`

自分のフレンドリストを表示します。

### `/resident spawn`

町のスポーン地点へテレポートします。

### `/resident toggle map`

地図の表示を切り替えます。

### `/resident toggle townclaim`

町の土地購入モードのオン/オフを切り替えます。

### `/resident toggle plotborder`

小区画の境界線の表示を切り替えます。

### `/resident set perm <on|off>`

小区画の全権限のオン/オフを設定します。

- resident/ally/outsiderの全員が対象です。
- build/destroy/switch/itemuseのすべてを切り替えます。

### `/resident set perm <resident|ally|outsider> <on|off>`

小区画での全権限のオン/オフを種類別に設定します。

- build/destroy/switch/itemuseのすべてを切り替えます。

| 種類 | 説明 |
| `resident` | 市民 |
| `ally` | 同盟国者 |
| `outsider` | 外部者 |

### `/resident set perm <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを設定します。

- resident/ally/outsiderの全員が対象です。

| 権限 | 説明 |
| ---- | ---- |
| `build` | 設置 |
| `destroy` | 破壊 |
| `switch` | スイッチの操作 |
| `itemuse` | アイテムの使用 |

### `/resident set perm <resident|ally|outsider> <build|destroy|switch|itemuse> <on|off>`

小区画での権限のオン/オフを種類別に設定します。

### `/resident set perm reset`

小区画の権限の設定をリセットします。

## 国コマンド (`/nation`)

### `/nation`

加盟している国の情報を表示します。

### `/nation ?`

`/nation` 系のコマンドヘルプを表示します。

### `/nation list`

国一覧を表示します。

### `/nation online`

オンラインの国民一覧を表示します。

### `/nation <国名>`

指定した国の国民一覧を表示します。

### `/nation leave`

所属している国から離脱します。

### `/nation withdraw <値>`

指定した値を国の銀行から引き出します。

### `/nation deposit <値>`

指定した値を国の銀行に預けます。

### `/nation new <国名>`

自分の街を首都として建国します。

### `/nation new <国名> <首都名>`

自分の街を指定した名前の首都として建国します。

### `/nation add <町名>`

指定した町を国に加盟させます。

### `/nation kick <町名>`

指定した町を国から追放します。

### `/nation delete <国名>`

国を削除します。

### `/nation ally [add|remove] <国名>`

`add` で指定した国と同盟を結びます。

`remove` で指定した国との同盟を解除します。

### `/nation enemy [add|remove] <国名>`

`add` で指定した国と敵対を結びます。

`remove` で指定した国との敵対を解除します。

### `/nation rank [add|remove] <プレイヤー名> <ランク名>`

`add` で指定したプレイヤーにランクを付与します。

`remove` で指定したプレイヤーからランクを剥奪します。

### `/nation set king <プレイヤー名>`

指定したプレイヤーを国王にします。

### `/nation set capital <町名>`

首都を変更します。

### `/nation set taxes <値>`

税金を設定します。

> **Warning**
>
> 銀行に不具合があるため、設定するのはおすすめしません。

### `/nation set name <国名>`

国の名前を変更します。

### `/nation set surname <プレイヤー名> <称号>`

指定した国民に称号を付与します。

### `/nation set tag <タグ>`

国のタグ(略称)を設定します。最大4文字で指定します。

### `/nation set tag clear`

国のタグを削除します。

### `/nation toggle neutral`

国を中立国とします。
