<template>
  <div class="app-container">
    <banner/>
    <div class="personalized">
      <div class="card-title">推荐歌单</div>
      <div class="card-content">
        <song-card v-for="item in personalizedList">
          <img slot="card-img"
               :src="item.picUrl+'?param=180y180'"
               :alt="item.copywriter"
          >
          <div slot="card-title">{{ item.name }}</div>
        </song-card>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'components/Banner';
import SongCard from 'components/SongCard';
import {getPersonalized} from 'api/discovery'

export default {
  name: "index",
  components: {
    Banner, SongCard
  },
  data() {
    return {
      personalizedList: []
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

    .card-title {
      align-self: start;
      margin-bottom: 10px;
    }

    .card-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
