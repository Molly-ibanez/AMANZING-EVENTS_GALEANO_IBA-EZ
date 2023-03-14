console.log("Current Date: ",data.currentDate)

const containerCards = document.getElementById('elements')


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
    
    container.innerHTML = upcomingData

  }
}



