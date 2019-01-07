<template lang="pug">
  .works
    .columns.is-multiline
      .column.is-12
        h2.page-title Works
      .column.is-10-mobile.is-offset-1-mobile.is-10-tablet.is-offset-1-tablet
        .work
          top-prog
        .work
          top-games
        .work
          top-sound

</template>

<script>
import topSound from '@/components/Works/top_sound.vue';
import topGames from '@/components/Works/top_games.vue';
import topProg from '@/components/Works/top_prog.vue';

export default {
  name: 'works',
  components: {
    topSound,
    topGames,
    topProg,
  },
}
</script>


<style lang="scss" scoped>

.work {
  margin-bottom: 56px;
}

</style>
