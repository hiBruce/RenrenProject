<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">剧集更新</span>
    </div>
    <div class="panel-body">
      <ul class="play-list play-list-update">
        <li v-for="(update,ind) in plotUpdateArr" v-if="ind<16">
          <div class="img-item">
            <div class="desc" v-text="update.lastSN+update.lastEP"></div>
            <div class="tags">
              <div class="name" v-text="update.nameChs"></div>
              <div class="type" v-text="update.type"></div>
              <ul class="corner bottom left" ><li  v-text="update.type"></li></ul>
              <ul class="corner bottom right"  ><li v-text="update.country"></li></ul>
              <ul class="corner top left"><li  v-text="update.letterLanguage"></li></ul>
              <ul class="corner top right">
                <li  v-text="update.name">HDTVrip
                  <template v-if="!update.definition">
                    HDTVrip
                  </template>
                  <template v-else-if="update.definition==1">
                    720p
                  </template>
                  <template v-else-if="update.definition==2">
                    WEBHR
                  </template>
                  <template v-else-if="update.definition==3">
                    DVDrip
                  </template>
                  <template v-else-if="update.definition==4">
                    1080p
                  </template>
                </li>
              </ul>
            </div>
            <img :src="update.imgUrl" alt="">
          </div>
          <p class="name-chs"  v-text="update.nameChs"></p>
          <p class="name-eng" v-text="update.nameEng"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "plotUpdateArr",
      data () {
        return {
          plotUpdateArr:[],
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/tvAndFilmData.json",null,(data)=>{
            this.plotUpdateArr = data.plotUpdateArr;
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
