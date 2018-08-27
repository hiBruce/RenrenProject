<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">24小时热门下载</span>
    </div>
    <div class="panel-body">
      <ul class="play-list play-list-topdown" v-if="hotDowloadArr">
        <li v-for="(hotDownLoad,ind) in hotDowloadArr" v-if="ind<14">
          <div class="img-item">
            <div class="tags">
              <span class="name" v-text="ind+1"></span>
              <span class="type" v-text="hotDownLoad.type"></span>
              <ul class="corner bottom left">
                <li v-text="hotDownLoad.type"></li>
              </ul>
              <ul class="corner bottom right">
                <li v-text="hotDownLoad.contry"></li>
              </ul>
            </div>
            <div class="count" v-text="hotDownLoad.viewed"></div>
            <div class="desc"  v-text="hotDownLoad.episode"></div>
            <img :src="hotDownLoad.imgUrl" alt="">
          </div>
          <p class="name-chs" v-text="hotDownLoad.nameChs"></p>
          <p class="name-eng" v-text="hotDownLoad.nameEng"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hotDownload",
      data () {
        return {
          hotDowloadArr:[],   //轮播banbner图数据
        }
      },
      methods:{
        getMovieData(data){
          Request.get("../static/lib/temp_data/common/tvAndFilmData.json",null,(data)=>{
            this.hotDowloadArr = data.hotDownload;
          })
        },
      },
      created(){
        this.getMovieData()
      }
    }
</script>

<style scoped>

</style>
