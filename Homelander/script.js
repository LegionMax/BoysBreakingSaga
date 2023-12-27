let currentIndex = 0;
let interval;

function toggleNav() {
  const navList = document.getElementById("navList");
  navList.classList.toggle("open");
}

function scrollToGallery() {
  var gallery = document.getElementById("Gallery");

  gallery.scrollIntoView({ behavior: "smooth" });
}

function scrollToStars() {
  var gallery = document.getElementById("Stars");

  gallery.scrollIntoView({ behavior: "smooth" });
}

function showSlide(index) {
  const carousel = document.querySelector(".carousel-inner");
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newTransformValue = -100 * currentIndex + "%";
  carousel.style.transform = "translateX(" + newTransformValue + ")";
}

function prevSlide() {
  stopAutoSlide();
  showSlide(currentIndex - 1);
}

function nextSlide() {
  stopAutoSlide();
  showSlide(currentIndex + 1);
}

function startAutoSlide() {
  interval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

function toggleCredit() {
  var creditSection = document.getElementById("creditSection");
  creditSection.style.display =
    creditSection.style.display === "block" ? "none" : "block";
}
