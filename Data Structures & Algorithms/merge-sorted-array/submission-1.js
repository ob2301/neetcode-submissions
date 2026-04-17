class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let R2 = n - 1, R1 = m - 1, back_pointer = m + n - 1;

        while(R2 >= 0 && R1 >= 0){
            if(nums1[R1] <= nums2[R2]){
                nums1[back_pointer] = nums2[R2];
                R2--;
            }
            else{
                nums1[back_pointer] = nums1[R1];
                R1--;
            }
            back_pointer--;
        }
        while(R2 >= 0){
            nums1[back_pointer--] = nums2[R2--];
        }
    }
}
