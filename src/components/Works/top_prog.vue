<template lang="pug">
  .card.is-horizontal.columns
    .card-content.column
      .media
        .media-left
          figure.image.is-64x64
            a( href="https://github.com/yuucu" target="_blank" )
              .
                <img src="https://avatars0.githubusercontent.com/u/39527561?s=460&amp;v=4">
        .media-content
          p.title.is-4
            |<span class="underline">Web</span>
            |<br><a href="https://github.com/yuucu" target="_blank">GitHub</a>
      .content.has-text-left
        p.
          <span class="tag is-light">Html</span>
          <span class="tag is-info">Css</span>
          <span class="tag is-dark">Javascript</span>
          <span class="tag is-primary">Vue.js</span>
          <span class="tag is-primary">Nuxt.js</span>
          <span class="tag is-danger">Ruby on Rails</span>
        p Web開発では、フロント側ではVue.js、バックエンドではRailsを主に使っています。
          |<br> このサイトもVue.jsによって作成されていて、Vue RouterやVuexも使用しています(一部はRailsで作成したAPI)。
          |<br> 最近はNuxt.jsの学習もしています。 <br>
          a(href="https://my-first-nuxt-app.netlify.com" target="_blank") https://my-first-nuxt-app.netlify.com
        footer.card-footer
          time( datetime="2018") 2018~

</template>



<style lang="scss" scoped>
.tag {
  margin: 2px 4px;
}

footer {
  border: 0;
}

.underline {
  text-decoration: underline;
}
</style>
