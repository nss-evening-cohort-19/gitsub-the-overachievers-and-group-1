import { projectObjects } from "./scripts-main/data";

console.log("go team 1!");



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
  `};
