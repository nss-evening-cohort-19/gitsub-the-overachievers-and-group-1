

console.log("go team 1!");

const projectObjects = [
 
  {
  pk: 0,
  userId: 0,
  projName: "Pet Adoption",
  projDesc: "Design an app to aid in finding homes for pets",
  update: "updated: 33 minutes ago",
  status: "status: Old McDonald has a farm",
 },

 {
  pk: 1,
  userId: 1,
  projName: "Video Player",
  projDesc: "Build a working YouTube style video player",
  update: "updated: 420 hours ago",
  status: "status: net scripts and chill",
 },

 {
  pk: 2,
  userId: 2,
  projName: "Sorting Hat",
  projDesc: "Design an app that will randomly select houses for new students at Hogworts School of Magic",
  update: "updated: 666 days ago",
  status: "status: Hokus Pokus - I've been expelled",
 },

 {
  pk: 3,
  userId: 3,
  projName: "Product Cards",
  projDesc: "Build an app to aid in finding homes for used instruments",
  update: "updated: 9 years ago",
  status: "status: beginner lessons initiated",

 },

 {
  pk: 4,
  userId: 4,
  projName: "First Group Project",
  projDesc: "Keep doing what you are doing, because you're currently doing your part in the first group project",
  update: "updated: 1 second ago",
  status: "status: All in this shit together",
 },

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
];




const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//<div id="navbar"></div>
const navBarOnDom = () => {
let domString = "";
domString = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
</nav>
`;

renderToDom("#navbar", domString)

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
}


// const searchProj = () => {
//   let domString = "";
//   domString =`

// <div class="row g-3 align-items-center">
//   <div class="col-auto">
//     <label for="inputSearch" class="col-form-label">SEARCH</label>
//   </div>
//   <div class="col-auto">
//     <input type="search" id="inputSearch" class="form-control" aria-describedby="searchHelpInline">
//   </div>
//   <div class="col-auto">
//     <span id="searcher" class="form-text">
//       Must search by project name.
//     </span>
//     <button type="submit" id="resetList" class="btn btn-primary">Reset</button>
//   </div>
// </div>`

//  renderToDom("#searchMe", domString);
// };


const projListOnDom = (projectObjects) => {
  let domString = "";
  for (const object of projectObjects) {
  domString +=`
    <tr>
      <td>${object.projName}</td>
      <td>${object.projDesc}</td>
      <td>${object.update}   -   ${object.status}</td>
    </tr>
  `;
  }
  renderToDom("#proList", domString)
};

const newProjectForm1 = () => {
  let domString = "";
  domString =`
  <form id="newProject">
    <div class="mb-3">
      <h3>Create a New Project</h3>
  
      <div class="mb-3">
        <label for="Project Name" class="form-label">ENTER: New Project Name</label>
        <input type="text" class="form-control" id="nameOfNewProject" aria-describedby="makeNew">
        <div id="makeNew" class="form-text"></div>
      </div>
    </div>
    <div class="mb-3">
      <label for="projectDes" class="form-label">ENTER: Description</label>
      <input type="type" class="form-control" id="desOfProject">
    </div>
    <div class="mb-3">
      <label for="projectDes" class="form-label">ENTER: Update</label>
      <input type="type" class="form-control" id="upOfProject">
    </div>
    <div class="mb-3">
      <label for="projectDes" class="form-label">ENTER: Status Comment</label>
      <input type="type" class="form-control" id="statOfProject">
    </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
renderToDom("#newProjectForm", domString)

};


const addFooter = () => {
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

  /*        EVENT LISTENERS          */

  const eventListeners = () => {

    document.querySelector("#newProjectForm").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const addNewProject = {
        pk: projectObjects[projectObjects.length - 1].sId + 1,
        userId: projectObjects[projectObjects.length - 1].sId + 1,
        projName: document.querySelector("#nameOfNewProject").value,
        projDesc: document.querySelector("#desOfProject").value,
        update: document.querySelector("#upOfProject").value,
        status: document.querySelector("#statOfProject").value,
      };
  
  
      projectObjects.push(addNewProject);
      projListOnDom(projectObjects, "#newProjectForm");
      document.querySelector("#newProject").reset();
    });
    // SEARCH: 

      const search = (e) => {
        const userInput = e.target.value.toLowerCase();
        const searchResult = projectObjects.filter(type => type.projName.toLowerCase().includes(userInput)) ||
        type.projDesc.toLowerCase().includes(userInput) 

        projListOnDom(searchResult);
      }
   
    //  document.querySelector("#inputSearch").addEventListener("keyup", (e) => {
    //    console.log(e.target.value.toLowerCase());
    //    const inSearch = e.target.value.toLowerCase();
    //    const outSearch = projectObjects.filter(taco => taco.projName.toLowerCase().includes(inSearch));
    
      
    //   renderToDom("#proList", outSearch);
    // });

    // document.querySelector("#resetList").addEventListener("click", (e) => {
    //   if (e.target.id.includes("resetList")) {
    //     projectListOnDom(projectObjects);
    //   };
    // });
    document.querySelector('#searchResult').addEventListener('keyup', search);

  };
  

  const run = () => {
    navBarOnDom();
    // searchProj();
    profile();
    projListOnDom(projectObjects);
    newProjectForm1();
    addFooter();
    eventListeners();
  };

  run();
