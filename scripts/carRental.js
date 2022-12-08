// html elements
const pickupDateElement = document.getElementById('pickupDate');
// console.log(pickupDateElement);
const numDaysElement = document.getElementById('numDays');
// console.log(numDaysElement);
const estimateBtn = document.querySelector('input[type=button]');
// console.log(estimateBtn);

// add button listener
estimateBtn.addEventListener('click', calculateTotal);

let numDays = 0;

function carRentalCharge() {
    // daily rate;
    const dailyRate = 29.99;
    numDays = numDaysElement.value;
    console.log(`number of days renting is ${numDays}`);
    console.log(`total car rental cost is ${dailyRate * numDays}`)
    return Number(dailyRate * numDays);
}

function getSurcharge() {
    let totalSurcharge;
    if (document.getElementById('under25yes').checked) {
        let surchargeAmount = .30;
        totalSurcharge = (carRentalCharge() * surchargeAmount).toFixed(2);
        console.log(`total surcharge is ${totalSurcharge}`);
    } else {
        totalSurcharge = 0;
    }
    return Number(totalSurcharge);
}

function getOptionsCharge() {
    let totalOptionsCharge;
    numDays = numDaysElement.value;
    //value of checkboxes
    let isTollTag = document.getElementById('tollTag').checked;
    console.log(`is Toll Tag checked? ${isTollTag}`);
    let isGPS = document.getElementById('gps').checked;
    console.log(`is GPS checked? ${isGPS}`);
    let isRoadside = document.getElementById('roadside').checked;
    console.log(`is roadside checked? ${isRoadside}`);
    let optionsCharge = 0;
    if (isTollTag) {
        optionsCharge += 3.95;
    }
    if (isGPS) {
        optionsCharge += 2.95;
    }
    if (isRoadside) {
        optionsCharge += 2.95;
    }
    console.log(`additional options cost: ${optionsCharge}`);
    return optionsCharge.toFixed(2);
}

function calculateTotal() {
    console.log('click listener is working');
    let totalDue;
    numDays = numDaysElement.value;
    let totalOptionsCharge;
    let carRental = carRentalCharge();
    let options = getOptionsCharge();
    console.log(options);
    if (options === 0) {
        totalOptionsCharge = 0;
        console.log(totalOptionsCharge)
    } else {
        totalOptionsCharge = Number((options * numDays).toFixed(2));
        console.log(totalOptionsCharge);
    }
    let surcharge = getSurcharge();
    console.log(`car rental cost is ${carRental}`);
    console.log(`options charge is ${totalOptionsCharge}`);
    console.log(`surcharge is ${surcharge}`);
    console.log(carRental, totalOptionsCharge, surcharge);
    totalDue = Number(carRental + totalOptionsCharge + surcharge).toFixed(2);
    console.log(`total due is ${totalDue}`);
}
