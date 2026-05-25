class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        //top floor is index past last

        let dp = {};

        function dfs(index){
            if(index >= cost.length){
                return 0;
            }

            if(dp[index]) return dp[index];

            dp[index] = cost[index] + Math.min(dfs(index + 1), dfs(index + 2));

            return dp[index];
        }

        return Math.min(dfs(0), dfs(1));
    }
}
