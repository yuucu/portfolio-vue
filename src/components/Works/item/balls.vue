<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://unityroom.com/games/balls" target="_blank" )
          img( src="@/assets/balls.gif" class="image")
        div.content
          div.tags
            span
              a( href="https://unity3d.com/jp" target="_blank" )
                img( src="@/assets/unity.png" )
          a( href="https://unityroom.com/games/balls" target="_blank" )
            p.title-text.has-text-grey-dark balls
          p.description Unity(C#)で開発したパズルゲーム。スマホでみたあのゲーム...
          div.link
            a( href="https://github.com/satokibi/balls" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://unityroom.com/games/balls" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>