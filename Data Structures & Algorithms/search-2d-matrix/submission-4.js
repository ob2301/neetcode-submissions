class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        function bs(low, high, arr){
            if(low > high) return false;

            const mid = Math.floor((low + high) / 2);

            const [mi, li, hi] = [arr[mid], arr[low], arr[high]];

            if(mi === target || hi === target || li === target) return true;

            if(mi > target) return bs(low, mid - 1, arr);

            else{
                return bs(mid + 1, high, arr);
            }
        }
        const n = matrix[0].length;

        for(let r = 0; r < matrix.length; r++){
            if(target <= matrix[r][n - 1]){
                return bs(0, n - 1, matrix[r]);
            }
        }
        return false;
    }
}
