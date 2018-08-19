<template>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <search-com></search-com>

      <div class="row row-content row-content-2nd">
        <!---------热门下载------------>
        <div class="col-xs-12 col-box">
          <div class="panel">
            <div class="panel-heading">
              <span class="desc">全站热门</span>
            </div>
            <div class="panel-body">
              <ul class="play-list play-list-topdown play-list-topdown-ix">
                <li v-for="(film,ind) in hotfilmArr" v-if="ind<18">
                  <div class="img-item">
                    <div class="desc" v-text="film.episode"></div>
                    <div class="tags">
                      <span class="name" v-text="ind+1"></span>
                      <span class="type" v-text="film.type"></span>
                      <ul class="corner bottom left">
                        <li v-text="film.genre"></li>
                      </ul>
                      <ul class="corner bottom right">
                        <li  v-text="film.country"></li>
                      </ul>
                    </div>
                    <div class="count" v-text="film.count"></div>
                    <div class="desc"  v-text="film.episode"></div>
                    <img :src="film.imgUrl" alt="">
                  </div>
                  <p class="name-chs" v-text="film.nameChs"></p>
                  <p class="name-eng" v-text="film.nameEng"></p>
                </li>
              </ul>
            </div>
          </div>
        </div><!--col-xs-9 end-->
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
                <li><a href="#">电影</a></li><li class="active">影视剧</li>
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
                <li>动作</li><li>战争</li><li>剧情</li>
                <li>喜剧</li><li>生活</li><li>偶像</li>
                <li>青春</li><li>魔幻</li><li>科幻</li>
                <li>历史</li><li>纪录</li><li>暴力</li>
                <li>暴力</li><li>歌舞</li><li>恐怖</li>
                <li>惊悚</li><li>悬疑</li><li>古装</li>
                <li>史诗</li><li>丧尸</li><li>爱情</li>
                <li>医务</li><li>律政</li><li>励志</li>
                <li>体育</li><li>谍战</li><li>童话</li>
                <li>罪案</li><li>冒险</li><li>动画</li>
                <li>西部</li><li>枪战</li><li>灾难</li>
                <li>传记</li><li>幽默</li><li>讽刺</li>
                <li>幻想</li><li>综艺</li><li>真人秀</li>
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

            <div class="film-list viewType-toggle-support">
              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay16.jpg"/></a>
                  <div class="score">9.8</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">1</i>本站排名</div>
                  <p class="title">
                    <span class="chs">权利的游戏</span>
                    <span class="eng">Game of Thrones</span>
                    <span class="year">2011</span>
                    <span class="season">第7季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">HBO</span>
                    <span class="type">影视剧</span>
                    <span class="class">战争/剧情/魔幻/历史/古装/史诗</span>
                  </p>
                  <p class="stat">
                    <span class="view">5.4亿次浏览</span>
                    <span class="fav">8.1万次收藏</span>
                    <span class="start">2011-04-17 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译双语字幕</span>
                    <span>更新S07E03</span>
                    <span>版权原因本站仅提供字幕，<a href="http://www.zimuzu.tv/subtitle/53143">点击这里查看</a></span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：3天前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/movies/movie26.jpg"/></a>
                  <div class="score">8.6</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">1954</i>本站排名</div>
                  <p class="title">
                    <span class="chs">神奇女侠</span>
                    <span class="eng">Wonder Woman</span>
                    <span class="year">2017</span>
                    <span class="season">已上映</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="type">电影</span>
                    <span class="class">动作/冒险</span>
                  </p>
                  <p class="stat">
                    <span class="view">1.4亿次浏览</span>
                    <span class="fav">6.3万次收藏</span>
                    <span class="start">2017-06-02 首播</span>
                  </p>
                  <p class="desc">
                    <span>更新韩版硬字幕HD片源，比枪版清晰比WEB模糊的渣版！</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：1月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay22.jpg"/></a>
                  <div class="score">6.3</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">352</i>本站排名</div>
                  <p class="title">
                    <span class="chs">我的前半生</span>
                    <span class="eng">The First Half of My Life</span>
                    <span class="year">2017</span>
                    <span class="season">第1季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation">中国</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/家庭</span>
                  </p>
                  <p class="stat">
                    <span class="view">1.4亿次浏览</span>
                    <span class="fav">2.1万次收藏</span>
                    <span class="start">2017-07-4 首播</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：1月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay21.jpg"/></a>
                  <div class="score">9.8</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">156</i>本站排名</div>
                  <p class="title">
                    <span class="chs">侍女的故事</span>
                    <span class="eng">The Handmaid's Tale</span>
                    <span class="year">2017</span>
                    <span class="season">第1季完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">Hulu</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情</span>
                  </p>
                  <p class="stat">
                    <span class="view">3.2万次浏览</span>
                    <span class="fav">7.8千次收藏</span>
                    <span class="start">2017-04-27 首播</span>
                  </p>
                  <p class="desc">
                    <span>人人影视字幕组</span>
                    <span>原创翻译双语字幕</span>
                    <span>更新S01E10</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：1月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay20.jpg"/></a>
                  <div class="score">5.2</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">421</i>本站排名</div>
                  <p class="title">
                    <span class="chs">楚乔传</span>
                    <span class="eng">Agent Princess</span>
                    <span class="year">2017</span>
                  </p>
                  <p class="sort">
                    <span class="nation">中国</span>
                    <span class="type">电影</span>
                    <span class="class">剧情/爱情/古装</span>
                  </p>
                  <p class="stat">
                    <span class="view">7.2万次浏览</span>
                    <span class="fav">1.1千次收藏</span>
                    <span class="start">2017-06-05 上映</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：2月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay19.jpg"/></a>
                  <div class="score">9.1</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">74</i>本站排名</div>
                  <p class="title">
                    <span class="chs">传教士</span>
                    <span class="eng">Preacher</span>
                    <span class="year">2016</span>
                    <span class="season">第2季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">AMC</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/魔幻/冒险</span>
                  </p>
                  <p class="stat">
                    <span class="view">5.4万次浏览</span>
                    <span class="fav">1.1万次收藏</span>
                    <span class="start">2011-04-17 首播</span>
                  </p>
                  <p class="desc">
                    <span>人人影视字幕组</span>
                    <span>原创翻译双语字幕</span>
                    <span>更新S02E07</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：10天前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay18.jpg"/></a>
                  <div class="score">9.3</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">21</i>本站排名</div>
                  <p class="title">
                    <span class="chs">越狱</span>
                    <span class="eng">Prison Break</span>
                    <span class="year">2005</span>
                    <span class="season">本剧完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">FOX</span>
                    <span class="type">影视剧</span>
                    <span class="class">动作/悬疑</span>
                  </p>
                  <p class="stat">
                    <span class="view">30.4万次浏览</span>
                    <span class="fav">2.5万次收藏</span>
                    <span class="start">2005-08-29 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译双语字幕</span>
                    <span>第9集精校高码特效增强版</span>
                    <span>下载：<a href="http://www.zimuzu.tv/subtitle/52697">点击这里查看</a> 我命由我不由天！胜天半子半痴癫！ 一花一世界 一世一糊涂 非天我对弈之迷局，何必旁观？！</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：1年前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay17.jpg"/></a>
                  <div class="score">9.4</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">26</i>本站排名</div>
                  <p class="title">
                    <span class="chs">冰血暴</span>
                    <span class="eng">Fargo</span>
                    <span class="year">2011</span>
                    <span class="season">第7季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">FX</span>
                    <span class="type">影视剧</span>
                    <span class="class">喜剧/悬疑</span>
                  </p>
                  <p class="stat">
                    <span class="view">3.4万次浏览</span>
                    <span class="fav">1.8万次收藏</span>
                    <span class="start">2014-04-16 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译双语字幕</span>
                    <span>更新S03E10</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：1月前更新</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay9.jpg"/></a>
                  <div class="score">7</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">646</i>本站排名</div>
                  <p class="title">
                    <span class="chs">24小时：遗产</span>
                    <span class="eng hidden">24: Legacy</span>
                    <span class="year">2017</span>
                    <span class="season">本剧完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">FOX</span>
                    <span class="type">影视剧</span>
                    <span class="class">动作/剧情/悬疑</span>
                  </p>
                  <p class="stat">
                    <span class="view">3.4万次浏览</span>
                    <span class="fav">7.1千收藏</span>
                    <span class="start">2017-02-05 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译双语字幕</span>
                    <span>第一季更新完毕</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：三月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay15.jpg"/></a>
                  <div class="score">9.6</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">29</i>本站排名</div>
                  <p class="title">
                    <span class="chs">绝命律师</span>
                    <span class="eng">Better Call Saul</span>
                    <span class="year">2011</span>
                    <span class="season">第三季终</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">AMC</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/律政/罪案</span>
                  </p>
                  <p class="stat">
                    <span class="view">5.4万次浏览</span>
                    <span class="fav">2.1万次收藏</span>
                    <span class="start">2015-02-09 首播</span>
                  </p>
                  <p class="desc">
                    <span>ZiMuZu原创翻译</span>
                    <span>字幕更新S03E10</span>
                    <span>字幕纠错请发邮件至451315272@qq.com</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：15天前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay14.jpg"/></a>
                  <div class="score">9.6</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">4</i>本站排名</div>
                  <p class="title">
                    <span class="chs">生活大爆炸</span>
                    <span class="eng">The Big Bang Theory</span>
                    <span class="year">2007</span>
                    <span class="season">第10季完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">CBS</span>
                    <span class="type">影视剧</span>
                    <span class="class">喜剧</span>
                  </p>
                  <p class="stat">
                    <span class="view">3.1亿次浏览</span>
                    <span class="fav">4.6万次收藏</span>
                    <span class="start">2007-09-25 首播</span>
                  </p>
                  <p class="desc">
                    <span>ZiMuZu原创翻译</span>
                    <span>字幕更新S10E24</span>
                    <span>第11季已续订</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：3月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay13.jpg"/></a>
                  <div class="score">8.6</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">1310</i>本站排名</div>
                  <p class="title">
                    <span class="chs">异人族</span>
                    <span class="eng">Marvel's Inhumans</span>
                    <span class="year">2017</span>
                    <span class="season">尚未开播</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">ABC</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/魔幻/科幻</span>
                  </p>
                  <p class="stat">
                    <span class="view">1.4万次浏览</span>
                    <span class="fav">2.2千次收藏</span>
                    <span class="start">2017-09-23 首播</span>
                  </p>
                  <p class="desc">
                    <span>一共八集，确定翻译</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：3月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay12.jpg"/></a>
                  <div class="score">8.6</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">39</i>本站排名</div>
                  <p class="title">
                    <span class="chs">美国众神</span>
                    <span class="eng">American Gods</span>
                    <span class="year">2017</span>
                    <span class="season">第1季完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">Starz</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情</span>
                  </p>
                  <p class="stat">
                    <span class="view">7.4亿次浏览</span>
                    <span class="fav">2万次收藏</span>
                    <span class="start">2017-05-01 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译双语字幕</span>
                    <span>更新S01E08</span>
                    <span>季终</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：2月前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay11.jpg"/></a>
                  <div class="score">8.7</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">501</i>本站排名</div>
                  <p class="title">
                    <span class="chs">殖民地</span>
                    <span class="eng">Colony</span>
                    <span class="year">2016</span>
                    <span class="season">第2季连载中</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">USA</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/科幻</span>
                  </p>
                  <p class="stat">
                    <span class="view">1.4万次浏览</span>
                    <span class="fav">3.4千次收藏</span>
                    <span class="start">2016-01-15 首播</span>
                  </p>
                  <p class="desc">
                    <span>Luckydag原创翻译，微博@luckydag1</span>
                    <span>第二季完结。其中S01E01 COD字幕组有翻译</span>
                    <span>第一季洗版完成，网盘提取码[jk8v]，第二季网盘提取码 【3l2f】</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：3天前</span>
                  </p>
                </div>
              </div><!--item end-->

              <div class="item">
                <div class="img-item">
                  <a href="#"><img src="static/images/tvplay/tvplay10.jpg"/></a>
                  <div class="score">7.7</div>
                </div>
                <div class="film-info">
                  <div class="siterank"><i class="mark">659</i>本站排名</div>
                  <p class="title">
                    <span class="chs">飓风营救</span>
                    <span class="eng">Taken</span>
                    <span class="year">2017</span>
                    <span class="season">第1季完结</span>
                  </p>
                  <p class="sort">
                    <span class="nation">美国</span>
                    <span class="comp">NBC</span>
                    <span class="type">影视剧</span>
                    <span class="class">剧情/暴力/惊悚</span>
                  </p>
                  <p class="stat">
                    <span class="view">5.4万次浏览</span>
                    <span class="fav">5.9千次收藏</span>
                    <span class="start">2011-04-17 首播</span>
                  </p>
                  <p class="desc">
                    <span>原创翻译中文字幕</span>
                    <span>更新S01E10</span>
                  </p>
                  <p class="dati">
                    <span class="date">最后更新：2月前</span>
                  </p>
                </div>
              </div><!--item end-->


            </div><!--film-list end-->
            <ul class="pagination film-list-pagination">
              <li class="disabled"><a href="#" aria-label="Frist"><i class="fa fa-angle-double-left"></i> 首页</a></li>
              <li class="disabled"><a href="#" aria-label="Previous"><i class="fa fa-angle-left"></i> 上一页</a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#" aria-label="Next">下一页 <i class="fa fa-angle-right"></i></a></li>
              <li><a href="#" aria-label="Last">最后 <i class="fa fa-angle-double-right"></i></a></li>
            </ul>
          </div><!--content-wrapper end-->


        </div><!--col-xs-9 end-->
      </div><!--row end-->

    </div><!--ui-limit end-->
  </div>
</template>

<script>
  import searchCom from '../serarch_component/search'
    export default {
      name: "film",
      data(){
        return {
          hotfilmArr:[],      //全站热门
        }
      },
      components: {searchCom},
      methods:{
        getData(){
          var self = this;
          var params ={

          };
          Request.get('../static/lib/temp_data/film.json',params,(data)=>{
            self.hotfilmArr = data.hotfilmArr;
            // self.infoListArr = data.infoListArr;
            // if(data.pageTotal){
            //   self.pageTotal = data.pageTotal;
            //   if(self.page == 1){
            //     self.pageInit()
            //   }
            // }
          })
        }
      },
      created(){
        this.getData()
      },
      mounted(){

      }
    }
</script>
