console.log("Current Date: ",data.currentDate)

console.log([document])

const contenedorChecks = document.getElementById('checkContainer')


crearCheckboxes(data.events)

function crearCheckboxes(arrayInfo){
  let checks = ''
  let checkboxCategory = data.events.map (events => events.category)
//console.log (checkboxCategory)

  let checkboxCategorySinRepetir = new Set(checkboxCategory.sort((a,b)=>{
  if(a>b){
      return 1
  }
  if(a<b){
      return -1
  }
  return 0
}))

//console.log(checkboxCategorySinRepetir)

checkboxCategorySinRepetir.forEach(elemento =>{
  checks += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox"  id="${elemento}" value="${elemento}">
  <label class="form-check-label" for="${elemento}">${elemento}</label>
</div>`
})
contenedorChecks.innerHTML = checks
}



const containerCards = document.getElementById('elements')



showCards(data.events,containerCards)

function showCards(arrayDatos,container){
  let cards = []

  for(fact of arrayDatos){

    cards +=  `<div class="card" style="width: 20rem;">
    <img src="${fact.image}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${fact.name}</h5>
      <p class="card-text">${fact.description}</p>
      <p class="card-text">$${fact.price}</p>
      <a href="./details.html?id=${fact._id}">Details</a>
    </div>
  </div>`
  }
  
  container.innerHTML = cards
  
}



/*
let allData = []


for(let i=0; i< data.events.length; i++){
     data.currentDate > data.events[i].date
        allData.push(data.events[i])
    
}

console.log("All Data: ",allData)

*/