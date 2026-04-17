class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map(), max = 0, maxK = 0;

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
            else{
                map.set(nums[i], 1);
            }
        }
        
        for(const[key, value] of map.entries()){
            if(value > max){
                max = Math.max(max, value);
            maxK = key;
            }
        }
        return maxK;
    }
}
