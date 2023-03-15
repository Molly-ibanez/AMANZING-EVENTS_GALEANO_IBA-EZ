console.log("Current Date: ",data.currentDate)

console.log([document])



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