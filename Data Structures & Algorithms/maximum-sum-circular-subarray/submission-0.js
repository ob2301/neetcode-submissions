class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalMax = nums[0];
        let curMax = 0;

        let globalMin = nums[0];
        let curMin = 0;

        let total = 0;

        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            curMax = Math.max(curMax + num, num);
            curMin = Math.min(curMin + num, num);
            total += num;
            globalMax = Math.max(globalMax, curMax);
            globalMin = Math.min(globalMin, curMin);

        }
        
        if(globalMax > 0) return Math.max(globalMax, total - globalMin);
        return globalMax;
    }
}
