let slideBirthdayIndex = 1;
showSlides(slideBirthdayIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideBirthdayIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideBirthdayIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideBirthday");
  if (n > slides.length) {slideBirthdayIndex = 1}
  if (n < 1) {slideBirthdayIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideBirthdayIndex-1].style.display = "block";
}