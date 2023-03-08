console.log("Current Date: ",data.currentDate)

const containerCards = document.getElementById('elements')

let upcomingData = []


for(let i=0; i< data.events.length; i++){
  
    if (data.currentDate > data.events[i].date){
      upcomingData.push(data.events[i])
    }
    containerCards.innerHTML = upcomingData
}

console.log("Upcoming Data: ",upcomingData)








/*

mostrarPropiedad(data.events,"date")



function mostrarPropiedad(array,propiedad) {
  
  for (let i = 0; i < array.length; i++) {
      console.log(data.events[i].date);
  }
}
*/