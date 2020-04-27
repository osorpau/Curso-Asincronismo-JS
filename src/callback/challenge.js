let XMLHettpRequest = require('xmlhttprequest').XMLHttpRequest;
const STATE_FINISHED_READY = 4;
const STATUS_OK = 200;

function fetchData(url_api, callback) {
  const xhttp = new XMLHettpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === STATE_FINISHED_READY) {
      if (xhttp.status === STATUS_OK) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }
}