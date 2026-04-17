class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    merge(arr, start, mid, end){
        let i = start, j = mid + 1, t = 0;
        let temp = [];

        while(i <= mid && j <= end){
            if(arr[i] < arr[j]){
                temp[t] = arr[i];
                i++;
            }
            else{
                temp[t] = arr[j];
                j++;
            }
            t++;
        }

        while(j <= end){
            temp[t++] = arr[j++]; 
        }
        while(i <= mid){
            temp[t++] = arr[i++];
        }

        for(let i = start; i <= end; i++){
            arr[i] = temp[i - start];
        }
    }
    mergeSort(arr, start, end){
        if(end - start + 1 <= 1) return;

        let mid = Math.floor((start + end)/2);

        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end); //+1 since we floor and round down

        this.merge(arr, start, mid, end);
    }
    sortArray(nums) {
        //treat as merge sort
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }
}
