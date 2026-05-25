class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = {};

        if(!nums) return 0;
        if(nums.length == 1) return nums[0];

        function dfs(index, end){
            if(index > end) return 0;

            if(dp[index]) return dp[index];

            dp[index] = Math.max(nums[index] + dfs(index + 2, end), dfs(index + 1, end));
            return dp[index];
        }
        let first = dfs(0, nums.length - 2);
        dp = {};
        let second = dfs(1, nums.length - 1);

        return Math.max(first, second);
    }
}
