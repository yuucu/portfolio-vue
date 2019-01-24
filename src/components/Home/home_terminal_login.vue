<template lang="pug">
  .login_input
    div( v-if="getUserFormFlag" )
      | login:&nbsp;
      input( autofocus maxlength="50" autocomplete="off" id="terminal-input" v-model="v_username" class="input_username"
      v-on:keydown.enter="inputUsername")
    div( v-else )
      | password:&nbsp;
      input( autofocus type="password" maxlength="32"
      autocomplete="off"
      id="terminal-input" v-model="v_password" class="input_password"
      v-on:keydown.enter="login")
</template>

<script>

export default {
  name: 'login_terminal_login',

  computed: {
    getUserFormFlag: function () {
      return this.$store.getters.getUserFormFlag;
    },
    v_username: {
      get() {
        return this.$store.getters.getUserName;
      },
      set(str) {
        this.$store.commit('updateUserName', str)
      }
    },
    v_password: {
      get() {
        return this.$store.getters.getPassword;
      },
      set(str) {
        this.$store.commit('updatePassword', str)
      }
    },
  },

  methods: {
    inputUsername: function() {
      this.$store.commit('setPassForm')
      this.$store.commit('pushHistory', 'login: ' + this.$store.state.username);
    },
    login: function() {
      this.$store.commit('setUserForm');
      this.$store.commit('pushHistory', 'password: ' + '*'.repeat( this.$store.state.password.length ) );

      if( this.$store.state.username === 'root' && this.$store.state.password === 'helloworld') {
        this.$emit( 'push', 'Login correct' );
        this.$store.commit('pushHistory', 'Login correct');
        this.$store.commit('login');
        this.$store.commit('updateUserName', '');
        this.$store.commit('updatePassword', '');
      } else {
        this.$store.commit('pushHistory', 'Login incorrect');
        this.$store.commit('pushHistory', '　');
        this.$store.commit('updateUserName', '');
        this.$store.commit('updatePassword', '');
      }

    },
  }
}
</script>

<style lang="scss" scoped>
  input {
    background-color: black;
    color: white;
    border: none;
    font-family: 'Source Code Pro', monospace;
    font-size: 12px;
    width: 364px;

    &:focus {
      outline: 0;
    }

    &.input_username  {
      width: 340px;
    }
    &.input_password  {
      width: 308px;
    }
  }
</style>