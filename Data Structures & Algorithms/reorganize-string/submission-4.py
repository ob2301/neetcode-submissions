class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = {}

        for char in s:
            if char in freq:
                freq[char] += 1
            else:
                freq[char] = 1

        maxHeap = []

        for key, value in freq.items():
            heapq.heappush(maxHeap, (-value, key))
        
        res = ""

        while maxHeap:
            occ, letter = heapq.heappop(maxHeap)
            occ = -occ

            if len(res) and res[len(res) - 1] == letter:
                if not maxHeap:
                    return "" #cannot be done
                occ2, letter2 = heapq.heappop(maxHeap)
                occ2 = -occ2
                heapq.heappush(maxHeap, (-occ, letter))

                res = res + letter2

                if occ2 > 1:
                    heapq.heappush(maxHeap, (-(occ2 - 1), letter2))
            else:
                res = res + letter
                if occ > 1:
                    heapq.heappush(maxHeap, (-(occ - 1), letter))
        return res