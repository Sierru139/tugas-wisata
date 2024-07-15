const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 80,
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        1020: {
            slidesPerView: 3,
            spaceBetween: 80
        }

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})