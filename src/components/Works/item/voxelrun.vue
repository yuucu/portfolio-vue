<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://unityroom.com/games/voxelrun" target="_blank" )
          img( src="@/assets/voxelrun.gif" class="image")
        div.content
          div.tags
            span
              a( href="https://unity3d.com/jp" target="_blank" )
                img( src="@/assets/unity.png" )
          a( href="https://unityroom.com/games/voxelrun" target="_blank" )
            p.title-text.has-text-grey-dark VoxelRun
          p.description Unity(C#)で開発したシンプルなランゲーム。キャラやアイテムはMagica voxelやBlenderで作成。オリジナルのキャラなのですごく愛着が湧いています！
          div.link
            a( href="https://github.com/satokibi/VoxelRun" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://unityroom.com/games/voxelrun" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>