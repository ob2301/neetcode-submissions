class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [], cur = [];

        function dfs(arr, start, subset, final){
            if(start >= arr.length){
                final.push([...subset]);
                return;
            }

            subset.push(arr[start]);
            dfs(arr, start + 1, subset, final);
            subset.pop();
            dfs(arr, start + 1, subset, final);
        }
        dfs(nums, 0, cur, res);
        return res;
    }


}
