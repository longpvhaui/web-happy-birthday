let indexSlide = 0;
showSlides2();


function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("slide1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexSlide++;
  if (indexSlide > slides.length) {indexSlide = 1}
  slides[indexSlide-1].style.display = "block";
  setTimeout(showSlides2, 2000);
}

