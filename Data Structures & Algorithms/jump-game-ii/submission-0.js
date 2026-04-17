class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let L = 0, R = 0, jumps = 0;

        while(R < nums.length - 1){
            let farthest = 0;
            for(let i = L; i <= R; i++)
            {
                farthest = Math.max(farthest, i + nums[i]);
            }
            L = R + 1;
            R = farthest;
            jumps++;
        }
        return jumps;
    }
}
