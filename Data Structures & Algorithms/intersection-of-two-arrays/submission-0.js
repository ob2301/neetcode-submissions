class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let nums1s = new Set(nums1);
        let nums2s = new Set(nums2);
        let final_set = new Set();

        let length = Math.min(nums1.length, nums2.length);

        for(let i = 0; i < length; i++){
            let x = nums1[i];
            if(nums1s.has(x) && nums2s.has(x) && !final_set.has(x))
                final_set.add(x);
        }
        return [...final_set];
        }
    }
