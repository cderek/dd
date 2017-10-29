<template>
  <div class="page-wrap" transition-mode="out-in">
    <div class="related-personal-updates" transition="fade">
      <div v-if="popularPersonalUpdates" class="personal-updates" transition="fade">
        <h1>动态精选</h1>
        <ul class="pu-list">
          <li class="pu-item" v-for="item in popularPersonalUpdates" :key="item.id">
            <div class="pu-item-header">
              <div class="user-avatar pu-item-avatar is-round is-inline">
                <div class="user-avatar-content" :style="{ 'background-image': 'url(' + item.users[0].profileImageUrl + ')' }">
                 </div>
              </div>
              <h3 class="pu-item-username">{{item.users[0].screenName}}</h3>
              <a class="btn-follow pu-follow-btn" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
                关注
              </a>
            </div>
            <div class="pu-item-body">
              <p class="pu-item-bio">{{item.subtitle}}</p>
              <p class="content-text pu-item-content">
                <span>{{item.repost.content}}</span>
              </p>
              <div class="pu-message-wrap">
                <router-link :to="{name:'message',params:{id:item.repost.message.id}}">
                  <div class="pu-message-image" v-if="item.repost.message.pictureUrls && item.repost.message.pictureUrls.length>0" :style="{ 'background-image': 'url(' + item.repost.message.pictureUrls[0].thumbnailUrl + ')' }"></div>
                  <div class="pu-message-image" v-if="item.repost.message.video" :style="{ 'background-image': 'url(' + item.repost.message.video.thumbnailUrl + ')' }"></div>
                  <p class="pu-message-preview">{{item.repost.message.content}}</p>
                  <p class="pu-message-title">{{item.repost.message.title}}</p>
                </router-link>
              </div>
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
import {popularPersonalUpdate} from '@/service/api'
import nvFoot from '@/components/footer.vue'

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
      popularPersonalUpdate().then(res => {
        this.scroll = true
        if (res && res.data) {
          this.popularPersonalUpdates = res.data
        }
      })
    }
  },
  components: {
    nvFoot
  }
}
</script>
