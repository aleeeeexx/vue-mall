<template>
  <base-navbar title='我的在线商城' class="header">
    <div class="icon-wrapper" slot='right'>
      <i class="iconfont iconshezhi"></i>
      <i class="iconfont iconxinxi1"></i>
    </div>
  </base-navbar>
</template>

<script>
  import baseNavbar from 'base/navbar';
  export default {
    name: 'pHeader',
    components: {
      baseNavbar
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
    &.base-navbar {
      background-color: $header-bgc-translucent;
    }
    .iconfont {
      color:$icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
