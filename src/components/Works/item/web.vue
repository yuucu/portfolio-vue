<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( v-bind:href="web.url" target="_blank" )
          img( v-bind:src="web.img" class="image")
        div.content
          div.tags
            slot
          a( v-bind:href="web.url" target="_blank" )
            p.title-text.has-text-grey-dark {{ web.title }}
          p.description {{ web.description }}
          div.link
            a( v-bind:href="web.github_url" target="_blank" )
              i( class="fab fa-github" )
            a( v-bind:href="web.url" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>

<script>
export default {
  props: ['web']
}
</script>