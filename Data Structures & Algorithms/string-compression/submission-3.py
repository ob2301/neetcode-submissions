class Solution:
    def compress(self, chars: List[str]) -> int:
        s = ""

        l = 0
        write = 0

        while l < len(chars) and write < len(chars):
            length = 1

            cur = chars[l]

            while l < len(chars) - 1 and cur == chars[l + 1]:
                length += 1
                l += 1

            if length == 1:
                chars[write] = cur
                write += 1
            else:
                chars[write] = cur
                write += 1
                for digit in str(length):
                    chars[write] = digit
                    write += 1
            l += 1
        
        return write
