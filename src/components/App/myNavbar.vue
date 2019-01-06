<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <div class="menu-trigger-wrapper">
        <a class="menu-trigger" v-bind:class="{ active: isActive }" v-on:click="showMenu" href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      
    </div>


    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Works
        </a>

        <a class="navbar-item">
          About
        </a>

        <a class="navbar-item">
          System
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>

export default {
  name: 'myNavbar',
  props: {
  },
  data: function() {
    return {
      isActive: false,
    }
  },
  methods: {
    showMenu: function() {
      this.isActive = !this.isActive;
      this.$emit('show-menu');
    }
  }
}
</script>


<style class="scss">

.menu-trigger-wrapper {
  padding: 16px;
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 24px;
  height: 18px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #444;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 8px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  -webkit-transform: translateY(8px) rotate(-45deg);
  transform: translateY(8px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  -webkit-transform: translateY(-8px) rotate(45deg);
  transform: translateY(-8px) rotate(45deg);
}

</style>