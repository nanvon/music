<template>
  <div class="card-item">
    <div class="img">
      <slot name="card-img"></slot>
    </div>
    <div class="title">
      <slot name="card-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 180px;
  height: 220px;

  .title {
    width: 180px;
    font-size: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
