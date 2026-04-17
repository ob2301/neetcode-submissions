/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    merge(arr, start, mid, end){
        let f = start, e = mid + 1;//since mid always rounded down
        let res = [];
        while(f <= mid && e <= end){
            if(arr[f].key <= arr[e].key){
                res.push(arr[f++]);
            }
            else{
                res.push(arr[e++]);
            }
        }
        while(f <= mid) res.push(arr[f++]);
        while(e <= end) res.push(arr[e++]);

        for(let i = 0; i < res.length; i++){
            arr[start++] = res[i];
        }
    }
    mergeSort(pairs) {
        this.merging(pairs, 0, pairs.length - 1);
        return pairs;
    }

    merging(arr, start, end){
        if(end-start + 1 <= 1){
            return;
        }
        let mid = Math.floor((start+end)/2);
        this.merging(arr, start, mid);
        this.merging(arr, mid + 1, end);

        this.merge(arr, start, mid, end);
        //return arr;
    }
}
