class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let remainder = new Map(), total = 0;

        for(let i = 0; i < nums.length; i++){
            total += nums[i];

            let r = (total % k);

            if(i > 0 && r == 0) return true;

            if(remainder.has(r)){
                if(i - remainder.get(r) > 1) return true;
            }
            else{
                remainder.set(r, i);
            }
        }
        return false;
    }
}
