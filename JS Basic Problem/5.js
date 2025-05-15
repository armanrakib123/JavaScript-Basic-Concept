function waitingTime(waitingTimes,  serialNumber){
    if(typeof serialNumber!="number"){
        return "Invalid Input";
    }
    if(Array.waitingTimes){
        return "Invalid Input";
    }

    let array=waitingTimes;
    let sum = 0;

    for(let i=0; i < array.length; i++){
    sum += array[i];
    }
    const averagetime = Math.round(sum / array.length);
    const serialNo= serialNumber-1; 
    const ishrat_serial= serialNo-array.length;
    const ishrat_waitingTime=averagetime*ishrat_serial;


    return ishrat_waitingTime;
    
}
const result=waitingTime([], 6);
console.log(result);