<template lang="pug">
- var link = 'https://soundcloud.com/sugar_gt/irony-techno'
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        .
          <iframe width="100%" height="124" scrolling="no" frameborder="no" allow="autoplay" v-bind:src="song.iframe_src"></iframe>
        div.content
          div.tags
            span
              a( href="https://www.image-line.com/flstudio/" target="_blank" )
                img( src="@/assets/flstudio.png" )
          a( v-bind:href="song.link" target="_blank" )
            p.title-text.has-text-grey-dark {{ song.title }}
          p.description {{ song.description }}
          div.link
            a( v-bind:href="song.link" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['song']
}
</script>