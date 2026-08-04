# The knows API is already defined for you.
# return a bool, whether a knows b
# def knows(a: int, b: int) -> bool:

class Solution:
    def findCelebrity(self, n: int) -> int:
        #one pass, if a knows b, we can eliminate a from race
        #keep track of each person and how many people know them

        candidate = 0

        for i in range(1, n):
            if knows(candidate, i):
                candidate = i

        for i in range(n):
            if i == candidate:
                continue
            if not knows(i, candidate) or knows(candidate, i):
                return -1
            

        return candidate
        


        

