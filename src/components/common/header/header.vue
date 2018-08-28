<template>
  <!---------header------------>
  <header class="ui-header">
    <div class="ui-logo">
      <img src="~img/logo.png" class="logo" alt="zimuzu.tv"/>
      <div class="logo-bg"></div>
    </div>
    <ul class="ui-nav ui-mnav">
      <li class="" :class="{'active':$route.path == '/' }">
        <router-link to="/" >首页</router-link>
      </li>
      <li :class="{'active':$route.path == '/info' }">
       <router-link to="/info"  >资讯</router-link>
      </li>
      <li>字幕</li>
      <li :class="{'active':$route.path == '/filmstore' }">
        <router-link to="/filmstore">
          影视库
        </router-link>
      </li>
      <li>今日更新</li>
      <li>排行榜</li>
      <li class="ui-dropdown" data-toggle="tooltip" data-placement="right" title="更多菜单">
        <i class="fa fa-caret-down"></i>
        <ul class="ui-dropdown-box">
          <li>更多菜单<span class="badge">1</span></li>
          <li>更多菜单<span class="badge">4</span></li>
          <li class="divider"></li>
          <li>更多菜单</li>
        </ul>
      </li>
    </ul>

    <ul class="ui-nav ui-snav">
      <li class="ui-dropdown dropdown-app">
        <i class="fa fa-fixed fa-mobile-alt"></i>APP下载
        <ul class="ui-dropdown-box">
          <li class="ialess">
            <ul class="inline-wrapper">
              <li>
                <img src="~img/qrcode/code-APP.png" alt="" class="qr-code"/>
                <p>扫码下载手机APP</p>
              </li>
              <li>
                <img src="~img/qrcode/code-H5.png" alt="" class="qr-code"/>
                <p>扫码访问手机H5版</p>
              </li>

            </ul>
          </li>
        </ul>
      </li>
      <li class="ui-dropdown dropdown-message" data-toggle="tooltip" data-placement="left" title="收藏夹">
        <i class="fa fa-star"></i>
        <ul class="ui-dropdown-box">
          <li>全部<span class="badge" v-text="getCollectTotal"></span></li>
          <template v-if="collectinonArr.length>0">
            <li v-for="collect in collectinonArr">{{collect.name}}<span class="badge" v-text="collect.num"></span></li>
          </template>

        </ul>
      </li>
      <li class="ui-dropdown dropdown-message" data-toggle="tooltip" data-placement="left" title="消息">
        <i class="fa fa-envelope"></i>
        <ul class="ui-dropdown-box" v-if="messageArr">
          <li>私信<span class="badge" v-text="messageArr.privMesNum"></span></li>
          <li>系统通知<span class="badge" v-text="messageArr.sysMesNum"></span></li>
          <li>互动消息<span class="badge" v-text="messageArr.interMesNum"></span></li>
        </ul>
      </li>
      <li class="ui-dropdown dropdown-user" v-if="userInfo">
        <!--头像这里我从images中随意找了一张图片作为默认头像，当用户信息中不存在头像时，会渲染默认头像-->
        <img class="img-head" :src="userInfo.avatarUrl || 'static/images/head/gray.png'" alt=""/>
        <span class="desc" v-text="userInfo.userName"></span>
        <ul class="ui-dropdown-box">
          <li class="user-info-wrapper">
            <img class="img-head" :src="userInfo.avatarUrl || 'static/images/head/gray.png'" alt=""/>
            <div class="user-info">
              <p class="user-name">
                <span v-text="userInfo.userName"></span>
                <span class="badge" :class="'user-class-'+userInfo.userClass">
										<template v-if="userInfo.userClass == 1">
											普通会员
										</template>
										<template v-else-if="userInfo.userClass == 2">
											初级会员
										</template>
										<template v-else-if="userInfo.userClass == 3">
											中级会员
										</template>
									</span>
              </p>
              <p class="user-type">
                <template v-if="userInfo.userType==1">
                  剧集后期组
                </template>
              </p>
            </div>
          </li>
          <li class="divider"></li>
          <li>
            <ul class="tags">
              <li><p v-text="tags.dynamicNum"></p>
                <p>动态</p></li>
              <li><p v-text="tags.commentNum">68</p>
                <p>评论</p></li>
              <li><p v-text="tags.accPointsNum">35</p>
                <p>积分</p></li>
              <li><p v-text="tags.loginDaysNum">231</p>
                <p>登录天数</p></li>
            </ul>
          </li>
          <li class="divider"></li>
          <li class="title">我要发布：</li>
          <li>
            <ul class="tags">
              <li>新闻资讯</li>
              <li>收视快报</li>
              <li>新剧评测</li>
              <li>片单推荐</li>
            </ul>
            <ul class="tags">
              <li>剧评</li>
              <li>影评</li>
              <li>字幕</li>
              <li>公开课</li>
              <li>电影</li>
              <li>剧集</li>
              <li>求档</li>
            </ul>
          </li>
          <li class="divider"></li>
          <li>
            <ul class="tags">
              <li><i class="fa fa-cog"></i> 个人资料</li>
              <li data-toggle="modal" data-target="#modal-theme" onclick="themeActive()"><i class="fa fa-star"></i> 主题设置
              </li>
              <li><i class="fa fa-sign-out"></i> 退出登录</li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="ui-dropdown dropdown-links">
        <i class="fa fa-bars" title="更多功能"></i>
        <ul class="ui-dropdown-box">
          <li>互助求档</li>
          <li>播出表</li>
          <li class="divider"></li>
          <li>官方微博</li>
          <li>官方微信</li>
          <li>人人词典</li>
          <li>字幕工具</li>
          <li>加入字幕组</li>
          <li>内部</li>
          <li class="divider"></li>
          <li>美女视频</li>
        </ul>
      </li>
    </ul>
    <!-- Modal -->
    <div class="modal fade" id="modal-theme" tabindex="-1" role="dialog" aria-labelledby="modal-theme-title">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="modal-theme-title">主题设置</h4>
          </div>
          <div class="modal-body">
            <div class="alert alert-info alert-dismissible hidden" role="alert">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>提示：</strong>用户可自定义页面主题风格，点击后直接预览并保存所选主题。
            </div>

            <div class="alert alert-info alert-dismissible" role="alert">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>开发提示：</strong>
              <p>目前规划的主题为用户4-5个，分别是：深邃蓝（默认）、天空蓝、碧玉绿、暗夜黑、热情红（均为暂定）；</p>
              <p>节日主题不出现在主题菜单由管理员后台设定，设定完毕后，优先级高于用户主题，节日主题分别是：春节、元旦、圣诞、万圣节、端午节、哀悼日等等....</p>
              <strong class="t-re">请注意：目前深度完成的主题为“深邃蓝”与“天空蓝”，其余主题仅为初步规划或者完成度不高。</strong>
            </div>

            <ul class="theme-list">
              <li><div class="theme-darkblue"><span class="title">深邃蓝</span><span class="select-mark"></span></div></li>
              <li><div class="theme-lightblue"><span class="title">天空蓝</span><span class="select-mark"></span></div></li>
              <li><div class="theme-holidayred"><span class="title">节日红<p>默认隐藏</p></span><span class="select-mark"></span></div></li>
              <li><div class="theme-darkred"><span class="title">沉稳红</span><span class="select-mark"></span></div></li>
              <li><div class="theme-green"><span class="title">碧玉绿</span><span class="select-mark"></span></div></li>
              <li><div class="theme-black"><span class="title">暗夜黑</span><span class="select-mark"></span></div></li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    name: "headerCom",
    data(){
      return {
        tags:{},           //用户信息相关的数据，如积分、登录天数等
        userInfo:{},       //用户信息
        collectinonArr:[], //获取收藏相关参数
        messageArr:{},     //获取消息数量，这里我把三个消息合并在一个对象中了，如果实际业务是3个接口，请拆分下这个对象
      }
    },
    methods: {
      /*
      * 获取用户基本信息
      * @description  目前是从json文件中获取，所以一次性全部取出，如真实数据为多个接口，就需要把此方法拆分
      * */
      getUserData:function(data){
        var self = this;
        Request.get('../static/lib/temp_data/user.json',null,function(data){
          self.collectinonArr = data.collectinonArr ? data.collectinonArr :[] ;
          self.userInfo = data.userInfo;
          self.tags = data.tags;
          self.messageArr = data.messageArr;
        })

      },
    },
    computed: {
      /*
      * 自动计算顶部收藏总数
      * */
      getCollectTotal() {
        var total = 0;
        this.collectinonArr.forEach(function (ele) {
          total += parseInt(ele.num);
        });
        return total;
      }
    },
    created(){
      this.getUserData()
    }
  }
</script>

<style scoped>

</style>
