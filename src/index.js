function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Mirrors are not more silent",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
  
}
let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
