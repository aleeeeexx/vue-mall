<template>
  <div class="login">
    <div class="portrait">
      <i class="iconfont icon53"></i>
    </div>
    <div class="login-end">
      <span>注册</span>
      <span>登录</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .login{
    width:100%;
    background-color: $header-bgc-translucent;
    display: flex;
    @include flex-center(column);
    .portrait{
      margin-top: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color:$header-bgc-translucent;
      background-color: #fff;
      text-align: center;
      line-height: 60px;
      .iconfont{
        font-size: 30px;
      }
    }

    &-end{
      padding: 20px 0;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      span{
        padding: 0 20px;
        display: inline-block;
        &:nth-child(1){
          border-right:2px solid #fff;
        }
      }

    }

  }
</style>
