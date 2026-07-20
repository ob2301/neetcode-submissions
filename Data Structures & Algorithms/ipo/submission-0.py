import heapq

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        available = []
        not_available = []

        for p, c in zip(profits, capital):
            if c <= w:
                available.append(-(p))
            else:
                not_available.append((c, p))

        heapq.heapify(available)
        heapq.heapify(not_available)

        while available and k > 0:
            new_profit = -heapq.heappop(available)
            w += new_profit
            k -= 1

            while not_available and not_available[0][0] <= w:
                c, p = heapq.heappop(not_available)
                heapq.heappush(available, -(p))

        return w