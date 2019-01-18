<template lang="pug">
  .home
    <terminal/>
    p サイト更新中...
    p 前サイト
    a( href="https://satokibi.github.io/2/" ) https://satokibi.github.io/2/
</template>

<script>
import terminal from '@/components/Home/home_terminal.vue';

export default {
  name: 'home',
  components: {
    terminal,
  }
}
</script>

<style lang="scss" scoped>
</style>