var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alphabet = alphabet.split("");

//var people1 = people.join(' :')
var result = []

 function forception(people, alphabet) {
    
     for (let i =0; i < people.length; i++) {
         
          people[i] = people[i] + ":"
         result.push(people[i])
         
        
     for (let j =0;j < alphabet.length;j++) {
         result.push(alphabet[j].toUpperCase() );
        
     }
 }
 return result
 }
 console.log(forception(people,alphabet))

// i, l = Math.min(alphabet.length, people.length);
// function forception(alphabet, people){new
    
//     //var alphabet = alphabet.split("");
//     for( i = 0; i < l; i++){
//        result.push(alphabet[i], people[i]);
//     }
//     result.push(...alphabet.slice(l), ...people.slice(l));
//     console.log(result);


// }

//* result: ["Jon", "a", "Jacob", "b", "Jingle", "c", "Heimer", "d", "Schmidt", "e", undefined, "f", undefined, "g", undefined, "h", undefined, "i", undefined, "j", undefined, "k", undefined, "l", undefined, "m", undefined, "n", undefined, "o"]
//* let run = 0, first = 0, second = 0;
// const newArr = [];
// while(run < people.length + alphabet.length) {
//     if(first > second){
//         newArr[run] = alphabet[second];
//         second++;
//     }else{
//         newArr[run] = people[first];
//         first++; 
//     }
//     run++;
// };
// console.log(newArr);