class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let min = new MinPriorityQueue(
            (cord) => cord[0] * cord[0] + cord[1] * cord[1]);

        for(let i = 0; i < points.length; i++){
            min.enqueue(points[i]);
        }

        let res = [];

        while(k > 0){
            res.push(min.dequeue());
            k--;
        }
        return res;
    }
}
