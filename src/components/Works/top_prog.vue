<template lang="pug">
  .card.is-horizontal.columns
    .card-content.column.is-2by5
      .media
        .media-left
          figure.image.is-64x64
            a( href="https://github.com/satokibi" target="_blank" )
              .
                <img src="https://avatars0.githubusercontent.com/u/39527561?s=460&amp;v=4">
        .media-content
          p.title.is-4 
            |<span class="underline">Programming</span>
            |<br><a href="https://github.com/satokibi" target="_blank">GitHub</a>
      .content.has-text-left
        //
          p.
            <span class="tag is-dark">FL studio</span>
          p ピコピコした音楽が好きでチップチューンのような音楽を作曲していました。
            | <br> 名前のリンクから他の曲も聞けるので是非！
        footer.card-footer
          time( datetime="2018") 2018~
    .card-image.column.is-3by5
      a( href="https://unityroom.com/games/voxelrun" target="_blank" )
        //.
          <img alt="Voxel Run" src="https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/2309/a.gif">
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
