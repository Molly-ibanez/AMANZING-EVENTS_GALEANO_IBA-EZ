let tarjetas;
const obtenerTarjetas = async () =>{
    try{
        const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        
        tarjetas = await respuesta.json()
        let attendance = tarjetas.events.map(events => events.assistance)
        console.log(attendance);

        console.log(tarjetas.events);

    }
    catch(error){
        console.log(error);
        alert('Error')
    }
}
obtenerTarjetas()


/*

function highestAttendance (){
    let highestAttendance = attendance.map(events => events.assistance > attendance)
    console.log(highestAttendance);
}

*/



