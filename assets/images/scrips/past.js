console.log("Current Date: ",data.currentDate)

let pastData = []


for(let i=0; i< data.events.length; i++){
    if (data.currentDate > data.events[i].date){
        pastData.push(data.events[i])
    }
}

console.log("Past Data: ",pastData)




