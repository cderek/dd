<template>
  <div class="page-wrap" transition-mode="out-in">
    <div class="related-topics recommend-feed" transition="fade">
      <h1>推荐主题</h1>
      <div class="topic-card" v-for="item in topics" :key="item.id">
        <div class="topic-card-header">
          <div class="topic-info">
            <h1 class="title">{{item.content}}</h1>
            <p class="subscribers">{{item.subscribersCount}} 人关注</p>
          </div> <a class="btn-follow jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
              关注
            </a>
        </div>
        <div class="topic-card-body">
          <div class="pic" lazy="loaded" :style="{ 'background-image': 'url(' + item.pictureUrl + ')' }"></div>
          <p class="brief">{{item.briefIntro}}</p>
        </div>
      </div>
    </div>
    <nv-foot></nv-foot>
  </div>
</template>
<script>
import {getLastTimeStr} from '../lib/utils.js'
import {topicRecommend} from '../service/api'
import topicLink from '../components/topic-link.vue'
import jkButton from '../components/jk-button.vue'
import nvFoot from '../components/footer.vue'

export default {
  data () {
    return {
      showMenu: false,
      selectItem: 2,
      messageItem: {},
      topics: [],
      noData: false,
      currentData: [],
      no_read_len: 0
    }
  },
  computed: {
  },
  mounted () {
    this.getTopicRecommendations()
  },
  methods: {
    getTopicRecommendations () {
      topicRecommend().then(res => {
        this.scroll = true
        if (res && res.data) {
          res.data.forEach(this.mergeTopics)
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
    nvFoot
  }
}
</script>
