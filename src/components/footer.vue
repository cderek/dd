<template>
  <section id='foot_guide'>
    <section @click="gotoAddress('/recommend/feed')" class="guide_item">
      <svg class="fa-icon icon_style" width="57px" height="67px" viewBox="0 0 57 67" version="1.1">
          <defs>
              <rect id="path-1" x="152" y="12" width="57" height="67" rx="8"></rect>
          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" transform="translate(-152.000000, -12.000000)">
                  <g id="Rectangle">
                      <use fill="#979797" fill-rule="evenodd" xlink:href="#path-1"></use>
                      <rect stroke="#979797" stroke-width="1" x="152.5" y="12.5" width="56" height="66" rx="8"></rect>
                  </g>
                  <path d="M160.5,25 L201,25" id="Line-2" stroke="#FFFFFF" stroke-width="6" stroke-linecap="square"></path>
                  <path d="M160,41 L200,41" id="Line-3" stroke="#FFFFFF" stroke-width="6" stroke-linecap="square"></path>
                  <path d="M160.5,57 L181,57" id="Line-4" stroke="#FFFFFF" stroke-width="6" stroke-linecap="square"></path>
              </g>
          </g>
      </svg>
      <span>推荐</span>
    </section>
    <section @click="gotoAddress('/hot')" class="guide_item">
      <svg class="icon_style fa-icon" role="presentation" width="14.857142857142858" height="16" viewBox="0 0 1664 1792">
        <use :xlink:href="'#follow'"></use>
          <symbol viewBox="0 0 40 40" id="follow">
            <defs>
              <path id="discover-regular.8ef537f_a" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
              <mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff">
                <use xlink:href="#discover-regular.8ef537f_a"></use>
              </mask>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <use stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)" xlink:href="#discover-regular.8ef537f_a"></use>
              <path stroke="#666" stroke-width="2" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
              <path fill="#666" d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path>
            </g>
          </symbol>
      </svg>
      <span>关注</span>
    </section>
    <section @click="gotoAddress('/discover')" class="guide_item">
      <svg class="icon_style fa-icon" width="63px" height="64px" viewBox="0 0 63 64">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" transform="translate(-97.000000, -11.000000)" stroke="#979797" stroke-width="4">
                  <path d="M119,53 C107.954305,53 99,44.045695 99,33 C99,21.954305 107.954305,13 119,13 C130.045695,13 139,21.954305 139,33 C139,44.045695 130.045695,53 119,53 Z M132.056024,48.8838107 L134.943976,46.1161893 L157.943976,70.1161893 L155.056024,72.8838107 L132.056024,48.8838107 Z" id="Combined-Shape"></path>
              </g>
          </g>
      </svg>
      <span>发现</span>
    </section>
    <section @click="gotoAddress('/profile')" class="guide_item">
      <svg class="icon_style">
        <use :xlink:href="'#profile'"></use>
        <symbol viewBox="0 0 38 38" id="profile">
          <defs>
            <path id="profile-regular.c151d62_a" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path>
            <mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_a"></use>
            </mask>
            <path id="profile-regular.c151d62_b" d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
            <mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
            <use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"></use>
            <use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"></use>
          </g>
        </symbol>
      </svg>
      <span>我的</span>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin';

#foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(auto, 1.6rem);
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
}

.guide_item {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  .icon_style {
    @include wh(.5rem, .5rem);
    margin-bottom: .2rem;
    margin-top: .3rem;
    fill: #666;
  }
  span {
    @include sc(.35rem, #666);
  }
}
</style>
