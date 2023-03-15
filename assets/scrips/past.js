console.log("Current Date: ",data.currentDate)





let pastFilter = data.events.filter (events => data.currentDate > events.date)
console.log(pastFilter)



const containerCards = document.getElementById('elements')
containerCards.innerHTML = pastFilter


.map (data =>   `<div class="card mb-3" style="width: 20rem;">
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
for(let i=0; i< data.events.length; i++){
    if (data.currentDate < data.events[i].date){
        pastData.push(data.events[i])
    }
}
console.log("Past Data: ",pastData)
*/


/*
let pastData = []

const containerCards = document.getElementById('elements')

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

*/



