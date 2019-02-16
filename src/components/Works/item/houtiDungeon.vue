<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://unityroom.com/games/houti_dungeon" target="_blank" )
          img( src="@/assets/houti.gif" class="image")
        div.content
          div.tags
            span
              a( href="https://unity3d.com/jp" target="_blank" )
                img( src="@/assets/unity.png" )
          a( href="https://unityroom.com/games/houti_dungeon" target="_blank" )
            p.title-text.has-text-grey-dark 放置ダンジョン
          p.description Unity(C#)で開発した2D放置ダンジョンゲーム。アイテムや装備などのメニュー画面の実装はすごく時間がかかったけど楽しかった思い出。敵キャラ１対１体のHP調整や難易度調整がすごく大変で、未だ未完成...
          div.link
            a( href="https://github.com/satokibi/houti_dungeon" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://unityroom.com/games/houti_dungeon" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>