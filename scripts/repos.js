import { users, reposData, favRepos } from "./data.js";
import { addFavoriteRepo } from "./mitch_overview/addFavoriteRepo.js";

const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

const renderReposCards = (repos) => {
  let domString = "";
  for (let repo of repos) {
    domString += `<div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-3 repoCard">
      <h5 class="card-title">${repo.repoName}</h5>
      <div class ="repoInfo>
      <p class="card-text"><br>${repo.repoDesc}</p><br>
      <p class="card-text">${repo.repoLang}</p><br>
      <div id="addFavRepoButton" class="topButtons">
        <button type="submit" class="btn btn-primary btn-md allButton" id="favorite--${repo.id}">Favorite</button>
        </div>
    </div>
    </div>
    </div>
  </div>`
  };
  renderToDom('#reposCards', domString);
};

const profile = () => {
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
       <p style="font-size: 13px;margin-right: 10px;"><i class="fa-solid fa-star star"></i><em>329</em></p>
     </div>

     <hr style="color:white;">

     <p class="location"><i class="fa-solid fa-location-pin"></i></i> ${users[1].userLocation}</p>
     <p class="email"><i class="fa-solid fa-envelope"></i><a href="mailto:  lawrencebgillybee@yahoo.com" class="linky"> ${users[1].userEmail}</a></p>
     <p class="email"><i class="fa-solid fa-link"><a href="http://www.google.com" class="linky"></i> ${users[1].userWebsite}</a></p>
     <p class="email"><i class="fa-solid fa-crow"></i><a href="http://www.twitter.com" class="linky"> ${users[1].userTwitter}</a></p>

     <hr style="color:white;">

     <h5 class="highlightstext"><font size="4">Highlights:</font></h5>

     <p><i class="fa-regular fa-snowflake"></i> ${users[1].highlights[0]}</p>
     <p><i class="fa-solid fa-star"></i> ${users[1].highlights[1]}</p>

     <hr style="color:white;">

     <h5 class="highlightstext"><font size="4">Organizations:</font></h5>

     <div class="organizationsProfile">
       <img src=${users[1].organizations[0]} class="orgimage"/>
       <img src=${users[1].organizations[1]} class="orgimage"/>
       <img src=${users[1].organizations[2]} class="orgimage"/>
     </div>

     <hr style="color:white;">

     <h5 class="highlightstext"><font size="4">Sponsors:</font></h5>

     <div class="sponsorsProfile">
       <img src=${users[1].sponsors[0]} class="sponsorimage rounded-circle"/>
       <img src=${users[1].sponsors[1]} class="sponsorimage rounded-circle"/>
       <img src=${users[1].sponsors[2]} class="sponsorimage rounded-circle"/>
       <img src=${users[1].sponsors[3]} class="sponsorimage rounded-circle"/>
       <img src=${users[1].sponsors[4]} class="sponsorimage rounded-circle"/>
     </div>

   </div>
 </div>
  `;
  renderToDom('#profile',domString)
};

const search = (e) => {
  const userInput = e.target.value.toLowerCase();
  const searchResult = reposData.filter(type => type.repoName.toLowerCase().includes(userInput)) ||
  type.repoDesc.toLowerCase().includes(userInput)

  renderReposCards(searchResult);
}

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

const eventListeners = () => {

  const form = document.querySelector('#newRepoForm');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepoObj = {
      repoName: document.querySelector("#repoName").value,
      repoDesc: document.querySelector("#repoDesc").value,
      repoLang: document.querySelector("#repoLang").value
    };


    reposData.push(newRepoObj);
    form.reset();

    renderReposCards(reposData);
  });

  document.querySelector("#reposCards").addEventListener("click", (e) => {
    if (e.target.id.includes("favorite")) {
      const [method, id] = e.target.id.split("--");
      let index = renderReposCards.findIndex((taco) => taco.id === parseInt(id));
      favRepos.push(repos[index]);
      reposData.splice(index, 1);
      renderReposCards(reposData);
    }
  });
}

const startApp = () => {
renderReposCards(reposData);
profile();
newRepoForm();
document.querySelector('#searchResult').addEventListener('keyup', search);
eventListeners();
};

startApp();
