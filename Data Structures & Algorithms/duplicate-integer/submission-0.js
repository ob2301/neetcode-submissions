class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums_set = new Set();

        for(let i = 0; i < nums.length; i++)
        {
            nums_set.add(nums[i]);
        }

        return nums_set.size !== nums.length;
    }
}
