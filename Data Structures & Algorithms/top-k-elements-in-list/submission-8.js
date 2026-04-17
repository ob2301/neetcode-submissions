class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //do
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);

            else{
                map.set(nums[i], 1);
            }
        }

        return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);        
    }
}
