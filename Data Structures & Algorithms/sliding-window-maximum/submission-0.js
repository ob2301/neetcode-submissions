class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let stack = [];

        for(let i = 0; i < nums.length; i++){
            stack.push([nums[i], i]); //val, index
        }

        stack.sort((a, b) => a[0] - b[0]);//sort it smallest to largest[stack.length - 1]

        let L = 0, R = k - 1, res = [];

        while(R < nums.length){
            const val = search_stack(L, R);
            //console.log(val)
            res.push(val);
            L++;
            R++;
        }

        function search_stack(start, finish){
            for(let i = stack.length - 1; i >= 0; i--){
                if(stack[i][1] >= start && stack[i][1] <= finish){
                    return stack[i][0];
                }
            }
        }

        return res;
    }
}
