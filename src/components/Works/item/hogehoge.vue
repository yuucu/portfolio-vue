<template lang="pug">

  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://hogehoge.netlify.com/" target="_blank" )
          img( src="@/assets/hogehoge.png" class="image" )
        div.content
          div.tags
            span
              a( href="https://jp.vuejs.org/index.html" target="_blank" )
                img( src="@/assets/vue.png" )
            span
              a( href="https://ja.nuxtjs.org/" target="_blank" )
                img( src="@/assets/nuxt.png" )
            span
              a( href="https://vuetifyjs.com/ja/" target="_blank" )
                img( src="@/assets/vuetify.png" )
            span
              a( href="https://www.chartjs.org/" target="_blank" )
                img( src="@/assets/chartjs.png" )
          a( href="https://hogehoge.netlify.com/" target="_blank" )
            p.title-text.has-text-grey-dark hogehoge.io
          p.description Nuxt.jsで開発したgithub APIを用いたサービス。検索キーワードがgithubソースコード内でどれくらい使用されているかがわかる！
          div.link
            a( href="https://github.com/satokibi/hogehoge.io" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://hogehoge.netlify.com/" target="_blank" )
              i( class="fas fa-external-link-alt" )

</template>