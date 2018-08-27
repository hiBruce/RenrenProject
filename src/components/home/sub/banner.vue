<template>

    <div class="ui-banner">
      <div id="ui-banner" class="carousel carousel-fade" data-ride="carousel" v-if="bannerImgArr">
        <ol class="carousel-indicators">
          <li data-target="#ui-banner" v-for="(banner,ind) in bannerImgArr" :data-slide-to="ind"  :class="ind ? '' :'active'"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item" v-for="(banner,ind) in bannerImgArr" @click="open(banner.url)" :class="ind ? '' :'active'">
            <img v-if="typeof banner.imgUrl === 'string'" :src="banner.imgUrl" data-holder-rendered="true">
            <div class="banner-group" v-else >
              <div v-for="img in banner.imgUrl" class="item-img"><img :src="img" alt="" /></div>
            </div>
            <div class="carousel-caption" v-if="banner.reviewOfOpera">
              <h3 v-text="banner.reviewOfOpera"></h3>
              <p v-if="banner.reviewOfOpera2" v-text="banner.reviewOfOpera2"></p>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#ui-banner" role="button" data-slide="prev">
          <span class=" fal fa-angle-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#ui-banner" role="button" data-slide="next">
          <span class=" fal fa-angle-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div><!--ui-banner end-->


</template>

<script>
    export default {
        name: "banner",
      data () {
        return {
          bannerImgArr:[],   //轮播banbner图数据
        }
      },
      methods:{
        getMovieData(data){
          Request.get("../static/lib/temp_data/common/tvAndFilmData.json",null,(data)=>{
            this.bannerImgArr = data.bannerImgArr;
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
