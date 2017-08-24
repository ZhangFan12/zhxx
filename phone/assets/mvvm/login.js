var loginModel = MVVM.Model.extend({
    defaults: {
        username: '',
        password: ''
    },
    validate : function(attrs, options) {
        if(!attrs.username){
            alert('用户名不能为空')
        }else if(!attrs.password){
            alert('密码不能为空')
        }else if(attrs.username == 'admin' && attrs.password == '123456' ){
            appcan.window.open('index','index.html',10)
        }else{
            appcan.window.alert({
                title:'提示',
                content:'用户名或者密码错误！',
                buttons:'确定'
            });
        }
    }
});

var loginView = MVVM.ViewModel.extend({
    el : '#login_form',
    model : new loginModel(),
    events : {
        'submit' : function() {
            this.model.isValid()
        }
    }
});

var loginViewInstance = new loginView();

appcan.button('#submit', 'ani-act', function() {
    $('#login_form').submit();
});

appcan.button('#register', 'ani-act', function() {
    appcan.window.open('register','register.html',10)
});