<template>
  <div>
    <template v-for="(node,index) in nodes" v-if="!node.hidden">
      <el-submenu :index="node.name" v-if="!node.leaf">
        <template slot="title">
          <i :class="node.iconCls"></i>{{node.name}}
        </template>
        <MenuTree :nodes="node.children"></MenuTree>
      </el-submenu>
      <!-- 这里是用:route="{name:node.name}，如果不使用name跳转的话，可以在数据源那里把path写成全路径即可 -->
      <el-menu-item v-if="node.leaf" :index="node.name" :route="{name:node.name}" @click="addTab(node)">
        {{node.name}}
      </el-menu-item>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MenuTree',
    data () {
      return {}
    },
    created () {
      console.log(this.nodes)
    },

    methods: {
      //添加标签页
      addTab (node) {
        console.log(JSON.stringify(node))
        let hasAdd = false// 是否已添加该节点
        this.$store.getters.tabPanes.forEach(item => {
          if (item.id == node.id) {
            hasAdd = true
          }
        })
        if (!hasAdd) {
          this.$store.dispatch('addTabPane', node)
        }
        this.$store.dispatch('setEditableTabsValue', node.id)
      },
    },
    props: {
      nodes: {
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-item {
    padding: 0px 14px;
  }
</style>
