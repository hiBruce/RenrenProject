import Vue from 'vue'

/*
* 处理时间，此处默认传入的时间是时间戳格式
* */
Vue.directive("compute-date",{
    bind:function(el,binding,vnode){
       try{
         var time = Date.parse(new Date(binding.value));
       }catch(e){
         //throw Error("请传入正确的时间格式")
         return ;
       };
      if(!time){
        //throw Error("请传入正确的时间格式")
        return;
      };
        var str ="";
        var nowStamp = Date.parse(new Date());
        var text=(nowStamp - time)>0?'前':'后'
        var day = Math.abs(parseInt((nowStamp - time)/(60*60*1000*24)));
        var dictionaryArr =['一','二','三','四','五','六','七','八','九','十','十一','十二'];
        switch (day){
          case 0:
            resloveLessThanOneDay();
            break;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            str =dictionaryArr[day-1] +"天"+text;
            break;
          default:
            resloveMoreThanSeventDay()
            break;
        };
        /*
        * 处理小于一天的情况
        * */
        function resloveLessThanOneDay(){
          str= parseInt((nowStamp - time)/(60*60*1000))+'个小时'+text;
        };
        /*
        * 处理大于7天的
        * 此处未取精确数字，直接按一月30天计算
        * */
        function resloveMoreThanSeventDay(){
          var MonthNum = parseInt(day/30);
          if(MonthNum===0){
            str=dictionaryArr[parseInt(day/7)-1]+'个星期'+text
          }else if(MonthNum<12){
            str=dictionaryArr[MonthNum-1]+'个月'+text
          }else{
            str = '一年'+text
          }
        };
        $(el).text(str)
    },
});

/*
* 获取年
* */
Vue.directive("get-year",{
  bind:function(el,binding,vnode){
    try{
      var time = Date.parse(new Date(binding.value));
    }catch(e){
      throw Error("请传入正确的时间格式")
      return;
    };
    if(!time){
      throw Error("请传入正确的时间格式")
      return;
    }
    var year =new Date(time).getFullYear()

    $(el).text(year)
  },
});


/*
* 处理数字，当大于等于1万时，以万为单位显示，保留一位小数；当小于1万时，将数字以千位符分隔
* */

Vue.directive("compute-numbybit",{
  bind:function(el,binding,vnode){
    var num= binding.value;
    if(num>=10000){
      num= (num/1000).toFixed(1)+'万'
    }else if(!num){
      num = 0;
    }else{
     num =  num && (num.toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
        return $1 + ",";
      }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function($0, $1) {
        return $1 + ",";
      }));
    };
    $(el).text(num)
  }
});

/*
* 获取字符串中的数字
* */
Vue.directive('get-number',{
  bind:function(el,binding,vnode){
     var num = binding.value.replace(/[^0-9]/ig,"");
     $(el).text(num)
  }
});
