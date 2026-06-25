class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        
        stack = []
        res = [0] * len(temperatures)

        for i, temperature in enumerate(temperatures):

            while stack and temperature > stack[-1][0]:
                top_temp, top_i = stack.pop()
                res[top_i] = i - top_i
            

            stack.append((temperature, i))
        return res
