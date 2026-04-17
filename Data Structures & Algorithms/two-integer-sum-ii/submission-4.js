class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let L = 0, R = numbers.length - 1;

        while(L < R){
            let curSum = numbers[L] + numbers[R];
            if(curSum === target) return [L + 1,R + 1];

            if(curSum > target) R--;
            else{
                L++;
            }
        }
        return [];
    }
}
