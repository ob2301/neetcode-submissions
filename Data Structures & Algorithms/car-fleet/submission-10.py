class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        arr = []

        for i in range(len(position)):
            arr.append([position[i], speed[i]])

        arr.sort(key=lambda x: x[0], reverse=True)
        #sort by the position

        stack = []

        for pos, speed in arr:
            time = (target - pos) / speed

            stack.append(time)

            while stack and len(stack) >= 2 and stack[len(stack) - 1] <= stack[len(stack) - 2]:
                stack.pop()

        return len(stack)
