<template>
  <div class="panel-inner">
    <div class="panel-inner-heading">
      <span class="desc">关联影片</span>
    </div>
    <div class="panel-inner-body">
      <ul class="play-list play-list-col2">
        <li v-for="(film,ind) in filmList" v-if="ind<6">
          <div class="img-item">
            <div class="tags">
              <span class="name" v-text="film.contry"></span>
              <span class="type" v-text="film.type"></span>
            </div>
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
        name: "relativeFilm",
      data(){
          return{
            filmList:[]
          }
      },
      methods:{
        getListData(){
          var self = this;
          var params={};
          Request.get('../static/lib/temp_data/common/movies.json',params,(result)=>{
            self.filmList = result.movies;
          })
        }
      },
      created(){
        this.getListData()
      }
    }
</script>

<style scoped>

</style>
