class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let stack = [];

        for(let i = 0; i < nums.length; i++){
            stack.push([nums[i], i]);
        }

        stack = stack.sort((a, b) => a[0] - b[0]); //pri queue
        //6 4 2 2 1 1 0

        let L = 0, R = k, res = [];

        while(R <= nums.length){
            let number = search(L, R);

            res.push(number);
            L++;
            R++;
        }

        function search(left, right){
            for(let i = stack.length - 1; i >= 0; i--){
                if(stack[i][1] >= left && stack[i][1] < right){
                    return stack[i][0];
                }
            }
        }

        return res;
    }
}
