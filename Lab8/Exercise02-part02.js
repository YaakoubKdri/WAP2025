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

async function testIsPrime() {
    console.log('start');
    
    try {
        const result1 = await isPrimeAsync(7);
        console.log(result1);
    } catch (error) {
        console.error(error);
    }
    
    console.log('end');
    }
    
    testIsPrime();