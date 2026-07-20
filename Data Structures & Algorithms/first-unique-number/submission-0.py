from collections import deque

class FirstUnique:

    def __init__(self, nums: List[int]):
        self.unique_set = set()
        self.unique_q = deque()
        self.dupe = set()

        for value in nums:
            if value not in self.dupe and value not in self.unique_set:
                self.unique_set.add(value)
                self.unique_q.append(value)
            elif value in self.unique_set:
                self.unique_set.remove(value)
                self.unique_q.remove(value)
                self.dupe.add(value)

    def showFirstUnique(self) -> int:
        if not self.unique_q:
            return -1
        return self.unique_q[0]

    def add(self, value: int) -> None:
        if value not in self.dupe and value not in self.unique_set:
            self.unique_set.add(value)
            self.unique_q.append(value)
        elif value in self.unique_set:
            self.unique_set.remove(value)
            self.unique_q.remove(value)
            self.dupe.add(value)


# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)
