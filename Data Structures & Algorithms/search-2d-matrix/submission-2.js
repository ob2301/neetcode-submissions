class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        matrix = matrix.flat(1);

        function bs(low, high){
            if(low > high) return false;

            const mid = Math.floor((low + high) / 2);

            const mi = matrix[mid], li = matrix[low], hi = matrix[high];

            if(mi === target || hi === target || li === target) return true;

            if(mi > target) return bs(low, mid - 1);

            if(mi < target) return bs(mid + 1, high);
        }

        return bs(0, matrix.length - 1);
    }
}
