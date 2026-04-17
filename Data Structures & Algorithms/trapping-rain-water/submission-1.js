class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       //try in morning
       let L = 0, R = height.length - 1;
       let left = height[L], right = height[R];
       let res = 0;

       while(L < R){
        if(left < right){
            L++;
            left = Math.max(height[L], left);
            res += left - height[L];
        }
        else{
            R--;
            right = Math.max(height[R], right);
            res += right - height[R];
        }
       }
       return res;
    }
}
