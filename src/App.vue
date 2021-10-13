<template>
  <div id="app">
    <main-side-bar/>
    <div class="main-content">
      <player/>
      <keep-alive>
        <div class="content">
          <router-view/>
        </div>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MainSideBar from "components/MainSideBar/index";
import Player from "components/Player/index";

export default {
  name: 'app',
  components: {
    MainSideBar, Player
  },
  created() {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  margin: 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content {

}
</style>
