var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


//1. Returns a list of everyone older than 18

// const over18 = peopleArray.filter(function(arr){
//      if(arr.age >= 18 )
//      return arr
// })

// console.log(over18)

//2. sorted alphabetically by last name
const alphabetivally = peopleArray.sort(function(a,b){
    return a.lastName.localeCompare(b.lastName)
});

    console.log(peopleArray)

//3. each name and age is embedded in a string that looks like an HTML `<li>` element.

