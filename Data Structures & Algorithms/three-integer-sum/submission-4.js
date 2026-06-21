class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = new Set();

        for(let i = 0; i < nums.length; i++){
            let L = i + 1, R = nums.length - 1;

            while(L < R){
                if(R === i) R--;
                let total = nums[i] + nums[L] + nums[R];

                if(total === 0){
                    res.add(JSON.stringify([nums[i], nums[L], nums[R]].sort((a, b) => a - b)));
                }
                
                if(total > 0) R--;

                else{
                    L++;
                }
            }
        }
        return [...res].map((x) => JSON.parse(x));
    }
}
