//* **Bronze Medal**

//* 1. Write a for loop that prints to the console the numbers 0 through 9.

var Numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    for (var i = 0; i < Numbers.length; i++) {
    console.log( Numbers[i])
}

//* 2. Write a for loop that prints to the console 9 through 0.

var Numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    for(var i = Numbers.length - 1; i >= 0; i--){
        console.log(Numbers[i])
    }

//* Write a for loop that will push every other fruit to an array.

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    for(var i = 0; i < fruit.length; i += 2){
        console.log(fruit[i])
    }


//*  **Silver Medal**




const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

//*1. Write a loop that will print out all the names of the people of the people array
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

//* 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
for(var i = 0; i < peopleArray.length; i++){
    console.log("Name: " + peopleArray[i].name);
    console.log("Occupation: " + peopleArray[i].occupation)
}


//* 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

