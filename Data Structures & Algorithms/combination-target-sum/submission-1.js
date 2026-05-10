class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let res = [];

        function dfs(index, arr, total){
            if(total === target){
                res.push([...arr]);
                return;
            }

            if(total > target || nums.length === index) return;


            arr.push(nums[index]);
            dfs(index, arr, total + nums[index]);
            arr.pop();
            dfs(index + 1, arr, total);
        }

        dfs(0, [], 0);

        return res;
    }
}
