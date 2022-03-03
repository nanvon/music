<template>
  <div class="main-side-bar-container">
    <side-bar>
      <side-bar-item path="/discovery">
        <Icon slot="item-icon" color="#6ca5fe" name="yinleguan"></Icon>
        <div slot="item-text">
          发现音乐
        </div>
      </side-bar-item>
      <side-bar-item path="/newSong">
        <Icon slot="item-icon" color="#6ca5fe" name="bofangliebiao"></Icon>
        <div slot="item-text">最新歌曲</div>
      </side-bar-item>
      <side-bar-item path="/songList">
        <Icon slot="item-icon" color="#6ca5fe" name="bofangduilie"></Icon>
        <div slot="item-text">推荐歌单</div>
      </side-bar-item>
    </side-bar>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import SideBarItem from "./SideBarItem";
import Icon from "components/Icon/index";

export default {
  name: "index",
  components: {
    SideBar, SideBarItem, Icon
  }
}
</script>

<style lang="scss" scoped>
.main-side-bar-container {
  height: 100%;
  border-right: $borderColor solid 1px;
  background-color: $background;
}
</style>
