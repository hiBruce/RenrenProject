<template>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <search-com></search-com>
      <div class="row row-content row-content-2nd" v-if="infoDeatail">
        <div class="col-xs-9 col-box">
          <div class="infomation-content">
            <div class="title">
              <h3 v-text="infoDeatail.title"></h3>
            </div>
            <div class="sub-title">
              <img :src="infoDeatail.avatar" alt="" />
              <span class="user" v-text="infoDeatail.author"></span>
              <span class="user-class">
                <template v-if="infoDeatail.memberClass == 1">
                  初级会员
                </template>
                 <template v-if="infoDeatail.memberClass == 2">
                  中级会员
                </template>
              </span>
              <span class="date" v-compute-date="infoDeatail.publishTime"></span>
              <div class="info">
                <span class="type" v-text="infoDeatail.type"></span>
                <span class="view" title="阅读数" v-compute-numbybit="infoDeatail.viewed"></span>
              </div>
              <span class="ctrl"><!--普通用户没有编辑删除，只有收藏-->
								<a href="#" class="fav"><i class="fa fa-star"></i>收藏</a>
								<template v-if="infoDeatail.memberClass>0">
                  <a href="#">编辑</a>
								  <a href="#" data-toggle="modal" data-target="#delete">删除</a>
                </template>
							</span>
            </div>
            <hr />
            <div class="well" v-text="infoDeatail.sub">
            </div>
            <template  v-if="infoDeatail.hotvote&& infoDeatail.hotvote.length>0">
              <ul class="process-wrapper">
                <li v-for="vote in infoDeatail.hotvote">
                  <p v-text="vote.name"></p>
                  <div class="progress"><div class="progress-bar" role="progressbar"
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="'width:'+ vote.process+'%'"></div></div>
                  <div class="vote"><i class="fa fa-check"></i></div>
                </li>
                <!--这里可以显示任意数量的投票项目，但是在首页上，请放置top6以内的投票项目，预置空间不够大，无法放置更多投票项目-->
              </ul>
              <button class="btn btn-primary btn-vote">确定投票</button>
            </template>

            <template v-if="infoDeatail.vote">
              <img :src="infoDeatail.vote.imgUrl" alt="" />
              <video width="90%" controls v-if="infoDeatail.vote.videoUrl">
                <source :src="infoDeatail.vote.videoUrl" type="video/mp4">
                您的浏览器不支持Video标签。
              </video>
              <ul class="team-wrapper team-t5">
                <li class="team" :class="getTeamClass(ind)" v-for="(vote,ind) in infoDeatail.vote.option">
                  <div class="progress">
                    <div class="progress-bar" :style="'height:'+vote.vote+'%'"></div>
                    <p class="count" v-compute-numbybit="vote.count"></p>
                  </div>
                  <p class="desc" v-text="vote.desc"></p>
                  <div class="vote"><i class="fa fa-check"></i></div>
                </li>
              </ul>
              <button class="btn btn-primary btn-vote">确定投票</button>
            </template>
           <template v-if="infoDeatail.vote2">
             <p v-text="infoDeatail.vote2.sub"></p>
             <img :src="infoDeatail.vote2.imgUrl" alt="" />
             <form action="">
               <ul class="team-wrapper team-t2">
                 <li class="team" :class="getTeamClass(ind)"  v-for="(vote,ind) in infoDeatail.vote2.option">
                   <div class="progress">
                     <div class="progress-bar" :style="'height:'+vote.percent+'%'"></div>
                     <p class="count"  v-compute-numbybit="vote.count"></p>
                   </div>
                   <div class="vote"><i class="fa fa-check"></i></div>
                   <p class="desc" v-text="vote.name"></p>
                 </li>
               </ul>
               <button class="btn btn-primary btn-vote">确定投票</button>
             </form>
           </template>
            <div class="content_wrap" v-html="infoDeatail.content">

            </div>
            <div class="panel">
              <div class="panel-heading">
								<span class="left" >
									<a href="#" class="ctrl button-toggle"  data-toggle="modal" data-target="#self-comment"><i class="fa fa-user-circle"></i> 显示我的评论</a>
								</span>
                <span class="desc">评论</span>
              </div>
              <div class="panel-body">
                <div class="comment-edit-wrapper">
                  <textarea class="comment-textarea" v-model="commentContent" placeholder="请填写评论..." rows="3"></textarea>
                  <button class="comment-btn btn" @click="submitComment"><span class="desc">发表评论</span></button>
                </div>
                <div class="comment-list">
                  <div class="comment-item" v-for="(comment,ind) in commentList">
                    <div class="comment-title">
                      <div class="comment-title-left">
                        <div class="user-head">
                          <img :src="comment.avatar" alt=""/>
                        </div>
                        <a href="#" class="user-name" v-text="comment.author"></a>
                        <span class="user-class " :class="'user-class-'+comment.userClass">
                          <template v-if="!comment.userClass">
                              普通会员
                          </template>
                          <template v-else-if="comment.userClass ==1">
                              初级会员
                          </template>
                          <template v-else-if="comment.userClass ==2">
                              中级会员
                          </template>
                          <template v-else-if="comment.userClass ==3">
                              高级会员
                          </template>
                          <template v-else-if="comment.userClass ==5">
                              黄金会员
                          </template>
                          <template v-else-if="comment.userClass ==6">
                              至尊会员
                          </template>
                        </span>
                        <span class="admin-ctrl"><!--管理员菜单-->
													<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
													<a href="#"><i class="fa fa-edit"></i>编辑</a>
													<a href="#"><i class="fa fa-trash"></i>删除</a>
													<a href="#"><i class="fa fa-ban"></i>禁止</a>
												</span>
                      </div>
                      <div class="comment-title-right">
                        <span class="date"  v-compute-date="comment.time"></span>
                        <span class="top" v-if="comment.top">置顶</span>
                        <span class="hot" v-if="comment.hot">Hot</span>
                        <span class="floor">我的评论</span>
                        <span class="floor">#{{ind+3}}</span>
                        <!--置顶有三种方式，hot置顶，top管理员置顶,self置顶，每种置顶仅显示两条。--->
                      </div>
                    </div>
                    <div class="comment-body">
                      <p v-html="comment.content"></p>
                    </div>
                    <div class="comment-ctrl">
                      <a class="comment-showSub" data-num="346"><i class="fa fa-comments"></i><span class="desc" v-text="comment.recommentNum+'条评论'"></span></a>
                      <a href="#"><i class="fa fa-reply"></i>评论</a>
                      <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge" v-text="comment.agreedNum"></span></a>
                      <a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge"  v-text="comment.opposeNum"></span></a>
                      <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                    </div>

                    <div class="comment-sub">
                      <div class="loading-inner hidden"><!--动态加载数据时的loading效果，把hidden class删除看效果-->
                        <div class="loading-center">
                          <div class="loading-center-absolute">
                            <div class="object" id="object_one"></div>
                            <div class="object" id="object_two"></div>
                            <div class="object" id="object_three"></div>
                            <div class="object" id="object_four"></div>
                          </div>
                        </div>
                      </div>
                     <template v-if="comment.comment && comment.comment.length>0">
                       <div class="comment-item" v-for="userComment in comment.comment">
                         <div class="comment-title">
                           <div class="comment-title-left">
                             <div class="user-head">
                               <img :src="userComment.avatar" alt=""/>
                             </div>
                             <a href="#" class="user-name">{{userComment.author}}</a>回复 {{userComment.recomment}}
                             <span class="user-class" :class="'user-class-'+comment.userClass">
                                <template v-if="!comment.userClass">
                                    普通会员
                                </template>
                                <template v-else-if="comment.userClass ==1">
                                    初级会员
                                </template>
                                <template v-else-if="comment.userClass ==2">
                                    中级会员
                                </template>
                                <template v-else-if="comment.userClass ==3">
                                    高级会员
                                </template>
                                <template v-else-if="comment.userClass ==5">
                                    黄金会员
                                </template>
                                <template v-else-if="comment.userClass ==6">
                                    至尊会员
                                </template>
                             </span>
                             <span class="comment-show">
															<a href="#" data-toggle="modal" data-target="#dialogue-view">
                                <i class="fa fa-comments"></i>查看对话</a>
														</span>
                             <span class="admin-ctrl"><!--管理员菜单-->
															<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
															<a href="#"><i class="fa fa-edit"></i>编辑</a>
															<a href="#"><i class="fa fa-trash"></i>删除</a>
															<a href="#"><i class="fa fa-ban"></i>禁止</a>
														</span>
                           </div>
                           <div class="comment-title-right">
                             <span class="date"  v-compute-date="userComment.time"></span>
                           </div>
                         </div>
                         <div class="comment-body">
                           <p v-text="userComment.content"></p>
                         </div>
                         <div class="comment-ctrl">
                           <a href="#"><i class="fa fa-reply"></i>评论</a>
                           <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">1</span></a>
                           <a href="#"><i class="fa fa-thumbs-down"></i>踩</a>
                           <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                         </div>
                       </div>
                     </template>
                      <ul class="pagination-simple">
                        <li class="disabled"><a href="#" aria-label="Frist"><i class="fa fa-angle-double-left"></i> 首页</a></li>
                        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#" aria-label="Last">最后 <i class="fa fa-angle-double-right"></i></a></li>
                      </ul>
                    </div>

                  </div>
                  <!--<div class="comment-item">-->
                    <!--<div class="comment-title">-->
                      <!--<div class="comment-title-left">-->
                        <!--<div class="user-head">-->
                          <!--<img src="static/images/head/trump.png" alt=""/>-->
                        <!--</div>-->
                        <!--<a href="#" class="user-name">Trump Something</a>-->
                        <!--<span class="user-class user-class-3">中级会员</span>-->
                        <!--<span class="admin-ctrl">&lt;!&ndash;管理员菜单&ndash;&gt;-->
													<!--<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>-->
													<!--<a href="#"><i class="fa fa-edit"></i>编辑</a>-->
													<!--<a href="#"><i class="fa fa-trash"></i>删除</a>-->
													<!--<a href="#"><i class="fa fa-ban"></i>禁止</a>-->
												<!--</span>-->
                      <!--</div>-->
                      <!--<div class="comment-title-right">-->
                        <!--<span class="date">今天 12:22</span>-->
                        <!--<span class="floor">#1</span>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div class="comment-body">-->
                      <!--<p>第7季简直糟糕！！小恶魔从到龙妈身边出的主意没有一个不坑的！坑队友！坑龙！完全没有在君临那种精彩的表现！！不是间谍是什么？？？</p>-->
                    <!--</div>-->
                    <!--<div class="comment-ctrl">-->
                      <!--<a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>-->
                      <!--<a href="#"><i class="fa fa-reply"></i>评论</a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>-->
                      <!--<a href="#"><i class="fa fa-user-secret"></i>举报</a>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="comment-item">-->
                    <!--<div class="comment-title">-->
                      <!--<div class="comment-title-left">-->
                        <!--<div class="user-head">-->
                          <!--<img src="static/images/head/hepburn.png" alt=""/>-->
                        <!--</div>-->
                        <!--<a href="#" class="user-name">Audrey Hepburn</a>-->
                        <!--<span class="user-class user-class-5">黄金会员</span>-->
                        <!--<span class="admin-ctrl">&lt;!&ndash;管理员菜单&ndash;&gt;-->
													<!--<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>-->
													<!--<a href="#"><i class="fa fa-edit"></i>编辑</a>-->
													<!--<a href="#"><i class="fa fa-trash"></i>删除</a>-->
													<!--<a href="#"><i class="fa fa-ban"></i>禁止</a>-->
												<!--</span>-->
                      <!--</div>-->
                      <!--<div class="comment-title-right">-->
                        <!--<span class="date">今天 12:22</span>-->
                        <!--<span class="floor">#2</span>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div class="comment-body">-->
                      <!--<p>我觉得S7E7中瑟曦囚禁龙母，在S8中龙母会死掉，斯诺也会死掉。Arya会杀死瑟曦，小指头会当国王。在冰与火的世界中，谁为老百姓谁就会死。</p>-->
                    <!--</div>-->
                    <!--<div class="comment-ctrl">-->
                      <!--<a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>-->
                      <!--<a href="#"><i class="fa fa-reply"></i>评论</a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>-->
                      <!--<a href="#"><i class="fa fa-user-secret"></i>举报</a>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="comment-item">-->
                    <!--<div class="comment-title">-->
                      <!--<div class="comment-title-left">-->
                        <!--<div class="user-head">-->
                          <!--<img src="static/images/head/gray.png" alt=""/>-->
                        <!--</div>-->
                        <!--<a href="#" class="user-name">new user</a>-->
                        <!--<span class="user-class user-class-1">新会员</span>-->
                        <!--<span class="admin-ctrl">&lt;!&ndash;管理员菜单&ndash;&gt;-->
													<!--<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>-->
													<!--<a href="#"><i class="fa fa-edit"></i>编辑</a>-->
													<!--<a href="#"><i class="fa fa-trash"></i>删除</a>-->
													<!--<a href="#"><i class="fa fa-ban"></i>禁止</a>-->
												<!--</span>-->
                      <!--</div>-->
                      <!--<div class="comment-title-right">-->
                        <!--<span class="date">今天 12:22</span>-->
                        <!--<span class="floor">#2</span>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div class="comment-body">-->
                      <!--<p>最想不通的一点是既然长城有魔法，夜王过不来，为什么还要组织人出去灭，加点人手驻守长城不就好了？长城的魔法被人遗忘，那些大学士查查历史书不就知道了？山姆也不知道？布兰开了挂的也不知道？求解释！</p>-->
                    <!--</div>-->
                    <!--<div class="comment-ctrl">-->
                      <!--<a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>-->
                      <!--<a href="#"><i class="fa fa-reply"></i>评论</a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>-->
                      <!--<a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>-->
                      <!--<a href="#"><i class="fa fa-user-secret"></i>举报</a>-->
                    <!--</div>-->
                  <!--</div>-->
                </div><!--comment-list end-->
                <div class="load-more">
                  <a href="#">点击这里加载更多内容 <i class="far fa-angle-double-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-3 col-sidebar">
          <div class="siderbar-wrapper">
            <div class="panel-inner">
              <div class="panel-inner-heading">
                <span class="desc">关联影片</span>
              </div>
              <div class="panel-inner-body">
                <ul class="play-list play-list-col2">
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">美国</span>
                        <span class="type">影视剧</span>
                      </div>
                      <img src="static/images/tvplay/tvplay1.jpg" alt="">
                    </div>
                    <p class="name-chs">行尸走肉</p>
                    <p class="name-eng">Walking Dead</p>
                  </li>
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">中国</span>
                        <span class="type">电影</span>
                      </div>
                      <img src="static/images/movies/movie7.jpg" alt="">
                    </div>
                    <p class="name-chs">湄公河行动</p>
                  </li>
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">美国</span>
                        <span class="type">电影</span>
                      </div>
                      <img src="static/images/movies/movie2.jpg" alt="">
                    </div>
                    <p class="name-chs">黑夜传说3</p>
                    <p class="name-eng">Underworld: Rise of the Lycans</p>
                  </li>
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">美国</span>
                        <span class="type">电影</span>
                      </div>
                      <img src="static/images/movies/movie3.jpg" alt="">
                    </div>
                    <p class="name-chs">刺客信条</p>
                    <p class="name-eng">Assassin's Creed</p>
                  </li>
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">美国</span>
                        <span class="type">影视剧</span>
                      </div>
                      <img src="static/images/tvplay/tvplay4.jpg" alt="">
                    </div>
                    <p class="name-chs">全境通告</p>
                    <p class="name-eng">A.P.B.</p>
                  </li>
                  <li>
                    <div class="img-item">
                      <div class="tags">
                        <span class="name">美国</span>
                        <span class="type">影视剧</span>
                      </div>
                      <img src="static/images/tvplay/tvplay5.jpg" alt="">
                    </div>
                    <p class="name-chs">世界上最后一个男人</p>
                    <p class="name-eng">The Last Man on Earth</p>
                  </li>

                </ul>


              </div>
            </div>

            <div class="panel-inner">
              <div class="panel-inner-heading">
                <span class="desc">相关资讯</span>
                <span class="right">
									<a class="ctrl more">更多 <i class="fa fa-chevron-circle-right"></i></a>
								</span>
              </div>
              <div class="panel-inner-body">
                <ul class="info-list-side">
                  <li>
                    <img src="static/images/info/info31.jpg" alt="">
                    <span class="type">资讯</span>
                    <span class="title">小恶魔和雪伊那段情, 终于还是败给了宿命</span>
                    <span class="writer">文/茜红柿</span>
                    <span class="date">2天前</span>
                  </li>
                  <li>
                    <span class="type">资讯</span>
                    <span class="title">《权力的游戏》之捉鬼小分队：那些恩怨纠葛的往事</span>
                    <span class="writer">文/良梁</span>
                    <span class="date">3天前</span>
                  </li>
                  <li>
                    <span class="type">资讯</span>
                    <span class="title">《权力的游戏》第七季第六集解析：夜王擒龙，内外交困</span>
                    <span class="writer">文/LIANG</span>
                    <span class="date">3天前</span>
                  </li>
                  <li>
                    <span class="type">资讯</span>
                    <span class="title">《权力的游戏》S7E6：长城内外，惟余莽莽</span>
                    <span class="writer">文/aYin</span>
                    <span class="date">5天前</span>
                  </li>
                  <li>
                    <span class="type">资讯</span>
                    <span class="title">《权力的游戏》最新：打野小分队深入敌后，火龙陨落，异鬼来袭</span>
                    <span class="writer">文/aYin</span>
                    <span class="date">1月前</span>
                  </li>
                </ul>
                <!--暂时用不到
                                <ul class="ctrl-btn">
                                    <li><a  href="#">写剧评<i class="fa fa-plus-circle"></i></a></li>
                                    <li><a href="#">写长评论<i class="fa fa-plus-circle"></i></a></li>
                                </ul>-->
              </div>
            </div>

          </div>
        </div>


      </div>


    </div><!--ui-limit end-->
  </div>
</template>

<script>
  import searchCom from '../serarch_component/search';
    export default {
      name: "detail",
      data(){
        return{
          infoDeatail:'',    //详情数据
          commentContent:"", //用户输入评论
          commentList:[],    //评论数据
        }
      },
      components: { searchCom },
      methods:{
        getDetailData(){
          var self = this;
          var params={};
          Request.get('../static/lib/temp_data/infoDetail.json',params,(result)=>{
            self.infoDeatail = result.infoDeatail2;
            self.commentList = result.commentList;
          })
        },
        getTeamClass(ind){
          let teamClassName='team-';
          let str;
          switch (ind){
            case 0:
              str='a';
              break;
            case 1:
              str='b';
              break;
            case 2:
              str='c';
              break;
            case 3:
              str='d';
              break;
            case 4:
              str='e';
              break;
            default:
              str='a';
              break;
          } ;
          return teamClassName+str;
        },
        /*
        * 提交评论
        * */
        submitComment:function(){
          var param={
            content:this.commentContent
          };
          // Request.post("")
        }
      },
      created(){
        this.getDetailData()
      },
      mounted(){

      }
    }
</script>
