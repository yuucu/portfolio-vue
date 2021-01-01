<template lang="pug">
  .columns.is-multiline#items

    web( v-bind:web="blog", v-if="category_web" )
      span
        a( href="https://reactjs.org/" target="_blank" )
          img( src="@/assets/react.svg" )
      span
        a( href="https://www.gatsbyjs.com/" target="_blank" )
          img( src="@/assets/gatsbyjs-icon.svg" )
      span
        img( src="@/assets/aws.svg" )

    web( v-bind:web="todo", v-if="category_web" )
      span
        a( href="https://developers.line.biz/ja/" target="_blank" )
          img( src="@/assets/line.png" )
      span
        a( href="https://rubyonrails.org/" target="_blank" )
          img( src="@/assets/rails.svg" )

    web( v-bind:web="hogehoge", v-if="category_web" )
      span
        a( href="https://jp.vuejs.org/index.html" target="_blank" )
          img( src="@/assets/vue.svg" )
      span
        a( href="https://ja.nuxtjs.org/" target="_blank" )
          img( src="@/assets/nuxt.svg" )
      span
        a( href="https://vuetifyjs.com/ja/" target="_blank" )
          img( src="@/assets/vuetify.png" )
      span
        a( href="https://www.chartjs.org/" target="_blank" )
          img( src="@/assets/chartjs.png" )

    web( v-bind:web="mysite", v-if="category_web" )
      span
        a( href="https://jp.vuejs.org/index.html" target="_blank" )
          img( src="@/assets/vue.svg" )
      span
        a( href="https://bulma.io/" target="_blank" )
          img( src="@/assets/bulma.png" )
      span
        a( href="https://rubyonrails.org/" target="_blank" )
          img( src="@/assets/rails.svg" )

    web( v-bind:web="mysite2", v-if="category_web" )
      span( class="icon" style="color: #de4b26;" )
        i( class="fab fa-html5" )
      span( class="icon" style="color: #2196f3;" )
        i( class="fab fa-css3" )
      span( class="icon" style="color: #ead44d;" )
        i( class="fab fa-js-square" )

    web( v-bind:web="miqchar", v-if="category_web" )
      span( class="icon" style="color: #de4b26;" )
        i( class="fab fa-html5" )
      span( class="icon" style="color: #2196f3;" )
        i( class="fab fa-css3" )
      span( class="icon" style="color: #ead44d;" )
        i( class="fab fa-js-square" )
      span
        a( href="https://getbootstrap.com/" target="_blank" )
          img( src="@/assets/bootstrap.png" )

    web( v-bind:web="rettiwt", v-if="category_web" )
      span( class="icon" style="color: #de4b26;" )
        i( class="fab fa-html5" )
      span( class="icon" style="color: #2196f3;" )
        i( class="fab fa-css3" )
      span( class="icon" style="color: #ead44d;" )
        i( class="fab fa-js-square" )
      span
        a( href="https://getbootstrap.com/" target="_blank" )
          img( src="@/assets/bootstrap.png" )

    game( v-for="game in games", :key="game.title", v-bind:game="game", v-if="category_game" )
    music( v-for="song in songs", :key="song.title", v-bind:song="song", v-if="category_music" )

</template>

<script>
import web from '@/components/Works/item/web.vue';
import game from '@/components/Works/item/game.vue';
import music from '@/components/Works/item/music.vue';

export default {
  components: {
    web,
    music,
    game,
  },
  data() {
    return {
      category_web: true,
      category_game: true,
      category_music: true,
      blog: {
        'title': 'ブログ',
        'description': 'Gatsby.jsで作成したブログサイトです。S3 + CloudFront + Route53 + ACM 構成で立てています。 ',
        'img': require('@/assets/blog.png'),
        'url': 'https://www.yuucu-tech.com',
        'github_url': 'https://github.com/yuucu/yuucu-tech',
        'date': '2020/12',
      },
      todo: {
        'title': 'ToDo管理bot',
        'description': 'Line Messaging API + Railsで開発したToDo管理bot。是非、友達登録して使ってみてください...!',
        'img': require('@/assets/todo.png'),
        'url': 'https://yuucu.github.io/line-todo-app/',
        'github_url': 'https://github.com/yuucu/line-todo-app',
        'date': '2019',
      },
      hogehoge: {
        'title': 'hogehoge.io',
        'description': 'Nuxt.jsで開発したgithub APIを用いたサービス。検索キーワードがgithub全体でどれくらい使用されているかがわかります',
        'img': require('@/assets/hogehoge.png'),
        'url': 'https://hogehoge.netlify.com/',
        'github_url': 'https://github.com/yuucu/hogehoge.io',
        'date': '2019',
      },
      mysite: {
        'title': 'ポートフォリオ(このサイト)',
        'description': 'Vue.jsで初めて作ったサイト。お気に入りは、モバイル用メニューボタンのアニメーションです。',
        'img': require('@/assets/mysite.png'),
        'url': 'https://yuucu.netlify.com/',
        'github_url': 'https://github.com/yuucu/portfolio-vue',
        'date': '2018',
      },
      mysite2: {
        'title': 'yuucu.github.io',
        'description': '初代ポートフォリオサイト。html, cssフルスクラッチ(T_T)!',
        'img': require('@/assets/mysite_2.png'),
        'url': 'https://yuucu.github.io/mysite-old/',
        'github_url': 'https://github.com/yuucu/mysite-old/',
        'date': '2018',
      },
      miqchar: {
        'title': 'miq char',
        'description': 'アイドルWEARのみくてんさんのみく文字フォントを画像化できるようにしたサイト。',
        'img': require('@/assets/miqchar.png'),
        'url': 'https://yuucu.github.io/miq_char/',
        'github_url': 'https://github.com/yuucu/miq_char',
        'date': '2018',
      },
      rettiwt: {
        'title': 'rettiwt',
        'description': 'いろいろ文字変換できるサイト。leet文字変換や、文字を回転したり、変な記号をたくさんつけたり、、、',
        'img': require('@/assets/rettiwt.png'),
        'url': 'https://yuucu.github.io/rettiwt/',
        'github_url': 'https://github.com/yuucu/rettiwt',
        'date': '2018',
      },

      games: [
        {
          'title': 'Voxel Shooter',
          'description': 'シューティングゲーム。この時期4年生で研究が忙しくなり手付かずに、、',
          'img': require('@/assets/shooter.gif'),
          'url': 'https://unityroom.com/games/voxel_shooter',
          'github_url': 'https://github.com/yuucu/VoxelShooter',
          'date': '2019',
        },
        {
          'title': 'VoxelRun',
          'description': 'Unity(C#)で開発したシンプルなランゲーム。キャラやアイテムはMagica voxelやBlenderで作成。オリジナルのキャラなのですごく愛着が湧いています！',
          'img': require('@/assets/voxelrun.gif'),
          'url': 'https://unityroom.com/games/voxelrun',
          'github_url': 'https://github.com/yuucu/VoxelRun',
          'date': '2018',
        },
        {
          'title': 'balls',
          'description': 'Unity(C#)で開発したパズルゲーム。スマホでみたあのゲーム...',
          'img': require('@/assets/balls.gif'),
          'url': 'https://unityroom.com/games/balls',
          'github_url': 'https://github.com/yuucu/balls',
          'date': '2019',
        },
        {
          'title': '放置ダンジョン',
          'description': 'Unity(C#)で開発した2D放置ダンジョンゲーム。アイテムや装備などのメニュー画面の実装はすごく時間がかかったけど楽しかった思い出。敵キャラ１対１体のHP調整や難易度調整がすごく大変で、未だ未完成...',
          'img': require('@/assets/houti.gif'),
          'url': 'https://unityroom.com/games/houti_dungeon',
          'github_url': 'https://github.com/yuucu/houti_dungeon',
          'date': '2019',
        },
      ],

      songs: [
        {
          'title': '如月アテンション',
          'description': '如月アテンションのチップチューンカバー。ピコピコ音が可愛くてお気に入り！',
          'url': 'https://soundcloud.com/sugar_gt/chiptume',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166448447&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          'date': '2015',
        },
        {
          'title': '恋愛サーキュレーション',
          'description': '恋愛サーキュレーションのremix。',
          'url': 'https://soundcloud.com/sugar_gt/remix',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173882451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          'date': '2015',
        },
        {
          'title': 'U&I',
          'description': 'U&Iのチップチューンカバー。',
          'url': 'https://soundcloud.com/sugar_gt/ui-2',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172124482&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          'date': '2015',
        },
        {
          'title': 'irony',
          'description': 'ironyカバー。',
          'url': 'https://soundcloud.com/sugar_gt/irony-techno',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166644706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          'date': '2015',
        },
        {
          'title': 'ふでペン～ボールペン～',
          'description': 'ふでペン～ボールペン～のカバー。平沢唯生誕祭に向けて作成したもの！',
          'url': 'https://soundcloud.com/sugar_gt/chiptune',
          'iframe_src': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178849049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          'date': '2015',
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
        .right {
          width: 50%;
          font-size: 12px;
          text-align: left;
        }
        .left {
          width: 50%;
          text-align: right;
          i {
            margin-right: 8px;
          }
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
