<template>
  <!-- @に続けることでJSが利用できる,また$eventでeventオブジェクトが利用できる -->
  <div class="mdl-textfield mdl-js-textfield">
    <input @change="CHANGE_KEYWORD($event.target.value)" class="mdl-textfield__input" type="text" id="sample1">
    <i @click="SEARCH" class="material-icons">Search</i>
  </div>
</template>

<script>
  // import { mapActions }でstore内のactionsが受け取れる
  import { mapActions } from 'vuex'
  // Actions内に関数ををtemplate内で利用する場合には
  // mapActions内に別でmutation-typesから取得した関数を登録しなければならない
  import { CHANGE_KEYWORD, SEARCH } from '../../vuex/mutation-types'
  export default {
    // @以降に利用するためmethodsを使用
    methods: {
      ...mapActions([
        CHANGE_KEYWORD, SEARCH
      ])
    }
  }
</script>
