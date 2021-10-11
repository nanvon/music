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
        <div>
          <span class="login" @click="dialogVisible = true">登录</span>|
          <span class="register">注册</span>
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
      <el-form label-position="right" label-width="80px" :model="form">
        <el-form-item label="邮箱:">
          <el-input v-model="form.email" type="email" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
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
import {login} from 'api/account/login'

export default {
  name: "index",
  components: {
    Icon
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        email: 'hsuvon@163.com',
        password: '<tN93f=*?)ozz8I7'
      }
    }
  },
  methods: {
    reset() {
      this.form.email = ''
      this.form.password = ''
    },
    handleCancel() {
      this.dialogVisible = false
      // this.reset()
    },
    handleSubmit() {
      login(this.form.email, this.form.password).then((res) => {
        this.$store.commit('setUserInfo', res)
      })
      this.dialogVisible = false
      // this.reset()
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
      top: 85%;
      color: $greyText;
      font-size: 12px;

      .login {
        margin-right: 5px;
        cursor: pointer;
      }

      .register {
        margin-left: 5px;
        cursor: pointer;
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
