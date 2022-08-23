window.addEventListener('load', function () {
  const swiper = new Swiper('.client__slider', {
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      }

    }
  });
  AOS.init();

  let burger = document.querySelector('.burger')
  let body = document.body
  let header = document.querySelector('.header')

  burger.addEventListener('click', function() {
    this.classList.toggle('active')
    body.classList.toggle('no-scroll')
    header.classList.toggle('show')
  })
})



