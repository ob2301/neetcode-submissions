class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = 1001;
        function bs(low, high){
            if(low > high) return;
            let middle = Math.floor((high + low) / 2);
            min = Math.min(min, nums[middle]);

            if(nums[high] < nums[low]){
                if(nums[middle] >= nums[low]) return bs(middle + 1, high);
                else{
                    return bs(low, middle - 1);
                }
            }
            if(nums[high] > nums[low]){
                if(nums[middle] > nums[low]) return bs(low, middle - 1);
                else{
                    return bs(middle + 1, high);
                }
            }
        }
        bs(0, nums.length-1);
        return min;
    }
}
