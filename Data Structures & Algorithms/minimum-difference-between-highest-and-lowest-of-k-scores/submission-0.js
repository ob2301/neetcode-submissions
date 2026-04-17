class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a,b) => a - b);

        let R = k - 1, max = 101001001, L = 0;

        while(R < nums.length){
            max = Math.min(max, nums[R] - nums[L]);
            R++;
            L++;
        }
        return max;
    }
}
