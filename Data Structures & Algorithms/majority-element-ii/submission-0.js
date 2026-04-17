class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
            else{
                map.set(nums[i], 1);
            }
        }
        let res = [];
        for(const [key, value] of map){
            if(value > (nums.length / 3)) res.push(key);
        }
        return res;
    }
}
