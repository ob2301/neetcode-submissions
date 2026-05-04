/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.maxHeap = new MinPriorityQueue();

        for(let i = 0; i < nums.length; i++){
            this.maxHeap.push(nums[i]);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.maxHeap.push(val);
        
        while(this.maxHeap.size() > this.k){
            this.maxHeap.pop();
        }

        return this.maxHeap.front();
    }
}