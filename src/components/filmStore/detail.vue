<template>
  <!---------content------------>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <searchcom></searchcom>
      <div class="row row-content row-content-2nd" v-if="info">
        <div class="col-xs-12">
          <div class="panel panel-film-detail">
            <div class="panel-heading">
              <h3><i class="fal fa-tv"></i> {{info.nameChs}} {{info.nameEng}}</h3>
              <p class="desc">{{info.desc}}<a href="http://www.zimuzu.tv/subtitle/53259">点击这里下载</a> 冰火YYeTs书群：239139593</p>
              <div class="admin-ctrl dropdown">
                <a class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i class="fa fa-cogs"></i> 管理 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">基本资料</a></li>
                  <li><a href="#">日志</a></li>
                  <li><a href="#">资源</a></li>
                  <li><a href="#">离线在线资源</a></li>
                  <li><a href="#">时间表</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">更新缓存</a></li>
                </ul>
              </div>

              <div class="siterank"><i class="mark" v-text="info.rank"></i>本站排名</div>
              <div class="tip">
                <p class="update">
                  <span v-compute-date="info.nextEP"></span>
                  播出第<span v-get-number="info.lastEP"></span>集
                </p>
                <p class="date" v-text="info.nextEP"></p>
              </div>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xs-9">
                  <div class="film-detail-wrapper">
                    <div class="film-cover">
                      <div class="renew" :class="getRenewClass(info.renew)"><!--三种状态已获续订class=renew-1  未知状态class=renew-0  已被取消class=renew--1 -->

                        <i class="fa fa-bookmark"></i>
                        <span class="desc">
                          <template v-if="!info.renew">
                            未知状态
                          </template>
                          <template v-else-if="info.renew==-1">
                            已被取消
                          </template>
                          <template v-else>
                            已获续订
                          </template>
                        </span>
                      </div>
                      <img :src="info.imgUrl"  alt="" />
                      <div class="favorite" @click="addfav()">
                        <i class="far fa-star"></i>
                        <span class="desc">添加到收藏夹</span>
                      </div>
                    </div>
                    <ul class="film-detail">
                      <li><span class="label">地区</span><span class="desc" v-text="info.contry"></span></li>
                      <li><span class="label">语言</span><span class="desc" v-text="info.language"></span></li>
                      <li><span class="label">电视台</span><span class="desc"><a href="#链接到对应电视台链接？" v-text="info.tvStn"></a></span></li>
                      <li><span class="label">翻译</span><span class="desc" :class="{'mark':info.translate&&info.translate.indexOf('人人影视')}" v-text="info.translate"></span></li><!--如果是人人影视字幕组，加一个mark的标签高亮（良的需求）-->
                      <li><span class="label">类型</span><span class="desc" v-text="info.tags.join('/')"></span></li>
                      <li><span class="label">首播</span><span class="desc" v-text="info.released"></span></li>
                      <li><span class="label">导演</span><span class="desc" v-text="info.director.join(' / ')"></span></li>
                      <li><span class="label">字幕翻译</span><span class="desc">3天</span></li>
                      <li><span class="label">别名</span><span class="desc" v-text="info.nameAlias.join(' / ')"></span></li>
                      <li><span class="label">編劇</span><span class="desc" v-text="info.scenarist.join(' / ')"></span></li>
                      <li><span class="label">主演</span><span class="desc" v-text="info.actors.join(' / ')"></span></li>
                    </ul>
                  </div>
                </div>
                <div class="col-xs-3 col-right">
                  <div class="grade " :class="getScoreClass(info.score)"><!--这里提供0-5星的几种class，star00零星,star05半星，star10一星，star45四星半以此类推，颜色也是根据class自动适配-->
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <span class="score" v-text="info.score"></span>
                  </div>
                  <ul class="grade-detail">
                    <li class="row">
                      <div class="col-xs-2 desc">五星</div>
                      <div class="col-xs-10 chart">
                        <div class="chart-bar">
                          <div class="bar" :style="'width:'+info.scoreList.star5.percent+'%'"></div>
                          <div class="numbers">
                            <span class="percent" v-text="info.scoreList.star5.percent+'%'"></span>
                            <span class="vote" v-text="info.scoreList.star5.count+'票'"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="row">
                      <div class="col-xs-2 desc">四星</div>
                      <div class="col-xs-10 chart">
                        <div class="chart-bar">
                          <div class="chart-bar">
                            <div class="bar" :style="'width:'+info.scoreList.star4.percent+'%'"></div>
                            <div class="numbers">
                              <span class="percent" v-text="info.scoreList.star4.percent+'%'"></span>
                              <span class="vote" v-text="info.scoreList.star4.count+'票'"></span>
                            </div>
                          </div>
                      </div>
                      </div>
                    </li>
                    <li class="row">
                      <div class="col-xs-2 desc">三星</div>
                      <div class="col-xs-10 chart">
                        <div class="chart-bar">
                          <div class="chart-bar">
                            <div class="bar" :style="'width:'+info.scoreList.star3.percent+'%'"></div>
                            <div class="numbers">
                              <span class="percent" v-text="info.scoreList.star3.percent+'%'"></span>
                              <span class="vote" v-text="info.scoreList.star3.count+'票'"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="row">
                      <div class="col-xs-2 desc">二星</div>
                      <div class="col-xs-10 chart">
                        <div class="chart-bar">
                          <div class="chart-bar">
                            <div class="bar" :style="'width:'+info.scoreList.star2.percent+'%'"></div>
                            <div class="numbers">
                              <span class="percent" v-text="info.scoreList.star2.percent+'%'"></span>
                              <span class="vote" v-text="info.scoreList.star2.count+'票'"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="row">
                      <div class="col-xs-2 desc">一星</div>
                      <div class="col-xs-10 chart">
                        <div class="chart-bar">
                          <div class="chart-bar">
                            <div class="bar" :style="'width:'+info.scoreList.star1.percent+'%'"></div>
                            <div class="numbers">
                              <span class="percent" v-text="info.scoreList.star1.percent+'%'"></span>
                              <span class="vote" v-text="info.scoreList.star1.count+'票'"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                  <ul class="state">
                    <li class="view">
                      <span class="label">浏览次数</span>
                      <span class="count" v-compute-numbybit="info.viewed"></span>
                    </li>
                    <li class="fav">
                      <span class="label">收藏次数</span>
                      <span class="count" v-compute-numbybit="info.collected"></span>
                    </li>
                  </ul>
                  <div class="tograde">
                    <div class="stars">
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                    <p class="desc">请您打分 已有<span class="count">40244</span>人打分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-9">
          <div class="panel-inner film-brief">
            <div class="panel-inner-heading">
              <span class="desc">剧情简介 </span>
              <span class="right">
								<a class="ctrl brief-showall" @click="brief_showall()">展开全文 <i class="fa fa-chevron-circle-down"></i></a>
							</span>
            </div>
            <div class="panel-inner-body">
              <div class="brief-wrapper">
                <div class="brief">
                  <p class="t-re-l5">版权方要求，本站仅提供字幕，请站内搜索下载</p>
                  <p v-for="content in info.intro" v-text="content"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-inner">
            <div class="panel-inner-heading">
              <span class="desc">封面剧照 </span>
              <span class="right" >一共有{{info.relativPicArr.length}}张图片
								<a @click="pic_showall()" class="ctrl pic-showall">展开全部 <i class="fa fa-chevron-circle-down"></i></a>
								<a href="#" class="ctrl">添加图片 <i class="fa fa-plus-circle"></i></a>
							</span>
            </div>
            <div class="panel-inner-body">
              <ul class="related-pic">
                <li v-for="pic in info.relativPicArr "><img :src="pic" alt="" /></li>
              </ul>
            </div>
          </div>
          <ul class="down-way">
            <li>
              <div class="item">
                <i class="fa fa-language"></i>
                <span class="desc">字幕下载</span>
              </div>
            </li>
            <li>
              <div class="item">
                <i class="fa fa-film"></i>
                <span class="desc">本片资源</span>
              </div>
            </li>
          </ul>

          <div class="panel-inner panel-inner-episode" >
            <div class="panel-inner-heading">
              <span class="desc">追剧助手</span>
              <span class="episode-info">{{info.nameChs}} 共<span class="total" v-text="info.episodeTotal"></span>集 其中<span class="left" v-text="viewedList?(info.episodeTotal- viewedList.length):info.episodeTotal"></span>集未观看</span>
              <span class="right" >
								<span class="ctrl episode-view">视图切换 <i class="fa fa-expand-wide"></i></span>
								<a href="#" class="ctrl">管理剧 <i class="fa fa-cog"></i></a>
							</span>
            </div>
            <div class="panel-inner-body">
              <div class="episode-wrapper">
                <div class="side">
                  <div class="scroll-wrapper">
                    <div class="scroll">
                      <ul class="nav" role="tablist" v-if="episodeList.length>0">
                        <li role="presentation" v-for="(episode,ind) in episodeList" :class="{'active':!ind}"><a :href="'#sesontab-0'+(ind+1)" aria-controls="sesontab-01" role="tab" data-toggle="tab" v-text="'第'+(episodeList.length-ind)+'季'"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="cont">
                  <div class="scroll-wrapper">
                    <div class="tab-content scroll">
                      <div role="tabpanel" class="tab-pane active" :id="'sesontab-0'+(ind+1)" v-for="(episode,ind) in episodeList">
                        <ul class="episode-list">
                          <li v-for="(content,index) in episode">
                            <div class="item" :class="content.viewed?'viewed':''">
                              <p class="desc-season" v-text="'S'+getSeasonAndEpisondeLen(ind,episodeList)"></p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论" v-text="'E'+getSeasonAndEpisondeLen(index,episode)"></a></p>
                             <template v-if="judgeBeforeTime(content.publishTime)">
                               <p class="date" v-compute-date="content.publishTime"></p>
                             </template>
                              <template v-else>
                                <div class="view-mark" :data-original-title="content.viewed?'已看过':'标记已看过'"></div>
                              </template>
                            </div>
                          </li>

                        </ul>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="sesontab-02">
                        <ul class="episode-list">
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E14</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E13</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E12</a></p>
                              <div class="view-mark" data-original-title="已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E11</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E10</a></p>
                              <div class="view-mark" data-original-title="已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E09</a></p>
                              <div class="view-mark" data-original-title="已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item viewed">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E08</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item viewed">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E07</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E06</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E05</a></p>
                              <div class="view-mark" data-original-title="已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E04</a></p>
                              <div class="view-mark" data-original-title="已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E03</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E02</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>
                          <li>
                            <div class="item">
                              <p class="desc-season">S06</p>
                              <p class="desc-episode"><a href="#" title="进入单集讨论">E01</a></p>
                              <div class="view-mark" data-original-title="标记已看过"></div>
                            </div>
                          </li>

                        </ul>

                      </div>
                      <div role="tabpanel" class="tab-pane" id="sesontab-03">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="alert alert-info alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>提示!</strong> 点击追剧助手中各集链接进入单集讨论！
          </div>


          <div class="panel-inner">
           <comment type="3"></comment>
          </div>

        </div>
        <div class="col-xs-3 col-sidebar">
          <div class="siderbar-wrapper">
              <relativefilm :id="$route.params.id"></relativefilm>
              <relativeinfo :id="$route.params.id"></relativeinfo>
              <releativeqd :id="$route.params.id"></releativeqd>
              <activemem :id="$route.params.id"></activemem>
          </div>
        </div>
      </div><!--row end-->
    </div><!--ui-limit end-->
  </div><!--ui-content end-->

</template>

<script>
  import searchcom from '../common/serarch/search';
  import comment from '../common/comment/main';
  import relativefilm from './sub/relativeFilm';
  import relativeinfo from '../infomation/sub/relativeInfo';
  import releativeqd from './sub/relativeQD';
  import activemem from './sub/activeMem'

    export default {
      name: "detail",
      data(){
        return {
          info:'',
          episodeList:[],
          viewedList:''
        }
      },
      components:{searchcom,comment,relativefilm,relativeinfo,releativeqd,activemem},
      methods:{
        init(){
          function HideModalTips(){
            $.timer.set("modal-tips",function(){
              $('#moda-tips').modal('hide');
            },3000)
          }
          //评分系统hover事件
          $(".tograde .stars .fa-star").on("mouseenter",function(){

            $(this).prevAll().add(this).removeClass("far");
            $(this).prevAll().add(this).addClass("active fas");
            $(this).nextAll().removeClass("active fas");
            $(this).nextAll().addClass("far");

            /*
                $(this).prevAll().add(this).removeClass("fa-star-o");
                $(this).prevAll().add(this).addClass("active fa-star");
                $(this).nextAll().removeClass("active fa-star");
                $(this).nextAll().addClass("fa-star-o");*/
          });
          //评分系统click事件
          $(".tograde .stars .fa-star").on("click",function(){
            $(this).addClass("this");
            $(this).siblings().removeClass("this");
            $(this).parent().addClass("tograde-done");
            $(this).prevAll().add(this).removeClass("far");
            $(this).prevAll().add(this).addClass("active fas");
            $(this).nextAll().removeClass("active fas");
            $(this).nextAll().addClass("far");
          });
          //评分系统光标out事件
          $(".tograde .stars").on("mouseleave",function(){
            if($(this).hasClass("tograde-done")){
              $(this).find(".this").prevAll().add(".this").removeClass("far").addClass("fas active");
              $(this).find(".this").nextAll().removeClass("active fas").addClass("far");
            }else{
              $(this).find(".fa-star").removeClass("active fas").addClass("far");
            }
          });
          $(function(){

          })

          //页面全部加载完毕后，处理简介和相关图片按钮隐藏或显示
          $(window).load(function(){
            $.timer.set("brief",function(){
              if($(".brief").height()>$(".brief-wrapper").height()){
              }else{
                $(".showall").addClass("hidden");//当简介高度小于容器最大高度时候隐藏“显示所有简介”

              }
              if($(".related-pic").children().size()<6){
                $(".pic-showall").addClass("hidden");//当相关图片少于6张时候，隐藏“显示所有图片”
              }
              //alert($(".brief").height()+" "+$(".brief-wrapper").height())
            },1000)
          });
        },
        brief_showall(){
          if($('.brief-wrapper').hasClass('brief-all')){
            $(".brief-showall").html("展开全文 <i class='fa fa-chevron-circle-down'></i>")
            $('.brief-wrapper').removeClass('brief-all');
          }else{
            $(".brief-showall").html("折叠全文 <i class='fa fa-chevron-circle-up'></i>")
            $('.brief-wrapper').addClass('brief-all');
          }
        },
        pic_showall(){
            if($(".related-pic").hasClass("related-pic-all")){
              $(".pic-showall").html("展开全部 <i class='fa fa-chevron-circle-down'></i>")
              $(".related-pic").removeClass("related-pic-all")
            }else{
              $(".pic-showall").html("折叠全部 <i class='fa fa-chevron-circle-up'></i>")
              $(".related-pic").addClass("related-pic-all")
            }
          },
       addfav(){
          if($(".favorite").hasClass("active")){
            $(".favorite").removeClass("active").html("<i class='far fa-star'></i><span class='desc'> 添加到收藏夹</span>");
          }else{
            $(".favorite").addClass("active").html("<i class='fas fa-star'></i><span class='desc'> 已添加收藏夹</span>");

          }
        },
         getInfo(){
          var self = this;
          var params ={
            id:this.$route.params.id
          };
          Request.get('../static/lib/temp_data/film-detail.json',params,(data)=>{
            self.info = data.info;
            self.episodeList = data.info.episodeList.reverse();
            self.episodeList.forEach(function(ele,i){
              ele = ele.reverse()
            })
            self.getUserViewedList();
            setTimeout(function(){
              self.init();
            },0)
          })
        },
        getRenewClass(status){
          var cl='';
          if(status){
              if(status==-1){
                cl ='renew--1'
              }else{
                cl = 'renew-1'
              }
          }else{
            cl = 'renew-0'
          };
          return cl;
        },
        getScoreClass(sc){
          if(sc){
            return 'star'+Math.floor(sc)*5
          }
        },
        getUserViewedList(){
          var self = this;
          Request.get('../static/lib/temp_data/film-detail.json',null,(data)=>{
            self.viewedList = data.viewedList;
            self.episodeList.forEach(function(eles,i){
              eles.forEach(function(ele,i){
                if(self.viewedList.indexOf(ele.id)>=0){
                  ele.viewed = true;
                }
              })
            });
            setTimeout(function(){
              //初始化追剧助手中的自定义滚动条
              $(".scroll-wrapper").mCustomScrollbar({
                autoHideScrollbar:"auto",
                callbacks:{
                  onScrollStart: function(){$("body").css({overflow:"hidden"})},//滚动开始，屏蔽body滚动
                  onScroll: function(){$.timer.set("scrollWrapper",function(){$("body").css({overflow:""})},1000);}//滚动完毕，一秒后重新启用body滚动
                }
              });


              //每次点击追剧助手季导航，内容区自定义滚动条重置为0
              $(".episode-wrapper .nav li").on('click',function(){
                $(".cont .scroll-wrapper").mCustomScrollbar("scrollTo",0);
              });
              //追剧助手视图切换
              $(".episode-view").on("click",function(){
                $(".episode-wrapper").toggleClass("episode-wrapper-DH");
                $(".episode-view .fa").toggleClass("fa-expand-wide fa-compress-wide");
              });
              //追剧助手标记或取消已看过
              $(".view-mark").on("click",function(){
                if($(this).parent().hasClass("viewed")){
                  $(this).parent().removeClass("viewed");
                  $(this).attr("data-original-title","标记已看过");
                  $(".episode-info .left").text(parseInt($(".episode-info .left").text())+1)//点击时候标题未观看数字+1

                }else{
                  $(this).parent().addClass("viewed");
                  $(this).attr("data-original-title","已看过");
                  $(".episode-info .left").text(parseInt($(".episode-info .left").text())-1)//点击时候标题未观看数字-1
                }
              })
              //追剧助手checkbox提示信息初始化
              $('.view-mark').tooltip({
                delay:{ "show": 1000, "hide": 500 },
                placement:"top"
              });
              //追剧助手集信息提示初始化
              $('.desc-episode a').tooltip({
                delay:{ "show": 1000, "hide": 500 },
                placement:"top"
              });

            },1000)
          })
        },
        getSeasonAndEpisondeLen(ind,content){
          var len = content.length;
          var str;
          if(len-ind<10){
            str= '0'+(len-ind)
          }else{
            str = len-ind;
          };
          return str;
        },
        judgeBeforeTime(time){
          var publishStamp =  Date.parse(new Date(time));
          var nowStamp =   Date.parse(new Date());
          if(publishStamp>nowStamp){
            return true
          }else{
            return false
          }
        }
      },
      created(){
        this.getInfo();
      }
    }
</script>

<style scoped>

</style>
