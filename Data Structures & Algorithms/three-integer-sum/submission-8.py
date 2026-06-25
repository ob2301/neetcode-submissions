class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        res = []
        seen = set()
        for i, target in enumerate(nums):
            
            left = i + 1
            right = len(nums) - 1
   



            while left < len(nums) and left != right:
                sum = nums[left] + nums[right]
                lst = [target, nums[left], nums[right]]
                hsh = tuple(lst)
                if sum == -target and hsh not in seen :
                    res.append(lst)
                    seen.add(hsh)
                    left += 1
                elif sum > -target:
                    right -= 1
                else:
                    left += 1
        return res


            