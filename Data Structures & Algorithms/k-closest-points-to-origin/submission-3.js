class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue(
            (point) => point[0] * point[0] + point[1] * point[1]
        );

        for(let i = 0; i < points.length; i++){
            const dist = Math.sqrt((points[i][0]) * points[i][0] + (points[i][1] * points[i][1]));
            minHeap.enqueue(points[i]);
        }

        let res = [];

        while(k > 0){
            res.push(minHeap.dequeue());
            k--;
        }

        return res;
    }
}
