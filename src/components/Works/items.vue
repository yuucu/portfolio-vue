<template lang="pug">
  .columns.is-multiline#items

    todo( v-if="category_web" )
    hogehoge( v-if="category_web" )
    mysite( v-if="category_web" )
    mysite2( v-if="category_web" )
    miqchar( v-if="category_web" )
    rettiwt( v-if="category_web" )
    shooter( v-if="category_game" )
    voxelrun( v-if="category_game" )
    balls( v-if="category_game" )
    houti( v-if="category_game" )


    music( v-for="song in songs" v-bind:song="song", v-if="category_music" )

</template>

<script>
import hogehoge from '@/components/Works/item/hogehoge.vue';
import mysite from '@/components/Works/item/mysite.vue';
import mysite2 from '@/components/Works/item/mysite2.vue';
import rettiwt from '@/components/Works/item/rettiwt.vue';
import miqchar from '@/components/Works/item/miqchar.vue';
import todo from '@/components/Works/item/todo.vue';
import voxelrun from '@/components/Works/item/voxelrun.vue';
import houti from '@/components/Works/item/houtiDungeon.vue';
import balls from '@/components/Works/item/balls.vue';
import shooter from '@/components/Works/item/shooter.vue';


import music from '@/components/Works/item/music.vue';

export default {
  components: {
    hogehoge,
    mysite,
    mysite2,
    rettiwt,
    miqchar,
    todo,
    voxelrun,
    houti,
    balls,
    shooter,
    music,
  },
  data() {
    return {
      category_web: true,
      category_game: true,
      category_music: true,

      songs: [
        {
          'title': '如月アテンション',
          'description': '如月アテンションのチップチューンカバー。ピコピコ音が可愛くてお気に入り！',
          'link': 'https://soundcloud.com/sugar_gt/chiptume',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166448447&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        {
          'title': '恋愛サーキュレーション',
          'description': '恋愛サーキュレーションのremix。',
          'link': 'https://soundcloud.com/sugar_gt/remix',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173882451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        {
          'title': 'U&I',
          'description': 'U&Iのチップチューンカバー。',
          'link': 'https://soundcloud.com/sugar_gt/ui-2',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172124482&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        {
          'title': 'irony',
          'description': 'ironyカバー。',
          'link': 'https://soundcloud.com/sugar_gt/irony-techno',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166644706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        {
          'title': 'ふでペン～ボールペン～',
          'description': 'ふでペン～ボールペン～のカバー。平沢唯生誕祭に向けて作成したもの！',
          'link': 'https://soundcloud.com/sugar_gt/chiptune',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178849049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },

      ]


    }
  }
}
</script>


<style lang="scss">

#items {

  .card {
    padding: 16px;
    .content {
      .tags {
        margin-top: 8px;
        margin-bottom: 0;
        span {
          font-size: 12px;
          margin-right: 4px;
        }
        img {
          width: 16px;
        }
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        &.title-text {
          text-decoration: underline;
          margin-bottom: 4px;
        }
        &.description {
          text-align: left;
          font-size: 12px;
        }
      }
      .link {
        text-align: right;
        i {
          margin-right: 8px;
        }
      }

    }
    .image {
      border: 1px solid #aaa;
      width: 100%;
    }
  }
}

</style>
