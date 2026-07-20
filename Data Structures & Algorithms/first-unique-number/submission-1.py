from collections import deque

class FirstUnique:

    def __init__(self, nums: List[int]):
        self.q = deque()
        self.freq = defaultdict(int)

        for num in nums:
            if num not in self.freq:
                self.q.append(num)
            self.freq[num] += 1

    def showFirstUnique(self) -> int:
        while self.q and self.freq[self.q[0]] > 1:
            self.q.popleft()

        if self.q:
            return self.q[0]
        return -1

    def add(self, value: int) -> None:
        if value not in self.freq:
            self.q.append(value)
        self.freq[value] += 1


# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)
