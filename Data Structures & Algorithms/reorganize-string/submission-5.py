class Solution:
    def reorganizeString(self, s: str) -> str:
        #maxheap, push most freq

        freq = {}

        for character in s:
            if character not in freq:
                freq[character] = 0
            
            freq[character] += 1

        maxHeap = []

        for character, fr in freq.items():
            heapq.heappush(maxHeap, (-fr, character))
        
        res = ""

        while maxHeap:
            fr, curChar = heapq.heappop(maxHeap)

            fr = -fr

            if not res:
                res += curChar
                if fr > 1:
                    heapq.heappush(maxHeap, (-(fr - 1), curChar))
            elif curChar == res[len(res) - 1]:
                if not maxHeap:
                    return "" #invalid
                newFr, newCurChar = heapq.heappop(maxHeap)
                newFr = -newFr
                res += newCurChar
                heapq.heappush(maxHeap, (-fr, curChar))
                if newFr > 1:
                    newFr -= 1
                    heapq.heappush(maxHeap, (-newFr, newCurChar))
            else:
                res += curChar

                if fr > 1:
                    fr -= 1
                    heapq.heappush(maxHeap, (-fr, curChar))
        
        return res
        