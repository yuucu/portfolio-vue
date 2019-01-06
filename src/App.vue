<template>
  <div id="app">

    <my-navbar v-on:show-menu="showMenu"></my-navbar>

    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/works">WORKS</router-link> |
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/system">SYSTEM</router-link>
    </div>

    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from '@/components/App/myFooter.vue'
import myNavbar from '@/components/App/myNavbar.vue'

export default {
  name: 'app',
  components: {
    myFooter,
    myNavbar,
  },
  methods: {
    showMenu: function() {
      console.log("test");
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s
}
.fade-enter, .fade-leave {
  opacity: 0
}


.container {
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.contents.hidden {
	transform: translateX(250px);
}
</style>
