var userContentModel = MVVM.Model.extend({
    defaults:{
        userName: '王宏伟',
        userTypeName: '司机',
        block1_Data:[{
            'icon': 'iconfont icon-tongxunlu text-gray',
            'name': '通讯录',
            'pageURL ':''
        },{
            'icon': 'iconfont icon-course-table text-gray',
            'name': '课表',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-zichan text-gray',
            'name': '资产',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-keyanquanx text-gray',
            'name': '科研',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-gongzi text-gray',
            'name': '工资',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-xiaozu text-gray',
            'name': '小组',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-guanzhu text-gray',
            'name': '关注',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-gongzuo',
            'name': '我的需求',
            'pageURL': 'user/opinion'
        },{
            'icon': 'iconfont icon-xinxi text-gray',
            'name': '信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-xiugaimima text-gray',
            'name': '修改密码',
            'pageURL': ''
        }]
    }
});

var userContentView = MVVM.ViewModel.extend({
    el: '#user',
    model:  new userContentModel()
});

var userContentViewInstance = new userContentView();