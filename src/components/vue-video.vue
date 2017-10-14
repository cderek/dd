<template>
  <div class="fullscreen">
    <video v-if:video controls :poster="current.thumb" @ended.prevent="switchToNext" @mousemove="showThumbs">
      <source v-for='(type, src) in current.video' :src="src" :type="type"> HTML5 Video seems to be not supported in your browser.
    </video>
  </div>
  <ul class="popover" v-show="showThumbnails">
    <li v-for='video in videos' v-show='$index !== currentIndex'>
      <a :href="firstSource(video.video)" @click.prevent="setCurrent($index)">
      <img :src="video.thumb" alt="" />
    </a>
    </li>
  </ul>
  <div v-show='loader'>
    <div class="loader">
      <div class="loader__inner" :class="{'loader__inner--active': loader}"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import $ from 'webpack-zepto'

function debounce (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

var vm = new Vue({
  props: ['videoItem'],
  data: {
    videos: [{
      thumb: 'https://media-meta.ruguoapp.com/3d226472910c7fb5420a39412e853821.jpg?imageView2/0/w/800/h/800',
      video: {
        'video/mp4': 'http://demosthenes.info/assets/videos/glacier.mp4'
      }
    }],
    currentIndex: 0,
    timeout: null,
    showThumbnails: false,
    forceShow: false,
    loader: false
  },
  mounted () {
    this.getVideoData()
  },
  computed: {
    current: function () {
      return this.videos[this.currentIndex]
    }
  },
  methods: {
    getVideoData () {
      let messageId = this.videoItem.id
      $.get('https://app.jike.ruguoapp.com/1.0/misc/getMediaMeta?message=' + messageId, (d) => {
        if (d && d.data) {
          this.videoItem['video_datum'] = d.data
        }
      })
    },
    firstSource: function (obj) {
      return obj['video/mp4']
    },
    setCurrent: function (index) {
      this.currentIndex = index
    },
    switchToNext: function () {
      this.currentIndex++
      if (this.currentIndex === this.videos.length) {
        this.currentIndex = 0
      }
    },
    showThumbs: function () {
      this.showThumbnails = true
      this.hideThumbs()
    },
    hideThumbs: debounce(function () {
      vm.showThumbnails = false
    }, 1000)
  },

  watch: {
    current: function (newVal, oldVal) {
      this.$els.video.load()
      this.loader = true
      setTimeout(function () {
        this.$els.video.play()
        this.loader = false
      }.bind(this), 1000)
    }
  },

  ready: function () {
    this.$els.video.play()
  }
})
</script>
<style lang="scss">
.fullscreen {
  width: 100%;
  height: 100%;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
.popover {
  width: 100%;
  background-color: rgba(black, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 100;

  display: flex;

  box-shadow: 0 2px 10px rgba(black, .3);

  li {
    display: inline-block;
    height: 100%;
    flex: 1 0 16%;

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}

.loader {
  position: absolute;
  background-color: rgba(black, 0.6);
  z-index: 200;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__inner {
    background: yellow;
    width: 0%;
    height: 1%;
    margin: 45% 0 0;

    &--active {
      width: 100%;
      transition: width 1s;
    }
  }
}

</style>
