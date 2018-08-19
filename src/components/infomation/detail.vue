<template>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <div class="ui-search">
        <input type="text" class="search-input" placeholder="请您要搜寻的内容，如 电影 美剧 字幕 资讯" />
        <button class="search-button"><i class="fa fa-search"></i></button>
      </div>
      <div class="row row-content row-content-2nd">
        <div class="col-xs-9 col-box">
          <div class="infomation-content">
            <div class="title">
              <h3>《神奇女侠》：故事可以给差评，但尬不住加朵腿长</h3>
            </div>
            <div class="sub-title">
              <img src="static/images/head/putin.png" alt="" />
              <span class="user">Putin</span>
              <span class="user-class">中级会员</span>
              <span class="date">三天前</span>
              <div class="info">
                <span class="type">影评</span>
                <span class="view" title="阅读数">1.2万</span>
              </div>
              <span class="ctrl"><!--普通用户没有编辑删除，只有收藏-->
								<a href="#" class="fav"><i class="fa fa-star"></i>收藏</a>
								<a href="#">编辑</a>
								<a href="#" data-toggle="modal" data-target="#delete">删除</a>
							</span>
            </div>
            <hr />
            <div class="well">
              看完《神奇女侠》不敢给差评，但怕被说是漫威粉也是很无奈。
            </div>
            <ul class="process-wrapper">
              <li>
                <p>阿宝-《功夫熊猫》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>小黄人-《小黄人》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>大白-《超能陆战队》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>尼莫-《海底总动员》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>汤姆&amp;杰瑞-《猫和老鼠》XXAA</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 5%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>WallE-《机器人总动员》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 19%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li>
                <p>史迪奇-《星际宝贝》</p>
                <div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 3%;"></div></div>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <!--这里可以显示任意数量的投票项目，但是在首页上，请放置top6以内的投票项目，预置空间不够大，无法放置更多投票项目-->
            </ul>
            <button class="btn btn-primary btn-vote">确定投票</button>
            <img src="static/images/info-detail/01.jpg" alt="" />
            <video width="90%" controls>
              <!--<source src="../lib/style/video/Music.mp4" type="video/mp4">-->
              您的浏览器不支持Video标签。
            </video>
            <ul class="team-wrapper team-t5">
              <li class="team team-a">
                <div class="progress">
                  <div class="progress-bar" style="height:75%"></div>
                  <p class="count">1.2万</p>
                </div>
                <p class="desc">一定能</p>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li class="team team-b">
                <div class="progress">
                  <div class="progress-bar" style="height:32%"></div>
                  <p class="count">3,381</p>
                </div>
                <p class="desc">不好说</p>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li class="team team-c">
                <div class="progress">
                  <div class="progress-bar" style="height:25%"></div>
                  <p class="count">2,815</p>
                </div>
                <p class="desc">很困难</p>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li class="team team-d">
                <div class="progress">
                  <div class="progress-bar" style="height:35%"></div>
                  <p class="count">2,14</p>
                </div>
                <p class="desc">几乎无望</p>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
              <li class="team team-e">
                <div class="progress">
                  <div class="progress-bar" style="height:15%"></div>
                  <p class="count">1,214</p>
                </div>
                <p class="desc">不能</p>
                <div class="vote"><i class="fa fa-check"></i></div>
              </li>
            </ul>
            <button class="btn btn-primary btn-vote">确定投票</button>
            <p>看完《神奇女侠》不敢给差评，但怕被说是漫威粉也是很无奈。烂番茄100%新鲜度开盘，目前保持在93%的新鲜度。美国人对于这个血统纯正的超级英雄十分捧场，绝对是亲生的。豆瓣评分7.3，相对理性一些。相比《自杀小队》口碑扑街，《神奇女侠》用盖尔·加朵用大长腿踢开了DC雪耻大门。</p>
            <img src="static/images/info-detail/02.jpg" alt="" />
            <form action="">
              <ul class="team-wrapper team-t2">
                <li class="team team-a">
                  <div class="progress">
                    <div class="progress-bar" style="height:65%"></div>
                    <p class="count">232,815</p>
                  </div>
                  <div class="vote"><i class="fa fa-check"></i></div>
                  <p class="desc">龙母</p>
                </li>
                <li class="team team-b">
                  <div class="progress">
                    <div class="progress-bar" style="height:35%"></div>
                    <p class="count">192,815</p>
                  </div>
                  <div class="vote"><i class="fa fa-check"></i></div>
                  <p class="desc">斯诺</p>
                </li>
              </ul>
              <button class="btn btn-primary btn-vote">确定投票</button>
            </form>
            <p>在《蝙蝠侠大战超人》中就吸粉无数，和蝙蝠侠、超人并驾齐驱毫不逊色。前有DC《女超人》、《猫女》，作为独立的女性超级英雄电影更是毫无疑问的登上“美漫一姐”。这场盛赞之下，是否是美国观众、DC粉的集体高潮，大长腿看多了后，《神奇女侠》还能否保住口碑。</p>
            <h4>一、血统纯正亚马逊女王</h4>
            <p>电影中有一幕，从小在女性环境长大的戴安娜和史蒂夫说自己是母亲用泥土捏的。神奇女侠的到底从何而来？电影中没有明确给出答案，但从“蛛丝马迹”可以看到一些“隐性彩蛋”。神奇女侠为宙斯与希波吕忒所生，被赋予神之血统对抗阿瑞斯的活体武器。但在漫画中，有一幕——无法生育的希波吕忒，绝望的在天堂岛捏泥人，祈求赐予她孩子，结果奇迹出现了。</p>
            <p>不管是哪种版本，戴安娜纯正的血统是毋庸置疑。这是让北美热衷的原因之一，再者，美国有庞大的漫画粉丝。现实里神奇女侠真正的“父亲”是心理学家威廉·莫尔顿·马斯顿。在1940年代，美国漫画产业处于低潮期时，他说服了漫画公司老板创造一个女性英雄。可见，男性可以拯救世界，但男性绝对需要女性拯救。</p>
            <img src="static/images/info-detail/03.jpg" alt="" />
            <p>在马斯顿看来：男性体内无法产出足够的爱来和平统治世界。女性体内的器官和内分泌系统可以产出比男性多一倍的爱。女性缺少的是实践她的关爱意志的优势或自信。马斯顿要赋予神奇女侠这种优势力量，同时又让她保有爱、温柔、母性等特质。于是，在电影中我们可以看到最后支撑戴安娜战胜阿瑞斯的不是武器，而是她心中的爱。</p>
            <h4>二、故事不行长腿来补</h4>
            <p>一个140分钟的电影概括为一句话——亚马逊小公主蜕变成拯救世界的超级英雄。从故事上看，从小深受母亲和七大姑五大嫂保护的戴安娜，救了一个从未见过的物种“男人”史蒂夫。</p>
            <p>通过他，戴安娜知道了外面的人正处于水深火热之中，把拯救人类作为己任的她，满腔热血的跟着史蒂夫离开了天堂岛。天堂岛的取景在意大利，电影中天堂岛只展现了冰山一角。和西游记中的女儿国一样，天堂岛只有女人。其设定来源自漫迷广为流传的地球危机设定，亚马逊一族由被男性肆虐致死的女性冤魂转世而来，是被希腊女性神祇赋予力量的成年女性。</p>
            <img src="static/images/info-detail/04.jpg" alt="" />
            <p>最惨的就是德国，被美国队长打一次，这次又轮到神奇女侠。影片中间部分，是戴安娜个人对世界的认识。其中有一场让女性为之动容的戏份，在戴安娜的带领下他们抢回一直被占领的小镇，镇上恢复歌声，飞雪中他们跳舞拥抱深情对望...然后回房间...这场戏是体现戴安娜“人性”的一面，尽管刀枪不入，最终还是会像一个平凡女性一样感受到爱和幸福。</p>
            <p>爱情和战争是《神奇女侠》的主要内容，这点上和漫画较为契合。为迎合当时兴盛的浪漫爱情漫画市场，加重《动感漫画》中爱情故事的部分。在《动感漫画》第1期中戴安娜和史蒂夫两人从相识到携手遁入爱河，期间发生了许多曲折而又浪漫的爱情故事。和以往英雄救美不同的是，史蒂夫经常需要被女侠救...但漫画中其实不是女权，而是充斥着很多大男人主义的情节，比如拯救完世界的戴安娜把功劳归于史蒂夫...</p>
            <img src="static/images/info-detail/05.jpg" alt="" />
            <p>中规中矩也有好处，对于不了解漫画，或不了解DC黑暗风格的影迷来说，使得这部影片更好懂，受众也更广一些。在通俗易懂的同时，DC还是不忘把自己的反战意识赋予在影片中。值得一夸的是选择，盖尔·加朵个人的魅力让很多观众看完简直失去理性了...导演派蒂·杰金斯在人物塑造尺度上拿捏十分得当，比如：戴安娜看着史蒂夫的裸体，演员的对白和神情都让人忍俊不禁。加朵的性感是一种很健康的野性，并不会给人极大魅惑，使得女性观众在观看时完全嫉妒不起来。以色列女兵出身的她，打斗场面完成度十分高。</p>
            <h4>三、谁说神奇女侠没有彩蛋</h4>
            <p>DC不爱做彩蛋，导演派蒂·杰金斯在电影还没上映就说了“没有彩蛋”。但没有片尾彩蛋不代表片中没有。首先，是《神奇女侠》三件套：真言套索、守护银镯、弑神者之剑。“真言套索”字面上的意思，它其实是一条可以捆绑又可以发热伤人的测谎绳，任何被它套上的人就会一五一十吐露真言。但其实在马斯顿当年的设计中，真言套索的超能力不仅于此。在早期的漫画中，基本上就是到处用皮绳绑人，或是女孩们互相捆绑的游戏。这种捆绑可以说是很SM。守护银镯刀枪不入，但电影里简直槽点满满：为什么子弹除了银镯，哪里都打不到？弑神者之剑漫画中的弑神者之剑可以变形，拥有独立意识威力逆天，但在电影里完全没有展示威力，就是一把有点碍事的破铜剑。</p>
            <img src="static/images/info-detail/06.jpg" alt="" />
            <p>其次是电影的致敬部分。在戴安娜和史蒂夫回到城市后，遇到第一场刺杀。在戴安娜和特雷弗与德国间谍的“巷战”中，明显致敬1987年的《超人》。这个致敬梗得到了导演本人的承认。最后是神奇女侠的“吃货”精神。在电影有一幕，戴安娜像个小孩吃着冰淇淋，还夸做冰淇淋的人很有前途。这一幕出自《新52正义联盟》第三话，同样的桥段还出现在《新52正义联盟》的改编动画《正义联盟：战争》中。 </p>
            <p>最后，从北美口碑和上映后的实际情况，评价存在虚高。当然，电影这种事见仁见智，你喜欢我也没办法啊！</p>
            <div class="panel">
              <div class="panel-heading">
								<span class="left" >
									<a href="#" class="ctrl button-toggle"  data-toggle="modal" data-target="#self-comment"><i class="fa fa-user-circle"></i> 显示我的评论</a>
								</span>
                <span class="desc">评论</span>
              </div>
              <div class="panel-body">
                <div class="comment-edit-wrapper">
                  <textarea class="comment-textarea" placeholder="请填写评论..." rows="3"></textarea>
                  <button class="comment-btn btn"><span class="desc">发表评论</span></button>
                </div>
                <div class="comment-list">
                  <div class="comment-item">
                    <div class="comment-title">
                      <div class="comment-title-left">
                        <div class="user-head">
                          <img src="static/images/head/header.jpg" alt=""/>
                        </div>
                        <a href="#" class="user-name">aYin</a>
                        <span class="user-class user-class-6">至尊会员</span>
                        <span class="admin-ctrl"><!--管理员菜单-->
													<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
													<a href="#"><i class="fa fa-edit"></i>编辑</a>
													<a href="#"><i class="fa fa-trash"></i>删除</a>
													<a href="#"><i class="fa fa-ban"></i>禁止</a>
												</span>
                      </div>
                      <div class="comment-title-right">
                        <span class="date">今天 12:22</span>
                        <span class="top">置顶</span>
                        <span class="hot">Hot</span>
                        <span class="floor">我的评论</span>
                        <span class="floor">#2</span>
                        <!--置顶有三种方式，hot置顶，top管理员置顶,self置顶，每种置顶仅显示两条。--->
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>发生不好的事情不要怨天尤人的，如果一定要追踪源头也不是snow的问题，而是布兰发出的警告导致的。</p>
                      <p>龙母不去救snow一行人，那就不知道夜魔有着这样的能力，知己知彼方能百战百胜，这次龙的陨落也给龙母提了个醒，自己不是无敌的。不管面对兰尼斯特还是夜魔。我猜测布兰应该是知道后续的发展（包括龙的死亡和被复活），但是时间线是不允许改动的，不管是已经发生的还是将要发生的。</p>
                    </div>
                    <div class="comment-ctrl">
                      <a class="comment-showSub" data-num="346"><i class="fa fa-comments"></i><span class="desc">346 条评论</span></a>
                      <a href="#"><i class="fa fa-reply"></i>评论</a>
                      <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>
                      <a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>
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
                      <div class="comment-item">
                        <div class="comment-title">
                          <div class="comment-title-left">
                            <div class="user-head">
                              <img src="static/images/head/putin.png" alt=""/>
                            </div>
                            <a href="#" class="user-name">Putin</a>回复 Obama
                            <span class="user-class user-class-2">初级会员</span>
                            <span class="comment-show">
															<a href="#" data-toggle="modal" data-target="#dialogue-view"><i class="fa fa-comments"></i>查看对话</a>
														</span>
                            <span class="admin-ctrl"><!--管理员菜单-->
															<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
															<a href="#"><i class="fa fa-edit"></i>编辑</a>
															<a href="#"><i class="fa fa-trash"></i>删除</a>
															<a href="#"><i class="fa fa-ban"></i>禁止</a>
														</span>
                          </div>
                          <div class="comment-title-right">
                            <span class="date">今天 12:22</span>
                          </div>
                        </div>
                        <div class="comment-body">
                          <p>发生不好的事情不要怨天尤人的，如果一定要追踪源头也不是snow的问题，而是布兰发出的警告导致的。</p>
                        </div>
                        <div class="comment-ctrl">
                          <a href="#"><i class="fa fa-reply"></i>评论</a>
                          <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">1</span></a>
                          <a href="#"><i class="fa fa-thumbs-down"></i>踩</a>
                          <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                        </div>
                      </div>
                      <div class="comment-item">
                        <div class="comment-title">
                          <div class="comment-title-left">
                            <div class="user-head">
                              <img src="static/images/head/obama.png" alt=""/>
                            </div>
                            <a href="#" class="user-name">Obama</a>
                            <span class="user-class user-class-4">高级会员</span>
                            <span class="admin-ctrl"><!--管理员菜单-->
															<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
															<a href="#"><i class="fa fa-edit"></i>编辑</a>
															<a href="#"><i class="fa fa-trash"></i>删除</a>
															<a href="#"><i class="fa fa-ban"></i>禁止</a>
														</span>
                          </div>
                          <div class="comment-title-right">
                            <span class="date">今天 12:22</span>
                          </div>
                        </div>
                        <div class="comment-body">
                          <p>龙母不去救snow一行人，那就不知道夜魔有着这样的能力，知己知彼方能百战百胜，这次龙的陨落也给龙母提了个醒，自己不是无敌的。不管面对兰尼斯特还是夜魔。</p>
                        </div>
                        <div class="comment-ctrl">
                          <a href="#"><i class="fa fa-reply"></i>评论</a>
                          <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">1</span></a>
                          <a href="#"><i class="fa fa-thumbs-down"></i>踩</a>
                          <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                        </div>
                      </div>
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
                  <div class="comment-item">
                    <div class="comment-title">
                      <div class="comment-title-left">
                        <div class="user-head">
                          <img src="static/images/head/trump.png" alt=""/>
                        </div>
                        <a href="#" class="user-name">Trump Something</a>
                        <span class="user-class user-class-3">中级会员</span>
                        <span class="admin-ctrl"><!--管理员菜单-->
													<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
													<a href="#"><i class="fa fa-edit"></i>编辑</a>
													<a href="#"><i class="fa fa-trash"></i>删除</a>
													<a href="#"><i class="fa fa-ban"></i>禁止</a>
												</span>
                      </div>
                      <div class="comment-title-right">
                        <span class="date">今天 12:22</span>
                        <span class="floor">#1</span>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>第7季简直糟糕！！小恶魔从到龙妈身边出的主意没有一个不坑的！坑队友！坑龙！完全没有在君临那种精彩的表现！！不是间谍是什么？？？</p>
                    </div>
                    <div class="comment-ctrl">
                      <a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>
                      <a href="#"><i class="fa fa-reply"></i>评论</a>
                      <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>
                      <a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>
                      <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="comment-title">
                      <div class="comment-title-left">
                        <div class="user-head">
                          <img src="static/images/head/hepburn.png" alt=""/>
                        </div>
                        <a href="#" class="user-name">Audrey Hepburn</a>
                        <span class="user-class user-class-5">黄金会员</span>
                        <span class="admin-ctrl"><!--管理员菜单-->
													<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
													<a href="#"><i class="fa fa-edit"></i>编辑</a>
													<a href="#"><i class="fa fa-trash"></i>删除</a>
													<a href="#"><i class="fa fa-ban"></i>禁止</a>
												</span>
                      </div>
                      <div class="comment-title-right">
                        <span class="date">今天 12:22</span>
                        <span class="floor">#2</span>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>我觉得S7E7中瑟曦囚禁龙母，在S8中龙母会死掉，斯诺也会死掉。Arya会杀死瑟曦，小指头会当国王。在冰与火的世界中，谁为老百姓谁就会死。</p>
                    </div>
                    <div class="comment-ctrl">
                      <a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>
                      <a href="#"><i class="fa fa-reply"></i>评论</a>
                      <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>
                      <a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>
                      <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="comment-title">
                      <div class="comment-title-left">
                        <div class="user-head">
                          <img src="static/images/head/gray.png" alt=""/>
                        </div>
                        <a href="#" class="user-name">new user</a>
                        <span class="user-class user-class-1">新会员</span>
                        <span class="admin-ctrl"><!--管理员菜单-->
													<a href="#"><i class="fa fa-arrow-alt-to-top"></i>置顶</a>
													<a href="#"><i class="fa fa-edit"></i>编辑</a>
													<a href="#"><i class="fa fa-trash"></i>删除</a>
													<a href="#"><i class="fa fa-ban"></i>禁止</a>
												</span>
                      </div>
                      <div class="comment-title-right">
                        <span class="date">今天 12:22</span>
                        <span class="floor">#2</span>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>最想不通的一点是既然长城有魔法，夜王过不来，为什么还要组织人出去灭，加点人手驻守长城不就好了？长城的魔法被人遗忘，那些大学士查查历史书不就知道了？山姆也不知道？布兰开了挂的也不知道？求解释！</p>
                    </div>
                    <div class="comment-ctrl">
                      <a class="comment-showSub" data-num="0"><i class="fa fa-comments"></i><span class="desc">0 条评论</span></a>
                      <a href="#"><i class="fa fa-reply"></i>评论</a>
                      <a href="#"><i class="fa fa-thumbs-up"></i>赞<span class="badge">22</span></a>
                      <a href="#"><i class="fa fa-thumbs-down"></i>踩<span class="badge">5</span></a>
                      <a href="#"><i class="fa fa-user-secret"></i>举报</a>
                    </div>
                  </div>
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
    export default {
        name: "detail"
    }
</script>
