class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seen = new Set(), max = nums[0], min = nums[0];

        for(let i = 0; i < nums.length; i++){
            seen.add(nums[i]);
            max = Math.max(nums[i], max);
            min = Math.min(nums[i], min);
        }

        let longest = 0, local = 0;

        for(let i = min; i <= max; i++){
            if(seen.has(i)) local++;
            else{
                local = 0;
            }
            longest = Math.max(local, longest);
        }
        return longest;
    }
}
