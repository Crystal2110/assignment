var readlineSync = require("readline-sync");

console.log("Welcome to the year of 1985, ")

var userName = readlineSync.question("Please enter your name: ");

const awards = ["Sword", "Shield","Coins"];
const enemies = ["Wolf", "Monster", "Dragon"];
//const playerActions = ["Walk", "Print", "Exit"];
let playerHealth = 50;
let isAlive = true;
let killNum = 0;
let inventory = [];

let pickUp = awards[Math.floor(Math.random() * awards.length)];

function game(){
    
    const attackPower = Math.floor(Math.random() * (10-1) + 1 );
    const enemy = enemies[Math.floor(Math.random() * enemies.length)]; 
    const enemysPower = Math.floor(Math.random() * (10-2) + 1);
    let enemyHealth = 25;

    
    const options = readlineSync.keyIn(  "Please choose your next move. You can \nPress 'W' to Walk.  \nPress 'P' to Print. \nPress 'E' to Exit the game.", {limit: '$<w, p, e>'}); 
    if(options == "e"){
        console.log("Exit the game.");
        isAlive = false
    }else if (options == "p"){
        
        if(pickUp.length == 0){
        console.log(userName + " has nothing in inventory.");  
        }else{
        console.log("\nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
        return playerHealth = 0;
        }
    }else if(options == "w"){

        let index = Math.random();

        if (index >= 0.3) {
        console.log(enemy + " has arrived.");

          while(playerHealth > 0 && enemyHealth > 0){

            const actions = readlineSync.keyIn("Press 'F' to flight. \nPress'R' to run.");
           
            if(actions == "r"){
               
                const run = Math.random();
                if (run <= 0.45){
                console.log("\nYou couldn't get away! The " + enemy + " attacks you for " + enemysPower + " damage!");
               
                playerHealth = playerHealth - enemysPower;
                    
                    if (playerHealth <= 0){
                        console.log("The " + enemy + " has slain you! " + userName + " is dead!");
                        console.log("\n" + userName + " :  \nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
                    }
                }else if (run >=0.55){
                    console.log(" You ran away successfully!");
                    
                    game();
                }
            }else if(actions == "f"){
               
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
                            game(); 
                    }else if (playerHealth <= 0) {
                        console.log(enemy + " has defeated you. You are dead.")
                        console.log( "\nName: " + userName + " \nHealth: " + playerHealth + "\nKills " + killNum +  "\nItem: " + inventory);
                    }                                                                  
            }
        }
        }
    }
   
}
game()