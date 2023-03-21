console.log([document])

let tarjetas;
const obtenerTarjetas = async () => {
  try {
    const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    tarjetas = await respuesta.json()

    //console.log(tarjetas.events);
    showCards(tarjetas.events, containerCards)
    crearCheckboxes(tarjetas.events)

  }
  catch (error) {
    if (error) {
      respuesta = await fetch('./assets/scrips/amazing.json')
      tarjetas = await respuesta.json()
    }
    console.log(error);
  }
}
obtenerTarjetas()



//Constantes capturadas en variables
const contenedorChecks = document.getElementById('checkContainer')
const containerCards = document.getElementById('contenedor')
const input = document.querySelector('input')



input.addEventListener('input', superFiltro
/*()=>{
  let arrayFiltrado = filtrarPorTexto(data.events, input.value)
  showCards(arrayFiltrado)
}*/)

contenedorChecks.addEventListener('change', superFiltro
/*()=>{
  let arrayFiltrado2 = filtrarPorCategoria(data.events)
  showCards(arrayFiltrado2)
}*/)


// Llamadas de funciones

//crearCheckboxes(data.events)
//showCards(data.events,containerCards)


// Funciones


function superFiltro() {
  let arrayFiltrado1 = filtrarPorTexto(tarjetas.events, input.value)
  let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1)
  showCards(arrayFiltrado2)
}



function filtrarPorTexto(arrayDatos, texto) {
  let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}



function filtrarPorCategoria(arrayInfo) {
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  //console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  //console.log(arrayChecks);
  let checksChecked = arrayChecks.filter(check => check.checked)
  //console.log(checksChecked);
  if (checksChecked.length == 0) {
    return arrayInfo
  }


  let checkValues = checksChecked.map(check => check.value)
  //console.log(checkValues);
  let arrayFiltrado2 = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
  //console.log(arrayFiltrado2);
  return arrayFiltrado2
}


function crearCheckboxes(arrayInfo) {
  let checks = ''
  let checkboxCategory = arrayInfo.map(elemento => elemento.category)
  //console.log (checkboxCategory)

  let checkboxCategorySinRepetir = new Set(checkboxCategory.sort((a, b) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  }))

  //console.log(checkboxCategorySinRepetir)

  checkboxCategorySinRepetir.forEach(elemento => {

    checks += ` 
   <div class="p-1 d-flex justify-content-between">
  <div class="form-check">
  <input class="form-check-input" type="checkbox"  id="${elemento}" value="${elemento}">
  <label class="form-check-label" for="${elemento}">${elemento}</label>
</div>

</div>`
  })
  contenedorChecks.innerHTML = checks
}




function showCards(arrayDatos) {
  if (arrayDatos.length == 0) {
    containerCards.innerHTML = "<h5 class='display-1 fw-bolder'>There are no matches in your search.</h5>"
    return
  }


  let cards = []

  arrayDatos.forEach(elemento => {

    cards += `<div class="bg-danger row row-cols-1 row-cols-md-3 g-3 p-4 justify-content-around">
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
let tarjetas
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
    console.log(datos)
    tarjetas = datos.events
    showCards(tarjetas)
})
.catch((error)=> console.log(error))
*/



/*
let allData = []


for(let i=0; i< data.events.length; i++){
     data.currentDate > data.events[i].date
        allData.push(data.events[i])
    
}

console.log("All Data: ",allData)

*/