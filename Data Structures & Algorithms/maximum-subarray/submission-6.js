class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -1001;
        let cur = 0;

        for(let i = 0; i < nums.length; i++){
            cur += nums[i];
            max = Math.max(max, cur);
            cur = Math.max(cur, 0);
        }
        return max;
    }
}
