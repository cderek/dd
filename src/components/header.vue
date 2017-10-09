<template>
  <header class="header">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEyIDMxMiI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIzMTIiIGhlaWdodD0iMzEyIiByeD0iNzAiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI5MC4zNzQlIiB4Mj0iNzguNjA0JSIgeTE9IjY4LjE5OCUiIHkyPSI2OC4xOTglIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNUVDMUY5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNUVCOEY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkU0MTEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTcuNzExIDE2Mi40NzFhNC4wNiA0LjA2IDAgMCAxLS40MjEuMDc0bDEzLjQxOSAxMy4wODhjMTIuOS0xLjE4NyAyNS41MzItNC41OCAzNC44My03Ljk0NCA5LjMtMy4zNjMgMTYuOTU3LTcuNjk2IDIyLjk3MS0xMi45OTkgNi4wMTUtNS4zMDIgMTAuNDY3LTExLjY3MyAxMy4zNTUtMTkuMTEyIDIuODg5LTcuNDQgNC4zMzMtMTYuMDI2IDQuMzMzLTI1Ljc2VjYxLjc0YzAtMTAuODQzLjA0LTIwLjI0LjExOS0yOC4xOTQuMDc5LTcuOTU0LjExOS0xNS4xMzYuMTE5LTIxLjU0NmwtMTUtMTEuOTczYzAgNi40MDMtLjA0IDEzLjU3Ni0uMTIgMjEuNTE5LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMTg2IDMuMzIyLTIwLjEzIDUuNTgyLTMyLjgyOSA2Ljc4MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMSA3MykiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTgyLjQzNiA3M2MwIDYuNDEtLjA0IDEzLjU5Mi0uMTIgMjEuNTQ2LS4wNzggNy45NTQtLjExOCAxNy4zNTEtLjExOCAyOC4xOTR2NDguMDc4YzAgOS43MzQtMS40NDQgMTguMzItNC4zMzMgMjUuNzYtMi44ODggNy40NC03LjM0IDEzLjgxLTEzLjM1NSAxOS4xMTItNi4wMTQgNS4zMDMtMTMuNjcxIDkuNjM2LTIyLjk3IDEzLTkuMyAzLjM2My0yMC4zOTkgNS42MzgtMzMuMjk5IDYuODI1TDEwMSAyMDQuNDEzYzYuNjQ4LS43OTIgMTIuNDY1LTEuODQgMTcuNDUtMy4xNDYgNC45ODYtMS4zMDYgOS4zMzktMy4zODMgMTMuMDU5LTYuMjMyIDMuOTU3LTMuMDg3IDYuOTQ0LTYuOTY1IDguOTYyLTExLjYzNCAyLjAxOC00LjY3IDMuMDI3LTEwLjg0MiAzLjAyNy0xOC41MTkgMC02LjE3My4wMi0xMi42ODIuMDYtMTkuNTI4LjA0LTYuODQ1LjA2LTEzLjkwOS4wNi0yMS4xOSAwLTEyLjY2Mi0uMDYtMjIuNzMzLS4xNzktMzAuMjEyQTU3MjAuMSA1NzIwLjEgMCAwIDEgMTQzLjE0MiA3M2gzOS4yOTR6Ii8+PC9nPjwvc3ZnPg==" class="logo">
    <span class="title">即刻热门</span>
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
      nickname: '',
      profileimgurl: '',
      show: false
    }
  },
  methods: {
    openMenu () {
      // $('html, body, #page').addClass('scroll-hide')
      $('body').css('overflow', 'hidden')
      this.show = !this.show
    },
    showMenus () {
      this.show = !this.show
      $('body').css('overflow', 'auto')
      // $('html, body, #page').removeClass('scroll-hide');
    }
  },
  components: {
  }
}
</script>
