import { profile } from "./profile.js"
import { readMeToDom } from "./readMe.js"
import { favoriteRepos } from "./favoriteRepos.js"
import { favRepos } from "./data.js"
import { addFavoriteRepo } from "./addFavoriteRepo.js"
import { eventListeners } from "./overviewEventListeners.js"

//startup function
const startUp = () => {
  profile()
  readMeToDom()
  favoriteRepos(favRepos)
  addFavoriteRepo()
  eventListeners()
}

startUp()

// console.log(favRepos);
