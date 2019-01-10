<template>
  <div id="app">
    <div class="close-bg" v-bind:class="{ active: isActive }"></div>

    <my-navbar v-bind:isActive="isActive" v-on:show-menu="showMenu"></my-navbar>

    <div class="container" v-bind:class="{ hidden: isActive }">
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
  data: function() {
    return {
      isActive: false,
    }
  },
  components: {
    myFooter,
    myNavbar,
  },
  methods: {
    showMenu: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">

// buefy
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #00adb5;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.page-title {
  margin-top: 48px;
  margin-bottom: 24px;
  font-size: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s
}
.fade-enter, .fade-leave {
  opacity: 0
}

$menu_time: .4s;
// menu
.container {
	transition: transform $menu_time;
}
.container.hidden {
	transform: translateX(-320px);
	-webkit-transform: translateX(-320px);
}


.close-bg {
	z-index: 50;
  position: fixed;
	top: 0;
	left: 0;
  right: 0;
  bottom: 0;
	pointer-events: none;
	transition: background-color $menu_time,
              transform $menu_time;
}

.close-bg.active {
  pointer-events: auto;
	background-color: rgba(0,0,0,.3);
	transform: translateX(-320px);
	-webkit-transform: translateX(-320px);
} 

</style>
