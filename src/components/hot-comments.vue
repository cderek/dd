<style lang="scss">
.hot-comments {
  background: #fff;
  padding: 0.213333rem 0.4rem 0;
  border-bottom: solid 0.266667rem #f0f3f5;
}

[data-dpr="1"] .hot-comments {
  font-size: 14px;
}

[data-dpr="2"] .hot-comments {
  font-size: 28px;
}

[data-dpr="3"] .hot-comments {
  font-size: 42px;
}

.hot-comments h1 {
  font-weight: bold;
  color: #404040;
  margin: 0.266667rem 0;
}

[data-dpr="1"] .hot-comments h1 {
  font-size: 16px;
}

[data-dpr="2"] .hot-comments h1 {
  font-size: 32px;
}

[data-dpr="3"] .hot-comments h1 {
  font-size: 48px;
}

.hc-item {
  padding-top: 0.4rem;
}

.hc-item-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.hc-item-avatar {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  width: 0.96rem;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  /*overflow: hidden;*/
  margin-right: 0.266667rem;
  margin-bottom: -0.426667rem;
}

.hc-item-username {
  color: #808080;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hc-item-like {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  color: #bfbfbf;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGgyMHYyMEgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjRDhEOEQ4IiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPGcgc3Ryb2tlPSIjQkZCRkJGIiBzdHJva2Utd2lkdGg9IjIiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01Ljk3NSA5LjA1MWwyLjk0MyA4LjA0NSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMuMTA2IDcuMTE2bDEuNjEtLjM0MmMxLjU1OC0uMzI1IDIuODY2LjUyNyAyLjc4IDIuMTE0bC0uNTMgNS4zMTljLS4wOTUuODg4LS40MTMgMS45NzEtMS45NjMgMi4zbC04LjczMiAxLjQ1YTIgMiAwIDAgMS0yLjE3NS0xLjIwOGwtMS45MDMtNC41OTdhMiAyIDAgMCAxIDEuMzM4LTIuN2MzLjY5NS0uOTcyIDUuNTM5LTIuMSA1LjUzMy0zLjM4Mi0uMDAyLS41OTguMDItMS4xMi4wMS0xLjktLjAxMy0xLjAxNy4wMzYtMS41MjMuNzc0LTEuOTE3IDEuNTQtLjczIDIuNzIuMjEzIDMuMTMgMS42MjIuMTMxLjQ2LjEyOCAzLjI0LjEyOCAzLjI0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) 100% 0 no-repeat;
  text-decoration: none;
  margin-left: auto;
}

[data-dpr="1"] .hc-item-like {
  line-height: 18px;
  padding-right: 20px;
  background-size: 16px 16px;
}

[data-dpr="2"] .hc-item-like {
  line-height: 36px;
  padding-right: 40px;
  background-size: 32px 32px;
}

[data-dpr="3"] .hc-item-like {
  line-height: 54px;
  padding-right: 60px;
  background-size: 48px 48px;
}

.hc-item-body {
  margin-left: 1.226667rem;
  margin-right: -0.4rem;
  padding-right: 0.4rem;
  padding-bottom: 0.266667rem;
  border-bottom: solid 1px #dbdbdb;
}

.hc-item:last-child .hc-item-body {
  border-bottom: none;
}

.hc-item-content {
  line-height: 1.3;
  color: #404040;
  margin-bottom: 0.133333rem;
}

.hc-item-replyto {
  border-left: 0.053333rem solid #52c5fe;
  line-height: 1.3;
  color: #808080;
  padding: 0.053333rem 0 0.053333rem 0.266667rem;
  margin: 0.133333rem 0;
}

[data-dpr="1"] .hc-item-replyto {
  font-size: 12px;
}

[data-dpr="2"] .hc-item-replyto {
  font-size: 24px;
}

[data-dpr="3"] .hc-item-replyto {
  font-size: 36px;
}

.hc-item-time {
  color: #bfbfbf;
  margin-bottom: 0.133333rem;
}

[data-dpr="1"] .hc-item-time {
  font-size: 12px;
}

[data-dpr="2"] .hc-item-time {
  font-size: 24px;
}

[data-dpr="3"] .hc-item-time {
  font-size: 36px;
}

.more-comments-wrap {
  margin: 0.4rem 0;
  text-align: center;
}

.more-comments {
  display: inline-block;
  /*width: 210px;*/
  /*margin: auto;*/
  text-align: center;
  color: #404040;
  background: #e9edf1;
  text-decoration: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[data-dpr="1"] .more-comments {
  padding: 12px 18px;
  border-radius: 6px;
}

[data-dpr="2"] .more-comments {
  padding: 24px 36px;
  border-radius: 12px;
}

[data-dpr="3"] .more-comments {
  padding: 36px 54px;
  border-radius: 18px;
}
</style>
<template>
<div v-if="comments" class="hot-comments" transition="fade">
  <h1>热门评论</h1>
  <ul class="hc-list">
    <li class="hc-item">
      <div class="hc-item-header">
        <div class="user-avatar hc-item-avatar is-round is-inline">
          <div class="user-avatar-content" style="background-image: url(&quot;data:image/jpeg;base64,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&quot;);">

          </div>
        </div>
        <h3 class="hc-item-username">柒八染</h3>
        <a class="hc-item-like" href="//m.ruguoapp.com/messages/59d8acea44dbe700164625b7">
          36
        </a>
      </div>
      <div class="hc-item-body">
        <p class="hc-item-time">19:20</p>
        <p data-v-76e18eba="" class="content-text hc-item-content">
          <span data-v-76e18eba="">铲屎的！你派个吃屎的过来干嘛！</span>
        </p>
      </div>
    </li>
</ul>
 </div>
</template>
<script>
export default {
  props: ['comments']
}
</script>
