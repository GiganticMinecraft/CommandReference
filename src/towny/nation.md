# Towny: 国コマンド

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

## `/nation`

加盟している国の情報を表示します。

## `/nation ?`

`/nation` 系のコマンドヘルプを表示します。

## `/nation list`

国一覧を表示します。

## `/nation online`

オンラインの国民一覧を表示します。

## `/nation <国名>`

指定した国の国民一覧を表示します。

## `/nation leave`

所属している国から離脱します。

## `/nation withdraw <値>`

指定した値を国の銀行から引き出します。

## `/nation deposit <値>`

指定した値を国の銀行に預けます。

## `/nation new <国名>`

自分の街を首都として建国します。

## `/nation new <国名> <首都名>`

自分の街を指定した名前の首都として建国します。

## `/nation add <町名>`

指定した町を国に加盟させます。

## `/nation kick <町名>`

指定した町を国から追放します。

## `/nation delete <国名>`

国を削除します。

## `/nation ally [add|remove] <国名>`

`add` で指定した国と同盟を結びます。

`remove` で指定した国との同盟を解除します。

## `/nation enemy [add|remove] <国名>`

`add` で指定した国と敵対を結びます。

`remove` で指定した国との敵対を解除します。

## `/nation rank [add|remove] <プレイヤー名> <ランク名>`

`add` で指定したプレイヤーにランクを付与します。

`remove` で指定したプレイヤーからランクを剥奪します。

## `/nation set king <プレイヤー名>`

指定したプレイヤーを国王にします。

## `/nation set capital <町名>`

首都を変更します。

## `/nation set taxes <値>`

税金を設定します。[^1]

## `/nation set name <国名>`

国の名前を変更します。

## `/nation set surname <プレイヤー名> <称号>`

指定した国民に称号を付与します。

## `/nation set tag <タグ>`

国のタグ(略称)を設定します。最大4文字で指定します。

## `/nation set tag clear`

国のタグを削除します。

## `/nation toggle neutral`

国を中立国とします。

----

[^1]: 銀行に不具合があるため、設定するのはおすすめしません。

----

[このページを GitHub で編集する](https://github.com/GiganticMinecraft/CommandReference/edit/main/src/towny/nation.md)
