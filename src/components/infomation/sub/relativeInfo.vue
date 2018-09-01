<template>
  <div class="panel-inner">
    <div class="panel-inner-heading">
      <span class="desc">相关资讯</span>
      <span class="right">
									<a class="ctrl more">更多 <i class="fa fa-chevron-circle-right"></i></a>
								</span>
    </div>
    <div class="panel-inner-body">
      <ul class="info-list-side" v-if="infoList.length>0">
        <li >
          <img :src="infoList[0].imgUrl" alt="">
          <span class="type" v-text="infoList[0].type"></span>
          <span class="title" v-text="infoList[0].title"></span>
          <span class="writer" v-text="'文/'+infoList[0].author"></span>
          <span class="date"  v-compute-date="infoList[0].date"></span>
        </li>
        <li v-for="(info,ind) in infoList" v-if="ind>0 && ind<5">
          <span class="type" v-text="info.type"></span>
          <span class="title" v-text="info.title"></span>
          <span class="writer" v-text="'文/'+info.author"></span>
          <span class="date" v-compute-date="info.date"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "relativeInfo",
      data(){
        return{
          infoList:[]
        }
      },
      methods:{
        getListData(){
          var self = this;
          var params={
            id:this.id
          };
          Request.get('../static/lib/temp_data/common/info.json',params,(result)=>{
            self.infoList = result.infomation;
          })
        }
      },
      created(){
        this.getListData()
      },
      props:['id']
    }
</script>

<style scoped>

</style>
