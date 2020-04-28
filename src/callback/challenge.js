const { XMLHttpRequest } = require('xmlhttprequest');

const API = 'https://rickandmortyapi.com/api/character';
const STATE_FINISHED_READY = 4;
const STATUS_OK = 200;

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    
    if (xhttp.readyState === STATE_FINISHED_READY) {
      console.log(xhttp);
      if (xhttp.status === STATUS_OK) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${urlApi}`);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.log(error1);
  console.log(data1)
});

// fetchData(API, function (error1, data1) {
//   if (error1) return console.error(error1, 'error1');
//   fetchData(API + data1.result[0].id, function (error2, data2) {
//     if (error2) return console.error(error2, 'error2');
//     fetchData(data2.origin.url, function (error3, data3) {
//       if (error3) return console.error(error3, 'error3');
//       console.log(data1.info.count);
//       console.log(data2.name);
//       console.log(data3.dimension);
//     })
//   })
// })
