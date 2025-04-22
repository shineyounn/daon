// submenu.js

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 857) {
    // PC 메뉴: hover
    $('.gnb>li').hover(
      function () {
        $(this).find('.sub').stop().slideDown();
      },
      function () {
        $(this).find('.sub').stop().slideUp();
      }
    );
  } else {
    // 모바일 메뉴: click
    $('.gnb > li > a').on('click', function (e) {
      e.preventDefault();
      $(this).siblings('.sub').stop().slideToggle();
    });
  }
});