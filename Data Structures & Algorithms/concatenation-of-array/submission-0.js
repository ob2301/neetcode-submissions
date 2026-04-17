class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = [...nums];
        arr[nums.length] = [...nums];
        return arr;
    }
}
