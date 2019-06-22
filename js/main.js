//value part
var i = 0;
var width = $(document).width();
var height = $(document).height();

var x = width / 360;
var y = height / 100;
var z = 1468 / 100;
console.log(x);

var hue = 136;
var sat = 65 + '%';
var light = 63 + '%';
var mainHeight = $('#main').css('height');
mainHeight = parseInt(mainHeight);
console.log(mainHeight);
var m = 0;
$(document).mousemove(function () {
    hue = Math.round(event.pageX / x);
    sat = Math.round(event.pageY / y) + '%';
    var hsl = 'hsl(' + hue + ', ' +
        sat + ',' + light + ')';
    console.log(hsl);
    $('#main').css({
        "background-color": hsl,
    })
});
$(window).scroll(function (event) {
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop) {
    //
    //
    //    } else {
    //        i--;
    //        console.log(i);
    //    }
    //    lastScrollTop = st;

    //    light = Math.round(10000/mainHeight) + '%';
    //    m++;
    light = Math.round(scrollY / z) + '%';
    console.log(light);
    var hsl = 'hsl(' + hue + ', ' +
        sat + ',' + light + ')';
    $('#main').css({
        "background-color": hsl,
    })

});


i = 0;
var lastScrollTop = 0;

var rgb = $(".main").css('background-color');
