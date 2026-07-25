from collections import deque
import heapq

class Twitter:
    def __init__(self):
        self.tweets = {}
        self.allTweets = deque()
        self.following = {}
        

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId in self.tweets:
            self.tweets[userId].append(tweetId)
        else:
            self.tweets[userId] = []
            self.tweets[userId].append(tweetId)

        self.allTweets.appendleft((tweetId, userId))
        
    def getNewsFeed(self, userId: int) -> List[int]:
        i = 0
        res = []

        while len(res) != 10 and i < len(self.allTweets):
            if userId in self.following and self.allTweets[i][1] in self.following[userId]:
                res.append(self.allTweets[i][0])
                i += 1
            elif self.allTweets[i][1] == userId:
                res.append(self.allTweets[i][0])
                i += 1
            else:
                i += 1
                continue
        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        if not followerId in self.following:
            self.following[followerId] = set()
            self.following[followerId].add(followeeId)
        else:
            self.following[followerId].add(followeeId)
        

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)
        
