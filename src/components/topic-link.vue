<template>
  <div class="topic-link">
    <img :src="topicItem.topicThumbnailUrl" alt="" class="topic-image">
    <div class="topic-info">
      <h1 class="topic-title">{{topicItem.title}}</h1>
      <p class="topic-subscribers">{{topicItem.collectCount}} 人关注</p>
    </div>
    <jk-button ref="head" :fix-head="true" :need-add="true">
    </jk-button>
  </div>
</template>

<script>
import jkButton from '../components/jk-button.vue'
export default {
  props: ['topicItem'],
  components: {
    jkButton
  }
}
</script>

<style lang="scss">
.topic-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: #fff;
  overflow: hidden;
  height: 1.6rem;
  padding: 0 0.4rem;
  border-bottom: 1px solid #dbdbdb;
}

.topic-image {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  height: 1.066667rem;
  width: 1.066667rem;
  border-radius: 0.106667rem;
  margin-right: 0.266667rem;
}

.topic-info {
  line-height: 1.25;
  margin-right: 0.266667rem;
  overflow: hidden;
}

[data-dpr="1"] .topic-info {
  max-height: 40px;
}

[data-dpr="2"] .topic-info {
  max-height: 80px;
}

[data-dpr="3"] .topic-info {
  max-height: 120px;
}

.topic-title {
  width: 100%;
  color: #404040;
}

[data-dpr="1"] .topic-title {
  font-size: 16px;
  line-height: 20px;
}

[data-dpr="2"] .topic-title {
  font-size: 32px;
  line-height: 40px;
}

[data-dpr="3"] .topic-title {
  font-size: 48px;
  line-height: 60px;
}

.topic-subscribers {
  color: #808080;
}

[data-dpr="1"] .topic-subscribers {
  font-size: 12px;
  line-height: 17px;
  margin-top: 2px;
}

[data-dpr="2"] .topic-subscribers {
  font-size: 24px;
  line-height: 34px;
  margin-top: 4px;
}

[data-dpr="3"] .topic-subscribers {
  font-size: 36px;
  line-height: 51px;
  margin-top: 6px;
}

.jk-button {
  margin-left: auto !important;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
}
</style>
