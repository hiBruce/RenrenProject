<template>
  <!--v-get-data是我自定义的一个临时指令，用来获取data.json数据，当有真实数据时删除此属性，此指令定义在static/lib/3rd/vue-directive-->
  <div id="app">
    <header-com></header-com>
    <router-view/>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerCom from './components/header/header'
import footerCom from './components/footer/footer'

export default {
  name: 'App',
  data () {
    return {
      temporaryData:{},  //此数据是由v-get-data指令获取来的data.json中的临时数据，当存在真实数据时，需删除
    }
  },
  components: { headerCom,footerCom },
  methods:{
    init:function(){
      var defaultTheme="theme-darkblue";
      var themeS=$(".theme-list");
      var themeSC=$(themeS).children();
      if($.cookie("theme")!=null){
        $("html").addClass($.cookie("theme"));
      }else{
        if(defaultTheme!=null){
          $("html").addClass(defaultTheme);
          $(themeS).find("."+defaultTheme).addClass("active")
        }else{$(themeSC).first().next().addClass("active");}
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>

</style>
