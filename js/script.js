window.onload = function(){
  AOS.init();

  // 메뉴 토글(?) 설정
  let menuBtn = $('.menu-btn');
  let menuWrap = $('.menu-wrap');
  menuBtn.click(function() {
    
    let result = menuBtn.hasClass('menu-btn-open');
    if(result == true) {
      menuBtn.removeClass('menu-btn-open');
      menuBtn.addClass('menu-btn-close');
      menuWrap.show();
    }else {
      menuBtn.removeClass('menu-btn-close');
      menuBtn.addClass('menu-btn-open');
      menuWrap.hide();
    }
  });

  // 바깥 부분 클릭시 메뉴 닫기 기능
  menuWrap.click(function(){
    menuBtn.removeClass('menu-btn-close');
    menuBtn.addClass('menu-btn-open');
    menuWrap.hide();
  });


  // 메뉴 depth2 숨겼다 나타나기
  // overflowhidden 을 이용해서 transion 을 쓴다.
  let depth1Menu = $('.depth1-more');
  let depth1MenuHeight = 65; // mainmenu 높이
  let depth2 = $('.depth2');
  let depth2MenuHeight = 40; // submenu 한 칸의 높이
  let depth2Arr = [];

  $.each(depth2, function(index, item){
    let count = $(this).find('li').length;
    depth2Arr[index] = depth1MenuHeight + depth2MenuHeight * count;
  });

  $.each(depth1Menu, function(index, item) {
      $(this).mouseenter(function(){
        $(this).css('height', depth2Arr[index]);
      });
      $(this).mouseleave(function(){
        $(this).css('height', depth1MenuHeight);
      });
  });
  
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

  // fetch('파일명.json')
  // .then(res => res.json(res))
  // .then(data => {
  //   // 가능하면 변경하지 않기(json 파일에서)
  //   console.log(data.result)
  //   코드 위치 
  // })
  // .catch(err => console.log("에러내용 : ", err));

  fetch('js/preview.json')
    .then(res => res.json(res))
    .then(data => {
      // 하고 싶은 일을 작성한다.
      console.log(data.result)
      let prevProductArr = data.result;
      let prevProduct = $('.preview-products');
      let prevTotal = prevProductArr.length;
      let prevTxt = '';
      for (let i = 0; i < prevTotal; i++) {
        let item = prevProductArr[i];
        prevTxt += `
        <li>
          <a href="#" class="preview-products-img color-option"><img src="${item.img}" href="#" alt="${item.title}"><div class="color-option-set" style="${item.displayC == 0 ? 'display:none' : '' }"><span>yellow</span><span>black</span></div></a>
          <a href="#" class="preview-products-title">${item.title}</a>
          <a href="#" class="preview-products-price"">${item.price}</a>
          <a href="#" class="preview-products-price-ot" style="${item.displayPo == 0 ? 'display:none' : '' }">${item.priceOt}</a>
          <a href="#" class="preview-products-option" style="${item.displayS == 0 ? 'display:none' : ''}">SALE</a>
          <a href="#" class="preview-products-option2" style="${item.displayB == 0 ? 'display:none' : ''}">BEST</a>
        </li>
      `;
      };
      prevProduct.html(prevTxt);
    })
    .catch(err => console.log(err));

    fetch('js/best.json')
    .then(res => res.json(res))
    .then(data => {
      // 하고 싶은 일을 작성한다.
      console.log(data.result)
      let bestProductArr = data.result;
      let bestProduct = $('.best-list-wrap');
      let bestTotal = bestProductArr.length;
      let bestTxt = '';
      for (let i = 0; i < bestTotal; i++) {
        let item = bestProductArr[i];
        bestTxt += `
        <li>
          <a href="#" class="best-products-img"><img src="${item.img}" alt="${item.title}"></a>
          <a href="#" class="best-products-title">${item.title}</a>
          <a href="#" class="best-products-price">${item.price}</a>
          <a href="#" class="best-products-price-ot" style="${item.displayPo == 0 ? 'display:none' : '' }">${item.priceOt}</a>
        </li>
      `;
      };
      bestProduct.html(bestTxt);
    })
    .catch(err => console.log(err));

  new Swiper('.sw-bestproducts', {
    slidesPerView: 5, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 15, // 슬라이드간 간격    
    loop: true,
    speed: 1500,
    slidesPerGroup: 5, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    autoplay: {
      delay: 7000,
    }
  });
};