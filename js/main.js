//value part
//console.log($(window).height());
var x;
var y;
var rgb;

function hw() {
    var width = $('#main').innerWidth();

    var height = $('#main').innerHeight();
    x = width / 360;
    y = height / 100;
}
var i = 0;
var z = 1444 / 100;
var h;
var s;
var l = 0 + '%';
var mainHeight = $('#main').css('height');
mainHeight = parseInt(mainHeight);
var m = 0;
var hsl;
var hex;
$(document).scroll(function (event) {
    l = Math.round(scrollY / z) + '%';
    hsl = 'hsl(' + hue + ', ' +
        l + ',' + s + '% )';
    $('#main').css({
        "background-color": hsl,
    });
});

$('#main').mousemove(function (event) {
    hw();
    var relX = event.pageX - $(this).offset().left;
    hue = Math.round(relX / x);
    //    console.log(event.pageX)
    var rect = event.target.getBoundingClientRect();
    var m = event.clientY - rect.top;
    s = Math.round(m / y);
    var light = parseInt(l);
    hsl = 'hsl(' + hue + ', ' +
        l + ' ,' + s + '% )';
    $('#main').css({
        "background-color": hsl,
    });

    rgb = $('#main').css('backgroundColor');

    $('.content').html(rgb2hex(rgb));
});

$('#main').click(function () {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'onclick col');
    newDiv.setAttribute('id', 'onclick');
    var mainWidth = $('#main').innerWidth() / 3;
    console.log(mainWidth);
    var row = document.getElementsByClassName('row')[0];
    row.insertBefore(newDiv, document.getElementById('main'));
    newDiv.style.background = hsl;
    console.log(hsl);

    newDiv.setAttribute('data-change', document.getElementById('content').innerHTML);
    //    newDiv.setAttribute('data-cancel', '<i class="far fa-window-close" onclick="my(this)"></i>');

    var cancelBtn = document.createElement('div');
    cancelBtn.setAttribute('class', 'cancelBtn text-center');
    newDiv.appendChild(cancelBtn);
    cancelBtn.innerHTML = '<i class="far fa-window-close"></i>';

    cancelBtn.setAttribute('onclick', 'my(this)');
    $(".onclick").click(function () {
        console.log($('.onclick').attr('data-change'));
    });

});

function my(e) {
    console.log(e.parentElement);
    e.parentElement.remove();
}
//rgb to hex converter


function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1) {
        return rgb;
    } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }

        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}
