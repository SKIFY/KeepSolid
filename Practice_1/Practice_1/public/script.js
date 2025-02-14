// Функція для зміни тексту
function changeText() {
  document.getElementById("text").innerText = "Текст змінено! Це новий текст.";
}

// Функція для відкриття зображення у модальному вікні
function openImage(image) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImage").src = image;
}

// Функція для закриття модального вікна
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
