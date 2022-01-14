//* largest([3, 5, 2, 8, 1]) // => 8
var array =[3, 5, 2, 8, 1]
var largest = 0

for ( i = 0; i<= array.length; i++){
    if(array[i] > largest){
        var largest = array[i];
    }
}
console.log(largest);

//* lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

letterWithStrings = (["#3", "$$$", "C%4!", "Hey!"], "!")

function remove(letterWithStrings, string){
    return letterWithStrings.slice(0,string).concat(letterWithStrings.slice(2,4));
    
}
console.log(remove(["#3", "$$$", "C%4!", "Hey!"],"!"));

//* Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false


function isDivision (num1, num2){
  var num1
  var num2
  if (num1 % num2 ===0)
  return true;
  else
  return false;
}
console.log(isDivision(4,2))

// function  isDivisible(i){
// for ( let i = 0; i<=100; i++){
//     if(i % 2 === 0 ){
//         document.write("true");
//     }else if(i % 3 === 0){
//         document.write("true");
//     }else{
//         document.write("false")
//     }
//     }
// }
// console.log(isDivisible(6,3))
// function isDivisible(num1,num2){
    
//  var division =[];
 
//  for (var i = 0; i<=100; i++){
//      for(var j = i+1; j< num1.length; j++){
         
//          if(num1[i] % num2[j] === 0){
//              document.write = "true";
//          }else{
//              document.write = "false";
//          }
//      }
//  }return division;
// }
// isDivisible(4,2);


// function isDivisible(num1,num2 ){
//   if (num1 / num2 === 0){ 
//     return true;
//   }else { 
//     return false;
//   }
// };
// console.log(isDivisible(4,2))

// var isDivisible = function (x,y) {
//     if (x % y === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   };
// console.log(isDivisible(4%2))

// function isDivisible(x,y) {
//   if (x / y === 0) {
//     return true;
//   }else{ 
//     return false;
//   }
// };
// console.log(4/2)


// function intDiv(a,b)
// {
// var result = a/b;
// if(result ===0)
// return ture;
// else
// return (false);
// }
// console.log(4/2)

// function isDivisible(x,y){

// if(x % y === 0) {
//     return true;

//     else
//     return false;
//     }
// };

// console.log(isDivisible())

// var x = 4;
// var y = 2;

// function divison(x,y){
//     if(x % y === 0) {
//     greeting = "true";
//     }else{
//     greeting = "false";
//     }
// }




