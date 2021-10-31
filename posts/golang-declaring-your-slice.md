---
title: 'Declaring Your Slice by Learning Go'
date: '2021-10-30'
---

- [Sliceの定義パターンメモ](#sliceの定義パターンメモ)
- [適切な定義](#適切な定義)
- [定義パターン](#定義パターン)
  - [1. var declaretion with no assigned value [zero lenght, nil]](#1-var-declaretion-with-no-assigned-value-zero-lenght-nil)
    - [いつ使う？](#いつ使う)
  - [2. slice literal [zero length, not nil]](#2-slice-literal-zero-length-not-nil)
    - [いつ使う？](#いつ使う-1)
  - [3. make()](#3-make)
    - [3-1. slice as buffer [non-zero lenght, not nil]](#3-1-slice-as-buffer-non-zero-lenght-not-nil)
    - [いつ使う？](#いつ使う-2)
    - [3-2. non-zero lengthを指定、値の設定はindexを使う [non-zero lenght, not nil]](#3-2-non-zero-lengthを指定値の設定はindexを使う-non-zero-lenght-not-nil)
    - [いつ使う？](#いつ使う-3)
    - [デメリット](#デメリット)
    - [3-3. zero lengthを指定、non-zero capacityを指定 [zero length, not nil]](#3-3-zero-lengthを指定non-zero-capacityを指定-zero-length-not-nil)
    - [いつ使う？](#いつ使う-4)
    - [メリット](#メリット)
  - [結論](#結論)
    - [zero length vs zero length + capacity指定](#zero-length-vs-zero-length--capacity指定)

# Sliceの定義パターンメモ

定義の方法が何種類かあるが、実際に書いてるとき毎回ググったりするのが煩わしいのでまとめる。
パターンは以下の本に記載されていたもの。この本は他にも実際に書いているときにどれが正しいのかわからない時のパターンが色々と載っている

Learning Go
https://www.amazon.co.jp/Learning-Go-Idiomatic-Real-World-Programming-ebook/dp/B08XYGCM71/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=learning+go&qid=1635643992&sr=8-1

# 適切な定義

- sliceの拡張する回数を最小化にするように定義
- golangでもsliceの内部配列は2倍のサイズを確保する

# 定義パターン

## 1. var declaretion with no assigned value [zero lenght, nil]

nil sliceを作る。

```go
var data []int
```

- length: 0
- capacity: 0
- nil

### いつ使う？

- まったくsliceが拡張する必要がないとき。
- sliceからJSONに変換するときのみ有用

いきなり↑の意味がわからなかった😢 

## 2. slice literal [zero length, not nil]

```
data := []int{2,4,6,8} // numbers we appreciate
```

### いつ使う？

- 初期値があるとき
- sliceの値が変わることがないとき

## 3. make()

必要なsliceのサイズがわかっているが入る値についてはコードを書いてるときにはわからないときは、makeを使え

これはすなわち以下の#1 or #2のどちらにするかという問題になる
1. 「non-zero lengthを指定する」
1. 「zero lengthを指定する + non zero capacityを指定する」

### 3-1. slice as buffer [non-zero lenght, not nil]

これは#1

```go
buf := make([]byte, 2048)
```

### いつ使う？

- sliceをbufferとして使うとき

### 3-2. non-zero lengthを指定、値の設定はindexを使う [non-zero lenght, not nil]

これも#1
要素へのアクセスはindex
注意： この定義の場合appendで要素を追加すると、末尾に追加される。0番目には追加されない

```go
original := []int{1, 2, 3, 4, 5}
double := make([]int, 5)
for i := range double {
	double[i] = 2 * original[i]
}
```

### いつ使う？

- あるsliceの値を変換した値を入れるsliceを用意するとき 

### デメリット

- lengthの指定を間違えると、必要なサイズより大きい場合は無駄な0がsliceの最後に残る、または小さい場合はindex指定でout of rangeでpanicが起きる

### 3-3. zero lengthを指定、non-zero capacityを指定 [zero length, not nil]

これは#2

```go
a := make([]int, 0, 5)
```

### いつ使う？

- 上記以外のシチュエーション

### メリット

- 必要なサイズが想定より小さい場合に無駄なzero valueが入らいない、逆に大きい場合もindex指定と違ってout of rangeでpanicが起きることもない

## 結論

goのコミュニティでは3-2派と3-3派で分かれているらしい。
本書では、パフォーマンス的には遅くなる可能性があるが、バグの原因となる可能性があるため安全面から3-3のzero lengthでappendで値を追加していく方を推奨している

```go
// 3-2
x := make([]int, 5) // [0 0 0 0 0] length: 5, capacity: 5
x[0] = 10

// 3-3
y := make([]int, 0, 5) // [] length: 0, capacity: 5
y = append(y, 10)
```

### zero length vs zero length + capacity指定

ちなみにcapacityを指定するメリット
capacityを指定していないsliceは0->1->2->4->8と4回拡張している。逆にサイズ指定しているsliceは0回

```go
a := make([]int, 0, 5)
var b []int
fmt.Printf("a: %v length: %v, capacity: %v
", a, len(a), cap(a))
	fmt.Printf("b: %v length: %v, capacity: %v
", b, len(b), cap(b))
	for i := 1; i < 6; i++ {
		a = append(a, i)
		b = append(b, i)
	}
fmt.Printf("a: %v length: %v, capacity: %v
", a, len(a), cap(a))
fmt.Printf("b: %v length: %v, capacity: %v
", b, len(b), cap(b))
```
```
a: [] length: 0, capacity: 5
b: [] length: 0, capacity: 0
a: [1 2 3 4 5] length: 5, capacity: 5
b: [1 2 3 4 5] length: 5, capacity: 8
```