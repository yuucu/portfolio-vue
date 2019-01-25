<template lang="pug">
  .home
    <terminal/>
    <winners/>

    p サイト更新中...
    p 前サイト
    a( href="https://satokibi.github.io/2/" ) https://satokibi.github.io/2/
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