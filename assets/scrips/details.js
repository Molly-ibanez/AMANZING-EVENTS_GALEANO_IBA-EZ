
let tarjetas;


const containerCards = document.getElementById("containerCards")

const querySearch = document.location.search

const id = new URLSearchParams(querySearch).get("id")


console.log(id);


const urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';


const obtenerTarjetas = async () => {
  try {
    const respuesta = await fetch(urlApi);

    if(respuesta.status == 200){
      tarjetas = await respuesta.json();
    } else {
      const respuestaJson = await fetch("./assets/data/amazing.json");
      tarjetas = await respuestaJson.json();
    }

    const selectionEvent = tarjetas.events.find(events => events._id == id)
//console.log(selectionEvent)

  
    containerCards.innerHTML = ` 

    <div class="card mb-3 bordered shadow">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${selectionEvent.image}" class="img-fluid rounded-start d-block h-100 ratio" style="--bs-aspect-ratio: 50%;   alt="...">
    </div>   
     <div class="col-md-8">
       <div class="card-body">
           <p class="card-text">Name: ${selectionEvent.name}</p>
           <p class="card-text">Description: ${selectionEvent.description}</p>
           <p class="card-text">Place: ${selectionEvent.place}</p>
           <p class="card-text">Date: ${selectionEvent.date}</p>
           <p class="card-text">Price: $${selectionEvent.price}</p>
       </div>
       </div>
       </div>
       </div>
       
            `

  }
  catch (error) {

    console.log(("Hubo un error"));
  }
}

obtenerTarjetas()








