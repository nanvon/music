<template>
  <div class="app-container">
    <banner/>
    <div class="personalized">
      <div class="personalized-title">推荐歌单</div>
      <div class="personalized-content">
        <square-card v-for="item in personalizedList">
          <img slot="card-img"
               :src="item.picUrl+'?param=180y180'"
               alt="推荐歌单"
          >
          <div slot="card-title">{{ item.name }}</div>
        </square-card>
      </div>
    </div>
    <div class="new-song">
      <div class="new-song-title">最新音乐</div>
      <div class="new-song-content">
        <short-rectangle-card v-for="item in newSongList">
          <div slot="card-number"><span v-if="songCardNumber<=9">0</span>{{ songCardNumber++ }}</div>
          <img slot="card-img"
               :src="item.picUrl+'?param=60y60'"
               alt="最新音乐">
          <div slot="card-song-name">{{ item.name }}</div>
          <div slot="card-song-singer">{{ item.song.artists[0].name }}</div>
        </short-rectangle-card>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'components/Banner';
import SquareCard from 'components/SongCard/Square';
import ShortRectangleCard from 'components/SongCard/ShortRectangle';
import {getPersonalized, getNewSong} from 'api/discovery'

export default {
  name: "index",
  components: {
    Banner, SquareCard, ShortRectangleCard
  },
  data() {
    return {
      personalizedList: [],
      newSongList: [],
      songCardNumber: 1,
    }
  },
  created() {
    this.getPersonalizedList();
    this.getSong();
  },
  methods: {
    getPersonalizedList() {
      getPersonalized().then(res => {
        this.personalizedList = res.result;
      })
    },
    getSong() {
      getNewSong().then(res => {
        console.log(res.result);
        this.newSongList = res.result;
        console.log(this.newSongList[0].song.artists.name)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {

  .personalized {
    display: flex;
    flex-direction: column;

    .personalized-title {
      align-self: start;
      margin-bottom: 10px;
    }

    .personalized-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .new-song {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .new-song-title {
      align-self: start;
      margin-bottom: 10px;
    }

    .new-song-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
