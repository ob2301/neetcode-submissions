class Solution:
    def maxTransactions(self, transactions: List[int]) -> int:
        #>0 means money gained
        #<0 means money sent (lost)

        #we can skip any negative transaction

        balance = 0
        minHeap = []
        skipped = 0

        i = 0

        while i < len(transactions):
            if transactions[i] < 0:
                heapq.heappush(minHeap, (transactions[i]))

            balance += transactions[i]

            while balance < 0 and minHeap:
                balance -= heapq.heappop(minHeap)
                skipped += 1

            i += 1
        
        if balance >= 0:
            return len(transactions) - skipped
        
        return 0
        
        
            
        
            
            