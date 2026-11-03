class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        #1, 2, 3
        #2, 6, 9, 11

        #1, 2, 2, 3, 4, 6, 9, 11 median = 3, length = 8
        #we start at 2 in arr 1, so thats 2 elements from arr 2 which is 2, 6
        #we compare, 2 is less than 6, but 6 is not less than 3
        #so we need more from the first array
        #we turn our arr1 pointer to half - len(n) - arr1pointer

        #1, 2
        #2, 6, 9
        #here we start at 1 and 2, 6. we compare 1 is less than 6 and 
        #but 6 is not less than 2, so we need more from top
        
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        n, m = len(nums1), len(nums2)

        l, r = 0, n

        while l <= r:
            mid1 = (l + r) // 2
            mid2 = ((n + m) // 2) - mid1

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
                if (n + m) % 2 != 0:
                    return min(right1, right2)
                else:
                    return (min(right1, right2) + max(left1, left2)) / 2
            
            if left1 > right2:
                #need more of the second array
                r = mid1 - 1
            else:
                #need more of the first array
                l = mid1 + 1
