class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordDict = set(wordDict)
        dp = [False] * len(s)
        dp.append(True)

        dp[len(s) - 1] = True if s[len(s) - 1] in wordDict else False

        for i in range(len(s) - 2, -1, -1):
            for j in range(i+1, len(s) + 1):
                if s[i:j] in wordDict and dp[j]:
                    dp[i] = True

        return dp[0]

