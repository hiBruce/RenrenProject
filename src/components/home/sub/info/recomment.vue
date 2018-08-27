<template>
  <div class="content content-4">
    <ul class="info-list info-list-B1">
      <li v-for="(recom,ind) in recomList">
        <div class="img-item">
          <div class="hot" v-if="recom.hot">
            <template v-if="recom.hot == 1">
              hot
            </template>
            <template v-if="recom.hot == 2">
              独家
            </template>
          </div>
          <div class="tags">
            <span class="name" v-text="recom.linkTo"></span>
            <span class="type" v-text="recom.linkToType"></span>
            <ul class="corner top right">
              <li class="user" v-text="recom.author"></li>
              <li class="date" v-compute-date="recom.date"></li>
            </ul>
            <ul class="corner top left">
              <li class="source" v-text="recom.type"></li>
              <li class="view" v-compute-numbybit="recom.viewed"></li>
            </ul>
            <p class="sub-title" v-text="recom.subTitle"></p>
          </div>
          <img v-for="img in recom.imgUrl" :src="img" alt="">
        </div>
        <p class="title">给我们带来无数欢笑的动画界逗比们</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "recomment",
      data () {
        return {
          recomList:[],
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/recomList.json",null,(data)=>{
            this.recomList = data.recomList;
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
