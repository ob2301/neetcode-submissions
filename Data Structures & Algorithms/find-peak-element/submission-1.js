class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {

        function bs(left, right){
            if(left >= right) return right;
            let mid = Math.floor((left+right)/2);

            let val = nums[mid];

            if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1] || (mid === 0 && nums[mid] > nums[mid + 1]) || (mid === nums.length - 1 && nums[mid] > nums[mid - 1])) return mid;

            if(nums[mid] < nums[mid + 1]) return bs(mid + 1, right);

            if(nums[mid]) return bs(left, mid - 1);

        }
        return bs(0, nums.length - 1);
    }
}
