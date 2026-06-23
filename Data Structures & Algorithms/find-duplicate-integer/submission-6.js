class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
         
        for(const num of nums){
            let inx = Math.abs(num) - 1;

            if(nums[inx] < 0) return Math.abs(num);

            nums[inx] *= -1;
        }
    }
}
