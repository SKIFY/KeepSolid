document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      let card = this.parentElement;
      let fullText = card.querySelector(".full-text");
      let shortText = card.querySelector(".description");

      if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        this.textContent = "Згорнути";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "-webkit-box";
        this.textContent = "Читати далі";
      }
    });
  });
});
