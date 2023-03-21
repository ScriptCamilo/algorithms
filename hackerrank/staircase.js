// https://www.hackerrank.com/challenges/staircase/problem
/**
 *
 * @param {number} n
 */

function staircase(n) {
  let message = ' '.repeat(n).split('');

  for (let i = n - 1; i >= 0; i--) {
    message[i] = '#'
    console.log(message.join(''))
  }
}

const staircaseSize = 6;

staircase(staircaseSize);
/*
output:
     #
    ##
   ###
  ####
 #####
######
*/
