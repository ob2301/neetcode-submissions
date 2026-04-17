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
            let cur = numbers[L] + numbers[R];

            if(cur === target) return [L+1, R+1];

            if(cur < target) L++;

            else{
                R--;
            }
        }
    }
}
