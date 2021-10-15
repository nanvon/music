<template>
  <svg :style="{fill:color?color:''}" class="icon">
    <use :xlink:href="'#icon-'+name"/>
  </svg>
</template>

<script>
export default {
  props: {
    name: String, //图标名称
    color: { // 图标颜色
      type: String,
      deafult: null
    }
  }
}
</script>

<style>
.icon {
  width: 20px;
  height: 20px;
}
</style>
