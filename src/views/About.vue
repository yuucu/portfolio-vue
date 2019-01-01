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
                    p.prof-title mail
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
                    p.prof-title.has-text-light GitHub
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
                    p.prof-title.has-text-light Qiita
                  .level-right
                    .
                      <span class="icon has-text-light">
                        <i class="fas fa-xs fa-external-link-alt"></i>
                      </span>

    .column.is-4.is-8-mobile.is-offset-2-mobile
      .card.has-text-left.has-background-light
        header.card-header.has-background-dark
          p.card-header-title.has-text-light SkillSet
        .card-content aiueo

        
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
  }


}
</style>
