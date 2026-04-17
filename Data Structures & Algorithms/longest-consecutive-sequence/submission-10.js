class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        nums.sort((a,b) => a - b);

        nums = [...new Set(nums)];

        let res = 1;

        let L = 0, R = 1;

        while(R < nums.length){
            if(!(nums[R] - 1 === nums[R - 1])){
                L = R;
            }

            R++;

            res = Math.max(res, R - L);
        }

        return res;
    }
}
