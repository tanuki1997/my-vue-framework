<template>
  <div class="mask"></div>
</template>

<script>
  export default {
    name: 'MaskLayer'
  }
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
</style>
