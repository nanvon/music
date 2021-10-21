<template>
  <div class="view-container">
    <div class="main-side-bar">
      <main-side-bar/>
    </div>
    <div class="main-content">
      <div class="player">
        <player/>
      </div>
      <div class="content">
        <div class="router-view">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSideBar from "components/MainSideBar/index";
import Player from "components/Player/index";

export default {
  name: "index",
  components: {
    MainSideBar, Player
  },
}
</script>

<style lang="scss" scoped>
.view-container {
  text-align: center;
  margin: 0;

  .main-side-bar {
    position: fixed;
    height: 100vh;
    width: 15%;
    min-width: 120px;
  }

  .main-content {
    width: 85%;
    margin-left: 15%;
    overflow: hidden;

    .player {
      position: fixed;
      bottom: 0;
      width: 85%;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 60px;

      .router-view {
        width: 1000px;
      }
    }
  }
}
</style>
