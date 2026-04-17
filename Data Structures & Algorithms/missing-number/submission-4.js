class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let og = nums.length;
        nums.sort((a, b) => a - b);

        for(let i = 0; i < og; i++){
            if(nums[i] !== i){
                return i;
            }
        }
        return og;
    }
}
