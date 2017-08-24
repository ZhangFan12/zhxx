var cardInquiryContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '一卡通查询',
        head_left_icon: true,
        head_right_icon: false,
        block1_name: '快捷服务',
        block1_Data:[{
            'icon': 'iconfont icon-cunzhezhuanzhang',
            'name': '网易转账',
            'pageURL':''
        },{
            'icon': 'iconfont icon-zhanghuxinxi',
            'name': '账户信息',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-qiaguashi',
            'name': '挂失',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-baoxiufuwu',
            'name': '保修',
            'pageURL': ''
        }],
        block2_name: '通知公告',
        block2_URL: '',
        block2_Data:[{
            'time': '2017-06-20',
            'title': '一卡通点餐系统试用中'
        },{
            'time': '2017-06-18',
            'title': '关于校园卡余额上限提高至2000元的通知'
        },{
            'time': '2017-06-12',
            'title': '美味鸡腿免费送 '
        },{
            'time': '2017-06-06',
            'title': '一卡通综合服务系统试运行'
        },{
            'time': '2017-05-29',
            'title': '一卡通常用服务信息'
        }],
        block3_name: '失卡招领',
        block3_URL: '',
        block3_Data:[{
            'time': '2017-06-18',
            'title': '卡号：16250690229'
        },{
            'time': '2017-06-12',
            'title': '卡号：16300680225'
        },{
            'time': '2017-06-06',
            'title': '卡号：16210830014'
        },{
            'time': '2017-05-29',
            'title': '卡号：16300276013'
        }],
        block4_name: '常见问题',
        block4_URL: '',
        block4_Data:[{
            'time': '2017-06-20',
            'title': '我们的校园卡可以当作银行卡使用吗？ '
        },{
            'time': '2017-06-18',
            'title': '这张校园卡收费吗？毕业要收回吗？ '
        },{
            'time': '2017-06-12',
            'title': '如何向校园卡里面充值？'
        },{
            'time': '2017-06-06',
            'title': '如果校园卡丢了怎么办？'
        },{
            'time': '2017-05-29',
            'title': '校园卡初始密码是身份证的后六位，我输进去提示密码错？  '
        },{
            'time': '2017-05-10',
            'title': '有教师的职称提升为正高级，要求在教授餐厅享受打折的待遇，该如何处理？ '
        }]
    }
});

var cardInquiryContentView = MVVM.ViewModel.extend({
    el: '#teachingMaterial',
    model:  new cardInquiryContentModel()
});

var cardInquiryContentViewInstance = new cardInquiryContentView();