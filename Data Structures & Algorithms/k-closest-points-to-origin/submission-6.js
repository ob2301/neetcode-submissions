class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let q = new MinPriorityQueue((p) => p[0]);

        for(let i = 0; i < points.length; i++){
            let dist = Math.sqrt((points[i][0] * points[i][0]) + (points[i][1] * points[i][1]));
            q.enqueue([dist, points[i][0], points[i][1]]);
        }

        let res = [];

        for(let i = 0; i < k; i++){
            let x = q.dequeue();
            res.push([x[1],x[2]]);
        }

        return res;
    }
}
