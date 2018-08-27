<template>
  <div class="panel panel-client">
    <div class="panel-heading">
      <span class="desc">人人影视软件</span>
    </div>
    <div class="panel-body">
      <ul class="client-list">
        <li>
          <div class="icon"><i class="fab fa-windows"></i></div>
          <p class="title">Windows<br/>客户端</p>
          <p class="desc">适用于Win7以上的个人电脑</p>
        </li>
        <li>
          <div class="icon"><i class="fab fa-apple"></i></div>
          <p class="title">Mac<br/>客户端</p>
          <p class="desc">适用于运行OSX系统的苹果电脑</p>
        </li>
        <li>
          <img class="qr-code" src="static/images/qrcode/code-APP.png" alt="" />
          <div class="icon"><i class="fa fa-mobile-alt"></i></div>
          <p class="title">手机APP</p>
          <p class="desc">手机扫码直接进行下载安装</p>
        </li>
        <li>
          <div class="icon"><i class="fa fa-tv"></i></div>
          <p class="title">TV客户端</p>
          <p class="desc">适用于安卓系统的智能电视与机顶盒</p>
        </li>
        <li class="more"><i class="fa fa-th"></i> 更多客户端</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "client"
    }
</script>

<style scoped>

</style>
