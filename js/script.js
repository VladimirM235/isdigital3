//burger-menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        // body.classList.toggle('_lock')
    })
}

//swiper
const whyIsSlider = new Swiper('.whyis-slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,

        },
        660: {
            slidesPerView: 2,
        },
    }
});

const reviewSlider = new Swiper('.review-slider', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
    },
    // breakpoints: {
    //     992: {
    //         slidesPerView: 3,

    //     },
    //     660: {
    //         slidesPerView: 2,
    //     },
    // }
});

//animation
(function () {
    var squareWrapper = document.querySelector('.service-wrapper');
    var square = squareWrapper.querySelector('.square');
    square.classList.remove('square-transition');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                square.classList.add('square-transition');
                return;
            }

            square.classList.remove('square-transition');
        });
    });

    observer.observe(squareWrapper);
})();

//animation photo

const aboutItems = document.querySelectorAll(".about__item");

if (aboutItems.length > 0) {
    aboutItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'slide',
        })
    })
}


// переход по якорям
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}


//Btn up 

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

//googlemap

function myMap() {
    var mapCanvas = document.getElementById('.map');
    var mapOptions = {
        center: new google.maps.LatLng(44.81157242854411, 20.456571236688696), zoom: 18
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}