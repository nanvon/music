<template>
  <div class="player-container">
    <div class="controller-left">
      <Icon slot="item-icon" name="shangyiqu" color="#8f8f8f"></Icon>
      <Icon v-if="playStatus" slot="item-icon" name="bofangzhong" color="#8f8f8f"
            @click.native="handlePlayStatus"></Icon>
      <Icon v-else slot="item-icon" name="zanting" color="#8f8f8f" @click.native="handlePlayStatus"></Icon>
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
  },
  data() {
    return {
      // 播放状态，true为正在播放，false为暂停
      playStatus: false
    }
  },
  methods: {
    handlePlayStatus() {
      this.playStatus = !this.playStatus;
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  display: flex;
  align-items: center;
  height: 50px;
  min-width: 700px;
  background-color: #fff;
  border-top: $borderColor solid 1px;

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
  cursor: pointer;
  margin: 0 10px;
  width: 25px;
  height: 25px;
}

.el-slider {
  width: 25px;
}
</style>
