class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = {};

        function dfs(i){
            if(i >= nums.length) return 0;
            if(dp[i]) return dp[i];

            dp[i] = Math.max(dfs(i + 1), dfs(i + 2) + nums[i]);
            return dp[i];
        }

        return dfs(0);
    }
}
