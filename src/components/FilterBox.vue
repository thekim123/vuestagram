<template>
  <div :class="f + ' filter-item'" :style="`background-image:url(${url})`">
    <slot></slot>
    <button>발사</button>
  </div>
</template>

<script>
export default {
  name: 'filterBox',
  props: {
    url: String,
    f: String,
  },
}


</script>


<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>