appcan.ready(function() {
    //unifiedHeight($('.list-block'));
    unifiedHeight($('.list-block-img'));
    adImg();
    uexWindow.setMultilPopoverFlippingEnbaled(1);
});

function adImg() {
    //广告图片轮播
    var slider = appcan.slider({
        selector : '#slider', /*选择器*/
        hasIndicator: false,  /*是否有位置提示条*/
        hasLabel: false,   /*是否有标签文字栏*/
        aspectRatio: 8/16,  /*是否控制纵横比，0为使用控件高度，>0使用纵横比*/
        index: 0,   /*默认选择项*/
        hasContent: false, /*支持slider设置文字区域*/
        canDown: false, /*设置图片/文字区域是否可以下拉*/
        //auto:2000 ,  /*轮播时间，单位毫秒*/
        //circleSlide: true, /*设置是否循环轮播（下载最新JSSDK）*/
        hasCircle: false /*设置圆点位置提示标志*/
    });
    slider.set([{
        img : "img/slider-img.jpg"
    }, {
        img : "img/slider-img.jpg"
    }]);
    slider.on("clickItem", function(index, data) {
        // alert(index+data);
    })
}