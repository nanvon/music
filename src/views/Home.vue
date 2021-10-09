<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in songs" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {test} from 'api/test'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this.testAPI();
  },
  methods: {
    testAPI() {
      test().then(res => {
        this.songs = res.songs;
      })
    }
  }
}
</script>
