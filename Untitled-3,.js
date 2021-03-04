
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // discovery years 1846 discovery years 1659 



  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is alejandro and you like purple
  getUserData({firstName: "Melissa"}) // your name is melissa and you like green
  getUserData({}) // your name is undefined and you like green

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

 console.log( raindrops);   //  "Raindrops on roses"
 console.log( whiskers); // "whiskers on kittens"
 console.log( aFewOfMyFavoriteThings); 
 // Bright copper kettles",
//  "warm woolen mittens",
//  "Brown paper packages tied up with strings"
// ]



let number = [10,20,30];
[numbers[1],numbers[2],numbers[2],numbers[1]]

console.log(numbers)


 raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


const raceResults = ([first, second, third, rest]) => (['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])