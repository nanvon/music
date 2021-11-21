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
      <audio ref="audio"
             @pause="onPause"
             @play="onPlay"
             @timeupdate="onTimeupdate"
             @loadedmetadata="onLoadedmetadata"
             src="https://music.163.com/song/media/outer/url?id=1888867938.mp3"
      ></audio>
      <img class="content-img"
           src="https://p1.music.126.net/lFFiY-jvO1ENHtK2bZ6eUw==/109951166531420475.jpg?param=42y42" alt=""
      >
      <div class="content-text">
        <div class="song-name">白色面包车 - <span>刘瑾睿</span> - <span>我的音乐你听吗</span></div>
        <div class="song-singer">{{ currentTime | formatSecond }}
          /
          {{ maxTime | formatSecond }}
        </div>
      </div>
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

// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
  var secondType = typeof second

  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)

    var hours = Math.floor(second / 3600)
    second = second - hours * 3600
    var mimute = Math.floor(second / 60)
    second = second - mimute * 60

    return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '0:00:00'
  }
}

export default {
  name: "index",
  components: {
    Icon
  },
  data() {
    return {
      // 播放状态，true为正在播放，false为暂停
      playStatus: false,
      currentTime: 0,
      maxTime: 0,
    }
  },
  mounted() {
    this.currentTime = this.$refs.audio.currentTime
  },
  methods: {
    // 控制音频的播放与暂停
    handlePlayStatus() {
      this.playStatus ? this.pause() : this.play()
    },
    // 播放音频
    play() {
      this.$refs.audio.play()
    },
    // 暂停音频
    pause() {
      this.$refs.audio.pause()
    },
    // 当音频播放
    onPlay() {
      this.playStatus = true
    },
    // 当音频暂停
    onPause() {
      this.playStatus = false
    },
    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      console.log('timeupdate')
      console.log(res)
      this.currentTime = res.target.currentTime
    },
    // 当加载语音流元数据完成后，会触发该事件的回调函数
    // 语音元数据主要是语音的长度之类的数据
    onLoadedmetadata(res) {
      console.log('loadedmetadata')
      console.log(res)
      this.maxTime = parseInt(res.target.duration)
    }
  },
  filters: {
    // 使用组件过滤器来动态改变按钮的显示
    transPlayPause(value) {
      return value ? '暂停' : '播放'
    },
    // 将整数转化成时分秒
    formatSecond(second = 0) {
      return realFormatSecond(second)
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  display: flex;
  align-items: center;
  height: 60px;
  min-width: 700px;
  background-color: #fff;
  border-top: $borderColor solid 1px;
  cursor: pointer;

  .controller-left {
    flex: 1;
  }

  .content {
    display: flex;
    flex: 2;
    border: $borderColor solid 1px;
    height: 70%;

    .content-img {
      width: 42px;
    }

    .content-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100% - 42px);

      .song-name {
        font-size: 12px;
      }

      .song-singer {
        font-size: 12px;
        color: $greyText;
      }
    }
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
