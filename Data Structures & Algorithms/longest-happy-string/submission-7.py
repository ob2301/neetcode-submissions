class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        #always want longest

        maxHeap = []

        if not a == 0: heapq.heappush(maxHeap, (-a, "a"))
        if not b == 0: heapq.heappush(maxHeap, (-b, "b"))
        if not c == 0: heapq.heappush(maxHeap, (-c, "c"))

        res = ""
        streak = 0

        while maxHeap:
            freq, letter = heapq.heappop(maxHeap)
            freq = -freq

            if len(res) and streak == 2 and letter == res[len(res) - 1]:
                if not maxHeap:
                    return res
                nFreq, nLetter = heapq.heappop(maxHeap)
                heapq.heappush(maxHeap,(-freq, letter))

                res = res + nLetter
                nFreq = -nFreq

                if nFreq > 1:
                    heapq.heappush(maxHeap, (-(nFreq - 1), nLetter))
                    streak = 1
                else:
                    streak = 1
            else: #cc
                if len(res) and letter == res[len(res) - 1]:
                    streak += 1
                else:
                    streak = 1

                res = res + letter

                if freq > 1:
                    heapq.heappush(maxHeap, (-(freq - 1), letter))

        return res
                
            


