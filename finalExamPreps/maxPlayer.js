"use strict";

/* write a function, maxPoints, to find and return the maximum points of any single player.  */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 7, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 4:",  maxPoints(players));

/**
 * 
 * @param {Array} playerArr arr of players
 * @returns {Object} player 
 */
function maxPoints(playerArr) {
    let maxPoints = 0;

    for (const player of playerArr) {
        const playerPts = player.points.reduce( (total, item) => total + item, 0); //or write helper to get total or inner loop
        if (playerPts > maxPoints) {
            maxPoints = playerPts;
        }
    }
    return maxPoints;
}





//
"use strict";
/* write a function, maxPoints, to find and return the maximum points of any single player.  */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 4:",  maxPoints(players));
// /**
//  * 
//  * @param {array} playerArr is array of players
//  * @returns {number}max points of all players
//  */
// function maxPoints(playerArr){
//     let max = 0;
//     for (const player of playerArr){
//         const playerPoints = sumArr(player.points);
//         if (playerPoints > max){
//             max = playerPoints;
//         }
//     }
//     return max;
// }

// /* eslint-disable */
// function sumArr(arr){
//   let tot = 0;
//   for (const num of arr){
//       tot += num;
//   }
//   return tot;
// }