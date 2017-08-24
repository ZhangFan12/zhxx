var loginModel = MVVM.Model.extend({
    defaults: {
        department: '',
        position: '',
        username: '',
        phone: '',
        password: '',
        passwordAgain: ''
    },
    validate : function(attrs, options) {
        if(!attrs.department){
            return alert('部门不能为空')
        }else if(!attrs.position){
            return alert('职位不能为空')
        }else if(!attrs.username){
            return alert('姓名不能为空')
        }else if(!attrs.phone){
            return alert('手机号码不能为空')
        }else if(!attrs.password){
            return alert('密码不能为空')
        }else if(!attrs.passwordAgain){
            return alert('确认密码不能为空')
        }else if(attrs.passwordAgain != attrs.password){
            alert('确认密码不正确')
        }else{
            appcan.window.alert({
                title:'提示',
                content:'提交成功！审核通过将会短信通知您，请注意查收。',
                buttons:'确定'
            });
            appcan.window.close(-1);
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