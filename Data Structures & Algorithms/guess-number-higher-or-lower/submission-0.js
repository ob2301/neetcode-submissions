/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {

        let low = 1, high = n;

        function bs(low, high){
            let middle = Math.floor((low + high) / 2);
            let g = guess(middle);

            if(g === 0) return middle;
            if(g === 1){
                return bs(middle + 1, high);
            }
            if(g === -1){
                return bs(low, middle - 1);
            }
        }
        return bs(low, high);
    }
}
