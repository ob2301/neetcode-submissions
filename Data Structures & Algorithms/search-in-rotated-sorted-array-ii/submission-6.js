class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {


        function bs(low, high){
            if(low > high) return false;

            const mid = Math.floor((low + high) / 2);

            const m_val = nums[mid];
            const l_val = nums[low];
            const h_val = nums[high];

            if(m_val === target || h_val === target || l_val === target) return true;

            if(l_val === m_val && m_val === h_val) return bs(low + 1, high) || bs(low, high - 1);
            if(target > m_val){
                if(l_val >= h_val){
                    return bs(low, mid - 1);
                }
                else{
                    return bs(mid + 1, high);
                }
            }
            else{
                if(l_val > h_val){
                    return bs(mid + 1, high);
                }
                else{
                    return bs(low, mid - 1);
                }
            }
        }

        return bs(0, nums.length - 1);
    }
}
