<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Default Setup</span>
        <span>（</span>
        <span>默认设置</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/01-default.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
   data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    }
}
</script>

<style scoped>
  .swiper-slide {
    width: 250px;
    height: 400px;
    background-color: gray;
  }
</style>