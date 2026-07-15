class Solution:
    def compress(self, chars: List[str]) -> int:
        l, r = 0, 0
        i = 0

        while r < len(chars):
            while r < len(chars) - 1 and chars[r] == chars[r + 1]:
                r += 1

            chars[i] = chars[r]
            i += 1
            if r - l + 1 > 1:
                num = str(r - l + 1)
                for j in range(len(num)):
                    chars[i] = num[j]
                    i += 1
            r += 1
            l = r

            
        return i
