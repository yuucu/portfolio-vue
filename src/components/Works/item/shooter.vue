<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://unityroom.com/games/voxel_shooter" target="_blank" )
          img( src="@/assets/shooter.gif" class="image")
        div.content
          div.tags
            span
              a( href="https://unity3d.com/jp" target="_blank" )
                img( src="@/assets/unity.png" )
          a( href="https://unityroom.com/games/voxel_shooter" target="_blank" )
            p.title-text.has-text-grey-dark Voxel Shooter
          p.description シューティングゲーム。この時期4年生で研究が忙しくなり手付かずに、、
          div.link
            a( href="https://github.com/satokibi/VoxelShooter" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://unityroom.com/games/voxel_shooter" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>