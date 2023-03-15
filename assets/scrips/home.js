console.log("Current Date: ",data.currentDate)
console.log([document])


const contenedorChecks = document.getElementById('checkContainer')
const containerCards = document.getElementById('elements')
const input = document.querySelector('input')


// Eventos

//Antes
/* input.addEventListener('input',()=>{
    let arrayFiltrado1 = filtrarPorTexto(people, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
})

contenedorChecks.addEventListener('change',()=>{
    let arrayFiltrado1 = filtrarPorTexto(people, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
}) */

//Despues

input.addEventListener('input',superFiltro)

contenedorChecks.addEventListener('change',superFiltro)

// Llamadas de funciones

/*
pintarTarjetas(people)
crearCheckboxes(people)
*/

crearCheckboxes(data.events)
showCards(data.events,containerCards)


// Funciones

function superFiltro(){
    let arrayFiltrado1 = filtrarPorTexto(data.events, input.value)
    let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1)
    showCards(arrayFiltrado2)
}

function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarPorCategoria(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    console.log(arrayChecks);
    let checksChecked = arrayChecks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return arrayInfo
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
    console.log(arrayFiltrado);
    return arrayFiltrado
}

function crearCheckboxes(arrayInfo){
  let checks = ''
  let checkboxCategory = data.events.map (events => events.category)
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

function showCards(arrayDatos,container){
 /* if(arrayDatos.length == 0){
    containerCards.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
    return
}*/
  let cards = []

  arrayDatos.forEach(elemento => {

    cards +=  `<div class="card" style="width: 20rem;">
    <img src="${elemento.image}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${elemento.name}</h5>
      <p class="card-text">${elemento.description}</p>
      <p class="card-text">$${elemento.price}</p>
      <a href="./details.html?id=${elemento._id}">Details</a>
    </div>
  </div>`
  })
  
  containerCards.innerHTML = cards
  
}




//CODIGO VIEJO
/*
let allData = []


for(let i=0; i< data.events.length; i++){
     data.currentDate > data.events[i].date
        allData.push(data.events[i])
    
}

console.log("All Data: ",allData)

*/