<template>
  <div class="siderbar-wrapper">
    <div class="panel-inner">
      <div class="panel-inner-heading">
        <span class="desc">单集导航</span>
      </div>
      <div class="panel-inner-body">
        <div class="panel-group" id="episoda-nav" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default" v-for="(episode,ind) in episodeList">
            <div class="panel-heading" role="tab" id="heading1">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#episoda-nav" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  第 <span v-text="episodeList.length-ind"></span>季
                </a>
              </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1">
              <div class="panel-body">
                <ul class="btn-wrapper">
                  <li v-for="(detail,index) in episode">
                    <button class="btn"  @click="goDetail(detail.id)" v-text="episode.length-index"></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "siderNav",
      data(){
        return {
          episodeList:[]
        }
      },
      methods:{
        getInfo(){
          var self = this;
          var params ={
            id:this.id
          };
          Request.get('../static/lib/temp_data/common/tvAndFilmData.json',params,(data)=>{
            self.episodeList = data.episodeList.reverse();//数据是正序排列，前端是倒序，所以reverse一下
            self.episodeList.forEach((ele,i)=>{
              ele = ele.reverse()
            })
          })
        }
      },
      created(){
        this.getInfo()
      },
      props:['id']
    }
</script>

<style scoped>

</style>
