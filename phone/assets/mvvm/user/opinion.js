var opinionContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '我的需求',
        head_left_icon: true,
        head_right_icon: false,
        textarea: ''
    }
});

var opinionContentView = MVVM.ViewModel.extend({
    el: '#opinion',
    model:  new opinionContentModel()
});

var opinionContentViewInstance = new opinionContentView();

appcan.button('#submit', 'ani-act', function() {
    appcan.window.alert({
        title:'提示',
        content:'提交成功！',
        buttons:'确定'
    });
});