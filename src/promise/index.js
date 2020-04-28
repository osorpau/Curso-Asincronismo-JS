const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey 1!');
        } else {
            reject('whoooops 1!!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True 2')
            }, 2000);
        } else {
            const error = new Error('Whooops 2!!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));



Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Arrays of results(si hay error no muestra ningun resultado) ', response))
    .catch(err => console.error('solo muestra el error donde sucedio', err)
    );
