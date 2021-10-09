<template>
  <div id="app">
    <router-view></router-view>
    <side-bar>

      <side-bar-item path="/discovery">
        <div slot="item-text">发现音乐</div>
      </side-bar-item>
      <side-bar-item path="/songList">
        <div slot="item-text">歌单</div>
      </side-bar-item>
    </side-bar>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/index";
import SideBarItem from "./components/sidebar/SideBarItem";

export default {
  name: 'app',
  components: {
    SideBar, SideBarItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
