let bandNumber = 0;

const takeNumber = function(bandName) {
    bandNumber++;
    console.log(bandNumber, bandName);
}

const beatles = takeNumber("Beatles");

const stones = takeNumber("Rolling Stones");

const acdc = takeNumber("AC-DC");

const barnie = takeNumber("Barnie and Friends");