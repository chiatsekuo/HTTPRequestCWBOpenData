const dotenv = require('dotenv').config()
const request = require('request');
const cron = require('node-cron');
const moment = require('moment');

var options = {
  'method': 'GET',
  'url': 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=' + process.env.WEATHER_AUTHORIZATION,
  'headers': {
  },
  'json':true
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body.records.locations[0].location[0].locationName);
  console.log(response.body.records.locations[0].location[0].weatherElement);
});