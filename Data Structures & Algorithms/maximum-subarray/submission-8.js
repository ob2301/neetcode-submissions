class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length === 1) return nums[0];

        let cur = 0, max = -Infinity;

        let L = 0, R = 0;

        while(R < nums.length){
            cur += nums[R];

            max = Math.max(max, cur);

            while(cur < 0){
                cur -= nums[L];
                L++;
            }

            R++;
        }

        return max;
    }
}
