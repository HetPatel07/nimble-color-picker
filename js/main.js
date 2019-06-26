//value part
//console.log($(window).height());
var x;
var y;

function hw() {
    console.log('hello');
    var width = $('#main').innerWidth();
    var height = $('#main').innerHeight();
    x = width / 360;
    y = height / 100;
}
var i = 0;
var z = 1444 / 100;
var h;
var s;
var l = 63 + '%';
var mainHeight = $('#main').css('height');
mainHeight = parseInt(mainHeight);
console.log(mainHeight);
var m = 0;
var hsl;
$(document).click(function () {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'col main');
    var row = document.getElementsByClassName('row')[0];
    row.insertBefore(newDiv, document.getElementById('main'));
    newDiv.style.background = hsl;
    console.log(hsl);
})

$(document).scroll(function (event) {
    l = Math.round(scrollY / z) + '%';
    hsl = 'hsl(' + hue + ', ' +
        l + ',' + s + '% )';
    $('#main').css({
        "background-color": hsl,
    });
});
$('#main').mousemove(function () {
    hw();
    hue = Math.round(event.pageX / x);

    var rect = event.target.getBoundingClientRect();
    var m = event.clientY - rect.top;
    s = Math.round(m / y);
    hsl = 'hsl(' + hue + ', ' +
        l + ' ,' + s + '% )';
    var light = parseInt(l);
    //    var sat = parseInt(s);
    //    var light = parseInt(l);
    console.log(hsl);
    $('#main').css({
        "background-color": hsl,
    });
    $('.content').html(HSLToHex(h, s, light));
});

//hsl to rgb converter

function HSLToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}
