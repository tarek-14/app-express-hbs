const request = require("request")
const forecast = (longtitude, latitude, callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=45e083b25f2d4ab89ed230855242707&q=" + longtitude + "," + latitude
    request({ url, json: true }, (error, response) => {
        // json : true ====>  JSON.parse()           json >>>>> object
        if (error) {
            callback("unable to connct weather api service", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, response.body.location.name + " it is " + response.body.current.condition.text + " and temperature : "+ response.body.current.temp_c)
        }
    })
}
module.exports = forecast