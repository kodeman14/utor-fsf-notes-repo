// 1. Using arrays
const songs = ["Bad Guy", "The Wheels on the Bus", "Friday"];

// for (const value of valuesArr) {
//   // do whatever you want
// }

// for (const song of songs) {
//   console.log(song.length);
// }

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log("\n================================================\n");

// 2. Using multidimensional arrays
const moreSongs = [
  ["Bad Guy", 1],
  ["The Wheels on the Bus", 2],
  ["Friday", 3],
];

const otherSongs = [
  {
    name: "Bad Guy",
    position: 1,
  },
  {
    name: "The Wheels on the Bus",
    position: 2,
  },
  {
    name: "Friday",
    position: 3,
  },
];

// for of loop
// for (const song of moreSongs) {
//   console.log(`${song[0]}'s chart position is ${song[1]}`);
// }

for (const song of otherSongs) {
  console.log(`${song.name}'s chart position is ${song.position}`);
}

console.log("BREAK\n");

otherSongs.forEach((song, index) => {
  console.log(`${song.name}'s chart position is ${song.position} :[${index}]`);
});

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
