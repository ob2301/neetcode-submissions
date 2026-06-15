class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let L = 0, R = 1;

        if(nums.length < 2) return false;

        let map = new Map(), sum = 0;

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            map.set(i, sum);
        }

        sum = 0;

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            if(sum % k === 0) return true;

            let x = 0; 
            while(x < i){
                if((sum - map.get(x) === 0) && i > (x + 1)) return true;
                if((sum - map.get(x)) > 0 && ((sum - map.get(x)) % k === 0)){
                    if(i > x + 1){
                    return true;
                    }
                }
                x++;
            }
        }
        return false;
    }
}
