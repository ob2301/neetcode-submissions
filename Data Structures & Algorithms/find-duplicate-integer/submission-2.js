class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
         let fast = 0, slow = 0;

         while(true){
            slow = nums[slow];//treating as pointers, so the value of slow always points to another value in nums since nums i is always in 1,n, and length = n+1
            fast = nums[nums[fast]];
            if(slow === fast){
                break;
            }
         }
         let slow2 = 0;
         while(slow !== slow2){
            slow = nums[slow];
            slow2 = nums[slow2];
            if(slow === slow2){
                break;
            }
         }

         
         return slow;
    }
}
