<template>
  <div id="side-bar">
    <div class="logo"><i class="el-icon-s-promotion"></i>Music</div>
    <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        size="medium"
        class="search"
    >
    </el-input>
    <slot></slot>
    <div class="mine">
      <div>
        <Icon name="tinggeshiqu" slot="item-icon"></Icon>
      </div>
      <div>
        <span class="login">登录</span>|
        <span class="register">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'components/Icon/index';

export default {
  name: "index",
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";

#side-bar {
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
</style>
