<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( v-bind:href="game.url" target="_blank" )
          img( v-bind:src="game.img" class="image")
        div.content
          div.tags
            span
              a( href="https://unity3d.com/jp" target="_blank" )
                img( src="@/assets/unity.png" )
          a( v-bind:href="game.url" target="_blank" )
            p.title-text.has-text-grey-dark {{ game.title }}
          p.description {{ game.description }}
          div.link
            a( v-bind:href="game.github_url" target="_blank" )
              i( class="fab fa-github" )
            a( v-bind:href="game.url" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>

<script>
export default {
  props: ['game']
}
</script>