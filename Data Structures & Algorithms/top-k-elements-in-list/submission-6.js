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
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1);
            }
            else{
                map.set(nums[i], 1);
            }
        }
        let res = [], localmaxval = 0, localmaxkey = 0;
        while(k > 0){
            localmaxval = 0, localmaxkey = 0;
            for(const [key, value] of map){
                if(value > localmaxval){
                    localmaxkey = key;
                    localmaxval = value;
                }
            }
            res.push(localmaxkey);
            map.delete(localmaxkey);
            k--;
        }
        
        return res;
    }
}
