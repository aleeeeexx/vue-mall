<template>
  <swiper :options="options" ref="swiper">
    <div class="base-scroll-pull-down" v-if="pullDown">
      <base-loading inline :text="pullDownText"></base-loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="base-scroll-pull-up" v-if='pullUp'>
      <base-loading :text='pullUpText' inline ref='pullUpLoading'/>
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import baseLoading from 'base/loading';
  export default {
    name: 'baseScroll',
    components: {
      swiper,
      swiperSlide,
      baseLoading
    },
    props: {
      scrollbar: {type: Boolean, default: true},
      pullDown: {type: Boolean, default: false},
      pullUp: {type: Boolean, default: false},
      data: {
        type: [Object, Array]
      }
    },
    data() {
      return {
        pulling: false,
        pullDownText: '刷新中...',
        pullUpText: '加载中...',
        options: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollBar: {
            el: this.scrollbar ? '.swiper-scroll' : null,
            hide: true
          },
          on: {sliderMove: this.scroll, touchEnd: this.touchEnd, transitionEnd: this.scrollEnd}
        }
      };
    },
    watch: {
      data() {
        this.update();
      }
    },
    methods: {
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      },
      scrollToTop(speed, runCallbacks) {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper;
        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);
        if (this.pulling) {
          return;
        };
        if (swiper.translate > 0) { // 下拉
          if (!this.pullDown) {
            return;
          };
          if (swiper.translate > 100) { // 判断下拉的距离是否大于100

          };
        } else if (swiper.isEnd) { // 上拉
          if (!this.pullUp) {
            return;
          };
          // 滚动中要做的事情，先留着
        };
      },
      scrollEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.$emit('scroll-end', swiper.translate, swiper, this.pulling);
      },
      touchEnd() {
        if (this.pulling) {
          return;
        }
        const swiper = this.$refs.swiper.swiper;
        if (swiper.translate > 100) { // 判断下拉的距离是否大于100
          if (!this.pullDown) {
            return;
          };
          this.pulling = true;
          swiper.allowTouchMove = false; // 禁止触摸
          swiper.setTransition(swiper.params.speed);
          swiper.setTranslate(100);
          swiper.params.virtualTranslate = true; // 定住不给回弹
          this.$emit('pull-down', this.pullDownEnd);
        } else if (swiper.isEnd) {
          const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
          const isPullUp = Math.abs(swiper.translate) + swiper.height - 50 > totalHeight;
          if (isPullUp) { // 上拉
            if (!this.pullUp) {
              return;
            }
            this.pulling = true;
            swiper.allowTouchMove = false; // 禁止触摸
            swiper.setTransition(swiper.params.speed);
            swiper.setTranslate(-(totalHeight + 50 - swiper.height));
            swiper.params.virtualTranslate = true; // 定住不给回弹
            this.$emit('pull-up', this.pullUpEnd);
          }
        }
      },
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0);
        setTimeout(() => {
          this.$emit('pull-down-transition-end');
        }, swiper.params.speed);
      },
      pullUpEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .base-scroll-pull-down{
    position: absolute;
    left:0;
    bottom: 100%;
    width:100%;
    height: 80px;
  }
  .base-scroll-pull-up{
    position: absolute;
    left: 0;
    width: 100%;
    top: 100%;
    height: 30px;
  }
  .swiper-container{
    overflow: hidden;
    width:100%;
    height: 100%;
  }
  .swiper-slide{
    height: auto;
  }
</style>
