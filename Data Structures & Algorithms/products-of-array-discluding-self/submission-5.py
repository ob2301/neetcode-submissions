class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        pre = []
        post = []

        # 3 4 5 6
        # 120 90 72 60

        # pre 1 1 2 8 48
        # post 1 6 24 48 48

        pre.append(1)
        post.append(1)

        for i in range(len(nums)):
            pre.append(pre[i] * nums[i])
            post.append(post[i] * nums[len(nums) - 1 - i])
        
        res = []

        for i in range(len(pre) - 1):
            res.append(pre[i] * post[len(post) - 2 - i])

        return res

        