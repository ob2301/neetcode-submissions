class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let dummy = -1;
        
        function bs(low, high, emphasis){
            if(low > high) return;

            let middle = Math.floor((low + high) / 2);
            if(nums[middle] === target){
                dummy = middle;
                if(emphasis > 0) bs(middle + 1, high, emphasis);
                else{
                    bs(low, middle - 1, emphasis);
                }
            }

            else if(nums[middle] > target){
                bs(low, middle - 1, emphasis);
            }
            else{
                bs(middle + 1, high, emphasis);
            }
        }

        bs(0, nums.length - 1, -1);
        if(dummy === -1) return [-1, -1];
        let l = dummy;
        dummy = 0;
        bs(0, nums.length - 1, 1);

        return [l, dummy];
    }
    }

