class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        if(!nums) return false;

        let min = nums[0], start = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] < min){
                min = nums[i];
                start = i;
            }
        }

        let i = 0;

        while(i < nums.length - 1){
            if(nums[(i + start) % nums.length] > nums[(i + start + 1) % nums.length]) return false;
            i++;
        }

        return true;
    }
}
