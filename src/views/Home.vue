<template lang="pug">
  .home
    <terminal/>
    <winners/>

</template>

<script>
import terminal from '@/components/Home/home_terminal.vue';
import winners from '@/components/Home/winners.vue';

export default {
  name: 'home',
  components: {
    terminal,
    winners
  }
}
</script>

<style lang="scss" scoped>
</style>