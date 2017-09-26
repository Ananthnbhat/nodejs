const request = require('request');
const yargs = require('yargs');


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Yeshwantapur%20Bangalore',
    json: true
}, (error, response, body) => {

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});