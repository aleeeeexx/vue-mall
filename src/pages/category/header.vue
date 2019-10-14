<template>
  <base-navbar class="header">
    <base-search
    slot='center'
    @query='getQuery'
    fake
    @click.native="goToSearch"
    />
    <i class="iconfont iconxinxi" slot="right"></i>
  </base-navbar>
</template>

<script>
  import baseNavbar from 'base/navbar';
  import baseSearch from 'base/search-box';
  export default {
    name: 'CategoryHeader',
    components: {
      baseNavbar,
      baseSearch
    },
    methods: {
      goToSearch() {
        this.$router.push('/search');
      },
      getQuery(query) {
        console.log(query);
      }
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
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
