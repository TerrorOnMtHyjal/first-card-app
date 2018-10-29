const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server operational on port 8000');
});

app.get('/test', (req, res) => {
    res.send('Working!');
});

app.get('/ebay', (req, res) => {

    const OPERATION_NAME = "findItemsByKeywords";
    const SERVICE_VERSION = "1.0.0";
    const SECURITY_APPNAME = "";
    const GLOBAL_ID = "EBAY-US";
    const RESPONSE_DATA_FORMAT = "JSON";
    const CALLBACK = "_cb_findItemsByKeywords";
    const KEYWORDS = "barbie doll";
    const PAGINATION = "3";

    


    // https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=iPhone&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0
});

app.listen(8000, () => console.log('Listening to port 8000!'));

//yerp