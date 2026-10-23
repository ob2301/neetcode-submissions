class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        queue = deque()
        seen = set(deadends)
        queue.append(("0000", 0))

        while queue:
            (num, twists) = queue.popleft()

            if num in seen:
                continue
            
            if num == target:
                return twists

            seen.add(num)

            for i in range(4):
                addOne = (int(num[i]) + 1) % 10
                removeOne = (int(num[i]) + 9) % 10

                newNum1 = num[0:i] + str(addOne) + num[i+1:]
                newNum2 = num[0:i] + str(removeOne) + num[i+1:]

                if not newNum1 in seen:
                    queue.append((newNum1, twists + 1))
                if not newNum2 in seen:
                    queue.append((newNum2, twists + 1))
        return -1

