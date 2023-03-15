console.log("Current Date: ",data.currentDate)




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
        <a href="./details.html" class="btn btn-primary">Details</a>
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

