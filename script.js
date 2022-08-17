
autoSlider();
var left = 0;
var timer;

function autoSlider(){
    timer = setTimeout(function () {
        var sliders = document.querySelector('.sliders');
        left = left - 1474;
        if (left < -4422) {
            left = 0;
            clearTimeout(timer);
        }
        sliders.style.left = left + 'px';
        autoSlider();
        }, 8000);
    }