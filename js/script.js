var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    simulateTouch: false,
});

function ScrollUp() {
    swiper.slideTo(0, 1000, true);
}

var btnMenu = document.querySelector('.js_header-menu-open'),
    menuList = document.querySelector('.js_menu-list'),
    closeMenu = document.querySelector('.js_close-icon');


btnMenu.onclick = function () {
    menuList.classList.add('show');
};

closeMenu.onclick = function() {
    menuList.classList.remove('show');
};