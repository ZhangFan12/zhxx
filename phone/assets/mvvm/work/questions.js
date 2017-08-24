var rollCallContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '现场提问',
        head_left_icon: true,
        head_right_icon: false,
        block1_name: '科室',
        block1_Data:[{
            'icon': 'iconfont icon-keyanquanx',
            'name':'科室01',
            'pageURL':''
        },{
            'icon': 'iconfont icon-keyanquanx',
            'name':'科室02',
            'pageURL':''
        }],
        block2_Data:[{
            'name':'张一山',
            'questions': '国际部党支部组织深入学习习近平总书记关于外宣工作系列重要讲话有哪些重点？',
            'type': true
        },{
            'name':'谢一鸣',
            'questions': '践行长征精神 推进“两学一做”学习教育常态化制度化要怎样展开？',
            'type': false
        },{
            'name':'张毅',
            'questions': '“讲好中国故事”主题沙龙要达到什么目标才算是成功？',
            'type': false
        },{
            'name':'张一山',
            'questions': '国际部党支部组织怎样深入学习习近平总书记关于外宣工作系列重要讲话？',
            'type': true
        },{
            'name':'谢一鸣',
            'questions': '践行长征精神 推进“两学一做”学习教育常态化制度化要怎样展开？',
            'type': false
        },{
            'name':'张一山',
            'questions': '“讲好中国故事”主题沙龙要达到什么目标才算是成功？',
            'type': false
        },{
            'name':'谢一鸣',
            'questions': '国际部党支部召开支部党员大会传达学院巡视整改工作部署需要做什么准备？ ',
            'type': false
        }],
        block3_name: '合计'
    }
});

var rollCallContentView = MVVM.ViewModel.extend({
    el: '#questions',
    model:  new rollCallContentModel()
});

var rollCallContentViewInstance = new rollCallContentView();

function inputChange(){
    var object = $('.list-line').find('input');
    var block3_data2 = 0;
    for(var i = 0; i < object.length; i++){
        if(object[i].checked){
            block3_data2++
        }
    }
    $('#block2_data1').html(object.length);
    $('#block2_data2').html(block3_data2);
    $('#block2_data3').html(object.length - block3_data2);
}

(inputChange)();

$('input').on('change',function(){
    inputChange()
});