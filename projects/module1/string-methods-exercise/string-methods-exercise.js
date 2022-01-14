// 1. capilizeAndLowercase("HelLo") // => "HELLOhello"
var word = "HelLo"
console.log(upperHello)
var lowerHello = upperHello.toLowerCase()
console.log(upperHello + lowerHello)

//OR
var word = "HelLo"
var upperHello = word.toUpperCase();
var lowerHello = upperHello.toLowerCase();

function myFunction(upperHello, lowerHello){
  
    return upperHello + lowerHello
}
console.log(upperHello + lowerHello)


// 2. findMiddleIndex("Hello") // => 2
//    findMiddleIndex("Hello World") // => 5

var hello = "Hello"
var helloWorld = "Hello World"

var newHello = hello.indexOf("l")
console.log(newHello)

var newHelloWorld = helloWorld.indexOf(" ")
console.log(newHelloWorld)

//Or 

var hello = "Hello"
var helloWorld = "Hello World"
var newHello = hello.indexOf("l")
var newHelloWorld = helloWorld.indexOf(" ")
function myFunction(newHello, newHelloWorld){
    return newHello, newHelloWorld
}
console.log(newHello)
console.log(newHelloWorld)

// 3. returnFirstHalf("Hello") // => "He"
//    returnFirstHalf("Hello World") // => "Hello"

function myFunction(){

    var hello = "Hello"
    let firstHalf = hello.slice(0,2);
    var helloWorld = "Hello World"
    let half = helloWorld.slice(0,5)
    
    document.write(firstHalf);
    document.write("<br>")
    document.write(half)
    
    }
     myFunction();

// 4. capilizeAndLowercase("Hello") // => "HEllo"
//    capilizeAndLowercase("Hello World") // => "HELLO world"
function myFunc(){
    var hello = "Hello"
    let upperHello = hello.toUpperCase();
    var helloWorld = "Hello World"
    let newHello = helloWorld.slice(0,5).toUpperCase();
    let newWorld = helloWorld.slice(5).toLowerCase();
    
    document.write(upperHello)
    document.write("<br>")
    document.write(newHello)
    document.write(newWorld)
    
    
}
myFunc();