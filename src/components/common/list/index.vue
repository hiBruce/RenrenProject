<template>
  <div class="row row-content">
    <div class="col-xs-2">
      <div class="side-nav-warpper">
        <ul class="side-nav">
          <li  @click="changeTab(0)" :class="{'active':!tab}">
            <a href="javascript:void(0)">资讯</a>
          </li>
          <li @click="changeTab(1)" :class="{'active':tab==1}"><a href="javascript:void(0)">字幕</a></li>
          <li @click="changeTab(2)" :class="{'active':tab==2}">
            <a href="javascript:void(0)">影视库</a>
          </li>
          <li @click="changeTab(3)" :class="{'active':tab==3}"><a href="javascript:void(0)">排行榜</a></li>
          <li @click="changeTab(4)" :class="{'active':tab==4}"><a href="javascript:void(0)">公告</a></li>
          <li @click="changeTab(5)" :class="{'active':tab==5}"><a href="javascript:void(0)">我的收藏</a></li>
          <li @click="changeTab(6)" :class="{'active':tab==6}"><a href="javascript:void(0)">助力人人</a></li>
        </ul>
      </div>
    </div>
    <div class="col-xs-10">
      <div class="content-wrapper">
       <div v-if="!tab">
         <div class="content-ctrl-wrapper">
           <div class="list-search">
             <div class="input-group">
               <input type="text" class="form-control" v-model="keyWord" placeholder="请输入您要搜索的内容...">
               <span class="input-group-btn">
                  <button @click="searchByKeyword" class="btn btn-default" type="button"><i class="fa fa-search"></i> 搜索</button>
                </span>
             </div>
           </div>
           <span class="listnum-ctrl">
								<span class="desc">按</span>
								<select class="form-control" v-model="sort">
									<option value="0">时间</option>
									<option value="1">点击</option>
									<option value="2">评论数</option>
								</select>
								<span class="desc">排序</span>
							</span>
           <span class="filter-ctrl">
                <i class="fa fa-filter"></i><span class="desc">过滤</span>
                <div class="switch-btn switch-btn-sm active">
                  <div class="switch-circle"></div>
                </div>
            </span>
           <span class="view-ctrl viewType-toggle" style="display: block;"><i class="fa fa-th"></i><span class="desc">切换缩略图视图</span></span>
         </div>
         <div class="filter-simple-wrapper">
           <ul class="filter-simple filter-simple-info">
             <li :class="filterType ===null ?'active':''" @click="changeType(null)"><a href="javascript:void(0);">全部</a></li>
             <li :class="filterType ===0 ?'active':''" @click="changeType(0)"><a href="javascript:void(0);">新闻资讯</a></li>
             <li :class="filterType ===1 ?'active':''" @click="changeType(1)"><a href="javascript:void(0);">影评剧评</a></li>
             <li :class="filterType ===2 ?'active':''" @click="changeType(2)"><a href="javascript:void(0);">片单推荐</a></li>
             <li :class="filterType ===3 ?'active':''" @click="changeType(3)"><a href="javascript:void(0);">新剧推荐</a></li>
             <li :class="filterType ===4 ?'active':''" @click="changeType(4)"><a href="javascript:void(0);">话题互动</a></li>
             <li :class="filterType ===5 ?'active':''" @click="changeType(5)"><a href="javascript:void(0);">社区活动</a></li>
           </ul>
         </div>
       </div>
        <div class="detail-list viewType-toggle-support" v-if="infoListArr.length>0">
          <!--影视库模板-->
          <template v-if="tab==2">
            <div class="film-list viewType-toggle-support" >
              <div class="item" v-for="(list,ind) in infoListArr" v-if="ind<page*6">
                <div class="img-item">
                  <a href="#"><img :src="list.imgUrl"/></a>
                  <div class="score" v-text="list.score"></div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark" v-text="list.rank"></i>本站排名</div>
                  <p class="title">
                    <span class="chs" v-text="list.nameChs"></span>
                    <span class="eng" v-text="list.nameEng"></span>
                    <span class="year" v-if="list.renew" v-get-year="list.renew"></span>
                    <span class="season">第7季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation" v-text="list.contry"></span>
                    <span class="comp" v-if="list.tvStn" v-text="list.tvStn"></span>
                    <span class="type" v-text="list.type"></span>
                    <span class="class" v-if="list.tags" v-text="list.tags.join('/')"></span>
                  </p>
                  <p class="stat">
                    <span class="view" ><span v-compute-numbybit="list.view"></span>次浏览</span>
                    <span class="fav">
                      <span v-compute-numbybit="list.collected"></span>次收藏
                    </span>
                    <span class="start">{{list.released}} 首播</span>
                  </p>
                  <p class="desc">
                    <span v-text="list.desc"></span>
                      <!--<a href="http://www.zimuzu.tv/subtitle/53143">点击这里查看</a>-->
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：<span v-compute-date="list.renew"></span></span>
                  </p>
                </div>
              </div><!--item end-->
            </div>
          </template>
          <!--资讯模板-->
          <template v-else>
            <div class="item" v-for="(list,ind) in infoListArr" v-if="filterByType(list.infoType) && ind<page*6">
              <div class="img-item">
                <router-link :to="'/info/'+list.id">
                  <template v-if="typeof list.imgUrl == 'string'">
                    <img :src="list.imgUrl" alt="">
                  </template>
                  <template v-else>
                    <img :src="img" v-for="img in list.imgUrl" alt="">
                  </template>
                </router-link>
                <div class="type" v-text="list.type"></div>
              </div>
              <div class="detail-info">
                <router-link :to="'/info/'+list.id">
                  <p class="title" v-text="list.title">
                  </p>
                </router-link>
                <p class="sub-title" v-if="list.subTitle" v-text="list.subTitle">
                </p>
                <p class="check">
                  <span class="fav" ><span v-compute-numbybit="list.fav"></span>次收藏</span>
                  <span class="view"><span v-compute-numbybit="list.viewed"></span>次浏览</span>
                </p>
                <p class="info">
                  <span class="user" v-text="'By '+list.author"></span>
                  <span class="date" v-compute-date="list.date"></span>
                </p>
              </div>
            </div><!--item end-->
          </template>
        </div>
        <div v-else style="text-align:center;margin-top:20px;">
          暂无数据
        </div>
        <ul class="pagination film-list-pagination">
        </ul>
      </div>
      <!-- Tab panes -->
    </div><!--col-xs-9 end-->
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
        return {
          infoListArr:[],    //资讯列表
          keyWord:"",        //资讯搜索关键字
          sort:"",           //分类条件
          page:1,            //页码
          pageTotal:0,       //总页码
          filterType:null,   //过滤分类
          pageController:null,     //分页控制器
          tab:0,              //tab切换记录器
          searchUrl:'../static/lib/temp_data/common/info.json', //暂存list数据请求地址
        }
      },
      methods:{
        /*
      * 获取列表数据
      * */
        getListData(){
          var self = this;
          var params={
            keyword :this.keyWord,
            sort:this.sort,
            page:this.page
          };
          /*
          * 假数据设置分页总页码
          * */
          this.pageTotal = 3;

          Request.get(this.searchUrl,params,(data)=>{
            self.infoListArr = data.infomation||data.newPublishList;
            self.updatePage(self.pageTotal)
          })
        },
        searchByKeyword(){
          this.page =1;
          this.getListData()
        },
        /*
        * 分页
        * */
        pageInit:function(){
          var self = this;
          this.pageController = null;
          this.pageController = new Pagination({
            container: $(".pagination"),
            pageTotal: this.pageTotal,
            callback: function (page) {
              self.page = page;
              self.getListData()
            }
          });
        },
        /*
        * 更新分页
        * */
        updatePage:function(pageTotal){
          this.pageController.update({
            pageTotal:pageTotal,
            nowPage:this.page
          })
        },
        /*
        * 切换左侧菜单
        * */
        changeTab(num){
          this.page =1;
          this.tab = num;
          var url;
          switch(num){
            case 0:
              url='../static/lib/temp_data/common/info.json';
              break;
            case 1://暂无数据
              this.infoListArr=[];
              this.updatePage(0)
              break;
            case 2:
              url ='../static/lib/temp_data/common/tvAndFilmData.json';
              break;
            case 3:
              this.infoListArr=[];
              this.updatePage(0)
              break;
            case 4://暂无数据
              this.infoListArr=[];
              this.updatePage(0)
              break;
            case 5://暂无数据
              this.infoListArr=[];
              this.updatePage(0)
              break;
            case 6://暂无数据
              this.infoListArr=[];
              this.updatePage(0)
              break;
          }
          if(url){
            this.searchUrl = url;
            this.getListData()
          }
        },
        /*
        * 切换分类查询
        * 由于type是中文，找不到可以传递的参数字段，所以此处不做切换，到真实数据时应该是有参数传递的，加上传递参数即可
        * */
        changeType(type){
          this.filterType = type;
          this.page =1;
          this.getListData()
        },
        /*
        * 过滤分类
        * @description 此处最好能是由后台来保证，前端只负责渲染，现在为假数据，分页不做，所以没关系；如果有了真实数据后，还由前端过滤，那么分页就会失效
        * */
        filterByType(type){
          if(this.filterType===null){
            return true
          }else{
            if(type == this.filterType ){
              return true
            }else{
              return false
            }
          }
        }
      },
      created(){
          this.getListData();

      },
      mounted(){
        this.pageInit()
      }
    }
</script>

<style scoped>

</style>
