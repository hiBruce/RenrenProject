<template>
  <div class="siderbar-wrapper">
    <div class="panel-inner">
      <div class="panel-inner-heading">
        <span class="desc">相关活动</span>
        <span class="right">
									<a class="ctrl more">更多 <i class="fa fa-chevron-circle-right"></i></a>
								</span>
      </div>
      <div class="panel-inner-body">
        <ul class="info-list-side">
          <li v-for="list in actilist">
            <span class="type" v-text="list.type"></span>
            <span class="title" v-text="list.title"></span>
            <span class="writer" v-text="'文/'+list.writer"></span>
            <span class="date" v-compute-date="list.time"></span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "relativeActivity",
      data(){
        return {
          actilist:''
        }
      },
      methods:{
        getInfo(){
          var self = this;
          var params ={
            id:this.id
          };
          Request.get('../static/lib/temp_data/infomation-detail-2.json',params,(data)=>{
            self.actilist = data.relativeActi;
          })
        }
      },
      created(){
        this.getInfo();
      },
      props:['id']
    }
</script>

<style scoped>

</style>
