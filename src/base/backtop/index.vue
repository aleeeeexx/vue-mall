<template>
  <transition name="base-backtop">
    <span
      href=""
      class="base-backtop"
      v-show="visible"
      @click="backToTop"
    >
      <i class="iconfont iconfanhuidingbu"></i>
    </span>
  </transition>
</template>

<script>
  export default {
    name: 'baseBacktop',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backToTop() {
        this.$emit('backtop');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .base-backtop {
    overflow: hidden;
    @include flex-center();
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;

    .iconfont {
      color: #fff;
      font-size: 38px;
    }
  }

  .base-backtop {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.4s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
