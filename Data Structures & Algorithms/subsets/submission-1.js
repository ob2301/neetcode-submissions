class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = new Set(), seen = [];

        function dfs(subset, index){
            if(index >= nums.length){
                res.add([...subset]);
                return;
            }

            subset.push(nums[index]);
            dfs(subset, index + 1);
            subset.pop(nums[index]);
            dfs(subset, index + 1);
        }

        dfs(seen, 0);
        return [...res];
    }


}
