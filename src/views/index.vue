<template>
  <div>
  </div>
</template>
<script>
require('../assets/scss/index.scss')
require('../assets/scss/iconfont/iconfont.css')

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
