class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        minHeap = []
        count = 0
        cache = {}

        for h in hand:
            if h in cache:
                cache[h] += 1
            else:
                cache[h] = 1

            heapq.heappush(minHeap, (h, count))
            count += 1

        while minHeap:
            val, _ = heapq.heappop(minHeap)

            if not val in cache:
                continue

            if cache[val] == 1:
                del cache[val]
            else:
                cache[val] -= 1

            size = 1

# 1 2 4 2 3 5 3 4
# 2: 1, 3: 1, 4: 1, 5: 1

            while size < groupSize:
                if val + 1 in cache:
                    if cache[val + 1] == 1:
                        del cache[val + 1]
                    else:
                        cache[val + 1] -= 1
                    val += 1
                else:
                    return False

                size += 1

        return True

            


        