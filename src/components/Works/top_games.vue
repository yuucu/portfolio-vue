<template lang="pug">

  .card.is-horizontal.columns
    .card-image.column.is-3by5
      a( href="https://unityroom.com/games/voxelrun" target="_blank" )
        .
          <img alt="Voxel Run" src="https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/2309/a.gif">
    .card-content.column.is-2by5
      .media
        .media-left
          figure.image.is-64x64
            a( href="https://unityroom.com/users/satokibi" target="_blank" )
              img( src="//pbs.twimg.com/profile_images/945518810299109376/FsoFEOeG.jpg" )
        .media-content
          p.title.is-4 
            | <span class="underline">Games</span>
            |<br><a href="https://unityroom.com/users/satokibi" target="_blank">UnityRoom</a>
      .content.has-text-left 
        p.
          <span class="tag is-dark">Unity</span>
          <span class="tag is-light">C#</span>
        p Unityで作成したゲームです。
        p Windowsでのみ動作します。(Macではフォントが崩れます)
        p 作るのが好きなため大きなライブラリなどは使わずに
          | できるだけ自分のコードで実装しながら制作しています。
        p キャラやアイテムの制作には<a href="https://ephtracy.github.io" target="_blank">MagicaVoxel</a>や
          | <a href="https://www.blender.org" target="_blank">blendar</a>を使用しています。
        footer.card-footer
          time( datetime="2016") 2016年6月 ~ 2018年1月


</template>

<style lang="scss" scoped>

.tag {
  margin: 0 4px;
}

footer {
  border: 0;
}

.underline {
  text-decoration: underline;
}
</style>
