<template>
  <div class="banner-container">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.targetId">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getBanners} from 'api/discovery'

export default {
  name: "Banner",
  data() {
    return {
      banners: []
    }
  },
  created() {
    this.getBannerPics()
  },
  methods: {
    getBannerPics() {
      getBanners().then(res => {
        for (let i of res.banners) {
          this.banners.push(i.imageUrl)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  overflow: hidden;
}

img {
  height: 200px;
}
</style>
