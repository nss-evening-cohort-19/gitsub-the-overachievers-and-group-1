import { users } from "./data.js";

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

const profile = () => {
  //initialize variable domString
  let domString ='';
  domString = 
  `<div class="card" style="width: 18rem;">

   <!--profile picture-->
   <img src="${users[1].userPhoto}" class="rounded-circle profileImage rounded mx-auto d-block" alt="...">

    <!--profile body-->
    <div class="card-body">

      <h2 style="font-size: 20px;">${users[1].name}</h2> 
      <p style="margin-bottom:1.5em;"><i class="fa-solid fa-address-card"></i> ${users[1].userName} </p>

      <p class="card-text" style="font-size:12px;">${users[1].userBio}</p>

      <div class="profileButtons">
        <button type="button" class="btn btn-outline-success" id="followButton"><i class="fa-solid fa-person-cane"></i> Follow</button>
        <button type="button" class="btn btn-outline-success" id="sponsorButton"> <i class="fa-regular fa-heart"></i> Sponsor </button>
        <button type="button" class="btn btn-outline-success" id="elipsesButton">...</button>
      </div>

      <div class="following">
        <p style="font-size: 13px;margin-right: 10px;"><i class="fa-solid fa-user-group"></i><em>1.8k</em> followers</p>
        <p style="font-size: 13px;margin-right: 10px;"><em>27</em> following</p>
        <p style="font-size: 13px;margin-right: 10px;"><i class="fa-solid fa-star"></i><em>329</em></p>
      </div>

      <hr style="color:white;">

      <p class="location"><i class="fa-solid fa-location-pin"></i></i> ${users[1].userLocation}</p>
      <p class="email"><i class="fa-solid fa-envelope"></i> ${users[1].userEmail}</p>
      <p class="email"><i class="fa-solid fa-link"></i> ${users[1].userWebsite}</p>
      <p class="email"><i class="fa-solid fa-crow"></i> ${users[1].userTwitter}</p>

    </div>
  </div>
  `;
  renderToDom('#profile',domString)
};

const newRepoForm = () => {
  let domString = "";
  domString =`
  <form id="newRepo">
  <div id="formHeader>
     <h5>Create a new repository</h5>
  </div>
  <div class="mb-3">
    <label for="newRepoName" class="form-label">Repository name</label>
    <input type="text" class="form-control" id="repoName" aria-describedby="makeNew">
    <div id="makeNew" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="newRepoDes" class="form-label">Description(optional)</label>
    <input type="type" class="form-control" id="repoDesc">
  </div>
  <div id="newRepoLang">
  <label class="form-label">Repo language</label>
  <div class="select-menu">
  <select class="form-select form-control-lg" id="repoLang" aria-label="newRepoLang" required>
    <option value="">Select repo language</option>
    <option value="javascript">JavaScript</option>
    <option value="html">HTML</option>
    <option value="python">Python</option>
    <option value="Go">Go</option>
    <option value="Rust">Rust</option>
    <option value="Kotlin">Kotlin</option>
  </select>
</div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
renderToDom("#newRepoForm", domString)

};

const formEventListeners = () => {

  const form = document.querySelector('#newRepoForm');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepoObj = {
      repoName: document.querySelector("#repoName").value,
      repoDesc: document.querySelector("#repoDesc").value,
      repoLang: document.querySelector("#repoLang").value
    };
    reposData.push(newRepoObj);
    renderReposCards(reposData);

    form.reset();
  });
}

const startApp = () => {
renderReposCards(reposData);
profile();
newRepoForm();
formEventListeners();
};

startApp();
