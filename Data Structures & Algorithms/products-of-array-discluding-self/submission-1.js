class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        function p_sum(up_to){
            let sum = 1;
            for(let i = 0; i < nums.length; i++){
                if(i === up_to) break;
                sum *= nums[i];
            }
            return sum;
        }

        function p_s_sum(down_to){
            let sum = 1;
            for(let i = nums.length - 1; i >= 0; i--){
                if(i === down_to) break;
                sum *= nums[i];
            }
            return sum;
        }

        let res = [];

        for(let i = 0; i < nums.length; i++){
            const sum = p_sum(i) * p_s_sum(i);
            res.push(sum);
        }
        return res;
    }
}
