<template>
  <div class="order">
    <div class="my-order">
      <span class="my-order-title"><i class="iconfont icondaishouhuo"></i>&nbsp;我的订单</span>
      <span class="my-order-text">查看我的全部订单&nbsp;<i class="iconfont iconyoujiantou"></i></span>
    </div>
    <ul class="list">
      <li class="list-item">
        <i class="iconfont icondaifukuan"></i>
        <span>待付款</span>
      </li>
      <li class="list-item">
        <i class="iconfont icondaishouhuo"></i>
        <span>待收货</span>
      </li>
      <li class="list-item">
        <i class="iconfont icondaipingjia"></i>
        <span>待评价</span>
      </li>
      <li class="list-item">
        <i class="iconfont icontui"></i>
        <span>退货</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'order'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
 .order{
   margin:15px 0;
   background-color: #fff;
   width: 100%;

   .my-order{
     @include flex-between();
     border-bottom: 1px solid #f5f5f5;
     padding:10px;
     line-height: 1.5;
     font-size: 14px;
     span{
       display: inline-block;
       color: #5d656b;
     }

   }
   .list{
     @include flex-center();
     .list-item{
       width:25%;
       font-size: 14px;
       padding: 10px;
       @include flex-center(column)
       .iconfont{
         font-size: 16px;
         margin-bottom: 8px;
       }
     }
   }

 }
</style>
