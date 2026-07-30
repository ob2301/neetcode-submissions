class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        low = max(weights)
        high = sum(weights)
        #mid is 15
        res = 0

        def feasible(capacity):
            d = 1
            curC = 0
            #cap = 1, 6, add day and 4, 8, add day and 2, 5
            for i in range(len(weights)):
                if curC + weights[i] > capacity:
                    d += 1
                    curC = weights[i]
                else:
                    curC += weights[i]

            if d <= days:
                return True
            else:
                return False

        def binarySearch(low, high):
            nonlocal res
            if low > high:
                return

            mid = math.floor((low + high) / 2)

            if feasible(mid):
                res = mid
                binarySearch(low, mid - 1)
            
            else:
                binarySearch(mid + 1, high)
        
        binarySearch(low, high)
        return res
        

