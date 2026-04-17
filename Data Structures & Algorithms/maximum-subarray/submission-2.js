class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length === 0) return null;
        if(nums.length === 1) return nums[0];

        let maxSum = -1001;
        let curSum = -1001;

        for(let i = 0; i < nums.length; i++){
            curSum = Math.max(curSum, 0);
            curSum += nums[i];
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }
}
