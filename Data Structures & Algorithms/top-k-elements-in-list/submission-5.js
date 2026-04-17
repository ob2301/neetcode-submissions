class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        nums = nums.sort((a,b) => a - b);
        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])) map.set(nums[i], 1);
            else{
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        //mapped each num to its occurance amount
        let arr = [];


        for(let i = 0; i < k; i++){
            let max = -1, key1 = Infinity;
            for(const [key, value] of map){
                if(value > max){
                    max = Math.max(value, max);
                    key1 = key;
                }
            }
            arr.push(key1);
            map.delete(key1);
        }
        return arr;
    }
}
