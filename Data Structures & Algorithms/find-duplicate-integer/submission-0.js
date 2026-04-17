class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let num = new Set();
        for(let i = 0; i < nums.length; i++){
            if(num.has(nums[i])) return nums[i];
            num.add(nums[i]);
        }
        return 0;
    }
}
