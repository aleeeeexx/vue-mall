<template>
  <div class="property">
    <div class="property-title"><i class="iconfont iconzichan"></i>&nbsp;我的资产</div>
    <ul class="property-main">
      <li class="property-main-item">现金券</li>
      <li class="property-main-item">红包</li>
      <li class="property-main-item">余额</li>
      <li class="property-main-item">礼品卡</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'property'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.property{
  margin:15px 0;
  background-color: #fff;
  width: 100%;

  &-title{
    border-bottom: 1px solid #f5f5f5;
    padding:10px;
    line-height: 1.5;
    font-size: 16px;
  }

  &-main{
    @include flex-center;
    &-item{
      width:25%;
      font-size: 14px;
      padding: 10px;
      text-align: center;
    }
  }

}

</style>
