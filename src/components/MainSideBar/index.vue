<template>
  <div class="main-side-bar-container">
    <side-bar>
      <side-bar-item path="/discovery">
        <Icon name="yinleguan" slot="item-icon" color="#25c37a"></Icon>
        <div slot="item-text">
          发现
        </div>
      </side-bar-item>
      <side-bar-item path="/songList">
        <Icon name="bofangduilie" slot="item-icon" color="#25c37a"></Icon>
        <div slot="item-text">歌单</div>
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
