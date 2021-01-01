<template lang="pug">
  .card.has-text-left.has-background-light.me-card
    header.card-header.has-background-dark
      p.card-header-title.has-text-light Me
    .card-content

      .me-btn.me-blog( v-on:click="open_blog" )
        .level.is-mobile
          .level-left
            span.icon.has-text-light
              i.fas.fa-laptop
            p.me-title.has-text-light Blog
          .level-right
            .
              <span class="icon has-text-light">
                <i class="fas fa-xs fa-external-link-alt"></i>
              </span>

      .has-background-white.me-btn.me-mail( v-on:click="mail_show = !mail_show" )
        .level.is-mobile
          .level-left
            span.icon.has-text-dark
              i.far.fa-envelope
            p.me-title email
          .level-right
            .
              <span class="icon">
                <i class="fas fa-angle-double-down"></i>
              </span>

      transition( name="slide-fade" )
        p.mail( v-if="mail_show" ) yuucu00@gmail.com


      .me-btn.me-github( v-on:click="open_github" )
        .level.is-mobile
          .level-left
            span.icon.has-text-light
              i.fab.fa-github
            p.me-title.has-text-light GitHub
          .level-right
            .
              <span class="icon has-text-light">
                <i class="fas fa-xs fa-external-link-alt"></i>
              </span>

      .me-btn.me-qiita( v-on:click="open_qiita" )
        .level.is-mobile
          .level-left
            .
              <span class="fa-stack qiita-icon" style="color:#55c501;">
                <i class="fa fa-square fa-stack-1x"></i>
                <i class="fa fa-search fa-stack-1x fa-inverse fa-1x"></i>
              </span>
            p.me-title.has-text-light Qiita
          .level-right
            .
              <span class="icon has-text-light">
                <i class="fas fa-xs fa-external-link-alt"></i>
              </span>

      .me-btn.me-zenn( v-on:click="open_zenn" )
        .level.is-mobile
          .level-left
            span.icon.has-text-light
              i.fas.fa-search
            p.me-title.has-text-light Zenn
          .level-right
            .
              <span class="icon has-text-light">
                <i class="fas fa-xs fa-external-link-alt"></i>
              </span>
</template>

<script>
export default {
  data: function() {
    return {
      mail_show: false
    }
  },
  methods: {
    open_blog: function() {
      window.open( 'https://www.yuucu-tech.com', '_blank' );
    },
    open_github: function() {
      window.open( 'https://github.com/yuucu', '_blank' );
    },
    open_qiita: function() {
      window.open( 'https://qiita.com/yuucu', '_blank' );
    },
    open_zenn: function() {
      window.open( 'https://zenn.dev/yuucu', '_blank' );
    },
  }
}
</script>
<style lang="scss" scoped>

.me-mail {
  border: 1px solid #ddd;
}

.me-blog {
  background-color: #fc4268;
}

.me-github {
  background-color: #24292f;
}

.me-qiita {
  background-color: #55c501;
  .qiita-icon {
    margin: -4px;
  }
}

.me-zenn {
  background-color: #3ea9ff;
}

.me-btn {
  text-align: center;
  padding: 8px 16px;
  margin: auto;
  margin-bottom: 8px;
  max-width: 240px;

  .me-title {
    margin-left: 16px;
  }


  cursor: pointer;

  $time: 0.3s;
  /*-webkit-transition: $time;
  -moz-transition: $time;
  -o-transition: $time;
  -ms-transition: $time;*/
  transition: $time;

  &:hover {
    opacity: 0.5;
  }

}

.mail {
  max-width: 240px;
  margin: auto;
  margin-top: 8px;
  margin-bottom: 24px;
}

/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
