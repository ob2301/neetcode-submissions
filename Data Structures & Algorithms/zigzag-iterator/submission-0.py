from collections import deque

class ZigzagIterator:
    def __init__(self, v1: List[int], v2: List[int]):
        q = deque()

        for i in range(max(len(v1), len(v2))):
            if i < len(v1):
                q.append(v1[i])

            if i < len(v2):
                q.append(v2[i])

        self.q = q

    def next(self) -> int:
        return self.q.popleft()

    def hasNext(self) -> bool:
        return len(self.q) > 0

# Your ZigzagIterator object will be instantiated and called as such:
# i, v = ZigzagIterator(v1, v2), []
# while i.hasNext(): v.append(i.next())
