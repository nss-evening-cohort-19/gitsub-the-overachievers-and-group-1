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

// UTILITY Function:

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

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
    </div>
  </div>`
  };
  renderToDom('#packagesCards', domString);
};

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

<button type="submit" class="btn btn-success">Create Package</button>
</form>`

renderToDom('#packagesForm', domString);
// console.log(packagesForm);
};

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

  form.reset();
});
}

const startApp = () => {
renderPackageCards(packagesData);
addPackageForm();
eventLiseteners();
};
startApp();
