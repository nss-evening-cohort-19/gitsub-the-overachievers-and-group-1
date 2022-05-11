

console.log("go team 1!");

const projectObjects = [
 
  {
  pk: 0,
  userId: 0,
  projName: "Pet Adoption",
  projDesc: "Design an app to aid in finding homes for pets",
  update: "33 minutes ago",
  status: "Old McDonald has a farm",
 },

 {
  pk: 1,
  userId: 1,
  projName: "Video Player",
  projDesc: "Build a working YouTube style video player",
  update: "420 hours ago",
  status: "net scripts and chill",
 },

 {
  pk: 2,
  userId: 2,
  projName: "Sorting Hat",
  projDesc: "Design an app that will randomly select houses for new students at Hogworts School of Magic",
  update: "666 days ago",
  status: "Hokus Pokus - I've been expelled",
 },

 {
  pk: 3,
  userId: 3,
  projName: "Product Cards",
  projDesc: "Build an app to aid in finding homes for used instruments",
  update: "9 years ago",
  status: "beginner lessons initiated",

 },

 {
  pk: 4,
  userId: 4,
  projName: "First Group Project",
  projDesc: "Keep doing what you are doing, because you're currently doing your part in the first group project",
  update: "1 second ago",
  status: "All in this shit together",
 },

];



const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const projListOnDom = (projectObjects) => {
  let domString = "";
  domString +=`
  <div class="card" style="width: 18rem;">
  <div class="card-header">
  Project: ${projectObjects.projName}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Description: ${projectObjects.projDesc}</li>
    <li class="list-group-item">Last Updated: ${projectObjects.update}     -     Status: ${projectObjects.status}</li>
  </ul>
</div>
  `;
  
renderToDom("#projectList", domString)
};

const newProjectForm1 = () => {
  let domString = "";
  domString =`
  <form id="newProject">
  <div id="formHeader>
     <h5>NEW PROJECT</h5>
  </div>
  <div class="mb-3">
    <label for="Project Name" class="form-label">Project Name</label>
    <input type="text" class="form-control" id="nameOfNewProject" aria-describedby="makeNew">
    <div id="makeNew" class="form-text">Enter new project name</div>
  </div>
  <div class="mb-3">
    <label for="projectDes" class="form-label">Description (optional)</label>
    <input type="type" class="form-control" id="desOfProject">
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
      </div>
   </nav>`;
  
  renderToDom("#footer", domString);
  };

  const run = () => {
    projListOnDom(projectObjects);
    newProjectForm1();
    addFooter();
  };

  run();


           
          
