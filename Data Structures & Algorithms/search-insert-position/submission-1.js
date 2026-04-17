class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {

        function bs(low, high){
            if(low > high){
                if(target > nums[nums.length-1]) return nums.length;
                else{
                    return 0;
                }
            }
            let middle = Math.floor((low+high)/2);

            if(nums[middle] === target) return middle;

            if(target > nums[middle] && target < nums[middle + 1]) return middle + 1;

            if(target < nums[middle] && target > nums[middle - 1]) return middle;

            if(target > nums[middle]) return bs(middle + 1, high);

            if(target < nums[middle]) return bs(0, middle - 1);
        }
        return bs(0, nums.length - 1);
    }
}
