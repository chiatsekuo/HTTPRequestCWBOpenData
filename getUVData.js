const dotenv = require('dotenv').config()
const request = require('request');
const cron = require('node-cron');
const moment = require('moment');


const getUVInfoJob = {};
getUVInfoJob.updateUVDataJob = cron.schedule(process.env.CRON_GET_UV_INFO_JOB, () => {
    getUVInfoJob.updateUVData();
}, {
    scheduled: true
});

getUVInfoJob.updateUVData = () => {
    var options = {
        'method': 'GET',
        'url': 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization=' + process.env.WEATHER_AUTHORIZATION,
        'json':true
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log('Data retrieved at:', moment.utc().toISOString());
        console.log(response.body.records.weatherElement.location);
      });
};