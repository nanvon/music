<template>
  <div class="app-container">
    <div class="serial-number">
      <slot name="serial-number"></slot>
    </div>
    <div class="song-image">
      <slot name="song-image"></slot>
    </div>
    <div class="song-name">
      <slot name="song-name"></slot>
    </div>
    <div class="song-singer">
      <slot name="song-singer"></slot>
    </div>
    <div class="song-album">
      <slot name="song-album"></slot>
    </div>
    <div class="song-time">
      <slot name="song-time"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LongSongCard"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  cursor: pointer;

  .serial-number {
    flex: 1;
  }

  .song-image {
    flex: 2;
  }

  .song-name {
    flex: 4;
  }

  .song-singer {
    flex: 4;
  }

  .song-album {
    flex: 4;
  }

  .song-time {
    flex: 2;
  }
}

.app-container:hover {
  background-color: $hoverColor;
}
</style>
