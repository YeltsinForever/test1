////////////////////////////////Бренды
function crossEl1(){
    el1.classList.toggle('brand-list__active');
    cross1.classList.toggle('cross-ativation');
}
function crossEl2(){
    el2.classList.toggle('brand-list__active');
    cross2.classList.toggle('cross-ativation');
}
function crossEl3(){
    el3.classList.toggle('brand-list__active');
    cross3.classList.toggle('cross-ativation');
}
function crossEl4(){
    el4.classList.toggle('brand-list__active');
    cross4.classList.toggle('cross-ativation');
}
function crossEl5(){
    el5.classList.toggle('brand-list__active');
    cross5.classList.toggle('cross-ativation');
}
function crossEl6(){
    el6.classList.toggle('brand-list__active');
    cross6.classList.toggle('cross-ativation');
}
function crossEl7(){
    el7.classList.toggle('brand-list__active');
    cross7.classList.toggle('cross-ativation');
}
function crossEl8(){
    el8.classList.toggle('brand-list__active');
    cross8.classList.toggle('cross-ativation');
}
/////////////////////////////  СЛАЙДЕР ЦЕНЫ
var slider = document.getElementById('range-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];
noUiSlider.create(slider, {
    start: [45, 250],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 0,
        'max': 350
    },
    format:{
        to: function(value){
            return parseInt(value);
        },
        from: function(value){
            return parseInt(value);
        }
    },
    
});
slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});
function Clear(){
    el1.classList.remove('brand-list__active');
    cross1.classList.remove('cross-ativation');
    el1.classList.remove('brand-list__active');
    cross1.classList.remove('cross-ativation');
    el2.classList.remove('brand-list__active');
    cross2.classList.remove('cross-ativation');
    el3.classList.remove('brand-list__active');
    cross3.classList.remove('cross-ativation');
    el4.classList.remove('brand-list__active');
    cross4.classList.remove('cross-ativation');
    el5.classList.remove('brand-list__active');
    cross5.classList.remove('cross-ativation');
    el6.classList.remove('brand-list__active');
    cross6.classList.remove('cross-ativation');
    el7.classList.remove('brand-list__active');
    cross7.classList.remove('cross-ativation');
    el8.classList.remove('brand-list__active');
    cross8.classList.remove('cross-ativation');
}





