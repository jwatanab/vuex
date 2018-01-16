<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <!-- for文 getters.gifsを利用、元のCard componentsに渡す -->
      <card v-for="gif in gifs" :gif="gif"></card>
    </div>
      <search></search>    
  </main>
</template>

<script>
// ここではpage内のコンポーネントを包括する
// 取得したコンポーネント名は小文字に変換してhtmlタグとして利用する

import Search from './Search'
import Card from './Card'
// store内の関数はmap{getters,actions}で利用できる

import { mapGetters } from 'vuex'
// templateに向けて公開
export default {
  // 情報取得が完了した段階で使用
  computed: {
    // getterの場合には'',"",``で囲まなければならない
    ...mapGetters(["gifs"])
  },
  // importしたコンポーネントを公開
  components: {
    Search,
    Card
  }
}
</script>
