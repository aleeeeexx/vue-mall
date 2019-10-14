<template>
  <div class="base-loading" :class="{'base-loading-inline':inline}">
    <span class="base-loading-indicator" v-if="indicator==='on'">
      <slot><img src="./loading.gif" alt="loading"></slot>
    </span>
    <span class="base-loading-text" v-if="text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'baseLoading',
    props: {
      indicator: {
        type: String,
        default: 'on'
      },
      text: {
        type: String,
        default: '加载中...'
      },
      inline: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.base-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  @include flex-center(column);

  &.base-loading-inline {
    flex-direction: row;

    .base-loading-indicator ~ .base-loading-text {
      margin-top: 0;
      margin-left: 6px;
    }
  }
}

.base-loading-indicator ~ .base-loading-text {
  margin-top: 6px;
}
</style>
