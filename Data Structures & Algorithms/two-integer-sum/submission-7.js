class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], i);
        }

        let res = [];

        for(let i = 0; i < nums.length; i++){
            let looking = target - nums[i];

            if(map.has(looking) && i !== map.get(looking)){
                return [i, map.get(looking)];
            }
        }

        return [];
    }
}
