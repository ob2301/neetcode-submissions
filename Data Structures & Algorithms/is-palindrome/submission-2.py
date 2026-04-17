class Solution:
    def isPalindrome(self, s: str) -> bool:
        L = 0
        R = len(s) - 1

        while(L < R):
            while(not s[L].isalnum() and L < R):
                L+=1
            while(not s[R].isalnum() and R > L):
                R-=1

            if(s[L].lower() == s[R].lower()):
                L+=1
                R-=1
            else:
                return False
        return True