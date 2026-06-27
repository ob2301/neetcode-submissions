class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        
        l = 0
        mp = defaultdict(int)
        max_char = ' '

        longest = -1

        for r, char in enumerate(s):
            
            mp[char] += 1
            window_len = r - l + 1

            if mp[char] >= mp[max_char]:
                max_char = char

            if window_len - mp[max_char] <= k:
                longest = max(longest, window_len)
            else:
                mp[s[l]] -= 1
                l += 1
        
        return longest
        



       

            
