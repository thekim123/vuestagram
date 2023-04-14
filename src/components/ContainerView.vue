<template>
  <div>

    <PostView v-for="(p,i) in postData" :key="i" :p="p"/>
    <!-- <PostView :postData="postData[1]"/> -->
    <!-- <PostView :p="postData[2]"/> -->
  </div>
</template>

<script>
import PostView from './PostView.vue';

export default {
    name: "ContainerView",
    components:{
        PostView: PostView,
    },

    props:{
        postData: Array,
    }

};
</script>

<style>
</style>