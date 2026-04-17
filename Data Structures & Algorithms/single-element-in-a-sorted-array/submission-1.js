class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        //1, 1, 2, 3, 3 , 4, 4, 8, 8
        function bs(low, high){
            if(low === high) return nums[low];
            let middle = Math.floor((low+high)/2);

            if(middle !== nums.length-1 && nums[middle] === nums[middle - 1]) middle--;

            if((high - middle + 1) % 2 !== 0) return bs(middle + 2, high);

            return bs(low, middle - 1);
        }
        return bs(0, nums.length-1);

    }
}
