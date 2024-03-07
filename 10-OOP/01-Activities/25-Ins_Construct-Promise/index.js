// function 'wait()' is scaled to return a new promise
const whateverYouWant = () =>
  new Promise((resolve, reject) => {
    // a timeout of 3 seconds is initialized
    setTimeout(() => {
      // after 3 seconds a random number is generated
      const randNum = Math.floor(Math.random() * 100);
      // if the random number is even the 'resolve()' sends data through to the '.then()' of the promise
      if (randNum % 2 === 0) {
        resolve(`Success! Even number ${randNum} generated`);
        // if the random number is odd the 'reject()' sends data through to the the '.catch()' of the promise
      } else {
        // reject(new Error(`Oops! Odd number ${randNum} generated`));
        reject(`Oops! Odd number ${randNum} generated`);
      }
    }, 1000);
  });

// execution of the 'wait()' function promise
whateverYouWant()
  .then((res) => console.log("my res:", res))
  .catch((err) => console.log("my err:", err));

  // then <=> resolve
  // catch <=> reject
