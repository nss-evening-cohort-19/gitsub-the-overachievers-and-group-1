import { renderToDom } from "./renderToDom.js";
import {users,favRepos} from "./data.js";
import { favoriteRepos } from "./favoriteRepos.js";

//event listeners
const eventListeners = () => {

  //input student name function
  const inputStudentName = () => {

    //selecting form where favorite repo and about are input and adding event listener to listen for a submit
    const inputFavRepoName = document.querySelector('form');
    inputFavRepoName.addEventListener('submit', (event) => {
      event.preventDefault();

      //add input name and about to new fav repo object 
      const newFavRepoObj = {
        name: document.querySelector('#name').value,
        about: document.querySelector('#about').value,
        language: 'Javascript',
        favorites: Math.floor(Math.random()*84),
        shares: Math.floor(Math.random()*35)
      };

      //push new fav repo object to fav repo array
      favRepos.push(newFavRepoObj);
      inputFavRepoName.reset();

      //assign indices
      favRepos.forEach((num, i) => {
        num.id = (i-1) + 1;
      })

      favoriteRepos(favRepos);
      

    })
  }
  inputStudentName();
}

export {eventListeners};
