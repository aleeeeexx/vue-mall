<template>
  <base-navbar class="header"  v-show="visible">
    <i class="iconfont iconscan" slot="left"></i>
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
    name: 'HomeHeader',
    components: {
      baseNavbar,
      baseSearch
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      // API
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
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
      // background-color: $header-bgc-translucent;
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color:$icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
