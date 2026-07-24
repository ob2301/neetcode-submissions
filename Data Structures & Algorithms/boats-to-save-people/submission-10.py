class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        boats = 0

        l = 0
        r = len(people) - 1
        people.sort()

        while l <= r:
            total = people[l] + people[r]

            if total <= limit:
                boats += 1
                l += 1
                r -= 1
            
            else:
                boats += 1
                r -= 1
                
        return boats