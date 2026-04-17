class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function bs(low, high){
            if(low > high) return -1;

            let middle = Math.floor((low+high)/2);

            if(nums[middle] === target) return middle;
            if(nums[high] === target) return high;
            if(nums[low] === target) return low;

            if(nums[low] > target && nums[high] > target){
                if(nums[middle] > target && nums[middle] < nums[low]) return bs(low, middle - 1);
                else{
                    return bs(middle + 1, high);
                }
                
            }

            if(nums[low] < target && nums[high] < target){
                if(nums[middle] < target && nums[middle] > nums[low]) return bs(middle + 1, high);
                else{
                    return bs(low, middle - 1);
                }
                
            }

            if(nums[high] > target){
                if(nums[low] > target){
                    if(nums[middle] > target) return bs(middle + 1, high);
                    else{
                        return bs(low, middle - 1);
                    }
                }
            }
            if(nums[low] > target){
                if(nums[high] > target){
                    if(nums[middle] < target) return bs(low, middle -1);
                }
                else{
                    return bs(middle + 1, high);
                }
            }
            
                return -1;
            }
            return bs(0, nums.length - 1);
    }
        
        
}
