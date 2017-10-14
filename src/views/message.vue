<template>
  <div class="message-wrap page-wrap" transition-mode="out-in">
    <topic-link :topicItem="messageItem">
    </topic-link>
    <div class="content-wrap">
      <div class="message-detail">
        <p class="content-text content">
          <span> {{messageItem.content}} </span>
        </p>
        <div v-if="messageItem.pictureUrls">
          <div v-if="messageItem.pictureUrls.length === 1" class="image-list single">
            <div class="image-list-content clear">
              <div class="image-item">
                <div class="image-wrap fixed-ratio" style="padding-top: 56.25%;">
                  <div class="image-border">
                    <div class="image" lazy="loaded" :style="{ 'background-image': 'url(' + messageItem.pictureUrls[0].middlePicUrl + ')' }">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="messageItem.pictureUrls.length != 0 && messageItem.pictureUrls.length !=1" class="image-list">
            <div class="image-list-content clear">
              <div class="image-item" v-for="pictureUrl in messageItem.pictureUrls">
                <div class="image-wrap fixed-ratio" style="padding-top: 100%;">
                  <div class="image-border">
                    <div v-if="pictureUrl.thumbnailUrl" class="image" lazy="loaded" :style="{ 'background-image': 'url(' + pictureUrl.thumbnailUrl + ')' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="messageItem.sourceRawValue === 'video'" class="video-player msg-video is-bilibili">
          <div v-if="messageItem.video" class="wrap" lazy="loaded" :style="{ 'background-image': 'url(' + messageItem.video.thumbnailUrl + ')' }">
            <video :src="messageItem.videoLink" controls="controls" preload="true" playsinline="true">
              您的浏览器不支持 video 标签。
            </video>
            <div v-if="messageItem.video.thumbnailUrl" class="cover" lazy="loaded" :style="{ 'background-image': 'url(' + messageItem.video.thumbnailUrl + ')' }">
              <div class="btn-play">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGRkU0MTEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNSAxNC41NTVjMC0xLjUxNyAxLjA5LTIuMTMxIDIuMzk3LTEuMzczbDkuNDggNS40NTZjMS4zMDcuNzU5IDEuMzA3IDEuOTg3IDAgMi43NDZsLTkuNDggNS40NTZjLTEuMzA3LjcyMy0yLjM5Ny4xMDgtMi4zOTctMS4zNzNWMTQuNTU1eiIvPgogICAgPC9nPgo8L3N2Zz4K" alt="">
              </div>
              <span class="duration">{{ messageItem.video.duration | date('%m:%s') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hot-comments :hotComment="comments"></hot-comments>
    <div class="related-topics" transition="fade">
      <div class="related-section-title">更多推荐</div>
      <div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">马克·扎克伯格读书会推荐了新书</h1>
              <p class="subscribers">39037 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" style="background-image: url(&quot;https://cdn.ruguoapp.com/o_1a9502bkf13n21b1e1doi2s8lmd6g.jpeg?imageView2/1/w/300/h/300/format/jpeg/q/80&quot;);"></div>
            <p class="brief">扎克伯格创办了一个名为“A Year of Books”的粉丝团读书会，每两周推荐一本书，关注本主题第一时间知道他推荐的下一本书。</p>
          </div>
        </div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">《正午》每日推送</h1>
              <p class="subscribers">198141 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" style="background-image: url(&quot;https://cdn.ruguoapp.com/o_1a94vpqcmbqa1od9ed01g6kab049.jpeg?imageView2/1/w/300/h/300/format/jpeg/q/80&quot;);"></div>
            <p class="brief">《界面》旗下正午故事，原创、长篇、非虚构。我们只生产内容，不复制内容。在这里，每天一篇值得流传的故事。</p>
          </div>
        </div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">快手热门视频精选</h1>
              <p class="subscribers">143241 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" style="background-image: url(&quot;https://cdn.ruguoapp.com/FgYas3hP5p9l9sffuvtuyn8KBmrO.png?imageView2/1/w/300/h/300/format/jpeg/q/80&quot;);"></div>
            <p class="brief">快手是中国第一大短视频应用，里面有最搞笑的瞬间，最萌的宠物，最可爱的正太萝莉，还有你最喜欢的帅哥美女，双击评论666！</p>
          </div>
        </div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">PingWest报道精选</h1>
              <p class="subscribers">406339 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" style="background-image: url(&quot;https://cdn.ruguoapp.com/o_1afngnvi21ptgbhm1aj5os1a2fo.jpg?imageView2/1/w/300/h/300/format/jpeg/q/80&quot;);"></div>
            <p class="brief">有品好玩的科技，一切与你有关。</p>
          </div>
        </div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">「Thug Life」系列碉堡视频</h1>
              <p class="subscribers">38645 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" style="background-image: url(&quot;https://cdn.ruguoapp.com/FrvMs8pSglMuZeQYCyPA3XvLUSpo.jpg?imageView2/1/w/300/h/300/format/jpeg/q/80&quot;);"></div>
            <p class="brief">油管热门系列。从明星政客到萌宠小朋友，都有可能是嘻哈恶棍。</p>
          </div>
        </div>
        <div class="topic-card">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">Engadget中国版有新的评测</h1>
              <p class="subscribers">310656 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loading" style="background-image: url(&quot;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzIycHgiIGhlaWdodD0iMzIycHgiIHZpZXdCb3g9IjAgMCAzMjIgMzIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UmVjdGFuZ2xlIDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i56ys5LqM54mI5YiG5Lqr6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQiIGZpbGw9IiNEOEQ4RDgiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMjIiIGhlaWdodD0iMzIyIj48L3JlY3Q+CiAgICAgICAgPGcgaWQ9IlBhZ2UtMSIgb3BhY2l0eT0iMC4xMDQ5MDI2MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNC4wMDAwMDAsIDEwMy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjM4NjAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU2LjY5MjksMC42MTQyIEw1Ni42OTI5LDAuNjE0MiBDODguMDAzOSwwLjYxNDIgMTEzLjM4NTksMjUuOTk2MiAxMTMuMzg1OSw1Ny4zMDcyIEwxMTMuMzg1OSw1Ny4zMDcyIEMxMTMuMzg1OSw4OC42MTgyIDg4LjAwMzksMTE0LjAwMDIgNTYuNjkyOSwxMTQuMDAwMiBMNTYuNjkyOSwxMTQuMDAwMiBDMjUuMzgxOSwxMTQuMDAwMiAtMC4wMDAxLDg4LjYxODIgLTAuMDAwMSw1Ny4zMDcyIEwtMC4wMDAxLDU3LjMwNzIgQy0wLjAwMDEsMjUuOTk2MiAyNS4zODE5LDAuNjE0MiA1Ni42OTI5LDAuNjE0MiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03MC42MTc5LDM5LjcwOTkgQzcwLjU4ODksNDIuNTkwOSA3MC41NzQ5LDQ2LjA0MDkgNzAuNTc0OSw0OS45NjY5IEw3MC41NzQ5LDY3LjQzODkgQzcwLjU3NDksNzAuODI0OSA3MC4wNjk5LDczLjg0MTkgNjkuMDczOSw3Ni40MDU5IEM2OC4wOTI5LDc4LjkzMjkgNjYuNTU4OSw4MS4xMjY5IDY0LjUxNTksODIuOTI4OSBDNjIuNDQyOSw4NC43NTU5IDU5Ljc1MjksODYuMjc1OSA1Ni41MTc5LDg3LjQ0NDkgQzU0LjI1NTksODguMjYzOSA0OS43NTg5LDg5LjY4NzkgNDQuNjI4OSw5MC4yMjI5IEw0MS43NTg5LDg3LjQyMjkgQzQ1LjU1NzksODYuOTQyOSA0OC45MzA5LDg2LjE3NDkgNTEuODA4OSw4NS4xMzQ5IEM1NS4zMDE5LDgzLjg3MDkgNTguMjI3OSw4Mi4yMTE5IDYwLjUwNjksODAuMjAzOSBDNjIuODEzOSw3OC4xNjg5IDY0LjU0NjksNzUuNjg5OSA2NS42NTQ5LDcyLjgzMzkgQzY2Ljc0ODksNzAuMDE2OSA2Ny4zMDM5LDY2LjczNDkgNjcuMzAzOSw2My4wNzc5IEw2Ny4zMDM5LDQ1LjYwNTkgQzY3LjMwMzksNDEuNjg2OSA2Ny4zMTg5LDM4LjI0MzkgNjcuMzQ2OSwzNS4zNzA5IEM2Ny4zNjY5LDMzLjM5MTkgNjcuMzc5OSwzMS41MjY5IDY3LjM4NTksMjkuODAwOSBMNzAuNjYwOSwzMi40MTQ5IEM3MC42NTg5LDM0LjYwMDkgNzAuNjQzOSwzNy4wNTA5IDcwLjYxNzksMzkuNzA5OSBMNzAuNjE3OSwzOS43MDk5IFogTTY2LjI5OTksMjcuNTM4OSBMNjYuMjk5OSwyNy44MTc5IEw2Ni4yOTk5LDI3LjUyOTkgTDUyLjAxOTksMjcuNTI5OSBDNTIuMDQ4OSwyOS44ODc5IDUyLjA4NDksMzIuNDI1OSA1Mi4xMjc5LDM1LjE0MzkgQzUyLjE3MDksMzcuODYxOSA1Mi4xOTI5LDQxLjUyMTkgNTIuMTkyOSw0Ni4xMjM5IEM1Mi4xOTI5LDQ4Ljc2OTkgNTIuMTg1OSw1MS4zMzU5IDUyLjE3MDksNTMuODIzOSBDNTIuMTU2OSw1Ni4zMTE5IDUyLjE0OTksNTguNjc3OSA1Mi4xNDk5LDYwLjkyMDkgQzUyLjE0OTksNjMuNzEwOSA1MS43ODI5LDY1Ljk1MzkgNTEuMDQ5OSw2Ny42NTA5IEM1MC4zMTU5LDY5LjM0NzkgNDkuMjMwOSw3MC43NTY5IDQ3Ljc5MTksNzEuODc4OSBDNDYuNDQwOSw3Mi45MTM5IDQ0Ljg1ODksNzMuNjY4OSA0My4wNDY5LDc0LjE0MzkgQzQxLjIzNDksNzQuNjE4OSAzOS4xMjA5LDc0Ljk5OTkgMzYuNzA0OSw3NS4yODY5IEwzOS4zMzY5LDg2LjU4OTkgQzM5LjY3OTksODYuNTU4OSA0MC4wMTA5LDg2LjUyMDkgNDAuMzQ2OSw4Ni40ODQ5IEM0MC4wNjY5LDg2LjUxNDkgMzkuNzkxOSw4Ni41NDY5IDM5LjUwNjksODYuNTczOSBDMzkuNDU0OSw4Ni41ODU5IDM5LjQwMzksODYuNTk0OSAzOS4zNTM5LDg2LjYwMDkgTDQ0LjIzMDksOTEuMzU3OSBDNDguOTE4OSw5MC45MjU5IDUzLjUwOTksODkuNjkyOSA1Ni44ODg5LDg4LjQ3MDkgQzYwLjI2ODksODcuMjQ3OSA2My4wNTA5LDg1LjY3MzkgNjUuMjM2OSw4My43NDY5IEM2Ny40MjI5LDgxLjgxOTkgNjkuMDQwOSw3OS41MDM5IDcwLjA4OTksNzYuODAwOSBDNzEuMTM5OSw3NC4wOTY5IDcxLjY2NDksNzAuOTc2OSA3MS42NjQ5LDY3LjQzODkgTDcxLjY2NDksNTcuODE4OSBMNzEuNjY0OSw0OS45NjY5IEM3MS42NjQ5LDQ2LjAyNjkgNzEuNjc5OSw0Mi42MTA5IDcxLjcwNzksMzkuNzIwOSBDNzEuNzM2OSwzNi44Mjk5IDcxLjc1MDksMzQuMjE5OSA3MS43NTA5LDMxLjg5MDkgTDY2LjI5OTksMjcuNTM4OSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=&quot;);"></div>
            <p class="brief">科技产品不光是只有数据和规格，Engadget以消费性电子产品评测见长，入手前不妨看一看。</p>
          </div>
        </div>
      </div> <a class="jk-button jk-button-is-block" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
            打开即刻APP，浏览更多主题
              </a></div>
  </div>
</template>

<script>
import $ from 'webpack-zepto'
import {getLastTimeStr} from '../lib/utils.js'
import topicLink from '../components/topic-link.vue'
import jkButton from '../components/jk-button.vue'
import hotComments from '../components/hot-comments.vue'

export default {
  data () {
    return {
      showMenu: false,
      selectItem: 2,
      messageItem: {},
      comments: [],
      noData: false,
      currentData: [],
      no_read_len: 0
    }
  },
  computed: {
  },
  mounted () {
    this.getForSharePage()
    this.getListHotComments()
  },
  methods: {
    getForSharePage () {
      let params = this.$route.params.id
      $.get('https://app.jike.ruguoapp.com/1.0/messages/getForSharePage?id=' + params, (data) => {
        this.scroll = true
        if (data) {
          this.messageItem = data
          console.log(this.messageItem)
        }
      })
    },
    getListHotComments () {
      let params = this.$route.params.id
      $.get('https://app.jike.ruguoapp.com/1.0/messageComments/listHotComments?minLikes=1&messageId=' + params, (d) => {
        this.scroll = true
        if (d && d.data) {
          d.data.forEach(this.mergeComments)
        }
      })
    },
    mergeComments (comment) {
      this.comments.push(comment)
    },
    getMessageDetail () {
      let messageId = this.$route.params.id
      $.get('https://app.jike.ruguoapp.com/1.0/messages/showDetail' + messageId, (d) => {
        this.scroll = true
        if (d && d.data) {
          d.data.forEach(this.mergeTopics)
        }
      })
    },
    getListSimiLarTopics () {
      let params = $.param(this.searchKey)
      $.get('https://app.jike.ruguoapp.com/1.0/topics/listSimilarTopics?' + params, (d) => {
        this.scroll = true
        if (d && d.data) {
          d.data.forEach(this.mergeTopics)
        }
      })
    },
    getTopicRecommendations () {
      $.get('https://app.jike.ruguoapp.com/1.0/topicRecommendations/get', (d) => {
        this.scroll = true
        if (d && d.data) {
          d.data.forEach(this.mergeTopics)
        }
      })
    },
    getLastTimeStr (date, friendly) {
      return getLastTimeStr(date, friendly)
    }
  },
  components: {
    topicLink,
    jkButton,
    hotComments
  }
}
</script>
