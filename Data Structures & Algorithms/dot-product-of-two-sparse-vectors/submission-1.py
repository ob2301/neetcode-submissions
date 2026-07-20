class SparseVector:
    def __init__(self, nums: List[int]):
        indices = {}
        for i, num in enumerate(nums):
            if num != 0:
                indices[i] = num
        self.indices = indices

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        product = 0
        for i in self.indices:
            if i in vec.indices:
                product += self.indices[i] * vec.indices[i]
        return product

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)
