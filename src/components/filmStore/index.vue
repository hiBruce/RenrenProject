<template>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <searchcom></searchcom>

      <div class="row row-content row-content-2nd">
        <!---------热门下载------------>
        <div class="col-xs-12 col-box">
          <hotdownload></hotdownload>
        </div>
      </div>
      <div class="row row-content">
        <div class="col-xs-3">
          <div class="filter-wrapper">
            <ul class="tips">
              <li class="login-tip">从您<i class="mark">3天前</i>登录以来</li>
              <li>更新电视剧<i class="mark">1</i>部</li>
              <li>开播新剧<i class="mark">44</i>部</li>
              <li>新发布电影<i class="mark">0</i>部</li>
            </ul>
            <div class="filter-btn">
              <p class="title">信息快速查询</p>
              <ul class="btn-wrapper">
                <li><button class="btn">播出时间表</button></li>
                <li><button class="btn">新季回归表</button></li>
                <li><button class="btn">续订和取消</button></li>
                <li><button class="btn">已开播新剧</button></li>
                <li><button class="btn">未开播新剧</button></li>
                <li><button class="btn">热门新剧</button></li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">类别</p>
              <ul class="select-wrapper">
                <li><a href="#">电影</a></li><li >影视剧</li>
                <li>公开课</li><li>纪录片</li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">国家及地区</p>
              <ul class="select-wrapper">
                <li>美国</li><li>大陆</li><li>日本</li>
                <li>韩国</li><li>英国</li><li>香港</li>
                <li>台湾</li><li>印度</li><li>法国</li>
                <li>德国</li><li>加拿大</li><li>西班牙</li>
                <li>泰国</li><li>意大利</li><li>新加坡</li>
                <li>俄罗斯</li><li>墨西哥</li><li>德国</li>
                <li>澳大利亚</li><li>巴西</li><li>越南</li>
                <li>土耳其</li><li>埃及</li><li>其他</li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">类型</p>
              <ul class="select-wrapper">
                <li v-for="name in filmtype" v-text="name" @click="setType(name)" :class="{'active':name==type}"></li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">年代</p>
              <ul class="select-wrapper">
                <li>2017</li><li>2016</li><li>2015</li><li>2014</li><li>2013</li><li>2012</li>
                <li>2011</li><li>2010</li><li>2009</li><li>2008</li><li>2007</li><li>2006</li>
                <li>2005</li><li>2004</li><li>2003</li><li>2002</li><li>2001</li><li>2000</li>
                <li>1999</li><li>1998</li><li>1997</li><li>1996</li><li>1995</li><li>1994</li>
                <li>1993</li><li>1992</li><li>1991</li><li>1990</li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">电视台</p>
              <ul class="select-wrapper">
                <li>A&E</li><li>ABC</li><li>ABC Family</li>
                <li>Adult Swim</li><li>Amazon</li><li>AMC</li>
                <li>BBC</li><li>BeeTV</li><li>Cartoon Network</li>
                <li>CBS</li><li>Ch</li><li>Channel 4</li>
                <li>Cinemax</li><li>CMT</li><li>Comedy Central</li>
                <li>Crackle</li><li>CTV</li><li>CW</li>
                <li>Disney</li><li>EPIX</li><li>FOX</li>
                <li>FREEFORM</li><li>FX</li><li>Globaltv</li>
                <li>HallMark Channel</li><li>HBO</li><li>Hulu</li>
                <li>ITV</li><li>JTBC</li><li>KBS</li>
                <li>MBC</li><li>MTV</li><li>My Lifetime</li>
                <li>NBC</li><li>Netflix</li><li>NHK</li>
                <li>Nickelodeon</li><li>NTV</li><li>OCN</li>
                <li>OWN</li><li>PBS</li><li>SBS</li>
                <li>Showtime</li><li>Sky</li><li>Sky1</li>
                <li>Spike</li><li>Stan</li><li>Starz</li>
                <li>SundanceTV</li><li>Syfy</li><li>TBS</li>
                <li>TLC</li><li>TNT</li><li>TV LAND</li>
                <li>tvN</li><li>USA</li><li>WGN</li>
                <li>WOWOW</li><li>朝日</li><li>东京台</li>
                <li>富士</li><li>国家地理频道</li><li>历史频道</li>
                <li>探索频道</li><li>其他</li>
              </ul>
            </div>
            <div class="filter">
              <p class="title">排序</p>
              <ul class="select-wrapper">
                <li>按照最后更新</li><li>按發布日期</li><li>按排名</li>
                <li>按評分</li><li>按點擊率</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xs-9">
          <div class="content-wrapper">
            <div class="content-ctrl-wrapper">
              <div class="list-search">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="请输入您要搜索的内容...">
                  <span class="input-group-btn">
							        <button class="btn btn-default" type="button"><i class="fa fa-search"></i> 搜索</button>
							      </span>
                </div>
              </div>
              <span class="listnum-ctrl">
								<span class="desc">按</span>
								<select class="form-control">
									<option value="">时间</option>
									<option value="">点击</option>
									<option value="">评论数</option>
								</select>
								<span class="desc">排序</span>
							</span>
              <span class="listnum-ctrl hidden">
								<span class="desc">每页显示</span>
								<select class="form-control">
									<option value="20">20</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
								<span class="desc">条</span>
							</span>
              <span class="view-ctrl viewType-toggle"><i class="fa fa-th"></i><span class="desc">切换缩略图视图</span></span>
            </div>


            <div class="film-list viewType-toggle-support" v-if="filmList.length>0">
                  <div class="item" v-for="(list,ind) in filmList" v-if="ind<page*6">
                    <div class="img-item">
                      <a href="#"><img :src="list.imgUrl"/></a>
                      <div class="score" v-text="list.score"></div>
                    </div>
                    <div class="film-info">
                      <div class="siterank"><i class="mark" v-text="list.rank"></i>本站排名</div>
                      <p class="title">
                        <router-link :to="ind%2?'/filmstore/episode/111':'/filmstore/1111'">
                          <span class="chs" v-text="list.nameChs"></span>
                          <span class="eng" v-text="list.nameEng"></span>
                          <span class="year" v-if="list.renew" v-get-year="list.renew"></span>
                          <!--<span class="season">第7季连载中</span>-->
                        </router-link>
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
            <div class="film-list viewType-toggle-support" v-else>
              暂无数据
            </div>

            <ul class="pagination film-list-pagination">
            </ul>
          </div><!--content-wrapper end-->


        </div><!--col-xs-9 end-->
      </div><!--row end-->

    </div><!--ui-limit end-->
  </div>
</template>

<script>
  import searchcom from '../common/serarch/search';
  import hotdownload from './sub/hotDownLoad';

    export default {
      name: "film",
      data(){
        return {
          page:1,
          filmList:[],
          pageTotal:3, // 临时写死总页码
          type:'',     //类型
          filmtype:[]
        }
      },
      components: {searchcom,hotdownload},
      methods:{
        getListData(page){
          var self = this;
          var params ={
              page:page || this.page,
            type:this.type
          };
          Request.get('../static/lib/temp_data/common/tvAndFilmData.json',params,(data)=>{
            if(self.type){
              self.filmList =[];
              self.filmList =data.newPublishList.filter(function(ele,i){
                return ele.tags.indexOf(self.type)>=0;
              })
            }else{
              self.filmList = data.newPublishList;
            }
            if(self.filmList.length>0){
              self.updatePage(self.pageTotal)
            }else{
              self.updatePage(0)
            }

          })
        },
        getType(){
          Request.get("../static/lib/temp_data/homeFilmList.json",null,(data)=>{
            this.filmtype  = data.filmtype
          })
        },
        setType(type){
          this.type = type;
          this.pageTotal = 1; //如果有类型，则将总页码设置为1
          this.getListData(1)
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
      },
      created(){
        this.getType()
        this.getListData()
      },
      mounted(){
        this.pageInit()
      }
    }
</script>
