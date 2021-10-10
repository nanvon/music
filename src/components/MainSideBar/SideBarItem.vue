<template>
  <div class="side-bar-item" :class="{active:isActive}" @click="itemClick">
    <slot name="item-icon" class="icon"></slot>
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
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";

.side-bar-item {
  display: flex;
  margin-top: 10px;
  width: 100%;
  padding: 7px 0 7px 7px;
}

.icon {
  margin-right: 10px;
}

.active {
  color: $primary;
  font-weight: bold;
  background: $activeBackground;
  border-radius: 8px;
}
</style>
