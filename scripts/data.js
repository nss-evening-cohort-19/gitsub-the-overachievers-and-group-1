
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
    userTwitter: '@lawbtheman',
    highlights: ['Toybox', 'Operation Santa'],
    organizations: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg","https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"],
    sponsors: ["https://deadline.com/wp-content/uploads/2022/04/Nightmare-On-Elm-Street.jpg?w=640&h=321&crop=1","https://assets.newatlas.com/dims4/default/be6af5d/2147483647/strip/true/crop/3504x2336+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F78%2F57%2Fd4275eaf4b1ea04ddf88d6855857%2Fdepositphotos-259230322-xl.jpg","https://cdn.mos.cms.futurecdn.net/Ev3irSe2WxYCdyGSx6rDES-970-80.jpg.webp","https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg","https://www.dullmensclub.com/new/wp-content/uploads/2013/07/hotdog-plain.jpg"]
  },
  {
    id: 2,
    name: 'Madeline Smith',
    userName: 'maddysmith55',
    userPhoto: "./images/madelinesmith.png",
    userBio: "Likes to party as well",
    userLocation: 'Paris, Chicago',
    userEmail: 'madelinesmith@yahoo.com',
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
