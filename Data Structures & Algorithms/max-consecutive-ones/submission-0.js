class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0, curmax = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1) curmax += 1;
            else{
                curmax = 0;
            }
                        max = Math.max(curmax, max);

        }
        return max;
    }
}
