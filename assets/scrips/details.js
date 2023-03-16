
const querySearch = document.location.search

const id = new URLSearchParams(querySearch).get("id")
console.log(id);

const selectionEvent = data.events.find(event => event._id == id)
console.log(selectionEvent)



const containerCards = document.getElementById("containerCards") 

containerCards.innerHTML = ` 

    <div class="card mb-3"  >
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${selectionEvent.image}" class="img-fluid rounded-start" alt="...">
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

