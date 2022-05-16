let circle = document.querySelector('.circle');
let left = 0;
let toptop = 0;

window.addEventListener('keydown', function(e) {
    if (e.keycode == 37) {
        left += 2;
        circle.style.left = left + 'px';
    } else if (e.keycode == 38) {
        toptop += 2;
        circle.style.toptop = toptop + 'px';
    } else if (e.keycode == 39) {
        left -= 2;
        circle.style.left = left - 'px';
    } else {
        toptop -= 2;
        circle.style.toptop = toptop - 'px';
    }
})