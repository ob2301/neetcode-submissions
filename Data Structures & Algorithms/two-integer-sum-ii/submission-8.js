class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //do

        let L = 0, R = numbers.length - 1;

        while(L < R){
            const [left, right] = [numbers[L], numbers[R]];

            if(left + right === target) return [L + 1, R + 1];

            if(left + right < target) L++;

            if(left + right > target) R--;
        }

        return [];
    }
}
