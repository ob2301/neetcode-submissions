class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []

        pairs = []

        for i in range(len(position)):
            pairs.append([position[i], speed[i]])

        pairs.sort(reverse=True)

        for p, s in pairs:
            stack.append((target - p) / s)

            if len(stack) > 1 and stack[len(stack) - 1] <= stack[len(stack) - 2]:
                stack.pop()

        return len(stack)