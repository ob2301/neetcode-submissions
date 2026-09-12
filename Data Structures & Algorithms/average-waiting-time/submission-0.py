class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        time = customers[0][0]
        totalWaits = 0

        for i in range(len(customers)):
            curTime, wait = customers[i]
            if time < curTime:
                time = curTime
            
            time += wait

            totalWaits += (time - curTime)
        
        return (totalWaits / len(customers))

