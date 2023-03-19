
let tarjetas;
const obtenerTarjetas = async () =>{
    try{
        const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        
        tarjetas = await respuesta.json()
        //console.log(tarjetas.events);
        showCards(tarjetas.events,containerCards)
        crearCheckboxes(tarjetas.events)

    }
    catch(error){
        console.log(error);
        alert('Error')
    }
}
obtenerTarjetas()



//Constantes capturadas en variables
const contenedorChecks = document.getElementById('checkContainer')
const containerCards = document.getElementById('elements')
const input = document.querySelector('input')



input.addEventListener('input',superFiltro
/*()=>{
  let arrayFiltrado = filtrarPorTexto(data.events, input.value)
  showCards(arrayFiltrado)
}*/)

contenedorChecks.addEventListener('change',superFiltro
/*()=>{
  let arrayFiltrado2 = filtrarPorCategoria(data.events)
  showCards(arrayFiltrado2)
}*/)


//LLAMADA FUNCIONES
//crearCheckboxes(data.events)
//showCards(data.events,containerCards)


//FUNCIONES

function superFiltro(){
  let arrayFiltrado1 = filtrarPorTexto(tarjetas.events, input.value)
  let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1)
  showCards(arrayFiltrado2)
}


function filtrarPorTexto(arrayDatos, texto){
  let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
return arrayFiltrado
}

function filtrarPorCategoria(arrayInfo){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  //console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  //console.log(arrayChecks);
  let checksChecked = arrayChecks.filter(check => check.checked)
  //console.log(checksChecked);
  if(checksChecked.length == 0){
    return arrayInfo
}


  let checkValues = checksChecked.map(check => check.value)
    //console.log(checkValues);
    let arrayFiltrado2 = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
    //console.log(arrayFiltrado2);
    return arrayFiltrado2
}

function crearCheckboxes(arrayInfo){
  let checks = ''
  let checkboxCategory = tarjetas.events.map (events => events.category)
  //console.log (checkboxCategory)

  let checkboxCategorySinRepetir = new Set(checkboxCategory.sort((a,b)=>{
  if(a>b){
      return 1
  }
  if(a<b){
      return -1
  }
  return 0
}))

//console.log(checkboxCategorySinRepetir)

checkboxCategorySinRepetir.forEach(elemento =>{
  checks += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox"  id="${elemento}" value="${elemento}">
  <label class="form-check-label" for="${elemento}">${elemento}</label>
</div>`
})
contenedorChecks.innerHTML = checks
}

function showCards(arrayDatos){
  let cards = ""
  let upcomingFilter = arrayDatos.filter (events => tarjetas.currentDate < events.date)
  //console.log(pastFilter)

  
  if(arrayDatos.length == 0){
    containerCards.innerHTML = "<h5 class='display-1 fw-bolder'>No hay coincidencias en su busqueda</h5>"
    return
}


upcomingFilter.forEach(elemento=> {

    cards +=  `<div class="bg-danger row row-cols-1 row-cols-md-3 g-3 p-4 justify-content-around">
    <div class="card h-100" style="width: 20rem;">
    <img src="${elemento.image}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${elemento.name}</h5>
      <p class="card-text">${elemento.description}</p>
      <div class="card-footer d-flex justify-content-around">
      <p class="card-text d-flex">$${elemento.price}</p>
      <a href="./details.html?id=${elemento._id}">Details</a>
      </div>
    </div>
    </div>
  </div>`
})
  
  containerCards.innerHTML = cards
  
}







//CODIGO VIEJO
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

