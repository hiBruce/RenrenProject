<template>
  <div class="row row-content">
    <div class="col-xs-2">
      <div class="side-nav-warpper">
        <ul class="side-nav">
          <li class="active">
            <router-link to="/info">资讯</router-link>
          </li>
          <li><a href="home-subtitle.html">字幕</a></li>
          <li>
            <router-link to="/filmstore">影视库</router-link>
          </li>
          <li><a href="home-ranking.html">排行榜</a></li>
          <li><a href="home-announce.html">公告</a></li>
          <li><a href="my-favourite.html">我的收藏</a></li>
          <li><a href="help.html">助力人人</a></li>
        </ul>
      </div>
    </div>
    <div class="col-xs-10">
      <div class="content-wrapper">
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
        <div class="detail-list viewType-toggle-support">
          <div class="item" v-for="list in infoListArr" v-if="filterByType(list.infoType)">
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
          pageTotal:1,       //总页码
          filterType:null,   //过滤分类
          pageController:null,     //分页控制器
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
          Request.get('../static/lib/temp_data/common/info.json',params,(data)=>{
            self.infoListArr = data.infomation;
            if(data.pageTotal){
              self.pageTotal = data.pageTotal;
              if(self.page == 1){
                self.pageInit()
              }
            }
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
      }
    }
</script>

<style scoped>

</style>
