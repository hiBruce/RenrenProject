<template>
    <div>
      <div class="comment-list">
        <div class="comment-item" v-for="(comment,ind) in commentList" v-if="ind<6*page">
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
            </div>
            <div class="comment-title-right">
              <span class="date"  v-compute-date="comment.time"></span>
              <span class="hot" v-if="comment.hot">Hot</span>
            </div>
          </div>
          <div class="comment-body">
            <p v-html="comment.content"></p>
          </div>
          <div class="comment-ctrl">
            <a href="javascript:void(0)" @click="showComment($event,ind)"><i class="fa fa-reply"></i>回复</a>
            <a href="javascript:void(0)"><i class="fa fa-thumbs-up"></i>赞<span class="badge" v-text="comment.agreedNum"></span></a>
            <a href="javascript:void(0)"><i class="fa fa-thumbs-down"></i>踩<span class="badge"  v-text="comment.opposeNum"></span></a>
            <a href="javascript:void(0)"><i class="fa fa-user-secret"></i>举报</a>
          </div>

          <div class="comment-sub" v-if="comment.comment && comment.comment.length>0">
            <div class="comment-item" v-for="userComment in comment.comment">
              <div class="comment-title">
                <div class="comment-title-left">
                  <div class="user-head">
                    <img :src="userComment.avatar" alt=""/>
                  </div>
                  <a href="#" class="user-name">{{userComment.author}}</a>
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
															<a href="#"><i class="fa fa-comments"></i>查看对话</a>
														</span>
                </div>
                <div class="comment-title-right">
                  <span class="date"  v-compute-date="userComment.time"></span>
                </div>
              </div>
              <div class="comment-body">
                <p v-text="userComment.content"></p>
              </div>
            </div>
            <ul class="pagination-simple">
            </ul>
          </div>

        </div>
      </div><!--comment-list end-->

      <div class="load-more">
        <a href="javascript:void(0)" @click="getMoreList">
          <template v-if="page<pageTotal">
            点击这里加载更多内容<i class="far fa-angle-double-down"></i>
          </template>
          <template v-else>
            已经到底了
          </template>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "list2",
      data(){
        return{
          commentList:[],
          page:1,
          pageTotal:3,
          pageArr:[]
        }
      },
      methods:{
        getDetailData(){
          var self = this;
          var params={};
          Request.get('../static/lib/temp_data/common/commentList.json',params,(result)=>{
            self.commentList = result.commentList;
            if(self.commentList.length>0){
              self.commentList.forEach(function(ele,i){
                ele.page =1;
                ele.comment =[]
              })
            }

          })
        },
        getMoreList(){
          if(this.page<=this.pageTotal){
            this.page++;
          }
        },
        /**/
        showComment(e,ind){
          var par = $(e?e.target:window.event).parents(".comment-item");
          if( par.find(".comment-sub").css("display") ==='block'){
            par.find(".comment-sub").hide()
          }else{

            this.getLevel2CommentList(ind,1,function(){
              setTimeout(function(){
                par.find(".comment-sub").show();
              },0)
            },par)
          }
        },
        getLevel2CommentList(ind,page,cb,par){
          var self = this;
          var item = this.commentList[ind];
          var params ={
            id:item.id,
            page:page||1
          };

          Request.get('../static/lib/temp_data/common/commentList.json',params,(result)=>{
            var item =  JSON.parse(JSON.stringify(self.commentList[ind]));
            item.comment =result.commentLevel2List.slice(params.page*10,params.page*10+10);
            self.$set(self.commentList,ind,item);
            if(params.page==1){
              setTimeout(function(){
                self.initPageArr(ind,3,params.page,par);//暂时写死总页码为3
              },10)
            }
            cb&&cb();
          })
        },
        initPageArr(ind,pageTotal,nowPage,par){
          var self = this;
          if(this.pageArr[ind]){
            this.pageArr[ind] = null;
          };
          if(!par){
            par = $(".comment-sub").find('.comment-item').eq(ind)
          }
          var pageControl =  new Pagination({
            container: par.find(".pagination-simple"),
            pageTotal:pageTotal,
            nowPage:nowPage,
            callback: function (page) {
              self.getLevel2CommentList(ind,page)
            }
          });
          self.pageArr.splice(ind,pageControl)

        }
      },
      created(){
        this.getDetailData()
      }
    }
</script>

<style scoped>

</style>
