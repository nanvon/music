<template>
  <div class="app-container">
    <long-song-card v-for="i in 30" :key="i">
      <div slot="serial-number">{{ i }}</div>
      <img slot="song-image"
           src="https://p1.music.126.net/lFFiY-jvO1ENHtK2bZ6eUw==/109951166531420475.jpg?param=55y55"
           alt="最新音乐">
      <div slot="song-name">白色面包车</div>
      <div slot="song-singer">刘瑾睿</div>
      <div slot="song-album">我的音乐你听吗</div>
      <div slot="song-time">04:20</div>
    </long-song-card>
  </div>
</template>

<script>
import LongSongCard from "components/SongCard/LongSongCard";

export default {
  name: "index",
  components: {
    LongSongCard
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.app-container {
  padding-top: 10px;
}
</style>
