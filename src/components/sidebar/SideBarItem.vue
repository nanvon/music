<template>
  <div class="side-bar-item" @click="itemClick">
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    path: String
  },
  data() {
    return {}
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.side-bar-item {
  margin-top: 20px;
}
</style>
