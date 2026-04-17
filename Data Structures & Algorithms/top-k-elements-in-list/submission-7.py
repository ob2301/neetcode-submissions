class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        adj = {}

        for i in nums:
            if i in adj:
                adj[i] += 1
            else:
                adj[i] = 1
        # now we have our list of elements

        res = []

        while k > 0:
            curMax = 0
            maxKey = 0

            for key in adj:
                if adj[key] > curMax:
                    curMax = adj[key]
                    maxKey = key
            res.append(maxKey)
            adj.pop(maxKey)
            k-=1
        return res