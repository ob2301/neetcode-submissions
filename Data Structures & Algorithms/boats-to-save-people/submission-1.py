class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        
        boats = 0
        cur_weight = 0
        sorted_people = sorted(people)

        L = 0
        R = len(sorted_people) - 1

        while L <= R:
            if sorted_people[R] + sorted_people[L] <= limit:
                L+=1
                R-=1
                boats+=1
            else:
                R-=1
                boats+=1
        
        return boats