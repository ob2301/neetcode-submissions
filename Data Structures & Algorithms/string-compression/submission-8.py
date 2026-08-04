class Solution:
    def compress(self, chars: List[str]) -> int:
        resIndex = 0
        i = 0
        if len(chars) == 1:
            return 1

        while i < len(chars) and resIndex < len(chars):
            curChar = chars[i]

            digit = 1
            while i < len(chars) - 1 and curChar == chars[i + 1]:
                i += 1
                digit += 1
            
            chars[resIndex] = curChar
            resIndex += 1
            i += 1

            if digit > 1:
                digit = str(digit)
                digitIndex = 0
                while digitIndex < len(digit) and resIndex < len(chars):
                    chars[resIndex] = digit[digitIndex]
                    digitIndex += 1
                    resIndex += 1
          


        return resIndex