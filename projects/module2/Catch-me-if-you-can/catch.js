// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){
//     // x = parseFloat(x);
//     // y = parseFloat(y)
    
//   try {
//     if(x === "") throw "x is empty";
//     if(y === "") throw "y is empty";
//     if(isNaN(x) === true) throw  "x is not a number!"
//     if(isNaN(y) === true) throw  "y is not a number!"
// }
// catch(err){
//     console.log("Input " + err)
// }

// finally{
//     console.log("I am running no matter what!")
// }
// return x + y;

// }
// console.log(sum("5",""))

//Or 
// function sum(x, y){
// if(x === ""|| y === "") throw "one of the arguments is empty";
    
// if(isNaN(x)||isNaN(y) === true) throw  "one of the arguments is not a number!"
    
// return x + y
// }

// try{
//     console.log(sum("p",3))
// }
// catch(err){
//     console.log("Input: " + err)
// }

// finally{
//     console.log("I am running no matter what!")
// }
//Or
function sum(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw "is not a number";
    }
    if(typeof x === "number" || typeof y === "number"){
        return x + y;
    }
}
try{
    console.log(sum("",3))
}
catch(err){
    console.log("Input: " + err)
}
finally{
    console.log("I am running no matter what!")
}


// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.


    // x = parseFloat(x);
    // y = parseFloat(y)
    
function sum(x,y){
    if(typeof x !== "number"){
        throw new Error("this is not a Number")
    }
    else if(typeof y !== "number"){
        throw new Error("this is not a NUmber")
    }
    else{
        return x + y;
    }
        
}
try{
    console.log(sum(1,2))
}
        
catch(err){
    console.log("Input " + err)
}
    
finally{
    console.log("I am running no matter what!")
}

    // Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
    var user = {username: "sam", password: "123abc"}
    function login(username,password){
        if(username !== "sam"){
            throw new Error("username is incorrect")
        }
        else if(password !== "123abc"){
            throw new Error("passowrd is oncorrect")
        }
        else {
            return "login successful!"
        }
    
    }
    
    try{
        console.log(user)
    }
    
    catch(err){
        console.log(err)
    }
    
    finally{
        console.log("I am running no matter what!")
    }
    // 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

    function login(username,password){
        if(username !== "sam"){
            throw new Error("username is incorrect")
        }
        else if(password !== "123abc"){
            throw new Error("passowrd is oncorrect")
        }
        else {
            return "login successful!"
        }
    
    }
    
    try{
        console.log(login("sam","123ABC"))
    }
    
    catch(err){
        console.log(err)
    }
    
    finally{
        console.log("I am running no matter what!")
    }