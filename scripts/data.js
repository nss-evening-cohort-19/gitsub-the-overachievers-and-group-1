
const users = [
  {
    id: 0,
    name: 'Chris P. Bacon',
    userName: 'chrissyPBacc89',
    userPhoto: "./images/chrispbacon.png",
    userBio: "Likes to party",
    userLocation: 'Paris, France',
    userEmail: 'chrispbacon@yahoo.com',
  },
  {
    id: 1,
    name: 'Lawrence B. Gillybee',
    userName: 'biglawtheman5',
    userPhoto: "./images/lawrencebgillybee.jpeg",
    userBio: "Likes to party. And code. And code and party. All day. All night.",
    userLocation: 'Paris, Texas',
    userEmail: 'lawrencebgillybee@yahoo.com',
    userWebsite: 'www.lawrryb.com',
    userTwitter: '@lawbtheman'
  },
  {
    id: 2,
    name: 'Madeline Smith',
    userName: 'maddysmith55',
    userPhoto: "./images/madelinesmith.png",
    userBio: "Likes to party as well",
    userLocation: 'Paris, Chicago',
    userEmail: 'madelinesmith@yahoo.com',
    userWebsite: 'www.lawrryb.com',
    userTwitter: '@lawbtheman'
  },
]

const favRepos = [
  {
    id: 0,
    name:'sorting-hats',
    about:'a repo designed to help people who are obsessed with Harry Potter find the lord',
    language:'Javascript',
    favorites: 39,
    shares: 2
  },
  {
    id: 1,
    name:'pet-adoption',
    about:'a tool designed to get rid of your pet at no cost!',
    language:'Javascript',
    favorites: 39,
    shares: 32
  },
  {
    id: 2,
    name:'gregorian-chants',
    about:'a tool designed to lull you into a deep trance with 100% vegan Gregorian Chants!',
    language:'Python',
    favorites: 389,
    shares: 232
  },
  {
    id: 3,
    name:'help-me-please!',
    about:'a tool designed to help me please!!',
    language:'Javascript',
    favorites: 19,
    shares: 3
  }
]

export {users,favRepos};

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

export {projectObjects}

const reposData = [
  {
    id: 1,
    repoName: "Tic Tac Toe Game",
    repoDesc: "Easy tic tac toe game",
    repoLang: "JavaScript"
  },
  {
    id: 2,
    repoName: "Tamagotchi",
    repoDesc: "A virtual pet",
    repoLang: "JavaScript"
  },
  {
    id: 3,
    repoName: "Bio Site",
    repoDesc: "My homepage",
    repoLang: "HTML"
  },
  {
    id: 4,
    repoName: "Snake Game",
    repoDesc: "A game",
    repoLang: "Python"
  },
  {
    id: 5,
    repoName: "Go practice",
    repoDesc: "Practice for learning Go",
    repoLang: "Go"
  }
];

export {reposData}
