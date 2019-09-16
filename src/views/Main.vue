<template>
  <Main v-if="viewLayers >2" :view-layers="viewLayers-1">
    <router-view/>
  </Main>
</template>

<script>

  export default {
    name: 'Main',
    props: {
      viewLayers: 0
    },
    created () {
      console.log(this.$props.viewLayers)
    }
  }
</script>

<style scoped>

</style>
