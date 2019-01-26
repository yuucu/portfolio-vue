<template lang="pug">
  transition( name="fade" )
    div( v-if="isShow" )
      .columns.is-centered
        .column.is-4.is-8-mobile.is-offset-2-mobile
          transition( name="form" )
            div( v-if="formFlag == false" )
              p.is-size-5.has-text-left.has-text-weight-bold.form-title register as challenge users
              div.card
                div.field.has-text-left.transition-child-1
                  label.label.has-text-weight-light name
                  div.control.has-icons-left.has-icons-right
                    input.input( v-model="name" type="text" v-bind:class='{ "is-danger": errors != null }' )
                    span.icon.is-small.is-left
                      i.fas.fa-user
                    span.icon.is-small.is-right( v-if="errors != null" )
                      i.fas.fa-exclamation-triangle
                  p.help.is-danger(v-if="errors != null") {{ errors.name[0] }}
                div.field.has-text-left.transition-child-2
                  label.label.has-text-weight-light comment
                  div.control
                    input.input( v-model="comment" type="text" )
                div.field.transition-child-3
                  div.control.has-text-centered
                    button.button.is-info(v-on:click="postMethod()") Submit
      h1.is-size-3.winners-title - Winners -
      div.columns.is-centered.winners
        div.column.is-10-mobile.is-offset-1-mobile.is-10-tablet.is-offset-1-tablet
          table.table( style="width:100%;")
            thead
              tr
                th
                th date
                th name
                th comment
            tbody
              tr( v-for="i in winners.length" )
                th {{ winners.length - i + 1 }}
                td {{ winners[winners.length - i].created_at.split('T')[0] }}
                td {{ winners[winners.length - i].name }}
                td {{ winners[winners.length - i].comment }}

                //
                  [ ] - 送信した後、formをけす( cookieとかで一応保存? )
                  [ ] - paging
</template>


<script>

import axios from 'axios';

export default {
  name: 'winners',
  data: function () {
    return {
      winners: [],
      errors: null,
      name: "",
      comment: "",
      test_flag: true,
      url: 'http://localhost:3000/winners'
    }
  },
  computed: {
    isShow: function () {
      return this.$store.getters.getWinnersShowFlag;
    },
    formFlag: function () {
      return this.$store.getters.getFormSendFlag;
    },
  },
  created: function () {
    axios
      //.get('https://nazonazo-lv1.herokuapp.com/winners')
      .get(this.url)
      .then(response => {
        if( response.data.status === 200 ) {
          this.winners = response.data.data;
        }
      });
  },
  methods: {
    postMethod() {
      if( confirm("name: " + this.name + "\n" + "comment: " + this.comment + "\nこの内容でよろしいですか?") == false ) {
        return
      }
      axios({
        method: 'POST',
        url: this.url,
        data: {'winner': {
          'name': this.name,
          'comment': this.comment
          }
        }
      }).then(response => {
        if( response.data.status === 409 ) {
          this.errors = response.data.errors;
        } else if( response.data.status === 201 ) {
          this.winners = response.data.data;
          this.errors = null;
          this.$store.commit('formSend');
          this.$toast.open({
                  message: 'It was registered correctly!',
                  type: 'is-success',
                  closeOnClick: true,
                  duration: 4000,
          })
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-title {
    margin-bottom: 2px;
  }
  .card {
    padding: 16px 24px;
  }

  .winners-title {
    margin-top: 24px;
    margin-bottom: 4px;
  }
  .winners {
    margin-bottom: 24px;
  }

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

  .form-enter-active,
  .form-leave-active {
    transition: all 1s;
    transition-delay: 1.5s;
    .card {
      transition: all .3s;
      transition-delay: 1s;
    }
    .form-title {
      transition: opacity 1s;
    }

    @for $i from 1 through 3 {
      $enter-delay: 200ms;
      .transition-child-#{$i} {
        transition: all .3s;
        transition-delay: #{120ms * $i + $enter-delay};
      }
    }

  }

  .form-leave {
    opacity: 1;
    .transition-child-1, .transition-child-2, .transition-child-3 {
      opacity: 1;
    }
  }
  .form-leave-to {
    transform: translateX(3000px);
    opacity: 0;
    .transition-child-1, .transition-child-2, .transition-child-3 {
      opacity: 0;
      transform: translateX(16px);
    }
    .card {
      transform: scale(0.2,0.2);
      border: 1px solid #444;
    }
    .form-title {
      opacity: 0;
    }
  }
</style>