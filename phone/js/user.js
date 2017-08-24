appcan.ready(function() {
    uexWindow.setMultilPopoverFlippingEnbaled(1);
});

appcan.button('#submit', 'ani-act', function() {
    appcan.window.open('login','login.html',10)
});