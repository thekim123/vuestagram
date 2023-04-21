<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="cancel">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step===1" @click="step++">Next</li>
      <li v-if="step===2" @click="publish()">Publish</li>
    </ul>
  </div>

  <h4>아릉하세연 {{ $store.state.name }}님은 {{ $store.state.age}}짤이에양 </h4>
  <button @click="$store.commit('changeName')">이름 변경하기</button>  &nbsp;&nbsp; <button @click="$store.commit('plusAge')">나이 한살 더먹기</button>
  <ContainerView @write="myContent= $event" :url="url" :postData="postData" :step="step"
                 :filterArray="filterArray"></ContainerView>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">파일</label>
    </ul>
  </div>

</template>

<script>
import ContainerView from "./components/ContainerView.vue"
import postData from "./assets/postdata.js"
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      step: 0,
      count: 0,
      postData: postData,
      clickCount: 0,
      url: '',
      myContent: '',
      filterName: '',
      filterArray: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },

  components: {
    ContainerView: ContainerView,
  },
  methods: {
    cancel() {
      this.step = 0;
    },
    publish() {
      const myPost = {
        name: 'yh',
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.myContent,
        filter: this.filterName,
      };
      this.postData.unshift(myPost);
      this.step = 0;
    },
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
          .then((result) => {
            this.postData.push(result.data);
            this.count++;
          })
    },
    upload(e) {
      let file = e.target.files;
      console.log(file);
      console.log(file[0].type);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.url = url;
      this.step = 1;
    }
  },
  mounted() {
    this.emitter.on('발사중', (a) => {
      this.filterName = a;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
