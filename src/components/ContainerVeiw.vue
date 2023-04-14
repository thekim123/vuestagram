<template>
  <div>
    <PostView :p="postData[0]"/>
    <PostView :p="postData[1]"/>
    <PostView :p="postData[2]"/>
  </div>
</template>

<script>
import PostView from './PostView.vue';

export default {
    name: "ContainerView",
    components:{
        PostView,
    },
    data(){
        return{
            p: postData,
        }
    },
    props:{
        postData: Array,
    }

};
</script>

<style>
</style>