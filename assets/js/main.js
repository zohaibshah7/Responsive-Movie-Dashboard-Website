/*=============== SHOW MENU ===============*/
const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(headerMenu){
    headerMenu.addEventListener('click', () =>{
        nav.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        nav.classList.remove('show-menu')
    })
}

/*=============== SWIPER MOVIE ===============*/
let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto',
        },
        768:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
});

/*=============== SWIPER NEW ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints:{
        440:{
            slidesPerView: 'auto',
            centeredSlides: false,
        },
        768:{
            slidesPerView: 4,
            centeredSlides: false,

        },
        1200:{
            slidesPerView: 5,
            centeredSlides: false,

        }
    }
});

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the value.
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
