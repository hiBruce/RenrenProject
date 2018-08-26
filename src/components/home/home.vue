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

          </div>
          <!---------今日播出组件------------>
          <div class="col-xs-3 col-box">
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
          </div>
        </div>

        <!---------第二行------------>
        <div class="row row-content">
          <!---------热门下载------------>
          <div class="col-xs-9 col-box">
            <div class="panel">
              <div class="panel-heading">
                <span class="desc">24小时热门下载</span>
              </div>
              <div class="panel-body">
                <ul class="play-list play-list-topdown" v-if="hotDowloadArr">
                  <li v-for="(hotDownLoad,ind) in hotDowloadArr" v-if="ind<14">
                    <div class="img-item">
                      <div class="tags">
                        <span class="name" v-text="ind+1"></span>
                        <span class="type" v-text="hotDownLoad.type"></span>
                        <ul class="corner bottom left">
                          <li v-text="hotDownLoad.type"></li>
                        </ul>
                        <ul class="corner bottom right">
                          <li v-text="hotDownLoad.contry"></li>
                        </ul>
                      </div>
                      <div class="count" v-text="hotDownLoad.viewed"></div>
                      <div class="desc"  v-text="hotDownLoad.episode"></div>
                      <img :src="hotDownLoad.imgUrl" alt="">
                    </div>
                    <p class="name-chs" v-text="hotDownLoad.nameChs"></p>
                    <p class="name-eng" v-text="hotDownLoad.nameEng"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div><!--col-xs-9 end-->

          <!---------客户端下载------------>
          <div class="col-xs-3  col-box">
            <div class="panel panel-client">
              <div class="panel-heading">
                <span class="desc">人人影视软件</span>
              </div>
              <div class="panel-body">
                <ul class="client-list">
                  <li>
                    <div class="icon"><i class="fab fa-windows"></i></div>
                    <p class="title">Windows<br/>客户端</p>
                    <p class="desc">适用于Win7以上的个人电脑</p>
                  </li>
                  <li>
                    <div class="icon"><i class="fab fa-apple"></i></div>
                    <p class="title">Mac<br/>客户端</p>
                    <p class="desc">适用于运行OSX系统的苹果电脑</p>
                  </li>
                  <li>
                    <img class="qr-code" src="static/images/qrcode/code-APP.png" alt="" />
                    <div class="icon"><i class="fa fa-mobile-alt"></i></div>
                    <p class="title">手机APP</p>
                    <p class="desc">手机扫码直接进行下载安装</p>
                  </li>
                  <li>
                    <div class="icon"><i class="fa fa-tv"></i></div>
                    <p class="title">TV客户端</p>
                    <p class="desc">适用于安卓系统的智能电视与机顶盒</p>
                  </li>
                  <li class="more"><i class="fa fa-th"></i> 更多客户端</li>
                </ul>
              </div>
            </div>
          </div>
        </div><!--row end-->
        <!---------第三行------------>
        <div class="row row-content">
          <!---------资讯类------------>
          <div class="col-xs-12 col-box col-infomation">
            <div class="panel panel-infomation panel-has-tabs">
              <div class="panel-heading">
                <ul class="tab-header info-header">
                  <li class="active">热门资讯</li>
                  <li>影评剧评</li>
                  <li>新剧推荐</li>
                  <li>片单推荐</li>
                  <li>新闻资讯</li>
                </ul>
              </div>
              <div class="panel-body">
                <div class="tab-content info-content ani-fade">
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
                  <div class="content-2" >
                    <!-- 影评剧评 开始 -->

                    <ul class="info-list info-list-A1">
                      <li  v-for="(info,ind)  in commentList">
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
                  <div class="content-3" >
                    <ul class="info-list info-list-A3">
                      <li  v-for="(info,ind)  in newFilmList">
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
                  <div class="content-4">
                    <ul class="info-list info-list-B1">
                      <li v-for="(recom,ind) in recomList">
                        <div class="img-item">
                          <div class="hot" v-if="recom.hot">
                            <template v-if="recom.hot == 1">
                              hot
                            </template>
                            <template v-if="recom.hot == 2">
                              独家
                            </template>
                          </div>
                          <div class="tags">
                            <span class="name" v-text="recom.linkTo"></span>
                            <span class="type" v-text="recom.linkToType"></span>
                            <ul class="corner top right">
                              <li class="user" v-text="recom.author"></li>
                              <li class="date" v-compute-date="recom.date"></li>
                            </ul>
                            <ul class="corner top left">
                              <li class="source" v-text="recom.type"></li>
                              <li class="view" v-compute-numbybit="recom.viewed"></li>
                            </ul>
                            <p class="sub-title" v-text="recom.subTitle"></p>
                          </div>
                          <img v-for="img in recom.imgUrl" :src="img" alt="">
                        </div>
                        <p class="title">给我们带来无数欢笑的动画界逗比们</p>
                      </li>
                    </ul>
                  </div>
                  <div class="content-5" >
                    <ul class="info-list info-list-A3">
                      <li  v-for="(info,ind)  in newsList">
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
                </div>
              </div>
        </div>


      </div><!--ui-limit end-->
    </div><!--ui-content end-->
        <!----------第四行------------>
        <div class="row row-content">
          <div class="col-xs-4 col-box">
            <div class="panel">
              <!--此处因为数据结构模板不能确定，写死的话没有意义，所以等到确定数据结构模板再做-->
              <div class="panel-heading">
                <span class="desc">话题互动</span>
              </div>
              <div class="panel-body">

                <div class="topic-wrapper">
                  <ul class="topic-tabs">
                    <li :class="!ind?'active':''" v-for="(inter,ind)  in interactArr" v-text="ind+1"></li>
                  </ul>
                  <div class="scroll-wrapper"><div class="scroll">
                    <div class="topic-content tab-content">
                      <div class="topic"  v-for="(inter,ind)  in interactArr">
                        <div class="img-item">
                          <div class="tags">
                            <span class="name" v-text="inter.name"></span>
                            <span class="type">电影&影视剧</span>
                            <ul class="corner bottom right">
                              <li class="user"  v-text="inter.author"></li>
                              <li class="date"  v-compute-date="inter.date"></li>
                            </ul>
                            <ul class="corner bottom left">
                              <li class="view" v-compute-numbybit="inter.viewed"></li>
                            </ul>
                          </div>
                          <img :src="inter.imgUrl" alt=""/>
                        </div>
                        <h3><a href="#" v-text="inter.title"></a></h3>
                        <template v-if="inter.interactType==1">
                          <p v-text="inter.subTitle"></p>
                        </template>
                        <template  v-if="inter.interactType==2">
                          <ul class="process-wrapper">
                            <li v-for="process in inter.processArr">
                              <p v-text="process.name"></p>
                              <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="'width:'+process.percent+'%'"></div></div>
                            </li>
                          </ul>
                        </template>
                        <template  v-if="inter.interactType==3">
                          <ul class="team-wrapper team-t2">
                            <li class="team" :class="'team-'+getTeamClass(ind)" v-for="(pkInfo,ind) in inter.pkArr">
                              <div class="progress">
                                <div class="progress-bar" :style="'height:'+pkInfo.percent+'%'"></div>
                                <p class="count" v-compute-numbybit="pkInfo.count"></p>
                              </div>
                              <p class="desc" v-text="pkInfo.name"></p>
                            </li>
                          </ul>
                        </template>
                        <template  v-if="inter.interactType==4">
                          <ul class="team-wrapper team-t4">
                            <li class="team" :class="'team-'+getTeamClass(ind)"  v-for="(vote,ind) in inter.voteArr">
                              <div class="progress">
                                <div class="progress-bar" :style="'height:'+vote.percent+'%'"></div>
                                <p class="count"  v-compute-numbybit="vote.count"></p>
                              </div>
                              <p class="desc" v-text="vote.option"></p>
                            </li>
                          </ul>
                        </template>
                      </div>
                    </div>
                  </div></div><!--scroll element-->
                </div>
              </div>
            </div>
          </div><!--col-xs-9 end-->
          <div class="col-xs-4  col-box">
            <div class="panel panel-hot-comment">
              <div class="panel-heading">
                <span class="desc">热门短评</span>
              </div>
              <div class="panel-body">
                <ul class="hot-comment" v-if="hotShortComArr">
                  <li v-for="hotCom in hotShortComArr">
                    <div class="img-item">
                      <div class="view" v-compute-numbybit="hotCom.viewed"></div>
                      <img :src="hotCom.imgUrl" alt="" />
                    </div>
                    <p class="desc" v-text="hotCom.title"></p>
                    <!-- -->
                    <p class="info">{{hotCom.author}} 评《{{hotCom.linkTo}}》 <span v-compute-date="hotCom.date"></span><span class="score" v-text="hotCom.score"></span></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xs-4  col-box">
            <div class="panel">
              <div class="panel-heading">
                <span class="desc">社区活动</span>
              </div>
              <div class="panel-body">
                <div class="community-activity" v-if="snsActivity">
                  <img :src="snsActivity.imgUrl" alt="" />
                  <h3 v-text="snsActivity.title"></h3>
                  <p v-text="snsActivity.intro"></p>
                  <button class="btn">我要参加</button>
                </div>
              </div>
            </div>
          </div>
        </div><!--row end-->
      </div><!--ui-limit end-->
    </div><!--ui-content end-->
    <div class="ui-content content-hotfilm">
      <div class="ui-limit">
        <div class="row row-content">
          <div class="col-xs-8  col-box">
            <div class="panel">
              <div class="panel-heading">
                <span class="desc">最新发布</span>
              </div>
              <div class="panel-body">
                <ul class="play-list play-list-newfilm">
                  <li v-for="film in newPublishList">
                    <div class="img-item">
                      <div class="tags">
											<span class="name">
												{{film.released}}
												<template v-if="film.status ==2">
													首播
												</template>
                        <template v-else>
													上映
												</template>
											</span>
                        <span class="type" v-text="film.type"></span>
                        <ul class="corner bottom left"><li  v-text="film.type"></li></ul>
                        <ul class="corner bottom right"><li  v-text="film.contry"></li></ul>
                      </div>
                      <img :src="film.imgUrl" alt="">
                    </div>
                    <p class="name-chs" v-text="film.nameChs"></p>
                    <p class="name-eng" v-text="film.nameEng"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xs-4  col-box">
            <div class="panel">
              <div class="panel-heading">
                <span class="desc">全球热映</span>
              </div>
              <div class="panel-body">
                <div class="hotfilm-wrapper">
                  <ul class="hotfilm-tabs">
                    <li class="active">1</li><li>2</li><li>3</li>
                  </ul>
                  <div class="scroll-wrapper"><div class="scroll">
                    <div class="hotfilm-content tab-content ani-slide">
                      <div class="film active" v-for="(film,ind) in hotfilmArr" :class="ind?'':'active'">
                        <div class="img-item">
                          <div class="score" v-text="film.score"></div>
                          <img :src="film.imgUrl" alt="" />
                        </div>
                        <ul class="film-info">
                          <li class="name" v-text="film.name"></li>
                          <li><span class="type">类型</span><span class="desc" v-text="film.type"></span></li>
                          <li><span class="type">导演</span><span class="desc" v-text="film.director"></span></li>
                          <li><span class="type">上映</span><span class="desc" v-text="film.time"></span></li>
                          <li><span class="type">主演</span><span class="desc">
												<p v-for="name in film.leadActor" v-text="name"></p>
											</span></li>
                        </ul>
                        <p class="desc" v-text="film.desc"></p>
                      </div>
                    </div>
                  </div></div><!--scroll element end-->
                </div>
              </div>
            </div>
          </div>
        </div><!--row end-->
      </div><!--ui-limit end-->
    </div><!--ui-content end-->
    <div class="ui-content">
      <div class="ui-limit">
        <div class="row row-content">
          <div class="col-xs-12  col-box">

            <div class="panel">
              <div class="panel-heading">
                <span class="desc">剧集更新</span>
              </div>
              <div class="panel-body">
                <ul class="play-list play-list-update">
                  <li v-for="(update,ind) in plotUpdateArr" v-if="ind<16">
                    <div class="img-item">
                      <div class="desc" v-text="update.lastSN+update.lastEP"></div>
                      <div class="tags">
                        <div class="name" v-text="update.nameChs"></div>
                        <div class="type" v-text="update.type"></div>
                        <ul class="corner bottom left" ><li  v-text="update.type"></li></ul>
                        <ul class="corner bottom right"  ><li v-text="update.country"></li></ul>
                        <ul class="corner top left"><li  v-text="update.letterLanguage"></li></ul>
                        <ul class="corner top right">
                          <li  v-text="update.name">HDTVrip
                            <template v-if="!update.definition">
                              HDTVrip
                            </template>
                            <template v-else-if="update.definition==1">
                              720p
                            </template>
                            <template v-else-if="update.definition==2">
                              WEBHR
                            </template>
                            <template v-else-if="update.definition==3">
                              DVDrip
                            </template>
                            <template v-else-if="update.definition==4">
                              1080p
                            </template>
                          </li>
                        </ul>
                      </div>
                      <img :src="update.imgUrl" alt="">
                    </div>
                    <p class="name-chs"  v-text="update.nameChs"></p>
                    <p class="name-eng" v-text="update.nameEng"></p>
                  </li>
                </ul>
              </div>
            </div>

          </div>


        </div><!--row end-->

        <div class="row row-content">
          <div class="col-xs-12  col-box">
            <div class="panel">
              <div class="panel-heading">
                <span class="desc">友情链接</span>
              </div>
              <div class="panel-body">
                <ul class="links links-img">
                  <li><img src="static/images/links/links01.jpg" alt="" /></li>
                  <li><img src="static/images/links/links02.jpg" alt="" /></li>
                  <li><img src="static/images/links/links03.jpg" alt="" /></li>
                  <li><img src="static/images/links/links04.jpg" alt="" /></li>
                  <li><img src="static/images/links/links06.jpg" alt="" /></li>
                  <li><img src="static/images/links/links05.jpg" alt="" /></li>
                </ul>
                <ul class="links">
                  <li><a href="#">天天美剧在线看</a></li>
                  <li>圣城论坛</li>
                  <li>深影论坛</li>
                  <li>电波字幕组</li>
                  <li>迪幻字幕组</li>
                  <li>射手网(伪)</li>
                  <li>80s手机电影</li>
                  <li>字幕库</li>
                  <li>Sub HD字幕站</li>
                </ul>
              </div>
            </div>
          </div>


        </div><!--row end-->

      </div><!--ui-limit end-->
    </div><!--ui-content end-->
  </div>
</template>

<script>
  import searchCom from '../serarch_component/search'
  export default {
    name: 'home',
    data () {
      return {
        bannerImgArr:[],   //轮播banbner图数据
        panelTodayTvArr:[],//今日播出数据
        // todayTvList:[],    //今日播出的列表数据
        hotDowloadArr:[],  //24小时热门下载数据
        infomationObj:{},  //热门资讯等数据
        hotShortComArr:[], //热门短评数据
        snsActivity:{},    //社区活动数据
        newPublishList:[],     //最新发布数据
        hotfilmArr:[],     //全球热映数据
        plotUpdateArr:[],  //剧情更新数据
        interactArr:[],    //话题互动数据
        hotInfomationArr:[], //热门资讯
        hotInfoBanner:[],   //热门资讯banner
        commentList:[],    //影评剧评数据
        newFilmList:[],    //新剧评论
        recomList:[],     //片单推荐数据
        newsList:[],      //新闻资讯
      }
    },
    components: { searchCom },
    methods: {
      getAllData(){
        var self = this;
        var paramsArr =[
          {
            url:"../static/lib/temp_data/data.json",
            params:null,
            method:'get'
          },
          {
            url:"../static/lib/temp_data/interact.json",
            params:null,
            method:'get'
          },
          {
            url:"../static/lib/temp_data/info.json",
            params:null,
            method:'get'
          },
          {
            url:"../static/lib/temp_data/recomList.json",
            params:null,
            method:'get'
          },
          {
            url:"../static/lib/temp_data/tvAndFilmData.json",
            params:null,
            method:'get'
          }
        ]
        Request.all(paramsArr,function(...data){
          var result = data[0];
          self.getHomeData(result[0]['data']);
          self.getInteractData(result[1]['data']);
          self.getHotInfoData(result[2]['data']);
          self.getRecomList(result[3]['data']);
          self.getMovieData(result[4]['data'])
          setTimeout(self.init,0)
        })
      },
      /*
       * 获取首页数据
       * @description  目前是从json文件中获取，所以一次性全部取出，如真实数据为多个接口，就需要把此方法拆分
       * */
      getHomeData(data){
        this.snsActivity = data.snsActivity;
      },
      getMovieData(data){
        this.newPublishList = data.newPublishList;
        this.hotDowloadArr = data.hotDownload;
        this.plotUpdateArr = data.plotUpdateArr;
        this.panelTodayTvArr = data.panelTodayTvArr;
        this.bannerImgArr = data.bannerImgArr;
        this.hotfilmArr = data.hotfilmArr;
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
        this.hotInfomationArr=data.hotInfo;
        this.hotInfoBanner = data.hotInfoBanner;
        this.commentList = data.commentList;
        this.newFilmList =data.newFilmList;
        this.newsList = data.newsList;
        this.hotShortComArr = data.hotShortComArr;
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

        $.timer.set("load",function(){
          //热门资讯 影评剧评 新剧推荐 片单推荐 新闻资讯 栏目动画切换功能初始化（不要修改参数）
          $(".info-content").slideTabs({
            header:$(".info-header"),
            width:1200,
            height:525,
            //carousel:true,
            //timer:50000,
            ani:"fade",
            interaction:"mouseenter"
          });

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
      /*
      * 获取话题互动中投票的一个class名
      * */
      getTeamClass:function(ind){
        var str ='';
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
        };
        return str;
      }

    },
    created() {
      // this.getHomeData();
      // this.getHotInfoData();
      // this.getInteractData();
      // this.getHotDownLoadDat();
      this.getAllData()
    },
    mounted() {

    }
  }
</script>

