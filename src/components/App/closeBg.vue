<template>
    <div class="close-bg" v-on:click="closeMenu" v-bind:class="{ active: menuIsActive }"></div>
</template>

<script>
export default {
  name: 'closeBg',
  props: ['menuIsActive'],
  methods: {
    closeMenu: function() {
      this.$emit('close-menu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/components/App/_app_variables.scss";
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