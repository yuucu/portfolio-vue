<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://satokibi.github.io/miq_char/" target="_blank" )
          img( src="@/assets/miqchar.png" class="image")
        div.content
          div.tags
            span( class="icon" style="color: #de4b26;" )
              i( class="fab fa-html5" )
            span( class="icon" style="color: #2196f3;" )
              i( class="fab fa-css3" )
            span( class="icon" style="color: #ead44d;" )
              i( class="fab fa-js-square" )
            span
              a( href="https://getbootstrap.com/" target="_blank" )
                img( src="@/assets/bootstrap.png" )
          p.title-text miq char
          p.description アイドルWEARのみくてんさんのみく文字フォントを画像化できるようにしたサイト。
          div.link
            a( href="https://github.com/satokibi/miq_char" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://satokibi.github.io/miq_char/" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>