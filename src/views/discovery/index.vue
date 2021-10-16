<template>
  <div class="app-container">
    <banner/>
  </div>
</template>

<script>
import Banner from 'components/Banner'

export default {
  name: "index",
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 1vh 4vw;
}
</style>
