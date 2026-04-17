class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0, R = heights.length - 1;

        let max = 0;

        while(L < R){
            let lower = 0, low = 0;

            if(heights[L] < heights[R]){
                max = Math.max(max, heights[L] * (R - L));
                L++;
            }
            else{
                max = Math.max(max, heights[R] * (R - L));
                R--;
            }
        }
        return max;
    }
}
