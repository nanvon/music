<template>
  <div class="app-container">
    <banner/>
    <div class="personalized">
      <song-card v-for="item in 10" class="card">
        <img slot="card-img"
             src="https://p1.music.126.net/PKLxFEoDr-USCTRKVwmkpw==/109951166515727569.jpg?param=180y180" alt=""
        >
        <div slot="card-title">旋律叙事簿.月有月的情怀,诉世事少有圆满</div>
      </song-card>
    </div>
  </div>
</template>

<script>
import Banner from 'components/Banner';
import SongCard from 'components/SongCard';

export default {
  name: "index",
  components: {
    Banner, SongCard
  }
}
</script>

<style lang="scss" scoped>
.app-container {

  .personalized {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .card {
      flex: 1;
      width: 75%;
    }
  }
}
</style>
