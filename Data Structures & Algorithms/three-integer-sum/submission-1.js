class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = new Set();
        nums = nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++){
            let L = 0, R = nums.length - 1;
            while(L < R){
                let cur_sum = nums[i], curr_arr = [nums[i]];
                if(L !== i && i !== R && nums[i] + nums[R] + nums[L] === 0){
                    if(!res.has(JSON.stringify([nums[i], nums[R], nums[L]].sort((a,b) => a - b)))){
                        curr_arr.push(nums[L]);
                        curr_arr.push(nums[R]);
                        res.add(JSON.stringify(curr_arr.sort((a,b) => a - b)));
                    }
                }
                if(nums[i] + nums[R] + nums[L] > 0) R--;
                else{
                    L++;
                }
            }
        }
        return [...res].map(x => JSON.parse(x));
    }
}
