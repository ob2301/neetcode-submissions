# The knows API is already defined for you.
# return a bool, whether a knows b
# def knows(a: int, b: int) -> bool:

class Solution:
    def findCelebrity(self, n: int) -> int:
        #make a map of each person and everyone that knows them 
        #return the largest values key pair

        knowledgeMap = {}
        know = {}

        for i in range(n):
            j = i
            a = i
            while j < n:
                if j == i:
                    j += 1
                    continue
                b = j
                if knows(a, b) == 1:
                    know[a] = b
                    if b in knowledgeMap:
                        knowledgeMap[b].append(a)
                    else:
                        knowledgeMap[b] = [a]
                
                if knows(b, a) == 1:
                    know[b] = a
                    if a in knowledgeMap:
                        knowledgeMap[a].append(b)
                    else:
                        knowledgeMap[a] = [b]
                j += 1
        celeberty = 0
        fans = 0
        for key, value in knowledgeMap.items():
            if len(value) > fans:
                fans = len(value)
                celeberty = key
        if not fans == n - 1 or celeberty in know:
            return -1
        return celeberty

