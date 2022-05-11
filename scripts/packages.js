const packagesData = [
  {
    id: 1,
    packName: "Docker",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, 
  {
    id: 2,
    packName: "RubyGems",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, 
  {
    id: 3,
    packName: "Apache Maven",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4, 
    packName: "npm",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    id: 5,
    packName: "NuGet",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, 
  {
    id: 6,
    packName: "Containers",
    packDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
      <button id="learn-more--${type.id}" class="btn btn-success">Learn More</button>
    </div>
  </div>`
  };
  renderToDom('#packagesCards', domString);
};

const startApp = () => {
renderPackageCards(packagesData);
};
startApp();
