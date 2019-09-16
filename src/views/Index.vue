<template>
  <div class="hello">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="logout">退出{{this.$store.state.count}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span ref="userName"></span>
    </el-header>
    <el-container style="height: 750px; border: 1px solid #eee">
      <el-aside width="250px">
        <el-menu :default-active="$route.name" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
                 @select="handleselect" unique-opened router>
          <MenuTree :nodes="$store.getters.menuRouter"></MenuTree>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="grid-content bg-purple-light">
            <!--            面包屑-->
            <!--            <el-col :span="24" class="breadcrumb-container">-->
            <!--              <el-breadcrumb separator="/" class="breadcrumb-inner">-->
            <!--                <el-breadcrumb-item v-for="(item) in $route.matched" :key="item.name">-->
            <!--                  {{ item.name }}-->
            <!--                </el-breadcrumb-item>-->
            <!--              </el-breadcrumb>-->
            <!--            </el-col>-->

            <el-col :span="24" class="content-wrapper">
              <el-tabs :value="$store.getters.editableTabsValue" type="card" closable @tab-remove="removeTab"
                       @tab-click="clickTab">
                <el-tab-pane
                  v-for="item in $store.getters.tabPanes"
                  :key="item.id+''"
                  :label="item.name"
                  :name="item.id+''"
                />
                <transition>
                  <router-view/>
                </transition>
              </el-tabs>

            </el-col>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script src="@viewsJs/index"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@viewsCs/index.css">

</style>
