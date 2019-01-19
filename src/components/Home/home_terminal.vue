<template lang="pug">
  .terminal( v-on:click="terminalFocus" )
    ul
      li( v-for=" (text, index) in history " )
        p {{ text }}
      li( v-if="login_flag" ) [~]#&nbsp;
        input( autofocus maxlength="50" id="terminal-input" v-model="current_line" v-on:keydown.enter="command")
      li( v-else )
        div( v-if="login_state_username" )
          | login:&nbsp;
          input( autofocus maxlength="50" id="terminal-input" v-model="username" class="input_username"
          v-on:keydown.enter="login")
        div( v-else )
          | password:&nbsp;
          input( autofocus type="password" maxlength="32"
          id="terminal-input" v-model="password" class="input_password"
          v-on:keydown.enter="login")
</template>

<script>

export default {
  name: 'home',
  data: function() {
    return {
      current_line: "",
      username: "",
      password: "",
      history: [],
      index: 0,
      interval: 500,
      login_flag: false,
      login_state_username: true,
      terminal_init_messages: [
        'Initializing ...',
        'site version 0.11 2019 Saturday 19 January 08:35 a.m. JST',
        window.navigator.language,
        window.navigator.userAgent,
      ],
      login_messages: [
        '　',
        'site ver 0.11',
        'Welcome',
        '　',
      ]
    }
  },
  created: function() {
    // setInterval(this.terminalInit , this.interval)
    this.terminalInit();
  },
  methods: {
    login: function() {
      if( this.login_state_username ) {
        this.login_state_username = false;
        this.history_push( 'login: ' + this.username );
      } else {
        this.login_state_username = true;
        this.history_push( 'password: ' + '*'.repeat( this.password.length ) );

        if( this.username === 'a' && this.password === 'a') {
          this.history_push( 'Login correct' );
          this.login_flag = true;
        } else {
          this.history_push( 'Login incorrect' );
          this.history_push( '　' );
          this.username = '';
          this.password = '';
        }

      }
    },
    command: function() {
      this.history_push( '[~]# ' + this.current_line );
      this.current_line = '';
    },
    terminalFocus: function() {
      document.getElementById('terminal-input').focus();
    },
    terminalInit: function() {
      this.history_push( this.terminal_init_messages[this.index] );
      this.current_line = '';
      this.interval = Math.random() * 100;
      this.index ++;
      if( this.index < this.terminal_init_messages.length ) {
        setTimeout( this.terminalInit , this.interval)
      } else {
        this.history = [];
        for( var i = 0; i < this.login_messages.length; i++ ) {
          this.history_push( this.login_messages[i] );
        }
      }
    },
    history_push: function( str ) {
      this.history.push( str );
      if( this.history.length > 14 ) {
        this.history = this.history.slice( -14 );
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

.terminal {
  font-family: 'Source Code Pro', monospace;
  overflow: hidden;
  width: 404px;
  height: 272px;
  margin: 0 auto;
  margin-top: 104px;
  margin-bottom: 200px;
  background-color: black;

  text-align: left;
  font-size: 12px;
  color: red;

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  ul {
    li {
      color: white;
      margin-left: 2px;
    }
  }

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
}
</style>