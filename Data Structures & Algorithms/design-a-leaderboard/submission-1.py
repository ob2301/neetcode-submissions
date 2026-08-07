import heapq

class Leaderboard:

    def __init__(self):
        self.scoreBoard = {}
        self.maxHeap = []

    def addScore(self, playerId: int, score: int) -> None:
        if not playerId in self.scoreBoard:
            self.scoreBoard[playerId] = score
        else:
            self.scoreBoard[playerId] += score
        
        heapq.heappush(self.maxHeap, (-self.scoreBoard[playerId], playerId))
        #(score, playerId)
            
    def top(self, K: int) -> int:
        total = 0
        cooldown = []
        while self.maxHeap and K:
            (score, playerId) = heapq.heappop(self.maxHeap)
            score = -score
            if playerId in self.scoreBoard and self.scoreBoard[playerId] == score:
                cooldown.append((-score, playerId))
                total += score
                K -= 1
        
        while cooldown:
            heapq.heappush(self.maxHeap, (heapq.heappop(cooldown)))
        return total

    def reset(self, playerId: int) -> None:
        del self.scoreBoard[playerId]



# Your Leaderboard object will be instantiated and called as such:
# obj = Leaderboard()
# obj.addScore(playerId,score)
# param_2 = obj.top(K)
# obj.reset(playerId)
