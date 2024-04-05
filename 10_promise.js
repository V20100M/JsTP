
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
};
console.log("start");
sleep().then((à => console.log("finito")));

module.exports = {sleep};