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
    slidesPerView : 5, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 15, // 슬라이드간 간격
    slidesPerGroup : 6, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    autoplay: {
      delay: 7000,
    }
  });

  let prevProductArr = [{
    img: 'images/preview5.jpg',
    displayC: 'display: none;',
    title: '[닥터노아] 마루 대나무칫솔 콤팩트 (6개 벌크 /낱개)',
    price: '16,800원',
    priceOt: '0원',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: none;'
  }, {
    img: 'images/preview6.png',
    displayC: 'display: none;',
    title: '[mailPack] 메일팩 찌꺼기 지갑',
    price: '5,000원',
    priceOt: '0',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: block;'
  }, {
    img: 'images/preview7.jpg',
    displayC: 'display: block;',
    title: '[mailPack] 메일팩 에어팟 프로 케이스 (자투리 원단)',
    price: '23,000원',
    priceOt: '0',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: none;'
  }, {
    img: 'images/preview8.png',
    displayC: 'display: none;',
    title: '[다시쓰는그랩] 밀랍랩 생활랩',
    price: '5,000원',
    priceOt: '0',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: none;'
  }, {
    img: 'images/preview1.jpg',
    displayC: 'display: none;',
    title: '[프레시버블] 유기농 소프넛 체험팩 세트',
    price: '6,800원',
    priceOt: '7,200원',
    displayPo: 'display: inline-block;',
    displayS: 'display: block;',
    displayB: 'display: none;'
  }, {
    img: 'images/preview2.jpg',
    displayC: 'display: none;',
    title: '[플랑드비] 올라이트바디솝 뤽상부르',
    price: '18,000원',
    priceOt: '0',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: none;'
  }, {
    img: 'images/preview3.jpg',
    displayC: 'display: none;',
    title: '[플랑드비] 올라이트바디솝 퓨어',
    price: '16,500원',
    priceOt: '0',
    displayPo: 'display: none;',
    displayS: 'display: none;',
    displayB: 'display: block;'
  }, {
    img: 'images/preview4.jpg',
    displayC: 'display: none;',
    title: '[JALLA] 다용도 스텐 분리형 가위',
    price: '20,000원',
    priceOt: '20,900원',
    displayPo: 'display: inline-block;',
    displayS: 'display: block;',
    displayB: 'display: none;'
  }];

  let prevProduct = $('.preview-products > li');
  let prevTotal = prevProduct.length;
  for (let i = 0; i < prevTotal; i++) {
    let prevProductLi = prevProduct[i];
    let prevTxt = `
      <a href="#" class="preview-products-img color-option"><img src="${prevProductArr[i].img}" href="#" alt="${prevProductArr[i].title}"><div class="color-option-set" style="${prevProductArr[i].displayC}"><span>yellow</span><span>black</span></div></a>
      <a href="#" class="preview-products-title">${prevProductArr[i].title}</a>
      <a href="#" class="preview-products-price"">${prevProductArr[i].price}</a>
      <a href="#" class="preview-products-price-ot" style="${prevProductArr[i].displayPo}">${prevProductArr[i].priceOt}</a>
      <a href="#" class="preview-products-option" style="${prevProductArr[i].displayS}">SALE</a>
      <a href="#" class="preview-products-option2" style="${prevProductArr[i].displayB}">BEST</a>
    `;
    prevProductLi.innerHTML = prevTxt;
  };

  let bestProductArr = [{
    img: 'images/best-1.jpg',
    title: '[더피커] 롱핸들 세척브러쉬',
    price: '6,500원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-2.jpg',
    title: '[지구나무] 대나무 연필깎이',
    price: '2,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-3.png',
    title: '[더피커] 햄프코튼 다회용 커피필터',
    price: '4,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-4.jpg',
    title: '[더피커] 스텐 고리집게 (5p)',
    price: '3,000원',
    priceOt: '3,500원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-5.jpg',
    title: '[잘:쓰이다상점] 천연 목욕수세미(어린수세미)',
    price: '4,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-6.jpg',
    title: '[닥터노아] 마루 대나무 칫솔(콤팩트)',
    price: '2,800원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-7.jpg',
    title: '[더피커] 스테인리스 칫솔걸이',
    price: '4,500원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-8.jpg',
    title: '[더피커] 주간 플래너 피커북(재생종이 위클리 15주)',
    price: '5,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-9.jpg',
    title: '[잘:쓰이다상점] 천연 통 수세미',
    price: '5,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-10.jpg',
    title: '[sorex] 소렉스 다용도 인형 팟 브러쉬',
    price: '7,500원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-11.jpg',
    title: '[sorex] 소렉스 코튼 브러쉬',
    price: '6,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-12.jpg',
    title: '[더피커] 유기농 핸드(세안)타월',
    price: '5,500원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-13.jpg',
    title: '[프레시버블] 유기농 소프넛 체험팩 세트',
    price: '6,800원',
    priceOt: '7,200원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-14.jpg',
    title: '[플랑드비] 올라이트바디솝 뤽상부르',
    price: '18,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-15.jpg',
    title: '[다시쓰는그랩] 다회용 밀랍 주방랩(M/L)',
    price: '4,500원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-16.jpg',
    title: '[실리팟] 다회용 실리콘 지퍼백',
    price: '15,000원',
    priceOt: '18,000원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-17.jpg',
    title: '[더피커] 제로웨이스트 온라인 기프트 카드',
    price: '10,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-18.jpg',
    title: '[더피커] 제로웨이스트 천연치실 2종',
    price: '6,000원',
    priceOt: '6,500원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-19.jpg',
    title: '[꽃마리] 세탁용 과탄산소다솝',
    price: '4,300원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-20.jpg',
    title: '[더피커] 에센셜 저불소 고체치약(21정/120정)',
    price: '4,800원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-21.jpg',
    title: '제로웨이스트 입문 키트',
    price: '9,000원',
    priceOt: '9,800원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-22.jpg',
    title: '[러버랩] 천연라텍스 고무장갑',
    price: '3,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-23.jpg',
    title: '[JALLA] 다용도 스텐 분리형 가위',
    price: '20,000원',
    priceOt: '20,900원',
    displayPo: 'display: inline-block;'
  }, {
    img: 'images/best-24.jpg',
    title: '[지미프로젝트] 스텐 자석 비누 홀더',
    price: '6,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-25.jpg',
    title: '[에코송이] 소창 2겹 행주(손수건)',
    price: '4,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-26.jpg',
    title: '[잘:쓰이다상점] 다목적 원형수세미',
    price: '5,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-27.jpg',
    title: '[가치솝] 유기농 이엠 세탁비누(240g)',
    price: '8,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-28.png',
    title: '[닥터노아] 마루 대나무 칫솔 스탠다드(6개 벌크/낱개)',
    price: '16,800원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-29.jpg',
    title: '[mailPack] 메일팩 찌꺼기 지갑',
    price: '5,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }, {
    img: 'images/best-30.jpg',
    title: '[더피커] 스테인리스 혀클리너',
    price: '6,000원',
    priceOt: '0원',
    displayPo: 'display: none;'
  }];

  let bestProduct = $('.best-list-wrap > li');
  let bestTotal = bestProduct.length;
  for (let i = 0; i < bestTotal; i++) {
    let bestProductLi = bestProduct[i];
    let bestTxt = `
      <a href="#" class="best-products-img"><img src="${bestProductArr[i].img}" alt="${bestProductArr[i].title}"></a>
      <a href="#" class="best-products-title">${bestProductArr[i].title}</a>
      <a href="#" class="best-products-price">${bestProductArr[i].price}</a>
      <a href="#" class="best-products-price-ot" style="${bestProductArr[i].displayPo}">${bestProductArr[i].priceOt}</a>
    `;
    bestProductLi.innerHTML = bestTxt;
  }
};