<template>
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
        <hotinfo></hotinfo>
        <filmcomment></filmcomment>
        <newfilm></newfilm>
        <recomment></recomment>
        <news></news>
      </div>
    </div>
  </div>
</template>

<script>
  import hotinfo from'./hotinfo';
  import filmcomment from'./filmComment';
  import newfilm from './newFilm';
  import recomment from './recomment';
  import news  from './news';

    export default {
      name: "index",
      components: { hotinfo,filmcomment,newfilm,recomment,news },
      methods:{
          init(){
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
            },1000);
          }
      },
      mounted(){
        setTimeout(this.init,1000)
      }
    }
</script>

<style scoped>

</style>
