<template>
  <!---------content------------>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <search-com></search-com>
      <div class="row row-content row-content-top">
        <div class="col-xs-12 col-box">
          <div class="panel">
            <div class="panel-heading">
              <span class="desc">热门资讯</span>
            </div>
            <div class="panel-body">
              <ul class="info-list info-list-A1">
                <li v-for="(info,ind) in hotInfomationArr" v-if="ind<5">
                  <div class="img-item">
                    <div class="tags">
                      <span class="name" v-text="info.name"></span>
                      <span class="type" v-text="info.type"></span>
                      <ul class="corner bottom right">
                        <li class="user" v-text="info.user"></li>
                        <li class="date" v-compute-date="info.date"></li>
                      </ul>
                      <ul class="corner bottom left">
                        <li class="source" v-text="info.source"></li>
                        <li class="view" v-compute-numbybit="info.view"></li>
                      </ul>
                    </div>
                    <img :src="info.imgUrl" alt="">
                  </div>
                  <p class="title" v-text="info.title"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <list></list>


    </div><!--ui-limit end-->
  </div>
</template>

<script>
  import searchCom from '../common/serarch/search';
  import list from '../common/list/index';
    export default {
        name: "info",
        data(){
          return {
            hotInfomationArr:[],  //热门资讯等数据
            infoListArr:[],    //资讯列表
            keyWord:"",        //资讯搜索关键字
            sort:"",           //分类条件
            page:1,            //页码
            pageTotal:1,       //总页码
            filterType:null,   //过滤分类
            pageController:null,     //分页控制器
          }
        },
        components: { searchCom,list },
      methods:{
        /*
        * 获取热门资讯
        * */
        getHotInfoData(){
          var self = this;
          Request.get('../static/lib/temp_data/common/info.json',null,(data)=>{
            self.hotInfomationArr = data.hotInfo;
          })
        },

      },
      created(){
          this.getHotInfoData()
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
