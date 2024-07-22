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

const FSImg = document.querySelectorAll('#fullScreen');
function fullScreenImg() {
    for (let i = 0; i < FSImg.length; i++) {
        if (FSImg[i].src.includes("maximize.png")) {
            FSImg[i].src = "assets/imgs/logo-icon/minimize.png"
        } else {
            FSImg[i].src = "assets/imgs/logo-icon/maximize.png"
        }
    }
}

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || 
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    } else {
        if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
        }  
    }  
}
