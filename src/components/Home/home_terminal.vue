<template lang="pug">
  .terminal( v-on:click="terminalFocus" )
    ul
      li( v-for=" (text, index) in history " )
        p {{ text }}
      li( v-if="login_flag" ) [~]#&nbsp;
        input( autofocus maxlength="50" id="terminal-input" v-model="current_line" v-on:keydown.enter="command")
      li( v-else )
        <login_input v-on:loginCorrect="loginCorrect" v-on:push="history_push"></login_input>
</template>

<script>
import login_input from '@/components/Home/home_terminal_login.vue'

export default {
  name: 'terminal',
  components: {
    login_input
  },
  data: function() {
    return {
      current_line: "",
      history: [],
      index: 0,
      interval: 500,
      login_flag: false,
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
    this.terminalInit();
  },
  methods: {
    command: function() {
      this.history_push( '[~]# ' + this.current_line );

      // clear command
      if( this.current_line === 'clear' ) {
        this.history = [];
      }
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
    loginCorrect: function() {
      this.login_flag = true;
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

  }
}
</style>