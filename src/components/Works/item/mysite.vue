<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://satokibi.netlify.com/" target="_blank" )
          img( src="@/assets/mysite.png" class="image")
        div.content
          div.tags
            span
              a( href="https://jp.vuejs.org/index.html" target="_blank" )
                img( src="@/assets/vue.png" )
            span
              a( href="https://bulma.io/" target="_blank" )
                img( src="@/assets/bulma.png" )
            span
              a( href="https://rubyonrails.org/" target="_blank" )
                img( src="@/assets/rails.png" )
          a( href="https://satokibi.netlify.com/" target="_blank" )
            p.title-text.has-text-grey-dark ポートフォリオ(このサイト)
          p.description Vue.jsで初めて作ったサイト。お気に入りは、モバイル用メニューボタンのアニメーション。
          div.link
            a( href="https://github.com/satokibi/github.io-src" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://satokibi.netlify.com/" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>