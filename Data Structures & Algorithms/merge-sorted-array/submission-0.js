class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let L = m - 1, R = m + n - 1;
        let x = 0;

        for(let i = m; i < nums1.length; i++){
            nums1[i] = nums2[x];
            x++;
        }
        console.log(...nums1);

        while(L < nums1.length && R >= m){
            if(nums1[R] < nums1[L]){
                let R2 = R;
                while(nums1[R2] < nums1[L] && L >= 0){
                    let temp = nums1[R2];
                    nums1[R2] = nums1[L];
                    nums1[L] = temp;
                    R2 = L;
                    L--;
                }
            }
            R--;
            L = m - 1;
        }
    }
}
