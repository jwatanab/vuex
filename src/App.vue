<template>
  <div id="app">
    <vue-header></vue-header>
    <time-line></time-line>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMdl from 'vue-mdl'
import VueHeader from './components/Header'
import TimeLine from './components/page/TimeLine'

// export Component
export default {
  components: {
    VueHeader,
    TimeLine
  }
}
</script>
