<template lang="pug">

.about
  .columns.is-centered
    .column.is-4.is-10-mobile.is-offset-1-mobile

      profile
      me

    .column.is-4.is-10-mobile.is-offset-1-mobile
      skillset

</template>

<script>
import profile from '@/components/About/profile.vue'
import me from '@/components/About/me.vue'
import skillset from '@/components/About/skillset.vue'

export default {
  name: 'about',
  components: {
    profile,
    me,
    skillset,
  }
}
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid #ccc;
}

.card {
  margin-top: 24px;
  margin-bottom: 24px;

}
</style>
