<template lang="pug">

.about
  .columns.is-centered
    .column.is-4.is-8-mobile.is-offset-2-mobile
      .card.has-text-left.has-background-light
        header.card-header.has-background-dark
          p.card-header-title.has-text-light Profile
        .card-content

          .level.prof-line.is-mobile
            .level-left
              .
                <span class="icon has-text-dark">
                  <i class="fas fa-male"></i>
                </span>
              p.prof-title name
              p.bar | 
            .level-right
              p.prof-content satokibi

          .level.prof-line.is-mobile
            .level-left
              .
                <span class="icon has-text-success">
                  <i class="far fa-clock"></i>
                </span>
              p.prof-title age
              p.bar | 
            .level-right
              p.prof-content 23

          .level.prof-line.is-mobile
            .level-left
              .
                <span class="icon has-text-warning">
                  <i class="fas fa-birthday-cake"></i>
                </span>
              p.prof-title birth
              p.bar | 
            .level-right
              p.prof-content 1995.10.05

          .level.prof-line.is-mobile
            .level-left
              .
                <span class="icon has-text-info">
                  <i class="fas fa-mars"></i>
                </span>
              p.prof-title gender
              p.bar | 
            .level-right
              p.prof-content male

          .level.prof-line.is-mobile
            .level-left
              .
                <span class="icon has-text-danger">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
              p.prof-title locate
              p.bar | 
            .level-right
              p.prof-content Fukuoka.JP

      .columns
        .column.is-10.is-offset-2
          .card.has-text-left.has-background-light.me-card
            header.card-header.has-background-dark
              p.card-header-title.has-text-light Me
            .card-content

              .has-background-white.me-btn.me-mail
                .level.is-mobile
                  .level-left
                    span.icon.has-text-dark
                      i.far.fa-envelope
                    p.me-title mail
                  .level-right
                    .
                      <span class="icon">
                        <i class="fas fa-xs fa-external-link-alt"></i>
                      </span>

              .me-btn.me-github
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

              .me-btn.me-qiita
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

    .column.is-4.is-8-mobile.is-offset-2-mobile
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
              p.is-inline-block <span><img src="../assets/pug.png"></span> pug
              p.is-inline-block <span><img src="../assets/emmet.svg"></span> emmet

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
              p.is-inline-block <span><img src="../assets/bootstrap.png"></span> Bootstrap
              p.is-inline-block <span><img src="../assets/bulma.png"></span> Bulma

          div.has-text-centered.skill-content
            div.skill-title.is-inline-block
              .
                <span class="icon" style="color: #ead44d;">
                  <i class="fab fa-js-square"></i>
                </span>
              p.is-inline JavaScript
            div.skills
              p.is-inline-block <span><img src="../assets/jquery.png"></span> jQuery
              p.is-inline-block <span><img src="../assets/vue.png"></span> Vue.js

          div.has-text-centered.skill-content
            div.skill-title.is-inline-block
              .
                <img src="https://img.icons8.com/color/50/000000/python.png">
              p.is-inline Python
            div.skills
              p.is-inline-block <span><img src="../assets/scikit-learn.png" style="width: 32px; top: 2px;"></span> scikit-learn
              p.is-inline-block <span><img src="../assets/caffe.png"></span> Caffe

          div.has-text-centered.skill-content
            div.skill-title.is-inline-block
              .
                <img src="../assets/java.png">
              p.is-inline Java
            div.skills
              p.is-inline-block <span><img src="../assets/play.png"></span> PlayFramework

          div.has-text-centered.skill-content.skill-content-last
            div.skill-title.is-inline-block
              .
                <span class="icon" style="color: ;">
                  <i class="fas fa-wrench"></i>
                </span>
              p.is-inline Tools
            div.skills
              p.is-inline-block <span><img src="../assets/vim.png"></span> vim
              p.is-inline-block <span><img src="https://img.icons8.com/color/48/000000/git.png"></span> Git
              p.is-inline-block <span><img src="../assets/docker.png"></span> Docker
              p.is-inline-block <span><img src="../assets/tmux.png"></span> tmux
              p.is-inline-block <span><img src="../assets/unity.png"></span> Unity

</template>

<style lang="scss" scoped>
* {
  // border: 1px solid #ccc;
}

.card {
  margin-top: 24px;
  margin-bottom: 24px;

  .prof-line {
    margin: 0;
    margin-bottom: 12px;

    .prof-title {
      margin-left: 20px;
    }

    .bar {
      margin: 0 10px;
      font-size: 12px;
    }

    .prof-content {
      margin-right: 8px;
    }

  }

  .me-mail {
    border: 1px solid #ddd;
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

  .me-btn {
    padding: 8px 16px;
    margin-bottom: 8px;

    .me-title {
      margin-left: 16px;
    }
  }

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

}
</style>
