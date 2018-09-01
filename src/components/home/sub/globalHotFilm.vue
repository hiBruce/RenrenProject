<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">全球热映</span>
    </div>
    <div class="panel-body">
      <div class="hotfilm-wrapper">
        <ul class="hotfilm-tabs">
          <li :class="!ind?'active':''" v-for="(film,ind )  in hotfilmArr" v-text="ind+1" v-if="ind<3"></li>
        </ul>
        <div class="scroll-wrapper"><div class="scroll">
          <div class="hotfilm-content tab-content ani-slide">
            <div class="film active" v-for="(film,ind) in hotfilmArr" :class="ind?'':'active'" v-if="ind<3">
              <div class="img-item">
                <div class="score" v-text="film.score"></div>
                <img :src="film.imgUrl" alt="" />
              </div>
              <ul class="film-info">
                <li class="name" v-text="film.name"></li>
                <li><span class="type">类型</span><span class="desc" v-text="film.type"></span></li>
                <li><span class="type">导演</span><span class="desc" v-text="film.director"></span></li>
                <li><span class="type">上映</span><span class="desc" v-text="film.time"></span></li>
                <li><span class="type">主演</span><span class="desc">
												<p v-for="name in film.leadActor" v-text="name"></p>
											</span></li>
              </ul>
              <p class="desc" v-text="film.desc"></p>
            </div>
          </div>
        </div></div><!--scroll element end-->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "globalHotFilm",
      data () {
        return {
          hotfilmArr:[],
        }
      },
      methods:{
        getData(data){
          Request.get("../static/lib/temp_data/common/tvAndFilmData.json",null,(data)=>{
            this.hotfilmArr = data.hotfilmArr;
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
