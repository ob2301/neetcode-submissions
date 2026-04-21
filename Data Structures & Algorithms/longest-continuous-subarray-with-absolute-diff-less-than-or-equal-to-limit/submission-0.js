class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        //shift() for popleft() logic

        let max = [], min = [];//indicies

        let L = 0, R = 0, maxx = 0;

        while(R < nums.length){
            while(max.length && nums[R] > nums[max[max.length - 1]]){
                max.pop();
            }
            while(min.length && nums[R] < nums[min[min.length - 1]]){
                min.pop();
            }

            max.push(R);
            min.push(R);

            while(nums[max[0]] - nums[min[0]] > limit){
                L++;
                if(max[0] < L) max.shift();
                if(min[0] < L) min.shift();
            }
            maxx = Math.max(maxx, R - L + 1);

            R++;
        }

        return maxx;
    }
}
