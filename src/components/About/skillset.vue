<template lang="pug">
  .card.has-text-left.has-background-light
    header.card-header.has-background-dark
      p.card-header-title.has-text-light SkillSet
    .card-content 
      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon" style="color: #de4b26;">
              <i class="fab fa-html5"></i>
            </span>
          p.is-inline HTML
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('pug.png')"></span> pug
          p.is-inline-block <span><img v-bind:src="get_img('emmet.png')"></span> emmet

      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon" style="color: #2196f3;">
              <i class="fab fa-css3"></i>
            </span>
          p.is-inline CSS
        div.skills
          p.is-inline-block
            span.icon.scss-icon
              i.fab.fa-sass
            | Scss
          p.is-inline-block <span><img v-bind:src="get_img('bootstrap.png')"></span> Bootstrap
          p.is-inline-block <span><img v-bind:src="get_img('bulma.png')"></span> Bulma

      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon" style="color: #ead44d;">
              <i class="fab fa-js-square"></i>
            </span>
          p.is-inline JavaScript
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('jquery.png')"></span> jQuery
          p.is-inline-block <span><img v-bind:src="get_img('vue.png')"></span> Vue.js

      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <img src="https://img.icons8.com/color/50/000000/python.png">
          p.is-inline Python
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('scikit-learn.png')" style="width: 32px; top: 2px;"></span> scikit-learn
          p.is-inline-block <span><img v-bind:src="get_img('caffe.png')"></span> Caffe

      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <img v-bind:src="get_img('java.png')">
          p.is-inline Java
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('play.png')"></span> PlayFramework

      div.has-text-centered.skill-content.skill-content-last
        div.skill-title.is-inline-block
          .
            <span class="icon" style="color: ;">
              <i class="fas fa-wrench"></i>
            </span>
          p.is-inline Tools
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('vim.png')"></span> vim
          p.is-inline-block <span><img src="https://img.icons8.com/color/48/000000/git.png"></span> Git
          p.is-inline-block <span><img v-bind:src="get_img('docker.png')"></span> Docker
          p.is-inline-block <span><img v-bind:src="get_img('tmux.png')"></span> tmux
          p.is-inline-block <span><img v-bind:src="get_img('unity.png')"></span> Unity
</template>

<script>

export default {
  methods: {
    get_img: function( img ) {
      return require('../../assets/' + img); 
    }
  }
}
</script>

<style lang="scss" scoped>

  .skill-title {
    padding-right: 4px;

    img {
      position: relative;
      top: 2px;
      width: 16px;
    }
    p {
      margin-left: 4px;
    }
    border-bottom: 1px solid #aaa;
  }

  .skill-content {
    margin-bottom: 28px;
    .skills {
      margin-top: 8px;
      p {
        margin: 0 12px;
        font-size: 12px;
      }
      img {
        width: 16px;
        position: relative;
        top: 4px;
      }

      .scss-icon {
        color: #cf649a;
      }

    }

  }

  .skill-content-last {
    margin-bottom: 0px;
  }

</style>
