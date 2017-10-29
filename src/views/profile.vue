<style lang="scss">
.list-ul {
    padding-top: .3rem;
    border-top: 1px solid #d4d4d4;
    overflow: hidden;
}
.list-ul .item {
    margin: 0 0.32rem;
    display: block;
    font-size: 30px;
    font-weight: 200;
    padding: .5rem 0;
    text-align: left;
    text-indent: 1px;
    line-height: 30px;
    color: #666;
    font-weight: 500;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 30px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}
.list-li {
  background: #fff;
  border-bottom: 1px solid #999;
}
.login-no {
  background: #fff;
  padding: .6rem;
  margin-top: .3rem;
}
.login-no .info {
  display:inline-block;
  color: #666;
  font-size: 30px;
  line-height: 30px;
}
.login-no .info p {
  padding-bottom: .2rem;
}
.login-no .info span {
  color: #999;
  font-size: 22px;
}
</style>
<template>
  <div class="page-wrap" transition-mode="out-in">
    <nv-head page-type="profile" :fix-head="true" :show-menu="false" :need-add="true"></nv-head>
    <ul class="login-no" v-if="!currentData.loginname">
      <div class="avatar">
        <svg width="93px" height="83px" viewBox="0 0 93 83">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-295.000000, -57.000000)">
              <path d="M312.56139,138.612995 C302.447062,130.267652 296,117.636722 296,103.5 C296,78.3710439 316.371044,58 341.5,58 C366.628956,58 387,78.3710439 387,103.5 C387,117.636722 380.552938,130.267652 370.43861,138.612995 C364.627055,128.675425 353.843092,122 341.5,122 C329.156908,122 318.372945,128.675425 312.56139,138.612995 Z" id="Combined-Shape" stroke="#9E9E9E" fill="#E6E4E4"></path>
              <circle id="Oval-2" stroke="#979797" fill="#FFFFFF" cx="342" cy="95" r="14"></circle>
            </g>
          </g>
        </svg>
        <div class="info">
          <p>点击登录账号</p>
          <span>登录后同步数据，确保安全</span>
        </div>
      </div>
    </ul>
    <div class="login-yes" v-if="currentData.loginname" @click="goUser">
      <div class="avertar"><img v-if="currentData.avatar_url" :src="currentData.avatar_url"></div>
      <div class="info">
        <p v-if="currentData.loginname" v-text="currentData.loginname"></p>
      </div>
    </div>
    <section class="list-ul">
      <div class="list-li">
        <router-link class="icon-quanbu iconfont item" :to="{'name':'hot'}">我关注的主题</router-link>
      </div>
      <div class="list-li">
        <router-link class="icon-quanbu iconfont item" :to="{'name':'hot'}">我的收藏</router-link>
      </div>
      <div class="list-li">
        <router-link class="icon-hao iconfont item" :to="{'name':'hot'}">我的通知</router-link>
      </div>
      <div class="list-li">
        <router-link class="icon-fenxiang iconfont item" :to="{'name':'hot'}">小秘书</router-link>
      </div>
      <div class="list-li">
        <router-link class="icon-wenda iconfont item" :to="{'name':'hot'}">创建主题</router-link>
        <span class="icon-right iconfont"></span>
      </div>
    </section>
    <nv-foot></nv-foot>
  </div>
</template>
<script>
import nvHead from '@/components/header.vue'
import nvFoot from '@/components/footer.vue'

export default {
  data () {
    return {
      user: {'avatar_url': '@/assets/images/user_unauth.png'},
      currentData: [],
      selectItem: 1
    }
  },
  mounted () {
  },
  methods: {
  },
  watch: {
  },
  components: {
    nvHead,
    nvFoot
  }
}
</script>
