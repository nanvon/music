<template>
  <div class="app-container">
    <div class="container-title"><span>最新音乐推荐</span></div>
    <long-song-card v-for="i of newSongList" :key="i">
      <div slot="serial-number"><span v-if="songCardNumber<=9">0</span>{{ songCardNumber++ }}</div>
      <img slot="song-image"
           :src="i.album.picUrl+'?param=55y55'"
           alt="最新音乐">
      <div slot="song-name">{{ i.name }}</div>
      <div slot="song-singer">{{ i.artists[0].name }}</div>
      <div slot="song-album">{{ i.album.name }}</div>
      <!--      <div slot="song-time">04:20</div>-->
    </long-song-card>
  </div>
</template>

<script>
import LongSongCard from "../../components/SongCard/LongSongCard";
import {getNewSong} from '../../api/newSong';

export default {
  name: "index",
  components: {
    LongSongCard
  },
  data() {
    return {
      newSongList: [],
      songCardNumber: 1,
    }
  },
  created() {
    this.getSong();
  },
  methods: {
    getSong() {
      getNewSong().then(res => {
        this.newSongList = res.data;
        console.log(this.newSongList[4].name);
        console.log(this.newSongList[4].artists[0].name);
        console.log(this.newSongList[4].album.name);
        console.log(this.newSongList[4].album.picUrl);
        console.log(this.newSongList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.app-container {
  padding-top: 10px;

  .container-title {
    display: flex;
    font-size: 14px;
    margin: 15px;
  }
}
</style>
