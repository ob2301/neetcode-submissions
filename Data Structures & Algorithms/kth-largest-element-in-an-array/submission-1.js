class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        //practice merge sort

        let minHeap = new MaxPriorityQueue();

        for(const n of nums){
            minHeap.enqueue(n);
        }

        while(k > 1){
            minHeap.dequeue();
            k--;
        }

        return minHeap.dequeue();
    }
}
