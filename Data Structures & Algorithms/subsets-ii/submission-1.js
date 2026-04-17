class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a - b);
        let res = new Set();
        dfs(nums, 0, []);
        
        function dfs(arr, i, set){
            if(i >= arr.length){
                res.add(JSON.stringify(set))
                return;
            }

            set.push(arr[i]);
            dfs(arr, i + 1, set);
            set.pop();
            dfs(arr, i + 1, set);
        }

        return [...res].map((i) => JSON.parse(i));
    }
}
