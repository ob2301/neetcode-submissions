class NumArray:

    def __init__(self, nums: List[int]):
        self.arr = nums;
    
    def sumRange(self, left, right):
        su = 0

        i = left

        while i <= right:
            su += self.arr[i]
            i += 1
        
        return su


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)