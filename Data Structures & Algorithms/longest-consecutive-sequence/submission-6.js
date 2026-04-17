class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        //do

        nums = nums.sort((a,v) => a - v);
        let set = new Set(nums);
        nums = [...set];
        let max = 1, lmax = 1;

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] === (nums[i+1] - 1)){
                lmax++;
            }
            else{
                lmax = 1;
            }
            max = Math.max(max, lmax);
        }
        return max;
    }
}
