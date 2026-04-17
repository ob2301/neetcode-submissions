class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []

        pair = []

        for i in range(len(position)):
            pair.append([position[i], speed[i]])

        pair.sort(reverse=True)

        for p, s in pair:
            stack.append((target - p) / s)

            if len(stack) > 1 and stack[len(stack) - 1] <= stack[len(stack) - 2]:
                stack.pop()

        return len(stack)