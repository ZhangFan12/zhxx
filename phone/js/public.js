appcan.button(".openWin", "ani-act", function() {
    //console.log(this.attributes["pageURL"].value);
    var pageURL = this.attributes["pageURL"].value;
    if(pageURL){
        appcan.openWinWithUrl(pageURL, pageURL + '.html');
    }
});

appcan.button(".back-btn", "btn-act", function () {
    appcan.window.close(-1);
});

//统一高度
function unifiedHeight(object){
    var child = object.children();
    var ArrHeight = [];
    for(var i = 0; i<child.length; i++){
        ArrHeight[i] = child.eq(i).height();
    }
    var maxHeight = Math.max.apply(null, ArrHeight);
    for(var i = 0; i<child.length; i++){
        child.eq(i).height(maxHeight);
    }
}