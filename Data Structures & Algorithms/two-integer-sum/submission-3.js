class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = [];

        for(let r = 0; r < nums.length; r++)
        {
            for(let c = r + 1; c < nums.length; c++)
            {
                if(nums[r] + nums[c] === target){
                    arr[0] = r;
                    arr[1] = c;
            }
            }
        }
        return arr;
    }
}
