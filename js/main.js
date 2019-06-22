//value part
var i = 0;
var width = $(document).width();
console.log($(window).height());
var height = $('#main').height();


var x = width / 360;
var y = height / 100;
var z = 820 / 100;
console.log(x);

var hue = 236;
var sat = 65 + '%';
var light = 63 + '%';
var mainHeight = $('#main').css('height');
mainHeight = parseInt(mainHeight);
console.log(mainHeight);
var m = 0;
$(document).scroll(function (event) {
    light = Math.round(scrollY / z) + '%';
    console.log(light);
    var hsl = 'hsl(' + hue + ', ' +
        light + ',' + sat + ')';
    console.log(hsl);
    $('#main').css({
        "background-color": hsl,
    })
});
$('#main').mousemove(function () {
    hue = Math.round(event.pageX / x);
    
    var rect = event.target.getBoundingClientRect();
    var m = event.clientY - rect.top;
    console.log(m)
    /**/
    sat = Math.round(m / y) + '%';
    
    var hsl = 'hsl(' + hue + ', ' +
        light + ',' + sat + ')';
    console.log(hsl);
    $('#main').css({
        "background-color": hsl,
    })
});


i = 0;
var lastScrollTop = 0;

//var rgb = $(".main").css('background-color');
