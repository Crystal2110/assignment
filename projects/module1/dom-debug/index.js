// let colors = ["red", "blue", "green"]

// document.getElementById("add").addEventListener("click", function(e){
//     const subItem = createSubItem(e)
//     document.getElementById("list").appendChild(subItem)
// })

// function createDropDown(){
//     const dropDown = document.createElement("select")
//     for (let i = 0; i < colors; i++){
//         const option = document.getElementBy("option") 
//         option.innerHTML = colors[i]
//         option.value = colors[i]
//         dropDown.append(option)
//     }
//     dropDown.addEventListener("onChange", function(e){
    
//         e.target.parent.backgroundColor = e.target.colors
//     })
//     return dropDown
// }

// function createDropDown(){
//     let dropDown = document.createElement("select")
//     for (let i = 0; i < colors.length; i++){
//         var option = document.createElement("option"); 
//         option.innerHTML = colors[i];
//         option.value = colors[i];
//         dropDown.append(option);
//     }

//dropDown.addEventListener("change", function(e){
 //   var name = e.target;
 //   if (name === "green") {
 //   e.target.style.backgroundColor = "green"
//    }else if (name === "red") {
//    e.target.style.backgroundColor = "red"
 //   }else if (name == "blue"){
 //   e.target.style.backgroundColor = "blue"
 //   }
 //  })
 //  return dropDown
//}

//dropDown.addEventListener("change", function(){
    
//    document.getElementById("list").style.backgroundColor = "green"
//})
//return dropDown
//}


//dropDown.addEventListener("change", function(e){
 //   var e = document.getElementById("list")
 //   if ( === "green") {
 //   e.target.style.backgroundColor = "green"
 //   }else if (name === "red") {
 //   e.target.style.backgroundColor = "red"
  //  }else if (name == "blue"){
 //   e.target.style.backgroundColor = "blue"
//    }
 //  })
//   return dropDown
//}



// function createSubItem(){
//     const subItem = document.createElement("div")
//     var subItemValue = document.getElementById("input").value
//     subItem.textContent = subItemValue
//     const dropDown = createDropDown()
//     subItem.appendChild(dropDown)
//     subItem.setAttribute("colors", "subItem")
//     return subItem
// }


const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("click", function(e){
    
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}