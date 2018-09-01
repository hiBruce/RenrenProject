<template>
  <div class="panel-inner">
    <div class="panel-inner-heading">
      <span class="desc">相关求档</span>
      <span class="left" >
								<a class="ctrl more"><i class="fa fa-edit"></i> 发布</a>
							</span>
      <span class="right" >
								<a class="ctrl more"  href="home-seek-help.html">更多 <i class="fa fa-chevron-circle-right"></i></a>
							</span>
    </div>
    <div class="panel-inner-body">
      <ul class="info-list-side">
        <li v-for="qd in qdList">
          <span class="title" v-text ="qd.title"></span>
          <span class="date" v-compute-date="qd.time"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "relativeQD",
      data(){
        return {
          qdList:[]
        }
      },
      methods:{
        getList(){
          var self = this;
          var params ={
            id:this.id
          };
          Request.get('../static/lib/temp_data/film-detail.json',params,(data)=>{
            self.qdList = data.qdList;
          })
        },
      },
      created(){
        this.getList()
      },
      props:['id']
    }
</script>

<style scoped>

</style>
