<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <small>&copy; 2018 satokibi</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  props: {
  }
}
</script>

<style lang="scss" scoped>
$footer-padding: 1.8rem 1.5rem 3.8rem;

.footer {
  padding: $footer-padding;
}
</style>
