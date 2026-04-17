class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0, R = heights.length - 1, max = 0;

        while(L < R){
            max = Math.max(Math.min(heights[L], heights[R]) * (R - L), max);
//5 t 
            if(heights[L] < heights[R]) L++;

            else{
                R--;
            }
        }

        return max;
    }
}
