class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map(), res = [];

        let maxHeap = new MaxPriorityQueue(x => x[1]);

        for(const num of nums){
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        for(const [num, fre] of freq){
            maxHeap.enqueue([num, fre]);
        }

        while(k > 0){
            res.push(maxHeap.dequeue()[0]);
            k--;
        }

        return res;
    }
}
