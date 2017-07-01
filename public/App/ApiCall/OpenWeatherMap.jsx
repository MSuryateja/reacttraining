var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=75994ebbb093aadb5efab21309425cf4&units=imperial";

module.exports = {
    getTemp: function(location){
        var encLoc = encodeURIComponent(location);
        var reqUrl = `${OPEN_WEATHER_MAP_URL}&q=${encLoc}`;

        return axios.get(reqUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                console.log(res);
                return res.data;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}