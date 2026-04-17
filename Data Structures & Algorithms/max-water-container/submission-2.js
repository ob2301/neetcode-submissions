class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0, R = heights.length - 1, area = 0;

        while(L < R){
            let smaller = heights[L] < heights[R] ? heights[L] : heights[R];

            let cur_area = smaller * (R - L);

            if(cur_area > area){
                area = cur_area;
            }
            
            if(heights[L] < heights[R]) L++;
            else{
                R--;
            }
        }
        return area;
    }
}
