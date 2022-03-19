# Vuex
![uex](https://vuex.vuejs.org/vuex.png)

## ゲッター

>もしこの関数を複数のコンポーネントで利用したくなったら、関数をコピーするか、あるいは関数を共用のヘルパーに切り出して複数の場所でインポートする必要があります。しかし、どちらも理想的とはいえません。
>
>Vuex を利用するとストア内に "ゲッター" を定義することができます。それらをストアの算出プロパティと考えることができます。

```javascript
const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

## ミューテーション

>実際に Vuex のストアの状態を変更できる唯一の方法は、ミューテーションをコミットすることです。Vuex のミューテーションはイベントにとても近い概念です: 各ミューテーションはタイプとハンドラを持ちます。ハンドラ関数は Vuex の状態（state）を第1引数として取得し、実際に状態の変更を行います:

>直接ミューテーションハンドラを呼び出すことはできません。この mutations オプションは、どちらかいうと "タイプが increment のミューテーションがトリガーされたときに、このハンドラが呼ばれる" といったイベント登録のようなものです。ミューテーションハンドラを起動するためにはミューテーションのタイプを指定して store.commit を呼び出す必要があります:

```javascript
const store = createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 状態を変更する
      state.count++
    }
  }
})

store.commit('increment')
```

### Fillterが有効ではない

### 非同期処理でDOMの更新が行われない。
ToDo.md
package.json
src/App.vue
src/main.ts
src/router/index.ts
src/store/index.ts
src/views/Calendar.vue
src/views/DataGrid.vue del
src/views/LineChart.vue
src/views/axios.vue
src/vuex.d.ts new
yarn.lock
