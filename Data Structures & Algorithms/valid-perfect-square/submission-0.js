class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {

        function bs(low, high){
            if(low > high) return false;
            let middle = Math.floor((low + high) / 2);

            if(middle * middle === num) return true;

            if(middle * middle > num) return bs(0, middle - 1);

            if(middle * middle < num) return bs(middle + 1, high);
        }
        return bs(0, num) ? true : false;
    }
}
