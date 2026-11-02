class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:

        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2)

        #we basically binary search on smaller array

        #nums1 = [1, 3, 4]
        #nums2 = [0, 2, 6, 9]
        #together = [0, 1, 2, 3, 4, 6, 9] -> median == 3.5
        #total length == 8, we need indicies 3 and 4
        #if we start middle of nums1, we max on Left, and Min on RIght

        l, r = 0, m

        while l <= r:
            fromNums1 = (l + r) // 2
            fromNums2 = ((m + n + 1) // 2) - fromNums1

            if fromNums1 > 0:
                left1 = nums1[fromNums1 - 1]
            else:
                left1 = -float('inf')
            if fromNums2 > 0:
                left2 = nums2[fromNums2 - 1]
            else:
                left2 = -float('inf')
            if fromNums1 < m:
                right1 = nums1[fromNums1]
            else:
                right1 = float('inf')
            if fromNums2 < n:
                right2 = nums2[fromNums2]
            else:
                right2 = float('inf')

            if left1 <= right2 and left2 <= right1:
                if (m + n) % 2 != 0:
                    return max(left1, left2)
                else:
                    return (max(left1, left2) + min(right1, right2)) / 2
            
            if left1 > right2:
                r = fromNums1 - 1
            else:
                l = fromNums1 + 1
        

