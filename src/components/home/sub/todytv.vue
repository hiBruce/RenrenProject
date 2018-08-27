<template>
  <div class="panel panel-tody-tv">
    <div id="tvshow-slide" class="carousel carousel-fade" data-ride="carousel" v-if="panelTodayTvArr">
      <ol class="carousel-indicators">
        <li data-target="#tvshow-slide" data-slide-to="ind" v-for="(tv,ind) in panelTodayTvArr"  :class="ind ? '' :'active'"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item " v-for="(tv,ind) in panelTodayTvArr"  :class="ind ? '' :'active'">
          <img :src="tv.imgUrl" data-holder-rendered="true">
          <div class="episode-info" v-text="tv.episodeInfo"></div>
        </div>
      </div>
    </div>
    <div class="panel-body scroll-wrapper today-tv-scroll">
      <ul class="today-tv-list"  v-if="panelTodayTvArr">
        <li v-for="tv in panelTodayTvArr">
          <a :href="tv.url?tv.url:'javascript:void(0)'">
            <span class="name-chs" v-text="tv.nameChs"></span>
            <span class="name-eng" v-text="tv.nameEng"></span>
            <span class="episode" v-text="tv.episode"></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="panel-heading">
      <span class="desc">今日播出</span>
      <div class="date">2017-05-26 周五</div>
      <a class="more" href="#">更多</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "todytv",
      data () {
        return {
          panelTodayTvArr:[],   //轮播banbner图数据
        }
      },
      methods:{
        getMovieData(data){
          Request.get("../static/lib/temp_data/common/tvAndFilmData.json",null,(data)=>{
            this.panelTodayTvArr = data.panelTodayTvArr;
            setTimeout(this.init,0)
          })
        },
        init(){
          //今日播出栏目 光标hover 与 slider 交互
          $(".today-tv-list").hover(function(){
            $('#tvshow-slide').carousel('pause');
          },function(){
            $('#tvshow-slide').carousel('cycle');
          });

          //slider 初始化
          $('.carousel').carousel({interval: 4000});

          //今日播出 剧集 hover slide切换图片
          $(".today-tv-list li").each(function(i,li){
            $(this).hover(function(){
              $.timer.set("tvshowSlide",function(){
                $('#tvshow-slide').carousel(i)
              },500)
            })
          });
        }
      },
      created(){
        this.getMovieData()
      }
    }
</script>

<style scoped>

</style>
