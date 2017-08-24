var indexContentModel = MVVM.Model.extend({
    defaults:{
        block1_Data:[{
            'icon': 'iconfont icon-gongwen',
            'name': '待办公文',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-jiaoxuekeyan',
            'name': '教学教务',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-keyanquanx',
            'name': '科研信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-money',
            'name': '资产信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-xiaoxi1',
            'name': '系统消息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-xiaoxi',
            'name': '提醒信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-cuiban',
            'name': '催办信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-shenpi',
            'name': '申报审批',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-zhibanguanli',
            'name': '值班信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-meeting',
            'name': '会议信息',
            'pageURL': ''
        }],
        block2_name: '特色服务',
        block2_Data:[{
            'img': 'img/01@2x.png',
            'title': '国务院',
            'small': '国务院文件',
            'pageURL': ''
        },{
            'img': 'img/02@2x.png',
            'title': '学者观察',
            'small': '学者观察',
            'pageURL': ''
        },{
            'img': 'img/03@2x.png',
            'title': '公务员',
            'small': '公务员培训',
            'pageURL': ''
        },{
            'img': 'img/04@2x.png',
            'title': '研究生',
            'small': '研究生教育',
            'pageURL': ''
        }],
        block3_name: '通知公告',
        block3_more: '查看更多公告',
        block3_Data:[{
            'time': '06-16',
            'title': '国家行政学院关于公开选拔行政财务部基建处副处长的公告',
            'img': 'img/slider-img.jpg',
            'pageURL': ''
        },{
            'time': '06-16',
            'title': '国家行政学院关于公开选拔行政财务部基建处副处长的公告',
            'img': 'img/slider-img.jpg',
            'pageURL': ''
        }]
    }
});

var indexContentView = MVVM.ViewModel.extend({
    el: '#index_list',
    model:  new indexContentModel()
});

var indexContentViewInstance = new indexContentView();