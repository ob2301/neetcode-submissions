class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0];

        if(!min) return 0;

        function bs(low, high){
            if(low > high) return;

            const mid = Math.floor((low + high) / 2);

            const [mi, hi, li] = [nums[mid], nums[high], nums[low]];

            min = Math.min(min, mi);
            min = Math.min(min, hi);
            min = Math.min(min, li);

            if(mi < hi && mi > li) return bs(mid + 1, high);

            if(mi > li && mi < hi) return bs(low, mid - 1);

            if(mi > hi && mi > li){
                if(li > hi) return bs(mid + 1, high);
                else{
                    return bs(low, mid - 1);
                }
            }

            if(mi < hi && mi < li){
                if(li > hi) return bs(low, mid - 1);
                else{
                    return bs(mid + 1, high);
                }
            }
        }

        bs(0, nums.length - 1);
        return min;
    }
}
