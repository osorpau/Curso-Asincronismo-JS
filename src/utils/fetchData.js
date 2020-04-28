const { XMLHttpRequest } = require('xmlhttprequest');

//const API = 'https://rickandmortyapi.com/api/character/';
const STATE_FINISHED_READY = 4;
const STATUS_OK = 200;


const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlApi, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === STATE_FINISHED_READY) {
                (xhttp.status === STATUS_OK)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', urlApi))
            }
        })
        xhttp.send();
    })
}


module.exports = fetchData;
