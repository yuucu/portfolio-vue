<template lang="pug">
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
</template>

<style lang="scss">

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
</style>
