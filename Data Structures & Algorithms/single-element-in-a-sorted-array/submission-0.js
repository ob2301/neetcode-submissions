class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {

        function bs(low, high){
            if(low === high) return nums[low];

            let middle = Math.floor((low+high)/2);

            if(middle % 2 === 1) middle-=1;

            if(nums[middle] === nums[middle + 1]) return bs(middle + 2, high);

            return bs(0, middle);
        }
        return bs(0, nums.length - 1);
    }
}
