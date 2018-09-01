<template>
  <!---------content------------>
  <div class="ui-content">
    <div class="ui-limit">
      <!---------search------------>
      <searchcom></searchcom>

      <div class="row row-content row-content-2nd">
        <div class="col-xs-9 col-box">
          <div class="infomation-content" v-if="info">
            <div class="title">
              <h3 v-text="info.title"></h3>
            </div>
            <div class="sub-title">
              <span class="user" v-text="info.author"></span>
              <span class="date" v-compute-date="info.publishTime"></span>
              <div class="info">
                <span class="type"  v-text="info.type"></span>
                <span class="view" title="阅读数" v-compute-numbybit="info.viewed"></span>
              </div>
              <span class="ctrl"><!--普通用户没有编辑删除，只有收藏-->
								<a href="#" class="fav"><i class="fa fa-star"></i>收藏</a>
								<a href="#">编辑</a>
								<a href="#" data-toggle="modal" data-target="#delete">删除</a>
							</span>
            </div>
            <hr />
            <div class="well" v-text="info.sub">
            </div>
            <template v-for="content in info.content">
              <img :src="content.src" alt=""  v-if="content.type=='img'"/>
              <p v-else-if="content.type==='text'" v-text="content.content"></p>
              <h4 v-else-if="content.type==='title'" v-text="content.content"></h4>
            </template>

          <!--评论-->

            <comment type="1"></comment>

          </div>
        </div>
        <div class="col-xs-3 col-sidebar">
          <realtiveacti :id="$route.params.id"></realtiveacti>
        </div>
      </div>
    </div><!--ui-limit end-->
  </div><!--ui-content end-->

<!--

  &lt;!&ndash; Modal &ndash;&gt;
  <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">删除内容</h4>
        </div>
        <div class="modal-body">
          <h4>是否要删除本内容？</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-danger">删除</button>
        </div>
      </div>
    </div>
  </div>
  &lt;!&ndash; Modal &ndash;&gt;
  <div class="modal fade" id="fobidden" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">禁止发言</h4>
        </div>
        <div class="modal-body">
          <h4>是否要禁止此用户发言？</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-danger">禁止</button>
        </div>
      </div>
    </div>
  </div>

  &lt;!&ndash; Modal &ndash;&gt;
  <div class="modal fade" id="editcomm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">编辑评论</h4>
        </div>
        <div class="modal-body">
          <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>

  &lt;!&ndash; Modal &ndash;&gt;
  <div class="modal fade" id="report-user" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">举报用户</h4>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="checkbox-wrapper">
              <label><input type="checkbox" value="色情暴力恐怖"><span class="desc">色情暴力恐怖</span></label>
              <label><input type="checkbox" value="不文明无素质言论"><span class="desc">不文明无素质言论</span></label>
              <label><input type="checkbox" value="涉及政治与活动"><span class="desc">涉及政治与活动</span></label>
              <label><input type="checkbox" value="涉嫌广告"><span class="desc">涉嫌广告</span></label>
              <label><input type="checkbox" value="与本资源内容无关"><span class="desc">与本资源内容无关</span></label>
              <label><input type="checkbox" value="看不顺眼"><span class="desc">看不顺眼</span></label>
            </div>
            <textarea class="form-control" placeholder="补充说明"  name="" id="" cols="30" rows="5"></textarea>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
-->


</template>

<script>
  import searchcom from '../common/serarch/search';
  import comment from '../common/comment/main';
  import realtiveacti  from './sub/relativeActivity';
    export default {
      name: "snsActivity",
      components:{searchcom,comment,realtiveacti},
      data(){
        return {
          info:''
        }
      },
      methods:{
        getInfo(){
          var self = this;
          var params ={
            id:this.$route.params.id
          };
          Request.get('../static/lib/temp_data/infomation-detail-2.json',params,(data)=>{
            self.info = data.activity;
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
