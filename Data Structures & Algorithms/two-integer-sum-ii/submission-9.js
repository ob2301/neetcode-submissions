class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //do

        numbers = numbers.sort((a,b) => a - b);

        let L = 0, R = numbers.length - 1;

        while(L < R){
            const sum = numbers[L] + numbers[R];

            if(sum == target) return [L + 1, R + 1];

            if(sum > target) R--;

            if(sum < target) L++;
        }
    }
}
