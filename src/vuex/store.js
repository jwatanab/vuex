import Vuex from 'vuex'
import Vue from 'vue'
import { CHANGE_KEYWORD, SEARCH } from './mutation-types'

Vue.use(Vuex)

// Storeで定義された関数を外部から参照する
// 外部からimport { mapActions } from 'vuex' ???{ ...mapActions([関数])}で利用できる
// 関数として利用するmethods{}と保持したstateを取得が完了した状態で渡すためのcomputed{}

// store -> 一時的なデータを保存しておく
// actionsやgettersではデータの伝達だけを行い、データを保存できるのはstateだけとなる
const state = {
  keyword: '',
  gifs: []
}

// 入力された文字列を元にgifを検索
// データの取得はActionsが行うので、Acrions内で利用する
function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC')
    .then(res => res.json())
}

// Actionsでは外部からの情報の取得(ユーザー入力、API)、mutationsに渡す
const actions = {
  /**
  * 解釈
  * --------------
  * Parent 第一引数で使用するメソッド(commit)を入れて、第二引数でe.target.valueを受け取っている
  * Children 第一引数で使用するメソッド(mutations)を入れて、第二引数でe.target.valueを渡している
  */
  [CHANGE_KEYWORD] ({ commit }, key) {
    commit(CHANGE_KEYWORD, key)
  },

  /**
   * 解釈
   * -------------
   * SERACHでは第一引数では分割代入メソッドcommit,情報を保持しているstateを入れている
   * getGifsでは非同期でのオブジェクトの取得が行われ、thenが定義されている
   * 取得が完了するとjsonをmutations SERACH関数渡す
   */
  [SEARCH] ({ commit, state }) {
    getGIFs(state.keyword)
      .then(result => {
        commit(SEARCH, result)
      })
  }
}

// Componentにstateを渡す
const getters = {
  gifs: state => state.gifs
}

// mutationsではStateの保存を行う
const mutations = {
  // CHANGED_KEYWORDでは第一引数にstate、第二引数でactions内のデータを受け取る
  [CHANGE_KEYWORD] (state, key) {
    state.keyword = key
  },
  // SEARCHでは第一引数にstate、第二引数ではactionsで取得したデータを受け取る
  // なおSEARCH関数内でactionsで受け取ったオブジェクトはdataプロパティを保持している
  [SEARCH] (state, g) {
    state.gifs = g.data
  }
}

// 外部に公開
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
