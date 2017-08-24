var exercisesContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '每日练习',
        head_left_icon: true,
        head_right_icon: false,
        block1_name: '判断题',
        block2_name: '单选题',
        block3_name: '多选题'
    }
});

var exercisesContentView = MVVM.ViewModel.extend({
    el: '#exercises',
    model:  new exercisesContentModel()
});

var exercisesContentViewInstance = new exercisesContentView();