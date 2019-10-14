<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
    </header>
    <base-scroll
    :data='recommends'
    pullDown pullUp
    @pull-down='pullToRefresh'
    @pull-up="pullToLoadMore"
    @scroll-end='scrollEnd'
    @scroll="scroll"
    ref="baseScroll"
    >
      <home-slider ref="slider"></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends" ref='recommend'></home-recommend>
    </base-scroll>
    <div class="g-backtop-container">
      <base-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header.vue';
  import HomeSlider from './slider.vue';
  import HomeNav from './nav.vue';
  import HomeRecommend from './recommend.vue';
  import baseScroll from 'base/scroll';
  import baseBacktop from 'base/backtop';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      HomeNav,
      HomeRecommend,
      baseScroll,
      baseBacktop
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    methods: {
      updateScroll() {},
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          console.log(err);
          end();
        });
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      backToTop() {
        this.$refs.baseScroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }

        this.$refs.header.show();
        this.isHeaderTransition = -translate > 100;
      }
    }

  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color:$bgc-theme;
  }
</style>
