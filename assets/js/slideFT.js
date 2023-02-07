let indexFT = 0;
showSlidesFT();


function showSlidesFT() {
  let i;
  let slides = document.getElementsByClassName("slideFT");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexFT++;
  if (indexFT > slides.length) {indexFT = 1}
  slides[indexFT-1].style.display = "block";
  setTimeout(showSlidesFT, 2000);
}
