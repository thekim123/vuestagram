<template>
  <div>


    <div v-if="step===0">
      <PostView v-for="(p,i) in postData" :key="i" :p="p"/>
    </div>
    <!-- <PostView :postData="postData[1]"/> -->
    <!-- <PostView :p="postData[2]"/> -->

    <!-- 필터선택페이지 -->
    <div v-if="step===1">
      <div :class="filterName" class="upload-image" :style="{backgroundImage: `url(${url})`}"></div>
      <div class="filters">
        <FilterBox :url="url" v-for="(f, i) in filterArray" :key="i" :f="f">
          {{ f }}

        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div  :class="filterName" class="upload-image" v-if="step ===2" :style="{backgroundImage: `url(${url})`}"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
    </div>
  </div>
</template>

<script>
import PostView from './PostView.vue'
import FilterBox from './FilterBox.vue'

export default {
  name: "ContainerView",
  components: {
    PostView: PostView,
    FilterBox: FilterBox,
  },
  data() {
    return {
      selectedFilter: '',
      filterName:'',
    }
  },

  props: {
    step: Number,
    postData: Array,
    url: String,
    filterArray: Array,
  },
  mounted() {
    this.emitter.on('발사중', (a) => {
      this.filterName = a;
    });
  },
};
</script>

<style>

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>