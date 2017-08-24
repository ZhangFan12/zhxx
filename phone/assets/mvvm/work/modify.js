var modifyContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '注册信息修改',
        head_left_icon: true,
        head_right_icon: false,
        block1_Data:[{
            'name': '部门',
            'val': '教导处'
        },{
            'name': '职位',
            'val': '数学老师'
        },{
            'name': '姓名',
            'val': '张一山'
        },{
            'name': '手机号码',
            'val': '18627042404'
        }]
    }
});

var modifyContentView = MVVM.ViewModel.extend({
    el: '#rollCall',
    model:  new modifyContentModel()
});

var modifyContentViewInstance = new modifyContentView();

appcan.button('#submit', 'ani-act', function() {
    appcan.window.alert({
        title:'提示',
        content:'提交成功！审核通过将会短信通知您，请注意查收。',
        buttons:'确定'
    });
});