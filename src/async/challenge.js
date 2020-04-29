const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (urlApi) => {
  try {
    console.log('before');
    const data = await fetchData(urlApi);
    const character = await fetchData(`${urlApi}${data.results[0].id}`);    
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
    console.log('after');
  } catch (err) {
    console.error(err);
  }
};

anotherFunction(API);
