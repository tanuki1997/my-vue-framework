<template>
  <div>
    <el-container style="padding: 1px ;height: 600px">
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside class="left" width="800px">log</el-aside>
        <el-main style="padding-right: 200px">
          <div style="padding-bottom: 20px">用户登录</div>
          <el-form :label-position="labelPosition" label-width="80px" :model="userInfo">
            <el-form-item label="账号">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="userInfo.pwd" type="password"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="login">登录</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script>

  export default {
    name: 'Login',

    data () {
      return {
        labelPosition: 'right',
        userInfo: { name: null, pwd: null, pwd: null },
        msg: ''
      }
    },
    methods: {
      login: function () {
        var reqStr = JSON.stringify(this.userInfo)
        var param = { 'reqStr': reqStr }
        this.$api.login.login(param).then(res => {
          if (res.data.code == 'TRUE') {
            console.log('登录成功')
            this.$common.setUserInfSession(res.data)
            this.$router.push('/manage')
          } else {
            this.$message(res.data.msg)

          }
        }).catch((error) => {
          this.$message('登录失败,请求异常')

        })

      }

    }
  }
</script>

<style scoped>
  .left {
    background: url("../assets/img/log.png") no-repeat;
    background-size: auto 100%;
  }
</style>
