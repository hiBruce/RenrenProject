<template>
  <div class="panel panel-hot-comment">
    <div class="panel-heading">
      <span class="desc">热门短评</span>
    </div>
    <div class="panel-body">
      <ul class="hot-comment" v-if="hotShortComArr">
        <li v-for="hotCom in hotShortComArr">
          <div class="img-item">
            <div class="view" v-compute-numbybit="hotCom.viewed"></div>
            <img :src="hotCom.imgUrl" alt="" />
          </div>
          <p class="desc" v-text="hotCom.title"></p>
          <!-- -->
          <p class="info">{{hotCom.author}} 评《{{hotCom.linkTo}}》 <span v-compute-date="hotCom.date"></span><span class="score" v-text="hotCom.score"></span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hotShortComArr",
      data () {
        return {
          hotShortComArr:[],
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/info.json",null,(data)=>{
            this.hotShortComArr = data.hotShortComArr;
          })
        },
        init(){
          $.timer.set("load",function(){
            //热评 自动滚动初始化（不要修改参数）
            $(".hot-comment").slideContent({
              scrollHeight:153//每次滚动的距离
            });
          },1000);
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
