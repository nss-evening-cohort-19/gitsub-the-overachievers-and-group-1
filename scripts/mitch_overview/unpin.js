import { renderToDom } from "../renderToDom.js";
import {users,favRepos} from "../data.js";
import { favoriteRepos } from "./favoriteRepos.js";

const unpinButton = () => {
  document.querySelector('#favRepos').addEventListener('click', (event) => {
    if(event.target.id) {
      const [method,id] = event.target.id.split('--');
      let index = favRepos.findIndex((taco) => taco.id === parseInt(id))
      console.log(index,'this is the index!');

      if(event.target.id.includes('delete')) {
        favRepos.splice(index,1)
        favoriteRepos(favRepos)
      }
    }
  })
}

export {unpinButton}
