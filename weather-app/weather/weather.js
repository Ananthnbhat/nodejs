const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/2d59cdf2068c280a48789b21e4bec5a1/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;