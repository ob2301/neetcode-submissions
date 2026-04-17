class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    merge(arr, start, mid, end){
        let res = [], i = start, j = mid + 1;

        while(i <= mid && j <= end){
            if(arr[j] < arr[i]) res.push(arr[j++]);
            else{
                res.push(arr[i++]);
            }
        }

        while(i <= mid) res.push(arr[i++]);
        while(j <= end) res.push(arr[j++]);

        for(let x = 0; x < res.length; x++){
            arr[start++] = res[x];
        }
    }

    mergeSort(arr, start, end){
        if(start >= end) return;

        let mid = Math.floor((end + start)/2);

        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end);

        this.merge(arr, start, mid, end);
    }
    findKthLargest(nums, k) {
        //practice merge sort

        this.mergeSort(nums, 0, nums.length - 1);
        //console.log(...nums);

        return nums[nums.length - k];
    }
}
