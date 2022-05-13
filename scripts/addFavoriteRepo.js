import { renderToDom } from "./renderToDom.js";
import {users,favRepos} from "./data.js";

const addFavoriteRepo = () => {
  //initialize variable domString
  let domString="";
  domString =`
  <h5>Add a New Repo:</h5>
  <hr style="color:black;">


  <!--Bootstrap-->
  <div class="inputForm">

    <form>

      <label for="basic-url" class="form-label">Repository name <sup class="superscript">*</sup> </label>

      <div class="input-group mb-3">
        <input type="text" class="form-control" id="name" aria-describedby="basic-addon3">
      </div>
        <p>Great repository names are short and simple.</p>
      
      <label for="basic-url" class="form-label">Description<em class="optional">(optional)</em> </label>

      <div class="input-group mb-3">
        <input type="text" class="form-control" id="about" aria-describedby="basic-addon3">
      </div>
      
      <div id="addFavRepoButton" class="topButtons">
      <button type="submit" class="btn-primary btn-md allButton" id="addFavRepoBtn">Create Repository</button>
      
    </form>

  </div>
  `
  renderToDom('#addFavRepo',domString)
}

export {addFavoriteRepo}
