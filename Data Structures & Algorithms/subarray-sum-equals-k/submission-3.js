class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let pre_map = new Map();
        pre_map.set(0, 1);
        let pre = 0, count = 0;

        for(let i = 0; i < nums.length; i++){
                pre+=nums[i];
                if(pre_map.has(pre - k) && pre_map.get(pre - k) > 0){
                count+=pre_map.get(pre - k);
                //pre_map.set(pre[i] - k, pre_map.get(pre[i] - k) - 1);
            }
                if(pre_map.has(pre)) pre_map.set(pre, pre_map.get(pre) + 1);
                else{
                    pre_map.set(pre, 1);
                }
                //if(pre === k) count++;
            
            
            
        }
        //console.log(pre);

    return count;
    }
}
