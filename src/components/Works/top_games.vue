<template lang="pug">

  .card.is-horizontal.columns
    //.card-image.column.is-3by5
    swiper( v-bind:options="swiperOption" ).card-image.column.is-3by5
      swiper-slide.slide-1
        figure.image
          .
            <img src="https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/5719/shooter.gif" alt="Shooter">
      swiper-slide.slide-2
        figure.image
          .
            <img src="https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/5717/a.gif">
      swiper-slide.slide-3
        figure.image
          .
            <img alt="Voxel Run" src="https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/2309/a.gif">
      .
        <div class="swiper-pagination swiper-pagination-blue" slot="pagination"></div>
    .card-content.column.is-2by5
      .media
        .media-left
          figure.image.is-64x64
            a( href="https://unityroom.com/users/satokibi" target="_blank" )
              img( src="//pbs.twimg.com/profile_images/945518810299109376/FsoFEOeG.jpg" )
        .media-content
          p.title.is-4
            | <span class="underline">Games</span>
            | <br><a href="https://unityroom.com/users/satokibi" target="_blank">UnityRoom</a>
      .content.has-text-left
        p.
          <span class="tag is-dark">Unity</span>
          <span class="tag is-light">C#</span>
          <span class="tag is-info">MagicaVoxel</span>
          <span class="tag is-danger">blendar</span>
        p Unityで作成したゲームです。
          |<br> Google Chorome推奨。
        p 作るのが好きなため大きなライブラリなどは使わずに
          | できるだけ自分のコードで実装しながら制作しています。
        footer.card-footer
          time( datetime="2016") 2016年6月 ~ 2018年1月


</template>

<script>
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
          effect: 'fade',
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    }
}
</script>

<style lang="scss" scoped>

.tag {
  margin: 0 4px;
}

footer {
  border: 0;
}

.underline {
  text-decoration: underline;
}

img {
  width: 100%;
}

</style>
