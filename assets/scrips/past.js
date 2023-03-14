console.log("Current Date: ",data.currentDate)

/*for(let i=0; i< data.events.length; i++){
    if (data.currentDate < data.events[i].date){
        pastData.push(data.events[i])
    }
}
*/




const containerCards = document.getElementById('elements')


let pastData=[]

showCards(data.events,containerCards)

function showCards(array,containerCards) {
  let pastData=[]
  for (let i=0; i< data.events.length; i++) {

    if (data.currentDate > data.events[i].date){
        pastData +=   `<div class="card" style="width: 20rem;">
      <img src="${data.events[i].image}" class="card-img-top"  alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.events[i].name}</h5>
        <p class="card-text">${data.events[i].description}</p>
        <p class="card-text">$${data.events[i].price}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
      </div>
    </div>`
    }
   containerCards.innerHTML = pastData

  }
}


console.log("Past Data: ",pastData)
