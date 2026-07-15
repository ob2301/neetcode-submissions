class WordDistance:

    def __init__(self, wordsDict: List[str]):
        self.words = {}
        for i, word in enumerate(wordsDict):
            if word in self.words:
                self.words[word].append(i)
            else:
                self.words[word] = [i]

    def shortest(self, word1: str, word2: str) -> int:
        word1_arr = self.words[word1]
        word2_arr = self.words[word2]
        res = float("inf")

        l, r = 0, 0
        while l < len(word1_arr) and r < len(word2_arr):
            res = min(res, abs(word1_arr[l] - word2_arr[r]))
            if word1_arr[l] < word2_arr[r]:
                l += 1
            else:
                r += 1
        
        return res




# Your WordDistance object will be instantiated and called as such:
# obj = WordDistance(wordsDict)
# param_1 = obj.shortest(word1,word2)
