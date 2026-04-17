class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     removeDuplicates(nums) {
        const unique = [...new Set(nums)]; // deduplicate

  // overwrite nums in place
  nums.splice(0, nums.length, ...unique);

  return unique.length;
}

}
