<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">全站热门</span>
    </div>
    <div class="panel-body">
      <ul class="play-list play-list-topdown play-list-topdown-ix">
        <li v-for="(film,ind) in hotfilmArr" v-if="ind<18">
          <div class="img-item">
            <div class="desc" v-text="film.episode"></div>
            <div class="tags">
              <span class="name" v-text="ind+1"></span>
              <span class="type" v-text="film.type"></span>
              <ul class="corner bottom left">
                <li v-text="film.genre"></li>
              </ul>
              <ul class="corner bottom right">
                <li  v-text="film.country"></li>
              </ul>
            </div>
            <div class="count" v-text="film.count"></div>
            <div class="desc"  v-text="film.episode"></div>
            <img :src="film.imgUrl" alt="">
          </div>
          <p class="name-chs" v-text="film.nameChs"></p>
          <p class="name-eng" v-text="film.nameEng"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hot-down-load",
      data(){
        return {
          hotfilmArr:[],      //全站热门
        }
      },
      methods:{
        getData(){
          var self = this;
          var params ={

          };
          Request.get('../static/lib/temp_data/common/tvAndFilmData.json',params,(data)=>{
            self.hotfilmArr = data.hotfilmArr;
          })
        }
      },
      created(){
        this.getData()
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
