<template>
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
</template>

<script>
    export default {
        name: "interactArr",
      data () {
        return {
          interactArr:[],
        }
      },
      methods:{
        init(){
          $.timer.set("load",function(){
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
          },1000);
        },
        getData(data){
          Request.get("../static/lib/temp_data/home.json",null,(data)=>{
            this.interactArr = data.interactArr;
          })
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
      created(){
        this.getData()
      },
      mounted(){
          setTimeout(this.init,100)
      }
    }
</script>

<style scoped>

</style>
