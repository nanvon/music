<template>
  <div id="side-bar">
    <div id="logo">Von Music</div>
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
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 15%;
  background-color: #f9f9f9;
  padding: 20px 0;

  #logo {
    font-size: 20px;
  }
}
</style>
