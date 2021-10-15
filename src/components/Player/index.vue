<template>
  <div class="app-container">
    <div class="controller-left">
      <Icon slot="item-icon" name="shangyiqu" color="#8f8f8f"></Icon>
      <Icon slot="item-icon" name="zanting" color="#8f8f8f"></Icon>
      <Icon slot="item-icon" name="xiayiqu" color="#8f8f8f"></Icon>
    </div>
    <div class="content">

    </div>
    <div class="controller-right">
      <Icon slot="item-icon" name="suijibofang" color="#8f8f8f"></Icon>
      <Icon slot="item-icon" name="liebiaoxunhuan" color="#8f8f8f"></Icon>
      <Icon slot="item-icon" name="bofangduilie" color="#8f8f8f"></Icon>
    </div>
  </div>
</template>

<script>
import Icon from 'components/Icon/index'

export default {
  name: "index",
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  align-items: center;
  width: 84vw;
  min-width: 950px;
  height: 7vh;
  position: fixed;
  top: 0;
  left: 16vw;
  background-color: #fff;
  border-bottom: $borderColor solid 1px;

  .controller-left {
    flex: 1;
  }

  .content {
    flex: 2;
    border: $borderColor solid 1px;
    height: 70%;
  }

  .controller-right {
    flex: 1;
  }
}

.icon {
  margin: 0 10px;
  width: 25px;
  height: 25px;
}

.el-slider {
  width: 25px;
}
</style>
