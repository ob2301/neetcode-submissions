class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        mp = {}

        for i, num in enumerate(nums):
            
            if num not in mp:
                mp[num] = i
            else:
                if i - mp[num] <=k:
                    return True
                else:
                    mp[num] = i


        return False
                    
