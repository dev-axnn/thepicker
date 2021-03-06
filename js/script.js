window.onload = function(){
  AOS.init();
  
  new Swiper('.sw-visual-1', {
    effect: 'fade',
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.sw-vs-1-pagination',
      clickable: true,
    },
  });

  new Swiper('.sw-bestproducts', {
    slidesPerView : 5,  // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 15,   // 슬라이드간 간격
    slidesPerGroup : 6, // 그룹으로 묶을 수
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 7000,
    }
  });
};