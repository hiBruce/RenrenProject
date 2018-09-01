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
            <div class="content_wrap" v-html="">
              <template v-for="con in infoDeatail.content">
                <template v-if="con.type =='text'">
                  <p v-text="con.content"></p>
                </template>
                <template v-if="con.type=='title' ">
                  <h4 v-text="con.content"></h4>
                </template>
                <template v-if="con.type=='img'">
                  <img :src="con.src" />
                </template>
              </template>
            </div>
            <comment type="1"></comment>
          </div>
        </div>
        <div class="col-xs-3 col-sidebar">
          <div class="siderbar-wrapper">
            <relatviefilm></relatviefilm>
            <relativeinfo></relativeinfo>
          </div>
        </div>


      </div>


    </div><!--ui-limit end-->
  </div>
</template>

<script>
  import searchCom from '../common/serarch/search';
  import relatviefilm from './sub/relativeFilm';
  import relativeinfo from './sub/relativeInfo';
  import comment from '../common/comment/main';

    export default {
      name: "detail",
      data(){
        return{
          infoDeatail:'',    //详情数据
          // commentContent:"", //用户输入评论
          // commentList:[],    //评论数据
        }
      },
      components: { searchCom,relatviefilm,relativeinfo,comment },
      methods:{
        getDetailData(){
          var self = this;
          var params={};
          Request.get('../static/lib/temp_data/infoDetail.json',params,(result)=>{
            self.infoDeatail = result.infoDeatail2;
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
        }
      },
      created(){
        this.getDetailData()
      },
      mounted(){

      }
    }
</script>
