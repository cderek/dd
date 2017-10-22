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
        <div class="topic-card" v-for="item in recommendTopics" :key="item.id">
          <div class="topic-card-header">
            <div class="topic-info">
              <h1 class="title">{{item.content}}</h1>
              <p class="subscribers">{{item.subscribersCount}} 人关注</p>
            </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a></div>
          <div class="topic-card-body">
            <div class="pic" lazy="loaded" :style="{ 'background-image': 'url(' + item.pictureUrl + ')' }"></div>
            <p class="brief">
              {{item.briefIntro}}
            </p>
          </div>
        </div>
        </div>
        <a class="jk-button jk-button-is-block" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
            打开即刻APP，浏览更多主题
        </a>
      </div>
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
      recommendTopics: [],
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
    this.getTopicRecommendations()
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
          this.recommendTopics = d.data
        }
      })
    },
    mergeTopics (topic) {
      this.topics.push(topic)
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
