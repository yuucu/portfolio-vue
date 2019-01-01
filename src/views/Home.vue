<template lang="pug">
  .home
    p サイト更新中...
    p 前サイト
    a( href="https://satokibi.github.io/2/" ) https://satokibi.github.io/2/
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
