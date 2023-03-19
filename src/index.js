const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.querySelector("input#searchByID");

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        title.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
