class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = {};

        function dfs(index){
            if(index >= nums.length) return 0;
            if(dp[index]) return dp[index];

            dp[index] = Math.max(dfs(index + 1), nums[index] + dfs(index + 2));
            return dp[index];
        }

        return dfs(0);
    }
}
