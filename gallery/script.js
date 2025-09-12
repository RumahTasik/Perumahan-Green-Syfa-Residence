// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilang kan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Modal control
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const captionText = document.getElementById("caption");

let slideIndex = 1;
showSlides(slideIndex);
// Buka modal waktu gambar diklik
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    const index = parseInt(img.getAttribute("data-index"));
    openModal();
    currentSlide(index);
  });
});

// Tutup modal
closeBtn.addEventListener("click", closeModal);
// tutup modal kalau klik area di luar modal-content
modal.addEventListener("click", function (e) {
  if (e.target === modal) closeModal();
});

// Tombol prev & next
prevBtn.addEventListener("click", () => plusSlides(-1));
nextBtn.addEventListener("click", () => plusSlides(1));

// Klik thumbnail
document.querySelectorAll(".demo").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const index = parseInt(thumb.getAttribute("data-index"));
    currentSlide(index);
  });
});

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
