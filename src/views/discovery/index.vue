<template>
  <div class="app-container">
    <banner/>
    <div class="personalized">
      <div class="personalized-title">推荐歌单</div>
      <div class="personalized-content">
        <square-card v-for="item in personalizedList">
          <img slot="card-img"
               :src="item.picUrl+'?param=180y180'"
               :alt="item.copywriter"
          >
          <div slot="card-title">{{ item.name }}</div>
        </square-card>
      </div>
    </div>
    <div class="new-song">
      <div class="new-song-title">最新音乐</div>
      <div class="new-song-content">
        <short-rectangle-card v-for="item in 10">
          <div slot="card-number"><span v-if="songCardNumber<=9">0</span>{{ songCardNumber++ }}</div>
          <img slot="card-img"
               src="https://p2.music.126.net/i-SXaH6t1qpY8KqXyO3D1g==/109951166411177781.jpg?param=60y60"
               alt="">
          <div slot="card-song-name">呼吸我呼吸的</div>
          <div slot="card-song-singer">刘瑾睿</div>
        </short-rectangle-card>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'components/Banner';
import SquareCard from 'components/SongCard/Square';
import ShortRectangleCard from 'components/SongCard/ShortRectangle';
import {getPersonalized} from 'api/discovery'

export default {
  name: "index",
  components: {
    Banner, SquareCard, ShortRectangleCard
  },
  data() {
    return {
      personalizedList: [],
      songCardNumber: 1,
    }
  },
  created() {
    this.getPersonalizedList();
  },
  methods: {
    getPersonalizedList() {
      getPersonalized().then(res => {
        this.personalizedList = res.result;
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
