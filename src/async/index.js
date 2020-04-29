const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => {
        resolve('Do something Async')
      }, 3000)
      : reject(new Error('Test Error'))
  });
}

//con async
const doSomething = async () => {
  console.log('before');
  const something = await doSomethingAsync();
  console.log(something);
  console.log('after');
}
/*
//sin async
const doSomething = () => {
  console.log('before');
  const something = doSomethingAsync();
  something.then(response => console.log(response))
  console.log('after');
}
*/
doSomething();
/*
asi no funciona
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
  } catch (error) {
    console.error(error);

  }
}

console.log('before 1');
anotherFunction();
console.log('after 1');
*/

//asi si funcion el async await
const anotherFunction = async () => {
  try {
    console.log('before 1');
    const something = await doSomethingAsync();
    console.log(something);
    console.log('after 1');
  } catch (error) {
    console.error(error);

  }
}

anotherFunction();
