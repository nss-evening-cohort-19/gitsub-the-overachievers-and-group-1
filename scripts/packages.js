// DATA

const packagesData = [
  {
    id: 1,
    packName: "Docker",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  }, 
  {
    id: 2,
    packName: "RubyGems",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  }, 
  {
    id: 3,
    packName: "Apache Maven",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  },
  {
    id: 4, 
    packName: "npm",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  }, {
    id: 5,
    packName: "NuGet",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  }, 
  {
    id: 6,
    packName: "Containers",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    packNew: ""
  }
];

const users = [
  {
    id: 0,
    name: 'Chris P. Bacon',
    userName: 'chrissyPBacc89',
    userPhoto: "./images/chrispbacon.png",
    userBio: "Likes to party",
    userLocation: 'Paris, France',
    userEmail: 'chrispbacon@yahoo.com',
  },
  {
    id: 1,
    name: 'Lawrence B. Gillybee',
    userName: 'biglawtheman5',
    userPhoto: "./images/lawrencebgillybee.jpeg",
    userBio: "Likes to party. And code. And code and party. All day. All night.",
    userLocation: 'Paris, Texas',
    userEmail: 'lawrencebgillybee@yahoo.com',
    userWebsite: 'www.lawrryb.com',
    userTwitter: '@lawbtheman'
  },
  {
    id: 2,
    name: 'Madeline Smith',
    userName: 'maddysmith55',
    userPhoto: "./images/madelinesmith.png",
    userBio: "Likes to party as well",
    userLocation: 'Paris, Chicago',
    userEmail: 'madelinesmith@yahoo.com',
  },
]

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
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${type.packName}</h5>
      <p class="card-text">${type.packDesc}</p>
      <p class="card-text">${type.packNew}</p>
      <button id="learn-more--${type.id}" class="btn btn-success">Learn More</button>
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
  domString =`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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

const eventLiseteners = () => {
  const form = document.querySelector('#packagesForm');
  form.addEventListener("submit", (e) => {
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
    const index = packagesData.findIndex(type => type.id === id);
    if (e.target.id.includes('delete')) {
      packagesData.splice(index, 1)
      renderPackageCards(packagesData);
    }
  }
})
}


// CALLING THE FUNCTION:
const startApp = () => {
navBar();
profile();
document.querySelector('#searchResult').addEventListener('keyup', search);
renderPackageCards(packagesData);
addPackageForm();
footer();
eventLiseteners();

};
startApp();
