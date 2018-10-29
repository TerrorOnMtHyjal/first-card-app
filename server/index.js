require('dotenv').config();
const express = require('express');
let httpRequest = require("https");
const axios = require('axios');
const eBay = require('ebay-node-api');
const app = express();

// app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Server operational on port 8000');
});

app.get('/test', (req, res) => {
    res.send('Working!');
});

app.post('/ebay', (req, res) => {
    const apiFriendlyQuery = req.body.query.split(' ').join('+');
    const OPERATION_NAME = "findItemsByKeywords";
    const SERVICE_VERSION = "1.13.0";
    const SECURITY_APPNAME = process.env.EBAY_APP_ID;
    const GLOBAL_ID = "EBAY-US";
    const RESPONSE_DATA_FORMAT = "JSON";
    const KEYWORDS = apiFriendlyQuery;
    const PAGINATION = "3";

    axios({
        method: 'get',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: "",
        url: `https://svcs.ebay.com/services/search/FindingService/v1`+
        `?SECURITY-APPNAME=${SECURITY_APPNAME}`+
        `&OPERATION-NAME=${OPERATION_NAME}`+
        `&SERVICE-VERSION=${SERVICE_VERSION}`+
        `&RESPONSE-DATA-FORMAT=${RESPONSE_DATA_FORMAT}`+
        `&keywords=${KEYWORDS}`+
        `&GLOBAL-ID=EBAY-US`,
        responseType:'json'
    })
    .then(result => {
        console.log(result.data);
        res.send(result.data);
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(8000, () => console.log('Listening to port 8000!'));
