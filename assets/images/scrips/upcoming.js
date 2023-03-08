console.log("Current Date: ",data.currentDate)

/*let upcomingData = []


for(let i=0; i< data.events.length; i++){
    if (data.currentDate > data.events[i].date){
        upcomingData.push(data.events[i])
    }
}

console.log("Upcoming Data: ",upcomingData)

*/



const containerCards = document.getElementById('elements')

showCards(data.events,containerCards)


function showCards(arrayDatos,container){
    let cards = ''
  
    for(let i = 0;i<arrayDatos.length;i++){
        if (data.currentDate > data.events[i].date){
            upcomingData.push(data.events[i])
        }
    
        cards += `<div class="card" style="width: 20rem;">
      <img src="${i.image}" class="card-img-top"  alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">${i.description}</p>
        <p class="card-text">$${i.price}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
      </div>
    </div>`
    }
  
    container.innerHTML = cards
}


/*
showCards(data.events,containerCards)

function showCards(arrayDatos,container){
  let cards = ""
  for(fact of arrayDatos){
    cards +=  `<div class="card" style="width: 20rem;">
    <img src="${fact.image}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${fact.name}</h5>
      <p class="card-text">${fact.description}</p>
      <p class="card-text">$${fact.price}</p>
      <a href="./details.html" class="btn btn-primary">Details</a>
    </div>
  </div>`
  }
  container.innerHTML = cards
  
}
*/

/*
function showCards(data,container){
    let upcomingData = ""

  for(let i = 0 ;i<data.events.length; i++){
    if (data.currentDate > data.events[i].date){
        upcomingData.push(data.events[i])
    upcomingData += `<div class="card" style="width: 20rem;">
    <img src="${i.image}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${i.name}</h5>
      <p class="card-text">${i.description}</p>
      <p class="card-text">$${i.price}</p>
      <a href="./details.html" class="btn btn-primary">Details</a>
    </div>
  </div>`
  }

}
container.innerHTML = upcomingData

}
*/