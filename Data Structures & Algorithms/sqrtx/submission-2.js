class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        function bs(low, high){
            let middle = Math.floor((low+high)/2);

            if(middle * middle === x) return middle;

            if(middle * middle > x && (middle - 1) * (middle - 1) < x) return middle - 1;

            if(middle * middle > x) return bs(0, middle - 1);

            if(middle * middle < x) return bs(middle + 1, high);
        }
        return bs(0, x);
    }
}
