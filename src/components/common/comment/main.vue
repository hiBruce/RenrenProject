<template>
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
    </div>
    <commentlist></commentlist>
  </div>
</template>
<script>
  import commentlist from './list'
    export default {
      name: "commentMain",
      data(){
        return{
          commentContent:''
        }
      },
      components: { commentlist },
      methods:{
        /**
        * 提交评论
        * */
        submitComment:function(){
          var param={
            content:this.commentContent
          };
        }
      },
      created(){
      }
    }
</script>

<style scoped>

</style>
