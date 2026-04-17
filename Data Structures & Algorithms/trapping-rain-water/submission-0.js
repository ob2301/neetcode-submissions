class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length === 0) return 0;
        let L = 0, R = height.length - 1;

        let l_max = height[L];
        let r_max = height[R];

        let total_water = 0;

        while(L < R){
            if(l_max < r_max){
                L++;
                l_max = Math.max(l_max, height[L]);
                total_water += l_max - height[L];
            }
            else{
                R--;
                r_max = Math.max(height[R], r_max);;
                total_water += r_max - height[R];
            }
        }
        return total_water;
    }
}
