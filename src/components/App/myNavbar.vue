<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand mobile-menu-btn">
      <a v-on:click="toggleMenu" v-bind:class="{ 'is-active': menuIsActive }" role="button" class="navbar-burger burger navbar-open" aria-label="menu" aria-expanded="false" data-target="target-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>


    <div class="navbar-menu desktop-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <router-link to="/" class="navbar-item"
          v-bind:class="{ 'is-active' :linkIsActive('home') }"
          v-on:click.native="setActiveLink('home')">
          Home
        </router-link>

        <router-link to="/works" class="navbar-item"
          v-bind:class="{ 'is-active':linkIsActive('works') }"
          v-on:click.native="setActiveLink('works')">
          Works
        </router-link>

        <router-link to="/about" class="navbar-item"
            v-bind:class="{ 'is-active': linkIsActive('about') }"
            v-on:click.native="setActiveLink('about')">
          About
        </router-link>

        <router-link to="/system" class="navbar-item"
            v-bind:class="{ 'is-active': linkIsActive('system') }"
            v-on:click.native="setActiveLink('system')">
          System
        </router-link>

        </div>
      </div>

      <div class="mobile-menu" v-bind:class="{ active: menuIsActive }">
        <a v-on:click="toggleMenu" v-bind:class="{ 'is-active': menuIsActive }" role="button" class="navbar-burger burger navbar-close" aria-label="menu" aria-expanded="false" data-target="target-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="mobile-links">

          <div class="mobile-link">
            <router-link to="/">
              <span v-on:click="mobileLinkClick( 'home ')">Home</span>
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/works">
              Works
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/about" v-on:click.native="mobileLinkClick( 'about' )">
              About
            </router-link>
          </div>

          <div class="mobile-link">
            <router-link to="/system" v-on:click.native="mobileLinkClick( 'system' )">
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
  props: ['menuIsActive'],
  data: function() {
    return {
      active_link: 'home'
    }
  },
  methods: {
    toggleMenu: function() {
      this.$emit('toggle-menu');
    },
    mobileLinkClick: function( link_item ) {
      this.active_link = link_item
      this.$emit('toggle-menu');
    },
    linkIsActive: function( this_link ) {
      return this.active_link === this_link
    },
    setActiveLink: function( link_item ) {
      this.active_link = link_item
    }
  }
}
</script>


<style lang="scss" scoped>

@import "@/components/App/_app_variables.scss";
@import "@/components/App/menu_trigger.scss";
@import "@/components/App/menu_hover.scss";

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