class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let new_matrix = matrix.flat(1);

        function bs(low, high){
            if(low >= high) return new_matrix[low] === target ? true : false;
            let middle = Math.floor((low+high)/2);
            if(new_matrix[middle] === target) return true;

            if(new_matrix[middle] < target)
                    return bs(middle + 1, high);
                else{
                    return bs(low, middle - 1);
                }
        }
        return bs(0, new_matrix.length - 1);
    }
}
