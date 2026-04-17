class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        for(let i = 0; i < arr.length - 1; i++){
            let cur_max = arr[i+1];
            for(let j = i + 1; j < arr.length; j++){
                cur_max = Math.max(cur_max, arr[j]);
            }
            arr[i] = cur_max;
        }
        arr[arr.length-1] = -1;
        return arr;
    }
}
