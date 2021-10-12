<template>
  <div class="app-container">
    <div class="side-bar">
      <div class="logo"><i class="el-icon-s-promotion"></i>Music</div>
      <el-input
          class="search"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          size="medium"
      >
      </el-input>
      <slot></slot>
      <div class="mine">
        <div>
          <Icon slot="item-icon" name="tinggeshiqu"></Icon>
        </div>
        <div v-if="!loginStatus">
          <span class="login cursor" @click="dialogVisible = true">登录</span>|
          <span class="register cursor" @click="handleRegister">注册</span>
        </div>
        <div v-else>
          <div class="userNickName">{{ nickName }}</div>
          <span class="logout cursor" @click="handleLogout">退出登录</span>
        </div>
      </div>
    </div>
    <el-dialog
        :close-on-click-modal="false"
        :visible.sync="dialogVisible"
        append-to-body
        center
        width="30%"
        class="dialog">
      <div slot="title">
        登录<span class="title-info">（仅支持邮箱登录）</span>
      </div>
      <el-form :model="form" ref="form" label-position="right" label-width="80px" :rules="rules">
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="form.email" type="email" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" type="password" size="medium"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Icon from 'components/Icon/index';
import {login, logout} from 'api/account/login'
import {Notification} from "element-ui";

export default {
  name: "index",
  components: {
    Icon
  },
  data() {
    return {
      //登录对话框
      dialogVisible: false,
      //登录状态
      loginStatus: false,
      form: {
        email: '',
        password: ''
      },
      nickName: '',
      rules: {
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
      }
    }
  }
  ,
  created() {
    this.loginStatus = this.$store.state.status
    this.nickName = this.$store.state.profile.nickname
  }
  ,
  methods: {
    reset() {
      this.form.email = ''
      this.form.password = ''
    }
    ,
    handleCancel() {
      this.dialogVisible = false
      this.reset()
    }
    ,
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
            if (valid) {
              login(this.form.email, this.form.password).then((res) => {
                if (res.code === 200) {
                  Notification({
                    message: '登录成功',
                    type: 'success'
                  })
                  this.loginStatus = true
                  this.$store.commit('setStatus')
                  this.$store.commit('setUserInfo', res)
                  this.nickName = this.$store.state.profile.nickname
                }
              })
              this.dialogVisible = false
              this.reset()
            }
          }
      )
    }
    ,
    handleLogout() {
      logout().then((res) => {
        Notification({
          message: '已退出登录',
          type: 'success'
        })
        this.loginStatus = false
        window.sessionStorage.clear()
        this.$store.commit('setStatus', {
          account: {},
          token: '',
          profile: {},
          cookie: '',
        })
        window.location.reload()
      })
    }
    ,
    handleRegister() {
      Notification({
        message: '请前往网易云音乐进行注册',
        type: 'info'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";

.app-container {
  .side-bar {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 10%;
    background-color: $background;
    padding: 20px 40px;

    .logo {
      font-size: 24px;
      font-weight: bold;
    }

    .search {
      margin-top: 20px;
    }

    .mine {
      display: flex;
      flex-direction: column;
      align-self: center;
      position: absolute;
      top: 80%;
      color: $greyText;
      font-size: 12px;

      .cursor {
        cursor: pointer;
      }

      .login {
        margin-right: 5px;
      }

      .register {
        margin-left: 5px;
      }

      .logout {
        margin-top: 5px;
      }

      .userNickName {
        font-weight: bold;
      }
    }
  }
}

</style>

<style>
.el-dialog__header .title-info {
  font-size: 12px;
}
</style>
