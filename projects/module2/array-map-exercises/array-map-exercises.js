// 1) Make an array of numbers that are doubles of the first array

const arr = [2,5,100]

const doubleNumbers = arr.map(function(arr){
    return arr*2
})

  console.log(doubleNumbers); // [4, 10, 200]
  

// 2) Take an array of numbers and make them strings

const arr = [2, 5, 100]

// var stringItUp = arr.map (String);
  
//   console.log(stringItUp); 

const arr = [2, 5, 100]


var stringItUp = arr.map (function (arr){
    
    return arr.toString();
});
  
  console.log(stringItUp); 

// 3) Capitalize each of an array of names


// function capitalizeNames(arr){
//   // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var capitalizaNames = arr.map(function(arr){
    return arr.substr(0,1).toUpperCase() + arr.substr(1).toLowerCase();
})

console.log(capitalizaNames);

// 4) Make an array of strings of the names

const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// getName = (arr) => arr.name;
// arrnames = [];

// for (let i=0; i < arr.length; i++) {
//     const name = getName(arr[i]);

//     arrnames.push(name);
// }
// console.log(arrnames)
var namesOnly = arr.map(function(arr){
    return arr.name
    
    })

console.log(namesOnly)
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//   5) Make an array of strings of the names saying whether or not they can go to The Matrix

const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const makeStrings = arr.filter(function(arr){
    if(arr.age >=18){
        console.log(arr.name + "can go to The Matrix")
    } else if(arr.age <=18) {
        console.log(arr.name + "is under age!!")
    }
})

// 6) Make an array of the names in h1s, and the ages in h2s

const readyToPutInTheDom = arr.map(function(arr){
    return "<h1>" + arr.name +"</h1>" + "<h2>" + arr.age +"</h2>"
})

console.log(readyToPutInTheDom)

// Or
const readyToPutInTheDom = arr.map(function(arr){
    return "<h1>" + arr.name + "</h1>"

});

console.log(readyToPutInTheDom)
