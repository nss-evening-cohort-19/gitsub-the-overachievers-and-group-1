import { renderToDom } from "./renderToDom.js";
import {users,favRepos} from "./data.js";

//will take array of favorite repo objects as argument and render cards to dom with properties
const favoriteRepos = (array) => {
  let domString = "";
  for(const repo of array) {
    domString += 

    // <div class="card mb-3 abc" style="max-width: 540px;">
    //     <div class="row g-0 insideOfContainer2b">
    //       <div class="col-md-3"></div>

    `<div class="card mb-3" style="max-width: 540px>

      <div class="row g-0">

        <div class="col-md-3 favRepoCard">

          <p class="card-title"><i class="fa-solid fa-book-bookmark"></i> ${repo.name}</p>

          <p class="card-text">${repo.about}</p>

          <div class="favRepoIcons">

            <div class="icons"><i class="fa-solid fa-circle language"></i> ${repo.language}</div>

            <div class="icons"><i class="fa-regular fa-star"></i> ${repo.favorites}</div>

            <div class="icons"><i class="fa-solid fa-share-nodes"></i> ${repo.shares}</div>

            <button type="button" class="btn-sm btn-danger unpinButton" id="delete--${repo.id}"><i class="fa-solid fa-delete-left"></i> Unpin</button>

          </div>

        </div>

      </div>
      
    </div>
    `
  }
  renderToDom('#favRepos',domString)
}

export {favoriteRepos}
