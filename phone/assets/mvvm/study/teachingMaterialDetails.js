var teachingMaterialContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '资料详情',
        head_left_icon: true,
        head_right_icon: false,
        article_title: '董小君教授就“以融资为突破口“一带一路”区域内金融合作”问题接受《金融时报》采访',
        article_time: '2017-06-13 15:32',
        article_author: '经济学教研部'
    }
});

var teachingMaterialContentView = MVVM.ViewModel.extend({
    el: '#teachingMaterial',
    model:  new teachingMaterialContentModel()
});

var teachingMaterialContentViewInstance = new teachingMaterialContentView();