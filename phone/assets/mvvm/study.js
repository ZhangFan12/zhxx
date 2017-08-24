var studyContentModel = MVVM.Model.extend({
    defaults:{
        block1_Data:[{
            'icon': 'iconfont icon-ziliao',
            'name':'教学资料',
            'pageURL':'study/teachingMaterial'
        },{
            'icon': 'iconfont icon-moxingziwoxuexisuanfa text-gray',
            'name':'专项学习',
            'pageURL':''
        },{
            'icon': 'iconfont icon-x_lianxi',
            'name':'每日练习',
            'pageURL':'study/exercises'
        },{
            'icon': 'iconfont icon-dianming',
            'name': '点名',
            'pageURL': 'study/rollCall'
        },{
            'icon': 'iconfont icon-tiwen',
            'name': '现场提问',
            'pageURL': 'study/questions'
        }]
    }
});

var studyContentView = MVVM.ViewModel.extend({
    el: '#study',
    model:  new studyContentModel()
});

var studyContentViewInstance = new studyContentView();