const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];
  
  for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
      if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE'S" : "SHE'S"
          
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + userGender + " good to see Mad Max Fury Road.")
      } else {
         let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
         
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+ userGender + " in.")
      }
  }