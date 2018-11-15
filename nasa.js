let year = "2018"
let month = "11"
let day = "14"
let key = "eS6qfDZDKtwmh83Q5oGPjIyiUL3so4NOGVV2ixSH"
let solarSearch = "https://api.nasa.gov/DONKI/FLR?startDate=" + year + '-' + month + '-' + day + "&endDate=" + year + '-' + month + '-' + day + "&api_key=" + key;
let geoSearch = "https://api.nasa.gov/DONKI/GST?startDate" + year + '-' + month + '-' + day + "&endDate=" + year + '-' + month + '-' + day + "&api_key=" + key;


  //https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY


// https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY


const request = require('request');

request(solarSearch, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});