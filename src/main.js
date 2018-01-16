import Vue from 'vue'
import App from './App'
import store from './vuex/store'
/* eslint-disable no-new */
/* edlint-disable no-newは必須 */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})

/**
 * el: 対象となるコンポーネント
 * store: 対象store
 * components: 対象となるコンポーネント(ここではすでにコンポーネントを組み合わせてある)
 * template: 使用するTemplate,`<App />`はAppコンポーネントで定義してある
 */
