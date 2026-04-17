class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let pre_sum = [0];
        for(let i = 0; i < nums.length; i++){
            pre_sum.push(pre_sum[i] + nums[i]);
        }

        for(let i = 0; i < nums.length; i++){
            let right = pre_sum[nums.length] - pre_sum[i + 1];
            let left = 0;
            if(i > 0) 
                left = pre_sum[i + 1] - nums[i];

            if(right === left)
                return i;
        }
        return -1;
    }
}
