let tarjetas;
const obtenerTarjetas = async () => {
  try {
    const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    if (respuesta.status === 200) {
    tarjetas = await respuesta.json()

    const selectionEvent = tarjetas.events.find(events => events._id == id)
    //console.log(selectionEvent)

    const containerCards = document.getElementById("containerCards")

    containerCards.innerHTML = ` 

         <div class="card mb-3"  >
         <div class="row g-0">
         <div class="col-md-4">
         <img src="${selectionEvent.image}" class="img-fluid rounded-start d-block h-100"   alt="...">
         </div>   
          <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">Name: ${selectionEvent.name}</p>
                <p class="card-text">Description: ${selectionEvent.description}</p>
                <p class="card-text">Place: ${selectionEvent.place}</p>
                <p class="card-text">Date: ${selectionEvent.date}</p>
                <p class="card-text">Price: ${selectionEvent.price}</p>
            </div>
            </div>
            </div>
            </div>
            `
          } else if (respuesta.status === 404) {
            respuesta = await fetch('./assets/scrips/amazing.json')
            tarjetas = await respuesta.json()
  }
}
  catch (error) {
 
    console.log(error);
  }
}
obtenerTarjetas()


const querySearch = document.location.search

const id = new URLSearchParams(querySearch).get("id")
console.log(id);





