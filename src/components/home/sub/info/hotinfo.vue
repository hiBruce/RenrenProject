<template>
  <div class="content-1 active" >
    <div id="info-banner" class="info-banner info-banner-inner carousel carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators" >
        <template v-for="(banner,ind) in hotInfoBanner">
          <li data-target="#info-banner"  :data-slide-to="ind" :class="(ind===0)?'active':''"></li>
        </template>
      </ol>
      <div class="carousel-inner">
        <div class="item" role="listbox" :class="(ind===0)?'active':''" @click="open(banner.url)"  v-for="(banner,ind) in hotInfoBanner">
          <img :src="banner.imgUrl" data-holder-rendered="true">
          <div class="hot" v-if="banner.hot">热门</div>
          <div class="tags">
            <span class="name" v-text="banner.linkToType"></span><span class="type" v-text="banner.type"></span>
            <ul class="corner top right"><li class="user" v-text="banner.author"></li><li class="date" v-compute-date="banner.date"></li></ul>
            <ul class="corner top left"><li class="source"  v-text="banner.type"></li><li class="view" v-compute-numbybit="banner.viewed"></li></ul>
          </div>
          <div class="carousel-caption">
            <h4 v-text="banner.title"></h4>
            <p v-text="banner.subTitle"></p>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#info-banner" role="button" data-slide="prev">
        <span class="fal fa-angle-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#info-banner" role="button" data-slide="next">
        <span class="fal fa-angle-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- 资讯列表 开始 -->

    <ul class="info-list info-list-A1-banner">
      <li  v-for="(info,ind)  in hotInfomationArr">
        <div class="img-item">
          <div class="hot" v-if="info.hot">
            <template v-if="info.hot==1">
              热门
            </template>
            <template v-if="info.hot==2">
              独家
            </template>
          </div>
          <div class="tags">
            <span class="name" v-text="info.linkTo"></span>
            <span class="type" v-text="info.linkToType"></span>
            <ul class="corner bottom right">
              <li class="user" v-text="info.author"></li>
              <li class="date"  v-compute-date="info.date"></li>
            </ul>
            <ul class="corner bottom left">
              <li class="source" v-text="info.type"></li>
              <li class="view"  v-compute-numbybit="info.viewed"></li>
            </ul>
          </div>
          <img :src="info.imgUrl" alt="">
        </div>
        <p class="title" v-text="info.title"></p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "hotinfo",
      data () {
        return {
          hotInfoBanner:[],   //轮播banbner图数据
          hotInfomationArr:[]
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/info.json",null,(data)=>{
            this.hotInfoBanner = data.hotInfoBanner;
            this.hotInfomationArr = data.hotInfo
          })
        },
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped>

</style>
