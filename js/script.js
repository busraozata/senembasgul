const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    };
});


const menuToggle = document.querySelector('.menu-toggle');
const wrapper = document.querySelector('.wrapper');
const navigation = document.querySelector('.menu-area');
const collapse = document.querySelector('.collapse');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    collapse.classList.toggle('active');
    navigation.classList.toggle('active');
    wrapper.classList.toggle("menu--is-revealed");
    if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}



var mySwiperBanner = new Swiper(".mySwiperBanner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperBlog = new Swiper(".mySwiperBlog", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
        },
    },
});


function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
        animate(element);
}

//When the document is ready
$(function () {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function () {
        //Checking if each items to animate are
        //visible in the viewport
        $("h2[data-max]").each(function () {
            inVisible($(this));
        });
    });
});

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass("ms-animated")) {
        var maxval = element.data("max");
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html(),
        }).animate(
            {
                countNum: maxval,
            },
            {
                //duration 5 seconds
                duration: 1000,
                easing: "linear",
                step: function () {
                    element.html(Math.floor(this.countNum) + html);
                },
                complete: function () {
                    element.html(this.countNum + html);
                },
            }
        );
    }
}
