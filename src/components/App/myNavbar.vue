<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand mobile-menu-btn">
      <a v-on:click="toggleMenu" v-bind:class="{ 'is-active': isActive }" role="button" class="navbar-burger burger navbar-open" aria-label="menu" aria-expanded="false" data-target="target-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>


    <div class="navbar-menu desktop-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">
          Home
        </router-link>

        <router-link to="/works" class="navbar-item">
          Works
        </router-link>

        <router-link to="/about" class="navbar-item">
          About
        </router-link>

        <router-link to="/system" class="navbar-item">
          System
        </router-link>

        </div>
      </div>

      <div class="mobile-menu" v-bind:class="{ active: isActive }">
        <a v-on:click="toggleMenu" v-bind:class="{ 'is-active': isActive }" role="button" class="navbar-burger burger navbar-close" aria-label="menu" aria-expanded="false" data-target="target-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="mobile-links">

          <div class="mobile-link">
            <router-link to="/" v-on:click.native="toggleMenu">
              Home
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/works" v-on:click.native="toggleMenu">
              Works
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/about" v-on:click.native="toggleMenu">
              About
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/system" v-on:click.native="toggleMenu">
              System
            </router-link>
          </div>

        </div>
      </div>


  </nav>
</template>

<script>

export default {
  name: 'myNavbar',
  props: ['isActive'],
  methods: {
    toggleMenu: function() {
      this.$emit('toggle-menu');
    }
  }
}
</script>


<style lang="scss" scoped>

@import "@/components/App/_app_variables.scss";
@import "@/components/App/menu_trigger.scss";

.mobile-menu-btn {
  padding-top: 8px;
  padding-right: 4%;
}

.desktop-menu {
  padding-top: 40px;
  padding-right: 10%;
}

.mobile-menu {
	z-index: 1;
	position: fixed;
	overflow: auto;
	top: 0;
	right: 0;
	width: 320px;
	height: 100%;
	margin: 0;
	padding: 10px;
	box-sizing: border-box;
	background: rgba(253,253,253,.8);
	transform: translateX(100%);
	-webkit-transform: translateX(100%);
	transition: transform $menu_time;

  &.active {
    transform: none;
    -webkit-transform: none;
  }

  .mobile-links {
    margin-top: 24px;
    .mobile-link {
      margin-bottom: 24px;
    }
  }
}

</style>