<template>
  <div class="home">
    <Index/>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
  // @ is an alias to /src
  import Index from '@/views/Index.vue'
  export default {
    name: 'home',
    components: {
      Index
    },
    data () {
      return {
        menu_data: null,
      }

    },

  }
</script>
