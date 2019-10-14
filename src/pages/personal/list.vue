<template>
  <ul class="list">
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont iconshouhou"></i>
        售后服务
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont iconyijianfankui"></i>
        意见反馈
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont iconshouhuodizhi"></i>
        收货地址
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont icontuichudenglu"></i>
        退出登录
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont iconyijianfankui"></i>
        400-123-8888
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>
    <li class="list-item">
      <span class="list-item-text">
        <i class="iconfont iconlianxidianhua"></i>
        售后服务
      </span>
      <i class="iconfont iconyoujiantou list-item-go"></i>
    </li>

  </ul>
</template>

<script>
  export default {
    name: 'list'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .list{
    margin:15px 0;
    background-color: #fff;
    &-item{
      @include flex-between();
      border-bottom: 1px solid #f5f5f5;
      padding:10px;
      line-height: 1.5;
      font-size: 14px;
    }
  }
</style>
