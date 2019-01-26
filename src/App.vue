<template>
  <div id="app">
    <close-bg v-bind:menuIsActive="menuIsActive" v-on:close-menu="toggleMenu"></close-bg>
    <my-navbar v-bind:menuIsActive="menuIsActive" v-on:toggle-menu="toggleMenu"></my-navbar>

    <div class="container" v-bind:class="{ hidden: menuIsActive }">
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
  import closeBg from '@/components/App/closeBg.vue'

  export default {
    name: 'app',
    components: {
      myFooter,
      myNavbar,
      closeBg,
    },
    data: function() {
      return {
        menuIsActive: false,
      }
    },
    methods: {
      toggleMenu: function() {
        this.menuIsActive = !this.menuIsActive;
      }
    }
  }
</script>

<style lang="scss">
  // buefy ########################################################
  @import "~bulma/sass/utilities/_all";
  // Set your colors
  $primary: #00adb5;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);
  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: ( "white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert), "info": ($info, $info-invert), "success": ($success, $success-invert), "warning": ($warning, $warning-invert), "danger": ($danger, $danger-invert), "twitter": ($twitter, $twitter-invert));
  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // navbar break point
  $navbar-breakpoint: 768px;
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
  // ##############################################################
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

  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-16px);
  }
  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(16px);
  }

  @import "@/components/App/_app_variables.scss";
  // menu
  .container {
    transition: transform $menu_time;
  }

  .container.hidden {
    transform: translateX(-320px);
    -webkit-transform: translateX(-320px);
  }

</style>
