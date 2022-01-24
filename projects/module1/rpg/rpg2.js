var readlineSync = require("readline-sync");

console.log("Welcome to the year of 1985, ")

var userName = readlineSync.question("Please enter your name: ");

const awards = ["Sword", "Shield","Coins"];
const enemies = ["Wolf", "Monster", "Dragon"];
let playerHealth = 50;
let enemyHealth = 25;
let isAlive = true;
let killNum = 0;
let inventory = [];

while(isAlive == true) {
    const playerActions = ["Walk", "Print", "Exit"];
    const options = readlineSync.keyIn(playerActions, "Please choose your next move. You can \nPress 'W' to Walk.  \nPress 'P' to Print. \nPress 'E' to Exit the game.", {limit: '$<w, p, e>'}); 
    let pickUp = awards[Math.floor(Math.random() * awards.length)];

    walk(options)

    if (options == "p"){
     isAlive = true
     if(pickUp.length == 0){
        console.log(userName + " has nothing in inventory.");  
     }else{
        console.log(userName + ": \n" + playerHealth + "\nAwards: " + inventory);
        
     }
    }
    else if (options == "e"){
     console.log("Exit the game.")
     isAlive = false
    }

}


function walk(options){
    if(options == "w"){
        const enemy = enemies[Math.floor(Math.random() * enemies.length)]; 
        let index = Math.random();

        if (index >= 0.3) {
         console.log(enemy + " has arrived.");
         fight()
        }
    }
    
}

function fight(){
    let isFight = true;
    while(isFight){
    const fightOrRun = readlineSync.keyIn("Press 'F' to flight. \nPress'R' to run.");
    if(fightOrRun ==="f"){
        battle(isFight)
    }else if (fightOrRun ==="r"){
        return run()
    }
    }
}

function battle(isFight){
   // isFighting = true;
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const attackPower = Math.floor(Math.random() * (10-1) +1 );
    const enemysPower = Math.floor(Math.random() * (10-1) + 1);
    let pickUp = awards[Math.floor(Math.random() * awards.length)];
    
    
    
    
    while(playerHealth > 0 && enemyHealth > 0){
        enemyHealth = enemyHealth - attackPower;
            console.log("You attacked " + enemy + " with " + attackPower + " attack power.");
                
        playerHealth = playerHealth - enemysPower;
            console.log(enemy + " just attacked you with " + enemysPower + " attack power.");
                
        if(enemyHealth <= 0) {
            console.log(" You successfully killed the " + enemy + "!");
            killNum = killNum + 1;
            playerHealth += 5;
            let dropLoot = Math.random();

            if(dropLoot <= 0.25) {
            console.log("You found a " + pickUp + " on the " + enemy);
            inventory.push(" " + pickUp);               
            }
            isFight= false
        }if (playerHealth <= 0) {
            console.log(enemy + " has defeated you. You are dead.")
            console.log("\n" + userName + " :  \nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
        }
        } 
    
    }


// function fight(){
//     const attackPower = Math.floor(Math.random() * (10-1) +1 );
//     const enemy = enemies[Math.floor(Math.random() * enemies.length)];
//     const enemysPower = Math.floor(Math.random() * (10-1) + 1);
//     const isFight = readlineSync.keyIn("Press 'F' to flight. \nPress'R' to run.") 
//     let pickUp = awards[Math.floor(Math.random() * awards.length)];
        
    
//     if(isFight === "f"){
//         enemyHealth = enemyHealth - attackPower;
//         console.log("You attacked " + enemy + " with " + attackPower + " attack power.");
        
//         playerHealth = playerHealth - enemysPower;
//         console.log(enemy + " just attacked you with " + enemysPower + " attack power.");
        
//             if(enemyHealth <= 0) {
//                 console.log(" You successfully killed the " + enemy + "!");
//                 killNum = killNum + 1;
//                 playerHealth += 5;
//                 let dropLoot = Math.random();
//                 if(dropLoot <= 0.25) {
//                     console.log("You found a " + pickUp + " on the " + enemy);
//                     inventory.push(" " + pickUp);               
//                 }
//             }if (playerHealth <= 0) {
//                 console.log(enemy + " has defeated you. You are dead.")
//                 console.log("\n" + userName + " :  \nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
//             }
    // }else if (isFight ==="r") {
    //     const run = Math.random();
    //         if (run <= 0.45){
    //             console.log("\nYou couldn't get away! The " + enemy + " attacks you for " + enemysPower + " damage!");
    //             playerHealth = playerHealth - enemysPower;
    //             if (playerHealth <= 0){
    //                 console.log("The " + enemy + " has slain you! " + userName + " is dead!");
    //                 console.log("\n" + userName + " :  \nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
                    
    //             }
    //         }else if (run >= 0.55){
    //             console.log(" You ran away successfully!");
    //             playerHealth = 0;
                
    //         }

    //     }
    // }    

    



    
    









    // if(playerActions[options] =="w"){


        
//         let index = Math.random();
//         if (index >= 0.3) {
//         console.log(enemy + " has arrived.");

//             while(enemyHealth > 0 && playerHealth > 0){
//                 const willWalk = readlineSync.keyIn("Press 'F' to flight. \nPress'R' to run. \nPress 'i' to check inventory.")   
//                 function walk(){
//                 if(willWalk === "f"){
//                     Fight()
//                 }else if (willWalk === "r"){
//                    console.log("You ran away successfully!");
//                    break;
//                 }else if (willWalk === " i"){
//                    checkInventory()
//                 }
//                 }
//             }   
        
//         }else{
//         console.log("Keep walking...it's safe!");
            
//         }
//     }else if (playerActions[options] == "p"){
//         if(itemsDropped.length == 0){
//             console.log(userName + " has nothing in inventory.");
//         }else{
//         console.log(userName + ": \n" + playerHealth + "\nAwards: " + awards);
//         return playerHealth = 0;
//         }    
//     }
// }
    

