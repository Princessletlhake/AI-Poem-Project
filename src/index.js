function displayPoem(response) {
  console.log("Poem Generator");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let searchBar = document.querySelector("#user-search");
  apiKey = "14316t5bdf40359dao24118cb372909f";
  prompt = `User instructions: Generate poems about ${searchBar.value}`;
  context =
    "You are a romantic poem expert and love writing short poems. Your mission is to generate a 4 line poem and make sure the seperate each ;ine with <br />. Make sure to ufollow the user instructions";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating Poem about ${searchBar.value} </div`;

  console.log("Generatin Poem...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${prompt}`);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
