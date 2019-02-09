<template lang="pug">
  .columns.is-multiline#items
    hogehoge
    mysite
    mysite2
    miqchar
    rettiwt

</template>


<script>
import hogehoge from '@/components/Works/item/hogehoge.vue';
import mysite from '@/components/Works/item/mysite.vue';
import mysite2 from '@/components/Works/item/mysite2.vue';
import rettiwt from '@/components/Works/item/rettiwt.vue';
import miqchar from '@/components/Works/item/miqchar.vue';

export default {
  components: {
    hogehoge,
    mysite,
    mysite2,
    rettiwt,
    miqchar,
  },
}
</script>


<style lang="scss">

#items {

  .card {
    padding: 16px;
    .content {
      .tags {
        margin-top: 8px;
        margin-bottom: 0;
        span {
          font-size: 12px;
          margin-right: 4px;
        }
        img {
          width: 16px;
        }
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        &.title-text {
          text-decoration: underline;
          margin-bottom: 4px;
        }
        &.description {
          text-align: left;
          font-size: 12px;
        }
      }
      .link {
        text-align: right;
        i {
          margin-right: 8px;
        }
      }

    }
    .image {
      border: 1px solid #aaa;

    }
  }
}

</style>
