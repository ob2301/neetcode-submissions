class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
       if(arr.length < k) return 0;

       let total = 0;
       let count = 0;
       for(let i = 0; i < k - 1; i++){
        total += arr[i];
       }

       for(let i = k - 1; i < arr.length; i++){
        total += arr[i];

        if(total/k >= threshold) count++;

        total = total - arr[i - k + 1];
       }
       return count;
    }
}
