class Solution:
    def numKLenSubstrNoRepeats(self, s: str, k: int) -> int:
        freq = {}
        count = 0

        l, r = 0, 0

        while l < len(s) and r < len(s):
            while (s[r] in freq or len(freq) == k) and l <= r:
                del freq[s[l]]
                l += 1
            
            freq[s[r]] = 1
            if len(freq) == k:
                count += 1
            
            r += 1
        
        return count


        