class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let arr = new Array(3).fill(0);

        for(const num of nums){
            arr[num]++;
        }

        let index = 0; //index for nums

        for(let i = 0; i < 3; i++){
            while(arr[i] > 0){
                nums[index++] = i;
                arr[i]--;
            }
        }
    }
}
