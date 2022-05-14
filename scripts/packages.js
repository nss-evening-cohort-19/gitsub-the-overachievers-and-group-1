// DATA
import {users, favRepos} from "./data.js"

const packagesData = [
  {
    id: 1,
    packName: "Docker",
    packDesc: "Docker helps developers bring their ideas to life by conquering the complexity of app development.",
    packNew: "",
    packLink: "https://github.com/docker"
  }, 
  {
    id: 2,
    packName: "RubyGems",
    packDesc: "RubyGems.org is the Ruby community’s gem hosting service. Instantly publish your gems and then install them. Use the API to find out more about available gems. Become a contributor and improve the site yourself.",
    packNew: "",
    packLink: "https://github.com/rubygems"
  }, 
  {
    id: 3,
    packName: "Apache Maven",
    packDesc: "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.",
    packNew: "",
    packLink: "https://maven.apache.org/"
  },
  {
    id: 4, 
    packName: "npm",
    packDesc: "We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
    packNew: "",
    packLink: "https://github.com/npm"
  }, {
    id: 5,
    packName: "NuGet",
    packDesc: "NuGet is a package manager designed to enable developers to share reusable code. It is a software as a service solution whose client app is free and open-source. The Outercurve Foundation initially created it under the name NuPack.",
    packNew: "",
    packLink: "https://github.com/NuGet"
  }, 
  {
    id: 6,
    packName: "Containers",
    packDesc: "GitHub Container Registry introduces easy sharing across organizations, fine-grained permissions, and free, anonymous access for public container images.",
    packNew: "",
    packLink: "https://github.com/containers"
  }
];

// UTILITY Function:

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// FUNCTIONS:

// NAVBAR:
const navBar = () => {
  let domString = '';
  domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GitSub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/index.html">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/repos.html">Repositories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/projects.html">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/packages.html">Packages</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`

renderToDom('#navbar', domString);

}

// PROFILE: 
const profile = () => {
  //initialize variable domString
  let domString ='';
  domString = 
  `<div class="card" style="width: 18rem;">

   <!--profile picture-->
   <img src="${users[2].userPhoto}" class="rounded-circle profileImage rounded mx-auto d-block" alt="...">

    <!--profile body-->
    <div class="card-body">

      <h2 style="font-size: 20px;">${users[2].name}</h2> 
      <p style="margin-bottom:1.5em;"><i class="fa-solid fa-address-card"></i> ${users[2].userName} </p>

      <p class="card-text" style="font-size:12px;">${users[2].userBio}</p>

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

      <p class="location"><i class="fa-solid fa-location-pin"></i></i> ${users[2].userLocation}</p>
      <p class="email"><i class="fa-solid fa-envelope"></i> ${users[2].userEmail}</p>
      <p class="email"><i class="fa-solid fa-link"></i> ${users[2].userWebsite}</p>
      <p class="email"><i class="fa-solid fa-crow"></i> ${users[2].userTwitter}</p>

    </div>
  </div>
  `;
  renderToDom('#profile',domString)
}

// SEARCH: 

const search = (e) => {
  const userInput = e.target.value.toLowerCase();
  const searchResult = packagesData.filter(type => type.packName.toLowerCase().includes(userInput)) ||
  type.packDesc.toLowerCase().includes(userInput) ||
  type.packNew.toLowerCase().includes(userInput)

  renderPackageCards(searchResult);
}

// CARDS: 

const renderPackageCards = (array) => {
  let domString = "";
  for (let type of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${type.packName}</h5>
      <p class="card-text">${type.packDesc}</p>
      <p class="card-text">${type.packNew}</p>
      <a href="${type.packLink}"><p class="link">Learn More</p></a>
      <button class="btn btn-danger" id="delete--${type.id}">Delete</button>
    </div>
  </div>`
  };
  renderToDom('#packagesCards', domString);
};

// FORM:
const addPackageForm = () => {
  let domString = "";
  domString = `<form id="newPackage">
  <div class="mb-3">
    <h3>Create a New Package</h3>
    <p>By publishing your package, you can coordinate, track, and update your package as needed. You can use package managers listed below to make life easier.</p>
    <label for="package-name" class="form-label">Package Name</label>
    <input type="text" class="form-control" id="packName" aria-describedby="makeNew">
    <div id="packName" class="form-text">
  </div>
  <div class="mb-3">
    <label for="package-desc" class="form-label">Description (optional)</label>
    <input type="text" class="form-control" id="packDesc">
  </div>
<div id="client-manager">
  <h5>Select Package Managers</h5>
  <div class="select-menu">
  <select class="form-select form-control-lg" id="packNew" aria-label="packNew" required>
    <option value="">Select a Package Manager</option>
    <option value="docker">Docker</option>
    <option value="rubygems">RubyGems</option>
    <option value="apachemaven">Apache Maven</option>
    <option value="npm">npm</option>
    <option value="nuget">NuGet</option>
    <option value="containers">Containers</option>
  </select>
</div>

<button type="submit" name="clear" id="clear" class="btn btn-success">Create Package</button>
</form>`

renderToDom('#packagesForm', domString);
// console.log(packagesForm);
};

// FOOTER:

const footer = () => {
  let domString = "";
  domString =
  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">*GITSUB*</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            
            <a class="nav-link" href="#">Terms</a>
            <a class="nav-link" href="#">Privacy</a>
            <a class="nav-link" href="#">Security</a>
            <a class="nav-link" href="#">Status</a>
            <a class="nav-link" href="#">Help</a>
            <a class="nav-link" href="#">Contact</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link" href="#">API</a>
            <a class="nav-link" href="#">Training</a>
            <a class="nav-link" href="#">Blog</a>
          </div>
      </div>
  </nav>`;
  
  renderToDom("#footer", domString);
  };


// EVENTLISTENERS:

const eventListeners = () => {
  const form1 = document.querySelector('#packagesForm');
  form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPackageObj = {
    packName: document.querySelector("#packName").value,
    packDesc: document.querySelector("#packDesc").value,
    packNew: document.querySelector("#packNew").value
  };
  packagesData.push(newPackageObj);
  renderPackageCards(packagesData);
});

document.querySelector("#packagesCards").addEventListener("click", (e) => {
  if (e.target.id) {
    const [method, id] = e.target.id.split('--');
    const index = packagesData.findIndex(type => type.id === parseInt(id));
    if (e.target.id.includes('delete')) {
      packagesData.splice(index, 1)
      renderPackageCards(packagesData);
    }
  }
});
}


// CALLING THE FUNCTION:
const startApp = () => {
navBar();
profile();
document.querySelector('#searchResult').addEventListener('keyup', search);
renderPackageCards(packagesData);
addPackageForm();
footer();
eventListeners();
};
startApp();
