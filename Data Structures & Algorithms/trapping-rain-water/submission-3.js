class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       //try in morning
       let L = 0, R = height.length - 1;
       let max_left = height[L], max_right = height[R];
       let res = 0;

       while(L < R){
        if(max_left < max_right){
            L++;
            max_left = Math.max(max_left, height[L]);
            res += (max_left - height[L]);
        }
        else{
            R--;
            max_right = Math.max(max_right, height[R]);
            res += (max_right - height[R]);
        }
       }
       return res;
    }
}
