<template>
  <div class="card-item">
    <div class="card-number">
      <slot name="card-number"></slot>
    </div>
    <div class="card-img">
      <slot name="card-img"></slot>
    </div>
    <div class="card-text">
      <div class="song-name">
        <slot name="card-song-name"></slot>
      </div>
      <div class="song-singer">
        <slot name="card-song-singer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortRectangle"
}
</script>

<style lang="scss" scoped>
.card-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 80px;
  width: 48%;
  padding-left: 10px;

  .card-number {
    font-size: 12px;
    flex: 1;
  }

  .card-img {
    flex: 5;
  }

  .card-text {
    flex: 20;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 10px;

    .song-name {
      padding: 5px 0;
    }

    .song-singer {
      padding: 5px 0;
      color: $greyText;
    }
  }
}

.card-item:hover {
  background-color: $activeBackground;
}
</style>
