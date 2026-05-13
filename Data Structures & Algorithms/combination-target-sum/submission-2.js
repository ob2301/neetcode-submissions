class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function dfs(i, sub, total){
            if(total === target){
                res.push([...sub]);
                return;
            }
            if(i >= nums.length || total > target) return;

            sub.push(nums[i]);
            dfs(i, sub, total + nums[i]);
            sub.pop();
            dfs(i + 1, sub, total);
        }

        dfs(0, [], 0);
        return res;
    }
}
