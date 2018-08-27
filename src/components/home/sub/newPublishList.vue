<template>
  <div class="panel">
    <div class="panel-heading">
      <span class="desc">最新发布</span>
    </div>
    <div class="panel-body">
      <ul class="play-list play-list-newfilm">
        <li v-for="film in newPublishList">
          <div class="img-item">
            <div class="tags">
                <span class="name">
                  {{film.released}}
                  <template v-if="film.status ==2">
                    首播
                  </template>
                  <template v-else>
                    上映
                  </template>
                </span>
              <span class="type" v-text="film.type"></span>
              <ul class="corner bottom left">
                <li v-text="film.type"></li>
              </ul>
              <ul class="corner bottom right">
                <li v-text="film.contry"></li>
              </ul>
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
    name: "newpublishlist",
    data() {
      return {
        newPublishList: [],
      }
    },
    methods: {
      getData() {
        Request.get("../static/lib/temp_data/common/tvAndFilmData.json", null, (data) => {
          this.newPublishList = data.newPublishList;
        })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
