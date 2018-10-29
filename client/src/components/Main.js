import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
  componentDidMount() {
    fetch('/ebay')
    .then((res) => {
      return res.json();
    })
    .then(data => console.log(data));

    // const OPERATION_NAME = "findItemsByKeywords";
    // const SERVICE_VERSION = "1.0.0";
    // const SECURITY_APPNAME = "JaredMoh-DeckFind-SBX-af8fe58ca-e5a0cff6";
    // const GLOBAL_ID = "EBAY-US";
    // const RESPONSE_DATA_FORMAT = "JSON";
    // const KEYWORDS = "barbie doll";
    // const PAGINATION = "3";

    // axios({
    //     method: 'get',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //     url: `https://svcs.ebay.com/services/search/FindingService/v1
    //     ?OPERATION-NAME=${OPERATION_NAME}
    //     &SERVICE-VERSION=${SERVICE_VERSION}
    //     &RESPONSE-DATA-FORMAT=${RESPONSE_DATA_FORMAT}
    //     &REST-PAYLOAD&keywords=${KEYWORDS}
    //     &paginationInput.entriesPerPage=${PAGINATION}
    //     &GLOBAL-ID=${GLOBAL_ID}
    //     &siteid=0
    //     &SECURITY-APPNAME=${SECURITY_APPNAME}`,
    //     responseType:'json'
    // })
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
  }

  render() {
    return (
      <h1>HOLA AMIGO MAS</h1>
    );
  }
}