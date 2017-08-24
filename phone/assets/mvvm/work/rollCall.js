var rollCallContentModel = MVVM.Model.extend({
    defaults:{
        head_title: '点名',
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
            'illness': true,
            'matter': false,
            'name':'张一山',
            'type': false
        },{
            'illness': false,
            'matter': false,
            'name':'谢一鸣',
            'type': false
        },{
            'illness': false,
            'matter': false,
            'name':'张毅',
            'type': false
        },{
            'illness': false,
            'matter': true,
            'name':'王志',
            'type': false
        },{
            'illness': false,
            'matter': false,
            'name':'付蓉',
            'type': false
        },{
            'illness': false,
            'matter': false,
            'name':'刘洋',
            'type': false
        },{
            'illness': false,
            'matter': true,
            'name':'张杰',
            'type': false
        },{
            'illness': false,
            'matter': true,
            'name':'张伟',
            'type': false
        },{
            'illness': false,
            'matter': true,
            'name':'王立伟',
            'type': false
        },{
            'illness': false,
            'matter': true,
            'name':'王丽',
            'type': false
        }],
        block3_name: '合计'
    },
    computeds: {
        matter:function(){
            var object = this.get("block2_Data");
            var number = 0;
            for(var i = 0; i < object.length; i++){
                if(object[i].matter){
                    number++
                }
            }
            return number;
        }
    }
});

var rollCallContentView = MVVM.ViewModel.extend({
    el: '#rollCall',
    model:  new rollCallContentModel()
});

var rollCallContentViewInstance = new rollCallContentView();

function inputChange(){
    var object = $('.list-line').find('input');
    var block3_data1 = 0;
    for(var i = 0; i < object.length; i++){
        if(object[i].checked){
            block3_data1++
        }
    }
    $('#block3_data1').html(block3_data1);

    var x = $('#block3_data3').html();
    $('#block3_data2').html(object.length - block3_data1 - x);
}

(inputChange)();

$('input').on('change',function(){
    inputChange()
});