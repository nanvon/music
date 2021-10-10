<template>
  <div id="app">
    <main-side-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainSideBar from "components/MainSideBar/index";
import SideBar from "components/MainSideBar/SideBar";
import SideBarItem from "components/MainSideBar/SideBarItem";

export default {
  name: 'app',
  components: {
    MainSideBar, SideBar, SideBarItem
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
