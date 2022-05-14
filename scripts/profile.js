import {renderToDom} from "./renderToDom.js"
import { users,favRepos } from "./data.js";

//render profile card to dom with properties of user object array
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

      <hr style="color:white;">

      <h5 class="highlightstext"><font size="4">Highlights:</font></h5>

      <p><i class="fa-regular fa-snowflake"></i> ${users[1].highlights[0]}</p>
      <p><i class="fa-solid fa-star"></i> ${users[1].highlights[1]}</p>

      <hr style="color:white;">

      <h5 class="highlightstext"><font size="4">Organizations:</font></h5>

      <div class="organizationsProfile">
        <img src=${users[1].organizations[1]} />
      
      </div>

    </div>
  </div>
  `;
  renderToDom('#profile',domString)
}

export {profile}
