var workContentModel = MVVM.Model.extend({
    defaults:{
        block1_Data:[{
            'icon': 'iconfont icon-zhuce',
            'name': '注册信息',
            'pageURL': 'work/modify'
        },{
            'icon': 'iconfont icon-bangongfei text-gray',
            'name': 'OA办公',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-zonghegongjiaoyiqiatong',
            'name': '一卡通',
            'pageURL': 'work/cardInquiry'
        },{
            'icon': 'iconfont icon-keyanquanx text-gray',
            'name': '科研咨询',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-renshi text-gray',
            'name': '人事管理',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-jinlingyingcaiwangtubiao73 text-gray',
            'name': '外事管理',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-guanli text-gray',
            'name': '行政资料',
            'pageURL': ''
        }]
    }
});

var workContentView = MVVM.ViewModel.extend({
    el: '#work',
    model:  new workContentModel()
});

var workContentViewInstance = new workContentView();