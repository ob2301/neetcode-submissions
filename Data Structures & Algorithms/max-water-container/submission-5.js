class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;

        let L = 0, R = heights.length - 1;

        while(L < R){
            let vol = R - L;
            if(heights[L] < heights[R]){
                vol *= heights[L];
                area = Math.max(area, vol);
                L++;
            }
            else if(heights[L] > heights[R]){
                vol *= heights[R];
                area = Math.max(area, vol);
                R--;
            }
            else{
                vol *= heights[R];
                area = Math.max(area, vol);
                R--;
                L++;
            }
        }

        return area;
    }
}
