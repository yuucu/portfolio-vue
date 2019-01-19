<template lang="pug">
  .login_input
    div( v-if="login_state_username" )
      | login:&nbsp;
      input( autofocus maxlength="50" id="terminal-input" v-model="username" class="input_username"
      v-on:keydown.enter="inputUsername")
    div( v-else )
      | password:&nbsp;
      input( autofocus type="password" maxlength="32"
      id="terminal-input" v-model="password" class="input_password"
      v-on:keydown.enter="login")
</template>

<script>

export default {
  name: 'login_terminal_login',
  data: function() {
    return {
      username: "",
      password: "",
      login_state_username: true,
    }
  },
  methods: {
    inputUsername: function() {
      this.login_state_username = false;
      this.$emit( 'push', 'login: ' + this.username );
    },
    login: function() {
      this.login_state_username = true;
      this.$emit( 'push', 'password: ' + '*'.repeat( this.password.length ) );

      if( this.username === 'a' && this.password === 'a') {
        this.$emit( 'push', 'Login correct' );
        this.$emit( 'loginCorrect' );
        this.username = '';
        this.password = '';
      } else {
        this.$emit( 'push', 'Login incorrect' );
        this.$emit( 'push', '　' );
        this.username = '';
        this.password = '';
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