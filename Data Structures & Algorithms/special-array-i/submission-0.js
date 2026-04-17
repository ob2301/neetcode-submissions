class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length === 1) return true;

        let L = 0, R = 1;

        while(R < nums.length){
            //if first odd
            if(nums[L] % 2 !== 0){
                if(nums[R] % 2 !== 0) return false;
            }
            else{
                if(nums[R] % 2 === 0) return false;
            }
            console.log(nums[L]);
            R++;
            L++;
        }

        return true;
    }
}
