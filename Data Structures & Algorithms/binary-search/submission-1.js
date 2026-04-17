class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;

        function bs(low, high){
            if(low >= high) return nums[low] === target ? low:-1;
            let middle = Math.floor((low + high)/2);
            if(nums[middle] === target)return middle;
            else{
                if(nums[middle] > target)
                    return bs(low, middle - 1);
                else
                    return bs(middle + 1, high);
            }
        }
        return bs(low, high);
    }
}
