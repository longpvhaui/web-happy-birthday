let index = 0;
showSlidesLife();


function showSlidesLife() {
  let i;
  let slides = document.getElementsByClassName("slideLife");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {index = 1}
  slides[index-1].style.display = "block";
  setTimeout(showSlidesLife, 2000);
}

