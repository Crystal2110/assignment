const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log("Hi " + name + "!");



readline.keyInYN("Would you like to play Escape Room?") 
    // "Y" key was pressed
console.log("Hi " + name + " Let's go! Find the key! There's also a hole in the wall in the room.");
    
    // "N" key was pressed
    console.log("Exit");
    
let isAlive = true
let hasKey = false


while (isAlive == true) {
    options = ["Put hand in hole", "Find the key", "Open the door"],
    index = readline.keyInSelect(options, "Choose your next option: ");

    
    if (index == "0") {
        handInhole()
        isAlive = false
        
    }
    
    
    else if (index == "1"){
        findThekey()
        hasKey = true
    }
    
    else if (index == "2"){
        openThedoor()
        
    }
    
}
function handInhole() {
    console.log("you died")
    isAlive = false
}

function findThekey(){
    if (hasKey == false){
    console.log("You find the key! Now you can open the door. ")
    }else if (hasKey == true){
    console.log("You already found the key!")
    }
}

function openThedoor() {
    if( hasKey == false) {
        console.log("You need find the key first.")
    }else if (hasKey == true){
        console.log("Congratulations! You have successful escape the room!");
        isAlive = false
    }
   
}
