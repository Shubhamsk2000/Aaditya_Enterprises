let navbar = document.getElementById("header");
let prevScrollPos = window.scrollY;

function handleScroll() {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;

    if(prevScrollPos == 0){
        navbar.classList.remove("box-shadow");
    }else{
            navbar.classList.add("box-shadow");
    }
}

window.addEventListener("scroll", handleScroll);

// products slider
var swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView:'auto',
    loop:true,
    grabCursor:true,
    disableOnInteraction: true,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });









