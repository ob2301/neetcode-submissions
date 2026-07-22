class Solution:

    def encode(self, strs: List[str]) -> str:
        st = []

        for s in strs:
            st.append(str(len(s)))
            st.append('#')
            st.append(s)
        return ''.join(st)

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0

        while i < len(s):
            j = i
            r = []
            
            while not s[j] == '#':
                r.append(s[j])
                j = j + 1
            
            r = ''.join(r)

            res.append(s[j + 1: int(r) + j + 1])

            i = j + int(r) + 1
        return res


