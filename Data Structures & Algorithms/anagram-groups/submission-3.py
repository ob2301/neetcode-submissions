class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagrams = {}

        for s in strs:
            sort = ''.join(sorted(s))
            if sort in anagrams:
                anagrams[sort].append(s)
            else:
                anagrams[sort] = [s]
        
        return list(anagrams.values())