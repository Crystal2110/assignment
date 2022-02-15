const form = document.getElementById("travel-form");

function formAlert() {
    //document.body.style.backgroundColor="green"
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const location = document.getElementById("travel-location").value;
    var diet = [];

    for(let i = 0; i < form.food.length; i++){
        if(form.food[i].checked){
            diet.push(form.food[i].value)
        }
    }

    // if (document.getElementById("vegetarian").checked) {
    //     diet.push(document.getElementById("vegetarian").value);
    
    // }else if (document.getElementById("kosher").checked) {
    //     diet.push(document.getElementById("kosher").value);

    // }else if (document.getElementById("lactose-free").checked) {
    //     diet.push(document.getElementById("lactose-free").value);

    // }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " 
    + age + "\nGender: " + gender + "\nLocation: " + location 
    +  "\nDietary restrictions: " + diet
    );
    
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    formAlert()
})