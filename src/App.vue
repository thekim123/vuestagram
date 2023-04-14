<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerVeiw :postData="postData"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerVeiw from "./components/ContainerVeiw.vue";
import postData from "./assets/postdata.js"

export default {
  name: "App",
  data(){
    return{
      postData: postData,
    }
  },
  components: {
    ContainerVeiw,
  },
};
</script>

<style>
@import "style.css";
</style>
