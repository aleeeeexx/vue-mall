<template>
  <div class="base-navbar">
    <div class="base-navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="base-navbar-center"  v-if='$slots.center'>
      <slot name="center"></slot>
    </div>
    <div class="base-navbar-right"  v-if='$slots.right'>
      <slot name="right"></slot>
    </div>
    <h1 class="base-navbar-title" v-if="title">
        <span class=" base-navbar-text" v-text="title"></span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'baseNavbar',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .base-navbar{
    @include flex-between();
    height: 50px;
    background-color: #fff;
    &-left{
      margin-left: 10px;
    }
    &-center{
      margin:0 10px;
      flex:1;
      ~ .base-navbar-right {
        position: static;
      }
    }
    &-right {
      position: absolute;
      right: 0;
      @include flex-center();
      height: 100%;
      margin-right: 10px;
    }
    &-title {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20%;
      right: 20%;
      @include flex-center();
      text-align: center;
    }
    &-text {
      color: #fff;
      width: 100%;
      font-size: 16px;
      text-align: center;
      line-height: 1.5;
      @include ellipsis();
    }
  }
</style>
