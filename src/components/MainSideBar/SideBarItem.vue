<template>
  <div class="side-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
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
  display: flex;
  margin-top: 20px;
}
</style>
