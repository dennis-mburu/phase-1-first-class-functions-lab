// Code your solution in this file!

const returnFirstTwoDrivers = function(array1) {
    return array1.slice(0,2)
}

const returnLastTwoDrivers = function(array2){
    return array2.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return int*fare
    }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array3, funct){
    if (funct === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array3)
    } 
    return returnLastTwoDrivers(array3)
}











// const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
//     return drivers.slice(0, 2);
// }
// const returnFirstTwoDriver = (drivers) => drivers.slice(0,2);

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const returnFirstTwoDriver = function (driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']){
//     let drivers2 = [...driversArray];
//     return drivers2.splice(0,2);
// }


  
// returnFirstTwoDriver(drivers)

