<template>
  <div>
    <side-bar>
      <side-bar-item path="/discovery">
        <Icon name="yinleguan" slot="item-icon"></Icon>
        <div slot="item-text">
          发现音乐
        </div>
      </side-bar-item>
      <side-bar-item path="/songList">
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

<style scoped>

</style>
