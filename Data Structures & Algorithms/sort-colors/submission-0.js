class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])) map.set(nums[i], 1);
            else{
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        let i = 0, x = 0;
        while(x < nums.length && i <= 2){
            while(map.get(i) > 0){
                nums[x] = i;
                x++;
                map.set(i, map.get(i) - 1);
            }
            i++;
        }
        return nums;
    }
}
