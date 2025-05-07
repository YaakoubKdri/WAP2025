'use strict'
const isPrimeAsync = (n) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        if (n <= 1) {
          reject({ prime: false });
          return;
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
          if (n % i === 0) {
            reject({ prime: false });
            return;
          }
        }
        resolve({ prime: true });
      }, 0); 
    });
  };
  console.log('start');
  isPrimeAsync(7)
    .then(console.log)
    .catch(console.error);
  console.log('end');
  
  isPrimeAsync(10) //not prime
    .then(console.log)
    .catch(console.error);