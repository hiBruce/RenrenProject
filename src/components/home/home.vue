<template >
  <div class="ui-content">
    <!---------content------------>
    <div class="ui-content">
      <div class="ui-limit">
        <!---------search------------>
        <search-com></search-com>
        <!---------banner 行------------>
        <div class="row row-banner">
          <!---------banner组件------------>
          <div class="col-xs-9">
            <banner></banner>
          </div>
          <!---------今日播出组件------------>
          <div class="col-xs-3 col-box">
            <todaytv></todaytv>
          </div>
        </div>

        <!---------第二行------------>
        <div class="row row-content">
          <!---------热门下载------------>
          <div class="col-xs-9 col-box">
            <hotdownload></hotdownload>

          </div><!--col-xs-9 end-->

          <!---------客户端下载------------>
          <div class="col-xs-3  col-box">
            <client></client>
          </div>
        </div><!--row end-->
        <!---------第三行------------>
        <div class="row row-content">
          <!---------资讯类------------>
            <div class="col-xs-12 col-box col-infomation">
              <info></info>
            </div><!--ui-limit end-->
        </div><!--ui-content end-->
        <!----------第四行------------>
        <div class="row row-content">
          <div class="col-xs-4 col-box">
            <interactarr></interactarr>
          </div><!--col-xs-9 end-->
          <div class="col-xs-4  col-box">
            <hotshortcomarr></hotshortcomarr>
          </div>
          <div class="col-xs-4  col-box">
            <snsactivity></snsactivity>
          </div>
        </div><!--row end-->
      </div><!--ui-limit end-->
    </div><!--ui-content end-->
    <div class="ui-content content-hotfilm">
      <div class="ui-limit">
        <div class="row row-content">
          <div class="col-xs-8  col-box">
            <newpublishlist></newpublishlist>
          </div>
          <div class="col-xs-4  col-box">
            <globalhotfilm></globalhotfilm>
          </div>
        </div><!--row end-->
      </div><!--ui-limit end-->
    </div><!--ui-content end-->
    <div class="ui-content">
      <div class="ui-limit">
        <div class="row row-content">
          <div class="col-xs-12  col-box">
            <plotupdate></plotupdate>
          </div>
        </div><!--row end-->

        <div class="row row-content">
          <div class="col-xs-12  col-box">
            <friendlinks></friendlinks>
          </div>
        </div><!--row end-->

      </div><!--ui-limit end-->
    </div><!--ui-content end-->
  </div>
</template>

<script>
  import searchCom from '../common/serarch/search';
  import banner from './sub/banner';
  import todaytv from './sub/todytv';
  import hotdownload  from './sub/hotDownload';
  import client from './sub/client';
  import info from './sub/info/index';
  import interactarr from './sub/interactArr';
  import hotshortcomarr from './sub/hotShortComArr';
  import snsactivity from './sub/snsActivity';
  import newpublishlist from './sub/newPublishList';
  import globalhotfilm from './sub/globalHotFilm';
  import plotupdate   from './sub/plotUpdateArr';
  import friendlinks  from './sub/friendLinks';

  export default {
    name: 'home',
    data () {
      return {
        // todayTvList:[],    //今日播出的列表数据
        infomationObj:{},  //热门资讯等数据
        // hotShortComArr:[], //热门短评数据
        // snsActivity:{},    //社区活动数据
        // hotfilmArr:[],     //全球热映数据
        // plotUpdateArr:[],  //剧情更新数据
        // interactArr:[],    //话题互动数据
        hotInfomationArr:[], //热门资讯
        hotInfoBanner:[],   //热门资讯banner
      }
    },
    components: { searchCom,banner,todaytv,hotdownload,client,info,interactarr,hotshortcomarr,snsactivity,newpublishlist,globalhotfilm,plotupdate,friendlinks },
    methods: {
      getAllData(){
        var self = this;
        var paramsArr =[
          {
            url:"../static/lib/temp_data/data.json",
            params:null,
            method:'get'
          },
          // {
          //   url:"../static/lib/temp_data/interact.json",
          //   params:null,
          //   method:'get'
          // },
          {
            url:"../static/lib/temp_data/info.json",
            params:null,
            method:'get'
          },
        ]
        Request.all(paramsArr,function(...data){
          var result = data[0];
          self.getHomeData(result[0]['data']);
          // self.getInteractData(result[1]['data']);
          self.getHotInfoData(result[1]['data']);
          setTimeout(self.init,0)
        })
      },
      /*
       * 获取首页数据
       * @description  目前是从json文件中获取，所以一次性全部取出，如真实数据为多个接口，就需要把此方法拆分
       * */
      getHomeData(data){
        // this.snsActivity = data.snsActivity;
      },
      getMovieData(data){
        // this.plotUpdateArr = data.plotUpdateArr;
        // this.panelTodayTvArr = data.panelTodayTvArr;
        // this.hotfilmArr = data.hotfilmArr;
      },
      /*
      * 获取话题互动数据
      * */
      getInteractData(data){
        this.interactArr = data.interactArr;
      },
      /*
      * 获取热门资讯
      * */
      getHotInfoData(data){
        // this.hotShortComArr = data.hotShortComArr;
      },
      /*
      * 片单推荐
      * */
      getRecomList(data){
        this.recomList = data.recomList;
      },
      /*
      * init,初始化监听
      * */
      init(){
        $.timer.set("load",function(){

          //话题互动 动画切换功能初始化（不要修改参数）
          $(".topic-content").slideTabs({
            header:$(".topic-tabs"),
            //width:378,
            //height:455,
            direction:"V",
            carousel:true,
            timer:10000,
            ani:"slide",
            interaction:"mouseenter"
          });

          //热映 动画切换功能初始化（不要修改参数）
          $(".hotfilm-content").slideTabs({
            header:$(".hotfilm-tabs"),
            //width:378,
            //height:455,
            direction:"V",
            carousel:true,
            timer:10000,
            ani:"slide",
            interaction:"mouseenter"
          });

          //热评 自动滚动初始化（不要修改参数）
          $(".hot-comment").slideContent({
            scrollHeight:153//每次滚动的距离
          });
        },1000);
      },
      /*
      * 由于热门资讯那一排class名较多，故以js生成
      * */
      getInfoContntClass:function(key){
        var name ='';
        switch (key) {
          case 'content1':
            name="info-list-A1-banner";
            break
          case 'content2':
            name='info-list-A1';
            break;
          case 'content3':
          case 'content5':
            name='info-list-A3';
            break;
          default:
            name='';
            break

        };
        return name;
      },
      /*
        * banner图的点击方法
        * */
      open:function(url){
        window.open(url);
      },


    },
    created() {
      this.getAllData()
    },
    mounted() {

    }
  }
</script>

