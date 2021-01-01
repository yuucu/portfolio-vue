<template lang="pug">
  .card.has-text-left.has-background-light
    header.card-header.has-background-dark
      p.card-header-title.has-text-light SkillSet
    .card-content

      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon">
              <img v-bind:src="get_img('pc.svg')">
            </span>
          p.is-inline Languages
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('go.svg')"></span> Golang
          p.is-inline-block <span><img v-bind:src="get_img('rust.svg')"></span> Rust
          p.is-inline-block <span><img v-bind:src="get_img('javascript.svg')"></span> JavaScript
          p.is-inline-block <span><img v-bind:src="get_img('typescript.svg')"></span> TypeScript
          p.is-inline-block <span><img v-bind:src="get_img('java.svg')"></span> Java
          p.is-inline-block <span><img v-bind:src="get_img('kotlin-icon.svg')"></span> Kotlin
          p.is-inline-block <span><img v-bind:src="get_img('scala.svg')"></span> Scala
          p.is-inline-block <span><img v-bind:src="get_img('python.svg')"></span> Python
          p.is-inline-block <span><img v-bind:src="get_img('ruby.svg')"></span> Ruby


      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon">
              <img v-bind:src="get_img('web.svg')" style="width: 20px;">
            </span>
          p.is-inline Web
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('jquery.svg')"></span> jQuery
          p.is-inline-block <span><img v-bind:src="get_img('vue.svg')"></span> Vue.js
          p.is-inline-block <span><img v-bind:src="get_img('nuxt.svg')"></span> Nuxt.js
          p.is-inline-block <span><img v-bind:src="get_img('react.svg')"></span> React
          p.is-inline-block <span><img v-bind:src="get_img('gatsbyjs-icon.svg')"></span> Gatsby.js
          p.is-inline-block <span><img v-bind:src="get_img('springio-icon.svg')"></span> SpringBoot
          p.is-inline-block <span><img v-bind:src="get_img('rails.svg')"></span> Ruby on Rails




      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon">
              <img v-bind:src="get_img('other.svg')" style="width: 20px;">
            </span>
          p.is-inline Other
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('aws.svg')"></span> AWS
          p.is-inline-block <span><img v-bind:src="get_img('docker.svg')"></span> Docker
          p.is-inline-block <span><img v-bind:src="get_img('jenkins.svg')"></span> Jenkins
          p.is-inline-block <span><img v-bind:src="get_img('git.svg')"></span> Git
          p.is-inline-block <span><img v-bind:src="get_img('github.svg')"></span> GitHub Actions
          p.is-inline-block <span><img v-bind:src="get_img('grpc.svg')"></span> gRPC
          p.is-inline-block <span><img v-bind:src="get_img('unity.svg')"></span> Unity


      div.has-text-centered.skill-content
        div.skill-title.is-inline-block
          .
            <span class="icon">
              <img v-bind:src="get_img('tool.svg')" style="width: 20px;">
            </span>
          p.is-inline Tools
        div.skills
          p.is-inline-block <span><img v-bind:src="get_img('vim.svg')"></span> vim
          p.is-inline-block <span><img v-bind:src="get_img('tmux.svg')"></span> tmux
          p.is-inline-block <span><img v-bind:src="get_img('manjaro.svg')"></span> Manjaro


      div.has-text-centered.skill-content.skill-content-last
        div.skill-title.is-inline-block
          .
            <span class="icon">
              <img v-bind:src="get_img('speak.svg')" style="width: 20px;">
            </span>
          p.is-inline Natural Language Processing
        div.skills
          p.is-inline-block <span></span> Mecab
          p.is-inline-block <span></span> BERT
          p.is-inline-block <span><img v-bind:src="get_img('scikit.svg')"></span> scikit-learn

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
        margin: 2px 12px;
        font-size: 12px;
        max-width: 100%;
        word-wrap: break-word;
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
