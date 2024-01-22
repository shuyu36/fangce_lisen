document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiper', {
        slidesPerView:1,
        loop:true,
        autoplay: {
            delay: 3000,  // 自動輪播的時間間隔，以毫秒為單位
            disableOnInteraction: false,  // 使用者互動後是否停止自動輪播
        },
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });
});
