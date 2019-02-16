<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://satokibi.github.io/rettiwt/" target="_blank" )
          img( src="@/assets/rettiwt.png" class="image")
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
          a( href="https://satokibi.github.io/rettiwt/" target="_blank" )
            p.title-text.has-text-grey-dark rettiwt
          p.description いろいろ文字変換できるサイト。leet文字変換や、文字を回転したり、変な記号をたくさんつけたり、、、
          div.link
            a( href="https://github.com/satokibi/rettiwt" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://satokibi.github.io/rettiwt/" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>