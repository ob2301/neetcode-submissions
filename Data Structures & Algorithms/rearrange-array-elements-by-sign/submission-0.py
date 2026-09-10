class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        pos = []
        neg = []

        iNeg = 0
        iPos = 0

        for num in nums:
            if num < 0:
                neg.append(num)
            else:
                pos.append(num)
        
        res = []

        if not pos:
            return []
        
        res.append(pos[0])
        iPos += 1

        while iPos < len(pos) or iNeg < len(neg):
            if res[len(res) - 1] < 0:
                if iPos < len(pos):
                    res.append(pos[iPos])
                    iPos += 1
                
            else:
                if iNeg < len(neg):
                    res.append(neg[iNeg])
                    iNeg += 1


        return res