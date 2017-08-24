var tabview = appcan.tab({
    selector : "#top_nav",
    hasIcon : true,  /*是否有图标*/
    hasAnim : false,  /*切换时是否有动画*/
    hasLabel : true,   /*是否有文字*/
    hasBadge : false,  /*是否有badge*/
    data : [{
        label : "首页",
        icon: "iconfont icon-shouye"
    }, {
        label : "工作",
        icon: "iconfont icon-gongwen"
    }, {
        label : "学习",
        icon: "iconfont icon-jiaoxuekeyan"
    }, {
        label : "我的",
        icon: "iconfont icon-wode"
    }]
});
tabview.on("click",function(obj, index){ /*TAB变更时切换多浮动窗口*/
    appcan.window.selectMultiPopover("content",index);
});

var contentHeight = $(document).height() - ($('#head').offset().height + $('#top_nav').offset().height);
document.getElementById('content').style.height = contentHeight + 'px';

appcan.ready(function() {
    // 退出程序
    var c1c = 0;
    uexWindow.setReportKey(0,1);// 拦截后退按钮
    uexWindow.onKeyPressed = function(){ 
        if (c1c > 0) {
            uexWidgetOne.exit();
        }
        else {
            uexWindow.toast(0, 5, '再按一次退出应用', 1000); 
            c1c=1; setTimeout(function(){ c1c=0; }, 2000);
        }
    };
    
    var top = $('#head').offset().height;
    appcan.frame.open({/*创建多浮动窗口*/
        id : "content",
        url : [{
            "inPageName" : "index",
            "inUrl" : "index-content.html"
        }, {
            "inPageName" : "work",
            "inUrl" : "work.html"
        }, {
            "inPageName" : "study",
            "inUrl" : "study.html"
        }, {
            "inPageName" : "user",
            "inUrl" : "user.html"
        }],
        top : top,
        left : 0,
        index : 0,
        change:function(index,res){ /*浮动窗口推拽变更时回调，可控制tab进行同步变更*/
            var num = res.multiPopSelectedIndex;
            tabview.moveTo(num);
            /*头部标题替换*/
            var headTitle = document.getElementById('head_title');
            headTitle.innerText = tabview.option.data[num].label;
        }
    });
    window.onorientationchange = window.onresize = function() {
        appcan.frame.resize("content", 0, top);
    }
});