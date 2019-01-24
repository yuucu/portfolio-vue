<template lang="pug">
  .terminal( v-on:click="terminalFocus" )
    ul
      li( v-for=" (text, index) in history " )
        p {{ text }}
      li( v-if="loginState" ) [~]#&nbsp;
        input( autofocus maxlength="50" autocomplete="off" id="terminal-input" v-model="currentLine" v-on:keydown.enter="command")
      li( v-else )
        <login_input></login_input>
</template>

<script src="./terminal.js"></script>

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