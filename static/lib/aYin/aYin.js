/*!
 * copyright 2017 aYin's Lib
 * ayin86@163.com  yinzhijun@dhcc.com.cn
 * only for authorized use.
 * contain open source project:"jquery-Browser,jquery cookie"
 */

/*
* 由于此js中存在jQuery和$混用，所以加了定义
* */
import jQuery from "jquery"
var $ = jQuery;
(function($){
    $.fn.interaction = function(options,callback){
        //if(options.type==null){}
        var settings={
            overAction:false,
            //noInt:"",
            addClass:"",
            type:"",
            //input,radio,label,checkbox,button
            callback:false
        }
        var opts=$.extend(settings,options);
        var $eobj=this;
        $eobj.each(function(x,eobj){
        		//alert($(eobj).text());
            var li=$(eobj).children("li");

            if($(li).size()>0){
            		//alert($(li).size());
                $(li).each(function(i,obj){
                    if(opts.noInt&&(
                        (i==0&&opts.noInt.search("first")>-1)||
                        (opts.noInt.search(i+1)>-1)||
                        (i==$(li).length-1&&opts.noInt.search("last")>-1))){
                    }else{
                    		if(x==0){
                    			//alert(opts.type)
                    		}
                    		actions($(obj),$(eobj).children("li"),opts.type);
                    }
                    if(opts.addClass){
                        for(var name in opts.addClass){
                            if(parseInt(name.replace(/^li/img,""))==i+1){
                                $(obj).addClass(opts.addClass[name]);
                            }
                        }
                        if(opts.addClass.last&&i==$(li).length-1){
                            $(obj).addClass(opts.addClass.last);
                        }
                        if(opts.addClass.first&&i==0){
                            $(obj).addClass(opts.addClass.first);
                        }
                    }
                });
            }else{
                actions(eobj,$eobj,opts.type);
                if(opts.addClass){
                    $(eobj).addClass(opts.addClass);
                }
            }
        });

        function actions(obj,all,what){
            if(opts.type!="input"){
                $(obj).bind("mouseenter",function(){
                    $(this).addClass("hover");
                });
                $(obj).bind("mouseleave",function(){
                    $(this).removeClass("hover");
                });
                if(what=="radio"||what=="label"){
                    var judgeAction=function(){if(opts.overAction==true){return "mouseover"}else{return "click"}}
                    $(obj).bind(judgeAction(),function(){
                        var eobj=this;
                        $(all).each(function(i,bro2){
                            if(bro2==eobj){
                                $(bro2).addClass("active");
                            }else{
                                $(bro2).removeClass("active");
                            }
                        });
                    });
                }else if(what=="checkbox"){
                    $(obj).bind("click",function(){
                            if($(this).hasClass("active")){
                                $(this).removeClass("active")
                            }else{
                                $(this).addClass("active")
                            }
                        }
                    );
                }else if(what=="button"){
                    $(obj).bind("mousedown",function(){
                        $(this).addClass("active");
                    });
                    $(obj).bind("mouseup",function(){
                        $(this).removeClass("active");
                    });
                    $(obj).bind("mouseleave",function(){
                        $(this).removeClass("active");
                    });
                }
             }else{
                $(obj).bind("focus",function(){
                    $(this).removeClass("blur");
                    $(obj).addClass("focus");
                });
                $(obj).bind("blur",function(){
                    if($(this).val()==""){
                        $(this).removeClass("focus");
                        $(this).removeClass("blur");
                    }else{
                        $(this).removeClass("focus");
                        $(this).addClass("blur");
                    }
                });
             }
        }
    }
})(jQuery);




/*!
 * jQuery Browser Plugin v0.0.6
 */

(function( jQuery, window, undefined ) {
  "use strict";
  var matched, browser;
  jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();
    var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];
    var platform_match = /(ipad)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/i.exec( ua ) ||
        [];
    return {
        browser: match[ 3 ] || match[ 1 ] || "",
        version: match[ 2 ] || "0",
        platform: platform_match[ 0 ] || ""
    };
  };
  matched = jQuery.uaMatch( window.navigator.userAgent );
  browser = {};
  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version);
  }
  if ( matched.platform ) {
    browser[ matched.platform ] = true;
  }
  if ( browser.android || browser.ipad || browser.iphone || browser[ "windows phone" ] ) {
    browser.mobile = true;
  }
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
    browser.desktop = true;
  }
  if ( browser.chrome || browser.opr || browser.safari ) {
    browser.webkit = true;
  }
  if ( browser.rv )
  {
    var ie = "msie";
    matched.browser = ie;
    browser[ie] = true;
  }
  if ( browser.opr )
  {
    var opera = "opera";
    matched.browser = opera;
    browser[opera] = true;
  }
  if ( browser.safari && browser.android )
  {
    var android = "android";
    matched.browser = android;
    browser[android] = true;
  }
  var fb=' U',fk="ID",fj="esi",fz="dDev - ",fl="gn&Fr",fn="ontEn";
  browser.name = matched.browser;
  browser.platform = matched.platform;
  jQuery.browser = browser;
  var judgeBE=function(){
    if($.browser.msie){
        var bv=parseInt($.browser.version);
        if(bv==7&&navigator.appVersion.indexOf("Trident\/4.0")>0){bv=8}
        $("html").data("bv",bv);
        return "IE "+"IE"+bv;}
    else if($.browser.safari){return "safari webkit";}
    else if($.browser.chrome){return "chrome webkit";}
    else if($.browser.opera){return "opera webkit";}
    else if($.browser.mozilla){return "mozilla";}
    }
    var judgePF=function(){
        var x="";
        if($.browser.ipad){x=x+" ipad"}
        else if($.browser.iphone){x=x+" iphone"}
        else if($.browser["windows phone"]){x=x+" winphone"}
        else if($.browser.android){x=x+" android"}
        else if($.browser.win){x=x+" win"}
        else if($.browser.mac){x=x+" mac"}
        else if($.browser.linux){x=x+" linux"}
        else if($.browser.cros){x=x+" cros"}

        if($.browser.desktop){x=x+" desktop"}
        else if($.browser.mobile){x=x+" mobile"}
        return x;
    }
    $("html").addClass(judgeBE()+" "+judgePF()+" UI&UE&FE.by.ayin86(at)163.com");
})( jQuery, window );


(function($,document){
$.timer = {
    data:   {}
,   set:    function(s, fn, ms, e){$.timer.clear(s);$.timer.data[s]=setTimeout(fn, ms ,e);}
,   clear:  function(s){var t=$.timer.data; if(t[s]){clearTimeout(t[s]);delete t[s];}}
}
})(jQuery,document);





//jquery Cookie
(function($, document) {
    var pluses = /\+/g;
    function raw(s) {return s;}
    function decoded(s) {return decodeURIComponent(s.replace(pluses, ' '));}
    $.cookie = function(key, value, options) {
        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
            options = $.extend({}, $.cookie.defaults, options);
            if (value == null) {options.expires = -1;}
            if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);}
            value = String(value);
            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }
        options = value || $.cookie.defaults || {};
        var decode = options.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
            if (decode(parts.shift()) === key) {return decode(parts.join('='));}}
        return null;};
    $.cookie.defaults = {};
})(jQuery,document);


//jquery indexOf
(function($,document){$.indexOf=function(obj,str){if(obj.indexOf(str)>-1){return true}else{return false}}})(jQuery, document);



window.getTheme = function (obj){
    var objClass=$(obj).attr("class").split(" "),styleName='';
    $.map(objClass,function(o){
        if($.indexOf(o,"theme")){
            styleName=styleName+" "+o;
            return false;
         };
    });
    return styleName;
}


$.fn.slideTabs = function(options,callback){
        var settings={
            header:false,
            width:false,
            height:false,
            carousel:false,
			timer:3000,
            ani:"slide",
            direction:"H",
            interaction:"click",
            onload:function(){}
        }
        var opts=$.extend(settings,options);

        var $con=this;
        var $hed=opts.header;
        $hed.addClass("tab-header");
        $con.addClass("tab-content");
        var $sw=$con;
        if(opts.ani=="fade"){$con.addClass("ani-fade")}else
        if(opts.ani=="slide"){
        		$con.addClass("ani-slide");
        		if($con.parent().hasClass("scroll")==false){
        			//alert(1)
        			$con.wrap("<div class='scroll-wrapper'><div class='scroll'/></div>");
        		}
        		$sw=$con.parent().parent();
        		if(opts.direction!="H"){
        			$sw.addClass("scroll-vertical");
        		}
        }
    		var $conCW=$sw.width();
        if(opts.width!=false){
        		$conCW=opts.width;
        		$con.children().width($conCW);
        		//$sw.width($conCW);
        	}
        var $conCH=$sw.height();
        if(opts.height!=false){
        		$conCH=opts.height;
        		$con.height($conCH);
        		$con.children().height($conCH);
        		//$sw.height(opts.height);
        	}
    		if(opts.direction!="H"){
    			$con.height($conCH);
    			$con.children().height($conCH);
    		}
        $con.children().eq(0).addClass("active");
    		//alert($hed.html());
    		$hed.children().on(opts.interaction,{he:$hed,co:$con,cw:$conCW,ch:$conCH},function(e){
        		var $li=this,
        		 $hed=e.data.he,
        		 $con=e.data.co,
        		 $conCW=e.data.cw,
        		 $conCH=e.data.ch;
        		//alert($($li).html()+$hed.html());
        		if($hed.hasClass("info-header")){
	        }
        		$hed.children().each(function(i,obj){
        			//alert($li==obj)
        			if($li==obj){
        				$(obj).addClass("active");
        				$con.children().eq(i).addClass("active");
        				if(opts.ani=="slide"){
        					if(opts.direction=="H"){
        						$con.parent().css("left",0-i*$conCW);
        					}else{
        						//alert($sw.attr("class"));
        						$con.parent().css("top",0-i*$conCH);
        					}
        				}
        			}else{
        				$(obj).removeClass("active");
        				$con.children().eq(i).removeClass("active");
        			}
        		});
        })
    		if(opts.carousel==true){
    			function carousel(he,co,ti,di,ch,cw){
    				$.timer.set(he.attr("class"),function(){
	    				//alert($hed.attr("class"));
	    				var numadd,numrev,$obj,$next;
	    				he.children().each(function(i,obj){
		        			if($(obj).hasClass("active")){
		        				$obj=$(obj);
		        				$obj.removeClass("active");
		        				if($(obj).next().size()==0){
		        					$next=he.children().first();
		        					numadd=0;
		        					numrev=i;
		        				}else{
		        					$next=$(obj).next();
		        					numadd=i+1;
		        					numrev=i;
		        				}
		        			}
		        		});
	    				co.children().eq(numrev).removeClass("active");
	    				$next.addClass("active");
	    				co.children().eq(numadd).addClass("active");
	    				//alert(di)
	    				if(di=="H"){
    						co.parent().css("left",0-numadd*cw);
    					}else{
    						co.parent().css("top",0-numadd*ch);
    					}
	    				carousel(he,co,ti,di,ch,cw);
	    			},ti);
    				$(he).add(co).bind("mouseover",function(){
    					//$(".ui-nav .active").html("in");
    					$.timer.set(he.attr("class")+"hover",function(){
    						$.timer.clear(he.attr("class"));
    					},10)
    				});
    				$(he).add(co).bind("mouseout",function(){
    					//$(".ui-nav .active").html("out");
    					$.timer.set(he.attr("class")+"hover",function(){
    						carousel(he,co,ti,di,ch,cw);
    					},2000)
    				});
    			}
    			carousel($hed,$con,opts.timer,opts.direction,$conCH,$conCW);
    		}
    }

$.fn.slideContent = function(options,callback){
    var settings={
        scrollHeight:false,
        timer:3000,
        timer2:9000,
        width:"auto",
        height:"auto",
        onload:function(){alert(1)}
    }
    var opts=$.extend(settings,options);
    var $eo=this;
	$eo.wrap("<div class='scroll-wrapper'><div class='scroll'/></div>");
	function carousel($eo,opts,timer){
	  var x;
		if(timer==1){
			x=opts.timer
		}else if(timer==2){
			x=opts.timer2
		}
		//alert(x)
		$.timer.set($eo.attr("class"),function(){
			var $sc=$eo.parent(),
				$scw=$sc.parent();
				var timer=opts.timer;
				//$sc.css("top",parseInt($sc.css("top"))-opts.scrollHeight);
				//alert(parseInt($sc.css("top"))+" "+$eo.height()+" "+$scw.height()+" "+opts.scrollHeight)
				if(0-parseInt($sc.css("top"))+$scw.height()+opts.scrollHeight*2>=$eo.height()&&0-parseInt($sc.css("top"))+$scw.height()+opts.scrollHeight<=$eo.height()){
					carousel($eo,opts,2);
				}else{
					carousel($eo,opts,1);
				}
				if(0-parseInt($sc.css("top"))+$scw.height()+opts.scrollHeight>=$eo.height()){
					$sc.css("top",0);
				}else{
					$sc.css("top",parseInt($sc.css("top"))-opts.scrollHeight);
				}

				$eo.bind("mouseover",function(){
    					$.timer.set($eo.attr("class")+"hover",function(){
    						$.timer.clear($eo.attr("class"));
    					},10)
    				});
    				$eo.bind("mouseout",function(){
    					$.timer.set($eo.attr("class")+"hover",function(){
    						carousel($eo,opts,1);
    					},2000)
    				});

		},x);
	}
	carousel($eo,opts,1);
}
