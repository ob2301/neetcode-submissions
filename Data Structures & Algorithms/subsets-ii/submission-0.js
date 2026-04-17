class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a - b);
        let res = new Set();
        dfs(nums, 0, []);

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
        return [...res].map((i) => JSON.parse(i));
    }
}
