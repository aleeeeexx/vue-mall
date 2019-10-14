<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item,index) in items" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'homeNav',
    data() {
      return {
        items: [
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-1.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-2.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-3.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-4.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-5.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-6.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-7.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-8.png'),
            text: '拍卖'
          },
          {
            linkUrl: 'https://github.com/aleeeeexx/vue-mall',
            picUrl: require('./img/nav-item-9.png'),
            text: '拍卖'
          }
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.nav {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 20%;
    margin-bottom: 15px;
  }

  &-link {
    @include flex-center(column);
  }

  &-pic {
    width: 60%;
    margin-bottom: 8px;
  }
}
</style>
