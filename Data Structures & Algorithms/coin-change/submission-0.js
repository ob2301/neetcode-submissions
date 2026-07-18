class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        let dp = {};

        function dfs(remaining){

            if(remaining == 0) return 0;
            if(dp[remaining] !== undefined) return dp[remaining];

            let res = Infinity;

            for (const coin of coins){
                if(remaining - coin >= 0) res =  Math.min(1 + dfs(remaining - coin), res);
            }

            dp[remaining] = res;

            return res;
        }

        let min = dfs(amount);

        if(min === Infinity) return -1;
        return min;
    }
}
