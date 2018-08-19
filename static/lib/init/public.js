//主题
window.themeActive = function () {
  var themeItem = $(".theme-list li div");
  $(themeItem).each(function (i, item) {
    if ($(item).hasClass($.cookie("theme"))) {
      $(item).parent().addClass("active");
    }
  });
}


$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip()
//主题列表点击动作
$(".theme-list li").bind("click", function () {
  debugger
  var styleName = $(this).children("div").attr("class"),
    html = $("html");
  $.cookie("theme", styleName, {expires: 30});
  html.removeClass(getTheme(html));
  html.addClass(styleName);
});

$(".comment-showSub").on("click", function () {
  if ($(this).attr("data-num") != "0") {
    var tp = $(this).parents(".comment-item");
    if (tp.hasClass("comment-item-showSub")) {
      tp.removeClass("comment-item-showSub");
      $(this).find(".desc").text($(this).attr("data-num") + " 条评论");
    } else {
      tp.addClass("comment-item-showSub");
      $(this).find(".desc").text("收起评论");
    }
  }
});

$(".fav").interaction({type: "checkbox"});
$(".play-list-select").interaction({type: "checkbox"});
$(".theme-list").interaction({type: "radio"});

$(".switch-btn").on("click", function () {
  $(this).toggleClass("active");
});
$(".viewType-toggle").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).find(".fa").removeClass("fa-th-list").addClass("fa-th");
    $(this).find(".desc").text("切换缩略图视图");
    $(".viewType-toggle-support").not(".no-switch").removeClass("view-thumbnail");

  } else {
    $(this).addClass("active");
    $(this).find(".fa").removeClass("fa-th").addClass("fa-th-list");
    $(this).find(".desc").text("切换列表视图");
    $(".viewType-toggle-support").not(".no-switch").addClass("view-thumbnail");
  }
});

$(".commentAll-toggle").on("click", function () {
  var all = $(this).add(".comment-list-interaction .comment-toggle"),
    sub = $(".comment-list-interaction .comment-toggle");
  if ($(this).hasClass("active")) {
    $(all).removeClass("active");
    $(all).find(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
    $(this).find(".desc").text("显示所有回复");
    $(sub).find(".desc").text("显示回复");
    $(".comment-list-interaction .comment-item").removeClass("comment-item-showSub");

  } else {
    $(all).addClass("active");
    $(all).find(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
    $(this).find(".desc").text("隐藏所有回复");
    $(sub).find(".desc").text("隐藏回复");
    $(".comment-list-interaction .comment-item").addClass("comment-item-showSub");
  }
});

$(".comment-toggle").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).find(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
    $(this).find(".desc").text("显示回复");
    $(this).parentsUntil(".content-wrapper").removeClass("comment-item-showSub");
  } else {
    $(this).addClass("active");
    $(this).find(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
    $(this).find(".desc").text("隐藏回复");
    $(this).parentsUntil(".content-wrapper").addClass("comment-item-showSub");
  }
});

$(".filter-simple").interaction({type: "radio"});
$(".select-wrapper").interaction({type: "radio"});
$(".filter-ctrl .switch-btn").on("click", function () {
  if ($(this).hasClass("active")) {
    $(".filter-simple-wrapper").fadeIn(300);
  } else {
    $(".filter-simple-wrapper").fadeOut(300);
  }
});

/*
* 新增方法：判断参数是否为数组
* */
window.isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};


/*
* 新增方法1、基于axios的ajax封住
* */
import axios from 'axios'
/*
* get请求，
* @params:  url:string 必须参数 请求路径   params:object 非必须参数 请求参数
*           successCb:function 非必须参数  请求成功回掉   errorCb:function 非必须参数 请求失败回掉
* */
Request.get = (url,params,successCb,errorCb)=>{
  axios.get(url,{
    params:params
  })
  .then(function(response){
      if(response.status === 200){
        successCb && successCb(response.data)
      }
  })
  .catch(function(err){
    errorCb && errorCb(err);
  })
};
/*
* post请求，
* @params:  url:string 必须参数 请求路径   params:object 非必须参数 请求参数
*           successCb:function 非必须参数  请求成功回掉   errorCb:function 非必须参数 请求失败回掉
* */
Request.post = (url,params,successCb,errorCb)=>{
  axios.post(url, params)
    .then(function (response) {
      if(response.status === 200){
        successCb && successCb(response.data)
      }
    })
    .catch(function (error) {
      errorCb && errorCb(err);
    });
};

/*
* 多请求并发：
* @description:多个请求同时发出，然后等最后一个返回后再同时处理的情况
* @params:  requestArr:Array 多请求的参数数组，每个请求为一个对象，对象内容：{url,params,method}
*           successCb:function 非必须参数  请求成功回掉   errorCb:function 非必须参数 请求失败回掉
*  requestArr示例：
*           [{url:'/a',params:{test:111},method:'get'},{url:'/b',params:{test2:111},method:'post'}]
* */

Request.all = (requestArr,successCb,errorCb)=>{
  if(isArray(requestArr)){
    var paramArr =[];
    requestArr.forEach(function(ele,i){
      var newFun =''
      if(ele.method.toLowerCase() == 'get'){
        newFun = function(){
         return  axios.get(url,{params:params})
        }
      }else if(ele.method.toLowerCase() == 'post'){
        newFun = function(){
          return  axios.post(url,params)
        }
      }
      paramArr.push(newFun())
    });
    axios.all(paramArr)
      .then(axios.spread(function () {
        successCb && successCb(arguments)
      }));
  }else{
    throw Error('Request.all抛出错误：请传入正确的参数类型（第一个参数为数组对象）')
  }
};

