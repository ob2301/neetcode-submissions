class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        //reeedo
        nums.sort((a,b) => a - b);
        let res = new Set(), sub = [];
        dfs(nums, 0, sub);

        function dfs(arr, i, sub){
            if(i >= arr.length){
                res.add(JSON.stringify(sub));
                return;
            }

            sub.push(arr[i]);
            dfs(arr, i + 1, sub);
            sub.pop();
            dfs(arr, i + 1, sub);
        }

        return [...res].map((arr) => JSON.parse(arr));
    }
}
