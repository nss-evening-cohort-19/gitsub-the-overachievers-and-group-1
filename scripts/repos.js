const reposData = [
  {
    id: 1,
    repoName: "Tic Tac Toe Game",
    repoDesc: "Easy tic tac toe game",
    repoLang: "JavaScript"
  },
  {
    id: 2,
    repoName: "Tamagotchi",
    repoDesc: "A virtual pet",
    repoLang: "JavaScript"
  },
  {
    id: 3,
    repoName: "Bio Site",
    repoDesc: "My homepage",
    repoLang: "HTML"
  },
  {
    id: 4,
    repoName: "Snake Game",
    repoDesc: "A game",
    repoLang: "Python"
  },
  {
    id: 5,
    repoName: "Go practice",
    repoDesc: "Practice for learning Go",
    repoLang: "Go"
  }
];

const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

const renderReposCards = (repos) => {
  let domString = "";
  for (let repo of repos) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.repoName}</h5>
      <p class="card-text">${repo.repoDesc}</p>
      <p class="card-text">${repo.repoLang}</p>
    </div>
  </div>`
  };
  renderToDom('#reposCards', domString);
};

const startApp = () => {
renderReposCards(reposData);
};

startApp();
