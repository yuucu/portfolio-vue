<template lang="pug">
  .card.is-horizontal.columns
    .card-content.column.is-2by5
      .media
        .media-left
          figure.image.is-64x64
            a( href="https://soundcloud.com/sugar_gt" target="_blank" )
              .
                <img src="https://i1.sndcdn.com/avatars-000103310981-icyax3-t500x500.jpg" alt="Placeholder image">
        .media-content
          p.title.is-4 
            |<span class="underline">Songs</span>
            |<br><a href="https://soundcloud.com/sugar_gt" target="_blank">SoundCloud</a>
      .content.has-text-left
        p.
          <span class="tag is-dark">FL studio</span>
        p チップチューンカバーしたり、remixしたりしていました。
          // | <br> ピコピコした音楽が好きです。
        footer.card-footer
          time( datetime="2014") 2014~2015年
    .card-image.column.is-3by5
      .columns.is-mobile.is-multiline
        .column.is-12
          .
            <iframe width="100%" height="124" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166448447&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        .column.is-12
          .
            <iframe width="100%" height="124" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173882451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

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
