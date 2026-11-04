class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        #1, 2, 4, 7
        #1, 8, 11, 12, 13
        #1, 1, 2, 4, 7, 8, 11, 12, 13 length == 8, 
        #between 4 and 7

        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        n, m = len(nums1), len(nums2)

        l, r = 0, n

        while l <= r:
            half = (n + m) // 2
            mid1 = (l + r) // 2
            mid2 = half - mid1

            if mid1 > 0:
                left1 = nums1[mid1 - 1]
            else:
                left1 = -float('inf')
            if mid2 > 0:
                left2 = nums2[mid2 - 1]
            else:
                left2 = -float('inf')
            if mid1 < n:
                right1 = nums1[mid1]
            else:
                right1 = float('inf')
            if mid2 < m:
                right2 = nums2[mid2]
            else:
                right2 = float('inf')
            
            if left1 <= right2 and left2 <= right1:
                if (n + m) % 2 == 0:
                    return (min(right1, right2) + max(left1, left2)) / 2
                else:
                    return min(right1, right2)
            if left1 > right2:
                #need more from second arr and less from first
                r = mid1 - 1
            else:
                l = mid1 + 1




