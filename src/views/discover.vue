<template>
  <div class="message-wrap page-wrap" transition-mode="out-in">
    <div class="related-personal-updates" transition="fade">
      <div v-if="popularPersonalUpdates" class="personal-updates" transition="fade">
        <h1>动态精选</h1>
        <ul class="pu-list">
          <li class="pu-item" v-for="item in popularPersonalUpdates" :key="item.id">
            <div class="pu-item-header">
              <div class="user-avatar pu-item-avatar is-round is-inline">
                <div class="user-avatar-content" :style="{ 'background-image': 'url(' + item.repost.user.profileImageUrl + ')' }">
                 </div>
              </div>
              <h3 class="pu-item-username">{{item.repost.user.screenName}}</h3>
              <a class="btn-follow pu-follow-btn" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
                关注
              </a>
            </div>
            <div class="pu-item-body">
              <p class="pu-item-time">{{item.subtitle}}</p>
              <p class="content-text pu-item-content">
                <span>{{item.repost.content}}</span>
              </p>
              <a class="pu-item-like" href="//m.ruguoapp.com/messages/59e996feb9bb5b00164634b5">
                {{item.likeCount}}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <nv-foot></nv-foot>
    </div>
  </div>
</template>



<script>
import $ from 'webpack-zepto'
import {getLastTimeStr} from '../lib/utils.js'
import topicLink from '../components/topic-link.vue'
import jkButton from '../components/jk-button.vue'
import nvFoot from '../components/footer.vue'

export default {
  data () {
    return {
      showMenu: false,
      selectItem: 2,
      messageItem: {},
      popularPersonalUpdates: [],
      noData: false,
      currentData: [],
      no_read_len: 0
    }
  },
  computed: {
  },
  mounted () {
    this.getPopularPersonalUpdate()
  },
  methods: {
    getPopularPersonalUpdate () {
      $.post('https://app.jike.ruguoapp.com/1.0/personalUpdate/listPopular', (d) => {
        this.scroll = true
        if (d && d.data) {
          d.data.forEach(this.mergePersonalUpdates)
        }
      })
    },
    mergePersonalUpdates (personalUpdate) {
      this.popularPersonalUpdates.push(personalUpdate)
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
    nvFoot
  }
}
</script>
