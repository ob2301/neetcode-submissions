class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
         
        for(const c of nums){
            const indx = Math.abs(c) - 1
            if(nums[indx] < 0) return Math.abs(c);

            nums[indx] *= (-1);
        }
    }
}
