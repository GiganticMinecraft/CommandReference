# Player Command

プレイヤーが使用できる全てのコマンドリファレンス。

----

- [Player Command](#player-command)
  - [移動系](#移動系)
    - [基本](#基本)
      - [`/hub`](#hub)
      - [`/spawn`](#spawn)
      - [`/mvspawn`](#mvspawn)
      - [`/rtp`](#rtp)
      - [`/home set <番号>`](#home-set-番号)
      - [`/home warp <番号>`](#home-warp-番号)
      - [`/home name <番号>`](#home-name-番号)
      - [`/server <サーバー名>`](#server-サーバー名)
    - [プレイヤー間テレポート](#プレイヤー間テレポート)
      - [`/tpa <プレイヤー名>`](#tpa-プレイヤー名)
      - [`/tpahere <プレイヤー名>`](#tpahere-プレイヤー名)
      - [`/tpaccept`](#tpaccept)
      - [`/tpdeny`](#tpdeny)
      - [`/tpacancel`](#tpacancel)
      - [`/tptoggle`](#tptoggle)
  - [チャット系](#チャット系)
    - [基本](#基本-1)
      - [`/jp <ON|OFF>` `*`](#jp-onoff-)
      - [`/ch hide player <プレイヤー名>` `*`](#ch-hide-player-プレイヤー名-)
      - [`/ch hide channel <チャンネル名>` `*`](#ch-hide-channel-チャンネル名-)
      - [`/ch unhide player <プレイヤー名>` `*`](#ch-unhide-player-プレイヤー名-)
      - [`/ch unhide channel <チャンネル名>` `*`](#ch-unhide-channel-チャンネル名-)
      - [`/ch hide list`](#ch-hide-list)
      - [`/tell <プレイヤー名> <メッセージ>`](#tell-プレイヤー名-メッセージ)
    - [チャンネルチャット](#チャンネルチャット)
      - [`/ch create <チャンネル名>`](#ch-create-チャンネル名)
      - [`/ch join <チャンネル名>`](#ch-join-チャンネル名)
      - [`/ch join !`](#ch-join-)
      - [`/ch leave <チャンネル名>`](#ch-leave-チャンネル名)
      - [`/ch info <チャンネル名>`](#ch-info-チャンネル名)
      - [`![メッセージ]`](#メッセージ)
      - [`/ch list`](#ch-list)
      - [`/ch log ! p=<プレイヤー名>`](#ch-log--pプレイヤー名)
  - [保護・管理](#保護管理)
    - [保護系](#保護系)
      - [`//ward`](#ward)
      - [`//sel`](#sel)
      - [`//pos1`](#pos1)
      - [`//pos2`](#pos2)
      - [`//expand <ブロック数> <方角>`](#expand-ブロック数-方角)
      - [`//contract <ブロック数> <方角>`](#contract-ブロック数-方角)
      - [`/rg claim <領域名>`](#rg-claim-領域名)
      - [`/rg info`](#rg-info)
      - [`/rg list -p <プレイヤー名>`](#rg-list--p-プレイヤー名)
    - [管理系](#管理系)
      - [`/rg remove <領域名>`](#rg-remove-領域名)
      - [`/rg addmember <領域名> <プレイヤー名>`](#rg-addmember-領域名-プレイヤー名)
      - [`/rg removemember <領域名> <プレイヤー名>`](#rg-removemember-領域名-プレイヤー名)
      - [`/rg removeowner <領域名> <プレイヤー名>`](#rg-removeowner-領域名-プレイヤー名)
      - [`/rg flag <領域名> <対象フラグ> [-g グループ名] [arrow|deny]`](#rg-flag-領域名-対象フラグ--g-グループ名-arrowdeny)
        - [利用できるフラグ](#利用できるフラグ)
      - [`/x-transfer <領域名> <プレイヤー名>`](#x-transfer-領域名-プレイヤー名)
  - [飛行関連](#飛行関連)
    - [`/fly add <数字>`](#fly-add-数字)
    - [`/fly endless`](#fly-endless)
    - [`/fly finish`](#fly-finish)
  - [Mebius関連](#mebius関連)
    - [`/mebius naming <名前>`](#mebius-naming-名前)
    - [`/mebius nickname`](#mebius-nickname)
    - [`/mebius nickname set <名前>`](#mebius-nickname-set-名前)
    - [`/mebius nickname reset`](#mebius-nickname-reset)
    - [`/mebius convert`](#mebius-convert)
    - [`/mebius`](#mebius)
  - [MineStack関連](#minestack関連)
    - [`/minestack on`](#minestack-on)
    - [`/minestack off`](#minestack-off)
    - [`/minestack open <カテゴリー番号> <ページ番号>`](#minestack-open-カテゴリー番号-ページ番号)
    - [`/minestack store-all`](#minestack-store-all)
  - [その他](#その他)
    - [`/stick`](#stick)
    - [`/ef`](#ef)
    - [`/ef smart`](#ef-smart)
    - [`/hat`](#hat)
    - [`/glist`](#glist)
    - [`/fc craft`](#fc-craft)
    - [`/map`](#map)
    - [`/stickmenu`](#stickmenu)
    - [`/stickmenu b`](#stickmenu-b)
    - [`/present`](#present)
    - [`/ec`](#ec)
    - [`/shareinv`](#shareinv)
    - [`/fd`](#fd)

----

## 移動系

### 基本

#### `/hub`

ロビーサーバーへ移動します。

#### `/spawn`

メインワールドのスポーン地点に移動します。

他のワールドへ移動する際に使用します。

#### `/mvspawn`

alias: `/mvs`

今いるワールドのスポーン地点に移動します。

#### `/rtp`

整地ワールド内のランダムな地点に移動します。

> **Warning**
>
> 整地ワールド以外では使用できません。

#### `/home set <番号>`

指定した番号のホームポイントを現在地点の座標に設定します。

#### `/home warp <番号>`

指定した番号のホームポイントに移動します。

#### `/home name <番号>`

指定した番号のホームポイントの名前を変更します。

#### `/server <サーバー名>`

指定したサーバーへ移動します。

> **Note**
>
> サーバーへ移動しても所持しているアイテムは一緒に移動しません。
>
> 移動先のサーバーへアイテムも一緒に移動したいときは **サーバー間アイテム移動** を使用してください。

**移動できるサーバー**:

| サーバー | コマンドで使用するサーバー名 |
| ---- | ---- |
| ロビー | `lobby` |
| アルカディア | `s1` |
| エデン | `s2` |
| ヴァルハラ | `s3` |
| 整地専用サーバー | `s5` |
| 公共施設サーバー | `s7` |
| デバッグサーバー[^1] | `deb112`, `deb112_2`[^2] |

[^1]: デバッグサーバーへ所有アイテムは移動できません。
[^2]: 詳細については、公式Discordグループ内のチャンネルをご覧ください。

### プレイヤー間テレポート

#### `/tpa <プレイヤー名>`

指定したプレイヤーにテレポートリクエストを送信します。

承認されると **自分が相手の位置にテレポートします**。

#### `/tpahere <プレイヤー名>`

指定したプレイヤーにテレポートリクエストを送信します。

承認されると **相手が自分の位置にテレポートします**。

#### `/tpaccept`

テレポートリクエストを承認します。

#### `/tpdeny`

テレポートリクエストを拒否します。

#### `/tpacancel`

テレポートリクエストをキャンセルします。

#### `/tptoggle`

テレポートリクエストを自動的に拒否するかどうかを切り替えます。

- `ON`: リクエストを自動的に拒否します。その代わり申請を自分から送信することは出来なくなります。
- `OFF`: リクエストを自動的に拒否しません。

## チャット系

### 基本

`*` - コマンドを実行したサーバーでのみ反映されます。

#### `/jp <ON|OFF>` `*`

日本語チャットを有効化/無効化します。

#### `/ch hide player <プレイヤー名>` `*`

指定したプレイヤーのチャットを非表示にします。

#### `/ch hide channel <チャンネル名>` `*`

指定したチャンネルのチャットを非表示にします。

#### `/ch unhide player <プレイヤー名>` `*`

指定したプレイヤーのチャットを表示します。

#### `/ch unhide channel <チャンネル名>` `*`

指定したチャンネルのチャットを表示します。

#### `/ch hide list`

`/ch hide` で非表示にしたチャンネルとプレイヤーの一覧を表示します。

#### `/tell <プレイヤー名> <メッセージ>`

指定したプレイヤーにメッセージを送信します。

プレイヤーは同じサーバーにいる必要があります。

> **Warning**
>
> `/w`, `/msg` は使用できません。

### チャンネルチャット

#### `/ch create <チャンネル名>`

指定した名前のチャンネルを作成します。

#### `/ch join <チャンネル名>`

指定したチャンネルに参加します。

発言先を切り替えるため、実行以降のチャットは全て指定したチャンネルに送信されます。

#### `/ch join !`

発言先を全体チャット(通常のチャット)に切り替えます。

#### `/ch leave <チャンネル名>`

指定したチャンネルから退出します。

#### `/ch info <チャンネル名>`

指定したチャンネルの情報を確認します。

#### `![メッセージ]`

`/ch join !` と同じですが、発言先を切り替えずそのメッセージだけを全体チャットに送信します。

#### `/ch list`

サーバー内に存在するチャンネルの一覧を表示します。

**Format**:

    [チャンネル名] [参加人数]

この際、状態によりチャンネル名の色が以下のように変化します。

| 色 | 意味 |
| ---- | ---- |
| 黒 | 参加していないチャンネル |
| 白 | 参加しているチャンネル |
| 赤 | 現在の発言先に設定しているチャンネル |
| 青 | 非表示にしているチャンネル |

#### `/ch log ! p=<プレイヤー名>`

指定したプレイヤー名のチャットログを表示します。

## 保護・管理

### 保護系

#### `//ward`

保護の範囲設定に使用する木の斧をインベントリに追加します。

#### `//sel`

範囲設定を解除します。

#### `//pos1`

現在地点を選択範囲の起点に設定します。

#### `//pos2`

現在地点を選択範囲の終点に設定します。

#### `//expand <ブロック数> <方角>`

選択している範囲を指定した方角に指定したブロック数分 **拡大** します。

#### `//contract <ブロック数> <方角>`

選択している範囲を指定した方角に指定したブロック数分 **縮小** します。

#### `/rg claim <領域名>`

指定した範囲を指定した領域名で保護します。

#### `/rg info`

alias: `/rg i`

現在地点の保護情報を表示します。

#### `/rg list -p <プレイヤー名>`

指定したプレイヤーの保護を検索します。

> **Note**
>
> WorldGuardがMCIDの検索に既に廃止されたMojangのAPIを使用しているため、現状自分のMCID以外は検索できません。
>
> WorldGuardのアップデートで修正されますが、ゲームサーバーのバージョンが `1.12.2` の間は修正不可能です。
>
> 参考: [プレイヤーの保護検索コマンドが自分自身のMCID以外機能しなくなっている - #不具合報告-ゲーム内](https://discord.com/channels/237758724121427969/1106084808897069117)
> (整地鯖公式Discordに移動します。)

### 管理系

#### `/rg remove <領域名>`

指定した領域名の保護を削除します。

#### `/rg addmember <領域名> <プレイヤー名>`

alias: `/rg am <領域名> <プレイヤー名>`

指定した領域名の保護のメンバーに指定したプレイヤーを追加します。

#### `/rg removemember <領域名> <プレイヤー名>`

alias: `/rg rm <領域名> <プレイヤー名>`

指定した領域名の保護のメンバーから指定したプレイヤーを削除します。

#### `/rg removeowner <領域名> <プレイヤー名>`

alias: `/rg ro <領域名> <プレイヤー名>`

指定した領域名の保護のオーナーから指定したプレイヤーを削除します。

> **Warning**
>
> 保護のオーナーだけを削除するため、メンバーは削除されません。
> 乗っ取り等を回避するために [**メンバーを最初に削除しましょう**](#rg-removemember-領域名-プレイヤー名)

#### `/rg flag <領域名> <対象フラグ> [-g グループ名] [arrow|deny]`

指定した領域内での指定したフラグの設定を変更します。

領域内でプレイヤーができることを制限します。

`arrow` で許可、 `deny` で却下 (指定しない場合は削除されます。)

##### 利用できるフラグ

プレイヤーが使用できるフラグは以下のとおりです。

| フラグ名 | 説明 |
| ---- | ---- |
| `weather-lock` | 天候を固定する |
| `greeting` | 領域内に入ったときにメッセージを表示する |
| `farewell` | 領域内から出たときにメッセージを表示する |
| `snow-melt` | 雪が溶けるかどうか |
| `ice-melt` | 氷が溶けるかどうか |
| `ride` | 乗り物に乗れるかどうか |
| `sleep` | ベッドで睡眠できるかどうか (ベッドの使用可否) |
| `mushroom-growth` | キノコが育つかどうか |
| `grass-growth` | 草ブロックが伝播するかどうか |
| `mycelium-spread` | 菌糸ブロックが伝播するかどうか |
| `vine-growth` | ツタが伸びるかどうか |
| `soil-dry` | 耕地が乾くかどうか |
| `time-lock` | 時間を固定する |
| `teleport` | テレポートできるかどうか |

#### `/x-transfer <領域名> <プレイヤー名>`

指定した領域名の保護のオーナーを指定したプレイヤーに譲与します。

## 飛行関連

### `/fly add <数字>`

`<数字>`分間、飛行可能になります。

### `/fly endless`

終了するまでの間、飛行可能になります。

### `/fly finish`

alias: `/fly end`

飛行可能状態を解除します。

## Mebius関連

### `/mebius naming <名前>`

Mebiusの名前を指定した名前に変更します。

### `/mebius nickname`

Mebiusからの呼び名を表示します。

### `/mebius nickname set <名前>`

Mebiusからの呼び名を指定した名前に変更します。

### `/mebius nickname reset`

Mebiusからの呼び名をリセットします。

### `/mebius convert`

Mebiusの素材変換を行います。

### `/mebius`

Mebius に関するコマンドを一覧表示します。

## MineStack関連

全てのコマンドは `/ms` として使うことも出来ます。

### `/minestack on`

Minestack の自動収集機能をONにします。

### `/minestack off`

Minestack の自動収集機能をOFFにします。

### `/minestack open <カテゴリー番号> <ページ番号>`

指定したカテゴリーの MineStack ページを開きます。

​例:

- トップページを開く: `/minestack open 0 0`
- ガチャ品ページを開く: `/minestack open 7 1`

### `/minestack store-all`

インベントリに存在するアイテムをすべて MineStack に収納します。 (収納できないアイテムはそのままインベントリに残ります。)

## その他

### `/stick`

木の棒を召喚します。(木の棒を持って左クリック、右クリックするとメニューを表示します。)

### `/ef`

採掘上昇効果のON/OFFを切り替えます。

### `/ef smart`

1分毎に表示される採掘速度上昇値の内訳表示のON/OFFを切り替えます。

### `/hat`

右手に持っているブロック系アイテムを頭に被ります。

### `/glist`

各サーバーに接続しているプレイヤーを一覧表示します。

### `/fc craft`

FastCraft の画面を表示します。

### `/map`

現在座標の Dynmap の URL を表示します。

### `/stickmenu`

alias: `/sm`

棒メニューを表示します。

### `/stickmenu b`

alias: `/sm b`

棒メニューBを表示します。

### `/present`

運営チームからの配布アイテムを受け取ります。

### `/ec`

「どこでもエンダーチェスト」を開きます。（詳細は[こちら](https://www.seichi.network/otherfuncs)をご覧ください。）

### `/shareinv`

「インベントリ共有」を行います。（詳細は[こちら](https://www.seichi.network/otherfuncs)をご覧ください。）

### `/fd`

​「4次元ポケット」を開きます。（詳細は[こちら](https://www.seichi.network/otherfuncs)​をご覧ください。）