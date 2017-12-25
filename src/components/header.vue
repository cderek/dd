<template>
  <header class="header">
    <div class="head-wrap" v-if="pageType === 'hot'">
      <img :src="jikeLogo.avatar_url" class="logo">
      <span class="title">即刻热门</span>
    </div>
    <div class="head-wrap" v-if="pageType === 'profile'">
      <p class="head-title">我的</p>
    </div>
  </header>
</template>

<script>
import $ from 'webpack-zepto'

export default {
  replace: true,
  props: {
    pageType: String,
    fixHead: Boolean,
    messageCount: Number,
    scrollTop: 0,
    needAdd: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      jikeLogo: {'avatar_url': require('@/assets/images/jike_logo.png')},
      nickname: '',
      profileimgurl: '',
      show: false
    }
  },
  methods: {
    openMenu () {
      $('body').css('overflow', 'hidden')
      this.show = !this.show
    },
    showMenus () {
      this.show = !this.show
      $('body').css('overflow', 'auto')
    }
  },
  components: {
  }
}
</script>
