/*
* 分页控制器
* @author biangl
* @ version 0.1.2
* @params:Object
*  contaioner： (必填) type:dom 分页要插入的父级元素，用jq语法传入，
*  callback： (必填) type:function 点击页面的回调，将会在回调时传入page
*  pageTotal: (必填) type:number  总页码，
*  nowPage： (选填) type:number  当前显示第几页，默认1,
*  maxShowNum:(选填) type:number 要显示多少页码，当前默认显示是6页
* */
var Pagination = function (params) {
    var judge = this.judgeParams(params);//参数判断
    if(judge.passThrough){
        this.init(params);
    }else{
        throw new Error(judge.notPassMsg)
    }
};
Pagination.prototype.init = function (params) {
    if (this.div) {
        this.div.remove();
        this.div = null;
    };
    this.container = params.container ;
    this.callback = params.callback;
    this.pageTotal = params.pageTotal || 1;
    this.maxShowNum = params.maxShowNum || 6;
    this.nowPage = parseInt(params.nowPage) || 1;
    this.showMaxNum = this.maxShowNum;
    this.showMinNum = 1;
    this.size = params.size || "";
    this.len = (this.pageTotal > this.showMaxNum) ? this.showMaxNum : this.pageTotal;
    this.container.empty();
    this.createEle()

};

/*
* @description 参数判断
* */
Pagination.prototype.judgeParams = function(params){
    var passThrough = true;
    var notPassMsg = '';
    // 判断必填参数是否传入
    if (!params || !params.container || !params.callback) {
        passThrough = false;
        notPassMsg = 'Pagination:参数缺失'
    }else if(!(typeof params ==='object') || !(typeof params.callback === 'function') || !(typeof parseInt(params.pageTotal)==='number')){//判断必填参数的类型是否正确
        passThrough = false;
        notPassMsg = 'Pagination:参数类型错误'
    }else if(params.maxShowNum){//判断选填参数的类型是否正确
        if(!(typeof parseInt(params.maxShowNum) ==='number')){
            passThrough = false;
            notPassMsg = 'Pagination:maxShowNum类型错误'
        }
    }else if(params.nowPage){//判断选填参数的类型是否正确
        if(!(typeof parseInt(params.nowPage) ==='number')){
            passThrough = false;
            notPassMsg = 'Pagination:nowPagem类型错误'
        }
    };
    return {passThrough:passThrough,notPassMsg:notPassMsg}
};
/*
* @description 创建html
* */
Pagination.prototype.createEle = function () {
    // if(!this.pageTotal){
    //     return;
    // }
    var hasWarp= false;
    if(this.div){
        var div = this.div;
        hasWarp= true;
    }else{
        var div = $("<div>");
        div.addClass('page pagination-warp');
        div.css({'text-align': 'center'});
    }
    var ul = $('<ul>');
   if(this.size == 'big'){
        ul.addClass('pagination disabled pagination-lg');
    }else if(this.size == 'small'){
        ul.addClass('pagination disabled pagination-sm');
    }else {
        ul.addClass('pagination disabled');
    }
    var first = this.createLi('首页', 'first');
    var prev = this.createLi('&laquo;', 'prev');
    var next = this.createLi('&raquo;', 'next');
    var last = this.createLi('尾页', 'last');
    ul.append([first, prev]);
    if(this.nowPage<this.len){
        for (var i = 1, j = this.len; i <= j; i++) {
            if (i == this.nowPage) {
                ul.append(this.createLi(i, 'active numCon'));
            } else {
                ul.append(this.createLi(i, 'numCon'));
            }
        }
    }else{
        var li = []
        for (var i = this.len; i > 0; i--) {
            //if判断的是用户当前选择的是否最后一页
            if (this.nowPage >= this.pageTotal) {
                this.showMaxNum = this.pageTotal
                num = this.pageTotal - (this.len - i)
            } else {
                var num = parseInt(this.nowPage) + 1 - (this.len - i);
            };
            if(num==this.nowPage){
                li.unshift(this.createLi(num, 'active numCon'));
            }else{
                li.unshift(this.createLi(num, 'numCon'));
            }
            if (i === this.len) {
                this.showMaxNum = num;
            }
            if (i === 1) {
                this.showMinNum = num;
            }
        }
        ul.append(li)
    };
    if (this.pageTotal > this.len) {
        ul.append(this.createLi('...' + this.pageTotal, 'pagetotal'))
    }
    ul.append([next, last]);
    div.append(ul);
    this.div = div;
    if(!this.pageTotal){
        this.div.css('display','none')
    }else{
        this.div.css('display','block')
    }
    if(!hasWarp){
        this.container.append(div);
    }
    this.bindEvent();
};
/*
* @description 创建li元素
* */
Pagination.prototype.createLi = function (text, className) {
    var li = $("<li>");
    if (className) {
        li.addClass(className)
    }
    var span = $("<span>");
    span.addClass('numI');
    span.html(text);
    li.append(span);
    return li;
};
/*
* @description 绑定事件
* */
Pagination.prototype.bindEvent = function () {
    var that = this;
    this.setDisabel(this.nowPage)
    this.div.find(".numCon").on("click", function (e) {
        that.numConClick(e, that)
    });
    this.div.find(".first").on("click", function (e) {
        that.firstClick(e, that)
    });
    this.div.find(".prev").on("click", function (e) {
        that.prevClick(e, that)
    });
    this.div.find(".next").on("click", function (e) {
        that.nextClick(e, that)
    });
    this.div.find(".last").on("click", function (e) {
        that.lastClick(e, that)
    });
};
/*
* @description 判断是否首页或末页，如果是，则给对应的按钮添加disabled类名
* */
Pagination.prototype.setDisabel = function (nowPage) {
    if (nowPage == 1) {
        $(".first").addClass('disabled');
        $(".prev").addClass('disabled');
    } else {
        $(".first").removeClass('disabled');
        $(".prev").removeClass('disabled');
    }
    if (nowPage == this.pageTotal) {
        $(".next").addClass('disabled');
        $(".last").addClass('disabled');
    } else {
        $(".next").removeClass('disabled');
        $(".last").removeClass('disabled');

    }
};
/*
* @description 普通数字按钮点击事件
* */
Pagination.prototype.numConClick = function (e, pagination) {
    var ev = e || window.event;
    var target  = e.target || e.srcElement;
    var $e = this.getThisLi($(target))
    if (!$e.hasClass('active')) {
        pagination.nowPage = parseInt($e.text()) || 1;//如果未取到页码，默认传入页码1；
        pagination.doCb($e)
    }
};
/*
* @description 首页按钮点击事件
* */
Pagination.prototype.firstClick = function (e, pagination) {
    var ev = e || window.event;
    var target  = e.target || e.srcElement;
    var $e = this.getThisLi($(target))
    if (!$e.hasClass('disabled')) {
        pagination.nowPage = 1;
        pagination.doCb($e)
    }
};
/*
* @description 上一页按钮点击事件
* */
Pagination.prototype.prevClick = function (e, pagination) {
    var ev = e || window.event;
    var target  = e.target || e.srcElement;
    var $e = this.getThisLi($(target))
    if (!$e.hasClass('disabled')) {
        if(pagination.nowPage-1>=1){
            pagination.nowPage--;
            pagination.doCb($e)
        }
    }
};
/*
* @description 下一页按钮点击事件
* */
Pagination.prototype.nextClick = function (e, pagination) {
    var ev = e || window.event;
    var target  = e.target || e.srcElement;
    var $e = this.getThisLi($(target))
    if (!$e.hasClass('disabled')) {
        if( parseInt(pagination.nowPage)+1<=this.pageTotal){
            pagination.nowPage++;
            pagination.doCb($e)
        }
    }
};
/*
* @description 尾页按钮点击事件
* */
Pagination.prototype.lastClick = function (e, pagination) {
    var ev = e || window.event;
    var target  = e.target || e.srcElement;
    var $e = this.getThisLi($(target))
    if (!$e.hasClass('disabled')) {
        pagination.nowPage = parseInt(this.pageTotal);
        pagination.doCb($e)
    }
};
/*
* @description 设置当前页码，执行回调
* */
Pagination.prototype.doCb = function (target) {
    this.callback(this.nowPage);
    this.setPaginationHtml()
};
/*
* @description 事件绑定时选中li元素，传入事件的event，可返回当前的li
* */
Pagination.prototype.getThisLi = function ($e) {
    if ($e.hasClass('numI')) {
        $e = $e.parent()
    };
    return $e
};
/*
* @description 当用户选择的页码达到当前页面的临界值时，更换当前显示的页码
* */
Pagination.prototype.setPaginationHtml = function () {
    this.pagePlus();
    this.pageReduce();
    this.div.find('.active').removeClass("active");
    if (this.showMaxNum > this.len) {
        this.div.find("li.numCon").eq(Math.abs(5 - (this.showMaxNum - this.nowPage))).addClass("active");
    } else {
        this.div.find("li.numCon").eq(this.nowPage - 1).addClass("active")
    }
    this.setDisabel(this.nowPage);
    setTimeout(function(){
        $('html,body').scrollTop(0);
    },60)
};
/*
* @description 页码++
* */
Pagination.prototype.pagePlus = function(){
    //判断是否达到显示下一个页码的临界值，如是，则更换当前页码
    if (this.nowPage >= this.showMaxNum) {
        for (var i = this.len; i > 0; i--) {
            //if判断的是用户当前选择的是否最后一页
            if (this.nowPage >= this.pageTotal) {
                this.showMaxNum = this.pageTotal
                num = this.pageTotal - (this.len - i)
            } else {
                var num = parseInt(this.nowPage) + 1 - (this.len - i);
            }
            this.div.find("li.numCon").eq(i - 1).find('.numI').text(num);
            if (i === this.len) {
                this.showMaxNum = num;
            }
            if (i === 1) {
                this.showMinNum = num;
            }
        }
    }
    ;
};
/*
 * @description 页码--
 * */
Pagination.prototype.pageReduce = function(){
//判断是否达到显示上一个页码的临界值，如是，则更换当前页码
    if (this.nowPage <= this.showMinNum && this.showMinNum > 1) {
        for (var i = 1; i <= this.len; i++) {
            //if判断的是用户选择的是否第一页
            if (this.nowPage == 1) {
                var num = i
            } else {
                var num = parseInt(this.nowPage - 2 + i);
            }
            if (i === 1) {
                this.showMinNum = num;
            }
            this.div.find("li.numCon").eq(i - 1).find('.numI').text(num);
            if (i === this.len) {
                this.showMaxNum = num;
            }
        }
    };
};

window.Pagination = Pagination;
