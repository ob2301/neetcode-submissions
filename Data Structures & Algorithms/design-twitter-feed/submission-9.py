from collections import deque
import heapq

class Twitter:
    def __init__(self):
        self.tweets = {}
        self.following = {}
        self.post_num = 1

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId in self.tweets:
            self.tweets[userId].appendleft((self.post_num, tweetId))
        else:
            self.tweets[userId] = deque([(self.post_num, tweetId)])

        if userId not in self.following:
            self.following[userId] = set([userId])

        self.post_num += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        if userId not in self.following or len(self.following[userId]) == 0:
            return []

        heap = []
        for person in self.following[userId]:
            if person in self.tweets:
                for post_num, tweet in self.tweets[person]:
                    heapq.heappush(heap, (post_num, tweet))
                
                while len(heap) > 10:
                    heapq.heappop(heap)

        heap.sort(reverse=True)
        ret = []
        for _, tweet in heap:
            ret.append(tweet)
        return ret

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.following:
            self.following[followerId].add(followeeId)
        else:
            self.following[followerId] = set([followerId, followeeId])
        

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.following:
            if followeeId in self.following[followerId] and followerId != followeeId:
                self.following[followerId].remove(followeeId)
        
