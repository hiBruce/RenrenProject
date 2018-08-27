<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">社区活动</span>
    </div>
    <div class="panel-body">
      <div class="community-activity" v-if="snsActivity">
        <img :src="snsActivity.imgUrl" alt="" />
        <h3 v-text="snsActivity.title"></h3>
        <p v-text="snsActivity.intro"></p>
        <button class="btn">我要参加</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "snsActivity",
      data () {
        return {
          snsActivity:{},
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/home.json",null,(data)=>{
            this.snsActivity = data.snsActivity;
          })
        },
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped>

</style>
