<template>
  <!---------content------------>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <searchcom></searchcom>
      <div class="row row-content row-content-2nd" v-if="info">
        <div class="col-xs-10">
          <div class="panel panel-detail">
            <div class="panel-heading">
              <h3>{{info.nameChs}} 第<span v-get-number="info.episodeInfo.SN"></span>季 第<span v-get-number="info.episodeInfo.EP"></span>集</h3>
              <p class="desc">Game Of Thrones S02E03</p>
              <div class="goto-film hidden"><i class="fa fa-film"></i>查看影片详情</div>
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

            </div>
            <div class="panel-body">
              <div class="detail-wrapper">
                <div class="img-wrapper">
                  <img src="~img/tvplay/tvplay16.jpg" alt="" />
                  <div class="grade star45"><!--这里提供0-5星的几种class，star00零星,star05半星，star10一星，star45四星半以此类推，颜色也是根据class自动适配-->
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <i class="star"></i>
                    <span class="score">9<span class="point">.8</span></span>
                  </div>
                  <div class="btn">
                    <i class="fa fa-film"></i>
                    <span class="desc">影片详情</span>
                  </div>
                </div>
                <form class="form-wrapper">
                  <div class="form-group form-group-1s3">
                    <span class="label">本集中文名</span>
                    <span class="detail" v-text="info.episodeInfo.nameChs"></span>
                  </div>
                  <div class="form-group form-group-1s3">
                    <span class="label">本集原名</span>
                    <span class="detail"  v-text="info.episodeInfo.name"></span>
                  </div>
                  <div class="form-group form-group-1s3">
                    <span class="label">播放时间</span>
                    <span class="detail" v-text="info.episodeInfo.time"></span>
                  </div>
                  <div class="form-group">
                    <span class="label">详细描述</span>
                    <p class="detail" v-text="info.episodeInfo.intro"></p>
                    <p class="detail">该集编剧为 <span v-text="info.episodeInfo.scenarist.join('和')"></span>，导演为 <span v-text="info.director.join('和')"></span>。</p>
                  </div>
                </form>

              </div>
              <div class="alert alert-info alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <p>本字幕僅供已購買正版視頻的用戶下載幫助理解劇情之用，所産生的一切後果將由您自行承擔</p>
                <p>如何使用外掛字幕文件，請進入影視網址導航站查看教程：<a href="#">影视网址大全</a></p>
              </div>

            </div>
          </div>
          <div class="panel-inner">
           <comment type="2"></comment>
          </div>
        </div>
        <div class="col-xs-2 col-sidebar">
          <sidernav></sidernav>
        </div>
      </div><!--row end-->
    </div><!--ui-limit end-->
  </div><!--ui-content end-->

</template>

<script>
  import searchcom from '../common/serarch/search';
  import comment from '../common/comment/main';
  import sidernav from './sub/siderNav';
    export default {
      name: "episode2",
      data(){
        return{
            info:''
        }
      },
      components:{searchcom,comment,sidernav},
      methods:{
        init(){

        },
        getInfo(){
          var self = this;
          var params ={
            id:this.$route.params.id
          };
          Request.get('../static/lib/temp_data/film-detail-episode2.json',params,(data)=>{
            self.info = data;
          })
        }
      },
      created(){
        this.getInfo();
      }
    }
</script>

<style scoped>

</style>
