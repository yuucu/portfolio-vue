<template lang="pug">
  transition( name="fade" )
    div( v-if="isShow" )
      .columns.is-centered
        .column.is-4.is-8-mobile.is-offset-2-mobile
          div.field.has-text-left
            label.label username
            div.control.has-icons-left.has-icons-right
              input.input.is-danger( type="text" )
              span.icon.is-small.is-left
                i.fas.fa-user
              span.icon.is-small.is-right
                i.fas.fa-exclamation-triangle
            p.help.is-danger This username is available
          div.field.has-text-left
            label.label comment
            div.control
              input.input( type="text" )
          div.field
            div.control.has-text-centered
              button.button.is-info Submit

</template>

<script>

export default {
  name: 'winners',
  computed: {
    isShow: function () {
      return this.$store.getters.getWinnersShowFlag;
    },
  },
}
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(-16px);
  }
  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateY(16px);
  }
</style>