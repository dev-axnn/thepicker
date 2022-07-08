window.onload = function(){
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

};