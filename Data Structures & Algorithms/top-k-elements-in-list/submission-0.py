class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        returnlist = {}

        for num in nums:
            if num in returnlist:
                returnlist[num] += 1
            else:
                returnlist[num] = 1;
        
        i = k
        arr = [];
        while(i > 0):
            max_key = max(returnlist, key = lambda x: returnlist[x])
            arr.append(max_key)
            returnlist.pop(max_key)
            i-=1

        return arr