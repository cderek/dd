<template>
<div id="app">
  <transition>
    <keep-alive>
      <router-view class="app-view"></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
require('@/assets/scss/index.scss')
require('@/assets/scss/iconfont/iconfont.css')

export default {
  mounted () {
    setTimeout(() => {
      this.$router.push({
        name: 'hot'
      })
    }, 2000)
  }
}
</script>

<style lang="scss">
  .app-view {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }
</style>
