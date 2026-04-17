class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map((x) => x * x).sort((a,b) => a - b);
    }
}
