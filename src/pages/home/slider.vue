<template>
  <div class="wrapper">
    <base-loading v-if='!sliders.length'/>
    <base-slider
        :data='sliders'
        :direction="direction"
        :loop="loop"
        :interval="interval"
        :pagination="pagination"
        v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="#" class="slider-img">
        </a>
      </swiper-slide>
    </base-slider>
  </div>

</template>

<script>
  import baseSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config.js';
  import {getHomeSlider} from 'api/home.js';
  import baseLoading from 'base/loading';
  export default {
    name: 'HomeSlider',
    components: {
      baseSlider,
      swiperSlide,
      baseLoading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [
          // {
          //   href:'https://github.com/aleeeeexx/vue-mall',
          //   src:require('./1.jpg')
          // },
          // {
          //   href:'https://github.com/aleeeeexx/vue-mall',
          //   src:require('./2.jpg')
          // },
          // {
          //   href:'https://github.com/aleeeeexx/vue-mall',
          //   src:require('./3.jpg')
          // },
          // {
          //   href:'https://github.com/aleeeeexx/vue-mall',
          //   src:require('./4.jpg')
          // }
        ]
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      update() {
        return this.getSliders();
      },
      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper{
    height: 183px;
  }
  .slider-link{
    height: 100%;
    width: 100%;
    display: block;
  }
  .slider-img{
    height: 100%;
    width:100%;
  }
</style>
