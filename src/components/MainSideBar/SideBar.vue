<template>
  <div id="side-bar">
    <div class="logo"><i class="el-icon-s-promotion"></i>Music</div>

    <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        size="mini"
        class="search"
    >
    </el-input>

    <slot></slot>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem";


export default {
  name: "index",
  components: {
    SideBarItem
  }
}
</script>

<style lang="scss" scoped>
#side-bar {
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 10%;
  background-color: #f9f9f9;
  padding: 20px 40px;

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .search {
    margin-top: 20px;
  }
}
</style>
