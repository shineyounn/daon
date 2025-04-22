
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1153: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
    },
});