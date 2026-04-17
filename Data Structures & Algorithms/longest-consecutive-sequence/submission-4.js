class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Set(nums);
        let arr = [...map].sort((a,b) => a - b);
        if(nums.length === 0) return 0;

        let count = 1, cur = 1;

        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] + 1 === arr[i+1]){
                cur++;
                count = Math.max(count, cur);
            }
            else{
                cur = 1;
            }
        }
        return count;
    }
}
