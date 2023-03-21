let cards;
const obtenerTarjetas = async () => {
    try {
        const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        cards = await respuesta.json()

        //console.log(cards.events);
        let pastFilter = cards.events.filter(events => cards.currentDate > events.date)
        highestAttendance(pastFilter, table1)
        lowestAttendance(pastFilter, table2)
        maxCapacity(pastFilter, table3)
        let upcomingFilter = cards.events.filter(events => cards.currentDate < events.date)
        categoryUpcoming(upcomingFilter, table4)
        categoryPast(pastFilter, table5)

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

const table1 = document.getElementById("table 1")
const table2 = document.getElementById("table 2")
const table3 = document.getElementById("table 3")
const table4 = document.getElementById("table 4")
const table5 = document.getElementById("table 5")


//FUNCIONES


function highestAttendance(arrayDatos, container) {
    let attendance = arrayDatos.map(events => (events.assistance * 100 / events.capacity))

    console.log(attendance)

    let max = attendance.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);

    console.log(max)

    let obj = {
        name: "",
        assistance: 0,

    };



    arrayDatos.map(element => {
        let aux = (element.assistance * 100) / element.capacity
        if (aux >= max) {
            obj.name = element.name
            obj.assistance = ((element.assistance * 100) / element.capacity).toFixed(2)
            console.log(obj.assistance)
        }
        return obj
    })

    table1.innerHTML = obj.name + ":  (" + obj.assistance + " %) "

}


function lowestAttendance(arrayDatos, container) {
    let attendance = arrayDatos.map(events => (events.assistance * 100 / events.capacity))

    console.log(attendance)

    let min = attendance.reduce(function (a, b) {
        return Math.min(a, b);
    }, +Infinity);

    console.log(min)

    let obj = {
        name: "",
        assistance: 0,
    };

    arrayDatos.map(element => {
        let aux = (element.assistance * 100) / element.capacity
        if (aux <= min) {
            obj.name = element.name
            obj.assistance = ((element.assistance * 100) / element.capacity).toFixed(2)
            console.log(obj.assistance)
        }
        return obj
    })

    table2.innerHTML = obj.name + ": (" + obj.assistance + " %)"

}

function maxCapacity(arrayDatos, container) {
    let capacity = arrayDatos.map(events => events.capacity)

    console.log(capacity)

    let max = capacity.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);

    console.log(max)

    let obj = {
        name: "",
        capacity: 0,
    };

    let events = arrayDatos.map(element => {
        if (element.capacity >= max) {
            obj.name = element.name
            obj.capacity = element.capacity
            console.log(obj.capacity)
        }
        return obj
    })

    table3.innerHTML = obj.name + ":  (" + obj.capacity + ") "
}


function categoryUpcoming(arrayDatos, container) {
    let statisticsUpcomig = []
    let category = arrayDatos.map(events => events.category)
    console.log(category)

    let categorySinRepetir = new Set(category.sort((a, b) => {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    }))

    console.log(categorySinRepetir)

    let categorySinRepetir1 = Array.from(categorySinRepetir)
    console.log(categorySinRepetir1)

    categorySinRepetir1.map(element => {
        obj = {}
        let name;
        let assistance = 0;
        let result = 0;
        let cont = 0;
        let deposit = 0;

        let upcomingFilter = cards.events.filter(events => cards.currentDate < events.date)
        upcomingFilter.filter(x => {

            if (x.category == element) {
                name = x.category
                deposit += x.estimate * x.price
                assistance += ((x.estimate * 100) / x.capacity)
                cont += 1
            }

        })
        result = assistance / cont
        obj.name = name
        obj.revenue = deposit
        obj.assistance = result.toFixed(2)
        console.log(obj)

        statisticsUpcomig +=`  
      <tr class="d-flex">
        <td >${obj.name}</td>
        <td >${obj.revenue}</td>
        <td >${obj.assistance}%</td>
      </tr>`
    })


    table4.innerHTML = statisticsUpcomig
}


function categoryPast(arrayDatos, container) {
    let statistics = []
    let category = arrayDatos.map(events => events.category)
    console.log(category)

    let categorySinRepetir = new Set(category.sort((a, b) => {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    }))

    console.log(categorySinRepetir)

    let categorySinRepetir1 = Array.from(categorySinRepetir)
    console.log(categorySinRepetir1)

    categorySinRepetir1.map(element => {
        obj = {}
        let name;
        let assistance = 0;
        let result = 0;
        let cont = 0;
        let deposit = 0;

        let pastFilter = cards.events.filter(events => cards.currentDate > events.date)
        pastFilter.filter(x => {

            if (x.category == element) {
                name = x.category
                deposit += x.assistance * x.price
                assistance += ((x.assistance * 100) / x.capacity)
                cont += 1
            }

        })
        result = assistance / cont
        obj.name = name
        obj.revenue = deposit
        obj.assistance = result.toFixed(2)
        console.log(obj)

        statistics +=`  
        <tr >
          <td >${obj.name}</td>
          <td >${obj.revenue}</td>
          <td >${obj.assistance}%</td>
          
        </tr>
        `
    })


    table5.innerHTML = statistics
}






