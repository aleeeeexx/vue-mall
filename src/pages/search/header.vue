<template>
  <base-navbar class="header">
    <i
      class="iconfont iconfanhui"
      slot="left"
      @click="goBack"
    ></i>
    <base-search-box
      placeholder="开学季有礼，好货5折起"
      slot="center"
      @query="query"
    />
  </base-navbar>
</template>

<script>
  import baseNavbar from 'base/navbar';
  import baseSearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',
    components: {
      baseNavbar,
      baseSearchBox
    },
    methods: {
      query(query) {
        this.$emit('query', query);
      },
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    border-bottom: 1px solid $border-color;

    .iconfont{
      color: $icon-color;
      font-size: $icon-font-size;
    }

    .base-search-box-wrapper {
      background-color: #f7f7f7;
    }
  }
</style>
