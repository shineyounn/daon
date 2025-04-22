// menu-toggle.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const gnb = document.querySelector('.gnb');
  const overlay = document.querySelector('.menu-overlay');

  toggleBtn.addEventListener('click', function () {
    gnb.classList.toggle('active');
    document.body.style.overflow = gnb.classList.contains('active') ? 'hidden' : '';
  });

  //오버레이 기능
  // overlay.addEventListener('click', function () {
  //   gnb.classList.remove('active');
  //   overlay.classList.remove('active');
  //   document.body.style.overflow = '';
  // });
});

// document.querySelector('.mobile-toggle').addEventListener('click', function () {
//   document.querySelector('.gnb').classList.toggle('active');
// });
