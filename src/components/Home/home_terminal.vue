<template lang="pug">
  .terminal
    ul
      li( v-for=" (text, index) in history " )
        p [~]# {{ text }}
      li [~]#&nbsp;
        input( v-model="current_line" v-on:keydown.enter="command")
</template>

<script>

export default {
  name: 'home',
  data: function() {
    return {
      current_line: "",
      history: ['Hello, World!']
    }
  },
  methods: {
    command: function() {
      this.history.push( this.current_line );
      if( this.history.length > 14 ) {
        this.history = this.history.slice( -14 );
      }
      this.current_line = '';
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

.terminal {
  font-family: 'Source Code Pro', monospace;
  overflow: hidden;
  width: 420px;
  height: 272px;
  margin: 0 auto;
  margin-top: 104px;
  margin-bottom: 200px;
  background-color: black;

  text-align: left;
  font-size: 12px;
  color: red;

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

    &:focus {
      outline: 0;
    }
  }
}
</style>