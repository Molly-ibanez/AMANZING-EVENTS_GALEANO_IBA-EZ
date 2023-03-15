console.log("Current Date: ",data.currentDate)

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



let upcomingFilter = data.events.filter (events => data.currentDate < events.date)
console.log(upcomingFilter)



const containerCards = document.getElementById('elements')
containerCards.innerHTML = upcomingFilter


.map (data =>   `<div class="card" style="width: 20rem;">
      <img src="${data.image}" class="card-img-top"  alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.description}</p>
        <p class="card-text">$${data.price}</p>
        <a href="./details.html?id=${data._id}" class="btn btn-primary">Details</a>
      </div>
    </div>`
)
.join(" ")

/*
let upcomingData=[]



showCards(data.events,containerCards)

function showCards(array,container) {
  let upcomingData=[]
  for (let i=0; i< data.events.length; i++) {

    if (data.currentDate < data.events[i].date){
      upcomingData +=  `<div class="card" style="width: 20rem;">
      <img src="${data.events[i].image}" class="card-img-top"  alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.events[i].name}</h5>
        <p class="card-text">${data.events[i].description}</p>
        <p class="card-text">$${data.events[i].price}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
      </div>
    </div>`
    }
    

  }
}

*/

