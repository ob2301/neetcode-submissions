class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let pre_map = new Map(), sum = 0, res = 0;
        pre_map.set(0,1);//key 0, value 1

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            if(pre_map.has(sum - k)){
                res += pre_map.get(sum-k);
            }
            if(pre_map.has(sum)){
                pre_map.set(sum, pre_map.get(sum) + 1);
            }
            else{
                pre_map.set(sum, 1);
            }
        }
        return res;
    }
}
