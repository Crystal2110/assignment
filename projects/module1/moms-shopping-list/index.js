const form = document.addItem

form.addEventListener('submit', (event) => {
    event.preventDefault()

const title = form.title.value
     form.title.value = ""

const ul = document.getElementById('list');
     ul.classList.add('list')

const li = document.createElement('li');
     li.classList.add('addList')
     document.getElementById('list').prepend(li);
     
const addDiv = document.createElement('div')
     addDiv.textContent = title + " "
     addDiv.style.margin = "8px"
     addDiv.textAlign = "center"
     addDiv.classList.add('addItem')
     document.getElementsByTagName('li')[0].appendChild(addDiv)

const addButton = document.createElement('button')
     addButton.textContent = "edit"
     addButton.style.marginRight = "5px"
     addButton.classList.add('edit');
     document.getElementsByTagName('li')[0].appendChild(addButton)
 
const deleteButton = document.createElement('button')
     deleteButton.textContent = "X"
     deleteButton.classList.add('delete');
     document.getElementsByTagName('li')[0].appendChild(deleteButton) 

    //  const deleteButton = document.getElementsByClassName('delete');
 deleteButton.addEventListener('click', function remove (e){
     e.target = document.getElementsByTagName('li')
   
     li.remove(li)
          });


// addButton.addEventListener('click', (e)=>{
//     let e = document.getElementById('addDiv');
//     e.setAttribute('id','addDiv')

//      addDiv.textContent = title + " "
//     const addButton = document.getElementsbyClassName('save')
//      addButton.textContent = "save"
//      addButton.style.marginRight = "5px"
//      addButton.classList.add('edit');
//      document.getElementsByTagName('li')[0].appendChild(addButton)

});

   // });    

