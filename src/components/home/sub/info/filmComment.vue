<template>
  <div class="content content-2">
    <!-- 影评剧评 开始 -->
    <ul class="info-list info-list-A1">
      <li  v-for="(info,ind)  in commentList">
        <div class="img-item">
          <div class="hot" v-if="info.hot">
            <template v-if="info.hot==1">
              热门
            </template>
            <template v-if="info.hot==2">
              独家
            </template>
          </div>
          <div class="tags">
            <span class="name" v-text="info.linkTo"></span>
            <span class="type" v-text="info.linkToType"></span>
            <ul class="corner bottom right">
              <li class="user" v-text="info.author"></li>
              <li class="date"  v-compute-date="info.date"></li>
            </ul>
            <ul class="corner bottom left">
              <li class="source" v-text="info.type"></li>
              <li class="view"  v-compute-numbybit="info.viewed"></li>
            </ul>
          </div>
          <img :src="info.imgUrl" alt="">
        </div>
        <p class="title" v-text="info.title"></p>
      </li>
    </ul>
  </div>
</template>

<script>
  //
    export default {
        name: "filmComment",
      data () {
        return {
          commentList:[],
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/info.json",null,(data)=>{
            this.commentList = data.commentList;
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
