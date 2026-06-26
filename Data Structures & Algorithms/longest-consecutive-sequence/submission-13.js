class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums) return 0;

        let longest = 0, l=0;

        let seen = new Set();
        let min = nums[0], max = nums[0];

        for(let i = 0; i < nums.length; i++){
            seen.add(nums[i]);
            min = Math.min(nums[i], min);
            max = Math.max(nums[i], max);
        }

        for(let i = min; i <= max; i++){
            if(seen.has(i)){
                l++;
            }
            else{
                l = 0;
            }

            longest = Math.max(l, longest);
        }
        return longest;
    }
}
