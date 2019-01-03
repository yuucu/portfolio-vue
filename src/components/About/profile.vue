<template lang="pug">
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
</template>


<style lang="scss">

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

</style>
