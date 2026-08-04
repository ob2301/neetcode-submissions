class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        least = max(weights) #we cant load more than this
        most = sum(weights)
        newMin = most
        #looking for the least weight capacity, where all packages are shipped within days
        #5.....19

        def getsShipped(capacity: int):
            #check to see if it works
            curCap = 0
            curDays = 1
            for i in range(len(weights)):
                curCap += weights[i]

                if curCap > capacity:
                    curCap = weights[i]
                    curDays += 1
                
                if curDays > days:
                    return False
            return True



        def binarySearch(low, high):
            nonlocal newMin
            if low > high:
                return
            middle = math.floor((low + high) / 2)

            if getsShipped(middle):
                newMin = min(middle, newMin)
                binarySearch(low, middle - 1)
            else:
                binarySearch(middle + 1, high)
        
        binarySearch(least, most)
        return newMin



        

