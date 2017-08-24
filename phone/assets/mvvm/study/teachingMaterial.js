var teachingMaterialContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '教学资料',
        head_left_icon: true,
        head_right_icon: false,
        block1_Data:[{
            'icon': 'iconfont icon-yingjiyuan',
            'name': '应急管理',
            'pageURL':''
        },{
            'icon': 'iconfont icon-guanli',
            'name': '公共管理',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-jingjiguanli',
            'name': '经济学',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-falv2',
            'name': '法学',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-04',
            'name': '政治学',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-socialcontant-alt',
            'name': '社会与文化',
            'pageURL': ''
        },{
            'icon': 'iconfont icon-zhengwu-',
            'name': '电子政务',
            'pageURL': ''
        }],
        block2_name: '经济学',
        block2_Data:[{
            'time': '2017-06-20',
            'title': '董小君教授就“以融资为突破口促进“一带一路”区域内金融合作',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-19',
            'title': '张孝德教授撰写的《厚植生态文明 建设美丽中国》文章被中央网',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-18',
            'title': '张占斌著《中国改革新起点》近日由人民出版社出版发行',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-17',
            'title': '经济学教研部主任张占斌等一行五人赴深圳调研新经济',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-11',
            'title': '经济学教研部围绕OFO小黄车案例进行集体备课',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-10',
            'title': '张孝德教授应邀参加中宣部主办的“治国理政论坛”理论研讨会',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-09',
            'title': '中央和国家机关司局级干部供给侧结构性改革与中国经济转型升级',
            'pageURL': 'teachingMaterialDetails'
        },{
            'time': '2017-06-08',
            'title': '经济学部召开会议落实学院推进“两学一做”学习教育常态化制度',
            'pageURL': 'teachingMaterialDetails'
        }]
    }
});

var teachingMaterialContentView = MVVM.ViewModel.extend({
    el: '#teachingMaterial',
    model:  new teachingMaterialContentModel()
});

var teachingMaterialContentViewInstance = new teachingMaterialContentView();