<template>
  <div class="panel-inner" v-if="memList.length>0">
    <div class="panel-inner-heading">
      <span class="desc">本区活跃会员</span>
    </div>
    <div class="panel-inner-body">
      <ul class="user-list-side" >
        <li v-for="mem in memList">
          <div class="user-head">
            <img :src="mem.avatar" alt="" />
          </div>
          <span class="user-name">aYin</span>
          <span class="user-class" :class="'user-class'+mem.userClass">
              <template v-if="!mem.userClass">
                    普通会员
                </template>
                <template v-else-if="mem.userClass ==1">
                    初级会员
                </template>
                <template v-else-if="mem.userClass ==2">
                    中级会员
                </template>
                <template v-else-if="mem.userClass ==3">
                    高级会员
                </template>
                <template v-else-if="mem.userClass ==5">
                    黄金会员
                </template>
                <template v-else-if="mem.userClass ==6">
                    至尊会员
                </template>
          </span>
          <span class="desc" v-text="mem.commentNum+'条评论'"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "activeMem",
      data(){
        return {
          memList:[]
        }
      },
      methods:{
        getList(){
          var self = this;
          var params ={
            id:this.id
          };
          Request.get('../static/lib/temp_data/film-detail.json',params,(data)=>{
            self.memList = data.activeMem;
          })
        },
      },
      created(){
        this.getList()
      },
      props:['id']
    }
</script>

<style scoped>

</style>
