class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = 1001, curSum = 0;
        let L = 0;

        for(let R = 0; R < nums.length; R++){
            curSum += nums[R];
            while(curSum >= target){
                length = Math.min(length, R - L + 1);
                curSum -= nums[L];
                L++;
            }
            
            
        }

        return length === 1001 ? 0:length;
    }
}
