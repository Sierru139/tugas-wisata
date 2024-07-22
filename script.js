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

const respoNav = document.getElementById('resNav');
const respoMenu = document.getElementById('resMenu');
respoNav.addEventListener('click', function() {
    console.log("Terpencet");
    respoMenu.classList.remove('nav-close')
    if (respoMenu.style.display == "none") {
        respoMenu.style.display = "block"
    } else {
        respoMenu.style.display = "none"
    }
});

const respoNavClose = document.getElementById('resNavClose')
respoNavClose.addEventListener('click', function() {
    respoMenu.classList.add('nav-close')
    setTimeout(() => {
        respoMenu.style.display = "none"
    }, 800);
})
