class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let q = new PriorityQueue((a, b) => {
    let da = Math.abs(a - x), db = Math.abs(b - x);
    if (da !== db) return da - db;
    return a - b;            // tie → smaller value first
});

        for(const l of arr){
            q.enqueue(l);
        }

        let res = [];

        while(k > 0){
            res.push(q.dequeue());
            k--;
        }

        return res.sort((a, b) => a - b);
    }
}
