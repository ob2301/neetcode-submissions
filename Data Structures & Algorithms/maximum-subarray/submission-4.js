class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let final = -1001;
        let cur_sum = 0;

        for(let i = 0; i < nums.length; i++){
            cur_sum += nums[i];
            final = Math.max(final, cur_sum);
            cur_sum = Math.max(cur_sum, 0);
        }

        return final;
    }
}
