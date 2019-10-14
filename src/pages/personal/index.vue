<template>
  <div class="personal">
    <header class="g-header-container">
      <p-header/>
    </header>
    <div class="g-content-container">
      <base-scroll>
        <p-login/>
        <p-order/>
        <p-property/>
        <p-list/>
      </base-scroll>
    </div>

  </div>

</template>

<script>
  import pHeader from './header.vue';
  import pLogin from './login.vue';
  import pOrder from './order.vue';
  import pProperty from './property.vue';
  import pList from './list.vue';
  import baseScroll from 'base/scroll';
  export default {
    name: 'Personal',
    components: {
      pHeader,
      pLogin,
      baseScroll,
      pOrder,
      pProperty,
      pList
    }
  };
</script>

<style lang="scss" scoped>
.personal{
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}
</style>
