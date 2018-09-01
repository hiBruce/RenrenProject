<template>
  <div class="panel-inner">
    <div class="panel-inner-heading">
      <span class="left" >
        <a class="ctrl more" data-toggle="modal" data-target="#recommend"><i class="fa fa-thumbs-up"></i> 我推荐</a>
      </span>
      <span class="desc">同类影片 </span>
      <span class="right" >
        <a class="ctrl more" data-toggle="modal" data-target="#similar-film">更多 <i class="fa fa-chevron-circle-right"></i></a>
      </span>
    </div>
    <div class="panel-inner-body">
      <ul class="play-list play-list-col3">
        <li v-for="(film,ind) in filmList" v-if="ind<9">
          <div class="img-item">
            <div class="tags">
              <span class="name" v-text="film.contry"></span>
              <span class="type" v-text="film.type">影视剧</span>
            </div>
            <img :src="film.imgUrl" alt="">
          </div>
          <p class="name-chs" v-text="film.nameChs"></p>
          <p class="name-eng"  v-text="film.nameEng"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "relativeFilm",
      data(){
        return {
          filmList:[]
        }
      },
      methods:{
        getData(){
          var self = this;
          var params ={
            id:this.id
          };
          Request.get('../static/lib/temp_data/common/movies.json',params,(data)=>{
            self.filmList = data.movies;
          })
        }
      },
      created(){
        this.getData();
      },
      props:['id']
    }
</script>

<style scoped>

</style>
