// main text 왼쪽 / 오른쪽 슬라이드 넘기기
var text = document.querySelector(".mainimg_text h3");
var text2 = document.querySelector(".mainimg_text p");
document.addEventListener("scroll", () => {
  text.style.left = window.scrollY * 3 + "px";
  text2.style.right = window.scrollY * 3 + "px";
});
