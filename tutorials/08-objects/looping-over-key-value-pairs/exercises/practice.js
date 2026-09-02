/**** LOOPING OVER KEY/VALUE PAIRS: PRACTICE ****/

/*
    Practice mapping over object dictionary sets using structural loop 
    extractors to generate data reports.
*/

/** EXERCISE 1: THE COMMS STATION CHECK **/

const stationPingsMs = {
	tychoStation: 42,
	ceresStation: 185,
	baseCidonia: 310,
};

for (let stationKey in stationPingsMs) {
    let stationPing = stationPingsMs[stationKey]
    console.log(`Connection to ${stationKey} latency is: ${stationPing}`)
}

/*
    TODO: Use a 'for...in' loop to iterate through the 'stationPingsMs' object.
    Log a network diagnostic statement for each entry using a template literal:
    "Connection to [stationKey] latency is: [ping value]ms."
*/

/** EXERCISE 2: WEAPONS INVENTORY VERIFICATION **/

const pdcAmmoLocker = {
	bayOneRails: 400,
	bayTwoRails: 150,
	bridgeDefenses: 0,
};

/*
    TODO: Use 'Object.keys()' to extract an array of all keys from 'pdcAmmoLocker'.
    Iterate over that keys array using a 'for...of' loop.
    Inside the loop, check if the value of that key equals 0. If it does, 
    log an emergency update using a template literal: "CRITICAL DEPLETION: [key] ammo 
    is completely empty!"
*/

for (let ammoKey of Object.keys(pdcAmmoLocker)) {
    if (pdcAmmoLocker[ammoKey] === 0) {
        console.log(`CRITICAL DEPLETION: ${ammoKey} ammo is completely empty!`);
    }
}