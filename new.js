function bars(){
var a = document.getElementById('navlinks');
a.style.right = "0px";
}
function back(){
var b = document.getElementById('navlinks');
b.style.right = '-150px';
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});