<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <!-- Timeline Componentでのfor文からきたgifオブジェクトのプロパティをsrcに指定 -->
      <img :src="gif.images.fixed_height.url" alt="" />
    </div>
    <div class="mdl-card__actions">
      <span class="filename">{{gif.slug}}</span>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
  export default {
    // 使用するオブジェクトの型を指定
    props: {
      gif: Object
    }
  }
</script>
